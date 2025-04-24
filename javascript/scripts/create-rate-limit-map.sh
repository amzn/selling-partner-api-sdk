#!/bin/bash

# Input and output files
INPUT_FILE="../resources/rate-limits.yml"
OUTPUT_FILE="sdk/helper/DefaultRateLimitMap.mjs"

# Check if input file exists
if [ ! -f "$INPUT_FILE" ]; then
    echo "Input file $INPUT_FILE not found!"
    exit 1
fi

# Create the output file with header
echo "export const defaultRateLimitMap = {" > "$OUTPUT_FILE"

# Process the YAML file and create the map
awk '
    # Skip comments and empty lines
    !/^#/ && /./ {
        # If line ends with colon, it is a key
        if ($0 ~ /:$/) {
            if (key) {
                printf "  \"%s\": [%s],\n", key, values
            }
            key = $1
            sub(/:$/, "", key)
            values = ""
        }
        # If line starts with dash, it is a value
        else if ($1 == "-") {
            if (values == "") {
                values = $2
            } else {
                values = values ", " $2
            }
        }
    }
    END {
        # Print the last entry
        if (key) {
            printf "  \"%s\": [%s],\n", key, values
        }
    }
' "$INPUT_FILE" >> "$OUTPUT_FILE"

# Remove the last comma and close the object
sed -i.bak '$ s/,$//' "$OUTPUT_FILE"
echo "}" >> "$OUTPUT_FILE"

# Add a newline at the end of file
echo "" >> "$OUTPUT_FILE"

# Clean up backup file created by sed (macOS creates this)
rm -f "$OUTPUT_FILE.bak"

echo "DefaultRateLimitMap.mjs has been created successfully."

