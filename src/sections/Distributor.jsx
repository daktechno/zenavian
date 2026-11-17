import { useRef } from 'react'
import { MessageCircle } from 'lucide-react'
import DistributorEnquiryForm from '../components/forms/DistributorEnquiryForm'
import Button from '../components/common/Button'
import { distributorBenefits } from '../data/contactInfo'
import { useScrollReveal } from '../hooks/useGSAPAnimations'
import { WHATSAPP_DISPLAY, WHATSAPP_MESSAGES, buildWhatsAppUrl } from '../utils/constants'

export default function Distributor() {
  const scope = useRef(null)
  useScrollReveal(scope)
  return (
    <section id="enquiry" ref={scope} className="section-y w-full bg-surface-container-lowest" aria-labelledby="distributor-title">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-space-xl lg:grid-cols-12">
          <div className="flex min-w-0 flex-col justify-between lg:col-span-5">
            <div>
              <h2 id="distributor-title" data-reveal className="mb-space-md text-headline-lg text-on-surface">
                Partner With ZenAvian Healthcare
              </h2>
              <p data-reveal className="mb-space-lg text-body-lg leading-relaxed text-on-surface-variant">
                We are expanding our authorized distribution network across primary poultry belts. We offer dependable
                product availability, marketing support, and clinical veterinary backing to qualified commercial
                stockists and farm integrators.
              </p>
              <ul className="mb-space-lg space-y-space-md">
                {distributorBenefits.map(({ icon: Icon, tone, title, text }) => (
                  <li key={title} data-reveal className="flex items-start gap-space-sm">
                    <div className={`mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-pill border border-primary-container/40 bg-surface-container ${tone}`}>
                      <Icon aria-hidden="true" size={18} />
                    </div>
                    <div>
                      <h3 className="text-title font-bold text-on-surface">{title}</h3>
                      <p className="text-body-sm text-on-surface-variant">{text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div data-reveal className="flex flex-wrap items-center justify-between gap-space-sm rounded-lg border border-primary-container/40 bg-surface-container-low p-space-md">
              <div>
                <div className="text-label-sm text-on-surface-variant">Priority Distribution Line</div>
                <div className="text-title font-bold text-plum-dark">{WHATSAPP_DISPLAY}</div>
              </div>
              <Button
                href={buildWhatsAppUrl(WHATSAPP_MESSAGES.distributor)}
                icon={MessageCircle}
                iconClassName="text-primary-container"
                className="px-3.5 py-2 text-label-sm"
              >
                Quick Connect
              </Button>
            </div>
          </div>

          <div className="min-w-0 lg:col-span-7">
            <div data-reveal className="rounded-xl border border-primary-container/30 bg-surface-container-lowest p-space-md shadow-lg sm:p-space-lg lg:p-space-xl">
              <h3 className="mb-space-xs text-headline-sm text-on-surface">Distributor &amp; Institutional Enquiry Form</h3>
              <p className="mb-space-lg text-body-sm text-on-surface-variant">
                Submit your corporate details to initiate regional distribution evaluation.
              </p>
              <DistributorEnquiryForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
