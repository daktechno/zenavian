import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { CircleCheck, MessageCircle, ArrowRight, Bird } from 'lucide-react'
import Button from '../components/common/Button'
import Emphasis from '../components/common/Emphasis'
import CtaBanner from '../components/common/CtaBanner'
import { products, getProduct } from '../data/products'
import { ROUTES } from '../data/navigation'
import { useHeroEntrance, useScrollReveal } from '../hooks/useGSAPAnimations'
import NotFoundPage from './NotFoundPage'
import { WHATSAPP_MESSAGES, buildWhatsAppUrl } from '../utils/constants'

export default function ProductDetailPage({ slug }) {
  const product = getProduct(slug)
  const scope = useRef(null)
  useHeroEntrance(scope)
  useScrollReveal(scope)
  if (!product) return <NotFoundPage />
  const { name, category, audience, subtitle, image, imageAlt, description, bullets, callout, cta, whatsapp, detail } = product
  const others = products.filter((p) => p.id !== product.id)
  return (
    <div ref={scope}>
      <section className="w-full bg-surface-container-lowest" aria-labelledby="product-title">
        <div className="container-page py-space-xl lg:py-20">
          <div className="grid grid-cols-1 items-center gap-space-xl lg:grid-cols-12">
            <div className="min-w-0 lg:col-span-6">
              <span data-hero className="mb-space-md inline-block rounded-pill border border-primary-container bg-surface-container px-3 py-1 text-label-sm font-semibold text-plum-dark">
                {category}
              </span>
              <h1 id="product-title" data-hero className="mb-space-xs text-display tracking-tight text-on-surface">{name}</h1>
              <p data-hero className="mb-space-md text-headline-sm font-semibold text-primary"><Emphasis text={subtitle} /></p>
              <p data-hero className="mb-space-md text-body-lg text-on-surface-variant">{detail.intro}</p>
              <p data-hero className="mb-space-lg flex items-center gap-space-xs text-label-md text-on-surface-variant">
                <Bird aria-hidden="true" size={16} className="shrink-0 text-primary" /> {audience}
              </p>
              <div data-hero className="flex flex-col gap-space-sm sm:flex-row sm:flex-wrap">
                <Button href={ROUTES.contact} icon={cta.icon} iconClassName="text-primary-container">{cta.label}</Button>
                <Button href={whatsapp} variant="tonal" icon={MessageCircle} iconClassName="text-primary">WhatsApp Query</Button>
              </div>
            </div>
            <div data-hero className="min-w-0 lg:col-span-6">
              <div className="overflow-hidden rounded-2xl border border-outline-variant bg-surface-container-low shadow-xl">
                <img src={image} alt={imageAlt} width="1200" height="896" fetchPriority="high" decoding="async" className="aspect-[4/3] size-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y w-full bg-white" aria-labelledby="overview-title">
        <div className="container-page grid grid-cols-1 gap-space-xl lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-7">
            <h2 id="overview-title" data-reveal className="mb-space-sm text-headline-lg text-on-surface">Product Overview</h2>
            <p data-reveal className="mb-space-lg text-body-lg text-on-surface-variant"><Emphasis text={description} /></p>
            <h3 data-reveal className="mb-space-sm text-title font-bold text-plum-dark">Positioned for</h3>
            <ul className="mb-space-lg space-y-space-xs">
              {bullets.map((b) => (
                <li key={b} data-reveal className="flex items-start gap-space-xs text-body-md text-on-surface">
                  <CircleCheck aria-hidden="true" size={18} className="mt-0.5 shrink-0 text-primary" />
                  <span><Emphasis text={b} /></span>
                </li>
              ))}
            </ul>
            <div data-reveal className="rounded-lg border border-outline-variant/60 bg-surface-container-low p-space-md text-body-sm text-on-surface-variant">
              <strong className="text-on-surface">{callout.label}</strong> {callout.text}
            </div>
          </div>

          <aside className="min-w-0 lg:col-span-5" aria-label="Product specification summary">
            <div data-reveal className="rounded-2xl border border-primary-container/30 bg-surface-container-lowest p-space-lg shadow-sm">
              <h2 className="mb-space-md text-headline-sm text-on-surface">At a Glance</h2>
              <dl className="divide-y divide-outline-variant/60 text-body-sm">
                {[
                  ['Brand', 'ZenAvian Healthcare'],
                  ['Category', category],
                  ['Audience', audience],
                  ['Use cases', detail.useCases.join(', ')],
                  ['Composition', 'As stated on the approved product label'],
                  ['Dosage & withdrawal period', 'As stated on the approved product label'],
                ].map(([k, v]) => (
                  <div key={k} className="grid grid-cols-[8rem_1fr] gap-space-sm py-space-sm">
                    <dt className="font-semibold text-on-surface">{k}</dt>
                    <dd className="text-on-surface-variant">{v}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-space-md text-label-sm text-on-surface-variant">
                Use only under professional avian healthcare guidance. For the full specification, contact our team.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-y w-full bg-surface-container-lowest" aria-labelledby="more-title">
        <div className="container-page">
          <h2 id="more-title" data-reveal className="mb-space-lg text-headline-md text-on-surface">Other ZenAvian Products</h2>
          <ul className="grid grid-cols-1 gap-space-md sm:grid-cols-3">
            {others.map((p) => (
              <li key={p.id} data-reveal>
                <Link to={p.path} className="flex h-full flex-col rounded-2xl border border-outline-variant bg-white p-space-md shadow-sm transition-colors hover:border-primary-container">
                  <span className="text-label-sm font-semibold text-primary">{p.category}</span>
                  <span className="text-title font-bold text-on-surface">{p.name}</span>
                  <span className="mb-space-sm text-body-sm text-on-surface-variant">{p.subtitle}</span>
                  <span className="mt-auto inline-flex items-center gap-1 text-label-md font-semibold text-plum-dark">View details <ArrowRight aria-hidden="true" size={14} /></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner
        title={`Interested in ${name}?`}
        text="Request technical information, discuss bulk supply, or become a distribution partner."
        actions={[
          { label: 'Distributor Enquiry', href: ROUTES.distributor, icon: ArrowRight, iconPosition: 'right', variant: 'tonal', iconClassName: 'text-primary' },
          { label: 'All Products', href: ROUTES.products, variant: 'outline', iconClassName: 'text-white', className: 'border-white/60 bg-transparent text-white hover:bg-white/10' },
        ]}
      />
    </div>
  )
}
