import { Link } from 'react-router-dom'
const VARIANTS = {
  primary: 'btn-primary',
  tonal: 'btn-tonal',
  outline: 'btn-outline',
}

/**
 * Polymorphic button/link. Renders <a> when `href` is given (external links open in a
 * new tab with rel="noopener noreferrer"), otherwise <button>.
 */
export default function Button({
  href,
  external = false,
  variant = 'primary',
  icon: Icon,
  iconPosition = 'left',
  iconClassName = '',
  className = '',
  children,
  ...rest
}) {
  const classes = `${VARIANTS[variant]} min-w-0 text-center ${className}`
  const iconEl = Icon ? (
    <Icon aria-hidden="true" size={16} strokeWidth={2} className={`shrink-0 ${iconClassName}`} />
  ) : null
  const content = (
    <>
      {iconPosition === 'left' && iconEl}
      <span>{children}</span>
      {iconPosition === 'right' && iconEl}
    </>
  )

  if (href && href.startsWith('/') && !href.startsWith('/documents/')) {
    return (
      <Link to={href} className={classes} {...rest}>
        {content}
      </Link>
    )
  }
  if (href) {
    const isExternal = external || /^https?:\/\//.test(href)
    return (
      <a
        href={href}
        className={classes}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...rest}
      >
        {content}
      </a>
    )
  }
  return (
    <button type="button" className={classes} {...rest}>
      {content}
    </button>
  )
}
