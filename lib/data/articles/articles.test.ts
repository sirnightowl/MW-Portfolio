import { describe, expect, it } from 'vitest'
import { articles } from './index'

describe('blog article data', () => {
  it('has unique ids for every article', () => {
    const ids = articles.map((article) => article.id)
    expect(new Set(ids).size).toBe(articles.length)
  })

  it('contains the fields required by every blog page', () => {
    for (const article of articles) {
      expect(article.title).toBeTruthy()
      expect(article.excerpt).toBeTruthy()
      expect(article.date).toMatch(/^\d{4}-\d{2}-\d{2}$/)
      expect(article.displayDate).toBeTruthy()
      expect(article.readTime).toBeTruthy()
      expect(article.category).toBeTruthy()
      expect(article.published).toBe(true)
    }
  })

  it('every published article has a body with at least one section', () => {
    for (const article of articles.filter((a) => a.published)) {
      expect(article.body).toBeTruthy()
      expect(article.body).toMatch(/## /)
    }
  })
})