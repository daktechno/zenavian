import { ChevronRight } from 'lucide-react'
import Emphasis from '../common/Emphasis'

export default function FocusAreaCard({ title, icon: Icon, tone, footerTone, description, footer }) {
  return (
    <article
      data-reveal
      className="flex flex-col justify-between rounded-xl border border-outline-variant bg-surface-container-lowest p-space-md shadow-sm transition-all duration-200 hover:border-primary-container hover:shadow-md sm:p-space-lg"
    >
      <div>
        <div
          className={`mb-space-md flex size-12 items-center justify-center rounded-lg border border-primary-container/40 bg-surface-container ${tone}`}
        >
          <Icon aria-hidden="true" size={24} strokeWidth={1.75} />
        </div>
        <h3 className="mb-space-xs text-headline-sm text-on-surface">{title}</h3>
        <p className="text-body-md leading-relaxed text-on-surface-variant">
          <Emphasis text={description} />
        </p>
      </div>
      <div
        className={`mt-space-md flex items-center gap-space-xs pt-space-md text-label-sm font-semibold ${
          footerTone ?? tone
        }`}
      >
        <span>{footer}</span>
        <ChevronRight aria-hidden="true" size={16} className="shrink-0" />
      </div>
    </article>
  )
}
