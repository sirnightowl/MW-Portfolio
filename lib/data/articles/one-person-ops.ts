import type { Article } from './types'

export const article: Article = {
  id: 'one-person-ops',
  title: 'Operations for one: running three products without a team',
  excerpt: 'Backups with restore drills, cron hygiene, and the Saturday-morning checklist that keeps three live products from keeping me up.',
  date: '2025-09-13',
  displayDate: '13 September 2025',
  readTime: '6 min read',
  category: 'Product',
  published: true,
  body: `Three products, one person, no on-call rotation. Horrorometer, Kanaboards, and SENDadvisor are all live with real users, and the constraint that shapes everything is simple: **anything that requires my attention at 2am will eventually happen at 2am, so the goal is to design attention out of the system.**

Here\u2019s the operating model, distilled.

## Backups you\u2019ve actually restored

Every product does daily D1 backups to R2. That\u2019s table stakes \u2014 the part that matters is the monthly restore drill, where I actually restore a backup to a scratch environment and check the data. A backup that\u2019s never been restored is a hope, not a backup; the drill is the only proof that the chain works end to end.

It\u2019s also caught real problems: a backup job silently failing after a schema change, and a retention misconfiguration. Both were invisible in the dashboard and obvious in the drill.

## Observability sized for one

I can\u2019t watch dashboards \u2014 I have a day job. So the observability stack is built around **alerts that only fire when a human must act**:

- Sentry with PII scrubbing on Horrorometer \u2014 errors that aggregate, dedupe, and only page on new issue classes.
- Analytics Engine on SENDadvisor \u2014 pipeline health over vanity traffic: gather success rates, enrichment lag, stale-record counts.
- Liveness and readiness endpoints on each product \u2014 poked by a monitor that pings me when they stop answering, not when they\u2019re "slow".
- Health of the health checks: a weekly cron confirms the monitors themselves are alive.

The rule: if an alert doesn\u2019t require me to do something, it\u2019s an email, not a page. Alert fatigue is how solo operators go blind.

## Cron jobs are production surface

Horrorometer runs two cron routes \u2014 hourly prune, nightly inactivity sweep \u2014 and they taught me the discipline: cron endpoints get auth (a CRON_SECRET), they log their runs, they alert on failure, and they have a "what happens if it double-fires" answer. A cron that silently dies is worse than no cron, because you\u2019ve designed as if the work is being done.

## The Saturday checklist

Fifteen minutes, weekly, and it\u2019s the entire operational overhead:

- [ ] Glance at error rates across all three products \u2014 anything new?
- [ ] Confirm backup jobs ran and the last restore drill date is within a month
- [ ] Review pipeline freshness on SENDadvisor \u2014 is any category going stale?
- [ ] Check certificate and domain renewals are more than 30 days out
- [ ] Triage the support inbox \u2014 user reports beat every other signal

The checklist exists because solo ops fail through forgetting, not through difficulty. Written down, it takes fifteen minutes; not written down, it takes a bad week to notice the gap.

## Boring choices, on purpose

- **Monorepo-per-product, one deploy artifact each** \u2014 the fewer moving pieces at 2am, the better.
- **PR-based pipelines with smoke tests on every promotion** \u2014 dev \u2192 production, nothing manual. "I think it works" is not a deploy state; the smoke test decides.
- **Same platform for all three** \u2014 Cloudflare for compute, storage, cache, and email routing. One set of behaviours to know deeply beats three sets known shallowly.
- **Fail-open rate limiting, fail-closed admin** \u2014 the deliberate, documented, per-subsystem choice, so future-me doesn\u2019t re-derive it under pressure.

## The honest summary

The goal of solo operations is to make the products\u2019 uptime boring and your weekends free. Every hour spent on restore drills, smoke tests, and checklists pays back in hours of sleep \u2014 and the compounding benefit is confidence: when something breaks, there\u2019s a runbook, a backup, and a monitored path back. Nothing is improvised at 2am.

Three products, one person, fifteen minutes a week. The system does the rest.`,
}