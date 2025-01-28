#!/bin/sh

# script/setup: Set up application for the first time after cloning, or set it
#               back to the initial first unused state.

set -e

cd "$(dirname "$0")/.."

# Only things for a development environment will run inside here
# Do things that need to be done to the application to set up for the first
# time. Or things needed to be run to to reset the application back to first
# use experience. These things are scoped to the application's domain.

# Install dependencies
echo "${WHITE}Installing dependencies...${RESET}"
poetry install

# Activate virtual environment
echo "${WHITE}Activating virtual environment...${RESET}"
poetry shell

# Building docs
echo "${WHITE}Building mkdocs...${RESET}"
mkdocs build

echo "${GREEN}✔ Setup completed successfully.${RESET}"
