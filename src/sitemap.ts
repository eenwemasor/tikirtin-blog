import { getArticles } from "./utils/mdx"

export const baseUrl = 'https://tikirtin.com'

export default async function sitemap() {
  const blogs = getArticles().map((post) => ({
    url: `${baseUrl}/${post.metadata.category}/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  const routes = ['', '/blog'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs]
}