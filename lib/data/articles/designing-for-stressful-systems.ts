import type { Article } from './types'

export const article: Article = {
  id: 'designing-for-stressful-systems',
  title: 'Designing for stressful systems: lessons from SENDadvisor',
  excerpt: 'Families navigating SEND services are already overwhelmed. How do you design a directory that feels calm, trustworthy, and genuinely useful?',
  date: '2026-01-18',
  displayDate: '18 January 2026',
  readTime: '7 min read',
  category: 'UX',
  published: true,
  body: `SENDadvisor is a national directory for families of children with Special Educational Needs and Disabilities. The people using it are not browsing for fun. They\u2019re often stressed, time-poor, and navigating a system that feels designed against them \u2014 full of jargon, fragmented across 153 local authority websites, and structured around council boundaries rather than how families actually look for help.

Designing for that context is different from designing for a casual user. Here\u2019s what I learned.

## The user is already overwhelmed before they arrive

Most product design assumes a user in a relatively neutral state \u2014 curious, maybe goal-oriented, not in distress. SEND families are often the opposite. They\u2019ve been through a diagnosis, a referral, maybe a rejected EHCP request. They\u2019re looking for help, and they\u2019re looking for it now.

That changes everything about the interface:

- **No splash, no marketing.** The first thing they see is search. Location-aware, category-filtered, results-first. No hero banner, no "Get started" \u2014 just the tool they came for.
- **No jargon without a plain-English translation.** EHCP, Local Offer, SENDIASS, IPR \u2014 real terms families need to know, but also barriers. Every one is paired with a plain-English explanation, inline or one click away.
- **No friction in the critical path.** No account required to search. No login wall, no newsletter popup. The thing they need \u2014 listings near them \u2014 is available immediately.

## Trust is the primary feature

A directory is only as good as the trust families place in it. Stale, inaccurate, or commercially biased listings make the product worse than useless \u2014 they make it a false promise.

So trust signals are part of the product model, not bolted on:

- **Genuine review counts.** Not "\u2605\u2605\u2605\u2605\u2605" with no context. Actual moderated reviews from actual families, with dates and provenance.
- **Verified provider claims.** A provider can claim a listing, but the claim is verified \u2014 not just "this email matches" \u2014 and the verification state is visible.
- **Source attribution on every listing.** Where did this data come from? When was it last updated? Council, provider, or community contribution \u2014 it\u2019s visible.
- **Moderation that\u2019s visible.** Q&A is moderated, and there\u2019s a visible "reviewed by our team" signal, not a silent filter.

Trust isn\u2019t a badge. It\u2019s a system.

## The taxonomy follows the family, not the council

SEND services are administratively complex: 153 English local authorities, each with its own Local Offer, its own SEND team, its own EHCP pathway. The temptation is to mirror that structure \u2014 one page per council, organised by boundary.

Families don\u2019t think that way. A parent in Norwich doesn\u2019t care that a specialist service is technically in South Norfolk vs Norwich City. They care that it\u2019s 20 minutes away and it does what they need.

So the taxonomy is built around family needs:

- **Category routes for days out, services, and schools** \u2014 the things families actually search for, not "Category A / Category B".
- **Location-aware search as the primary surface.** Postcode or location, then results, then filter.
- **Every LA gets a dedicated page** with Local Offer URL, SEND team contacts, and EHCP pathway notes \u2014 not because families care about the council, but because the council is the gatekeeper, and having that information in one calm place saves hours of fragmented searching.

## Accessibility is non-negotiable \u2014 and it\u2019s an advantage, not a constraint

SEND families include disabled parents and carers. An inaccessible site excludes the exact people it exists to serve.

But accessibility in this context is more than WCAG compliance \u2014 it\u2019s cognitive load:

- **Plain English throughout.** Simplified without being condescending \u2014 stripped of unnecessary complexity.
- **Clear category routes, not a sidebar of filters.** Horizontal icon bars, photo-first cards. The interface should feel like a calm place, not a database query form.
- **Keyboard, screen reader, 200% zoom \u2014 all tested.** The user might be a parent with a visual impairment, a carer using a switch device, or someone on a phone in a hospital waiting room.

Designing for accessibility in a stressful context makes the product better for everyone. The calm interface, the plain language, the fast search \u2014 they help the stressed parent and the casual visitor equally.

## The data pipeline is the product

None of the above matters if the data is bad. SENDadvisor\u2019s 11,000+ listings come through a verified pipeline \u2014 gatherer \u2192 enricher \u2192 verifier \u2192 publish \u2014 with a state machine that keeps half-finished records off the public site. A local enrichment audit server reviews batches before any D1 write. Every pipeline write is logged with source attribution.

That\u2019s not visible to the user, and it shouldn\u2019t be. But it\u2019s the reason the user can trust what they see.

The lesson: in a stressful-system product, the invisible infrastructure is what makes the visible experience trustworthy.

## What I\u2019d do differently

- **Start with the content earlier.** I built the platform before the data pipeline was fully mapped. In hindsight, the pipeline should have been the first thing.
- **Invest in moderation tooling upfront.** It was initially manual and ad-hoc. Proper tooling from day one would have saved weeks of operational debt.
- **Local Offer pages were underestimated.** I thought they\u2019d be a small feature. They\u2019re one of the most-used parts of the site, because they consolidate information families currently spend hours hunting for across council websites.

Designing for stressful systems isn\u2019t about removing all the stress \u2014 you can\u2019t do that. It\u2019s about not adding to it. A calm, trustworthy, fast directory that works on a phone in a waiting room is a small thing. But for the family using it, it\u2019s the difference between giving up and finding help.`,
}