#!/bin/sh

# scripts/date-updater: Update the modification date of modified .md files within the docs/ directory.

set -e

cd "$(dirname "$0")/.."

# Current date in the desired format (YYYY-MM-DDTHH:MM:SSZ)
CURRENT_DATE=$(date -u +"%Y-%m-%dT%H:%M:%SZ")

echo -e "${YELLOW}Updating modification date of modified files...${RESET}"

# Get the list of modified .md files within the docs/ directory
MODIFIED_FILES=$(git diff --name-only -- 'docs/**/*.md')

# Check if there are any modified .md files
if [ -z "$MODIFIED_FILES" ]; then
    echo -e "${YELLOW}No .md files modified. Skipping date updates.${RESET}"
else
    # Iterate over the modified .md files
    for FILE in $MODIFIED_FILES; do
        # Check if the file exists
        if [ -f "$FILE" ]; then
            # Read the file content and replace the line containing "updated:"
            sed -i '' "s/^updated: .*/updated: $CURRENT_DATE/" "$FILE"
            echo -e "${GREEN}Updated: $FILE${RESET}"
        else
            echo -e "${RED}File not found: $FILE${RESET}"
        fi
    done
fi