export const SITE_NAME = 'ZenAvian Healthcare'
export const EMAIL = 'info@zenavianhealth.com'
export const WHATSAPP_NUMBER = '919820045678'
export const WHATSAPP_DISPLAY = '+91 98200 45678'
export const PHONE_SECONDARY_DISPLAY = '+91 40 2345 6789'
export const PHONE_PRIMARY_TEL = '+919820045678'
export const PHONE_SECONDARY_TEL = '+914023456789'
export const MAPS_URL = 'https://maps.google.com'

/** Public path of the catalogue. Drop a real PDF at public/documents/catalogue.pdf to enable the download. */
export const CATALOGUE_URL = '/documents/catalogue.pdf'

export const buildWhatsAppUrl = (message) =>
  message
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    : `https://wa.me/${WHATSAPP_NUMBER}`

export const buildMailto = (subject, body) => {
  const params = []
  if (subject) params.push(`subject=${encodeURIComponent(subject)}`)
  if (body) params.push(`body=${encodeURIComponent(body)}`)
  return `mailto:${EMAIL}${params.length ? `?${params.join('&')}` : ''}`
}

export const WHATSAPP_MESSAGES = {
  vet: 'Hello ZenAvian Team, I would like to consult with a Poultry Vet Specialist.',
  distributor: 'Hello ZenAvian Team, I would like to apply for Distributorship.',
  general: 'Hello ZenAvian Team, I have a poultry health and business enquiry.',
}
