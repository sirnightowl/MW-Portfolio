import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import PageIntro from '@/components/common/PageIntro'
import ArticleCard from '@/components/common/ArticleCard'
import { articles } from '@/lib/data/articles'
import { jsonLd, SITE_URL } from '@/lib/site'
import { pageMetadata } from '@/lib/metadata'

type BlogPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return articles.filter((a) => a.published).map((article) => ({ slug: article.id }))
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params
  const article = articles.find((item) => item.id === slug && item.published)
  if (!article) return {}
  return pageMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/blog/${article.id}`,
    type: 'article',
    publishedTime: article.date,
    modifiedTime: article.date,
  })
}

export default async function BlogPost({ params }: BlogPageProps) {
  const { slug } = await params
  const article = articles.find((item) => item.id === slug && item.published)
  if (!article) notFound()

  const otherArticles = articles.filter((item) => item.id !== article.id && item.published && item.body).slice(0, 3)
  const sections = [...(article.body ?? '').matchAll(/^## (.+)$/gm)].map((match, index) => ({
    title: match[1],
    id: `section-${index + 1}`,
    line: (article.body ?? '').slice(0, match.index).split('\n').length,
  }))

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    mainEntityOfPage: `${SITE_URL}/blog/${article.id}`,
    author: { '@type': 'Person', name: 'Martin Whitaker', url: 'https://github.com/sirnightowl' },
  }

  return (
    <main id="main" tabIndex={-1}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(articleLd) }} />
      <article>
        <PageIntro eyebrow={article.category} title={article.title} description={article.excerpt} variant="article" back={{ href: '/blog', label: 'Back to the notebook' }} note={<><time dateTime={article.date}>{article.displayDate}</time><span className="mx-3" aria-hidden="true">/</span>{article.readTime}<span className="mx-3" aria-hidden="true">/</span>By Martin Whitaker</>} />

        <section className="container-custom page-section reading-layout">
          <aside className="reading-aside hidden lg:block">
            <p className="eyebrow">In this note</p>
            <nav aria-label="On this page" className="mt-5">
              <ol className="space-y-1">
                {sections.map((section) => <li key={section.id}><a href={`#${section.id}`} className="block py-2.5 text-sm leading-6 text-ink/70 transition-colors hover:text-[#7751bb] dark:text-white/70 dark:hover:text-lilac">{section.title}</a></li>)}
              </ol>
            </nav>
          </aside>
          <div className="prose-ink reading-body">
            {article.body ? (
              <Markdown remarkPlugins={[remarkGfm]} components={{
                h2: ({ node, children }) => <h2 id={sections.find((section) => section.line === node?.position?.start.line)?.id}>{children}</h2>,
                li: ({ children, className }) => <li className={className}>{className?.includes('task-list-item') ? <label>{children}</label> : children}</li>,
              }}>{article.body}</Markdown>
            ) : (
              <p className="text-lg leading-8 text-ink/65 dark:text-white/65">This article hasn&rsquo;t been published yet. Check back soon.</p>
            )}
          </div>
        </section>

        {otherArticles.length > 0 && (
          <section className="container-custom pb-16 md:pb-24">
            <p className="eyebrow">Keep reading</p>
            <h2 className="display-title mt-3 text-3xl md:text-4xl">More from the blog.</h2>
            <div className="article-grid mt-8">
              {otherArticles.map((item) => <ArticleCard key={item.id} article={item} heading="h3" />)}
            </div>
          </section>
        )}
      </article>
    </main>
  )
}
