import type { MetadataRoute } from 'next'
import { projects } from '@/lib/data/projects'
import { articles } from '@/lib/data/articles'
import { SITE_URL } from '@/lib/site'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Omit dates where no maintained content date exists; rebuilding is not a content edit.
    { url: `${SITE_URL}/`, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE_URL}/about`, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${SITE_URL}/cv`, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${SITE_URL}/work`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/uses`, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${SITE_URL}/contact`, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${SITE_URL}/blog`, changeFrequency: 'weekly', priority: 0.8 },
    ...projects.map((project) => ({
      url: `${SITE_URL}/projects/${project.id}`,
      lastModified: project.reviewedAt,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...articles
      .filter((article) => article.published)
      .map((article) => ({
        url: `${SITE_URL}/blog/${article.id}`,
        lastModified: new Date(article.date),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      })),
  ]
}
