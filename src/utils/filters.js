// Central place for all product filtering/sorting logic so it is never
// duplicated across the Shop page, search overlay, or category pages.

export const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'newest', label: 'New Arrivals' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'name-asc', label: 'Name: A to Z' },
]

export function filterProducts(products, filters) {
  const { search, category, sizes, colors, minPrice, maxPrice, view } = filters
  return products.filter((p) => {
    if (search) {
      const q = search.toLowerCase()
      const match =
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
      if (!match) return false
    }
    if (category && category !== 'all' && p.category !== category) return false
    if (sizes && sizes.length && !p.sizes.some((s) => sizes.includes(s))) return false
    if (colors && colors.length && !p.colors.some((c) => colors.includes(c))) return false
    if (minPrice != null && p.price < minPrice) return false
    if (maxPrice != null && p.price > maxPrice) return false
    if (view === 'featured' && !p.featured) return false
    if (view === 'new' && !p.newArrival) return false
    return true
  })
}

export function sortProducts(products, sort) {
  const list = [...products]
  switch (sort) {
    case 'newest':
      return list.sort((a, b) => Number(b.newArrival) - Number(a.newArrival))
    case 'price-asc':
      return list.sort((a, b) => a.price - b.price)
    case 'price-desc':
      return list.sort((a, b) => b.price - a.price)
    case 'name-asc':
      return list.sort((a, b) => a.name.localeCompare(b.name))
    case 'featured':
    default:
      return list.sort((a, b) => Number(b.featured) - Number(a.featured))
  }
}

export function getAllSizes(products) {
  return [...new Set(products.flatMap((p) => p.sizes))]
}

export function getAllColors(products) {
  return [...new Set(products.flatMap((p) => p.colors))]
}
