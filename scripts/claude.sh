#!/bin/sh

# scripts/claude: Create Claude project knowledge files for a given folder

set -e

cd "$(dirname "$0")/.."

# Include scripts/colors.sh
. scripts/colors.sh

# Create Claude project knowledge files for a given folder
echo "${YELLOW}Create Claude project knowledge files for pattern...${RESET}"

if [ -z "${path}" ]; then \
    echo "${RED}Error: The Path Folder: 'path' is required.${RESET}"; \
    exit 1; \
fi

echo "${YELLOW}Getting pattern name from folder...${RESET}"

folder_name=$(basename ${path}); \
echo "${YELLOW}Pattern name: $folder_name${RESET}"; \
echo "${YELLOW}Copying Claude project files to ${path}/_claude folder...${RESET}"; \
rm -rf ${path}/_claude; \
mkdir -p ${path}/_claude; \
for file in ${path}/*; do \
    if [ -f $file ] && [ $(basename $file) != "README.md" ]; then \
        base_name=$(basename $file); \
        cp $file ${path}/_claude/$folder_name-$base_name; \
    fi; \
done;
echo "${GREEN}✔ Claude project files created successfully.${RESET}"
