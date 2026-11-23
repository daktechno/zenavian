import { useRef } from 'react'
import SectionHeading from '../components/common/SectionHeading'
import FocusAreaCard from '../components/cards/FocusAreaCard'
import { focusAreas } from '../data/focusAreas'
import { useScrollReveal } from '../hooks/useGSAPAnimations'

export default function FocusAreas() {
  const scope = useRef(null)
  useScrollReveal(scope)
  return (
    <section id="focus-section" ref={scope} className="section-y w-full bg-white mt-[-5rem]" aria-labelledby="focus-title">
      <div className="container-page">
        <SectionHeading
          id="focus-title"
          align="split"
          eyebrow="Focused Avian Veterinary Care"
          title="Our Key Focus Areas"
          description="Addressing the high-impact disease challenges, physiological stressors, and metabolic bottlenecks encountered in modern commercial poultry operations."
        />
        <div className="grid grid-cols-1 gap-space-md sm:grid-cols-2 sm:gap-space-lg lg:grid-cols-3">
          {focusAreas.map((area) => (
            <FocusAreaCard key={area.title} {...area} />
          ))}
        </div>
      </div>
    </section>
  )
}
