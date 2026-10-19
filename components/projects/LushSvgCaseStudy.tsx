import type { Project } from '@/lib/types'
import CaseStudyScreen, { type CaseStudyScreenContent } from './CaseStudyScreen'
import styles from './VisualCaseStudy.module.css'

const collectionUrl = 'https://svg.snowl.uk/?family=Backgrounds&category=Mesh+gradients#library'
const screens: CaseStudyScreenContent[] = [
  {
    id: 'studio', number: '01', title: 'Start with what someone is making.',
    intro: 'The studio homepage separates backgrounds, website elements, illustrations, and decorative accents. A search offers a direct route into the catalogue, while Make your own introduces a separate SVG pattern maker.',
    image: '/images/projects/lush-svg-case-study/studio.webp', width: 1265, height: 712,
    alt: 'Lush SVG studio homepage with a search field, Make your own entry and a strip of varied background patterns beneath the heading Find your next finishing touch.',
    url: 'https://svg.snowl.uk/', label: 'Studio / Collection starting points',
    notes: [
      ['Organise by intended use', 'The public navigation names four families of assets. The homepage presents collections with visual examples and links into individual categories.'],
      ['Offer a direct search', 'Search all designs sits alongside the introductory text. The catalogue filter function matches query words against design names, categories, collections, types and tags.'],
      ['Separate browsing from making', 'Make your own opens a dedicated page for importing up to four SVG motifs. That tool is a separate capability; the screenshots here follow the existing catalogue instead.'],
    ],
  },
  {
    id: 'collection', number: '02', title: 'Keep the selected collection visible.',
    intro: 'The Mesh gradients view places search, motion choices, an active collection chip, and a style selector above the artwork. The captured count describes this collection at review time, rather than a permanent catalogue total.',
    image: '/images/projects/lush-svg-case-study/collection.webp', width: 1265, height: 712,
    alt: 'Mesh gradients collection showing search, Filters, All designs, Still and Animated choices, an active Mesh gradients chip, a style selector and the first artwork previews.',
    url: collectionUrl, label: 'Library / Mesh gradients',
    notes: [
      ['Expose the current scope', 'The heading and removable collection chip name the selected category. Clear all filters and Choose another collection provide separate ways to change the view.'],
      ['Make filter state addressable', 'The inspected filter module serialises family, category, theme, motion, sorting and search values into query parameters, then validates supported choices when reading them back.'],
      ['Distinguish motion from style', 'Still and Animated are separate from the collection-specific style selector. Source code also uses the device reduced-motion preference to pause previews.'],
    ],
  },
  {
    id: 'editor', number: '03', title: 'Bring the artwork and its controls together.',
    intro: 'Opening Tidal colour pool brings up a large preview beside its colour controls. Further groups cover surface texture, size and detail, and advanced settings; download and copy actions sit further down the editor.',
    image: '/images/projects/lush-svg-case-study/editor.webp', width: 1280, height: 720,
    alt: 'Tidal colour pool editor with a large mesh-gradient preview, background and artwork HEX fields, two accent colours, palette presets and collapsed texture, detail and advanced groups.',
    url: 'https://svg.snowl.uk/?family=Backgrounds&category=Mesh+gradients&design=2309-tidal-colour-pool#library', label: 'Editor / Tidal colour pool',
    notes: [
      ['Show editable colours explicitly', 'The captured panel separates background, artwork and accent colours, with HEX inputs alongside colour pickers. Other controls are grouped beneath the palette.'],
      ['Keep a design link stable', 'Editor links include a numeric design ID and readable name. The route resolver uses the ID, and versioned settings can travel in the URL with type and range checks on restoration.'],
      ['Connect previews to usable output', 'The source generates SVG markup for download and provides SVG, CSS and link-copy handlers. Export helpers distinguish repeating backgrounds from standalone elements; this review did not test every design or integration.'],
    ],
  },
]

const boundaries = [
  ['Catalogue filters', 'A shared filter module handles matching, sorting and query-string state for catalogue views.'],
  ['Editor state', 'Stable design IDs and versioned settings connect the dialog to shareable URLs. Restored settings are checked against known defaults.'],
  ['SVG and CSS output', 'SVG generators and export helpers produce artwork and usage-specific CSS, including repeating tiles and standalone elements.'],
  ['Static delivery', 'HTML, CSS and JavaScript modules are served from a static assets directory on Cloudflare Workers. The deployed app does not require an application build step.'],
]

export default function LushSvgCaseStudy({ project }: { project: Project }) {
  return (
    <div className={`container-custom ${styles.caseStudy}`}>
      <nav aria-label="Case study sections" className={styles.contents}>
        {[
          ['context', 'Context'], ['studio', 'Studio'], ['collection', 'Collection'],
          ['editor', 'Editor'], ['implementation', 'Implementation'], ['reflection', 'Reflection'],
        ].map(([id, label]) => <a href={`#${id}`} key={id}>{label}</a>)}
      </nav>
      <section tabIndex={-1} id="context" aria-labelledby="context-title" className={styles.context}>
        <div>
          <p className="eyebrow">The design problem</p>
          <h2 id="context-title" className={styles.title}>{project.challengeTitle}</h2>
          <p className={styles.body}>{project.challenge}</p>
        </div>
        <aside className={styles.scope} aria-label="Case study scope">
          <p className="eyebrow">What this case study covers</p>
          <p>Three real views of the public site, captured on 19 October 2026: the studio homepage, a collection, and its editor. Full desktop viewport captures are saved as WebP without retouching.</p>
          <p>Interface observations are distinguished from inspected JavaScript modules and configuration. No participant research, adoption figures, time savings, or exhaustive export testing is claimed.</p>
        </aside>
      </section>
      {screens.map((screen) => <CaseStudyScreen key={screen.id} screen={screen} />)}
      <section tabIndex={-1} id="implementation" aria-labelledby="implementation-title" className={styles.review}>
        <p className="eyebrow">04 / Behind the interface</p>
        <h2 id="implementation-title" className={styles.title}>Connect browsing, editing and output.</h2>
        <p className={styles.body}>{project.approach}</p>
        <ol role="list" className={styles.pipeline} aria-label="Lush SVG implementation boundaries">
          {boundaries.map(([title, text], index) => (
            <li key={title}><span aria-hidden="true" className={styles.stageNumber}>0{index + 1}</span><h3>{title}</h3><p>{text}</p></li>
          ))}
        </ol>
        <div className={styles.reviewNotes}>
          <p>The repository contains filter and editor-route tests, including invalid design IDs and settings restoration. Their presence documents specific checks; the source project’s full suite was not run for this portfolio review.</p>
          <p>Reduced-motion handling exists in preview controls and exported artwork. That implementation is not a claim that every asset, exported snippet or host website has passed an accessibility audit.</p>
        </div>
      </section>
      <section tabIndex={-1} id="reflection" aria-labelledby="reflection-title" className={styles.reflection}>
        <div>
          <p className="eyebrow">05 / Outcome &amp; reflection</p>
          <h2 id="reflection-title" className={styles.title}>{project.outcomeTitle}</h2>
          <p className={styles.body}>{project.outcome}</p>
        </div>
        <div className={styles.nextQuestions}>
          <h3>What needs evaluation next</h3>
          <ul>
            <li>Can someone find an appropriate collection without knowing its style terminology?</li>
            <li>Do the grouped controls make the effects of colour, texture and detail settings clear?</li>
            <li>Can someone choose the right export and use it successfully in their own layout?</li>
          </ul>
          <p>These are proposed evaluation questions, rather than reported user findings.</p>
        </div>
      </section>
    </div>
  )
}
