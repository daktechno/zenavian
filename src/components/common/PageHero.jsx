import { useRef } from 'react'
import { useHeroEntrance } from '../../hooks/useGSAPAnimations'

/** Page header used on every inner page. Renders the single <h1>. */
export default function PageHero({ eyebrow, title, accent, description, children, aside }) {
  const scope = useRef(null)
  useHeroEntrance(scope)
  return (
    <section ref={scope} className="relative w-full overflow-hidden bg-surface-container-lowest">
      <div className="pointer-events-none absolute -right-20 -top-20 size-96 rounded-pill bg-primary-container/20 blur-3xl" />
      <div className="container-page relative py-space-xl lg:py-24">
        <div className="grid grid-cols-1 items-end gap-space-xl lg:grid-cols-12">
          <div className={`min-w-0 ${aside ? 'lg:col-span-8' : 'lg:col-span-9'}`}>
            {eyebrow && (
              <span data-hero className="mb-space-md inline-block rounded-pill border border-primary-container bg-surface-container px-3 py-1 text-label-sm font-semibold uppercase tracking-wider text-plum-dark">
                {eyebrow}
              </span>
            )}
            <h1 data-hero className="mb-space-md text-display tracking-tight text-on-surface [text-wrap:balance]">
              {title}
              {accent && (
                <>
                  <br className="hidden sm:inline" />
                  <span className="font-bold text-primary"> {accent}</span>
                </>
              )}
            </h1>
            {description && <p data-hero className="max-w-2xl text-body-lg leading-relaxed text-on-surface-variant">{description}</p>}
            {children && <div data-hero className="mt-space-lg flex flex-col gap-space-sm sm:flex-row sm:flex-wrap">{children}</div>}
          </div>
          {aside && <div data-hero className="min-w-0 lg:col-span-4">{aside}</div>}
        </div>
      </div>
    </section>
  )
}
