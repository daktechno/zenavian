import PageHero from '../components/common/PageHero'
import Quality from '../sections/Quality'
import CtaBanner from '../components/common/CtaBanner'
import { ROUTES } from '../data/navigation'
import { ArrowRight } from 'lucide-react'

export default function QualityPage() {
  return (
    <>
      <PageHero
        eyebrow="Pharmaceutical Governance"
        title="Quality & Manufacturing —"
        accent="Quality You Can Trust."
        description="At ZenAvian Healthcare, quality is our priority. We work with carefully selected international manufacturing partners to source reliable poultry healthcare products, adhering to Indian and global veterinary requirements."
      />
      <Quality />
      <CtaBanner
        title="Questions About Our Products?"
        text="Request technical documentation or speak with our team about batch documentation and supply."
        actions={[
          { label: 'Contact Our Team', href: ROUTES.contact, icon: ArrowRight, iconPosition: 'right', variant: 'tonal', iconClassName: 'text-primary' },
          { label: 'Explore Products', href: ROUTES.products, variant: 'outline', iconClassName: 'text-primary' },
        ]}
      />
    </>
  )
}
