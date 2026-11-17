import { branding } from '../data/branding'
import { locations } from '../data/locations'
import { products, getProduct } from '../data/products'
import { EMAIL, PHONE_PRIMARY_TEL, PHONE_SECONDARY_TEL } from '../utils/constants'
import { SITE_URL, SITE_NAME, absoluteUrl, ogImageUrl } from './seoConfig'
import { getMetadata } from './routeMetadata'

const ORG_ID = `${SITE_URL}/#organization`
const SITE_ID = `${SITE_URL}/#website`

const sameAs = () => Object.values(branding.social).filter(Boolean)

export const organizationSchema = () => ({
  '@type': 'Organization',
  '@id': ORG_ID,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  logo: branding.logo.src ? `${SITE_URL}${branding.logo.src}` : undefined,
  image: ogImageUrl(),
  email: EMAIL,
  telephone: [PHONE_PRIMARY_TEL, PHONE_SECONDARY_TEL],
  description:
    'Poultry-focused healthcare company offering veterinary pharmaceutical and nutritional solutions for modern poultry farming.',
  areaServed: { '@type': 'Country', name: 'India' },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: EMAIL,
      telephone: PHONE_PRIMARY_TEL,
      areaServed: 'IN',
      availableLanguage: ['English'],
    },
  ],
  sameAs: sameAs().length ? sameAs() : undefined,
})

export const websiteSchema = () => ({
  '@type': 'WebSite',
  '@id': SITE_ID,
  url: `${SITE_URL}/`,
  name: SITE_NAME,
  inLanguage: 'en-IN',
  publisher: { '@id': ORG_ID },
})

const breadcrumbSchema = (path, meta) => {
  if (!meta.breadcrumbs?.length) return null
  const items = [{ name: 'Home', path: '/' }, ...meta.breadcrumbs]
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  }
}

/** LocalBusiness only for locations the owner marked `verified` with a real postal address. */
const localBusinessSchemas = () =>
  locations
    .filter((l) => l.verified && l.postal)
    .map((l) => ({
      '@type': 'LocalBusiness',
      '@id': `${SITE_URL}/#${l.id}`,
      name: `${SITE_NAME} – ${l.city}`,
      parentOrganization: { '@id': ORG_ID },
      email: EMAIL,
      telephone: PHONE_PRIMARY_TEL,
      address: { '@type': 'PostalAddress', addressCountry: 'IN', ...l.postal },
      geo: l.coordinates ? { '@type': 'GeoCoordinates', latitude: l.coordinates.lat, longitude: l.coordinates.lng } : undefined,
    }))

const pageSchema = (path, meta) => {
  const url = absoluteUrl(path)
  const base = { '@id': `${url}#webpage`, url, name: meta.title, description: meta.description, isPartOf: { '@id': SITE_ID }, inLanguage: 'en-IN' }
  switch (meta.schema) {
    case 'AboutPage':
      return { '@type': 'AboutPage', ...base, about: { '@id': ORG_ID } }
    case 'ContactPage':
      return { '@type': 'ContactPage', ...base, about: { '@id': ORG_ID } }
    case 'CollectionPage':
      return {
        '@type': 'CollectionPage',
        ...base,
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: products.map((p, i) => ({ '@type': 'ListItem', position: i + 1, name: p.name, url: absoluteUrl(p.path) })),
        },
      }
    case 'ProductPage': {
      const p = getProduct(meta.productId)
      /**
       * Product schema: no price, rating, review or offer is included (none is verified), so
       * Google merchant-listing rich results are NOT expected. A valid, honest Product entity is still emitted.
       */
      return [
        { '@type': 'WebPage', ...base, mainEntity: { '@id': `${url}#product` } },
        {
          '@type': 'Product',
          '@id': `${url}#product`,
          name: p.name,
          description: `${p.description.replace(/\*/g, '')}`,
          image: `${SITE_URL}${p.image}`,
          category: p.category,
          brand: { '@type': 'Brand', name: SITE_NAME },
          manufacturer: { '@id': ORG_ID },
          url,
        },
      ]
    }
    default:
      return { '@type': 'WebPage', ...base }
  }
}

const strip = (o) => JSON.parse(JSON.stringify(o)) // drops undefined

/** Single @graph per page → no duplicate/conflicting entities. */
export function buildJsonLd(path) {
  const meta = getMetadata(path)
  if (meta.robots?.startsWith('noindex')) return null
  const graph = []
  // Organization + WebSite are defined once per page graph (same @id everywhere → consistent entities).
  graph.push(organizationSchema(), websiteSchema())
  const page = pageSchema(path, meta)
  graph.push(...(Array.isArray(page) ? page : [page]))
  const bc = breadcrumbSchema(path, meta)
  if (bc) graph.push(bc)
  if (path === '/contact') graph.push(...localBusinessSchemas())
  return strip({ '@context': 'https://schema.org', '@graph': graph })
}
