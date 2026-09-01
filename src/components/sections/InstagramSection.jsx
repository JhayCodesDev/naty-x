const IMAGES = Array.from({ length: 6 }, (_, i) => `https://picsum.photos/seed/nxt-insta-${i}/500/500`)

export default function InstagramSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container-x text-center mb-10">
        <p className="eyebrow mb-2">@natyx</p>
        <h2 className="text-2xl sm:text-4xl">Follow @natyx</h2>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-6">
        {IMAGES.map((src, i) => (
          <a
            key={i}
            href="https://instagram.com/natyx"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-square overflow-hidden"
            aria-label="View on Instagram"
          >
            <img
              src={src}
              alt=""
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 group-hover:opacity-80 transition-all duration-500"
            />
          </a>
        ))}
      </div>
    </section>
  )
}
