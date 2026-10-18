import type { Article } from './types'

export const article: Article = {
  id: 'shipping-solo',
  title: 'Shipping solo: what I learned building three live products',
  excerpt: 'Horrorometer, Kanaboards, and SENDadvisor all started as itches I wanted to scratch. Some patterns held across all three \u2014 and a few surprised me.',
  date: '2026-02-04',
  displayDate: '04 February 2026',
  readTime: '8 min read',
  category: 'Product',
  published: true,
  body: `I\u2019ve shipped three live products as a solo builder: Horrorometer (a horror-first rating platform), Kanaboards (a planning workspace for humans and AI agents), and SENDadvisor (a national SEND directory for families). All three are in production with real users. All three started as problems I couldn\u2019t stop thinking about.

Here\u2019s what held true across all three \u2014 and where I was wrong about what solo shipping would be like.

## The pattern that held: architecture decisions are the expensive ones

Every product\u2019s hardest moment was the same: deciding the system\u2019s boundaries before I had enough information to be sure.

For Horrorometer, it was choosing Cloudflare Workers as the runtime \u2014 strict ES modules, no Node APIs, and three post-build patch scripts to make Next.js 16 run on the Workers runtime. That decision was made in week one. By month three it was load-bearing in ways I couldn\u2019t have predicted, and unwinding it meant rewriting the deploy pipeline.

For Kanaboards, it was deciding the runner lives on the developer\u2019s machine, not in the cloud. I wanted agents running in the real environment \u2014 same repo, same secrets. But that meant queue state and execution state live in different places, and I had to build leases, heartbeats, and a local daemon to bridge them.

For SENDadvisor, it was choosing D1 as the published projection rather than the source of truth. The enrichment pipeline writes to D1, but the gatherer and enricher run locally. That separation kept half-finished records off the public site \u2014 but it meant building a state machine (gatherer \u2192 enricher \u2192 verifier \u2192 publish) before I had a single listing in the database.

The lesson: your first architectural decision is your most expensive one. Make it deliberately, and make it the one you can live with for the longest.

## The pattern that held: the boring infrastructure is the product

I thought I\u2019d spend most of my time on the interesting parts \u2014 the horror rating system, the MCP tool surface, the search experience. In reality, what determined whether each product survived was:

- **Observability.** Sentry with PII scrubbing on Horrorometer. Analytics Engine on SENDadvisor. Without it, users hit errors you never see.
- **Backups and restore drills.** SENDadvisor does daily D1 backups to R2 with monthly restore drills. I\u2019ve actually restored from them. That\u2019s not paranoia \u2014 it\u2019s operations.
- **Rate limiting and resilience.** Horrorometer\u2019s circuit breaker (5 failures / 60s \u2192 30s open) saved the UI more than once when TMDB had an outage. The graceful-degradation layer means the user never sees a hard error.
- **CI/CD with smoke tests.** Kanaboards runs smoke tests on every promotion. That\u2019s the difference between "I think it works" and "I know it works" when you deploy at midnight.

None of that is exciting. All of it is the reason these products are still live.

## The pattern that held: content is harder than code

SENDadvisor has 11,000+ listings. The pipeline that gathered them is maybe 20% of the work. The other 80% is data quality: deduplication, source attribution, enrichment audits, moderation, and keeping 153 local authority pages accurate.

Horrorometer\u2019s three-axis rating system (Creepy, Gory, Jumpy) was a design decision that took a week. The catalogue, the editorial curation, the genre taxonomy \u2014 that\u2019s ongoing work that will never finish.

The code is the easy part. The data is the product.

## Where I was wrong: "I\u2019ll keep it simple"

Every project started with the intention of keeping the stack simple. All three ended up with more moving parts than I planned:

- Horrorometer: I didn\u2019t anticipate needing RFC 8628 OAuth device flow, but the use case demanded it \u2014 a full protocol implementation with compare-and-swap state transitions and race-condition test coverage.
- Kanaboards: 62 database migrations. I thought it\u2019d be maybe 15.
- SENDadvisor: a local enrichment audit server, a self-hosted Crawlee worker, Scrapling stealth probes, and an Apify fallback. The blocked-site retry escalation alone is a four-layer system.

"Keep it simple" is a fine instinct, but it collides with reality when the problem is genuinely complex. The better heuristic: keep the *architecture* simple, and accept that the implementation will have the parts it needs.

## Where I was wrong: solo means fast

Solo means no coordination overhead, which is fast. But solo also means you do every job: design, frontend, backend, DevOps, security audit, content, moderation, support, and the bug you find at 11pm.

The bottleneck isn\u2019t skill \u2014 it\u2019s context-switching cost. A morning of database migrations, an afternoon of security audit, an evening of UI polish. Each switch has a ramp-up cost. On a team, that\u2019s distributed. Solo, you eat all of it.

The fix isn\u2019t to pretend you\u2019re a team. It\u2019s to batch aggressively \u2014 all infrastructure work in one stretch, all design in another, all content in another \u2014 and automate the repetitive stuff so it stops consuming attention.

## What I\u2019d tell someone starting

1. **Ship the architecture early.** Your first structural decision is the most expensive. Spend more time on it than feels reasonable.
2. **Build the boring infrastructure first.** Backups, observability, rate limiting, CI. Built after launch, they\u2019re built under pressure, and they\u2019re worse.
3. **Expect the content to be harder than the code.** Whatever the data problem looks like at the start, it\u2019s bigger.
4. **Batch your context switches.** Solo means you wear every hat. Don\u2019t switch hats every hour.
5. **Automate the repetitive.** If you do it twice, script it. If you do it three times, it\u2019s a cron job.

Three products, three years, a lot of mistakes that became infrastructure. That\u2019s the deal.`,
}