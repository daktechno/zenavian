/**
 * Central brand configuration. Every place that shows the logo, favicon or brand name reads from here.
 *
 * LOGO: no official logo file has been supplied yet, so none is shown (a plain text wordmark is used).
 * To add the real logo, drop the file in /public/branding/ and set, e.g.:
 *   logo: { src: '/branding/zenavian-logo.svg', width: 160, height: 40 }
 *   logoLight: { src: '/branding/zenavian-logo-light.svg', width: 160, height: 40 }  // for the dark footer
 * Favicon: replace /public/favicon.svg (or point `favicon` below to your files).
 * Social share image: set `ogImage` to a 1200x630 image path in /public.
 */
export const branding = {
  name: 'ZenAvian Healthcare',
  shortName: 'ZenAvian',
  descriptor: 'Healthcare',
  legalName: null, // TODO(owner): registered legal entity name, if different. Not invented here.
  tagline: 'Healthy Birds. Better Performance. Stronger Future.',
  logo: { src: null, alt: 'ZenAvian Healthcare', width: 160, height: 40 },
  logoLight: { src: null, alt: 'ZenAvian Healthcare', width: 160, height: 40 },
  favicon: { svg: '/favicon.svg', png: null, appleTouch: null },
  ogImage: { path: '/images/hero/poultry-facility.webp', width: 1376, height: 768, alt: 'Modern biosecure commercial poultry house' },
  themeColor: '#2D122D',
  /** Verified social profile URLs. Leave empty until the owner supplies real ones (they feed JSON-LD sameAs). */
  social: { linkedin: '', facebook: '', instagram: '', youtube: '', x: '' },
}
