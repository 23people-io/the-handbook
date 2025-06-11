#!/bin/sh

# script/run: Launch the application and any extra required processes locally.

set -e

DEFAULT_MKDOCS_PORT=2300

cd "$(dirname "$0")/.."

# Include scripts/colors.sh
# shellcheck disable=SC1090
. scripts/colors.sh

echo "${MAGENT}Starting Docs app...${RESET}"
mkdocs serve -a 127.0.0.1:${DEFAULT_MKDOCS_PORT}


