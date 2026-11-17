# ZenAvian Healthcare — Multi-page + SEO Guide

## Routes (all real, crawlable, prerendered to static HTML)
| Route | Page | Schema | Primary keyword |
|---|---|---|---|
| `/` | Home | Organization, WebSite, WebPage | poultry healthcare products India |
| `/about` | About | AboutPage, BreadcrumbList | poultry healthcare company |
| `/products` | Products (filter, index table, catalogue) | CollectionPage + ItemList | poultry veterinary medicines |
| `/products/cox-zen` | COX ZEN | Product, BreadcrumbList | poultry anticoccidial |
| `/products/pulmo-zen` | PULMO ZEN | Product | poultry respiratory health product |
| `/products/bact-t-drop` | BACT-T DROP | Product | poultry CRD treatment product |
| `/products/allbact-z` | ALLBACT-Z | Product | poultry antibacterial for E. coli |
| `/quality-manufacturing` | Quality & Manufacturing | WebPage | poultry pharmaceutical quality |
| `/distributor-enquiry` | Distributor Enquiry | WebPage | poultry products distributor enquiry |
| `/contact` | Contact + map | ContactPage (+LocalBusiness only if verified) | contact ZenAvian Healthcare |
| unknown | `404.html` (HTTP 404, `noindex`) | – | – |

Supporting keywords per page live in `src/seo/routeMetadata.js` (`keywords`). They are planning data; `<meta keywords>` is not emitted (ignored by search engines).
Keyword research note: no keyword-volume tool was available in this environment, so keywords were chosen from the approved content/terminology, **not** from search-volume data. Validate with Google Search Console / Keyword Planner.

## Structure
```
src/
  routes/AppRouter.jsx        routes + 404
  pages/                      Home, About, Products, ProductDetail, Quality, Distributor, Contact, NotFound
  sections/                   reusable page sections (Hero, FocusAreas, About, Quality, Catalogue, Distributor, Contact)
  components/{layout,common,cards,forms,seo}
  data/branding.js            logo/favicon/name/social (CONFIG)
  data/locations.js           Hyderabad & Bengaluru (CONFIG)
  data/products.js, navigation.js, contactInfo.js, ...
  seo/{seoConfig,routeMetadata,structuredData,headTags}.js
  entry-server.jsx            SSR entry used by the prerender script
scripts/{prerender,generate-sitemap,serve-dist}.mjs
public/{sitemap.xml,robots.txt,_redirects,.htaccess}  + vercel.json
```

## Rendering strategy
Vite SSR build + `react-dom/server` + `StaticRouter` → `scripts/prerender.mjs` writes `dist/<route>/index.html` (real content, title, description, canonical, OG/Twitter, JSON-LD) and `dist/404.html`. The browser then hydrates (`hydrateRoot`). No Next.js needed. `npm run build` does everything. Client navigation keeps `<head>` in sync via `components/seo/Seo.jsx`.

## Deployment (direct URL / refresh / 404)
Every route is a physical file, so refresh/direct visits work on any static host:
- **Netlify / Cloudflare Pages**: `public/_redirects` (`/* /404.html 404`).
- **Vercel**: `vercel.json` (clean URLs, no trailing slash).
- **Apache**: `public/.htaccess`.
- **Nginx**: `location / { try_files $uri $uri/index.html =404; } error_page 404 /404.html;`
Set `VITE_SITE_URL` at build time if the origin differs from `https://www.zenavian.com` (affects canonicals, OG, JSON-LD). Redirect `zenavian.com` → `www.zenavian.com` at DNS/host level. Canonicals use no trailing slash.

## Logo & favicon
No logo file was supplied and none was invented; a plain text wordmark is shown. To add: put files in `public/branding/` and set `branding.logo.src` / `logoLight.src` in `src/data/branding.js`. Replace `public/favicon.svg` (the current one is the earlier placeholder). Add a 1200×630 share image and set `branding.ogImage`.

## Locations & map
`src/data/locations.js` is city-level only (Hyderabad, Bengaluru). Directions/open links search the city name; **no pin, address or coordinates are invented**. The Google map loads only when the visitor clicks "Load Map" (privacy + performance). Optional env: `VITE_GOOGLE_MAPS_EMBED_API_KEY` (Maps Embed API; restrict by referrer). When the owner provides verified data fill `addressLines`, `postal`, `coordinates`, `mapsUrl`/`embedUrl` and set `verified: true` → LocalBusiness JSON-LD is emitted automatically on `/contact`.

## Structured data
One `@graph` per page (no duplicates). Product schema has **no price, rating, review or offer** (none verified), so merchant-listing rich results are not expected. No `aggregateRating`, no `LocalBusiness` until verified. Validate after deploy with Google's Rich Results Test / Schema.org validator (not runnable in this sandbox — network restricted).

## Sitemap / robots
`public/sitemap.xml` (10 URLs, no `lastmod`) and `public/robots.txt` use `https://www.zenavian.com`. Regenerate with `npm run sitemap` after adding routes (update the list in `scripts/generate-sitemap.mjs` and `routeMetadata.js`). Submitting to Search Console is an owner action; indexing/ranking is not guaranteed or claimed.

## Local SEO limits
Without verified street addresses, a Google Business Profile, or NAP data, only city-level relevance is possible. Do not create "Hyderabad"/"Bengaluru" doorway pages. Next steps for the owner: verified addresses → Google Business Profile → consistent NAP → LocalBusiness schema.

## Internal linking
Header/footer on every page; Home → products/quality/about/distributor; product cards → detail pages; detail pages → sibling products, distributor, products index; every inner page ends with a CtaBanner (distributor / contact / products); breadcrumbs on all inner pages (visible + JSON-LD).

## Image SEO
Descriptive alt text on all product/hero images (unchanged from approved content), explicit width/height, hero `fetchPriority=high` + preload, lazy-loading elsewhere, WebP, product-name file names.

## Design-vs-content decisions (design ZIPs vs approved content)
Layouts/visual language from the four design ZIPs were applied. Content in the designs that is unverified or conflicts with approved content was **not published**:
- Quality: "Protocol v4.8", "GMP/GLP audit cycle Q1 2025", "Zone IVb", "99.84% assay mean", "ISO Class 7 cleanrooms", titration tables, named Hyderabad/Bengaluru "facilities" (Genome Bio-Pharma Valley / Bio-Innovation Center), COA lookup, "Audited annually".
- Products: dosage/ingredient figures, "cGMP & Schedule M Certified", "Avian Precision Pharmacopoeia" (the manager's updated design already removed the strips).
- Distributor: "99.4% batch fill rate", "14M+ flock covered daily", "24–48h dispatch SLAs", "2–8°C monitored", "Tiered volume rebates", "Contract territory deed", free necropsy kits, license/SSL claims.
- Home: sparkline stats beyond the approved four.
The latest design versions (provided 17 Nov) differ from the first set only by removing the Quality status strip and the Products regulatory strip + chip; Home and Distributor are unchanged.
Pages with **no design** (About, Contact, Product detail, 404, Locations/map) were built from approved content in the same design system.
Changed vs the original single-page site: catalogue badge "Official 2025 Release • Version 2.4" → neutral "Product Catalogue"; "Download 2025 Catalogue" → "Product Catalogue (PDF)" (unverifiable version/year); "Why Choose" split across Home (stats + reasons) and About (commitment + Dr. Sharma) to avoid duplicate content; a "Designation" field was added to the distributor form (per design).

## Owner requirements
Logo files; favicon set; OG image; Hyderabad/Bengaluru verified addresses, coordinates, map links; business details (legal name, GST/licences if to be shown); social profile URLs (`branding.social`); catalogue PDF at `public/documents/catalogue.pdf`; Dr. Sharma photo; verified product label data (composition, dosage, withdrawal) for detail pages; confirmation of the approved claims in `CLAIMS_TO_VERIFY.md`.
