#!/bin/sh

# script/update: Update application to run for its current checkout. It is used to update the project after a fresh pull.

set -e

cd "$(dirname "$0")/.."

echo "${YELLOW}Making version...${RESET}"
poetry version "${t}"
poetry version

echo "${GREEN}✔ Git Tag Version created successfully...${RESET}"