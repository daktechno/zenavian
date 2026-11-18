import { Link } from 'react-router-dom'
import { branding } from '../../data/branding'

/** Reads everything from data/branding.js. Shows the configured logo file, else a text wordmark (no invented mark). */
export default function Logo({ variant = 'header' }) {
  const footer = variant === 'footer'
  const logo = footer ? branding.logoLight.src ? branding.logoLight : branding.logo : branding.logo
  const content = logo.src ? (
    <img src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} style={{ height: `${logo.height}px` }} className="w-auto object-contain" />
  ) : (
    <span className="flex flex-col leading-tight">
      <span className={`text-title font-bold tracking-tight ${footer ? 'text-white' : 'text-plum-dark'}`}>{branding.shortName}</span>
      <span className={`text-[10px] font-semibold uppercase tracking-wider ${footer ? 'text-primary-container' : 'text-primary'}`}>
        {branding.descriptor}
      </span>
    </span>
  )
  return (
    <Link to="/" className="flex min-h-11 shrink-0 items-center rounded-lg" aria-label={`${branding.name} — home`}>
      {content}
    </Link>
  )
}
