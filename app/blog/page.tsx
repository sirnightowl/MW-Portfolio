import { pageMetadata } from '@/lib/metadata'
import PageIntro from '@/components/common/PageIntro'
import ArticleCard from '@/components/common/ArticleCard'
import { articles } from '@/lib/data/articles'

export const metadata = pageMetadata({
  title: 'Blog',
  description: 'Notes on design, accessibility, and shipping solo — from Martin Whitaker, digital interaction designer.',
  path: '/blog',
})

export default function BlogIndexPage() {
  const published = articles.filter((a) => a.published).sort((a, b) => b.date.localeCompare(a.date))

  return (
    <main id="main" tabIndex={-1}>
      <PageIntro eyebrow="The notebook" title={<>Notes on design,<br /><span>and shipping solo.</span></>} description="Things I’ve learned building accessible public services and characterful products — from accessibility and design systems to the details of shipping. Written for people who build." note={`${published.length} notes / Ideas from practice`} />

      <section aria-label="All articles" className="container-custom page-section">
        <div className="mb-8 flex items-center justify-between border-b border-ink/15 pb-5 dark:border-white/15"><h2 className="eyebrow">Latest thinking</h2><span className="text-xs text-ink/65 dark:text-white/65">Most recent first</span></div>
        <div className="article-grid">
          {published.map((article, index) => <ArticleCard key={article.id} article={article} heading="h3" featured={index === 0} />)}
        </div>
      </section>
    </main>
  )
}
