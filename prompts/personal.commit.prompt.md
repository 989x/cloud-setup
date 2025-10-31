# Git commit format

We use **Conventional Commits** (v1.0.0) for the subject line, with a structured
body using **Why / What / Breaking changes** to explain the change.

**Primary**

* **Conventional Commits v1.0.0 (official spec):** [https://www.conventionalcommits.org/en/v1.0.0/](https://www.conventionalcommits.org/en/v1.0.0/)

**Influences / Examples**

* **Angular Commit Message Guidelines** (origin of `type(scope): subject` and `BREAKING CHANGE`):
  [https://github.com/angular/angular/blob/main/CONTRIBUTING.md#-commit-message-format](https://github.com/angular/angular/blob/main/CONTRIBUTING.md#-commit-message-format)
* **Keep a Changelog** (inspiration for clear “What/Why/Breaking changes” structure):
  [https://keepachangelog.com/en/1.1.0/](https://keepachangelog.com/en/1.1.0/)
* **Semantic Versioning** (context for mapping `feat`/`fix` to version bumps):
  [https://semver.org/](https://semver.org/)
* **Chris Beams — “How to Write a Git Commit Message”** (imperative mood, 72-char subject, etc.):
  [https://cbea.ms/git-commit/](https://cbea.ms/git-commit/)


## Commit Message Convention

### Format (subject)

```text
<type>(<scope>): <short, imperative summary>
```

### Body sections

Use any sections that apply. **Include “Breaking changes” only when there are actual breaking changes**—otherwise omit the section entirely.

```text
Why
<why this change is needed>

What
<what changed at a glance>
<key files/components>

Breaking changes (optional)
<any behavior/API changes that break compatibility>
```

### Quick template

```text
<type>(<scope>): <summary>

Why
* ...

What
* ...

Breaking changes (optional)
* ...
```

### Types

* `feat` – new feature
* `fix` – bug fix
* `docs` – documentation only
* `refactor` – neither feature nor fix
* `perf` – performance improvement
* `test` – add/update tests
* `build` – build system / deps
* `ci` – CI config or scripts
* `chore` – maintenance (no src/test changes)
* `revert` – revert a previous commit

### Rules

* Use **present tense**, imperative voice: “add”, “refactor”, “remove”.
* Keep the **subject ≤ 72 chars**, **no trailing period**.
* `scope` is optional but recommended (e.g., `api`, `app/news`, `deps`).
* Wrap body lines at ~72 chars.
* Omit sections that don’t apply.


## Example: Feature — unify getAll* data fetchers & add “View all” CTAs

```bash
feat(api,app): unify mock fetchers to getAll* with strong types; add "View all" CTAs

Why

* Remove duplicated “latest N” helpers and simplify backend wiring.
* Provide consistent, strongly typed data access across the app.

What

* `src/api/*`: add types + `getAll*()` helpers (mock-backed).
* App pages: refactor to use `getAll*()`; add tag/author links and CTAs.

Breaking changes

* Deprecated `getLatest3*/getLatest6*/getLatest9*` helpers; replaced with `getAll*()`.
```


## Example: Fix — stabilize news listing keys and slice bounds

```bash
fix(app/news): correct key prop and slice bounds in listing

Why

* Prevent React key warnings and ensure stable rendering.

What

* Use title-based composite keys; clamp slice to available length.
```


## Example: UX — responsive breadcrumbs & news category page

```bash
feat(app/news,components): add business news categories, SME category page,
responsive breadcrumbs, and mock sort/pagination

Why

* Improve mobile usability: prevent breadcrumb overflow and keep context.
* Separate “categories” from tags to aid discovery and SEO.
* Provide a dedicated `/news/category/sme` landing to showcase structure.
* Set user expectations with non-functional sort & pagination UI (for now).

What

* `components/Breadcrumbs.tsx`: responsive truncation (hide middle on mobile),
  long-word truncation, ARIA labels; used across pages.
* `app/news/page.tsx`: add 3 business news categories (static slugs), link to
  `/news/category/[slug]`.
* `app/news/category/sme/page.tsx`: hero, listing via `getAllNews()`, dropdown
  sort (query string), condensed pagination UI with SVG arrows (1 … 3 4 5 … 10).
* Typography utilities in `globals.css`: `.tb-text-brand`, `.tb-h1` (custom px),
  `.tb-h2`, `.tb-h2-brand`; applied to hero headings/sections.

Breaking changes

* None (new pages/components; existing routes unchanged).
```


## Example: Small change — single-line commit (no body)

```bash
chore(ui): fine-tune h1 spacing on News hero for better fold fit
```
