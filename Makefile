SHELL=/bin/bash

# Default Python version
PYTHON_VERSION=3.12.3
export PYTHON_VERSION


DOCS_APP_PORT = 2300
export DOCS_APP_PORT

CHATBOT_APP_PORT = 2301
export CHATBOT_APP_PORT

# ANSI color codes
MAGENT=$(shell tput -Txterm setaf 5)
GREEN=$(shell tput -Txterm setaf 2)
YELLOW=$(shell tput -Txterm setaf 3)
RED=$(shell tput -Txterm setaf 1)
BLUE=$(shell tput -Txterm setaf 6)
RESET=$(shell tput -Txterm sgr0)

# Default target. Run the app
run:
	@echo "$(MAGENT)Running...$(RESET)"
	@scripts/run

run-chatbot:
	@echo "$(MAGENT)Running Chatbot...$(RESET)"
	@scripts/run-chatbot

build:
	@echo "$(MAGENT)Starting build...$(RESET)"
	@scripts/bootstrap
	@scripts/setup
	@echo "$(MAGENT)✔ Build completed successfully.$(RESET)"

test:
	@echo "$(MAGENT)Starting tests...$(RESET)"
	@scripts/test
	@echo "$(MAGENT)✔ Tests passed.$(RESET)"

git:
	@echo "$(MAGENT)Starting Commit and Push to Github Repo...$(RESET)"
	@scripts/git.sh
	@echo "$(MAGENT)✔ Completed successfully.$(RESET)"

prepatch:
	@echo "$(MAGENT)Starting Prepatch...$(RESET)"
	@scripts/prepatch
	@echo "$(MAGENT)✔ Prepatch completed successfully.$(RESET)"

claude:
	@echo "$(MAGENT)Starting Claude files generation...$(RESET)"
	@scripts/claude
	@echo "$(MAGENT)✔ Claude files created successfully.$(RESET)"

# Phony targets
.PHONY: run build test version prepatch claude
