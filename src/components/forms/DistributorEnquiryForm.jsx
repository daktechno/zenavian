import { useRef, useState } from 'react'
import { Send, Info, CircleCheck, MessageCircle, Mail, RotateCcw } from 'lucide-react'
import { regions, productInterests } from '../../data/contactInfo'
import { validateEnquiry } from '../../utils/validators'
import { buildMailto, buildWhatsAppUrl } from '../../utils/constants'
import FormField from './FormField'
import Button from '../common/Button'

const initialValues = { name: '', designation: '', company: '', region: '', phone: '', email: '', product: 'Full Portfolio', message: '' }
const fieldOrder = ['name', 'designation', 'company', 'region', 'phone', 'email', 'product', 'message']

function summarise(v) {
  const interest = productInterests.find((p) => p.value === v.product)?.label ?? v.product
  return [
    'Distributor & Institutional Enquiry',
    `Contact Name: ${v.name.trim()}`,
    `Designation: ${v.designation.trim()}`,
    `Company / Distributorship: ${v.company.trim()}`,
    `State / Operating Region: ${v.region}`,
    `Phone: ${v.phone.trim()}`,
    `Official Email: ${v.email.trim()}`,
    `Product Interest: ${interest}`,
    `Message / Territory Details: ${v.message.trim() || '—'}`,
  ].join('\n')
}

export default function DistributorEnquiryForm() {
  const formRef = useRef(null)
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [validated, setValidated] = useState(false)

  const update = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    // Clear a field's error as soon as the user edits it
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  const blurValidate = (e) => {
    const { name } = e.target
    const result = validateEnquiry(values)
    setErrors((er) => ({ ...er, [name]: result[name] }))
  }

  const submit = (e) => {
    e.preventDefault()
    const result = validateEnquiry(values)
    setErrors(result)
    const firstInvalid = fieldOrder.find((f) => result[f])
    if (firstInvalid) {
      formRef.current?.elements[firstInvalid]?.focus()
      return
    }
    setValidated(true)
  }

  const reset = () => {
    setValues(initialValues)
    setErrors({})
    setValidated(false)
  }

  const message = summarise(values)

  return (
    <form ref={formRef} onSubmit={submit} noValidate className="space-y-space-md" aria-label="Distributor and institutional enquiry">
      <div className="grid grid-cols-1 gap-space-md sm:grid-cols-2">
        <FormField id="name" label="Contact Name" required placeholder="e.g. Ramesh Reddy" autoComplete="name"
          value={values.name} onChange={update} onBlur={blurValidate} error={errors.name} />
        <FormField id="designation" label="Designation" required placeholder="e.g. Managing Partner / Director" autoComplete="organization-title"
          value={values.designation} onChange={update} onBlur={blurValidate} error={errors.designation} />
      </div>

      <div className="grid grid-cols-1 gap-space-md sm:grid-cols-2">
        <FormField id="company" label="Company / Distributorship" required placeholder="e.g. Apex Agri-Vet Supplies"
          autoComplete="organization" value={values.company} onChange={update} onBlur={blurValidate} error={errors.company} />
        <FormField id="region" as="select" label="State / Operating Region" required value={values.region}
          onChange={update} onBlur={blurValidate} error={errors.region}
          options={
            <>
              <option value="" disabled>Select Primary Territory</option>
              {regions.map((r) => <option key={r} value={r}>{r}</option>)}
            </>
          } />
      </div>

      <div className="grid grid-cols-1 gap-space-md sm:grid-cols-2">
        <FormField id="phone" type="tel" inputMode="tel" label="Phone Number (WhatsApp)" required placeholder="+91 98XXX XXXXX"
          autoComplete="tel" value={values.phone} onChange={update} onBlur={blurValidate} error={errors.phone} />
        <FormField id="email" type="email" label="Official Email" required placeholder="name@company.com"
          autoComplete="email" value={values.email} onChange={update} onBlur={blurValidate} error={errors.email} />
      </div>

      <FormField id="product" as="select" label="Primary Product Interest" required value={values.product}
        onChange={update} onBlur={blurValidate} error={errors.product}
        options={productInterests.map((p) => <option key={p.value} value={p.value}>{p.label}</option>)} />

      <FormField id="message" as="textarea" rows={3} label="Message & Territory Details" value={values.message}
        placeholder="Provide information on your customer base, number of broiler/layer farms serviced, and annual turnover..."
        onChange={update} onBlur={blurValidate} error={errors.message} />

      <div className="flex items-start gap-space-xs text-body-sm text-on-surface-variant">
        <Info aria-hidden="true" size={14} className="mt-0.5 shrink-0 text-primary" />
        <span>This form is checked in your browser only. Nothing is sent until you choose WhatsApp or email below.</span>
      </div>

      {!validated && (
        <div className="flex justify-end pt-space-xs">
          <button type="submit" className="btn-primary w-full sm:w-auto">
            <span>Validate Enquiry</span>
            <Send aria-hidden="true" size={18} className="text-primary-container" />
          </button>
        </div>
      )}

      {validated && (
        <div role="status" className="rounded-sm border border-primary-container bg-surface-container p-space-md text-body-sm text-plum-dark">
          <div className="flex items-start gap-space-xs">
            <CircleCheck aria-hidden="true" size={18} className="mt-0.5 shrink-0 text-primary" />
            <div className="min-w-0">
              <p className="font-semibold">Details look good — but they have not been sent.</p>
              <p className="mt-1">
                Your details were validated in your browser only and have not been transmitted to ZenAvian Healthcare.
                To submit your enquiry, send it using one of the options below.
              </p>
            </div>
          </div>
          <div className="mt-space-md grid gap-space-sm sm:grid-cols-3">
            <Button href={buildWhatsAppUrl(message)} icon={MessageCircle} iconClassName="text-primary-container">Send via WhatsApp</Button>
            <Button href={buildMailto('Distributor & Institutional Enquiry', message)} variant="outline" icon={Mail} iconClassName="text-primary">Send via Email</Button>
            <Button variant="tonal" icon={RotateCcw} iconClassName="text-primary" onClick={reset}>Start Over</Button>
          </div>
        </div>
      )}
    </form>
  )
}
