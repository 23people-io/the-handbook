#!/bin/sh

# script/run: Launch the application and any extra required processes locally.

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

echo "${MAGENT}Starting Docs app...${RESET}"
mkdocs serve -a 127.0.0.1:${DOCS_APP_PORT}


