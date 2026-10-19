import type { Article } from './types'

export const article: Article = {
  id: "designing-with-ai-agents",
  title: "Working with coding agents: the contracts visible in the code",
  excerpt: "Repository instructions, runner adapters, assignment checks, and release verification connect coding agents to a defined task.",
  date: "2026-10-19",
  displayDate: "19 October 2026",
  readTime: "2 min read",
  category: "AI",
  published: true,
  body: `There are two concrete agent-related surfaces in these projects: repository instructions in the portfolio, and local runner integration in Kanaboards. Together, they show how project constraints and execution context reach an agent.

## Put repository constraints where the work happens

The portfolio includes an AGENTS.md instruction to read the bundled Next.js documentation before changing framework code. That addresses a specific risk: an assistant can produce plausible code from conventions that do not match the installed version.

The instruction is inspectable. Whether it was followed in an individual change still needs review; the file's existence is not proof of compliance.

## Keep the runner behind an interface

Kanaboards' local runner registry includes OpenCode, Codex, and Claude adapters. Runner selection has an explicit precedence: a CLI choice, an environment value, an assignment hint, then a default.

The daemon checks repository and branch context before executing an assignment. It also reports heartbeats while work is active. These controls connect an agent process to a particular task and checkout rather than assuming that a successful process launch means the intended work is happening.

Kanaboards is still unreleased. This describes its implementation, not adoption by a public user base or measured time saved.

## Verify the output beyond the agent response

The portfolio's release work used repository diffs, lint, tests, a static build, and live response checks. Automatic deployments now run the CI build command before publishing from main.

That provides evidence about the delivered change. It does not establish that an agent improved cycle time by a particular percentage, or that generated writing accurately represents personal experience.

This blog review is another example of that boundary. Code can substantiate an implementation detail. It cannot substantiate a remembered conversation, research session, or personal habit. Those need their own evidence rather than a confident first-person sentence.`,
}
