import PageHero from '../components/common/PageHero'
import Button from '../components/common/Button'
import { ArrowRight, Package } from 'lucide-react'
import { ROUTES } from '../data/navigation'

export default function NotFoundPage() {
  return (
    <PageHero eyebrow="Error 404" title="Page not found." description="The page you are looking for does not exist or may have moved. Use the links below to continue.">
      <Button href={ROUTES.home} icon={ArrowRight} iconPosition="right" iconClassName="text-primary-container">Back to Home</Button>
      <Button href={ROUTES.products} variant="outline" icon={Package} iconClassName="text-primary">Browse Products</Button>
      <Button href={ROUTES.contact} variant="tonal">Contact Us</Button>
    </PageHero>
  )
}
