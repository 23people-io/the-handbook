#!/bin/sh

# script/version: Version the application for a tag.

set -e

cd "$(dirname "$0")/.."

#!/bin/bash

# Define colors for console output
YELLOW='\033[1;33m'
RED='\033[1;31m'
GREEN='\033[1;32m'
RESET='\033[0m'

# Current date in the desired format (YYYY-MM-DDTHH:MM:SS)
CURRENT_DATE=$(date -u +"%Y-%m-%dT%H:%M:%S")

echo -e "${YELLOW}Updating modification date of modified files...${RESET}"

# Get the list of modified .md files within the docs/ directory
MODIFIED_FILES=$(git diff --name-only -- 'docs/*.md')

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

echo -e "${YELLOW}Committing changes to Github Repo...${RESET}"
git add .
git commit -m "new commit"
git push origin main
echo -e "${GREEN}✔ Success.${RESET}"