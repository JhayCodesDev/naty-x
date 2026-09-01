import { Link } from 'react-router-dom'
import { CATEGORIES } from '../../data/products.js'

export default function ShopByCategory() {
  return (
    <section className="bg-haze py-16 sm:py-24">
      <div className="container-x">
        <p className="eyebrow mb-2">Explore</p>
        <h2 className="text-2xl sm:text-4xl mb-10">Shop By Category</h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {CATEGORIES.map((cat) => (
            <Link key={cat.id} to={`/shop?category=${cat.id}`} className="group relative aspect-[3/4] overflow-hidden bg-ink">
              <img
                src={cat.image}
                alt={cat.name}
                loading="lazy"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-500 group-hover:scale-105"
              />
              <span className="absolute bottom-4 left-4 text-paper font-display text-sm sm:text-lg tracking-wide">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
