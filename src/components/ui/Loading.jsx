export default function Loading({ label = 'Loading' }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-24" role="status" aria-live="polite">
      <div className="w-8 h-8 border-2 border-line border-t-ink rounded-full animate-spin" />
      <span className="eyebrow">{label}</span>
    </div>
  )
}
