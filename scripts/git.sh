#!/bin/sh

# script/version: Version the application for a tag.

set -e

cd "$(dirname "$0")/.."

echo "${YELLOW}Committing changes to Github Repo...${RESET}"
git add .
git commit -m "new commit"
git push origin main
echo "${GREEN}✔ Success.${RESET}"