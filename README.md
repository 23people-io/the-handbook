# The 23people's Handbook

[![Built with Material for MkDocs](https://img.shields.io/badge/Material_for_MkDocs-526CFE?style=for-the-badge&logo=MaterialForMkDocs&logoColor=white)](https://squidfunk.github.io/mkdocs-material/)

This repository is dedicated to storing all company **public consolidated information** in markdown files. This accumulated information is expected to be utilized by Large Language Models (LLMs) for various tasks related to 23people.

> [!IMPORTANT]
> The **access level** of the files content is `public`, meaning it is accessible to everyone. The content is **not confidential** and can be shared with anyone.

## Use

You can access the handbook in a production environment at [https://manual.23people.io/](https://manual.23people.io).

## Content Structure

The main content associated with the company is stored in the `docs/` folder. All handbook documentation, guides, and resources are organized within this directory.

The navigation structure of the handbook can be viewed in the `mkdocs.yml` file, specifically in the `nav:` section. This section defines how content is organized and displayed on the handbook website.

## Context Resources for AI Tools

The repository includes specialized resources in the `llm-resources/` folder for AI-powered tools:

- **`handbook-summary.md`**: An up-to-date, LLM-optimized summary of the entire handbook. This file serves as a context source for AI-powered chatbots and tools, focusing on stable patterns, principles, and frameworks rather than frequently changing operational data.

- **`system-prompt.md`**: A comprehensive system prompt that defines the strategy and guidelines for generating and maintaining the handbook summary. This prompt is designed for use in automation projects and ensures consistency in how the summary is created and updated.

## Contributing to the Handbook

We follow an open contribution model where team members can propose changes through Pull Requests. This ensures quality and consistency in our documentation.

### Prerequisites

Before you start contributing, make sure you have:

- [Python 3.11.x](https://www.python.org/)
- [Visual Studio Code](https://code.visualstudio.com/) (recommended IDE)
- Git installed on your machine
- A GitHub account with access to the 23people organization

### Development Workflow

1. Clone the repository:

   ```bash
   git clone git@github.com:23people-io/the-handbook.git
   cd the-handbook
   ```

2. Open the project in Visual Studio Code:

   ```bash
   code .
   ```

3. Create a new branch for your changes:

   ```bash
   git checkout -b feat/your-feature-name
   ```

    > [!IMPORTANTE]
    > We create feature branches to:
    > - Keep the main branch stable
    > - Allow for code review before changes are merged
    > - Enable multiple people to work on different features simultaneously
    > - Maintain a clean project history

4. Set up local development environment:

   ```bash
   # Install project dependencies using uv
   uv venv
   uv sync

   # Start the local development server
   uv run start
   ```

   The handbook will be available at `http://localhost:2300` for local preview

5. Make your changes and test them locally by viewing the site in your browser

6. Commit your changes:

   ```bash
   uv run commit
   ```

7. Push your changes to GitHub:

   ```bash
   git push origin feature/your-feature-name
   ```

### Creating a Pull Request

1. Go to the [repository page on GitHub](https://github.com/23people-io/the-handbook)
2. Click on "Pull requests" and then "New pull request"
3. Select your feature branch as the compare branch
4. Fill in the pull request template with:
   - A clear description of your changes
   - Any relevant context or screenshots
   - Reference to related issues if applicable
5. Submit the pull request
6. Wait for review from the repository maintainers

Your changes will be reviewed by the CODEOWNERS of the repository. They may request changes or provide feedback. Once approved, your changes will be merged into the main branch.

## Technical Information

The project is built using the following technologies:

- **Python 3.11.x**
- [Mkdocs Material](https://squidfunk.github.io/mkdocs-material/)
- Markdown

## Commit Guidelines

This project follows [Conventional Commits](https://www.conventionalcommits.org/) specification for commit messages to ensure consistent commit history and enable automated semantic versioning.

## Versioning

This project uses [Semantic Versioning](https://github.com/semantic-release/semantic-release) to manage releases in Github. The version number is updated automatically based on the commit messages following the Conventional Commits specification.

**NOTE:** In the package.json and pyproject.toml files, the version is set to `0.0.0` on purpose to indicate that the version will be managed by the semantic release process, and it should not be manually changed.

This is configurated in the Github Actions workflow called [`releases.yml`](https://github.com/23people-io/the-handbook/blob/main/.github/workflows/releases.yml), which runs on every push to the main branch. It analyzes the commit messages and determines the next version number, then publishes the release.

## Changelog

The changelog is automatically generated based on the commit messages following the Conventional Commits specification. You can view the project's version history and changelog in the [GitHub Releases section](https://github.com/23people-io/the-handbook/releases)

## Deployment

The deployment is done automatically when you push a new version to the `main` branch. The deployment is done using [Cloudflare Pages](https://pages.cloudflare.com/). The associated Cloudflare Worker is [23people-handbook](https://dash.cloudflare.com/a49f23d59d1f5dc6b2a238d6f4a16ed4/pages/view/the-handbook). You should be able to see the changes in the production environment after a few minutes under [https://manual.23people.io/](https://manual.23people.io/).

## References

- [Getting started with Mkdocs Material](https://squidfunk.github.io/mkdocs-material/getting-started/)
- [Cloudflare Pages Documentation](https://pages.cloudflare.com/)
- [GitHub Pull Request Documentation](https://docs.github.com/en/pull-requests)
- [Setting up SSH for GitHub](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)

## Contact

If you have any questions or feedback, feel free to reach out to us at `hola@23people.io` or [leave an issue](https://github.com/23people-io/the-handbook/issues).

_**We are 23people**, with love **:material-heart:** and passion for technology. Happy Coding! 🚀_
