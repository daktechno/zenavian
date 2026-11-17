import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, MessageCircle, ArrowRight } from 'lucide-react'
import ContactCard from '../components/cards/ContactCard'
import Button from '../components/common/Button'
import { contactInfo } from '../data/contactInfo'
import { locations } from '../data/locations'
import { ROUTES } from '../data/navigation'
import { useScrollReveal } from '../hooks/useGSAPAnimations'
import { WHATSAPP_MESSAGES, buildWhatsAppUrl } from '../utils/constants'

export default function Contact() {
  const scope = useRef(null)
  useScrollReveal(scope)
  const { email, phones, hours, hub } = contactInfo
  return (
    <section id="contact-details" ref={scope} className="section-y w-full bg-white" aria-labelledby="contact-title">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-space-xl lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-7">
            <h2 id="contact-title" data-reveal className="mb-space-sm text-headline-lg text-on-surface">Get in Touch</h2>
            <p data-reveal className="mb-space-lg text-body-md leading-relaxed text-on-surface-variant">
              Reach out to our scientific advisory desk, institutional sales coordinators, or logistics teams directly.
            </p>
            <div className="space-y-space-md">
              <div data-reveal>
                <ContactCard icon={Mail} label="Official Corporate Email">
                  <a href={`mailto:${email}`} className="inline-flex min-h-11 items-center break-all text-[15px] font-semibold min-[360px]:text-title text-on-surface transition-colors hover:text-primary">{email}</a>
                </ContactCard>
              </div>
              <div data-reveal>
                <ContactCard icon={Phone} label="Direct Telephone Support">
                  <div className="flex flex-wrap items-center gap-x-space-xs text-title font-semibold text-on-surface">
                    {phones.map((p, i) => (
                      <span key={p.tel}>
                        <a href={`tel:${p.tel}`} className="inline-flex min-h-11 items-center whitespace-nowrap transition-colors hover:text-primary">{p.display}</a>
                        {i < phones.length - 1 && <span aria-hidden="true"> / </span>}
                      </span>
                    ))}
                  </div>
                  <div className="text-body-sm text-on-surface-variant">{hours}</div>
                </ContactCard>
              </div>
              <div data-reveal>
                <ContactCard icon={MapPin} label={hub.name}>
                  <div className="text-body-md font-semibold text-on-surface">{locations.map((l) => l.city).join(' & ')}, India</div>
                  <div className="text-body-sm text-on-surface-variant">{hub.note}</div>
                  <Link to="/contact#locations" className="inline-flex min-h-11 items-center gap-1 text-label-md font-semibold text-plum-dark hover:text-primary">
                    View map &amp; directions <ArrowRight aria-hidden="true" size={14} />
                  </Link>
                </ContactCard>
              </div>
            </div>
          </div>

          <div className="min-w-0 lg:col-span-5">
            <div data-reveal className="rounded-2xl border border-primary-container/30 bg-surface-container-low p-space-lg shadow-sm">
              <h3 className="mb-space-xs text-headline-sm text-on-surface">Fastest Way to Reach Us</h3>
              <p className="mb-space-md text-body-md text-on-surface-variant">Message our team on WhatsApp for product, veterinary and business queries.</p>
              <div className="flex flex-col gap-space-sm">
                <Button href={buildWhatsAppUrl(WHATSAPP_MESSAGES.general)} icon={MessageCircle} iconClassName="text-primary-container">WhatsApp Our Team</Button>
                <Button href={ROUTES.distributor} variant="outline" icon={ArrowRight} iconPosition="right" iconClassName="text-primary">Distributor Enquiry</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
