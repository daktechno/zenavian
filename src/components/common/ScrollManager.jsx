import { useEffect } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'

/** Scroll to hash target, else to top on forward navigation; restores nothing on POP (browser handles it). */
export default function ScrollManager() {
  const { pathname, hash } = useLocation()
  const type = useNavigationType()
  useEffect(() => {
    if (hash) {
      const t = setTimeout(() => {
        const el = document.getElementById(decodeURIComponent(hash.slice(1)))
        if (el) {
          el.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' })
        }
      }, 60)
      return () => clearTimeout(t)
    }
    if (type !== 'POP') window.scrollTo(0, 0)
    return undefined
  }, [pathname, hash, type])
  return null
}
