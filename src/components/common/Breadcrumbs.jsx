import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { getMetadata } from '../../seo/routeMetadata'

/** Visible breadcrumb trail; mirrors the BreadcrumbList JSON-LD (same source: routeMetadata). */
export default function Breadcrumbs({ path }) {
  const crumbs = getMetadata(path).breadcrumbs || []
  if (!crumbs.length) return null
  const items = [{ name: 'Home', path: '/' }, ...crumbs]
  return (
    <nav aria-label="Breadcrumb" className="border-b border-outline-variant/40 bg-surface-container-low">
      <ol className="container-page flex flex-wrap items-center gap-x-1 py-2 text-label-sm text-on-surface-variant">
        {items.map((c, i) => {
          const last = i === items.length - 1
          return (
            <li key={c.path} className="flex items-center gap-1">
              {last ? (
                <span aria-current="page" className="font-semibold text-plum-dark">{c.name}</span>
              ) : (
                <>
                  <Link to={c.path} className="inline-flex min-h-8 items-center transition-colors hover:text-primary hover:underline">
                    {c.name}
                  </Link>
                  <ChevronRight aria-hidden="true" size={14} className="shrink-0 text-outline" />
                </>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
