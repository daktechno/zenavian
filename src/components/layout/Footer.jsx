import { Link } from 'react-router-dom'
import { Info, MapPin, Mail, Phone, MessageCircle } from 'lucide-react'
import { footerProductLinks, footerCompanyLinks } from '../../data/navigation'
import { locations } from '../../data/locations'
import { branding } from '../../data/branding'
import { EMAIL, PHONE_PRIMARY_TEL, WHATSAPP_DISPLAY, buildWhatsAppUrl } from '../../utils/constants'
import Logo from '../common/Logo'

function LinkColumn({ title, links }) {
  return (
    <div>
      <h2 className="mb-space-md text-label-md font-bold uppercase tracking-wider text-primary-container">{title}</h2>
      <ul className="space-y-space-sm text-body-sm text-white/80">
        {links.map((l) => (
          <li key={l.label}>
            <Link to={l.to} className="inline-block py-1.5 transition-colors hover:text-primary-container">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="w-full border-t border-primary-container/30 bg-plum-dark text-white">
      <div className="container-page py-space-xl">
        <div className="mb-space-xl grid grid-cols-1 gap-space-lg sm:grid-cols-2 lg:grid-cols-5">
          <div className="sm:col-span-2 lg:pr-space-lg">
            <div className="mb-space-md">
              <Logo variant="footer" />
            </div>
            <p className="max-w-sm text-body-md text-white/80">
              {branding.tagline} Delivering clinical-grade poultry veterinary
              pharmaceuticals, bio-security formulations, and nutritional excellence across commercial flocks.
            </p>
          </div>

          <LinkColumn title="Products" links={footerProductLinks} />
          <LinkColumn title="Company" links={footerCompanyLinks} />

          <div className="sm:col-span-2 lg:col-span-1">
            <h2 className="mb-space-md text-label-md font-bold uppercase tracking-wider text-primary-container">
              Corporate Desk
            </h2>
            <div className="space-y-space-sm text-body-sm text-white/80">
              <div className="flex items-start gap-space-xs">
                <MapPin aria-hidden="true" size={16} className="mt-0.5 shrink-0 text-primary-container" />
                <span>Poultry Corridor Hub — {locations.map((l) => l.city).join(' & ')}, India</span>
              </div>
              <div className="flex items-start gap-space-xs">
                <Mail aria-hidden="true" size={16} className="mt-0.5 shrink-0 text-primary-container" />
                <a href={`mailto:${EMAIL}`} className="min-w-0 break-all py-1 transition-colors hover:text-primary-container">
                  {EMAIL}
                </a>
              </div>
              <div className="flex items-center gap-space-xs">
                <Phone aria-hidden="true" size={16} className="shrink-0 text-primary-container" />
                <a href={`tel:${PHONE_PRIMARY_TEL}`} className="inline-block py-1 transition-colors hover:text-primary-container">
                  {WHATSAPP_DISPLAY}
                </a>
              </div>
              <div className="pt-space-xs">
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-space-xs py-2 text-label-sm text-primary-fixed transition-colors hover:text-white"
                >
                  <MessageCircle aria-hidden="true" size={16} />
                  <span>WhatsApp Business Channel</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-space-lg rounded-lg border border-primary-container/20 bg-plum-deep p-space-md">
          <div className="flex items-start gap-space-sm">
            <Info aria-hidden="true" size={20} className="mt-0.5 shrink-0 text-primary-container" />
            <p className="text-body-sm text-white/80">
              <strong className="text-white">Regulatory &amp; Clinical Notice:</strong> Products sourced from approved
              international partners and handled strictly in accordance with poultry veterinary biosecurity standards.
              Formulations are strictly intended for veterinary and poultry administration under professional avian
              healthcare guidance.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-space-md text-center text-label-sm text-white/60 sm:flex-row sm:text-left">
          <p>© 2026 ZenAvian Healthcare. All rights reserved.</p>
          <a
            href="https://www.daktechno.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-fixed transition-colors hover:text-white"
          >
            Developed by D A K Technologies
          </a>
        </div>
      </div>
    </footer>
  )
}
