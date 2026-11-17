import { branding } from '../data/branding'

/** Canonical production origin. Override at build time with VITE_SITE_URL (no trailing slash). */
export const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://www.zenavian.com').replace(/\/+$/, '')
export const SITE_NAME = branding.name
export const DEFAULT_LOCALE = 'en_IN'
export const TWITTER_CARD = 'summary_large_image'

/** Absolute URL for a path (no trailing slash except root). */
export const absoluteUrl = (path = '/') => (path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path.replace(/\/+$/, '')}`)
export const ogImageUrl = () => `${SITE_URL}${branding.ogImage.path}`
