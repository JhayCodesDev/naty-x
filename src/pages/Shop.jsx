import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal } from 'lucide-react'
import { PRODUCTS } from '../data/products.js'
import { filterProducts, sortProducts, getAllSizes, getAllColors, SORT_OPTIONS } from '../utils/filters.js'
import ProductGrid from '../components/products/ProductGrid.jsx'
import ProductFilters from '../components/products/ProductFilters.jsx'

export default function Shop() {
  const [searchParams] = useSearchParams()
  const [filters, setFilters] = useState({
    search: searchParams.get('search') || '',
    category: searchParams.get('category') || 'all',
    view: searchParams.get('view') || null,
    sizes: [],
    colors: [],
    minPrice: null,
    maxPrice: null,
  })
  const [sort, setSort] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  useEffect(() => {
    document.title = 'Shop All — NATY X'
  }, [])

  const allSizes = useMemo(() => getAllSizes(PRODUCTS), [])
  const allColors = useMemo(() => getAllColors(PRODUCTS), [])

  const results = useMemo(() => {
    const filtered = filterProducts(PRODUCTS, filters)
    return sortProducts(filtered, sort)
  }, [filters, sort])

  return (
    <main className="container-x py-10 sm:py-14">
      <div className="mb-8">
        <p className="eyebrow mb-2">Shop All</p>
        <h1 className="text-3xl sm:text-5xl">The Collection</h1>
      </div>

      <div className="flex items-center justify-between gap-4 mb-8 pb-4 border-b border-line">
        <button
          onClick={() => setMobileFiltersOpen(true)}
          className="lg:hidden flex items-center gap-2 text-xs uppercase tracking-widest2 font-semibold"
        >
          <SlidersHorizontal size={16} /> Filters
        </button>
        <p className="text-xs text-stone hidden lg:block">{results.length} products</p>
        <label className="flex items-center gap-2 text-xs uppercase tracking-widest2 ml-auto">
          Sort
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border border-line px-2 py-1.5 bg-paper"
          >
            {SORT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="flex gap-10">
        <ProductFilters
          filters={filters}
          setFilters={setFilters}
          allSizes={allSizes}
          allColors={allColors}
          mobileOpen={mobileFiltersOpen}
          onCloseMobile={() => setMobileFiltersOpen(false)}
        />
        <div className="flex-1">
          <ProductGrid
            products={results}
            emptyMessage="Try adjusting your filters or search term."
          />
        </div>
      </div>
    </main>
  )
}
