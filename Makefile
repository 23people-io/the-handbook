SHELL=/bin/bash

# Default Python version
PYTHON_VERSION=3.12.3
export PYTHON_VERSION

APP_PORT = 2300
export APP_PORT

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
	@script/run

build:
	@echo "$(MAGENT)Starting build...$(RESET)"
	@script/bootstrap
	@script/setup
	@echo "$(MAGENT)✔ Build completed successfully.$(RESET)"

test:
	@echo "$(MAGENT)Starting tests...$(RESET)"
	@script/test
	@echo "$(MAGENT)✔ Tests passed.$(RESET)"

version:
	@echo "$(MAGENT)Starting Versioning...$(RESET)"
	@script/version
	@echo "$(MAGENT)✔ Versioning completed successfully.$(RESET)"

# Phony targets
.PHONY: run build test version
