#!/bin/sh

# script/version: Version the application for a tag.

set -e

cd "$(dirname "$0")/.."

# ANSI color codes
MAGENT=$(tput -Txterm setaf 5)
GREEN=$(tput -Txterm setaf 2)
YELLOW=$(tput -Txterm setaf 3)
WHITE=$(tput -Txterm setaf 7)
RED=$(tput -Txterm setaf 1)
BLUE=$(tput -Txterm setaf 6)
RESET=$(tput -Txterm sgr0)

echo "${YELLOW}Committing changes to Github Repo...${RESET}"
git add .
git commit -m "new version"
git push origin main
echo "${GREEN}✔ Success.${RESET}"