import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { Article } from '@/lib/data/articles/types'

export default function ArticleCard({ article, heading: Heading = 'h2', featured = false }: { article: Article; heading?: 'h2' | 'h3'; featured?: boolean }) {
  return (
    <Link href={`/blog/${article.id}`} className={`article-card group ${featured ? 'article-card-featured' : ''}`}>
      <div className="flex items-center justify-between gap-4">
        <span className="category-label">{article.category}</span>
        <ArrowUpRight aria-hidden="true" className="h-5 w-5 shrink-0 text-ink/55 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 dark:text-white/65" />
      </div>
      <Heading className="article-card-title">{article.title}</Heading>
      <p className="article-card-excerpt">{article.excerpt}</p>
      <div className="article-card-meta"><time dateTime={article.date}>{article.displayDate}</time><span>{article.readTime}</span></div>
    </Link>
  )
}
