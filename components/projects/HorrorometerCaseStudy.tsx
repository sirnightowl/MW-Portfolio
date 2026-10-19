import type { Project } from '@/lib/types'
import CaseStudyScreen, { type CaseStudyScreenContent } from './CaseStudyScreen'
import styles from './VisualCaseStudy.module.css'

const titleUrl = 'https://www.horrorometer.com/movies/e5f9286f-6cf8-430d-98c5-d02dcb88bd58-hidden'
const signInUrl = 'https://www.horrorometer.com/auth/signin?redirect=%2Fmovies%2Fe5f9286f-6cf8-430d-98c5-d02dcb88bd58-hidden'

const screens: CaseStudyScreenContent[] = [
  {
    id: 'catalogue', number: '01', title: 'Give browsing its own controls.',
    intro: 'The movie catalogue puts sub-genres, card density, seen-state filtering, language, and sorting above a poster grid. Those controls expose different ways to narrow or organise the same catalogue.',
    image: '/images/projects/horrorometer-case-study/catalogue.webp', width: 1256, height: 560,
    alt: 'Horrorometer movie catalogue with Sub-genres, large and small card views, Hide Seen, language and sorting controls above a grid of movie posters.',
    url: 'https://www.horrorometer.com/movies', label: 'Movies / Catalogue controls',
    notes: [
      ['Keep choices together', 'The visible toolbar groups the browsing controls above the cards. The inspected movie route reads genre, language, sort, page, and seen-state parameters.'],
      ['Represent filters in the URL', 'The movie client updates query parameters as supported settings change. This provides an inspectable representation of the selected view; it is not a measured discovery improvement.'],
      ['Treat failure as a separate state', 'The content-grid component has distinct loading, error, and empty-result branches. Their presence describes implemented states, rather than proving that every failure path has been tested.'],
    ],
  },
  {
    id: 'title-context', number: '02', title: 'Put the title in context.',
    intro: 'The title page gathers artwork, a synopsis, credits, and library actions. This cropped view also shows the rating summary and Write Review entry for Hidden, which had no reviews at capture time.',
    image: '/images/projects/horrorometer-case-study/title.webp', width: 1256, height: 530,
    alt: 'Hidden title page with poster, synopsis, cast, trailer and library actions, and a 0.0 average with 0 Reviews beside Write Review.',
    url: titleUrl, label: 'Hidden / Public title page',
    notes: [
      ['Separate context from action', 'The synopsis and credits explain the title, while the trailer and library controls offer different next steps. This is the implemented information structure.'],
      ['Use the actual rating summary', 'The inspected title component displays the overall average alongside a review count. Its zero-value fallback should not be mistaken for evidence that a community dislikes an unrated title.'],
      ['Keep the contribution entry nearby', 'The title component places Write Review with the rating summary below the poster. The next capture follows that entry point while signed out.'],
    ],
  },
  {
    id: 'review-handoff', number: '03', title: 'Make the account handoff visible.',
    intro: 'Selecting Write Review while signed out opens the sign-in page. This is the real public handoff, captured without entering credentials or submitting a review.',
    image: '/images/projects/horrorometer-case-study/signin.webp', width: 1256, height: 560,
    alt: 'Horrorometer sign-in page showing Google and Discord options, a blank email field, an email continuation button, a magic-link option and a sign-up link.',
    url: signInUrl, label: 'Write Review / Signed-out handoff',
    notes: [
      ['Keep the public flow observable', 'Catalogue and title information were viewable before sign-in. The review action led to authentication instead of pretending that a review had been submitted.'],
      ['Record the originating title', 'The review-action component adds the current title path as a redirect query parameter. The captured URL demonstrates that handoff; it does not demonstrate a completed return after authentication.'],
      ['Distinguish the form from the schema', 'The inspected review form contains an overall score, title, text, and spoiler flag. Optional Creepy, Gory, and Jumpy fields exist in the API schema, but are not offered by that form component.'],
    ],
  },
]

const boundaries = [
  ['Catalogue state', 'The movie route and client carry filters, sorting, and pagination between the URL and catalogue requests.'],
  ['Review form', 'The inspected component collects an overall rating, review title and text, and a contains-spoilers flag.'],
  ['Review validation', 'The review POST route calls the Zod schema. Overall is a required 1–10 integer; the three genre dimensions are optional and nullable.'],
  ['Catalogue dependency', 'The TMDB proxy uses a circuit-breaker utility with optional fallbacks. Its state is in memory and errors can still be returned.'],
]

export default function HorrorometerCaseStudy({ project }: { project: Project }) {
  return (
    <div className={`container-custom ${styles.caseStudy}`}>
      <nav aria-label="Case study sections" className={styles.contents}>
        {[
          ['context', 'Context'], ['catalogue', 'Catalogue'], ['title-context', 'Title details'],
          ['review-handoff', 'Review handoff'], ['implementation', 'Implementation'], ['reflection', 'Reflection'],
        ].map(([id, label]) => <a href={`#${id}`} key={id}>{label}</a>)}
      </nav>

      <section id="context" aria-labelledby="context-title" className={styles.context}>
        <div>
          <p className="eyebrow">The design problem</p>
          <h2 id="context-title" className={styles.title}>{project.challengeTitle}</h2>
          <p className={styles.body}>{project.challenge}</p>
        </div>
        <aside className={styles.scope} aria-label="Case study scope">
          <p className="eyebrow">What this case study covers</p>
          <p>Three real views from the signed-out public site, captured on 19 October 2026. Screenshots are cropped to the main interface, with the global header and fixed bottom navigation excluded.</p>
          <p>The notes distinguish public interface observations from inspected source code. They do not claim a usability study, measured engagement, or verification of a completed sign-in flow.</p>
        </aside>
      </section>

      {screens.map((screen) => <CaseStudyScreen key={screen.id} screen={screen} />)}

      <section id="implementation" aria-labelledby="implementation-title" className={styles.review}>
        <p className="eyebrow">04 / Behind the interface</p>
        <h2 id="implementation-title" className={styles.title}>Keep the interface and its contracts aligned.</h2>
        <p className={styles.body}>A control, a request schema, and an upstream API have different responsibilities. These four implementation boundaries explain what supports the public experience; they are not stages of a single transaction.</p>
        <ol className={styles.pipeline} aria-label="Horrorometer implementation boundaries">
          {boundaries.map(([title, text], index) => (
            <li key={title}><span className={styles.stageNumber}>0{index + 1}</span><h3>{title}</h3><p>{text}</p></li>
          ))}
        </ol>
        <div className={styles.reviewNotes}>
          <p>Schema support is not the same as a visible control. The optional genre-specific inputs should not be described as fields in the inspected review form, or as replacements for the overall score.</p>
          <p>The repository also has device-authorisation state tests backed by a database mock. They exercise application branches; they are not a concurrent production-database test or evidence of uptime.</p>
        </div>
      </section>

      <section id="reflection" aria-labelledby="reflection-title" className={styles.reflection}>
        <div>
          <p className="eyebrow">05 / Outcome &amp; reflection</p>
          <h2 id="reflection-title" className={styles.title}>{project.outcomeTitle}</h2>
          <p className={styles.body}>{project.outcome}</p>
        </div>
        <div className={styles.nextQuestions}>
          <h3>What needs evaluation next</h3>
          <ul>
            <li>Can someone narrow the catalogue and understand which filters remain active?</li>
            <li>Does a zero-review title make its unrated state clear enough?</li>
            <li>Does sign-in return someone to the title and review task they started?</li>
          </ul>
          <p>These are proposed evaluation questions. No participant findings or improvements in completion rates are claimed.</p>
        </div>
      </section>
    </div>
  )
}
