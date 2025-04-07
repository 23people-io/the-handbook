#!/bin/sh

# script/version: Version the application for a tag.

set -e

cd "$(dirname "$0")/.."

#!/bin/bash

echo -e "${YELLOW}Committing changes to Github Repo...${RESET}"
git add .
git commit -S -m "new commit"
git push origin main
echo -e "${GREEN}✔ Success.${RESET}"