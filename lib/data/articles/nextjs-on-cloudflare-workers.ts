import type { Article } from './types'

export const article: Article = {
  id: 'nextjs-on-cloudflare-workers',
  title: 'Running Next.js 16 on Cloudflare Workers: what actually breaks',
  excerpt: 'OpenNext gets you 90% of the way. The last 10% \u2014 patch scripts, Node APIs, and edge quirks \u2014 is where the real work lives.',
  date: '2026-03-28',
  displayDate: '28 March 2026',
  readTime: '7 min read',
  category: 'Engineering',
  published: true,
  body: `Both Horrorometer and SENDadvisor run Next.js 16 on Cloudflare Workers via @opennextjs/cloudflare. Every time I tell someone that, they ask the same question: "Does that actually work?"

The honest answer: yes, but you earn it. Here\u2019s what actually breaks, and what I did about each thing.

## Why bother

The pitch is simple. Cloudflare Workers gives you a single deployment target that\u2019s fast everywhere, with D1 (SQLite at the edge), R2 (S3-compatible storage), KV, Durable Objects, and Analytics Engine all in one account. No container orchestration, no regional routing decisions, and a free tier generous enough to run a real product on.

For a solo builder, one platform for compute, storage, cache, and analytics is a massive reduction in operational surface. That\u2019s why I accepted the friction.

## What breaks

### 1. The Node runtime isn\u2019t the Node runtime

Workers run on a V8 isolate, not a Node process. Strict ES modules, no \`require\`, no \`fs\`, no \`path\` in the places you expect them, and a bunch of APIs that exist but behave subtly differently. Next.js assumes Node. \u201cAssumes\u201d is doing a lot of work in that sentence.

The fix: OpenNext, which transpiles the server into a Worker-compatible format. It handles the big stuff \u2014 routing, rendering, the request lifecycle. It does not handle every package in your dependency tree.

### 2. Patch scripts: the unglamorous glue

Three separate post-build patch scripts keep Horrorometer running. Each one rewrites some assumption the framework makes about its runtime \u2014 file access patterns, module resolution, an API that exists in Node but not in workerd. I\u2019m not going to pretend they\u2019re elegant. They are, however, small, testable, and the difference between a build that deploys and a build that boots.

The lesson: budget for patch scripts. When you\u2019re on a new runtime with a framework that targets an older one, the gap lives in post-build fixes and nobody warns you about this in advance.

### 3. Local dev lies to you

Wrangler dev mode is good, but it\u2019s a simulation, not the real thing. Differences I\u2019ve hit: timing behaviours under load, minor differences in how headers are handled, and \u2014 most annoyingly \u2014 packages that work in local dev and fail in production because the dev shim provides an API workerd doesn\u2019t.

The fix: smoke tests after every deploy, in production, before promotion. Not "I deployed it", but "I deployed it and confirmed the critical paths return 200".

### 4. Bundle size and cold starts

A Next.js server bundle in a Worker has size limits and cold-start characteristics that are different from a Node process on a long-running server. Route splitting helps. Keeping heavy dependencies out of the server runtime helps more \u2014 push what you can to the client, keep the server lean.

## What works better than you\u2019d expect

- **Static generation + edge caching** is the sweet spot. Content-rendered pages from D1, cached at the edge, revalidated by events \u2014 fast and cheap.
- **D1 is genuinely fine** for read-heavy workloads. Both products lean on it heavily and neither has felt the ceiling.
- **Durable Objects** (Kanaboards) give you coordination primitives that would otherwise require Redis plus a lot of hand-rolled wiring.
- **One deploy artifact** for app, API, and (in Kanaboards\u2019 case) MCP endpoint simplifies pipelines more than you\u2019d expect.

## Would I do it again?

Yes \u2014 with my eyes open. The pattern I\u2019d recommend: start on Workers only if you\u2019re happy reading source code when things break, and put the deploy pipeline (build \u2192 patch \u2192 deploy \u2192 smoke test) in place before you write features. The framework will catch up eventually; until then, the patch scripts are load-bearing.`,
}