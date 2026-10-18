import type { Article } from './types'

export const article: Article = {
  id: 'oauth-device-flow-race-conditions',
  title: 'The OAuth device flow is a state machine, not a form',
  excerpt: 'Implementing RFC 8628 taught me more about race conditions than any CRUD app ever did. Here\u2019s where the concurrent states bite.',
  date: '2026-03-07',
  displayDate: '07 March 2026',
  readTime: '8 min read',
  category: 'Engineering',
  published: true,
  body: `Horrorometer needed TV app support, which meant device authorisation \u2014 the RFC 8628 flow you\u2019ve used on every streaming stick: the device shows a code, you enter it on a phone, the device polls until it\u2019s authorised.

I estimated it at a weekend. It took substantially longer, because the device flow isn\u2019t a form with two steps \u2014 it\u2019s a distributed state machine where nobody holds all the state at once. Every bug I hit came from treating it like a CRUD endpoint.

## The actors

Three participants, each with partial knowledge:

- The **device** \u2014 generates a code, displays it, and polls a token endpoint on an interval.
- The **user** \u2014 opens a verification URL, enters the code, and approves.
- The **server** \u2014 the only party that can see the whole board, and even then only through whatever storage guarantees you build.

The spec defines a handful of states \u2014 pending, user declined, expired, authorised \u2014 and a strict set of legal transitions. The work is making illegal transitions impossible.

## Where the race conditions live

### Two devices, one code

The code must be bound to a device and a session. If code entry and a poll land at the same moment, exactly one of them should win, and the other should get a defined answer \u2014 not a 500, not a half-authorised state.

### The poller vs. the approver

The device polls every 5 seconds. The user approves at a random moment. The approval write and the next poll read can interleave \u2014 and on a serverless runtime, they might land on different isolates entirely. "Check-then-act" in application code is a bug: the check and the act have to be atomic.

### Revocation vs. polling

The user changes their mind and revokes while the device is mid-poll. What does the next poll return? Undefined behaviour here is how you get devices that hold tokens nobody meant them to have.

### Expiry vs. everything

The code expires after 15 minutes \u2014 but expiry has to interleave safely with approval, decline, and revocation. An approval that lands one second after expiry should fail cleanly, not resurrect a dead session.

## The fix: compare-and-swap everything

The pattern that made this tractable: every state transition is a compare-and-swap. The write doesn\u2019t say "set status to authorised" \u2014 it says "set status to authorised **only if the current status is pending**", and reports whether it won. D1 supports this with conditional updates; SQL is good at this, because it\u2019s exactly the kind of guarantee databases were invented for.

That single rule eliminates whole classes of bugs:

- Two racing approvals? One wins, one gets "already authorised" \u2014 and the response to the loser is defined.
- Approval after expiry? The CAS fails, because the condition checks the expiry too.
- Revocation racing a poll? Both are CAS writes on the same row \u2014 whichever wins, the poller\u2019s next read sees a consistent state.

## Testing: simulate the races on purpose

I ended up with 20 state-machine tests, and the valuable ones are the ones that deliberately interleave:

- approve during a poll, and assert both responses are legal,
- decline and approve racing each other, and assert exactly one outcome class survives,
- fire expiry at the exact moment of authorisation, both orderings,
- duplicate device code entry, and assert the second gets a defined error.

The passing test isn\u2019t "it worked" \u2014 it\u2019s "it failed in the way the spec allows and nothing else".

## What I took away

State machines deserve respect, and OAuth flows are state machines wearing a form UI. If your transitions are check-then-act in application code, you don\u2019t have a state machine \u2014 you have a bug farm with extra steps. Make the storage layer enforce the transition rules, and the application layer becomes boring.

Boring, again, is the goal.`,
}