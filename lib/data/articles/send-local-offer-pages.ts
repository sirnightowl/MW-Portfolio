import type { Article } from './types'

export const article: Article = {
  id: 'send-local-offer-pages',
  title: '153 local authorities, one calm page each',
  excerpt: 'The Local Offer pages were supposed to be a small feature. They became one of the most-used parts of SENDadvisor \u2014 here\u2019s why.',
  date: '2025-11-15',
  displayDate: '15 November 2025',
  readTime: '5 min read',
  category: 'Product',
  published: true,
  body: `When I planned SENDadvisor, the Local Offer pages were a footnote: one page per local authority, a bit of contact info, a link out. I estimated them at a day each, tops.

They\u2019re now one of the most-used parts of the site. Families spend more time on them than on some of the shiny features I thought would carry the product. The footnote became the headline, and the reason why says something about what "useful" actually means.

## What a Local Offer is, and why it\u2019s a mess

Every English local authority is legally required to publish a Local Offer \u2014 information about SEND services, support, and provision in their area. It\u2019s a genuinely good idea with a genuinely broken implementation: 153 authorities means 153 different websites, 153 different structures, 153 different navigation schemes, and \u2014 in practice \u2014 153 places for a tired parent to get lost.

The information exists. Finding it is the problem.

## What the pages do

Each authority\u2019s page on SENDadvisor consolidates, in one place and one consistent layout:

- the Local Offer URL and where it lives on the council\u2019s site \u2014 because half the battle is just locating it,
- SEND team contact details, including who actually answers the phone,
- EHCP pathway notes in plain English \u2014 what the process is, what happens when, and what the jargon means,
- links to the directory listings for that area \u2014 days out, services, and schools, filtered to the authority.

Same structure, every single authority. A parent who has learned the layout for Norfolk can use it for any other county \u2014 and for a family moving areas mid-EHCP, that consistency is not a convenience, it\u2019s a lifeline.

## Why it worked when the fancy features didn\u2019t

**It removes real hours of work.** Before this, a family\u2019s research session looked like: Google the council, find the SEND section, decode the navigation, find the Local Offer PDF, find the contact page, start again for the neighbouring county because the specialist service they need is technically over the boundary. The page does that work once, for everyone.

**It\u2019s trustworthy without being flashy.** Source attribution on every field, last-updated dates, plain-English summaries next to the official terminology. Trust features beat delight features in a stressful context every time \u2014 nobody navigating an EHCP rejection wants a delightful UI, they want a correct phone number.

**It matched how people actually search.** The data showed families weren\u2019t searching "SEND services Norfolk" \u2014 they were searching "EHCP help Norfolk", "what is an EHCP", and \u2014 most often \u2014 the name of their specific council plus "SEND". The page titles and structure meet those searches exactly.

**The boring consistency was the innovation.** One calm layout, 153 times, beats 153 well-intentioned-but-different council experiences. That\u2019s the whole product insight: consistency across a fragmented landscape is a feature in itself.

## The lesson I keep relearning

Features that save a user hours of drudgery beat features that impress other designers. I estimated the Local Offer pages as small because they were technologically small \u2014 one template, a data model, some contact fields. But value isn\u2019t proportional to technical difficulty. It\u2019s proportional to the work removed from the user\u2019s life.

Look at your own backlog and find the footnote features \u2014 the ones that are cheap for you to build because they\u2019re boring, and expensive for users to live without. That\u2019s usually where the product is hiding.`,
}