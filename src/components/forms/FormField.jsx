const controlBase =
  'w-full rounded-sm border bg-surface-container-lowest px-3 text-body-md text-on-surface shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-container'

/** Label + control + error message wrapper. Renders input, select or textarea. */
export default function FormField({ id, label, required, error, as = 'input', options, className = '', ...props }) {
  const errorId = `${id}-error`
  const common = {
    id,
    name: id,
    'aria-invalid': error ? 'true' : undefined,
    'aria-describedby': error ? errorId : undefined,
    'aria-required': required ? 'true' : undefined,
    className: `${controlBase} ${error ? 'border-error' : 'border-outline-variant'} ${className}`,
    ...props,
  }

  let control
  if (as === 'select') {
    control = (
      <select {...common} className={`${common.className} select-chevron h-11`}>
        {options}
      </select>
    )
  } else if (as === 'textarea') {
    control = <textarea {...common} className={`${common.className} py-2.5`} />
  } else {
    control = <input {...common} className={`${common.className} h-11`} />
  }

  return (
    <div className="min-w-0">
      <label htmlFor={id} className="mb-1 block text-label-sm text-on-surface">
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>
      {control}
      {error && (
        <p id={errorId} className="mt-1 text-body-sm font-medium text-error">
          {error}
        </p>
      )}
    </div>
  )
}
