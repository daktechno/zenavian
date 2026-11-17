import { useEffect } from 'react'
import { buildHead } from '../../seo/headTags'

const sel = (a) => (a.name ? `meta[name="${a.name}"]` : a.property ? `meta[property="${a.property}"]` : `link[rel="${a.rel}"]`)

/** Keeps <head> in sync on client-side navigation (prerendered HTML already contains the same tags). */
export default function Seo({ path, notFound = false }) {
  useEffect(() => {
    const { title, tags, jsonLd } = buildHead(path, { notFound })
    document.title = title
    const wanted = new Set()
    tags.forEach(({ tag, attrs }) => {
      const s = sel(attrs)
      wanted.add(s)
      let el = document.head.querySelector(s)
      if (!el) {
        el = document.createElement(tag)
        document.head.appendChild(el)
      }
      Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v))
    })
    // Remove social/canonical tags that don't apply (e.g. when moving to the 404 page)
    document.head
      .querySelectorAll('link[rel="canonical"], meta[property^="og:"], meta[name^="twitter:"]')
      .forEach((el) => {
        if (!wanted.has(sel({ name: el.getAttribute('name'), property: el.getAttribute('property'), rel: el.getAttribute('rel') }))) el.remove()
      })
    let script = document.head.querySelector('script[data-seo-jsonld]')
    if (jsonLd) {
      if (!script) {
        script = document.createElement('script')
        script.type = 'application/ld+json'
        script.setAttribute('data-seo-jsonld', '')
        document.head.appendChild(script)
      }
      script.textContent = JSON.stringify(jsonLd)
    } else if (script) script.remove()
  }, [path, notFound])
  return null
}
