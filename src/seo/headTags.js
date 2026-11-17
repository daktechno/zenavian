import { branding } from '../data/branding'
import { SITE_NAME, DEFAULT_LOCALE, TWITTER_CARD, absoluteUrl, ogImageUrl } from './seoConfig'
import { getMetadata } from './routeMetadata'
import { buildJsonLd } from './structuredData'

/** Returns head tag descriptors for a path. Shared by the client <Seo/> and the prerender script. */
export function buildHead(path, { notFound = false } = {}) {
  const meta = notFound ? getMetadata('/__not-found__') : getMetadata(path)
  const robots = meta.robots || 'index, follow, max-image-preview:large'
  const canonical = absoluteUrl(path)
  const tags = [
    { tag: 'meta', attrs: { name: 'description', content: meta.description } },
    { tag: 'meta', attrs: { name: 'robots', content: robots } },
    { tag: 'meta', attrs: { name: 'theme-color', content: branding.themeColor } },
  ]
  if (!notFound) {
    tags.push({ tag: 'link', attrs: { rel: 'canonical', href: canonical } })
    tags.push(
      { tag: 'meta', attrs: { property: 'og:type', content: 'website' } },
      { tag: 'meta', attrs: { property: 'og:site_name', content: SITE_NAME } },
      { tag: 'meta', attrs: { property: 'og:locale', content: DEFAULT_LOCALE } },
      { tag: 'meta', attrs: { property: 'og:title', content: meta.title } },
      { tag: 'meta', attrs: { property: 'og:description', content: meta.description } },
      { tag: 'meta', attrs: { property: 'og:url', content: canonical } },
      { tag: 'meta', attrs: { property: 'og:image', content: ogImageUrl() } },
      { tag: 'meta', attrs: { property: 'og:image:width', content: String(branding.ogImage.width) } },
      { tag: 'meta', attrs: { property: 'og:image:height', content: String(branding.ogImage.height) } },
      { tag: 'meta', attrs: { property: 'og:image:alt', content: branding.ogImage.alt } },
      { tag: 'meta', attrs: { name: 'twitter:card', content: TWITTER_CARD } },
      { tag: 'meta', attrs: { name: 'twitter:title', content: meta.title } },
      { tag: 'meta', attrs: { name: 'twitter:description', content: meta.description } },
      { tag: 'meta', attrs: { name: 'twitter:image', content: ogImageUrl() } },
      { tag: 'meta', attrs: { name: 'twitter:image:alt', content: branding.ogImage.alt } },
    )
  }
  const ld = notFound ? null : buildJsonLd(path)
  return { title: meta.title, tags, jsonLd: ld }
}
