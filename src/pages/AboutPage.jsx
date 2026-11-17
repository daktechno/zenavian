import PageHero from '../components/common/PageHero'
import About from '../sections/About'
import FocusAreas from '../sections/FocusAreas'
import CtaBanner from '../components/common/CtaBanner'
import { ROUTES } from '../data/navigation'
import { ArrowRight } from 'lucide-react'

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About ZenAvian Healthcare"
        title="Advancing Poultry Health."
        accent="Supporting Better Performance."
        description="ZenAvian Healthcare is a poultry-focused healthcare company committed to providing quality veterinary pharmaceutical and nutritional solutions for modern poultry farming."
      />
      <About />
      <FocusAreas />
      <CtaBanner
        title="See How We Work"
        text="Read about our quality approach or explore the poultry healthcare products we offer."
        actions={[
          { label: 'Quality & Manufacturing', href: ROUTES.quality, icon: ArrowRight, iconPosition: 'right', variant: 'tonal', iconClassName: 'text-primary' },
          { label: 'Explore Products', href: ROUTES.products, variant: 'outline', iconClassName: 'text-white', className: 'border-white/60 bg-transparent text-white hover:bg-white/10' },
        ]}
      />
    </>
  )
}
