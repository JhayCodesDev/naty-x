import { X } from 'lucide-react'
import { CATEGORIES } from '../../data/products.js'
import { formatNaira } from '../../utils/format.js'

const PRICE_RANGES = [
  { label: 'All Prices', min: null, max: null },
  { label: 'Under ₦20,000', min: null, max: 20000 },
  { label: '₦20,000 – ₦35,000', min: 20000, max: 35000 },
  { label: 'Over ₦35,000', min: 35000, max: null },
]

function FilterBody({ filters, setFilters, allSizes, allColors }) {
  function toggleArrayValue(key, value) {
    setFilters((prev) => {
      const current = prev[key] || []
      const next = current.includes(value) ? current.filter((v) => v !== value) : [...current, value]
      return { ...prev, [key]: next }
    })
  }

  return (
    <div className="space-y-8">
      <div>
        <p className="eyebrow mb-3">Category</p>
        <div className="space-y-2">
          <button
            onClick={() => setFilters((p) => ({ ...p, category: 'all' }))}
            className={`block text-sm ${(!filters.category || filters.category === 'all') ? 'font-semibold text-ink' : 'text-stone'}`}
          >
            All
          </button>
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              onClick={() => setFilters((p) => ({ ...p, category: c.id }))}
              className={`block text-sm ${filters.category === c.id ? 'font-semibold text-ink' : 'text-stone'}`}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="eyebrow mb-3">Size</p>
        <div className="flex flex-wrap gap-2">
          {allSizes.map((size) => (
            <button
              key={size}
              onClick={() => toggleArrayValue('sizes', size)}
              aria-pressed={filters.sizes?.includes(size)}
              className={`px-3 py-1.5 text-xs border ${
                filters.sizes?.includes(size) ? 'border-ink bg-ink text-paper' : 'border-line text-stone'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="eyebrow mb-3">Color</p>
        <div className="flex flex-wrap gap-2">
          {allColors.map((color) => (
            <button
              key={color}
              onClick={() => toggleArrayValue('colors', color)}
              aria-pressed={filters.colors?.includes(color)}
              className={`px-3 py-1.5 text-xs border ${
                filters.colors?.includes(color) ? 'border-ink bg-ink text-paper' : 'border-line text-stone'
              }`}
            >
              {color}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="eyebrow mb-3">Price</p>
        <div className="space-y-2">
          {PRICE_RANGES.map((range) => (
            <button
              key={range.label}
              onClick={() => setFilters((p) => ({ ...p, minPrice: range.min, maxPrice: range.max }))}
              className={`block text-sm ${
                filters.minPrice === range.min && filters.maxPrice === range.max ? 'font-semibold text-ink' : 'text-stone'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={() => setFilters({ search: filters.search, view: filters.view })}
        className="text-xs uppercase tracking-widest2 underline underline-offset-4"
      >
        Clear filters
      </button>
    </div>
  )
}

export default function ProductFilters({ filters, setFilters, allSizes, allColors, mobileOpen, onCloseMobile }) {
  return (
    <>
      <aside className="hidden lg:block w-56 shrink-0">
        <FilterBody filters={filters} setFilters={setFilters} allSizes={allSizes} allColors={allColors} />
      </aside>

      {mobileOpen && (
        <div className="fixed inset-0 z-[70] lg:hidden">
          <button aria-label="Close filters" onClick={onCloseMobile} className="absolute inset-0 bg-black/50" />
          <div className="absolute left-0 top-0 h-full w-[85%] max-w-xs bg-paper overflow-y-auto animate-slideIn p-6">
            <div className="flex items-center justify-between mb-6">
              <p className="font-display text-lg">Filters</p>
              <button onClick={onCloseMobile} aria-label="Close filters">
                <X size={22} />
              </button>
            </div>
            <FilterBody filters={filters} setFilters={setFilters} allSizes={allSizes} allColors={allColors} />
            <button onClick={onCloseMobile} className="btn-primary w-full mt-8">
              Show Results
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export { PRICE_RANGES, formatNaira }
