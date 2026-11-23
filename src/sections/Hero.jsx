// import { useRef } from 'react'
// import { ShieldCheck, BadgeCheck, Microscope, Globe, ArrowDown, Download, MessageCircle, HeartPulse } from 'lucide-react'
// import Button from '../components/common/Button'
// import { useHeroEntrance, useParallax } from '../hooks/useGSAPAnimations'
// import { WHATSAPP_DISPLAY, WHATSAPP_MESSAGES, buildWhatsAppUrl } from '../utils/constants'

// const trustBadges = [
//   { icon: BadgeCheck, tone: 'text-primary', label: 'ISO 9001:2015 Assured' },
//   { icon: Microscope, tone: 'text-secondary', label: 'Batch-wise Quality Checked' },
//   { icon: Globe, tone: 'text-tertiary', label: 'Approved International Partners' },
// ]

// export default function Hero() {
//   const scope = useRef(null)
//   useHeroEntrance(scope)
//   useParallax(scope)

//   return (
//     <section id="home" ref={scope} className="relative w-full overflow-hidden bg-white" aria-labelledby="hero-title">
//       <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:radial-gradient(#755377_1px,transparent_1px)] [background-size:20px_20px]" />
//       <div className="container-page relative z-10 py-10 lg:py-24">
//         <div className="grid grid-cols-1 items-center gap-space-xl lg:grid-cols-12">
//           <div className="flex min-w-0 flex-col items-start lg:col-span-7">
//             <div
//               data-hero
//               className="mb-space-md inline-flex items-start gap-space-xs rounded-xl border border-primary-container bg-surface-container px-3.5 py-1.5 text-plum-dark shadow-sm"
//             >
//               <ShieldCheck aria-hidden="true" size={16} className="mt-px shrink-0 text-primary" />
//               <span className="text-label-sm font-semibold uppercase tracking-wide">
//                 Poultry Healthcare &amp; Veterinary Pharmaceuticals • Global Standards
//               </span>
//             </div>

//             <h1 id="hero-title" data-hero className="mb-space-md text-display tracking-tight text-on-surface">
//               Advancing Poultry Health. <br className="hidden sm:inline" />
//               Supporting Better Performance.
//               {/* <span className="font-bold text-primary">Supporting Better Performance.</span> */}
//             </h1>

//             <p data-hero className="mb-space-lg max-w-2xl text-body-lg leading-relaxed text-on-surface-variant">
//               ZenAvian Healthcare is a poultry-focused healthcare company committed to providing quality veterinary
//               pharmaceutical and nutritional solutions for modern poultry farming. We focus on developing and delivering
//               reliable, innovative, and practical poultry healthcare solutions designed to support healthier birds,
//               better farm performance, and improved productivity.
//             </p>

//             <div data-hero className="mb-space-lg flex w-full flex-col gap-space-sm sm:w-auto sm:flex-row sm:flex-wrap sm:gap-space-md lg:mb-space-xl">
//               <Button href="/products" icon={ArrowDown} iconPosition="right" iconClassName="text-primary-container" className="[&>svg]:size-[18px]">
//                 Explore Products
//               </Button>
//               <Button href="/products#catalogue" variant="tonal" icon={Download} iconClassName="text-primary">
//                 Product Catalogue (PDF)
//               </Button>
//               <Button
//                 href={buildWhatsAppUrl(WHATSAPP_MESSAGES.vet)}
//                 variant="outline"
//                 icon={MessageCircle}
//                 iconClassName="text-primary"
//               >
//                 Chat with Vet: {WHATSAPP_DISPLAY}
//               </Button>
//             </div>

//             <ul
//               data-hero
//               className="grid w-full grid-cols-1 gap-space-sm rounded-xl border border-primary-container/30 bg-surface-container-lowest p-space-md text-label-sm text-on-surface-variant shadow-sm sm:flex sm:flex-wrap sm:items-center sm:justify-between"
//             >
//               {trustBadges.map(({ icon: Icon, tone, label }) => (
//                 <li key={label} className="flex items-center gap-space-xs">
//                   <Icon aria-hidden="true" size={18} className={`shrink-0 ${tone}`} />
//                   <span>{label}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div className="relative min-w-0 lg:col-span-5" data-hero-image>
//             <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-outline-variant bg-surface-container-high shadow-2xl lg:aspect-[5/4]">
//               <img
//                 data-parallax
//                 src="/images/hero/poultry-facility.webp"
//                 alt="Modern biosecure commercial poultry house with white broiler chickens, automated feeding lines, climate-control fans and staff in protective gear"
//                 width="1376"
//                 height="768"
//                 fetchPriority="high"
//                 decoding="async"
//                 className="size-full scale-110 object-cover [object-position:70%_center]"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-plum-dark/85 via-plum-dark/25 to-transparent" />
//               <div className="absolute left-3 top-3 inline-flex max-w-[calc(100%-1.5rem)] items-center gap-space-xs rounded-pill border border-primary-container bg-surface-container-lowest/95 px-3 py-1.5 text-label-sm text-plum-dark shadow-sm backdrop-blur-md sm:left-4 sm:top-4">
//                 <span className="zen-pulse size-2 shrink-0 rounded-pill bg-primary-container" />
//                 <span className="truncate">Biosecure Environment Monitored</span>
//               </div>
//               <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-space-sm rounded-lg border border-primary-container/30 bg-surface-container-lowest/95 p-space-sm shadow-lg backdrop-blur-md sm:inset-x-6 sm:bottom-6 sm:p-space-md">
//                 <div className="flex min-w-0 items-center gap-space-sm">
//                   <div className="flex size-10 shrink-0 items-center justify-center rounded-pill bg-primary-container/30 text-primary">
//                     <HeartPulse aria-hidden="true" size={22} />
//                   </div>
//                   <div className="min-w-0">
//                     <div className="text-headline-sm font-bold leading-none text-plum-dark">99.4%</div>
//                     <div className="text-label-sm text-on-surface-variant">Flock Viability Benchmark</div>
//                   </div>
//                 </div>
//                 <div className="hidden shrink-0 text-right sm:block lg:hidden xl:block">
//                   <span className="inline-block rounded-sm border border-primary-container/50 bg-surface-container px-2.5 py-1 text-[11px] font-bold text-primary">
//                     Scientifically Formulated
//                   </span>
//                   <p className="mt-0.5 text-[11px] text-on-surface-variant">Clinical Grade Inputs</p>
//                 </div>
//               </div>
//             </div>
//             <div className="pointer-events-none absolute -bottom-4 -right-4 -z-10 size-48 rounded-pill bg-primary-container/30 blur-3xl" />
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }



import { useEffect, useRef } from 'react'
import { ShieldCheck, BadgeCheck, Microscope, Globe, ArrowDown, Download, MessageCircle, HeartPulse } from 'lucide-react'
import Button from '../components/common/Button'
import { useHeroEntrance, useParallax } from '../hooks/useGSAPAnimations'
import { WHATSAPP_DISPLAY, WHATSAPP_MESSAGES, buildWhatsAppUrl } from '../utils/constants'

const trustBadges = [
  { icon: BadgeCheck, tone: 'text-primary', label: 'ISO 9001:2015 Assured' },
  { icon: Microscope, tone: 'text-secondary', label: 'Batch-wise Quality Checked' },
  { icon: Globe, tone: 'text-tertiary', label: 'Approved International Partners' },
]

export default function Hero() {
  const scope = useRef(null)
  const videoRef = useRef(null)
  useHeroEntrance(scope)
  useParallax(scope)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      video.pause()
    } else {
      video.play().catch(() => {})
    }
  }, [])

  return (
    <section id="home" ref={scope} className="relative w-full overflow-hidden bg-white" aria-labelledby="hero-title">
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:radial-gradient(#755377_1px,transparent_1px)] [background-size:20px_20px]" />
      <div className="container-page relative z-10 py-10 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-space-xl lg:grid-cols-12">
          <div className="flex min-w-0 flex-col items-start lg:col-span-7">
            {/* <div
              data-hero
              className="mb-space-md inline-flex items-start gap-space-xs rounded-xl border border-primary-container bg-surface-container px-3.5 py-1.5 text-plum-dark shadow-sm"
            >
              <ShieldCheck aria-hidden="true" size={16} className="mt-px shrink-0 text-primary" />
              <span className="text-label-sm font-semibold uppercase tracking-wide">
                Poultry Healthcare &amp; Veterinary Pharmaceuticals • Global Standards
              </span>
            </div> */}

            <h1 id="hero-title" data-hero className="mb-space-md text-display tracking-tight text-on-surface">
              Advancing Poultry Health. <br className="hidden sm:inline" />
              Supporting Better Performance.
            </h1>

            <p data-hero className="mb-space-lg max-w-2xl text-body-lg leading-relaxed text-on-surface-variant">
              ZenAvian Healthcare is a poultry-focused healthcare company committed to providing quality veterinary
              pharmaceutical and nutritional solutions for modern poultry farming. We focus on developing and delivering
              reliable, innovative, and practical poultry healthcare solutions designed to support healthier birds,
              better farm performance, and improved productivity.
            </p>

            <div data-hero className="mb-space-lg flex w-full flex-col gap-space-sm sm:w-auto sm:flex-row sm:flex-wrap sm:gap-space-md lg:mb-space-xl">
              <Button href="/products" variant="outline" icon={ArrowDown} iconPosition="right"  className="[&>svg]:size-[18px]">
                Explore Products
              </Button>
              <Button href="/products#catalogue" variant="outline" icon={Download} >
                Product Catalogue (PDF)
              </Button>
              <br />
              <Button
                href={buildWhatsAppUrl(WHATSAPP_MESSAGES.vet)}
                variant="outline"
                icon={MessageCircle}
              >
                Chat with Vet: {WHATSAPP_DISPLAY}
              </Button>
            </div>

            <ul
              data-hero
              className="grid w-full grid-cols-1 gap-space-sm rounded-xl border border-primary-container/30 bg-surface-container-lowest p-space-md text-label-sm text-on-surface-variant shadow-sm sm:flex sm:flex-wrap sm:items-center sm:justify-between"
            >
              {trustBadges.map(({ icon: Icon, tone, label }) => (
                <li key={label} className="flex items-center gap-space-xs">
                  <Icon aria-hidden="true" size={18} className={`shrink-0 ${tone}`} />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative min-w-0 lg:col-span-5" data-hero-image>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-outline-variant bg-surface-container-high shadow-2xl lg:aspect-[5/4]">
              <video
                ref={videoRef}
                data-parallax
                src="/videos/hero/poultry-facility.mp4"
                poster="/images/hero/poultry-facility.webp"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                aria-label="Modern biosecure commercial poultry house with white broiler chickens and automated feeding lines"
                className="size-full scale-110 object-cover [object-position:60%_center]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-plum-dark/85 via-plum-dark/25 to-transparent" />
              <div className="absolute left-3 top-3 inline-flex max-w-[calc(100%-1.5rem)] items-center gap-space-xs rounded-pill border border-primary-container bg-surface-container-lowest/95 px-3 py-1.5 text-label-sm text-plum-dark shadow-sm backdrop-blur-md sm:left-4 sm:top-4">
                <span className="zen-pulse size-2 shrink-0 rounded-pill bg-primary-container" />
                <span className="truncate">Biosecure Environment Monitored</span>
              </div>
              {/* <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-space-sm rounded-lg border border-primary-container/30 bg-surface-container-lowest/95 p-space-sm shadow-lg backdrop-blur-md sm:inset-x-6 sm:bottom-6 sm:p-space-md">
                <div className="flex min-w-0 items-center gap-space-sm">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-pill bg-primary-container/30 text-primary">
                    <HeartPulse aria-hidden="true" size={22} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-headline-sm font-bold leading-none text-plum-dark">99.4%</div>
                    <div className="text-label-sm text-on-surface-variant">Flock Viability Benchmark</div>
                  </div>
                </div>
                <div className="hidden shrink-0 text-right sm:block lg:hidden xl:block">
                  <span className="inline-block rounded-sm border border-primary-container/50 bg-surface-container px-2.5 py-1 text-[11px] font-bold text-primary">
                    Scientifically Formulated
                  </span>
                  <p className="mt-0.5 text-[11px] text-on-surface-variant">Clinical Grade Inputs</p>
                </div>
              </div> */}
            </div>
            <div className="pointer-events-none absolute -bottom-4 -right-4 -z-10 size-48 rounded-pill bg-primary-container/30 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}