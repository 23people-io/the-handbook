#!/bin/sh

# script/bump-version: Bump the package version.

set -e

cd "$(dirname "$0")/.."

# Include scripts/colors.sh
. scripts/colors.sh

echo "${MAGENT}Bumping package version...${RESET}"

echo "${YELLOW}Pre: Committing previous changes...${RESET}"
if git diff --quiet; then
  echo "${WHITE}No changes to commit before version bump.${RESET}"
else
  echo "${WHITE}Preparing for new version...${RESET}"
  git add .
  git commit -m "preparing for new version"
fi

echo "${YELLOW}Bumping version...${RESET}"
poetry version patch
poetry version

echo "${YELLOW}Pushing to Github...${RESET}"
git push

echo "${GREEN}✔ New version created successfully.${RESET}"