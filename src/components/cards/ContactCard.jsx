export default function ContactCard({ icon: Icon, label, children }) {
  return (
    <div className="flex items-start gap-space-md rounded-lg border border-outline-variant bg-surface-container-lowest p-space-md shadow-sm">
      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-primary-container/40 bg-surface-container text-primary">
        <Icon aria-hidden="true" size={20} />
      </div>
      <div className="min-w-0">
        <div className="text-label-sm text-on-surface-variant">{label}</div>
        {children}
      </div>
    </div>
  )
}
