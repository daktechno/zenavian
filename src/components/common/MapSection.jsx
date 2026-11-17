import { useRef, useState } from 'react'
import { MapPin, Navigation, ExternalLink, MapPinned } from 'lucide-react'
import { locations, getDirectionsUrl, getEmbedUrl, getMapsUrl } from '../../data/locations'
import { useScrollReveal } from '../../hooks/useGSAPAnimations'

/**
 * Location map for Hyderabad & Bengaluru. Config-driven (data/locations.js): city-level search only,
 * no invented pins. The Google map loads on request (privacy + performance); directions/open links always work.
 */
export default function MapSection({ headingLevel = 2 }) {
  const scope = useRef(null)
  useScrollReveal(scope)
  const [activeId, setActiveId] = useState(locations[0].id)
  const [loaded, setLoaded] = useState({})
  const active = locations.find((l) => l.id === activeId)
  const H = `h${headingLevel}`

  return (
    <section id="locations" ref={scope} className="section-y w-full bg-surface-container-lowest" aria-labelledby="locations-title">
      <div className="container-page">
        <div data-reveal className="mb-space-lg max-w-3xl">
          <div className="mb-space-xs text-label-sm font-semibold uppercase tracking-wider text-primary">Poultry Corridor Hubs</div>
          <H id="locations-title" className="text-headline-lg text-on-surface">Find Us in Hyderabad &amp; Bengaluru</H>
          <p className="mt-space-sm text-body-lg text-on-surface-variant">
            ZenAvian Healthcare serves poultry healthcare enquiries from Hyderabad and Bengaluru. Street addresses will be
            published here once confirmed — until then use the city directions below, or contact us to arrange a visit.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-space-lg lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-4">
            <div role="tablist" aria-label="Select a location" className="mb-space-md flex gap-space-xs">
              {locations.map((l) => (
                <button
                  key={l.id}
                  type="button"
                  role="tab"
                  id={`tab-${l.id}`}
                  aria-selected={l.id === activeId}
                  aria-controls="map-panel"
                  onClick={() => setActiveId(l.id)}
                  className={`min-h-11 flex-1 rounded-lg border px-space-md text-label-md transition-colors ${
                    l.id === activeId
                      ? 'border-plum-dark bg-plum-dark font-semibold text-white'
                      : 'border-outline-variant bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container'
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
            <div data-reveal className="rounded-lg border border-outline-variant bg-surface-container-lowest p-space-md shadow-sm">
              <div className="mb-space-xs flex items-center gap-space-xs text-label-sm font-semibold uppercase tracking-wider text-primary">
                <MapPin aria-hidden="true" size={16} /> {active.role}
              </div>
              <h3 className="text-headline-sm text-on-surface">{active.city}, {active.region}</h3>
              <p className="mt-1 text-body-sm text-on-surface-variant">{active.description}</p>
              {active.addressLines.length > 0 ? (
                <address className="mt-space-sm text-body-md not-italic text-on-surface">
                  {active.addressLines.map((a) => <div key={a}>{a}</div>)}
                </address>
              ) : (
                <p className="mt-space-sm text-body-sm text-on-surface-variant">Street address to be confirmed.</p>
              )}
              <div className="mt-space-md flex flex-col gap-space-sm">
                <a href={getDirectionsUrl(active)} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <Navigation aria-hidden="true" size={16} className="text-primary-container" />
                  <span>Get Directions to {active.city}</span>
                </a>
                <a href={getMapsUrl(active)} target="_blank" rel="noopener noreferrer" className="btn-outline">
                  <ExternalLink aria-hidden="true" size={16} className="text-primary" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>
          </div>

          <div id="map-panel" role="tabpanel" aria-labelledby={`tab-${active.id}`} className="min-w-0 lg:col-span-8">
            <div data-reveal className="relative min-h-[320px] overflow-hidden rounded-xl border border-primary-container/30 bg-surface-container-high shadow-md sm:min-h-[420px]">
              {loaded[active.id] ? (
                <iframe
                  key={active.id}
                  title={`Map of ${active.city}, ${active.region}, India`}
                  src={getEmbedUrl(active)}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  className="absolute inset-0 size-full border-0"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-space-sm p-space-md text-center">
                  <MapPinned aria-hidden="true" size={40} className="text-primary" />
                  <p className="text-title font-semibold text-plum-dark">{active.city}, {active.region}, India</p>
                  <p className="max-w-sm text-body-sm text-on-surface-variant">
                    The interactive map is provided by Google Maps and loads only when you choose to view it.
                  </p>
                  <button type="button" onClick={() => setLoaded((s) => ({ ...s, [active.id]: true }))} className="btn-tonal">
                    <span>Load Map</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
