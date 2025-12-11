---
name: update-handbook-content
description: Expert in creating and updating 23people handbook content. Understands handbook structure, writing style, and content organization. USE WHEN the user needs to add, update, or restructure handbook content. Handles markdown generation, content review, and mkdocs navigation updates.
---

# Skill: 23people Handbook's Content Creation/Update

## When to Activate This Skill

Activate this skill when Manuel asks to:

- Add new content to the handbook
- Update existing handbook content sections
- Create new handbook pages or sections
- Restructure handbook navigation
- Review or improve handbook content
- Generate descriptive, clear documentation
- Questions about "where should I add...", "how should I document...", "update the handbook..."

## What This Skill Does

This skill is an expert system for managing the 23people handbook content. The content of this handbook is in the `docs/`folder. It:

1. **Understands Handbook Structure**
   - Read the nav section of `./resources/mkdocs.yml` to understand navigation hierarchy
   - Understands the `./resources/docs/` directory organization
   - Can determine the correct file path for new content
   - Maintains consistency with existing structure

2. **Content Creation & Updates**
   - The name of the file to create/update must be in english and use hyphens for spaces
   - Creates new markdown files with proper frontmatter
   - Updates existing files while preserving style and tone
   - Generates clear, descriptive markdown content
   - Writes text in spanish by default
   - Follows handbook writing style (descriptive, not marketing)
   - Uses proper frontmatter (created, updated, authors, description)
   - Maintains markdown purity (HTML only for custom components)

3. **Delegation & Review**
   - Delegates content research to specialized agents
   - Delegates content writing to LLM-powered agents
   - Delegates markdown format review to validation agents
   - Coordinates multiple agents for complex updates

4. **Navigation Management**
   - Updates mkdocs.yml nav section when adding new pages
   - Maintains navigation hierarchy consistency
   - Ensures proper ordering and grouping

## What This Skill Does NOT Do

- Does not handle non-handbook content, outside of `docs/` folder or the mkdocs.yml file
- Does not handle style or design changes to the handbook site
- Does not update summaries for LLMs or context systems
- Does not manage repository operations (git commits, pushes)
- Does not create marketing or promotional content
- Does not write content in languages other than Spanish unless specified

## Core Principles

### Writing Style

The handbook is a **source of truth**, not marketing material. Content should be:

- **Descriptive**: Clear explanations of what things are
- **Concrete**: Specific details, not vague promises
- **Accurate**: Factual and up-to-date information
- **Structured**: Well-organized with proper headings
- **Purpose-driven**: Written to inform, not to sell

### Markdown Zealotry

WE ARE MARKDOWN ZEALOTS:

- **NEVER** use HTML tags for basic content (paragraphs, headers, lists, links, emphasis)
- **HTML ONLY** for custom MkDocs Material components that don't exist in markdown:
    - Admonitions (note, warning, example, etc. - using three exclamation marks)
    - Custom callouts
    - Material-specific features
- If you see HTML where markdown works, that's a **BUG** and must be fixed

### Frontmatter Standards

Every handbook page must have proper frontmatter (example):

```markdown
---
created: YYYY-MM-DDTHH:mm:ssZ
updated: YYYY-MM-DDTHH:mm:ssZ
authors:
- [github-username]
description: >
[A very brief summary of the page content in Spanish. It will be used as meta description in previews.]
---

# [Page Title]

...

```

## Workflow for Content Updates

When the user requests handbook updates, follow this workflow:

### 1. Understand the Request

- What content needs to be added/updated?
- Is this a new page or an update to existing content?
- Which section of the handbook does this belong to?
- Is the creation/update just for only one topic? IF NOT you have to tell the user that you can only handle one topic at a time and guide him to make separate requests for each topic. DO NOT attempt to handle multiple topics in one request.

### 2. Load Company Context

Always start by loading fresh 23people context reading the handbook summary at `./resources/handbook-summary.md`.

This ensures you have current company overview information.

### 3. Determine if you have the whole context needed

If the request involves specific policies, procedures, or details not in the summary, ask clarifying questions to gather more information from the user. ALWAYS ASK if you need more details. DO NOT assume or invent information.

### 4. Determine File Location

Based on the content type and mkdocs.yml structure, determine:

- The correct file path in docs/
- Whether mkdocs.yml nav needs updating
- If new directories need to be created

### 5. Research & Gather Information

If the content requires research or additional context:

ALWAYS ASK the user clarifying questions to gather necessary details.

DO NOT assume or invent information.

### 6. Share Creation/Update Plan with User

Before generating or updating content, share your plan with the user:

- File path to create/update
- Summary of content to be added/changed
- Any mkdocs.yml nav changes needed

YOU HAVE TO obtain user confirmation before proceeding.

### 7. Generate Content

For content generation, you can:

- Write directly if the content is straightforward
- Delegate to a general-purpose agent for complex content

**Content must include:**

- Proper frontmatter
- Clear, descriptive writing
- Proper markdown structure
- Relevant headings and organization

### 8. Validate Markdown Format

After content generation, run the slash command called `lint-markdown` to validate the formatting.

### 9. Update Navigation (if needed)

If adding a new page, update mkdocs.yml:

- Add entry in the correct nav section
- Maintain proper indentation
- Keep consistent structure

### 10. Preview Locally (optional)

Remind the user they can preview changes locally:

   ```bash
   bun run start
   ```

## Example Workflows

### Adding a New Benefit

1. Load 23people context
2. Determine it belongs in `docs/community/benefits/`
3. Identify subcategory (incentives/refunds/agreements/trainings)
4. Create markdown file with proper frontmatter
5. Write clear, descriptive content
6. Update mkdocs.yml nav under Comunidad > Beneficios
7. Validate markdown format

### Updating Service Description

1. Load 23people context
2. Locate existing file (e.g., `docs/about-us/what-we-do/services/integrations.md`)
3. Read current content
4. Generate updated content maintaining structure
5. Validate changes
6. No nav update needed (existing page)

### Creating New Team Documentation

1. Load 23people context
2. Create directory `docs/organization/teams/[team-name]/`
3. Create index.md with team overview
4. Create additional pages (glossary, knowledge-base, etc.)
5. Update mkdocs.yml nav under Organización > Equipos
6. Validate all new markdown files

### Key Files to Reference

- `mkdocs.yml` - Site configuration and navigation
- `docs/` - Handbook content directory
- `resources/llm/handbook-summary.md` - Current company overview (read-only)

## Important Notes

### Content Guidelines

- **Public access**: All content is public (no confidential info)
- **Language**: Primary language is Spanish
- **Dates**: Use ISO format in frontmatter
- **Authors**: Use github username (e.g., manu-reyes-23p)
- **Descriptions**: Write meaningful description meta fields

### Diagrams

For diagrams, use Mermaid syntax within markdown code blocks, like this example:

    ```mermaid
    graph TD
        A[Start] --> B{Is it working?}
        B -- Yes --> C[Great!]
        B -- No --> D[Fix it]
    ```

### MkDocs Material Features

Available admonitions (use with three exclamation marks):

- note, abstract, info, tip, success
- question, warning, failure, danger, bug
- example, quote

Example (indented to show format):

    !!! example "Optional Title"
        Content here

## Success Criteria

A successful handbook update includes:

✅ Proper frontmatter with all required fields
✅ Clear, descriptive content in Spanish
✅ Pure markdown (HTML only for custom components)
✅ Updated mkdocs.yml nav (if new page)
✅ Consistent with handbook structure and style
✅ Validated markdown format

---

## Activation Confirmation

When this skill activates, print a message indicating it is active, what it will do, and a brief description of the task.

Then proceed with the workflow outlined above.
