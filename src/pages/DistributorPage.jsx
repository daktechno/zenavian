import PageHero from '../components/common/PageHero'
import Distributor from '../sections/Distributor'
import CtaBanner from '../components/common/CtaBanner'
import { ROUTES } from '../data/navigation'
import { ArrowRight } from 'lucide-react'

export default function DistributorPage() {
  return (
    <>
      <PageHero
        eyebrow="Distributor & Commercial Alliances"
        title="Distributor Enquiry —"
        accent="Partner With ZenAvian."
        description="Qualified commercial stockists and farm integrators can start a distribution enquiry for ZenAvian poultry healthcare products."
      />
      <Distributor />
      <CtaBanner
        title="Prefer to Talk First?"
        text="Visit our contact page for phone, email and our Hyderabad and Bengaluru locations."
        actions={[
          { label: 'Contact & Locations', href: ROUTES.contact, icon: ArrowRight, iconPosition: 'right', variant: 'tonal', iconClassName: 'text-primary' },
          { label: 'View Products', href: ROUTES.products, variant: 'outline', iconClassName: 'text-white', className: 'border-white/60 bg-transparent text-white hover:bg-white/10' },
        ]}
      />
    </>
  )
}
