import { Mail, MessageCircle } from 'lucide-react'
import { EMAIL, WHATSAPP_DISPLAY, buildWhatsAppUrl } from '../../utils/constants'

export default function TopContactBar() {
  return (
    <div className="border-b border-white/10 bg-surface-container text-label-sm text-white">
      <div className="container-page flex h-9 items-center justify-between gap-space-md">
        <a
          href={`mailto:${EMAIL}`}
          className="flex h-9 min-w-0 items-center gap-space-xs text-plum-dark transition-colors hover:text-black"
        >
          <Mail aria-hidden="true" size={14} className="shrink-0 text-plum-dark" />
          <span className="truncate">{EMAIL}</span>
        </a>
        <a
          href={buildWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-9 shrink-0 items-center gap-space-xs text-plum-dark transition-colors hover:text-black"
        >
          <MessageCircle aria-hidden="true" size={14} className="shrink-0 text-plum-dark" />
          <span>
            WhatsApp<span className="hidden sm:inline">: {WHATSAPP_DISPLAY}</span>
          </span>
        </a>
      </div>
    </div>
  )
}
