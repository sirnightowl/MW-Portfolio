import type { Article } from './types'

export const article: Article = {
  id: "horror-ux-dread-interface",
  title: "Designing dread: interface choices in an unreleased horror game",
  excerpt: "Story timing, recovered camera views, and a separate archive in Stay With Me: Deep Sea are design mechanisms—not evidence of player reactions.",
  date: "2026-10-19",
  displayDate: "19 October 2026",
  readTime: "2 min read",
  category: "Game Design",
  published: true,
  body: `Stay With Me: Deep Sea is an unreleased narrative horror game. Its current implementation uses messages, timed progression, station tools, and recovered material to present the story. Those are concrete design mechanisms; the emotional result still needs evaluation with players.

## Timing is represented in the engine

The story engine processes timestamped actions and can return scheduled-notification effects. Message and beat data also influence when the next item is available.

That gives waiting an explicit place in the implementation. It is not merely an animation added after the dialogue. The design intention is to make the gaps between messages part of the experience, but the code alone cannot establish that a particular gap produces suspense rather than frustration.

## Give recovered material a place to live

The mobile app has separate thread, camera, and archive routes. The archive provider keeps recovered logs and camera items, persists them locally, and avoids adding another copy of an item with the same ID.

This lets recovered material exist beyond the instant it is encountered in the conversation. The camera and archive are therefore part of the information structure, not just background decoration.

The project also contains a radar component alongside these routes. Each tool offers a separate view into the fictional station; their effect on the pacing needs to be evaluated in a complete playthrough.

## Different jobs call for different interfaces

Horrorometer, the other horror-related project in this portfolio, records ratings and catalogue information. Its review model separates overall, Creepy, Gory, and Jumpy values. That is a different job from presenting a fictional emergency through a message thread.

The useful comparison is about purpose: one interface organises information about horror, while the other is part of a horror story. Whether the game actually creates dread, maintains trust, or makes its choices feel earned is a playtesting question. No participant reactions are being claimed here.`,
}
