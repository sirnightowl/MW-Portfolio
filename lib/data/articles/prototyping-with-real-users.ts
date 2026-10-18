import type { Article } from './types'

export const article: Article = {
  id: 'prototyping-with-real-users',
  title: 'Prototype with real users or don\u2019t call it testing',
  excerpt: 'Rapid prototyping in local government: what I test, what I deliberately leave broken, and how a week of paper beats a month of opinions.',
  date: '2025-12-02',
  displayDate: '02 December 2025',
  readTime: '5 min read',
  category: 'UX',
  published: true,
  body: `In local government, the price of an untested assumption is unusually visible: it\u2019s a resident who can\u2019t claim what they\u2019re entitled to, a form abandoned at question three, a call centre queue that exists because the website failed. That price is why I\u2019m evangelical about getting prototypes in front of real users early \u2014 and honest about what "testing" means, because most of it isn\u2019t.

## What a prototype is for

A prototype exists to answer a question, not to look finished. Before I build anything, I write the questions down:

- Can users find X without being told where it is?
- Does the label "waste collection" mean anything to someone who just wants to know "which bin"?
- Where do they hesitate, backtrack, or guess?

If a prototype can\u2019t answer a real question, it\u2019s decoration, and it will gather opinions instead of evidence.

## The fidelity ladder

- **Paper and pen, first, always.** Screens drawn on cards, a human playing the computer. It feels ridiculous; it works. Users critique the idea honestly at this fidelity precisely because nobody\u2019s protecting feelings about a sketch. A week of paper beats a month of opinions in a meeting room.
- **Clickable wireframes** \u2014 grey boxes, real words, real task flows. The words matter more than the boxes: I test content design at this stage because people navigate by labels, not by visual hierarchy.
- **HTML prototype** \u2014 the moment interaction details matter: focus order, keyboard flow, error recovery, how the form behaves on a cracked Android phone. This is where accessibility meets usability, and it\u2019s always earlier than people expect.
- **Pilot with real users** \u2014 small numbers, real tasks, watched in silence.

## What I deliberately leave broken

A prototype with polished visuals collects feedback about the visuals \u2014 spacing, colour, "I don\u2019t like green" \u2014 while the task flow quietly escapes scrutiny. So I deliberately ship prototypes that look unfinished. Ugly is a feature: it keeps the conversation on the flow, the words, and the interaction, which is where the expensive mistakes live.

## The rules I test by

- **Real users, real tasks, small n.** Five users find most of the serious problems. The council\u2019s advantage is access to actual users of the actual service \u2014 use it. Recruiting people who match the real audience (not colleagues, not "someone from marketing") is the whole game.
- **Silence is data.** The pause before they tap. The re-read. The return to the home screen "just to check". I note hesitations as carefully as errors \u2014 often they\u2019re the same finding, one frame earlier.
- **Watch what they do, not what they say.** Post-session opinions are unreliable theatre. The recording of the attempt is the data.
- **Test the failure paths.** Everyone tests the happy path. The judgement of a service is what happens when something goes wrong \u2014 the wrong postcode, the ineligible case, the session that drops. Prototype those states or you\u2019ve tested nothing.
- **Close the loop.** Findings get triaged and attached to the prototype\u2019s next version, and the version after that gets a short re-test. A usability test whose findings die in a document is a ritual, not research.

## Why this holds for solo products too

The indie products get the same discipline at smaller scale \u2014 Horrorometer\u2019s rating axes, SENDadvisor\u2019s search-first homepage, The Diver\u2019s first-hour pacing, all prototyped and watched before being built properly. The difference between solo work and council work is the budget, not the principle: five real users, an honest question, and the humility to change the plan is a portable method. It fits in a founder\u2019s week, and it\u2019s still the cheapest insurance in the industry.`,
}