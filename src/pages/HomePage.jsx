import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, FlaskConical, Handshake, Truck, MessageCircle } from 'lucide-react'
import Hero from '../sections/Hero'
import FocusAreas from '../sections/FocusAreas'
import SectionHeading from '../components/common/SectionHeading'
import CtaBanner from '../components/common/CtaBanner'
import ProductName from '../components/common/ProductName'
import { products } from '../data/products'
import { ROUTES } from '../data/navigation'
import { useScrollReveal } from '../hooks/useGSAPAnimations'
import { WHATSAPP_MESSAGES, buildWhatsAppUrl } from '../utils/constants'

const stats = [
  { value: '100%', label: 'Lab Tested', tone: 'text-primary' },
  { value: 'GMP', label: 'Compliant Facilities', tone: 'text-secondary' },
  { value: '24/7', label: 'Veterinary Desk', tone: 'text-plum-dark' },
  { value: 'Tier-1', label: 'Global Partners', tone: 'text-primary' },
]

const reasons = [
  { icon: FlaskConical, title: 'Quality you can trace', text: 'Carefully selected international manufacturing partners and batch-wise documentation.', to: ROUTES.quality, cta: 'Quality & Manufacturing' },
  { icon: Handshake, title: 'Built for partnerships', text: 'Supporting veterinarians, farmers and distributors with dependable poultry healthcare products.', to: ROUTES.about, cta: 'About ZenAvian' },
  { icon: Truck, title: 'Distribution network', text: 'Expanding our authorized network across primary poultry belts.', to: ROUTES.distributor, cta: 'Distributor Enquiry' },
]

function WhyChoose() {
  const scope = useRef(null)
  useScrollReveal(scope)
  return (
    <section ref={scope} className="section-y w-full bg-surface-container-lowest -mt-[3rem]" aria-labelledby="why-title">
      <div className="container-page">
        <SectionHeading
          id="why-title"
          eyebrow="Quality • Innovation • Reliability • Trust"
          title="Why Choose ZenAvian Healthcare?"
          description="Better poultry health starts with quality products, scientific thinking, and a strong understanding of real farm challenges."
        />
        <div className="mb-space-lg grid grid-cols-2 gap-space-sm sm:grid-cols-4 sm:gap-space-md">
          {stats.map((s) => (
            <div key={s.label} data-reveal className="h-full">
              <div className="h-full rounded-2xl border border-outline-variant bg-white p-space-md text-center shadow-sm transition-colors duration-300 hover:border-primary/40 hover:bg-surface-container-low">
                <div className={`mb-0.5 text-headline-md font-bold ${s.tone}`}>{s.value}</div>
                <div className="text-label-sm text-on-surface-variant">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-space-md md:grid-cols-3 md:gap-space-lg">
          {reasons.map(({ icon: Icon, title, text, to, cta }) => (
            <div key={title} data-reveal className="h-full">
              <div className="group flex h-full flex-col rounded-2xl border border-outline-variant bg-white p-space-lg shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10">
                <div className="mb-space-md flex size-11 items-center justify-center rounded-xl border border-primary-container/40 bg-surface-container text-primary transition-colors duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-on-primary">
                  <Icon aria-hidden="true" size={22} />
                </div>
                <h3 className="mb-space-xs text-title font-bold text-on-surface transition-colors duration-200 group-hover:text-primary">
                  {title}
                </h3>
                <p className="mb-space-md flex-1 text-body-md text-on-surface-variant">{text}</p>
                <Link
                  to={to}
                  className="inline-flex min-h-11 items-center gap-1 text-label-md font-semibold text-plum-dark transition-colors duration-200 group-hover:text-primary"
                >
                  <span>{cta}</span>
                  <ArrowRight
                    aria-hidden="true"
                    size={14}
                    className="transition-transform duration-300 ease-out group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeaturedProducts() {
  const scope = useRef(null)
  useScrollReveal(scope)
  return (
    <section ref={scope} className="section-y w-full bg-white mt-[-5rem]" aria-labelledby="featured-title">
      <div className="container-page">
        <SectionHeading
          id="featured-title"
          align="split"
          eyebrow="Featured Formulations"
          title="Poultry Healthcare Products"
          description="Four focused formulations for coccidiosis, respiratory and bacterial health in commercial poultry."
        />
        <div className="mb-space-lg grid grid-cols-1 gap-space-md sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <div key={p.id} data-reveal className="h-full">
              <Link
                to={p.path}
                aria-label={`${p.name} – ${p.subtitle}`}
                className="group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-outline-variant bg-white shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="aspect-[4/3] overflow-hidden border-b border-outline-variant/50 bg-surface-container-low">
                  <img
                    src={p.image}
                    alt={p.imageAlt}
                    width="1200"
                    height="896"
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-space-md">
                  <span className="mb-1 text-label-sm font-semibold text-primary">{p.category}</span>
                  <h3 className="text-headline-sm text-on-surface transition-colors duration-200 group-hover:text-primary">
                    <ProductName name={p.name} trademark={p.trademark} />
                  </h3>
                  <p className="mb-space-sm text-body-sm text-on-surface-variant">{p.subtitle}</p>
                  <span className="mt-auto inline-flex items-center gap-1 pt-space-xs text-label-md font-semibold text-plum-dark transition-colors duration-200 group-hover:text-primary">
                    <span>View details</span>
                    <ArrowRight
                      aria-hidden="true"
                      size={14}
                      className="transition-transform duration-300 ease-out group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link to={ROUTES.products} className="btn-outline inline-flex">
            <span>View All Products</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <FocusAreas />
      <WhyChoose />
      <FeaturedProducts />
      <CtaBanner
        title="Partner With ZenAvian Healthcare"
        text="Apply for distribution, request our catalogue, or talk to our team about poultry healthcare products."
        actions={[
          { label: 'Distributor Enquiry', href: ROUTES.distributor, icon: ArrowRight, iconPosition: 'right', iconClassName: 'text-primary' },
          { label: 'WhatsApp Our Team', href: buildWhatsAppUrl(WHATSAPP_MESSAGES.general), icon: MessageCircle, iconClassName: 'text-primary' },
        ]}
      />
    </>
  )
}
