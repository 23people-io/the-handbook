#!/bin/sh

# script/bump-version: Bump the package version.

set -e

cd "$(dirname "$0")/.."

# Include scripts/colors.sh
# shellcheck disable=SC1091
. scripts/colors.sh

echo "${MAGENT}Bumping package version...${RESET}"

git add .
echo "${MAGENT}Pre: Committing previous changes...${RESET}"
if git diff-index --quiet HEAD --; then
  echo "${WHITE}No changes to commit before version bump.${RESET}"
else
  echo "${WHITE}Preparing for new version...${RESET}"
  git commit -m "previous changes before version bump"
fi

echo "${YELLOW}Bumping version...${RESET}"
uv version --bump patch
NEW_VERSION=$(uv version)
uv version

echo "${YELLOW}Committing version bump...${RESET}"
git add pyproject.toml
git commit -m "bump version to ${NEW_VERSION}"

echo "${YELLOW}Pushing to Github...${RESET}"
git push

echo "${GREEN}✔ New version created successfully.${RESET}"