import { useEffect } from 'react'
import Marquee from '../components/sections/Marquee.jsx'

export default function About() {
  useEffect(() => {
    document.title = 'About — NATY X'
  }, [])

  return (
    <main>
      <section className="relative h-[50vh] min-h-[360px] overflow-hidden bg-ink">
        <img
          src="https://picsum.photos/seed/nxt-about-hero/1600/1000"
          alt="NATY X streetwear editorial"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative h-full container-x flex flex-col justify-end pb-12 text-paper">
          <p className="eyebrow text-paper/70 mb-2">Our Story</p>
          <h1 className="font-display text-4xl sm:text-6xl">ABOUT NATY X</h1>
        </div>
      </section>

      <section className="container-x py-16 sm:py-24 grid lg:grid-cols-[1fr_1.2fr] gap-12">
        <div>
          <p className="eyebrow mb-4">Founded in Lagos</p>
          <h2 className="text-2xl sm:text-3xl leading-tight">
            Confidence, originality, and everyday luxury.
          </h2>
        </div>
        <div className="space-y-6 text-stone leading-relaxed text-base">
          <p>
            NATY X was created with the vision of building a fashion brand that represents
            confidence, originality, and everyday luxury. Our mission is to provide stylish
            streetwear pieces that help people express themselves through fashion. Every design is
            made to combine comfort, quality, and a strong modern aesthetic.
          </p>
          <p>
            From clean polos to bold oversized silhouettes, every NATY X piece is designed in Lagos
            for a generation that dresses with intention. We believe getting dressed should feel
            effortless — clothing built to move with your day, hold its shape, and carry your own
            sense of style without shouting for attention.
          </p>
        </div>
      </section>

      <Marquee text="WEAR CONFIDENCE" />

      <section className="container-x py-16 sm:py-24 grid sm:grid-cols-3 gap-8 text-center">
        {[
          { title: 'Quality First', copy: 'Premium fabrics and construction built to last beyond a season.' },
          { title: 'Made for Movement', copy: 'Cuts and fits designed for everyday Lagos life, not just the runway.' },
          { title: 'Confidence in Every Fit', copy: 'Streetwear that lets your personality lead, not the label.' },
        ].map((item) => (
          <div key={item.title} className="px-4">
            <p className="font-display text-lg mb-3">{item.title}</p>
            <p className="text-sm text-stone leading-relaxed">{item.copy}</p>
          </div>
        ))}
      </section>
    </main>
  )
}
