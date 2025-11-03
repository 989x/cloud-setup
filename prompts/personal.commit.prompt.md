[INTENT]

- This file is commit-only. Use it only when the user requests a git
  commit message.
- If this file is pasted without a question, reply with exactly: ok
  (lowercase, no punctuation, no extra text).
- When asked for a commit, return only the commit message (subject line
  and optional body) in English, wrapped in a fenced code block:
  ```txt
  ...commit message...
  ```
- For non-commit tasks, ignore this file and defer to other prompt files.

[LANGUAGE]

- English-only. Use plain ASCII punctuation (no smart quotes).
- Keep lines wrapped at ~72 characters.

[FORMAT]

- Always wrap the entire output in a single ```txt fenced block.
- Subject (Conventional Commits v1.0.0): <type>(<scope>): <short, imperative summary>

[BODY SECTIONS]

- Include sections that apply. Omit ones that don’t.

- Order:
  Why
  <why this change is needed>

  What
  <what changed at a glance, key files/components>

  Breaking changes (optional)
  <only if behavior/API is breaking>

[TYPES]

- feat – new feature
- fix – bug fix
- docs – documentation only
- refactor – neither feature nor fix
- perf – performance improvement
- test – add/update tests
- build – build system / deps
- ci – CI config or scripts
- chore – maintenance (no src/test changes)
- revert – revert a previous commit

[RULES]

- Use present tense, imperative mood: "add", "refactor", "remove".
- Subject ≤ 72 chars, no trailing period.
- `scope` is optional but recommended (e.g., `api`, `app/catalog`, `deps`).
- Wrap body lines at ~72 chars.
- Omit sections that don’t apply.

[TEMPLATES]

- Single-line (small change):
  ```txt
  <type>(<scope>): <summary>
  ```

- Multi-section (recommended for non-trivial changes):
  ```txt
  <type>(<scope>): <summary>

  Why
  * ...

  What
  * ...

  Breaking changes (optional)
  * ...
  ```

[EXAMPLES]
- Feature — unify data fetchers & add CTAs
  ```txt
  feat(api,app): unify getAll* helpers with strong types; add 'View all' CTAs

  Why
  * Remove duplicated “latest N” helpers and simplify wiring.
  * Provide consistent, strongly typed data access across the app.

  What
  * src/api/*: add types + getAll*() helpers (mock-backed).
  * App pages: refactor to use getAll*(); add category links and CTAs.

  Breaking changes
  * Deprecated getLatest*/getTop* helpers; replaced with getAll*().

- Fix — stabilize listing keys and slice bounds
  fix(app/catalog): correct key prop and slice bounds in listing

  Why
  * Prevent React key warnings and ensure stable rendering.

  What
  * Use composite keys; clamp slice to available length.
  ```

- UX — responsive breadcrumbs & category page
  ```txt
  feat(app/blog,components): add categories page, responsive breadcrumbs,
  and mock sort/pagination

  Why
  * Improve mobile usability and discoverability; keep user context.

  What
  * components/Breadcrumbs.tsx: truncation + ARIA labels, reused across pages.
  * app/blog/page.tsx: add 3 categories (static slugs) linking to
    /blog/category/[slug].
  * app/blog/category/sme/page.tsx: hero + listing via getAllPosts();
    dropdown sort (query string), condensed pagination UI.

  Breaking changes
  * None.
  ```

- Small change — single-line
  ```txt
  chore(ui): fine-tune h1 spacing on hero for better fold fit
  ```
[PRIMARY REFERENCES]

- Conventional Commits v1.0.0: https://www.conventionalcommits.org/en/v1.0.0/
- Keep a Changelog: https://keepachangelog.com/en/1.1.0/
- SemVer: https://semver.org/
- Chris Beams: https://cbea.ms/git-commit/
