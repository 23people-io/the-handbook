# syntax=docker/dockerfile:1

# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/go/dockerfile-reference/

# Want to help us make this template better? Share your feedback here: https://forms.gle/ybq9Krt8jtBL3iCk7
ARG PYTHON_VERSION=3.12.3
ARG BUILDPLATFORM=linux/amd64
FROM --platform=${BUILDPLATFORM} python:${PYTHON_VERSION}-slim as base

ENV PYTHONUNBUFFERED=1 \
    PIPX_HOME=/opt/pipx \
    PIPX_BIN_DIR=/opt/pipx/bin \
    APP_USER=appuser

# Update PATH
ENV PATH="/home/${APP_USER}/.local/bin:${PIPX_BIN_DIR}:/bin:${PATH}"

# Create a non-root user
RUN addgroup --system ${APP_USER} && adduser --system --ingroup ${APP_USER} --home /home/${APP_USER} ${APP_USER}

# Install pipx
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
    curl \
    ca-certificates \
    gnupg \
    git \
    build-essential \
    && rm -rf /var/lib/apt/lists/* \
    && curl -sSL https://bootstrap.pypa.io/get-pip.py | python - \
    && pip install --no-cache-dir pipx \
    && pipx ensurepath

# Change the working directory within the container.
WORKDIR /app

# Copy the requirements file
COPY requirements.txt .

# Install dependencies
RUN --mount=type=cache,target=/root/.cache/pip \
    pip install -r requirements.txt

# Copy the source code
COPY docs ./docs
COPY mkdocs.yml .

# Build the site
RUN mkdir ./site \
    && mkdocs build

# Switch to non-root user
USER ${APP_USER}

# Expose the port
EXPOSE ${APP_PORT}

# Entrypoint
ENTRYPOINT ["sh", "-c", "exec mkdocs serve -a 0.0.0.0:${APP_PORT}"]