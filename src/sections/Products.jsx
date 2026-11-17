import { useRef } from 'react'
import SectionHeading from '../components/common/SectionHeading'
import ProductCard from '../components/cards/ProductCard'
import { products } from '../data/products'
import { useScrollReveal } from '../hooks/useGSAPAnimations'

export default function Products() {
  const scope = useRef(null)
  useScrollReveal(scope)
  return (
    <section id="products-section" ref={scope} className="section-y w-full bg-white" aria-labelledby="products-title">
      <div className="container-page">
        <SectionHeading
          id="products-title"
          eyebrow="Clinical Formulations"
          title="OUR PRODUCTS — Poultry Healthcare Solutions"
          description="At ZenAvian Healthcare, we offer a focused range of poultry healthcare products designed around important challenges faced by modern poultry farms."
        />
        <div className="grid grid-cols-1 gap-space-lg md:grid-cols-2 lg:gap-space-xl">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
