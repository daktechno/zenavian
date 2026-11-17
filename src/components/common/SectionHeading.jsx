/**
 * Section heading block. `align="split"` places the description beside the title on md+.
 * `data-reveal` makes GSAP reveal it on scroll.
 */
export default function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
}) {
  const center = align === 'center'
  const split = align === 'split'
  return (
    <div
      data-reveal
      className={`${
        split
          ? 'flex flex-col justify-between gap-space-md md:flex-row md:items-end'
          : center
            ? 'mx-auto max-w-3xl text-center'
            : 'max-w-3xl'
      } mb-space-xl ${className}`}
    >
      <div className="min-w-0">
        {eyebrow && (
          <div className="mb-space-xs text-label-sm font-semibold uppercase tracking-wider text-primary">
            {eyebrow}
          </div>
        )}
        <h2 id={id} className="text-headline-lg text-on-surface [text-wrap:balance]">
          {title}
        </h2>
      </div>
      {description && (
        <p
          className={`text-on-surface-variant ${
            split ? 'max-w-md text-body-md' : 'mt-space-sm text-body-lg'
          } ${center ? 'leading-relaxed' : ''}`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
