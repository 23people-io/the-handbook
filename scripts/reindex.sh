#!/bin/bash

# scripts/reindex: Add a flag to request a reindex of the documentation into the docs/ directory.

set -e

cd "$(dirname "$0")/.."

# Include scripts/colors.sh
# shellcheck disable=SC1091
. scripts/colors.sh

# Get all the markdown files in the docs/ directory and do not start with _
# Use process substitution to handle filenames with spaces correctly
FILES=$(find docs/ -type f -name "*.md" ! -name "_*.md" | sort)

# Add a flag to request a reindex
REINDEX_FLAG="reindex: true"
REINDEX_FLAG_DATE=$(date -u +"%Y-%m-%dT%H:%M:%SZ")

# Detect OS to handle sed differences
if [[ "$(uname)" == "Darwin" ]]; then
  # macOS requires extension parameter with -i
  SED_INPLACE="sed -i ''"
else
  # Linux version
  SED_INPLACE="sed -i"
fi

echo -e "${YELLOW}Adding reindex flag and current date to files with front-matter...${RESET}"
# Iterate over the files and add/update the reindex and reindex-date in the front matter section.
# Use while loop with read to handle filenames with spaces
while IFS= read -r FILE; do
  echo -e "${GREEN}Processing: ${FILE}${RESET}"
  
  # Check if file has front matter (starts with ---)
  if ! grep -q "^---" "$FILE"; then
    echo -e "${YELLOW}Skipping: ${FILE} - No front-matter found${RESET}"
    continue  # Early return - skip to next iteration
  fi
  
  # File has front matter, check for end of front matter
  FRONTMATTER_END=$(grep -n "^---" "$FILE" | awk 'NR==2 {print $1}' | cut -d: -f1)
  
  if [ -z "$FRONTMATTER_END" ]; then
    echo -e "${RED}Warning: File $FILE has incomplete front matter. Adding closing tag.${RESET}"
    # Use a simpler approach for macOS compatibility
    TMP_FILE=$(mktemp)
    echo "---" > "$TMP_FILE"
    sed -n '2,$p' "$FILE" >> "$TMP_FILE"
    echo "---" >> "$TMP_FILE"
    mv "$TMP_FILE" "$FILE"
    
    # Recalculate the frontmatter end after adding the closing tag
    FRONTMATTER_END=$(grep -n "^---" "$FILE" | awk 'NR==2 {print $1}' | cut -d: -f1)
  fi
  
  # Create temporary files for processing
  TMP_FILE=$(mktemp)
  TMP_FRONTMATTER=$(mktemp)
  TMP_CONTENT=$(mktemp)
  
  # Extract the first line with --- delimiter
  head -n 1 "$FILE" > "$TMP_FILE"
  
  # Extract the front matter content (between --- delimiters, excluding them)
  sed -n "2,$((FRONTMATTER_END-1))p" "$FILE" > "$TMP_FRONTMATTER"
  
  # Remove existing reindex fields from front matter content
  grep -v "^reindex:" "$TMP_FRONTMATTER" | grep -v "^reindex-date:" > "${TMP_FRONTMATTER}.new"
  mv "${TMP_FRONTMATTER}.new" "$TMP_FRONTMATTER"
  
  # Add the reindex fields at the beginning of the front matter content
  echo "$REINDEX_FLAG" > "${TMP_FRONTMATTER}.new"
  echo "reindex-date: $REINDEX_FLAG_DATE" >> "${TMP_FRONTMATTER}.new"
  cat "$TMP_FRONTMATTER" >> "${TMP_FRONTMATTER}.new"
  
  # Append front matter content and closing delimiter to temporary file
  cat "${TMP_FRONTMATTER}.new" >> "$TMP_FILE"
  echo "---" >> "$TMP_FILE"
  
  # Extract content after front matter and append it
  sed -n "$((FRONTMATTER_END+1)),\$p" "$FILE" > "$TMP_CONTENT"
  cat "$TMP_CONTENT" >> "$TMP_FILE"
  
  # Replace original file with updated content
  mv "$TMP_FILE" "$FILE"
  
  # Clean up temporary files
  rm -f "$TMP_FRONTMATTER" "$TMP_FRONTMATTER.new" "$TMP_CONTENT"
  
done <<< "$FILES"

echo -e "${GREEN}✓ Reindex flags added successfully to all documentation files with front-matter${RESET}"