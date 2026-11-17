import { Link } from 'react-router-dom'
import { Bird, CircleCheck, Stethoscope, TriangleAlert, MessageCircle, ArrowRight } from 'lucide-react'
import Button from '../common/Button'
import Emphasis from '../common/Emphasis'

function Callout({ variant, label, text }) {
  if (variant === 'warning') {
    return (
      <div className="mb-space-lg rounded-sm border border-error/20 bg-error-container/40 p-space-sm text-[12px] leading-relaxed text-on-surface">
        <div className="flex items-start gap-space-xs">
          <TriangleAlert aria-hidden="true" size={18} className="mt-0.5 shrink-0 text-error" />
          <span>
            <strong>{label}</strong> {text}
          </span>
        </div>
      </div>
    )
  }
  if (variant === 'insight') {
    return (
      <div className="mb-space-lg rounded-sm border border-outline-variant/60 bg-surface-container-low p-space-sm text-[12px] leading-relaxed text-on-surface-variant">
        <div className="flex items-start gap-space-xs">
          <Stethoscope aria-hidden="true" size={16} className="mt-0.5 shrink-0 text-primary" />
          <span>
            <strong>{label}</strong> {text}
          </span>
        </div>
      </div>
    )
  }
  return (
    <div className="mb-space-lg rounded-sm border border-outline-variant/60 bg-surface-container-low p-space-sm text-[12px] leading-relaxed text-on-surface-variant">
      <span className="font-semibold text-on-surface">{label}</span> {text}
    </div>
  )
}

export default function ProductCard({ product, priority = false }) {
  const { path, name, category, categoryTone, audience, subtitle, badge, image, imageAlt, description, bullets, callout, cta, whatsapp } =
    product
  return (
    <article
      data-reveal
      className="flex min-w-0 flex-col justify-between rounded-xl border border-outline-variant bg-surface-container-lowest p-space-md shadow-md transition-all hover:border-primary-container sm:p-space-lg"
    >
      <div>
        <div className="mb-space-md flex flex-wrap items-center justify-between gap-space-xs">
          <span
            className={`rounded-pill border border-primary-container bg-surface-container px-2.5 py-1 text-label-sm font-semibold ${categoryTone}`}
          >
            Category: {category}
          </span>
          <span className="inline-flex items-center gap-space-xs text-label-sm text-on-surface-variant">
            <Bird aria-hidden="true" size={14} className="shrink-0 text-primary" /> {audience}
          </span>
        </div>

        <div className="relative mb-space-md h-56 w-full overflow-hidden rounded-lg border border-outline-variant bg-surface-container-low sm:h-64">
          <img
            src={image}
            alt={imageAlt}
            width="1200"
            height="896"
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            className="size-full object-cover object-center"
          />
          <div className="absolute bottom-2 right-2 rounded-sm border border-primary-container/40 bg-surface-container-lowest/90 px-2 py-0.5 text-code-spec text-on-surface shadow-sm">
            {badge}
          </div>
        </div>

        <div className="mb-space-sm">
          <h3 className="text-headline-md text-on-surface"><Link to={path} className="transition-colors hover:text-primary">{name}</Link></h3>
          <p className="text-title font-semibold text-primary">
            <Emphasis text={subtitle} />
          </p>
        </div>
        <p className="mb-space-md text-body-md text-on-surface-variant">
          <Emphasis text={description} />
        </p>

        <ul className="mb-space-md space-y-space-xs">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-space-xs text-body-md text-on-surface">
              <CircleCheck aria-hidden="true" size={18} className="mt-0.5 shrink-0 text-primary" />
              <span>
                <Emphasis text={b} />
              </span>
            </li>
          ))}
        </ul>

        <Callout {...callout} />
      </div>

      <div className="flex flex-col gap-space-sm">
        <Button href={path} icon={ArrowRight} iconPosition="right" iconClassName="text-primary-container" className="px-4 py-2.5" aria-label={`View ${name} product details`}>
          View Product Details
        </Button>
        <div className="flex flex-col gap-space-sm sm:flex-row md:flex-col lg:flex-row">
          <Button href="/contact" variant="outline" icon={cta.icon} iconClassName="text-primary" className="flex-1 px-4 py-2.5">
            {cta.label}
          </Button>
          <Button href={whatsapp} variant="tonal" icon={MessageCircle} iconClassName="text-primary" className="px-4 py-2.5" aria-label={`WhatsApp enquiry about ${name}`}>
            WhatsApp Query
          </Button>
        </div>
      </div>
    </article>
  )
}
