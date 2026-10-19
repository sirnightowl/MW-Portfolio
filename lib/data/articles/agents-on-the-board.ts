import type { Article } from './types'

export const article: Article = {
  id: "agents-on-the-board",
  title: "Agents on the board: the implementation in Kanaboards",
  excerpt: "How the unreleased Kanaboards project separates tool definitions, shared assignments, and local coding-agent execution.",
  date: "2026-10-19",
  displayDate: "19 October 2026",
  readTime: "2 min read",
  category: "AI",
  published: true,
  body: `Kanaboards is an unreleased planning workspace in development. Its agent integration is already represented in code: tool definitions, assignment handlers, a local daemon, and separate runner adapters.

The architecture connects shared planning state to work that executes in a local checkout.

## Give the board a machine-readable surface

The MCP definitions describe operations such as listing boards, retrieving board context, and changing board settings. Each tool has an input schema; some also carry a tier describing its place in the tool surface.

Definitions and execution are separate. A schema describes an operation's inputs, while the handler decides whether and how it can run. The existence of a tool definition alone is not evidence that every permission boundary has been verified.

## An assignment is not a running process

The local daemon polls for assignments and claims available work before selecting a runner. Its registry includes adapters for OpenCode, Codex, and Claude, with an explicit precedence for choosing between them.

Before execution, the daemon checks repository and branch context. While a run is active, it sends heartbeats. On the server side, assignment handlers inspect the current state before accepting changes and can reject work already claimed by another agent instance.

These are concrete responses to coordination problems: where work runs, which assignment it belongs to, and what the board should know while it is running.

## Keep the claim as narrow as the evidence

The code demonstrates an architecture for sharing planning state with local coding agents. It does not establish adoption, time saved, or reliability across every runner and environment. Those would need recorded usage and separate evaluation.

The useful project lesson is that an agent integration needs more than a prompt field. It needs an explicit contract for accepting work, reporting progress, and recording an outcome. Kanaboards is developing that contract alongside the human-facing board.`,
}
