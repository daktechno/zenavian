import { products } from '../data/products'
import { ROUTES } from '../data/navigation'

/**
 * Per-route SEO metadata: single source for <title>, description, canonical path, robots, keywords,
 * breadcrumb trail and schema type. Used by the client <Seo> component AND the prerender script.
 * Titles <= ~60 chars, descriptions <= ~160 chars. Keywords are planning data (not emitted as <meta keywords>).
 */
export const routeMetadata = {
  [ROUTES.home]: {
    title: 'ZenAvian Healthcare | Poultry Veterinary Pharmaceuticals India',
    description:
      'Quality poultry healthcare and veterinary pharmaceutical solutions for coccidiosis, respiratory and bacterial challenges. Explore products and partnerships.',
    keywords: { primary: 'poultry healthcare products India', supporting: ['veterinary pharmaceuticals poultry', 'poultry medicine company', 'poultry distributor partnership'] },
    schema: 'WebPage',
    breadcrumbs: [],
  },
  [ROUTES.about]: {
    title: 'About ZenAvian Healthcare | Poultry Health Company',
    description:
      'ZenAvian Healthcare is a poultry-focused company committed to quality veterinary pharmaceutical and nutritional solutions for modern poultry farming.',
    keywords: { primary: 'poultry healthcare company', supporting: ['about ZenAvian Healthcare', 'poultry veterinary pharmaceutical company', 'avian health solutions'] },
    schema: 'AboutPage',
    breadcrumbs: [{ name: 'About', path: ROUTES.about }],
  },
  [ROUTES.products]: {
    title: 'Poultry Healthcare Products | ZenAvian Healthcare',
    description:
      'Explore COX ZEN, PULMO ZEN, BACT-T DROP and ALLBACT-Z: poultry healthcare products for coccidiosis, respiratory and bacterial health. Request specs and supply.',
    keywords: { primary: 'poultry veterinary medicines', supporting: ['poultry anticoccidial', 'poultry respiratory products', 'poultry antibacterial products'] },
    schema: 'CollectionPage',
    breadcrumbs: [{ name: 'Products', path: ROUTES.products }],
  },
  ...Object.fromEntries(
    products.map((p) => [
      p.path,
      {
        title: p.seo.title,
        description: p.seo.description,
        keywords: p.seo.keywords,
        schema: 'ProductPage',
        productId: p.id,
        breadcrumbs: [
          { name: 'Products', path: ROUTES.products },
          { name: p.name, path: p.path },
        ],
      },
    ]),
  ),
  [ROUTES.quality]: {
    title: 'Quality & Manufacturing | ZenAvian Healthcare',
    description:
      'How ZenAvian Healthcare approaches quality: reliable manufacturing partners, quality-assured materials, consistent batches, packaging and batch documentation.',
    keywords: { primary: 'poultry pharmaceutical quality', supporting: ['veterinary manufacturing partners', 'batch documentation poultry medicine', 'quality poultry healthcare products'] },
    schema: 'WebPage',
    breadcrumbs: [{ name: 'Quality & Manufacturing', path: ROUTES.quality }],
  },
  [ROUTES.distributor]: {
    title: 'Poultry Product Distributor Enquiry | ZenAvian Healthcare',
    description:
      'Become a ZenAvian Healthcare distribution partner. Share your company details to start a distributor or stockist enquiry for poultry healthcare products.',
    keywords: { primary: 'poultry products distributor enquiry', supporting: ['veterinary pharma distributorship India', 'poultry healthcare dealership', 'stockist enquiry poultry medicine'] },
    schema: 'WebPage',
    breadcrumbs: [{ name: 'Distributor Enquiry', path: ROUTES.distributor }],
  },
  [ROUTES.contact]: {
    title: 'Contact ZenAvian Healthcare | Hyderabad & Bengaluru',
    description:
      'Contact ZenAvian Healthcare by email, phone or WhatsApp. Poultry healthcare enquiries from Hyderabad and Bengaluru, India, with directions and business hours.',
    keywords: { primary: 'contact ZenAvian Healthcare', supporting: ['poultry healthcare Hyderabad', 'poultry healthcare Bengaluru', 'veterinary pharmaceutical enquiry'] },
    schema: 'ContactPage',
    breadcrumbs: [{ name: 'Contact', path: ROUTES.contact }],
  },
}

export const notFoundMetadata = {
  title: 'Page Not Found | ZenAvian Healthcare',
  description: 'The page you are looking for could not be found. Return to the ZenAvian Healthcare homepage or browse our products.',
  robots: 'noindex, follow',
  breadcrumbs: [],
}

export const indexablePaths = Object.keys(routeMetadata)
export const getMetadata = (path) => routeMetadata[path] || notFoundMetadata
