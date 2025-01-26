SHELL=/bin/bash

# Default Python version
PYTHON_VERSION=3.11.5
export PYTHON_VERSION

DOCS_APP_PORT = 2300
export DOCS_APP_PORT

# ANSI color codes
MAGENT=$(shell tput -Txterm setaf 5)
GREEN=$(shell tput -Txterm setaf 2)
YELLOW=$(shell tput -Txterm setaf 3)
RED=$(shell tput -Txterm setaf 1)
BLUE=$(shell tput -Txterm setaf 6)
RESET=$(shell tput -Txterm sgr0)

# Default target. Run the app
build:
	@echo "$(MAGENT)Building the app...$(RESET)"
	@scripts/build.sh
	@echo "$(MAGENT)✔ Completed successfully.$(RESET)"

git:
	@echo "$(MAGENT)Starting Commit and Push to Github Repo...$(RESET)"
	@scripts/git.sh
	@echo "$(MAGENT)✔ Completed successfully.$(RESET)"

version:
	@echo "$(MAGENT)Starting Versioning...$(RESET)"
	@scripts/version.sh
	@echo "$(MAGENT)✔ Completed successfully.$(RESET)"

# Phony targets
.PHONY: git
