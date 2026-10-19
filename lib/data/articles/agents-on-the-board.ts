import type { Article } from './types'

export const article: Article = {
  id: 'agents-on-the-board',
  title: 'Agents on the board: planning with coding agents as teammates',
  excerpt: 'Kanaboards started with a question: what if AI coding agents could read and update the same planning surface as the humans? Here\u2019s what that looks like.',
  date: '2025-12-09',
  displayDate: '09 December 2025',
  readTime: '5 min read',
  category: 'AI',
  published: true,
  body: `Late in 2024 I noticed a pattern that kept costing me time. I would plan work in a board, then copy a card\u2019s description into an agent prompt, run the agent, watch it work, and paste the outcome back into the card. The board and the build lived in two systems, and I was the glue between them.

That gap is where Kanaboards started. The question was simple: what if the agent could read the board itself?

## The problem with agents and trackers

Most project trackers assume the person updating them is a human typing into a text field. AI coding agents are fast and tireless, but they have no native way to:

- see what work is ready,
- claim a card,
- post progress back, or
- mark a card done with a summary.

So the human becomes a switchboard: translating board state into prompts, then translating agent output back into board updates. It works, but it\u2019s slow and brittle, and it gets worse the more agents you run.

I wanted the board to be the shared surface \u2014 not the thing a human has to keep in sync with the agents.

## Making the board the contract

Kanaboards exposes a Model Context Protocol (MCP) interface with 54 tools across three tiers: core board operations, board management, and sprint/agent tooling. An agent can poll for pending work, claim a card, stream logs as it works, and mark the outcome. No prompt-copying, no status-dragging.

The agent side is a hybrid system: the queue lives on the cloud (D1), but the runner lives on the developer\u2019s machine. A local daemon polls for assignments and dispatches the chosen runner \u2014 OpenCode, Codex, or Claude. The board records the work; the runner does the work.

This matters because agents don\u2019t all talk the same way. Some work headless, some interactive, some with sandboxing. Keeping the runner local means the agent runs in the developer\u2019s actual environment \u2014 same repo, same secrets, same tooling \u2014 instead of a sealed cloud container that can\u2019t see your code.

## Keeping it useful for humans

If the board is only good for agents, it\u2019s not a planning tool \u2014 it\u2019s a queue. The human side has to hold up on its own:

- boards, columns, swimlanes, and card hierarchy,
- sprints with velocity tracking,
- calendar, Gantt, and list views,
- real-time presence through Durable Objects,
- Butler automation for repetitive moves,
- GitHub integration that syncs PRs back to cards,
- an encrypted vault for sensitive notes,
- email-to-card for inbound work.

None of that is novel in isolation. The point is that it coexists with the agent surface. A human can drag a card, an agent can update the same card, and neither has to know the other is there.

## What is in the current build

Kanaboards is in development and has not yet been publicly released. The current build includes:

- 54 MCP tools, organised in tiers so a client can discover what\u2019s available,
- 62 database migrations on Cloudflare D1,
- a local runner package supporting OpenCode (stable), Codex (beta), and Claude (beta),
- Google and email/password auth, with email verification,
- a PR-based deploy pipeline: dev \u2192 production, with smoke tests on every promotion,
- a single Cloudflare Worker handling the app, the API, and the MCP endpoint.

The honest summary: it\u2019s not finished, and the agent workflow is the part that still moves the fastest. But the core idea \u2014 the board as the shared surface, not the sync target \u2014 works. Agents and humans read and write the same state, and neither of them is me pasting text between two windows.

## What I learned

The biggest lesson was that "agents on the board" is not an AI problem. It\u2019s a permissions, state, and trust problem. The hard parts were:

- **Leases and heartbeats.** An agent claims a card, then the connection drops. You need a heartbeat and a timeout, or the card sits "in progress" forever.
- **Tiered tool access.** Not every agent should be able to delete a board. The MCP tools are tiered, and a client has to explicitly unlock higher tiers.
- **Runner heterogeneity.** OpenCode, Codex, and Claude have different CLI shapes, different sandboxing, and different approval models. The runner abstraction absorbs that; the board doesn\u2019t have to care.

The work that mattered wasn\u2019t the AI. It was building the operational discipline around the AI so the board stays honest when an agent crashes mid-task.

---

Kanaboards is not yet released. To hear more about the project as development progresses, [get in touch](/contact).`,
}