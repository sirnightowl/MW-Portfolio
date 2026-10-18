import type { Article } from './types'

export const article: Article = {
  id: 'horror-ux-dread-interface',
  title: 'Designing dread: the UX of a horror game',
  excerpt: 'Horrorometer and Stay With Me: Deep Sea both design fear, from opposite directions \u2014 what dread teaches a product designer about attention and time.',
  date: '2025-08-30',
  displayDate: '30 August 2025',
  readTime: '5 min read',
  category: 'Game Design',
  published: true,
  body: `I build horror experiences from two directions: Horrorometer is a calm, trustworthy platform for horror *fans* \u2014 and Stay With Me: Deep Sea is a real-time narrative game that tries to *produce* dread in the player. Designing both at once has been unexpectedly useful, because designing fear is just designing attention and time with the safety off.

## Stay With Me: Deep Sea: dread is designed waiting

The core mechanic of Stay With Me: Deep Sea is absence. Mara is 412 metres down; messages arrive over real minutes and hours; the player\u2019s job is to wait, watch, and decide. Every design decision serves the dread:

- **The radar never leaves.** Even inside the message thread, a persistent radar sweeps in the corner \u2014 the ocean is always there, whether or not anything is happening. Anxiety isn\u2019t an event; it\u2019s an environment.
- **The waiting is visible.** Live clock, depth gauge, oxygen bar \u2014 a surface HUD that turns "nothing is happening" into "nothing is happening *yet*". The most tense screen is the one where Mara isn\u2019t typing.
- **Degradation as storytelling.** Comms get noisier, the crew roster thins, the tools in the menu \u2014 camera loop, motion sensor \u2014 become less reliable as the station dies. The UI lying to you slightly is scarier than a jump scare, because it\u2019s foreshadowing.
- **No cheap suspense.** Deaths are earned and foreshadowed; quick-time sequences are synced to haptics so the body participates. A false scare is a broken trust, and trust is the entire resource a narrative game has.

The UX insight: **the player\u2019s imagination is the rendering engine.** The interface\u2019s job is to aim attention at the empty spaces and keep hands off. Every element that *does* something visually is a moment the imagination doesn\u2019t get to do it instead.

## Horrorometer: dread is the content, the UI stays out of it

Horrorometer is the opposite register \u2014 fans of the genre, browsing, rating, comparing. The design brief is calm: the three-axis ratings (Creepy, Gory, Jumpy) are doing the emotional work, and the interface\u2019s job is to be a neutral, trustworthy instrument. Fast search, clear profiles, no theming gimmicks \u2014 a horror product that *performs* horror via dark UI patterns is a costume, and users see through costumes.

The lesson cuts both ways: **match the interface\u2019s register to the fear\u2019s role.** In Stay With Me: Deep Sea, fear is the product and the interface is complicit in it. In Horrorometer, fear is the subject matter and the interface is a clean window. Getting this backwards \u2014 spooky UI on a utility, or neutral UI on a game \u2014 produces the uncanny valley of horror design.

## What horror taught my product design

- **Absence is a feature.** Most products fill every pixel with reassurance \u2014 spinners, badges, tips. Stay With Me: Deep Sea taught me how much an interface can say by showing time passing and nothing else. Boring products need the opposite lesson: calm comes from *subtracting* reassurance, not adding it.
- **Degrade gracefully, and narrate the degradation.** "Something\u2019s wrong" states in Stay With Me: Deep Sea became my model for graceful degradation in Horrorometer\u2019s circuit breaker: when TMDB fails, the UI admits it calmly and tells the user what to do next. Users forgive outage; they don\u2019t forgive improvisation.
- **Time is content.** Read times, "last updated" dates, message pacing \u2014 when something arrives is as authored as what it says. Product designers treat timing as plumbing; horror designers know it\u2019s the script.

Fear, it turns out, is a rigorous design teacher: it demands that every element either aims attention or gets out of the way. That\u2019s just good UX with higher stakes.`,
}