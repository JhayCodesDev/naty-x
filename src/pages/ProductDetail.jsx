import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Heart, Minus, Plus, Truck, RotateCcw } from 'lucide-react'
import { getProductBySlug, getRelatedProducts } from '../data/products.js'
import { formatNaira } from '../utils/format.js'
import { useCart } from '../context/CartContext.jsx'
import { useWishlist } from '../context/WishlistContext.jsx'
import ProductGallery from '../components/products/ProductGallery.jsx'
import ProductGrid from '../components/products/ProductGrid.jsx'
import SizeGuide from '../components/products/SizeGuide.jsx'
import { ProductInquiryButton } from '../components/layout/WhatsAppButton.jsx'
import NotFound from './NotFound.jsx'

export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = getProductBySlug(id)

  const { addToCart } = useCart()
  const { isWishlisted, toggleWishlist } = useWishlist()

  const [size, setSize] = useState(product?.sizes[0])
  const [color, setColor] = useState(product?.colors[0])
  const [quantity, setQuantity] = useState(1)
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false)
  const [added, setAdded] = useState(false)

  useEffect(() => {
    if (product) document.title = `${product.name} — NATY X`
  }, [product])

  if (!product) return <NotFound />

  const wishlisted = isWishlisted(product.id)
  const outOfStock = product.stock === 0

  function handleAddToCart() {
    addToCart(product, { size, color, quantity })
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  function handleBuyNow() {
    addToCart(product, { size, color, quantity })
    navigate('/checkout')
  }

  return (
    <main className="container-x py-8 sm:py-14">
      <nav aria-label="Breadcrumb" className="text-xs text-stone mb-6">
        <Link to="/shop" className="link-underline">Shop</Link> / {product.name}
      </nav>

      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
        <ProductGallery images={product.images} name={product.name} />

        <div className="max-w-lg">
          <h1 className="text-2xl sm:text-3xl mb-2">{product.name}</h1>
          <p className="text-xl font-semibold mb-1">{formatNaira(product.price)}</p>
          <p className="text-xs text-stone mb-6">SKU: {product.sku}</p>

          <p className="text-sm text-stone leading-relaxed mb-6">{product.description}</p>

          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <p className="eyebrow">Size</p>
              <button
                onClick={() => setSizeGuideOpen(true)}
                className="text-xs underline underline-offset-4 text-stone hover:text-ink"
              >
                Size Guide
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  aria-pressed={size === s}
                  className={`px-4 py-2 text-xs border ${
                    size === s ? 'border-ink bg-ink text-paper' : 'border-line text-ink'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <p className="eyebrow mb-2">Color</p>
            <div className="flex flex-wrap gap-2">
              {product.colors.map((c) => (
                <button
                  key={c}
                  onClick={() => setColor(c)}
                  aria-pressed={color === c}
                  className={`px-4 py-2 text-xs border ${
                    color === c ? 'border-ink bg-ink text-paper' : 'border-line text-ink'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <p className="eyebrow mb-2">Quantity</p>
            <div className="inline-flex items-center border border-line">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                aria-label="Decrease quantity"
                className="p-3 hover:bg-haze"
              >
                <Minus size={14} />
              </button>
              <span className="w-10 text-center text-sm">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                aria-label="Increase quantity"
                className="p-3 hover:bg-haze"
              >
                <Plus size={14} />
              </button>
            </div>
          </div>

          <p className="text-xs mb-6">
            {outOfStock ? (
              <span className="text-red-600 font-semibold">Out of stock</span>
            ) : (
              <span className="text-stone">In stock — {product.stock} available</span>
            )}
          </p>

          <div className="flex gap-3 mb-3">
            <button onClick={handleAddToCart} disabled={outOfStock} className="btn-primary flex-1">
              {added ? 'Added ✓' : outOfStock ? 'Sold Out' : 'Add to Cart'}
            </button>
            <button
              onClick={() => toggleWishlist(product.id)}
              aria-label={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
              aria-pressed={wishlisted}
              className="btn-outline px-4"
            >
              <Heart size={18} className={wishlisted ? 'fill-ink' : ''} />
            </button>
          </div>
          <button onClick={handleBuyNow} disabled={outOfStock} className="btn-outline w-full mb-6">
            Buy Now
          </button>

          <ProductInquiryButton productName={product.name} className="w-full mb-8" />

          <div className="border-t border-line pt-6 space-y-4">
            <div className="flex gap-3 text-sm">
              <Truck size={18} className="shrink-0 text-stone" />
              <p className="text-stone">Nationwide delivery in 24–48 hours processing via trusted logistics partners.</p>
            </div>
            <div className="flex gap-3 text-sm">
              <RotateCcw size={18} className="shrink-0 text-stone" />
              <p className="text-stone">Free exchange within 7 days for wrong sizes or damaged items.</p>
            </div>
          </div>

          {product.features?.length > 0 && (
            <div className="border-t border-line pt-6 mt-6">
              <p className="eyebrow mb-3">Features</p>
              <ul className="text-sm text-stone space-y-1.5 list-disc pl-4">
                {product.features.map((f) => <li key={f}>{f}</li>)}
              </ul>
            </div>
          )}
        </div>
      </div>

      <RelatedProducts product={product} />

      <SizeGuide open={sizeGuideOpen} onClose={() => setSizeGuideOpen(false)} />
    </main>
  )
}

function RelatedProducts({ product }) {
  const related = getRelatedProducts(product)
  if (!related.length) return null
  return (
    <section className="mt-20 sm:mt-28">
      <p className="eyebrow mb-2">You May Also Like</p>
      <h2 className="text-2xl sm:text-3xl mb-8">Complete the Look</h2>
      <ProductGrid products={related} />
    </section>
  )
}
