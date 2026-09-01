import { Link } from 'react-router-dom'
import { Heart, Plus } from 'lucide-react'
import { formatNaira } from '../../utils/format.js'
import { useWishlist } from '../../context/WishlistContext.jsx'
import { useCart } from '../../context/CartContext.jsx'

export default function ProductCard({ product }) {
  const { isWishlisted, toggleWishlist } = useWishlist()
  const { addToCart } = useCart()
  const wishlisted = isWishlisted(product.id)

  function handleQuickAdd(e) {
    e.preventDefault()
    addToCart(product, { size: product.sizes[0], color: product.colors[0], quantity: 1 })
  }

  function handleWishlist(e) {
    e.preventDefault()
    toggleWishlist(product.id)
  }

  return (
    <Link to={`/product/${product.slug}`} className="group block">
      <div className="relative aspect-[4/5] bg-haze overflow-hidden mb-3">
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
        )}

        {(product.newArrival || product.stock === 0) && (
          <span className="absolute top-3 left-3 bg-ink text-paper text-[10px] uppercase tracking-widest2 px-2.5 py-1">
            {product.stock === 0 ? 'Sold Out' : 'New'}
          </span>
        )}

        <button
          onClick={handleWishlist}
          aria-label={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          aria-pressed={wishlisted}
          className="absolute top-3 right-3 p-2 bg-paper/90 hover:bg-paper transition-colors"
        >
          <Heart size={16} className={wishlisted ? 'fill-ink text-ink' : 'text-ink'} />
        </button>

        <button
          onClick={handleQuickAdd}
          disabled={product.stock === 0}
          className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-ink text-paper text-xs uppercase tracking-widest2 font-semibold py-3 flex items-center justify-center gap-2 disabled:bg-stone"
        >
          <Plus size={14} /> {product.stock === 0 ? 'Sold Out' : 'Quick Add'}
        </button>
      </div>

      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-sm font-medium">{product.name}</p>
          <p className="text-xs text-stone mt-0.5">{product.colors.join(' / ')}</p>
        </div>
        <p className="text-sm font-semibold shrink-0">{formatNaira(product.price)}</p>
      </div>
    </Link>
  )
}
