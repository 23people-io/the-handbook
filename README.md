# 23people Handbook

This repository is dedicated to storing all company **public consolidated information** in markdown files. This accumulated information will later be indexed in Vector Store Indexes and utilized by Large Language Models (LLMs) for various tasks related to 23people.

> [!IMPORTANT]
> The **access level** of the files content is `public`, meaning it is accessible to everyone. The content is **not confidential** and can be shared with anyone.

## Use

You can access to the handbook in a production environment at [https://manual.23people.io/](https://manual.23people.io).

## Setup

First, you need to have **Python** and **[Poetry](https://python-poetry.org/)** installed on your machine.

After you clone the repo, you can run project locally by following the steps below:

1. Run `make build` to install the dependencies and create a virtual environment.
2. Run the project using `make run`. The project will be available at `http://localhost:2300` by default.

To open the app in Visual Studio Code, you can use the following command:

```bash
code .
```

## Technical Information

The project is built using the following technologies:

- **Python 3.11.x**
- [Mkdocs Material](https://squidfunk.github.io/mkdocs-material/)
- Markdown

### Requirements

- [Python 3.11.x](https://www.python.org/)
- [Poetry Dependency Manager](https://python-poetry.org/)
  
## Versioning

Run `make new-version` to create a new version of the handbook and push it to the remote repo. It will create a new tag with a version under the `vX.Y.Z` format as per [Semantic Versioning](https://semver.org/).

## Deployment

The deployment is done automatically when you push a new version to the `main` branch. The deployment is done using [Cloudflare Pages](https://pages.cloudflare.com/). The associated Cloudflare Worker is [23people-handbook](https://dash.cloudflare.com/a49f23d59d1f5dc6b2a238d6f4a16ed4/pages/view/23people-handbook).

## References

- [Getting started](https://squidfunk.github.io/mkdocs-material/getting-started/)
- [Cloudflare Pages](https://pages.cloudflare.com/)

## Contact

If you have any questions or feedback, feel free to reach out to us at `hola@23people.io` or leave an issue [here](https://github.com/23people-io/23people-handbook/issues).

We are always happy to help! :smile:
