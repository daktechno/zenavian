import { MessageCircle } from 'lucide-react'
import { WHATSAPP_MESSAGES, buildWhatsAppUrl } from '../../utils/constants'

export default function WhatsAppButton() {
  const label = 'Direct Poultry Vet & Business Query'
  return (
    <aside className="fixed bottom-4 right-4 z-40 sm:bottom-6 sm:right-6" aria-label="WhatsApp enquiry">
      <a
        href={buildWhatsAppUrl(WHATSAPP_MESSAGES.general)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${label} on WhatsApp`}
        className="group relative flex size-12 items-center justify-center rounded-pill sm:size-14 bg-plum-dark text-white shadow-xl transition-all duration-200 hover:scale-105 hover:ring-4 hover:ring-primary-container focus-visible:ring-4 focus-visible:ring-primary-container"
      >
        <MessageCircle aria-hidden="true" size={26} className="text-primary-container" />
        <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-lg border border-primary-container/30 bg-plum-deep px-space-md py-space-xs text-label-sm text-white opacity-0 shadow-lg transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100 md:block">
          {label}
        </span>
      </a>
    </aside>
  )
}
