const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export const normalisePhone = (value) => value.replace(/[\s\-().]/g, '')

export const isValidPhone = (value) => {
  const p = normalisePhone(value)
  // Indian mobile (optionally prefixed with +91 / 91 / 0) or any international E.164 number
  if (/^(?:\+?91|0)?[6-9]\d{9}$/.test(p)) return true
  return /^\+[1-9]\d{7,14}$/.test(p)
}

export const MESSAGE_MAX = 1000

/** Returns an object of { fieldName: 'error message' }. Empty object = valid. */
export function validateEnquiry(values) {
  const errors = {}
  const name = values.name.trim()
  const company = values.company.trim()
  const email = values.email.trim()

  if (!name) errors.name = 'Please enter the contact name.'
  else if (name.length < 2) errors.name = 'Contact name must be at least 2 characters.'

  if (!(values.designation || '').trim()) errors.designation = 'Please enter your designation.'

  if (!company) errors.company = 'Please enter your company or distributorship name.'
  else if (company.length < 2) errors.company = 'Company name must be at least 2 characters.'

  if (!values.region) errors.region = 'Please select your primary operating region.'

  if (!values.phone.trim()) errors.phone = 'Please enter a phone number.'
  else if (!isValidPhone(values.phone))
    errors.phone = 'Enter a valid phone number, e.g. +91 98XXX XXXXX.'

  if (!email) errors.email = 'Please enter your official email address.'
  else if (!EMAIL_RE.test(email)) errors.email = 'Enter a valid email address, e.g. name@company.com.'

  if (!values.product) errors.product = 'Please choose a product interest.'

  if (values.message.length > MESSAGE_MAX)
    errors.message = `Message must be ${MESSAGE_MAX} characters or fewer.`

  return errors
}
