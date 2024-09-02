SHELL=/bin/bash

PYTHON_VERSION = 3.11

# ANSI color codes
GREEN=$(shell tput -Txterm setaf 2)
YELLOW=$(shell tput -Txterm setaf 3)
RED=$(shell tput -Txterm setaf 1)
BLUE=$(shell tput -Txterm setaf 6)
RESET=$(shell tput -Txterm sgr0)

# ---------------------------------------------------------------------------------------------------------------------
# Main Tasks
# ---------------------------------------------------------------------------------------------------------------------

# Run the app. Default target. 
run:
	@echo "$(YELLOW)Starting chatbot...$(RESET)"
	mkdocs serve
	@echo "$(GREEN)✔ Application started successfully.$(RESET)"

# Build the project
build:
	@echo "$(YELLOW)Building project...$(RESET)"
	@$(MAKE) -s check-dependencies
	@$(MAKE) -s clean
	@$(MAKE) -s install-python-dependencies
	poetry export --without-hashes -f requirements.txt -o requirements.txt
	@$(MAKE) -s activate-env
	@mkdocs build
	@echo "$(GREEN)✔ Build completed successfully.$(RESET)"

# Clean the project
clean:
	@echo "$(YELLOW)Cleaning...$(RESET)"
	@echo "$(BLUE)Deleting .venv directory.$(RESET)"; \
	rm -rf .venv
	@echo "$(BLUE)Deleting poetry.lock file.$(RESET)"; \
	rm -f poetry.lock
	@echo "$(GREEN)✔ Cleaned successfully.$(RESET)"


# Save version tag in git
version:
	@echo "$(YELLOW)Creating a Git Tag Version...$(RESET)"
	@if [ -z "$(t)" ]; then \
		echo "$(RED)Error: The Tag version: 't' is required.$(RESET)"; \
		echo "$(YELLOW)Usage:$(RESET) make version t=[patch/minor/major] m=\"Message\"$(RESET)"; \
		echo "$(YELLOW)Options:$(RESET)"; \
		echo "$(YELLOW)  t=patch:$(RESET)   Increment the patch version$(RESET)"; \
		echo "$(YELLOW)  t=minor:$(RESET)   Increment the minor version$(RESET)"; \
		echo "$(YELLOW)  t=major:$(RESET)   Increment the major version$(RESET)"; \
		echo "$(YELLOW)  m=\"Message\":$(RESET)  Optional commit message$(RESET)"; \
		exit 1; \
	fi
	poetry version $(t)
	poetry version
	git add .
	git commit -m "v$$(poetry version -s): $(if $(m),$(m),)"
	git tag v$$(poetry version -s)
	git push
	git push --tags
	poetry version
	@echo "$(GREEN)✔ Git Tag Version created successfully...$(RESET)"

# Deploy
deploy:
	@echo "$(YELLOW)Building infrastructure...$(RESET)"
	@if [ ! -d "terraform" ]; then \
		echo "$(RED)Error: 'terraform' folder not found.$(RESET)"; \
		exit 1; \
	fi
	@cd terraform && \
		terraform fmt -check && \
		terraform fmt -diff && \
		terraform init && \
		terraform validate && \
		terraform plan -out=tfplan.out -var-file=terraform.tfvars && \
		terraform apply "tfplan.out"
	@echo "$(GREEN)✔ Build completed successfully.$(RESET)"

# ---------------------------------------------------------------------------------------------------------------------
# Internal Tasks
# ---------------------------------------------------------------------------------------------------------------------

check-dependencies:
	@echo "$(YELLOW)Checking dependencies...$(RESET)"
	@$(MAKE) -s check-system
	@$(MAKE) -s check-python
	@$(MAKE) -s check-poetry
	@echo "$(GREEN)✔ Dependencies checked successfully.$(RESET)"

check-system:
	@echo "$(YELLOW)Checking system...$(RESET)"
	@if [ "$(shell uname)" = "Darwin" ]; then \
		echo "$(BLUE)macOS detected.$(RESET)"; \
	elif [ "$(shell uname)" = "Linux" ]; then \
		if [ -f "/etc/manjaro-release" ]; then \
			echo "$(BLUE)Manjaro Linux detected.$(RESET)"; \
		else \
			echo "$(BLUE)Linux detected.$(RESET)"; \
		fi; \
	elif [ "$$(uname -r | grep -i microsoft)" ]; then \
		echo "$(BLUE)Windows Subsystem for Linux detected.$(RESET)"; \
	else \
		echo "$(RED)Unsupported system detected. Please use macOS, Linux, or Windows Subsystem for Linux (WSL).$(RESET)"; \
		exit 1; \
	fi

check-python:
	@echo "$(YELLOW)Checking Python installation...$(RESET)"
	@if command -v python$(PYTHON_VERSION) > /dev/null; then \
		echo "$(BLUE)$(shell python$(PYTHON_VERSION) --version) is already installed.$(RESET)"; \
	else \
		echo "$(RED)Python $(PYTHON_VERSION) is not installed. Please install Python $(PYTHON_VERSION) to continue.$(RESET)"; \
		exit 1; \
	fi

check-poetry:
	@echo "$(YELLOW)Checking Poetry installation...$(RESET)"
	@if command -v poetry > /dev/null; then \
		POETRY_VERSION=$(shell poetry --version 2>&1 | sed -E 's/Poetry \(version ([0-9]+\.[0-9]+\.[0-9]+)\)/\1/'); \
		IFS='.' read -r -a POETRY_VERSION_ARRAY <<< "$$POETRY_VERSION"; \
		if [ $${POETRY_VERSION_ARRAY[0]} -ge 1 ] && [ $${POETRY_VERSION_ARRAY[1]} -ge 8 ]; then \
			echo "$(BLUE)$(shell poetry --version) is already installed.$(RESET)"; \
		else \
			echo "$(RED)Poetry 1.8 or later is required. You can install poetry by running the following command, then adding Poetry to your PATH:"; \
			echo "$(RED) curl -sSL https://install.python-poetry.org | python$(PYTHON_VERSION) -$(RESET)"; \
			echo "$(RED)More detail here: https://python-poetry.org/docs/#installing-with-the-official-installer$(RESET)"; \
			exit 1; \
		fi; \
	else \
		echo "$(RED)Poetry is not installed. You can install poetry by running the following command, then adding Poetry to your PATH:"; \
		echo "$(RED) curl -sSL https://install.python-poetry.org | python$(PYTHON_VERSION) -$(RESET)"; \
		echo "$(RED)More detail here: https://python-poetry.org/docs/#installing-with-the-official-installer$(RESET)"; \
		exit 1; \
	fi

install-python-dependencies:
	@echo "$(YELLOW)Installing Python dependencies...$(RESET)"
	@if [ -z "${TZ}" ]; then \
		echo "Defaulting TZ (timezone) to UTC"; \
		export TZ="UTC"; \
	fi
	@rm -rf .venv
	@poetry env use python$(PYTHON_VERSION)
	@poetry install
	@echo "$(GREEN)✔ Python dependencies installed successfully.$(RESET)"

activate-env:
	@echo "$(YELLOW)Activating Virtual Environment...$(RESET)"	
	poetry env use python
	@echo "$(GREEN)✔ Virtual Environment activated successfully.$(RESET)"

.PHONY: run build clean version deploy check-dependencies check-system check-python check-poetry install-python-dependencies activate-env