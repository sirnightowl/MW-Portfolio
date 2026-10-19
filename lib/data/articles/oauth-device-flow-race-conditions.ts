import type { Article } from './types'

export const article: Article = {
  id: "oauth-device-flow-race-conditions",
  title: "The device-authorisation flow is a state machine, not just a form",
  excerpt: "Conditional updates and single-use claims in Horrorometer’s device-authorisation service, with tests for defined state outcomes.",
  date: "2026-10-19",
  displayDate: "19 October 2026",
  readTime: "2 min read",
  category: "Engineering",
  published: true,
  body: `Horrorometer's device-authorisation service has more responsibilities than displaying a code. It creates a pending authorisation, handles approval or denial, responds to polling, and exchanges an approved record for an API token.

The code and its tests make two transition boundaries especially clear.

## Approval must claim the pending state

The approval method first looks up the user code and rejects a missing, expired, or non-pending result. It then performs a conditional update whose predicate still requires the row to be pending. The returned row determines whether the approval succeeded.

That second condition matters: the result cannot be decided solely by the earlier read. Another request may have changed the state in between.

The expiry lookup and the conditional update are separate operations, however. Describing every check in this method as one atomic transaction would overstate the implementation.

## An approved code should only be consumed once

On the successful polling path, the service conditionally deletes the approved device-code row and uses the returned data as the claim to mint a token. A poll that does not win that claim returns an invalid-grant result instead of continuing to mint another token.

The tests exercise both a winning claim and an empty returned result. They also cover pending, expired, denied, and over-frequent polling responses.

## Be precise about what the tests establish

The service tests use a controllable database mock. That lets them exercise branches such as a conditional update returning no row. It is useful evidence that the application handles those outcomes; it is not the same as a concurrent integration test against a deployed database.

This implementation provides a concrete state-machine lesson: make a contested transition depend on the write's result, and give the losing path a defined response. Keep the claim that narrow unless integration results support something broader.`,
}
