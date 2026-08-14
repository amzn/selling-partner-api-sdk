#!/usr/bin/env bash
#
# Generate the Selling Partner API SDK for a single target language.
#
# The generator auto-discovers every *.json file under <models-repo>/models
# (recursively) and generates an SDK for each one. Onboarding a new API is
# therefore zero-config: drop the model into the models repo and it is picked
# up automatically.
#
#   * To EXCLUDE a file, add its path (or a glob) to scripts/api-blacklist.txt.
#   * To CUSTOMISE the generated package path (or attach extra generator flags),
#     add a row to scripts/api-overrides.txt. Existing APIs are listed there so
#     their historical paths are preserved.
#   * Everything else gets package names derived from the file name (see
#     scripts/api-overrides.txt for the exact derivation rules).
#
# Usage:
#   scripts/generate-sdk.sh <java|csharp|javascript|php|python>
#
# Run this from the language directory (e.g. ./java, ./csharp, ...) so the
# relative paths used by the OpenAPI generator (templates, config, output)
# resolve the same way they did in the original workflows.
#
# All languages are generated with the openapi-generator-cli wrapper.
# Please ensure beforehand that the cli is available in the command line.
#
# Environment overrides:
#   MODELS_ROOT                Path to the selling-partner-api-models checkout
#                              (default: ../../selling-partner-api-models)
#   DRY_RUN                    When set, print the generator commands instead of running them.

set -euo pipefail

LANGUAGE="${1:-}"
if [[ -z "$LANGUAGE" ]]; then
  echo "Usage: $0 <java|csharp|javascript|php|python>" >&2
  exit 1
fi

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
OVERRIDES_FILE="$SCRIPT_DIR/api-overrides.txt"
BLACKLIST_FILE="$SCRIPT_DIR/api-blacklist.txt"
MODELS_ROOT="${MODELS_ROOT:-../../selling-partner-api-models}"

export OPENAPI_GENERATOR_VERSION="${OPENAPI_GENERATOR_VERSION:-7.9.0}"

if [[ ! -d "$MODELS_ROOT/models" ]]; then
  echo "Models directory not found: $MODELS_ROOT/models" >&2
  exit 1
fi

case "$LANGUAGE" in
  java|csharp|php|javascript|python) ;;
  *) echo "Unknown language: $LANGUAGE" >&2; exit 1 ;;
esac

# Every language is generated through the openapi-generator-cli wrapper.
GENERATOR=(openapi-generator-cli generate)
# Java keeps the historical --generate-alias-as-model behaviour.
[[ "$LANGUAGE" == "java" ]] && GENERATOR+=(--generate-alias-as-model)
TEMPLATE="../templates/$LANGUAGE"

# Strip leading/trailing whitespace.
trim() {
  local s="$1"
  s="${s#"${s%%[![:space:]]*}"}"
  s="${s%"${s##*[![:space:]]}"}"
  printf '%s' "$s"
}

# ---------------------------------------------------------------------------
# Load overrides into parallel arrays (kept bash-3.2 compatible: no assoc arrays).
# ---------------------------------------------------------------------------
ov_model=(); ov_java=(); ov_csharp=(); ov_js=(); ov_py=(); ov_flags=()
if [[ -f "$OVERRIDES_FILE" ]]; then
  while IFS='|' read -r model java csharp js py flags; do
    model="$(trim "$model")"
    [[ -z "$model" || "$model" == \#* ]] && continue
    ov_model+=("$model")
    ov_java+=("$(trim "$java")")
    ov_csharp+=("$(trim "$csharp")")
    ov_js+=("$(trim "$js")")
    ov_py+=("$(trim "$py")")
    ov_flags+=("$(trim "${flags:-}")")
  done < "$OVERRIDES_FILE"
fi

# ---------------------------------------------------------------------------
# Load blacklist glob patterns.
# ---------------------------------------------------------------------------
blacklist=()
if [[ -f "$BLACKLIST_FILE" ]]; then
  while IFS= read -r pattern; do
    pattern="$(trim "$pattern")"
    [[ -z "$pattern" || "$pattern" == \#* ]] && continue
    blacklist+=("$pattern")
  done < "$BLACKLIST_FILE"
fi

is_blacklisted() {
  local rel="$1" pat
  for pat in ${blacklist[@]+"${blacklist[@]}"}; do
    # shellcheck disable=SC2053  (intentional glob match on the pattern)
    [[ "$rel" == $pat ]] && return 0
  done
  return 1
}

# Echo the override array index for a model path, or nothing if not overridden.
override_index() {
  local rel="$1" i
  for i in "${!ov_model[@]}"; do
    if [[ "${ov_model[$i]}" == "$rel" ]]; then
      printf '%s' "$i"
      return 0
    fi
  done
  return 0
}

# camelCase / PascalCase -> snake_case (lower).
to_snake() {
  printf '%s' "$1" | sed -E 's/([a-z0-9])([A-Z])/\1_\2/g' | tr '[:upper:]' '[:lower:]'
}
to_lower() { printf '%s' "$1" | tr '[:upper:]' '[:lower:]'; }
# camelCase -> PascalCase (uppercase the first character, keep the rest).
to_pascal() {
  local s="$1"
  printf '%s%s' "$(printf '%s' "${s:0:1}" | tr '[:lower:]' '[:upper:]')" "${s:1}"
}

# Split a model file's base name into "<name>|<version>".
parse_name_version() {
  local base="$1" name version
  if [[ "$base" =~ ^(.+)[_-]([0-9]{4})-([0-9]{2})-([0-9]{2})$ ]]; then
    name="${BASH_REMATCH[1]}"
    version="v${BASH_REMATCH[2]}_${BASH_REMATCH[3]}_${BASH_REMATCH[4]}"
  elif [[ "$base" =~ ^(.+[a-zA-Z])[vV]([0-9]+)$ ]]; then
    name="${BASH_REMATCH[1]}"
    version="v${BASH_REMATCH[2]}"
  else
    name="$base"
    version="v1"
  fi
  printf '%s|%s' "$name" "$version"
}

# Emit the language-specific package arguments, given the per-language tokens.
package_args() {
  local java_pkg="$1" csharp_pkg="$2" js_pkg="$3" py_pkg="$4"
  case "$LANGUAGE" in
    java)
      printf -- '--additional-properties=modelPackage=software.amazon.spapi.models.%s,apiPackage=software.amazon.spapi.api.%s' \
        "$java_pkg" "$java_pkg"
      ;;
    csharp)
      printf -- '--additional-properties=modelPackage=Model.%s,apiPackage=Api.%s' \
        "$csharp_pkg" "$csharp_pkg"
      ;;
    php)
      # PHP reuses the C# package but with backslash namespace separators.
      # NOTE: openapi-generator-cli shells out to Java and strips one level of
      # backslash-escaping along the way, so backslashes must be doubled here
      # for a single backslash to survive as the actual namespace separator.
      local php_pkg="${csharp_pkg//./\\\\}"
      printf -- '--additional-properties=modelPackage=Model\\\\%s,apiPackage=Api\\\\%s' \
        "$php_pkg" "$php_pkg"
      ;;
    javascript)
      printf -- '--model-package model --api-package api --invoker-package %s' "$js_pkg"
      ;;
    python)
      printf -- '--additional-properties=packageName=spapi,modelPackage=models.%s,apiPackage=api.%s' \
        "$py_pkg" "$py_pkg"
      ;;
  esac
}

# ---------------------------------------------------------------------------
# Walk every model and generate.
# ---------------------------------------------------------------------------
count=0
skipped=0
while IFS= read -r file; do
  rel="${file#"$MODELS_ROOT"/}"

  if is_blacklisted "$rel"; then
    echo ">> [$LANGUAGE] skipping (blacklisted) $rel"
    skipped=$((skipped + 1))
    continue
  fi

  # Derive package tokens from the file name.
  base="$(basename "$file" .json)"
  nv="$(parse_name_version "$base")"
  name="${nv%%|*}"
  version="${nv##*|}"
  lower_name="$(to_lower "$name")"
  snake_name="$(to_snake "$name")"
  pascal_name="$(to_pascal "$name")"

  java_pkg="${lower_name}.${version}"
  csharp_pkg="${pascal_name}.${version}"
  js_pkg="${lower_name}_${version}"
  py_pkg="${snake_name}_${version}"
  flags=""

  # Apply overrides where present (blank override columns keep the derived value).
  idx="$(override_index "$rel")"
  if [[ -n "$idx" ]]; then
    [[ -n "${ov_java[$idx]}" ]]   && java_pkg="${ov_java[$idx]}"
    [[ -n "${ov_csharp[$idx]}" ]] && csharp_pkg="${ov_csharp[$idx]}"
    [[ -n "${ov_js[$idx]}" ]]     && js_pkg="${ov_js[$idx]}"
    [[ -n "${ov_py[$idx]}" ]]     && py_pkg="${ov_py[$idx]}"
    flags="${ov_flags[$idx]}"
  fi

  read -r -a pkg_args <<< "$(package_args "$java_pkg" "$csharp_pkg" "$js_pkg" "$py_pkg")"

  extra_args=()
  [[ -n "$flags" ]] && read -r -a extra_args <<< "$flags"

  cmd=("${GENERATOR[@]}"
    -i "$file"
    -g "$LANGUAGE"
    -t "$TEMPLATE"
    -o sdk
    -c config/config.json
    "${pkg_args[@]}"
    ${extra_args[@]+"${extra_args[@]}"})

  if [[ -n "${DRY_RUN:-}" ]]; then
    echo "${cmd[*]}"
  else
    echo ">> [$LANGUAGE] generating $rel"
    "${cmd[@]}"
  fi

  count=$((count + 1))
done < <(find "$MODELS_ROOT/models" -type f -name '*.json' | sort)

echo "Done: generated $count $LANGUAGE API package(s); skipped $skipped blacklisted file(s)."
