import type { Article } from './types'

export const article: Article = {
  id: 'security-audit-checklist',
  title: 'What two security audits taught me to fix first',
  excerpt: '31 audit cards, two formal reviews, and the checklist I now run before shipping anything with an auth flow.',
  date: '2025-10-11',
  displayDate: '11 October 2025',
  readTime: '7 min read',
  category: 'Engineering',
  published: true,
  body: `Horrorometer has been through two formal security/architecture audits (May and June 2026 of its lifecycle). Between them, 31 audit cards were opened and closed. Some findings were exotic. Most weren\u2019t \u2014 they were the same predictable gaps that show up in almost every self-built product, and closing them permanently changed how I start new projects.

This is the checklist I wish I\u2019d had before the first audit \u2014 ordered by how often each item bit me, not by how interesting it is.

## The predictable findings

### 1. CSRF on every mutation route \u2014 all of them
Eighteen admin mutation routes lacked CSRF protection. Not because I hadn\u2019t heard of CSRF \u2014 because I\u2019d protected the routes I could picture being attacked and missed the long tail. The fix wasn\u2019t just adding tokens to 18 routes; it was a rule: **if it mutates state, it carries CSRF protection, with zero exceptions for "internal" routes.** Internal routes are exactly what a confused-deputy attack loves.

### 2. Enumeration, everywhere you send email
Password reset, signup confirmation, login errors \u2014 every response that differs based on whether an account exists leaks a user database to anyone with a script and patience. Generic error messages on all of them ("if that account exists, we\u2019ve sent an email"), plus a cooldown on password-reset emails (60 seconds) so reset-spam can\u2019t be used as a probe or a harassment tool.

### 3. Role escalation needs server-side validation, not enum hope
Early role changes accepted any role value the client sent. The audit\u2019s fix: Zod enums on the escalation path, checked server-side, with the allowed transitions defined \u2014 not "user sends string, backend trusts it". The general rule: **any field that grants power is validated against an allow-list at the boundary**, never parsed hopefully.

### 4. Rate limiting that can\u2019t become a self-inflicted outage
The original rate limiter failed closed: if its backing store was unreachable, all traffic stopped. The audit called it correctly \u2014 that\u2019s an availability vulnerability you built yourself. Now it fails open: a DB outage means best-effort limiting and the site stays up. Fail-open is a deliberate, per-subsystem decision \u2014 correct for a review platform, wrong for an admin console. The audit finding wasn\u2019t "fail open"; it was "decide, and know which one you chose and why".

### 5. Logs and breadcrumbs that don\u2019t leak PII
Sentry breadcrumbs were capturing user identifiers on error paths. Now: PII scrubbing on every breadcrumb before it leaves the process. Observability you can\u2019t trust with user data is a liability, not a feature.

### 6. The auth flow you didn\u2019t build still needs auditing
The RFC 8628 device flow (its own story) got its own audit pass: state transitions compare-and-swapped, polling responses defined for every state, revocation races tested. Anywhere state changes based on external input, the audit question is "what happens if two of these land at once?" \u2014 and the answer has to be tested, not assumed.

## The meta-lesson

Every one of these has the same shape: **a decision that was implicit became explicit, got written down, and became a rule.** The value of an audit isn\u2019t the 31 cards \u2014 it\u2019s the dozen rules that now run automatically at the start of every project instead of costing a card each.

My pre-ship checklist, in the order I run it:

1. Every mutation route: CSRF, auth check, input validation \u2014 enumerated exhaustively, not "the important ones"
2. Every email/error path: enumeration-proof, with cooldowns
3. Every privilege field: server-side allow-list
4. Every rate limiter and circuit breaker: fail-open or fail-closed, decided on purpose
5. Every log pipeline: PII scrubbed at source
6. Every state machine: transitions atomic, races tested

Two audits in, the second one found less than half the issues of the first \u2014 not because the auditor got lazy, but because the rules were already running before the audit started. That\u2019s the trajectory you want.`,
}