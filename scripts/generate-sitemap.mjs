// Regenerates public/sitemap.xml from the route list (no <lastmod>: no verified modification dates).
import fs from 'node:fs'
const SITE = (process.env.VITE_SITE_URL || 'https://www.zenavian.com').replace(/\/+$/, '')
const src = fs.readFileSync('src/seo/routeMetadata.js', 'utf8')
// Simple & explicit: keep in sync with indexable routes
const routes = ['/', '/about', '/products', '/products/cox-zen', '/products/pulmo-zen', '/products/bact-t-drop', '/products/allbact-z', '/quality-manufacturing', '/distributor-enquiry', '/contact']
const body = routes.map((r) => `  <url>\n    <loc>${SITE}${r === '/' ? '/' : r}</loc>\n  </url>`).join('\n')
fs.writeFileSync('public/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`)
console.log('sitemap written', routes.length)
