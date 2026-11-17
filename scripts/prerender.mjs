// Static prerender: renders every indexable route + 404 into dist/ as real HTML (with per-page head tags + JSON-LD).
import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const root = process.cwd()
const dist = path.join(root, 'dist')
const ssrDir = path.join(root, 'dist-ssr')
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')
const ssrEntry = fs.readdirSync(ssrDir).find((f) => /^entry-server.*\.(m?js)$/.test(f))
const { render, indexablePaths } = await import(pathToFileURL(path.join(ssrDir, ssrEntry)).href)

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
const tagToString = ({ tag, attrs }) =>
  `<${tag} ${Object.entries(attrs).map(([k, v]) => `${k}="${esc(v)}"`).join(' ')}>`

function page(url, { is404 = false } = {}) {
  const { html, head } = render(url)
  const headHtml = [
    ...head.tags.map(tagToString),
    head.jsonLd ? `<script type="application/ld+json" data-seo-jsonld>${JSON.stringify(head.jsonLd).replace(/</g, '\\u003c')}</script>` : '',
  ].filter(Boolean).join('\n    ')
  let out = template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(head.title)}</title>`)
    // strip the generic fallbacks of the template so per-page tags are the only ones
    .replace(/\s*<meta\s+(?:name="(?:description|robots|theme-color)"|property="og:[^"]*")[^>]*>/g, '')
    .replace('</head>', `    ${headHtml}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
  if (is404) out = out.replace(/<link rel="preload" as="image"[^>]*>\s*/, '')
  return out
}

const write = (file, content) => {
  fs.mkdirSync(path.dirname(file), { recursive: true })
  fs.writeFileSync(file, content)
}

for (const url of indexablePaths) {
  const file = url === '/' ? path.join(dist, 'index.html') : path.join(dist, url, 'index.html')
  write(file, page(url))
  console.log('prerendered', url)
}
write(path.join(dist, '404.html'), page('/__not-found__', { is404: true }))
console.log('prerendered 404.html')
fs.rmSync(ssrDir, { recursive: true, force: true })
