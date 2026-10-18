import type { Article } from './types'

export const article: Article = {
  id: 'data-pipelines-for-directories',
  title: 'A directory is a pipeline with a UI on the front',
  excerpt: '11,000+ SENDadvisor listings, four pipeline stages, and a state machine that keeps half-finished data off the public site.',
  date: '2026-01-31',
  displayDate: '31 January 2026',
  readTime: '7 min read',
  category: 'Product',
  published: true,
  body: `SENDadvisor has 11,000+ listings covering all 153 English local authorities. The public site \u2014 search, categories, maps \u2014 is what users see. But the product is the pipeline behind it, because a directory with stale or wrong data isn\u2019t a product, it\u2019s a liability.

The listings flow through four stages, and the discipline is in the transitions.

## Stage 1: Gatherer

Sources: local authority Local Offer sites, provider websites, community submissions, and government registers \u2014 GIAS school data (25k open schools) and Ofsted inspections synced against the DfE register.

Gathering is not scraping. Each source has a fetch strategy matched to its shape: polite intervals, robots-respecting, with a retry escalation ladder for blocked sites \u2014 local-first Scrapling stealth probe \u2192 self-hosted Crawlee worker \u2192 cloud Apify fallback. Four layers sounds like overkill until a site randomly starts blocking and your options are "escalate" or "silently lose a county\u2019s data".

## Stage 2: Enricher

A raw gathered record has a name and a website. A useful listing has categories, accessibility info, opening hours, and coordinates. The enricher normalises, deduplicates, classifies, and geocodes \u2014 the slow, unglamorous work that turns scraped text into structured data.

Deduplication deserves special mention: the same SEND service can appear on the council\u2019s Local Offer, its own website, and a community list, with different names and addresses. Fuzzy matching across name, postcode, and phone catches most; the rest needs human review, which brings us to\u2026

## Stage 3: Verifier \u2014 the human in the loop

This is the part most pipelines skip, and the reason the published data can be trusted. A local enrichment audit server reviews gathered batches before any write to production. Every pipeline write is logged with source attribution \u2014 where the data came from and when. Provider claims (a business asserting "this is our listing") get verified, not just email-matched.

Automation gets you to "probably right". Verified gets you to "right, and I can tell you why".

## Stage 4: Publish \u2014 and the state machine that gates it

D1 is the published projection, not the source of truth. A record\u2019s workflow status \u2014 gathered \u2192 enriched \u2192 verified \u2192 published, with failed and stale branches \u2014 is enforced as a state machine. **Half-finished records physically cannot reach the public site**, because the publish transition only fires from the verified state.

This separation also makes re-publishes safe: the enrichment pipeline can be rerun, the projection rebuilt, and the public site never flickers.

## Operating a data product

- **Backups with restore drills.** Daily D1 \u2192 R2, and monthly drills where I actually restore. A backup you\u2019ve never restored is a hope, not a backup.
- **Analytics on pipeline health**, not just site traffic. Gather success rates, enrichment lag, stale-record counts \u2014 the data\u2019s freshness is the uptime that matters.
- **Moderation tooling from day one.** I built it late and paid for it in operational debt. If your product has user-generated content, the moderation tools are the product.

## The takeaway

If you\u2019re building a directory, catalogue, or anything data-shaped: the pipeline is the product. Design it first \u2014 with explicit states, human gates where trust matters, and attribution for every write \u2014 and the UI becomes the easy part. I got this order wrong at the start; the pipeline should have been the first thing, not something built alongside.`,
}