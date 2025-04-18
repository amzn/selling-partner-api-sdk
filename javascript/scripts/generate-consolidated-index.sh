#!/bin/bash

# Navigate to the script's directory
cd "$(dirname "$0")"

# Output file will be in sdk folder
output_file="../sdk/index.js"

# Clear or create the output file
> "$output_file"

# Function to convert directory name to export name
get_export_name() {
    local dir=$1
    
    # Remove version suffix and convert to camelCase
    local base_name=$(echo "$dir" | sed -E 's/_v[0-9]+.*$//')
    
    # Special cases for pricing and fulfillmentinbound
    if [[ "$dir" == "pricing_v2022_05_01" ]]; then
        echo "PricingSpApi"
        return
    elif [[ "$dir" == "pricing_v0" ]]; then
        echo "Pricing_v0SpApi"
        return
    elif [[ "$dir" == "fulfillmentinbound_v0" ]]; then
        echo "Fulfillmentinbound_v0SpApi"
        return
    elif [[ "$dir" == "fulfillmentinbound_v2024_03_20" ]]; then
        echo "FulfillmentinboundSpApi"
        return
    fi
    
    # Capitalize first letter of each word and remove underscores
    local export_name=$(echo "$base_name" | awk -F'_' '{
        for(i=1; i<=NF; i++) {
            printf "%s", toupper(substr($i,1,1)) substr($i,2)
        }
    }')
    
    # Add SpApi suffix
    echo "${export_name}SpApi"
}

# Process each directory in sdk/src
for dir in ../sdk/src/*/; do
    # Remove trailing slash and path prefix
    dir=${dir%/}
    dir=${dir##*/}
    
    # Get export name
    export_name=$(get_export_name "$dir")
    
    # Add export line to file
    echo "export * as $export_name from './src/$dir/index.js';" >> "$output_file"
done

# Sort the file alphabetically
sort "$output_file" -o "$output_file"

# Add LwaAuthClient export at the end
echo "" >> "$output_file"  # Add blank line for readability
echo "export * from './helper/LwaAuthClient.mjs';" >> "$output_file"
echo "export * from './helper/ScopeConstants.mjs';" >> "$output_file"
echo "export * from './helper/RateLimitConfiguration.mjs';" >> "$output_file"

echo "Generated consolidated index.js in sdk folder with exports for all APIs and LwaAuthClient"
