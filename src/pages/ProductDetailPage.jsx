// import { useRef } from 'react'
// import { Link } from 'react-router-dom'
// import { CircleCheck, MessageCircle, ArrowRight, Bird } from 'lucide-react'
// import Button from '../components/common/Button'
// import Emphasis from '../components/common/Emphasis'
// import CtaBanner from '../components/common/CtaBanner'
// import { products, getProduct } from '../data/products'
// import { ROUTES } from '../data/navigation'
// import { useHeroEntrance, useScrollReveal } from '../hooks/useGSAPAnimations'
// import NotFoundPage from './NotFoundPage'
// import { WHATSAPP_MESSAGES, buildWhatsAppUrl } from '../utils/constants'

// export default function ProductDetailPage({ slug }) {
//   const product = getProduct(slug)
//   const scope = useRef(null)
//   useHeroEntrance(scope)
//   useScrollReveal(scope)
//   if (!product) return <NotFoundPage />
//   const { name, category, audience, subtitle, image, imageAlt, description, bullets, callout, cta, whatsapp, detail } = product
//   const others = products.filter((p) => p.id !== product.id)
//   return (
//     <div ref={scope}>
//       <section className="w-full bg-surface-container-lowest" aria-labelledby="product-title">
//         <div className="container-page py-space-xl lg:py-20">
//           <div className="grid grid-cols-1 items-center gap-space-xl lg:grid-cols-12">
//             <div className="min-w-0 lg:col-span-6">
//               <span data-hero className="mb-space-md inline-block rounded-pill border border-primary-container bg-surface-container px-3 py-1 text-label-sm font-semibold text-plum-dark">
//                 {category}
//               </span>
//               <h1 id="product-title" data-hero className="mb-space-xs text-display tracking-tight text-on-surface">{name}</h1>
//               <p data-hero className="mb-space-md text-headline-sm font-semibold text-primary"><Emphasis text={subtitle} /></p>
//               <p data-hero className="mb-space-md text-body-lg text-on-surface-variant">{detail.intro}</p>
//               <p data-hero className="mb-space-lg flex items-center gap-space-xs text-label-md text-on-surface-variant">
//                 <Bird aria-hidden="true" size={16} className="shrink-0 text-primary" /> {audience}
//               </p>
//               <div data-hero className="flex flex-col gap-space-sm sm:flex-row sm:flex-wrap">
//                 <Button href={ROUTES.contact} icon={cta.icon} iconClassName="text-primary-container">{cta.label}</Button>
//                 <Button href={whatsapp} variant="tonal" icon={MessageCircle} iconClassName="text-primary">WhatsApp Query</Button>
//               </div>
//             </div>
//             <div data-hero className="min-w-0 lg:col-span-6">
//               <div className="overflow-hidden rounded-2xl border border-outline-variant bg-surface-container-low shadow-xl">
//                 <img src={image} alt={imageAlt} width="1200" height="896" fetchPriority="high" decoding="async" className="aspect-[4/3] size-full object-cover" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="section-y w-full bg-white" aria-labelledby="overview-title">
//         <div className="container-page grid grid-cols-1 gap-space-xl lg:grid-cols-12">
//           <div className="min-w-0 lg:col-span-7">
//             <h2 id="overview-title" data-reveal className="mb-space-sm text-headline-lg text-on-surface">Product Overview</h2>
//             <p data-reveal className="mb-space-lg text-body-lg text-on-surface-variant"><Emphasis text={description} /></p>
//             <h3 data-reveal className="mb-space-sm text-title font-bold text-plum-dark">Positioned for</h3>
//             <ul className="mb-space-lg space-y-space-xs">
//               {bullets.map((b) => (
//                 <li key={b} data-reveal className="flex items-start gap-space-xs text-body-md text-on-surface">
//                   <CircleCheck aria-hidden="true" size={18} className="mt-0.5 shrink-0 text-primary" />
//                   <span><Emphasis text={b} /></span>
//                 </li>
//               ))}
//             </ul>
//             <div data-reveal className="rounded-lg border border-outline-variant/60 bg-surface-container-low p-space-md text-body-sm text-on-surface-variant">
//               <strong className="text-on-surface">{callout.label}</strong> {callout.text}
//             </div>
//           </div>

//           <aside className="min-w-0 lg:col-span-5" aria-label="Product specification summary">
//             <div data-reveal className="rounded-2xl border border-primary-container/30 bg-surface-container-lowest p-space-lg shadow-sm">
//               <h2 className="mb-space-md text-headline-sm text-on-surface">At a Glance</h2>
//               <dl className="divide-y divide-outline-variant/60 text-body-sm">
//                 {[
//                   ['Brand', 'ZenAvian Healthcare'],
//                   ['Category', category],
//                   ['Audience', audience],
//                   ['Use cases', detail.useCases.join(', ')],
//                   ['Composition', 'As stated on the approved product label'],
//                   ['Dosage & withdrawal period', 'As stated on the approved product label'],
//                 ].map(([k, v]) => (
//                   <div key={k} className="grid grid-cols-[8rem_1fr] gap-space-sm py-space-sm">
//                     <dt className="font-semibold text-on-surface">{k}</dt>
//                     <dd className="text-on-surface-variant">{v}</dd>
//                   </div>
//                 ))}
//               </dl>
//               <p className="mt-space-md text-label-sm text-on-surface-variant">
//                 Use only under professional avian healthcare guidance. For the full specification, contact our team.
//               </p>
//             </div>
//           </aside>
//         </div>
//       </section>

//       <section className="section-y w-full bg-surface-container-lowest" aria-labelledby="more-title">
//         <div className="container-page">
//           <h2 id="more-title" data-reveal className="mb-space-lg text-headline-md text-on-surface">Other ZenAvian Products</h2>
//           <ul className="grid grid-cols-1 gap-space-md sm:grid-cols-3">
//             {others.map((p) => (
//               <li key={p.id} data-reveal>
//                 <Link to={p.path} className="flex h-full flex-col rounded-2xl border border-outline-variant bg-white p-space-md shadow-sm transition-colors hover:border-primary-container">
//                   <span className="text-label-sm font-semibold text-primary">{p.category}</span>
//                   <span className="text-title font-bold text-on-surface">{p.name}</span>
//                   <span className="mb-space-sm text-body-sm text-on-surface-variant">{p.subtitle}</span>
//                   <span className="mt-auto inline-flex items-center gap-1 text-label-md font-semibold text-plum-dark">View details <ArrowRight aria-hidden="true" size={14} /></span>
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </section>

//       <CtaBanner
//         title={`Interested in ${name}?`}
//         text="Request technical information, discuss bulk supply, or become a distribution partner."
//         actions={[
//           { label: 'Distributor Enquiry', href: ROUTES.distributor, icon: ArrowRight, iconPosition: 'right', variant: 'tonal', iconClassName: 'text-primary' },
//           { label: 'All Products', href: ROUTES.products, variant: 'outline', iconClassName: 'text-primary' },
//         ]}
//       />
//     </div>
//   )
// }



import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { CircleCheck, MessageCircle, ArrowRight, Bird, Eye, EyeOff, ZoomIn, X } from 'lucide-react'
import Button from '../components/common/Button'
import Emphasis from '../components/common/Emphasis'
import CtaBanner from '../components/common/CtaBanner'
import ProductName from '../components/common/ProductName'
import { products, getProduct } from '../data/products'
import { ROUTES } from '../data/navigation'
import { useHeroEntrance, useScrollReveal } from '../hooks/useGSAPAnimations'
import NotFoundPage from './NotFoundPage'

export default function ProductDetailPage({ slug }) {
  const product = getProduct(slug)
  const scope = useRef(null)
  const [showSensitive, setShowSensitive] = useState(false)
  const [activeCase, setActiveCase] = useState(null)

  useHeroEntrance(scope)
  useScrollReveal(scope)

  // Reset sensitive toggle & lightbox when navigating between products
  useEffect(() => {
    setShowSensitive(false)
    setActiveCase(null)
  }, [slug])

  // Close lightbox on Escape key
  useEffect(() => {
    if (!activeCase) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setActiveCase(null)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [activeCase])

  if (!product) return <NotFoundPage />
  const { name, category, audience, subtitle, image, imageAlt, description, bullets, callout, cta, whatsapp, detail } = product
  const others = products.filter((p) => p.id !== product.id)
  const clinicalCases = detail.clinicalCases ?? []

  return (
    <div ref={scope}>
      <section className="w-full bg-surface-container-lowest" aria-labelledby="product-title">
        <div className="container-page py-space-xl lg:py-20">
          <div className="grid grid-cols-1 items-center gap-space-xl lg:grid-cols-12">
            <div className="min-w-0 lg:col-span-6 mt-[-60px]">
              <span data-hero className="mb-space-md inline-block rounded-pill border border-primary-container bg-surface-container px-3 py-1 text-label-sm font-semibold text-plum-dark">
                {category}
              </span>
              <h1 id="product-title" data-hero className="mb-space-xs text-display tracking-tight text-on-surface"><ProductName name={name} trademark={product.trademark} /></h1>
              <p data-hero className="mb-space-md text-headline-sm font-semibold text-black"><Emphasis text={subtitle} /></p>
              <p data-hero className="mb-space-md text-body-lg text-on-surface-variant">{detail.intro}</p>
              <p data-hero className="mb-space-lg flex items-center gap-space-xs text-label-md text-on-surface-variant">
                <Bird aria-hidden="true" size={16} className="shrink-0 text-primary" /> {audience}
              </p>
              <div data-hero className="flex flex-col gap-space-sm sm:flex-row sm:flex-wrap">
                <Button href={ROUTES.contact} icon={cta.icon} variant="tonal" iconClassName="text-primary">{cta.label}</Button>
                <Button href={whatsapp} variant="outline" icon={MessageCircle} iconClassName="text-plum-medium">WhatsApp Query</Button>
              </div>
            </div>
            <div data-hero className="min-w-0 lg:col-span-6">
              <div className="overflow-hidden rounded-2xl border border-outline-variant bg-surface-container-low shadow-xl">
                <img src={image} alt={imageAlt} width="1200" height="896" fetchPriority="high" decoding="async" className="aspect-[4/3] size-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y w-full bg-white mt-[-50px]" aria-labelledby="overview-title">
        <div className="container-page grid grid-cols-1 gap-space-xl lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-7">
            <h2 id="overview-title" data-reveal className="mb-space-sm text-headline-lg text-on-surface">Product Overview</h2>
            <p data-reveal className="mb-space-lg text-body-lg text-on-surface-variant"><Emphasis text={description} /></p>
            <h3 data-reveal className="mb-space-sm text-title font-bold text-plum-dark">Positioned for</h3>
            <ul className="mb-space-lg space-y-space-xs">
              {bullets.map((b) => (
                <li key={b} data-reveal className="flex items-start gap-space-xs text-body-md text-on-surface">
                  <CircleCheck aria-hidden="true" size={18} className="mt-0.5 shrink-0 text-primary" />
                  <span><Emphasis text={b} /></span>
                </li>
              ))}
            </ul>
            <div data-reveal className="rounded-lg border border-outline-variant/60 bg-surface-container-low p-space-md text-body-sm text-on-surface-variant">
              <strong className="text-on-surface">{callout.label}</strong> {callout.text}
            </div>
          </div>

          <aside className="min-w-0 lg:col-span-5" aria-label="Product specification summary">
            <div data-reveal className="rounded-2xl border border-primary-container/30 bg-surface-container-lowest p-space-lg shadow-sm">
              <h2 className="mb-space-md text-headline-sm text-on-surface">At a Glance</h2>
              <dl className="divide-y divide-outline-variant/60 text-body-sm">
                {[
                  ['Brand', 'ZenAvian Healthcare'],
                  ['Category', category],
                  ['Audience', audience],
                  ['Use cases', detail.useCases.join(', ')],
                  ['Composition', 'As stated on the approved product label'],
                  ['Dosage & withdrawal period', 'As stated on the approved product label'],
                ].map(([k, v]) => (
                  <div key={k} className="grid grid-cols-[8rem_1fr] gap-space-sm py-space-sm">
                    <dt className="font-semibold text-on-surface">{k}</dt>
                    <dd className="text-on-surface-variant">{v}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-space-md text-label-sm text-on-surface-variant">
                Use only under professional avian healthcare guidance. For the full specification, contact our team.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {clinicalCases.length > 0 && (
        <section className="section-y w-full border-t border-outline-variant/60 bg-surface-container-low/50" aria-labelledby="pathology-title">
          <div className="container-page">
            <div data-reveal className="mb-space-lg flex flex-col justify-between gap-space-md sm:flex-row sm:items-end">
              <div>
                <span className="mb-1 inline-block text-label-sm font-semibold uppercase tracking-wider text-primary">
                  Veterinary Field Reference
                </span>
                <h2 id="pathology-title" className="text-headline-md text-on-surface">
                  Targeted Clinical Lesions &amp; Post-Mortem Findings
                </h2>
                <p className="mt-1 max-w-2xl text-body-md text-on-surface-variant">
                  Field necropsy observations indicating conditions where {name} is positioned under veterinary supervision.
                </p>
              </div>

              <button
                type="button"
                aria-pressed={showSensitive}
                onClick={() => setShowSensitive((prev) => !prev)}
                className="btn-outline self-start sm:self-auto"
              >
                {showSensitive ? (
                  <>
                    <EyeOff aria-hidden="true" size={16} className="text-primary" />
                    <span>Hide Clinical Photos</span>
                  </>
                ) : (
                  <>
                    <Eye aria-hidden="true" size={16} className="text-primary" />
                    <span>Show Clinical Photos</span>
                  </>
                )}
              </button>
            </div>

            <div className="grid grid-cols-1 gap-space-md sm:grid-cols-2 lg:grid-cols-3">
              {clinicalCases.map((item) => (
                <div key={item.title} data-reveal className="h-full">
                  <figure className="group flex h-full flex-col overflow-hidden rounded-2xl border border-outline-variant bg-white shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10">
                    <button
                      type="button"
                      onClick={() => (showSensitive ? setActiveCase(item) : setShowSensitive(true))}
                      aria-label={showSensitive ? `Inspect ${item.title} in full view` : `Reveal clinical photo: ${item.title}`}
                      className="relative aspect-[4/3] w-full overflow-hidden border-b border-outline-variant/50 bg-surface-container text-left focus-visible:outline-2 focus-visible:outline-primary"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        decoding="async"
                        className={`size-full object-cover transition-all duration-500 ease-out ${
                          showSensitive ? 'scale-100 blur-0 group-hover:scale-105' : 'scale-110 blur-xl'
                        }`}
                      />
                      {!showSensitive ? (
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 bg-plum-dark/35 p-4 text-center">
                          <span className="inline-flex items-center gap-1.5 rounded-pill border border-primary-container bg-white/95 px-3 py-1.5 text-label-sm font-semibold text-plum-dark shadow-sm">
                            <Eye aria-hidden="true" size={14} className="text-primary" />
                            <span>Post-Mortem Image • Click to Reveal</span>
                          </span>
                        </div>
                      ) : (
                        <span className="absolute bottom-2.5 right-2.5 inline-flex items-center gap-1 rounded-pill border border-primary-container/60 bg-white/90 px-2.5 py-1 text-label-sm font-semibold text-plum-dark opacity-0 shadow-sm backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100">
                          <ZoomIn aria-hidden="true" size={13} className="text-primary" />
                          <span>Inspect</span>
                        </span>
                      )}
                    </button>

                    <figcaption className="flex flex-1 flex-col p-space-md">
                      <span className="text-label-sm font-semibold text-primary">{item.condition}</span>
                      <h3 className="mt-0.5 text-title font-bold text-on-surface transition-colors duration-200 group-hover:text-primary">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-body-sm leading-relaxed text-on-surface-variant">{item.caption}</p>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-y w-full bg-surface-container-lowest" aria-labelledby="more-title">
        <div className="container-page">
          <h2 id="more-title" data-reveal className="mb-space-lg text-headline-md text-on-surface">Other ZenAvian Products</h2>
          <ul className="grid grid-cols-1 gap-space-md sm:grid-cols-3">
            {others.map((p) => (
              <li key={p.id} data-reveal className="h-full">
                <Link
                  to={p.path}
                  className="group flex h-full flex-col rounded-2xl border border-outline-variant bg-white p-space-md shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
                >
                  <span className="text-label-sm font-semibold text-primary">{p.category}</span>
                  <span className="text-title font-bold text-on-surface transition-colors duration-200 group-hover:text-primary"><ProductName name={p.name} trademark={p.trademark} /></span>
                  <span className="mb-space-sm text-body-sm text-on-surface-variant">{p.subtitle}</span>
                  <span className="mt-auto inline-flex items-center gap-1 text-label-md font-semibold text-plum-dark transition-colors duration-200 group-hover:text-primary">
                    <span>View details</span>
                    <ArrowRight aria-hidden="true" size={14} className="transition-transform duration-300 ease-out group-hover:translate-x-1" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner
        title={`Interested in ${name}?`}
        text="Request technical information, discuss bulk supply, or become a distribution partner."
        actions={[
          { label: 'Distributor Enquiry', href: ROUTES.distributor, icon: ArrowRight, iconPosition: 'right', iconClassName: 'text-primary' },
          { label: 'All Products', href: ROUTES.products, iconClassName: 'text-primary' },
        ]}
      />

      {/* Lightbox Modal for detailed clinical inspection */}
      {activeCase && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
          onClick={() => setActiveCase(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-on-background/80 p-4 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-2xl border border-outline-variant bg-white shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setActiveCase(null)}
              aria-label="Close clinical photo view"
              className="absolute right-3 top-3 z-10 flex size-10 items-center justify-center rounded-pill border border-outline-variant bg-white/95 text-on-surface shadow-sm transition-colors hover:bg-surface-container"
            >
              <X aria-hidden="true" size={18} />
            </button>

            <div className="max-h-[65vh] overflow-hidden bg-surface-container-highest">
              <img
                src={activeCase.image}
                alt={activeCase.title}
                className="mx-auto max-h-[65vh] w-auto object-contain"
              />
            </div>

            <div className="p-space-md sm:p-space-lg">
              <span className="text-label-sm font-semibold text-primary">{activeCase.condition}</span>
              <h3 id="lightbox-title" className="mt-0.5 text-headline-sm text-on-surface">{activeCase.title}</h3>
              <p className="mt-1 text-body-md text-on-surface-variant">{activeCase.caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}