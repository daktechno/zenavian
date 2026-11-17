import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const NO_REDUCED_MOTION = '(prefers-reduced-motion: no-preference)'

/**
 * Reveals every `[data-reveal]` element inside `scope` as it scrolls into view.
 * Elements sharing a batch are staggered. Only opacity/transform are animated, so
 * there are no layout shifts. Disabled entirely under `prefers-reduced-motion`.
 */
export function useScrollReveal(scope, { selector = '[data-reveal]', y = 24, stagger = 0.09 } = {}) {
  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(NO_REDUCED_MOTION, () => {
        const targets = gsap.utils.toArray(selector)
        if (!targets.length) return
        gsap.set(targets, { autoAlpha: 0, y })
        ScrollTrigger.batch(targets, {
          start: 'top 90%',
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, {
              autoAlpha: 1,
              y: 0,
              duration: 0.7,
              ease: 'power2.out',
              stagger,
              overwrite: true,
              clearProps: 'transform',
            }),
        })
      })
      return () => mm.revert()
    },
    { scope },
  )
}

/** Hero entrance: staggered content on load + image reveal. Targets `[data-hero]` and `[data-hero-image]`. */
export function useHeroEntrance(scope) {
  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(NO_REDUCED_MOTION, () => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
        if (gsap.utils.toArray('[data-hero]').length) tl.from('[data-hero]', { autoAlpha: 0, y: 28, duration: 0.8, stagger: 0.1 })
        if (gsap.utils.toArray('[data-hero-image]').length) tl.from('[data-hero-image]', { autoAlpha: 0, y: 24, scale: 0.97, duration: 0.9 }, 0.15)
      })
      return () => mm.revert()
    },
    { scope },
  )
}

/** Subtle parallax for `[data-parallax]` images (desktop/tablet only, motion allowed). */
export function useParallax(scope, selector = '[data-parallax]') {
  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(`${NO_REDUCED_MOTION} and (min-width: 768px)`, () => {
        gsap.utils.toArray(selector).forEach((img) => {
          gsap.fromTo(
            img,
            { yPercent: -6 },
            {
              yPercent: 6,
              ease: 'none',
              scrollTrigger: {
                trigger: img.parentElement,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
              },
            },
          )
        })
      })
      return () => mm.revert()
    },
    { scope },
  )
}
