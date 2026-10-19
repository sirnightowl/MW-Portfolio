import type { Article } from './types'

export const article: Article = {
  id: "circuit-breakers-for-calm-uis",
  title: "Circuit breakers: what Horrorometer’s implementation actually does",
  excerpt: "How Horrorometer handles upstream failures with a small state machine, configurable thresholds, and optional fallbacks.",
  date: "2026-10-19",
  displayDate: "19 October 2026",
  readTime: "2 min read",
  category: "Engineering",
  published: true,
  body: `Horrorometer contains a circuit-breaker utility and uses it in its TMDB proxy. Its implementation shows how circuit state, recovery thresholds, and fallbacks fit together.

## Make the state explicit

The utility tracks CLOSED, OPEN, and HALF_OPEN states. Its default configuration sets a failure threshold of five, a recovery wait of thirty seconds, a success threshold of two, and a sixty-second monitoring period.

While the circuit is open, execute can return an optional fallback without calling the operation. Without a fallback, it throws an error. After the configured wait, the state can move to HALF_OPEN; successes and failures then influence the next transition.

These are configuration values and code paths. They are not measurements of production recovery time.

## Notice the limits of the implementation

Entries are held in an in-memory Map. That is not a shared, durable record of upstream health across every Worker instance. The HALF_OPEN check also permits execution; the utility does not implement a global lock that guarantees exactly one recovery probe.

Naming the pattern is not enough. Its storage and concurrency behaviour determine what it can actually guarantee.

## A fallback is still an interface decision

The TMDB proxy includes paths that wrap upstream operations with the breaker and supply a fallback. The route then interprets the result and chooses an API response. Other paths can return errors. It would be inaccurate to summarise that as a UI that never shows a hard error.

The Open Library client separately configures a timeout and retry limit. That makes timeout, retry, and circuit state distinct pieces of the dependency boundary rather than interchangeable labels for resilience.

The design question remains useful: what can this screen honestly show when its dependency is unavailable? The code gives a place to implement that answer. Evidence of uptime or visitor impact would need monitoring and incident records beyond the utility itself.`,
}
