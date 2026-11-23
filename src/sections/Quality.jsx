import { useRef } from 'react'
import SectionHeading from '../components/common/SectionHeading'
import QualityPillarCard from '../components/cards/QualityPillarCard'
import { qualityPillars } from '../data/qualityPillars'
import { useScrollReveal } from '../hooks/useGSAPAnimations'

export default function Quality() {
  const scope = useRef(null)
  useScrollReveal(scope)
  return (
    <section id="quality-pillars" ref={scope} className="section-y w-full bg-white" aria-labelledby="quality-title">
      <div className="container-page">
        <SectionHeading
          id="quality-title"
          align="center"
          eyebrow="Structural Framework"
          title="The Six Pillars of Our Quality Approach"
          description="We work with carefully selected international manufacturing partners to source reliable poultry healthcare products."
        />
        <div className="mb-space-xl grid grid-cols-1 gap-space-md sm:gap-space-lg md:grid-cols-2 lg:grid-cols-3">
          {qualityPillars.map((p, i) => (
            <QualityPillarCard key={p.title} index={i} {...p} />
          ))}
        </div>

        <div
          data-reveal
          className="flex flex-col items-center justify-between gap-space-lg rounded-xl border border-primary-container/30 bg-secondary-container p-space-md text-black shadow-xl sm:p-space-lg md:flex-row lg:p-space-xl"
        >
          <div className="max-w-2xl min-w-0">
            <span className="mb-space-xs inline-block rounded-sm border border-primary-container/30 bg-white px-3 py-1 text-label-sm uppercase tracking-wider text-primary">
              Global Manufacturing • Local Commitment
            </span>
            <h2 className="mb-space-xs text-headline-md text-black">World-class Science Tailored for Indian Farm Realities</h2>
            <p className="text-body-md text-black/90">
              We combine international manufacturing expertise with our in-depth understanding of the Indian poultry
              market to bring dependable healthcare solutions to poultry professionals.
            </p>
          </div>
          <div className="min-w-0 shrink-0 text-center md:text-right">
            <p className="mb-space-xs text-label-sm uppercase tracking-widest text-primary">Corporate Standard</p>
            <div className="text-title font-bold text-black/70">ZenAvian Healthcare</div>
            <p className="text-body-sm text-primary/70">Quality Products. Trusted Partnerships. Better Poultry Health.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
