#!/bin/bash

# Current date in the desired format (YYYY-MM-DDTHH:MM:SS)
CURRENT_DATE=$(date -u +"%Y-%m-%dT%H:%M:%S")

echo "${YELLOW}Updating modification date of files...${RESET}"

if [ -z "${path}" ]; then \
    echo "${RED}Error: The Path Folder: 'path' is required.${RESET}"; \
    exit 1; \
fi

echo "${YELLOW}Updating files in: $path${RESET}"; \

# Iterate over all .md files in the directory
for FILE in "$path"/*.md; do
    # Check if the file exists
    if [ -f "$FILE" ]; then
        # Read the file content and replace the line containing "updated:"
        sed -i '' "s/^updated: .*/updated: $CURRENT_DATE/" "$FILE"
        echo -e "${WHITE}Updated: $FILE${RESET}"
    else
        echo -e "${RED}File not found: $FILE${RESET}"
    fi
done

echo "${GREEN}✔ Updated successfully.${RESET}"