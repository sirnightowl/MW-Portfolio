# Content Management Strategy

This document records the current approach for storing articles and the planned migration path as the blog grows.

## Current state

As of 2026-08-29 the portfolio stores 21 articles as TypeScript modules in `lib/data/articles/`. Each module exports an `Article` object and `lib/data/articles/index.ts` imports every file so that `generateStaticParams` can build the full blog.

This works well for a small, hand-curated blog. The entire article archive is compiled at build time, so there is no runtime CMS dependency, no network latency, and no API surface to secure.

## When to migrate

The flat-file approach will become unwieldy when one of these thresholds is reached:

- Article count exceeds ~40–50
- Articles need rich media (images, code blocks with syntax highlighting, tables, callouts)
- Multiple authors or a content workflow (drafts, scheduled publishing, review) are required
- The blog index page needs pagination or search

## Recommended migration path

### Phase 1: MDX files with `next-mdx-remote`

Move each article body into an `*.mdx` file under a new `content/articles/` directory. Keep the existing `Article` interface and blog templates; only the data loader changes.

Benefits:
- Full CommonMark + GFM support (the site already uses `react-markdown` and `remark-gfm`)
- Code blocks with syntax highlighting via `rehype-highlight` or `rehype-pretty-code`
- Frontmatter for metadata; content remains in version control
- Minimal disruption to existing page structure

### Phase 2: Headless CMS

If a content workflow or non-technical authors become necessary, migrate to a headless CMS. Given the existing Cloudflare knowledge in the codebase, a lightweight option such as Cloudflare D1 with a small admin UI, or a managed service such as Sanity or Contentful, would fit the project scale.

This phase is **not** required until the site significantly outgrows the MDX approach.

## Decision log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-08-29 | Keep flat-file TypeScript articles for now | The site has 21 articles and no rich-media requirements. Migration cost outweighs benefit today. |
| 2026-08-29 | Plan MDX migration for ~40+ articles | MDX preserves version control and requires the smallest template change. |
