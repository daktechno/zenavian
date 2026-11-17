export default function QualityPillarCard({ index, title, description }) {
  return (
    <article
      data-reveal
      className="rounded-xl border border-outline-variant bg-surface-container-lowest p-space-md shadow-sm transition-all hover:border-primary-container sm:p-space-lg"
    >
      <div className="mb-space-sm flex size-10 items-center justify-center rounded-lg border border-primary-container bg-surface-container text-title font-bold text-plum-dark">
        {String(index + 1).padStart(2, '0')}
      </div>
      <h3 className="mb-space-xs text-headline-sm text-on-surface">{title}</h3>
      <p className="text-body-md text-on-surface-variant">{description}</p>
    </article>
  )
}
