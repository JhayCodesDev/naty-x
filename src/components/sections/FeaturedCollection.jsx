import { Link } from 'react-router-dom'
import { PRODUCTS } from '../../data/products.js'
import ProductGrid from '../products/ProductGrid.jsx'

export default function FeaturedCollection() {
  const featured = PRODUCTS.filter((p) => p.featured).slice(0, 8)

  return (
    <section className="container-x py-16 sm:py-24">
      <div className="flex items-end justify-between mb-10">
        <div>
          <p className="eyebrow mb-2">Selected Pieces</p>
          <h2 className="text-2xl sm:text-4xl">Featured Collection</h2>
        </div>
        <Link to="/shop" className="hidden sm:block text-xs uppercase tracking-widest2 link-underline shrink-0">
          View All
        </Link>
      </div>
      <ProductGrid products={featured} />
      <Link to="/shop" className="btn-outline w-full mt-8 sm:hidden">
        View All
      </Link>
    </section>
  )
}
