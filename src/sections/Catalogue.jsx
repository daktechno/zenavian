import { useRef } from 'react'
import { FileText, Check, Download, Mail, Info } from 'lucide-react'
import Button from '../components/common/Button'
import { useFileAvailability } from '../hooks/useFileAvailability'
import { useScrollReveal } from '../hooks/useGSAPAnimations'
import { CATALOGUE_URL, buildMailto } from '../utils/constants'

const points = ['Specifications for avian consultants and distributors', 'Free direct download when available']

export default function Catalogue() {
  const scope = useRef(null)
  useScrollReveal(scope)
  const status = useFileAvailability(CATALOGUE_URL)

  return (
    <section id="catalogue" ref={scope} className="w-full bg-white pb-12 lg:pb-24" aria-labelledby="catalogue-title">
      <div className="container-page">
        <div
          data-reveal
          className="rounded-xl border border-primary-container/40 bg-gradient-to-r from-surface-container via-surface-container-high to-surface-container p-space-md shadow-sm sm:p-space-lg lg:p-space-xl"
        >
          <div className="grid grid-cols-1 items-center gap-space-lg lg:grid-cols-12">
            <div className="min-w-0 lg:col-span-8">
              <div className="mb-space-xs inline-flex items-center gap-space-xs rounded-sm border border-primary-container/50 bg-surface-container-lowest px-3 py-1 text-label-sm font-semibold text-plum-dark">
                <FileText aria-hidden="true" size={16} className="shrink-0 text-primary" />
                <span>Product Catalogue</span>
              </div>
              <h3 id="catalogue-title" className="mb-space-xs text-headline-md text-on-surface">
                ZenAvian Poultry Healthcare Catalogue
              </h3>
              <p className="mb-space-md max-w-2xl text-body-md text-on-surface-variant">
                Access complete veterinary product specifications, water solubility charts, mixing ratios, storage
                parameters, and compliant withdrawal period schedules formatted for avian consultants and distributors.
              </p>
              <ul className="flex flex-wrap items-center gap-x-space-md gap-y-space-xs text-label-sm text-on-surface-variant">
                {points.map((p) => (
                  <li key={p} className="flex items-center gap-space-xs">
                    <Check aria-hidden="true" size={16} className="shrink-0 text-primary" /> {p}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col justify-center gap-space-sm sm:flex-row lg:col-span-4 lg:flex-col">
              {status === 'available' ? (
                <a href={CATALOGUE_URL} download className="btn-primary w-full">
                  <Download aria-hidden="true" size={18} className="text-primary-container" />
                  <span>Download Catalogue (PDF)</span>
                </a>
              ) : (
                <button type="button" disabled aria-disabled="true" className="btn-primary w-full cursor-not-allowed opacity-60 hover:ring-0">
                  <Download aria-hidden="true" size={18} className="text-primary-container" />
                  <span>{status === 'checking' ? 'Checking Catalogue…' : 'Catalogue PDF Not Yet Available'}</span>
                </button>
              )}
              <Button
                href={buildMailto('Request for ZenAvian Product Catalogue')}
                variant="outline"
                icon={Mail}
                iconClassName="text-primary"
                className="w-full"
              >
                Email to My Inbox
              </Button>
            </div>
          </div>

          {status === 'unavailable' && (
            <p role="status" className="mt-space-md flex items-start gap-space-xs rounded-sm border border-primary-container bg-surface-container-lowest p-space-sm text-body-sm text-on-surface-variant">
              <Info aria-hidden="true" size={16} className="mt-0.5 shrink-0 text-primary" />
              <span>The catalogue PDF is not currently available for download on this website. Use “Email to My Inbox” to request a copy from our team.</span>
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
