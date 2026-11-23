import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, MessageCircle } from 'lucide-react'
import PageHero from '../components/common/PageHero'
import ProductCard from '../components/cards/ProductCard'
import Catalogue from '../sections/Catalogue'
import CtaBanner from '../components/common/CtaBanner'
import SectionHeading from '../components/common/SectionHeading'
import ProductName from '../components/common/ProductName'
import { products, productFilters } from '../data/products'
import { ROUTES } from '../data/navigation'
import { useScrollReveal } from '../hooks/useGSAPAnimations'
import { WHATSAPP_MESSAGES, buildWhatsAppUrl } from '../utils/constants'

export default function ProductsPage() {
  const scope = useRef(null)
  useScrollReveal(scope)
  const [filter, setFilter] = useState('All')
  const shown = products.filter((p) => filter === 'All' || p.filter === filter)
  return (
    <>
      <PageHero
        eyebrow="Clinical Formulations"
        title="Our Products —"
        accent="Poultry Healthcare Solutions."
        description="Explore ZenAvian Healthcare formulations for coccidiosis management, respiratory health and bacterial challenges in commercial poultry."
        aside={
          <div className="rounded-2xl border border-outline-variant bg-white p-space-lg shadow-sm">
            <div className="text-headline-lg font-bold text-primary">{products.length}</div>
            <div className="text-label-md font-semibold text-on-surface">Focused formulations</div>
            <p className="mt-1 text-body-sm text-on-surface-variant">Anticoccidial, respiratory and antibacterial poultry healthcare.</p>
          </div>
        }
      />

      <section ref={scope} className="w-full bg-white pb-space-xl" aria-labelledby="catalog-title">
        <div className="container-page">
          <h2 id="catalog-title" className="sr-only">Product catalogue</h2>
          <div role="group" aria-label="Filter products by category" className="mb-space-lg flex flex-wrap gap-space-xs">
            {productFilters.map((f) => (
              <button key={f} type="button" aria-pressed={filter === f} onClick={() => setFilter(f)}
                className={`min-h-11 rounded-lg border px-space-md text-label-md transition-colors ${
                  filter === f ? 'border-plum-dark bg-plum-dark font-semibold text-white' : 'border-outline-variant bg-white text-on-surface-variant hover:bg-surface-container'
                }`}>
                {f}
              </button>
            ))}
          </div>
          <p role="status" className="sr-only">{shown.length} product{shown.length === 1 ? '' : 's'} shown</p>
          <div className="grid grid-cols-1 gap-space-md sm:gap-space-lg md:grid-cols-2">
            {shown.map((p, i) => <ProductCard key={p.id} product={p} priority={i < 2} />)}
          </div>
        </div>
      </section>

      <section className="w-full bg-surface-container-lowest section-y" aria-labelledby="index-title">
        <div className="container-page">
          <SectionHeading id="index-title" eyebrow="Overview" title="Product Index"
            description="A quick comparison of category, audience and positioning. Composition, dosage and withdrawal period are as approved on each product label." />
          <div className="overflow-x-auto rounded-2xl border border-outline-variant bg-white shadow-sm">
            <table className="w-full min-w-[640px] text-left text-body-sm">
              <caption className="sr-only">ZenAvian Healthcare product index</caption>
              <thead className="bg-surface-container text-label-md text-plum-dark">
                <tr>
                  <th scope="col" className="p-space-md">Product</th>
                  <th scope="col" className="p-space-md">Category</th>
                  <th scope="col" className="p-space-md">Positioned for</th>
                  <th scope="col" className="p-space-md">Audience</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/60">
                {products.map((p) => (
                  <tr key={p.id}>
                    <th scope="row" className="p-space-md font-bold text-on-surface">
                      <Link to={p.path} className="inline-flex min-h-11 items-center text-plum-dark hover:text-primary hover:underline"><ProductName name={p.name} trademark={p.trademark} /></Link>
                    </th>
                    <td className="p-space-md text-on-surface-variant">{p.category}</td>
                    <td className="p-space-md text-on-surface-variant">{p.subtitle}</td>
                    <td className="p-space-md text-on-surface-variant">{p.audience}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <div className="pt-space-xl"><Catalogue /></div>

      <CtaBanner
        title="Need Technical Details or Bulk Supply?"
        text="Talk to our team about specification sheets, dosage guidance and distribution."
        actions={[
          { label: 'Contact Our Team', href: ROUTES.contact, icon: ArrowRight, iconPosition: 'right', variant: 'tonal', iconClassName: 'text-primary' },
          { label: 'WhatsApp Query', href: buildWhatsAppUrl(WHATSAPP_MESSAGES.general), icon: MessageCircle, variant: 'outline', iconClassName: 'text-primary' },
        ]}
      />
    </>
  )
}
