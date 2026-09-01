import { Link } from 'react-router-dom'

export default function AboutPreview() {
  return (
    <section className="container-x py-16 sm:py-24 grid lg:grid-cols-2 gap-10 items-center">
      <div className="aspect-[4/3] overflow-hidden bg-haze order-2 lg:order-1">
        <img
          src="https://picsum.photos/seed/nxt-about-studio/900/700"
          alt="NATY X design studio in Lagos"
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="order-1 lg:order-2">
        <p className="eyebrow mb-2">Our Story</p>
        <h2 className="text-2xl sm:text-4xl mb-6">Built in Lagos, Worn Everywhere</h2>
        <p className="text-stone leading-relaxed mb-8 max-w-lg">
          NATY X was created with the vision of building a fashion brand that represents confidence,
          originality, and everyday luxury. Our mission is to provide stylish streetwear pieces that
          help people express themselves through fashion. Every design is made to combine comfort,
          quality, and a strong modern aesthetic.
        </p>
        <Link to="/about" className="btn-outline">
          Our Story
        </Link>
      </div>
    </section>
  )
}
