import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, X } from 'lucide-react'
import { PRODUCTS } from '../../data/products.js'
import { filterProducts } from '../../utils/filters.js'
import { formatNaira } from '../../utils/format.js'

export default function SearchOverlay({ open, onClose }) {
  const [query, setQuery] = useState('')
  const inputRef = useRef(null)

  useEffect(() => {
    if (open) {
      setQuery('')
      setTimeout(() => inputRef.current?.focus(), 50)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [onClose])

  const results = useMemo(() => {
    if (!query.trim()) return []
    return filterProducts(PRODUCTS, { search: query }).slice(0, 8)
  }, [query])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[80] bg-paper animate-fadeUp">
      <div className="container-x pt-6 pb-4 border-b border-line">
        <div className="flex items-center gap-4">
          <Search size={22} className="text-stone shrink-0" />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products, categories..."
            aria-label="Search products"
            className="flex-1 bg-transparent text-xl sm:text-2xl outline-none placeholder:text-line"
          />
          <button onClick={onClose} aria-label="Close search" className="p-1 hover:opacity-60">
            <X size={24} />
          </button>
        </div>
      </div>
      <div className="container-x py-8 overflow-y-auto max-h-[calc(100vh-90px)]">
        {query.trim() && results.length === 0 && (
          <p className="text-stone text-sm">No products found for “{query}”. Try a different term.</p>
        )}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {results.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.slug}`}
              onClick={onClose}
              className="group"
            >
              <div className="aspect-[4/5] bg-haze overflow-hidden mb-3">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-sm font-medium truncate">{product.name}</p>
              <p className="text-xs text-stone">{formatNaira(product.price)}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
