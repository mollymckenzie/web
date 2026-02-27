# Community Library Structure

Content is managed via Astro Content Collections. The current collection is `master-library` defined in `src/content/config.ts`.

## Frontmatter Schema
Required:
- `title`: string
- `description`: string
- `category`: one of `dataset`, `tool`, `guide`, `paper`

Optional:
- `author`: string
- `publishedDate`: date
- `tags`: array of strings
- `url`: URL
- `fileUrl`: URL
- `featured`: boolean
- `difficulty`: `beginner` | `intermediate` | `advanced`
- `language`: string

## Adding a Resource
1. Create a markdown file under `src/content/master-library/`.
2. Include frontmatter fields per schema.
3. Add body content in markdown.

## Future: Community Submissions
For a community-contributed library, mirror the schema with a new collection (e.g., `community-library`) and add submission flow (form → PR or CMS). For now, use `master-library` and tag submissions via `tags`.

## Community Library Model (Discussion Update)

Treat each community library as a filtered mirror of the main library, not a separate unrelated catalog.

- Source of truth remains `master-library` entries.
- Community library views are produced by filters (especially geographic identifiers).
- Community librarian form inputs determine which resources appear in a given community view.

### Geographic Identifiers

- Geographic identifiers should be editable as community definitions evolve.
- CDL build should read current geographic identifiers and regenerate community-filtered pages.
- Keep identifier schema explicit so updates are auditable and easy to validate.

### Community Branding

- Community-specific pages should display community branding at the top (community name as minimum).
- Branding should be content-driven (configured data) rather than hardcoded per page.

### CMS Direction

- Evaluate Decap CMS as the editing surface for community librarian metadata and geographic identifiers.
- If adopted, form/CMS outputs should map directly to the filtering fields used by community pages.
