export default function Marquee({ text = 'WEAR CONFIDENCE' }) {
  const repeated = Array.from({ length: 8 }, () => text)
  return (
    <div className="overflow-hidden bg-ink text-paper py-4 select-none" aria-hidden="true">
      <div className="flex whitespace-nowrap animate-marquee w-max">
        {[...repeated, ...repeated].map((t, i) => (
          <span key={i} className="font-display text-sm sm:text-base tracking-widest2 px-6">
            {t} <span className="inline-block mx-6">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
