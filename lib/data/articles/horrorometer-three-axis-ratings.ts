import type { Article } from './types'

export const article: Article = {
  id: 'horrorometer-three-axis-ratings',
  title: 'One number can\u2019t describe a scare',
  excerpt: 'Why Horrorometer rates films on Creepy, Gory, and Jumpy instead of five stars \u2014 and what a week of rating-system design taught me about taste.',
  date: '2025-10-28',
  displayDate: '28 October 2025',
  readTime: '5 min read',
  category: 'Product',
  published: true,
  body: `Every review site collapses quality into one number. That\u2019s mostly fine \u2014 a restaurant is good or it isn\u2019t. But horror breaks the model, and Horrorometer exists because of how it breaks.

The problem in one comparison: a slow-burn atmospheric ghost story and a wall-to-wall splatter film can both score 3.5 stars. They have almost nothing in common \u2014 different pleasures, different audiences, different reasons you\u2019d recommend them. The star rating says "equally good" when what the user needs to know is "completely different experiences". A horror fan who hates gore but loves dread gets actively misled by the flattened score.

## Three axes, one personality

Horrorometer rates every title on three axes:

- **Creepy** \u2014 dread, atmosphere, the thing you feel before anything happens.
- **Gory** \u2014 the explicit stuff, what\u2019s shown rather than implied.
- **Jumpy** \u2014 the physical shock, the cat-in-the-fridge school of filmmaking.

The axes are independent, deliberately. High Creepy / low Jumpy is \u2014 arguably \u2014 the genre\u2019s high art. High Jumpy / low Creepy is a theme park ride, and a perfectly good one. The profile *is* the recommendation: a user who learns "my sweet spot is Creepy 8, Gory 2, Jumpy 5" has a search query no star system can express.

## What the design week actually involved

The rating system took a week of design, and most of it was spent saying no:

- **No composite score.** The tempting middle ground \u2014 average the three into one headline number \u2014 reintroduces the exact flattening the axes exist to avoid. The profile is the answer; there is no summary.
- **Three axes, not ten.** \u2014 I tested lists like "slow burn, found footage, folk horror, slasher\u2026" \u2014 each axis added makes rating more accurate and less likely to actually happen. Three is the number where users reliably finish the job. Coverage beats precision.
- **No half-stars.** A 1\u20135 range per axis keeps the mental load down. Users aren\u2019t calibrating instruments; they\u2019re expressing impressions.
- **Community over critic.** Ratings are averages of user profiles, with moderation \u2014 the taste graph is the product, not my opinion.

## The taxonomy is the moat

Anyone can clone a review site. Cloning a *taste model* requires users to have already populated it \u2014 every rating makes the next recommendation better, and none of it is portable. The lesson I keep from this applies well beyond horror: **the structure of your ratings encodes your understanding of your domain.** A star system says "I understand quality". A three-axis profile says "I understand *this* genre\u2019s quality" \u2014 and the second one earns loyalty the first can\u2019t.

It also changed how I watch horror, which I did not expect from a data model. Once you split dread from shock, you notice how many \u201cscary\u201d films are only loud.`,
}