import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative h-[92vh] min-h-[560px] w-full overflow-hidden bg-ink">
      <img
        src="/product-images/NXT-hero-banner.jpg"
        alt="NATY X streetwear campaign — model wearing the current collection"
        className="absolute inset-0 w-full h-full object-cover object-right opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/30" />

      <div className="relative h-full container-x flex flex-col justify-end pb-16 sm:pb-20 text-paper">
        <p className="eyebrow text-paper/70 mb-3 animate-fadeUp">Lagos, Nigeria</p>
        <h1 className="font-display text-[15vw] sm:text-7xl lg:text-8xl leading-[0.9] mb-4 animate-fadeUp [animation-delay:100ms]">
          NATY X
        </h1>
        <p className="font-display text-lg sm:text-2xl tracking-widest2 mb-6 animate-fadeUp [animation-delay:150ms]">
          WEAR CONFIDENCE
        </p>
        <p className="max-w-md text-sm sm:text-base text-paper/80 mb-8 animate-fadeUp [animation-delay:200ms]">
          Discover premium streetwear designed for the new generation. From clean polos to bold
          oversized pieces, NATY X brings together comfort, quality, and modern style in every outfit.
        </p>
        <div className="flex flex-wrap gap-3 animate-fadeUp [animation-delay:250ms]">
          <Link to="/shop" className="btn-primary bg-paper text-ink hover:bg-paper/90">
            Shop the Latest Collection
          </Link>
          <Link to="/about" className="btn-outline border-paper text-paper hover:bg-paper hover:text-ink">
            Explore NATY X
          </Link>
        </div>
      </div>
    </section>
  )
}
