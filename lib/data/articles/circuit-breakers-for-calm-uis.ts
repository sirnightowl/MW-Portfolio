import type { Article } from './types'

export const article: Article = {
  id: 'circuit-breakers-for-calm-uis',
  title: 'Circuit breakers, graceful degradation, and UIs that stay calm',
  excerpt: 'When TMDB goes down, Horrorometer doesn\u2019t. The resilience patterns that keep an external-API-dependent product from melting.',
  date: '2026-03-21',
  displayDate: '21 March 2026',
  readTime: '6 min read',
  category: 'Engineering',
  published: true,
  body: `Horrorometer depends on two external APIs \u2014 TMDB for film and TV data, Open Library for books. Both are reliable\u2026 most of the time. "Most of the time" is not an availability target you can build a product on.

The day TMDB had an extended outage, Horrorometer kept working. Here\u2019s the stack of patterns that made that possible \u2014 in the order I\u2019d recommend implementing them.

## 1. Timeouts, before anything clever

Every outbound call has a timeout, and it\u2019s shorter than you\u2019d think. A hanging request is worse than a failed one \u2014 it holds connections, ties up Workers CPU time, and makes the user wait for an error they could have had five seconds ago.

If the upstream doesn\u2019t respond in time, fail fast and let the fallback layer handle it.

## 2. Retry with exponential backoff \u2014 and a cap

Three attempts, exponential backoff. But retries are a tax you pay to the upstream under stress, so cap them. Three is enough. And never retry non-idempotent calls with the same payload without thinking about what happens if the first attempt actually landed.

## 3. The circuit breaker: stop hammering a dead service

The core pattern. Horrorometer\u2019s breaker works like this:

- 5 failures within 60 seconds \u2192 the circuit opens
- while open, calls fail immediately \u2014 no request leaves the building
- after 30 seconds, one trial request goes through
- 2 successes \u2192 the circuit closes and traffic resumes

That\u2019s it. No external state, no monitoring dashboard required \u2014 a small state machine that answers one question: "should I even try?"

The value isn\u2019t that it saves the user from errors. It\u2019s that when TMDB comes back, Horrorometer recovers within 30 seconds instead of drowning it in a backlog of retries the moment it shows a pulse.

## 4. Graceful degradation: the UI never shows a hard error

The breaker decides whether to call the upstream. Degradation decides what the user sees when the answer is "no":

- Cached data stays served \u2014 a slightly stale movie page beats an error page, every time.
- Empty states are honest but calm: "We\u2019re having trouble reaching our film data right now" \u2014 not a red banner, not a crash screen.
- Writes queue where they can, and fail cleanly where they can\u2019t, with a message that tells the user what to do next.

The user-facing rule: never show an error you can\u2019t tell the user how to get past.

## 5. Fail-open, but only where it\u2019s safe

Counter-intuitive one: Horrorometer\u2019s rate limiting fails open. If the rate-limit store is unreachable, requests pass through, because a database outage should not lock every user out of the site. That\u2019s the right trade for a review platform. It would be the wrong trade for an admin panel \u2014 the point is that it\u2019s a deliberate decision, made per subsystem, not a default.

## The payoffs you don\u2019t expect

The obvious payoff is uptime. The unexpected one is what this does to your own head: once the failure paths are designed, an upstream outage stops being an emergency. Sentry fires, you glance at the graphs, you get on with your day. The resilience layer is what makes a solo-run product feel boring \u2014 and boring is the goal.

The full stack in one sentence: **timeout, backoff, breaker, degrade \u2014 and make every failure a designed one.**`,
}