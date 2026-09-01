// Product data currently comes from the static file at src/data/products.js.

import { PRODUCTS, getProductBySlug, getProductById, getRelatedProducts } from '../data/products.js'

export async function fetchProducts() {
  return PRODUCTS
}

export async function fetchProductBySlug(slug) {
  return getProductBySlug(slug)
}

export async function fetchProductById(id) {
  return getProductById(id)
}

export async function fetchRelatedProducts(product, count) {
  return getRelatedProducts(product, count)
}
