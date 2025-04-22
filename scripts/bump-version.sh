#!/bin/sh

# script/bump-version: Bump the package version.

set -e

cd "$(dirname "$0")/.."

# Include scripts/colors.sh
. scripts/colors.sh

echo "${YELLOW}Bumping package version...${RESET}"

echo "${MAGENT}Pre: Committing previous changes...${RESET}"
if git diff --quiet; then
  echo "${WHITE}No changes to commit before version bump.${RESET}"
else
  echo "${WHITE}Preparing for new version...${RESET}"
  git add .
  git commit -m "preparing for new version"
fi

echo "${MAGENT}Bumping version...${RESET}"
poetry version patch
poetry version

echo "${MAGENT}Creating new tag...${RESET}"
VERSION=$(poetry version -s)
git tag "$VERSION" -m "Version $VERSION"
git push origin "$VERSION"

echo "${MAGENT}Pushing to Github...${RESET}"
git push

echo "${GREEN}✔ New version created successfully.${RESET}"