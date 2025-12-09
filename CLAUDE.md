# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is **the-handbook** - 23people's public company handbook. It's a MkDocs Material-based documentation site that serves as the company's source of truth, containing organizational structure, principles, practices, technical guides, and community information. The handbook is primarily written in Spanish and deployed to [manual.23people.io](https://manual.23people.io) via Cloudflare Pages.

## Development Commands

### Setup and Installation

```bash
# Install Python dependencies using uv (NEVER use pip)
uv venv
uv sync

# Install JavaScript dependencies using bun (NEVER use npm/yarn/pnpm)
bun install --frozen-lockfile
```

### Local Development

```bash
# Start the local development server at http://localhost:2300
uv run start
# Alternative: bun run start (runs via uv under the hood)

# Build the site (creates site/ directory)
bun run build
# This runs: uv venv --clear && uv sync && uv run mkdocs build
```

### Linting and Formatting

```bash
# Lint markdown files
bun run lint:markdown

# Auto-fix markdown issues
bun run format:markdown
```

### Committing Changes

```bash
# Interactive commit using Commitizen (Conventional Commits)
uv run commit
```

## Architecture and Structure

### Core Technology Stack

- **Python 3.11.11** (exact version required - see requires-python in pyproject.toml)
- **MkDocs Material** - Documentation site generator with Material Design theme
- **Package Managers:**
  - `uv` for Python (NOT pip)
  - `bun` for JavaScript (NOT npm/yarn/pnpm)

### Directory Structure

```
the-handbook/
├── docs/                    # All handbook content (markdown files)
│   ├── index.md            # Homepage
│   ├── about-us/           # Company info, services, differentiation
│   ├── community/          # Benefits, procedures, events
│   ├── organization/       # Teams, tribes, positions, roles
│   ├── principles/         # Company principles
│   ├── practices/          # Work practices (mostly commented out in nav)
│   ├── sustainability/     # Sustainability commitment and strategy
│   ├── technical-guide/    # Software development guide
│   └── the-handbook/       # Handbook meta-documentation
├── resources/llm/          # LLM context resources
│   ├── handbook-summary.md # Auto-generated handbook summary for AI tools
│   └── system-prompt.md    # Prompt for generating the summary
├── _overrides/             # MkDocs Material theme customizations
├── _insights/              # Internal insights (excluded from build)
├── scripts/                # Build scripts (mostly shell scripts)
├── .github/workflows/      # CI/CD workflows
├── mkdocs.yml             # Site configuration and navigation
├── pyproject.toml         # Python dependencies and project config
└── package.json           # JavaScript dependencies and scripts
```

### Navigation Management

The entire site navigation is defined in `mkdocs.yml` under the `nav:` section. When adding new pages:

1. Create the markdown file in the appropriate `docs/` subdirectory
2. Update the `nav:` section in `mkdocs.yml` to include the new page
3. Maintain the existing indentation and structure (2 spaces per level)
4. Navigation entries can be:
   - `- path/to/file.md` (title from frontmatter)
   - `- "Custom Title": path/to/file.md`
   - External links: `- "Link Text": https://example.com`

### Content Standards

#### Markdown Purity

**WE ARE MARKDOWN ZEALOTS** - This is a critical principle:

- **NEVER** use HTML tags for basic content (paragraphs, headers, lists, links, emphasis)
- **HTML ONLY** for MkDocs Material custom components:
  - Admonitions: `!!! note`, `!!! warning`, `!!! example`, etc.
  - Material-specific features
- If you see HTML where markdown works, that's a **BUG** and must be fixed

#### Frontmatter Requirements

Every markdown file in `docs/` should have proper frontmatter:

```yaml
---
created: 2024-08-10T14:30:00
updated: 2025-06-05T00:00:00
authors:
  - manu-reyes-23p
description: >
  Brief description of the page content
---
```

#### Writing Style

The handbook is a **source of truth**, not marketing material:

- **Descriptive**: Clear explanations of what things are
- **Concrete**: Specific details, not vague promises
- **Accurate**: Factual and up-to-date information
- **Primary Language**: Spanish (except technical terms)

#### File Naming

- File names must be in **English** and use **hyphens** for spaces
- Example: `tech-talent-services.md`, not `tech_talent_services.md` or `servicios-talento-tech.md`

### MkDocs Material Features

Available markdown extensions configured in `mkdocs.yml`:

- **Code highlighting** with line numbers (`pymdownx.highlight`)
- **Tabbed content** (`pymdownx.tabbed`)
- **Admonitions** - Use `!!!` syntax for callouts
- **Mermaid diagrams** - Use ` ```mermaid ` code blocks
- **Emoji** - Material emoji support (`:material-heart:`)
- **Tables** - GitHub-flavored markdown tables
- **Table of Contents** - Auto-generated, depth 2

Example admonitions:

```markdown
!!! note "Optional Title"
    Content here

!!! warning
    Warning content

!!! example "Example Title"
    Example content
```

## CI/CD Workflows

### Build and Deployment Pipeline

The project uses a three-stage deployment workflow:

1. **CI (`ci.yml`)** - Runs on every push to any branch:
   - Markdown linting using `markdownlint-cli2` (via bun)
   - MkDocs site build validation
   - Creates build artifact `site-build-<sha>` with 1-day retention
   - **Branch Protection**: The `Build` check must pass before merging to `main`

2. **Deploy Preview (`deploy-version.yml`)** - Runs on non-main branches after CI:
   - Downloads build artifact from CI
   - Deploys preview version to Cloudflare using `wrangler versions upload`

3. **Deploy Production (`deploy-production.yml`)** - Runs on main branch after CI:
   - Downloads build artifact from CI
   - Deploys to production at [manual.23people.io](https://manual.23people.io)

4. **Summary Updater Webhook (`summary-updater-webhook.yml`)**:
   - Triggers on changes to `docs/**`, `resources/llm/system-prompt.md`, or `mkdocs.yml`
   - Calls n8n workflow to regenerate `resources/llm/handbook-summary.md`
   - **Loop Prevention**: Uses native path filtering to prevent infinite loops

### Markdown Linting

Configuration in `.markdownlint.yaml`:

- Most rules enabled by default
- Disabled rules: MD013 (line length), MD033 (HTML), MD042 (empty links), MD046 (code block style), MD051 (link fragments)
- MD007 indent: 4 spaces for lists
- Various other rules disabled: MD036, MD041, MD040, MD024, MD060

## Commit and Release Process

### Conventional Commits

All commits must follow [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `chore:` - Maintenance tasks
- `refactor:` - Code refactoring

Use `uv run commit` for interactive commit creation via Commitizen.

### Semantic Versioning

- Version in `package.json` and `pyproject.toml` is `0.0.0` by design
- Actual versioning handled by `semantic-release` via GitHub Actions
- Releases workflow: `.github/workflows/releases.yml` (mentioned in README, analyze commit messages to determine version)
- View releases: [GitHub Releases](https://github.com/23people-io/the-handbook/releases)

## LLM Resources

### Handbook Summary

The `resources/llm/handbook-summary.md` file is an **auto-generated** LLM-optimized summary of the entire handbook:

- Updated automatically via n8n webhook when docs change
- Designed for AI chatbots and tools
- Focuses on stable patterns, principles, and frameworks
- **NEVER** manually edit this file - it will be overwritten

### System Prompt

The `resources/llm/system-prompt.md` defines the strategy for generating the handbook summary:

- Used by automation workflows
- Ensures consistency in summary generation
- Can be updated to improve summary quality

## Important Notes

### Git Safety

Before committing:

1. Verify repository with `git remote -v`
2. Ensure you're in the-handbook repository
3. **All content is PUBLIC** - never commit confidential information
4. Use conventional commit format

### Build Validation

The MkDocs build uses `strict: false` but still validates:

- Navigation structure (`nav.omitted_files`, `nav.not_found`)
- Links (`links.not_found`, `links.absolute_links`)
- Warnings only, not errors

To test build locally:

```bash
bun run build
```

To validate with strict mode:

```bash
mkdocs build --strict
```

### Python Version Pinning

The project requires **exactly Python 3.11.11** (`requires-python = "===3.11.11"` in pyproject.toml). This is intentional for reproducibility.

### Deployment

Production is deployed automatically to Cloudflare Pages when changes are pushed to `main`:

- Cloudflare Worker: `23people-handbook`
- Production URL: [https://manual.23people.io/](https://manual.23people.io/)
- Changes typically visible within minutes

## Project-Specific Skills

The repository includes a Claude Code skill at `.claude/skills/handbook-keeper-skill/SKILL.md`:

- Expert system for managing handbook content
- Handles content creation, navigation updates, and markdown validation
- Understands handbook structure and writing style
- Use when adding, updating, or restructuring handbook content

## Common Development Tasks

### Adding a New Handbook Page

1. Create markdown file in appropriate `docs/` subdirectory
2. Add proper frontmatter with current date
3. Write content in Spanish, following descriptive (not promotional) style
4. Update `mkdocs.yml` `nav:` section to include the new page
5. Test locally: `uv run start` → view at `http://localhost:2300`
6. Lint: `bun run format:markdown`
7. Commit: `uv run commit`

### Updating Existing Content

1. Locate file in `docs/` directory
2. Update `updated:` timestamp in frontmatter
3. Make changes
4. Test locally
5. Lint and commit

### Fixing Markdown Issues

1. Run `bun run format:markdown` to auto-fix
2. For issues that can't be auto-fixed, check `.markdownlint.yaml` for rule details
3. Ensure no HTML is used where markdown works

### Troubleshooting Build Failures

1. Check markdown linting: `bun run lint:markdown`
2. Check MkDocs build: `bun run build`
3. Review validation warnings in build output
4. Verify all links in markdown are valid
5. Ensure all `nav:` entries in `mkdocs.yml` point to existing files
