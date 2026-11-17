import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Star, BadgeCheck, ArrowRight } from 'lucide-react'
import RemoteImage from '../components/common/RemoteImage'
import { siteImages } from '../data/siteImages'
import { useScrollReveal } from '../hooks/useGSAPAnimations'

const stats = [
  { value: '100%', label: 'Lab Tested', tone: 'text-primary' },
  { value: 'GMP', label: 'Compliant Facilities', tone: 'text-secondary' },
  { value: '24/7', label: 'Veterinary Desk', tone: 'text-plum-dark' },
  { value: 'Tier-1', label: 'Global Partners', tone: 'text-primary' },
]

const AvatarFallback = (
  <div
    aria-hidden="true"
    className="flex size-20 shrink-0 items-center justify-center rounded-pill border-2 border-primary-container bg-surface-container text-headline-sm font-bold text-plum-dark shadow-md"
  >
    PS
  </div>
)

export default function About() {
  const scope = useRef(null)
  useScrollReveal(scope)
  return (
    <section id="about-story" ref={scope} className="section-y w-full bg-white" aria-labelledby="about-title">
      <div className="container-page">
        <div className="grid grid-cols-1 items-center gap-space-xl lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-7">
            <div data-reveal className="mb-space-sm inline-flex rounded-pill border border-primary-container bg-surface-container px-3 py-1 text-label-sm text-primary">
              Quality • Innovation • Reliability • Trust
            </div>
            <h2 id="about-title" data-reveal className="mb-space-md text-headline-lg text-on-surface">
              Our Commitment to Poultry Health
            </h2>
            <div data-reveal className="mb-space-lg space-y-space-md text-body-lg text-on-surface-variant">
              <p>
                We believe that better poultry health starts with{' '}
                <strong>quality products, scientific thinking, and a strong understanding of real farm challenges</strong>.
                Commercial poultry operations in tropical and dense rearing environments demand dependable therapeutic
                consistency.
              </p>
              <p>
                <strong>Our Commitment:</strong> Our commitment is to support veterinarians, poultry farmers, and
                distributors with dependable poultry healthcare products and professional service. Every batch conforms
                to stringent release criteria, ensuring high bio-security integrity from pharmaceutical plant to the
                watering line.
              </p>
            </div>

            <div data-reveal className="mb-space-lg rounded-lg border border-primary-container/40 bg-surface-container-lowest p-space-md shadow-sm">
              <div className="flex items-center gap-space-sm">
                <Star aria-hidden="true" size={28} className="shrink-0 text-primary" />
                <div>
                  <div className="text-title font-bold text-plum-dark">ZenAvian Healthcare Core Motto</div>
                  <div className="text-body-md font-semibold text-on-surface">Healthy Birds. Better Performance. Stronger Future.</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-space-sm sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} data-reveal className="rounded-lg border border-outline-variant bg-surface-container-lowest p-space-sm text-center">
                  <div className={`mb-0.5 text-headline-sm font-bold ${s.tone}`}>{s.value}</div>
                  <div className="text-label-sm text-on-surface-variant">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="min-w-0 lg:col-span-5">
            <div data-reveal className="relative overflow-hidden rounded-xl border border-primary-container/30 bg-surface-container-lowest p-space-md shadow-xl sm:p-space-lg">
              <div className="mb-space-md flex items-center gap-space-md">
                <RemoteImage
                  src={siteImages.sharma}
                  alt="Dr. P. Sharma, Chief Scientific Advisor"
                  width="80"
                  height="80"
                  className="size-20 shrink-0 rounded-pill border-2 border-primary-container object-cover shadow-md"
                  fallback={AvatarFallback}
                />
                <div className="min-w-0">
                  <h3 className="text-title font-bold text-plum-dark">Dr. P. Sharma</h3>
                  <p className="text-label-sm font-semibold text-primary">BVSc &amp; AH, MVSc (Avian Pathology)</p>
                  <p className="text-body-sm text-on-surface-variant">Chief Scientific Advisor • Avian Health Directorate</p>
                </div>
              </div>
              <blockquote className="mb-space-md rounded-lg border border-primary-container/20 bg-surface-container-low p-space-md text-body-sm leading-relaxed text-on-surface-variant">
                “Modern poultry health cannot rely on guesswork. Every formulation from ZenAvian incorporates rigorous
                bioavailability metrics, water pH compatibility profiles, and validated therapeutic indexes to empower
                farm managers and avian clinicians against evolving bacterial and parasitic pathotypes.”
              </blockquote>
              <div className="flex flex-wrap items-center justify-between gap-x-space-md gap-y-space-sm pt-space-xs text-label-sm text-outline">
                <span className="inline-flex items-center gap-space-xs">
                  <BadgeCheck aria-hidden="true" size={16} className="text-primary" />
                  Licensed Veterinary Practitioner
                </span>
                <Link to="/contact" className="flex min-h-11 items-center gap-0.5 font-semibold text-plum-dark transition-colors hover:text-primary">
                  <span>Consult Advisor</span>
                  <ArrowRight aria-hidden="true" size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
