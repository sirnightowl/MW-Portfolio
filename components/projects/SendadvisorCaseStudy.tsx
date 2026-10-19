import { ArrowRight } from 'lucide-react'
import type { Project } from '@/lib/types'
import CaseStudyScreen, { type CaseStudyScreenContent } from './CaseStudyScreen'
import styles from './VisualCaseStudy.module.css'

const screens: CaseStudyScreenContent[] = [
  {
    id: 'search', number: '01', title: 'Start with the kind of help.',
    intro: 'The homepage puts the search scope before the query. Days out, services, education, and an all-content search share a starting point, with a separate location input.',
    image: '/images/projects/sendadvisor-case-study/home.webp', height: 612,
    alt: 'SENDadvisor homepage with Days out, Services, Education and Search all scopes above keyword and location fields, followed by a coverage notice.',
    url: 'https://sendadvisor.co.uk/', label: 'Homepage / Search entry',
    notes: [
      ['Separate scope from query', 'The selected scope changes the search prompt and destination. The interface makes the content type a visible choice.'],
      ['Keep location distinct', 'A town, city, or postcode is a separate input. The search component has its own location suggestions and error state.'],
      ['State the coverage limit', 'The homepage explicitly says that some areas have limited listings. The design does not need to imply complete coverage.'],
    ],
  },
  {
    id: 'results', number: '02', title: 'Keep refinement close to the results.',
    intro: 'The days-out view combines search with category and feature controls. Sorting and grid, list, and map controls sit beside the result count, above the listing cards.',
    image: '/images/projects/sendadvisor-case-study/results.webp', height: 577,
    alt: 'SENDadvisor days-out search, category filters including Dedicated SEND sessions and Soft play, sort and view controls, a provenance note, and the first row of result images.',
    url: 'https://sendadvisor.co.uk/days-out', label: 'Days out / Directory controls',
    notes: [
      ['Make refinement explicit', 'The route reads categories, features, query, location, sort, and view parameters. These are defined inputs to the directory, rather than a single undifferentiated search.'],
      ['Explain the current scope', 'With no location selected, the page says that it is showing results from across England and offers a route towards nearby results.'],
      ['Distinguish listing sources', 'The interface names parent submissions, provider submissions, public records, and marked admin review. That wording is more specific than claiming every listing has the same verification history.'],
    ],
  },
  {
    id: 'councils', number: '03', title: 'Keep the official destination in view.',
    intro: 'Council pages use one template to bring official links, available contact details, and related directory results together. Norfolk is the public example shown here.',
    image: '/images/projects/sendadvisor-case-study/council.webp', height: 612,
    alt: 'Norfolk council page with separate actions for the official Local Offer, council website, and council contacts, above the Council Details and SEND contact panels.',
    url: 'https://sendadvisor.co.uk/councils/norfolk', label: 'Council information / Norfolk',
    notes: [
      ['Give links distinct jobs', 'The Local Offer, council website, and contact section have separate labels and destinations. The directory provides routes to official information.'],
      ['Render what is available', 'The template checks individual URLs and contact values before rendering their controls. Missing fields are not evidence of complete data.'],
      ['Connect related information', 'The same route requests days out, services, and schools for the authority. Performance content has a separate unavailable-data state.'],
    ],
  },
]

const stages = [
  ['Discovery ledger', 'Gathered candidates are inputs for review.'],
  ['Local review state', 'Candidate edits and approval status are stored separately.'],
  ['Approved selection', 'The diff script selects records marked approved.'],
  ['Validated diff', 'Postcode, England authority ID, and authority-name checks precede output.'],
]

export default function SendadvisorCaseStudy({ project }: { project: Project }) {
  return (
    <div className={`container-custom ${styles.caseStudy}`}>
      <nav aria-label="Case study sections" className={styles.contents}>
        {[
          ['context', 'Context'], ['search', 'Search'], ['results', 'Results'],
          ['councils', 'Council information'], ['review', 'Data review'], ['reflection', 'Reflection'],
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
          <p>The current public interface and its implementation. Screenshots were captured on 19 October 2026; they are cropped desktop views, with the account header excluded.</p>
          <p>Result counts are a point-in-time snapshot. The rationale below explains the implementation, without claiming research sessions or measured changes in family outcomes.</p>
        </aside>
      </section>

      {screens.map((screen) => <CaseStudyScreen key={screen.id} screen={screen} />)}

      <section id="review" aria-labelledby="review-title" className={styles.review}>
        <p className="eyebrow">04 / Behind the directory</p>
        <h2 id="review-title" className={styles.title}>Finding a candidate is not publishing a listing.</h2>
        <p className={styles.body}>The local audit tooling separates gathered candidates from review state. The publication-preparation script then reads the ledger and that state to select approved candidates and build a checked diff.</p>
        <ol className={styles.pipeline} aria-label="Candidate review and diff preparation">
          {stages.map(([title, text], index) => (
            <li key={title}><span className={styles.stageNumber}>0{index + 1}</span><h3>{title}</h3><p>{text}</p>{index < stages.length - 1 && <ArrowRight className={styles.pipelineArrow} size={18} aria-hidden="true" />}</li>
          ))}
        </ol>
        <div className={styles.reviewNotes}>
          <p>Approved-batch export is a separate script using the same ledger and review state. The diagram describes the preparation code, not a log proving how every production listing was published.</p>
          <p>Backup and restore scripts also exist, including a restore dry-run option. Their presence is not a record of successful scheduled backups or recurring restore drills.</p>
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
            <li>Can someone choose the right search scope and recover from an unsuitable result set without help?</li>
            <li>Do the council page labels make the distinction between directory information and official sources clear?</li>
            <li>Where do incomplete coverage or missing fields prevent a real task from being completed?</li>
          </ul>
          <p>These are proposed evaluation questions, not reported study findings.</p>
        </div>
      </section>
    </div>
  )
}
