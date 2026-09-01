// MOCK order service — frontend demo only.
// Orders are generated and stored in localStorage so the order-confirmation
// and track-order pages have something real to read.

const ORDERS_KEY = 'natyx_orders'

function readOrders() {
  try {
    return JSON.parse(localStorage.getItem(ORDERS_KEY)) || {}
  } catch {
    return {}
  }
}

function writeOrders(orders) {
  localStorage.setItem(ORDERS_KEY, JSON.stringify(orders))
}

export function generateOrderNumber() {
  const year = new Date().getFullYear()
  const rand = Math.floor(1000 + Math.random() * 9000)
  return `NXT-${year}-${rand}`
}

export async function createOrder({ items, customer, payment, subtotal, shipping, total }) {
  await new Promise((resolve) => setTimeout(resolve, 300))
  const orderNumber = generateOrderNumber()
  const order = {
    orderNumber,
    items,
    customer,
    payment,
    subtotal,
    shipping,
    total,
    status: 'Processing',
    createdAt: new Date().toISOString(),
    estimatedDelivery: estimateDelivery(),
  }
  const orders = readOrders()
  orders[orderNumber] = order
  writeOrders(orders)
  return order
}

export async function getOrder(orderNumber) {
  await new Promise((resolve) => setTimeout(resolve, 300))
  const orders = readOrders()
  return orders[orderNumber] || null
}

export function estimateDelivery() {
  const date = new Date()
  date.setDate(date.getDate() + 4)
  return date.toISOString()
}

// A permanent demo order so the /track-order page always has a working
// example, even before a real order has ever been placed.
export const DEMO_ORDER = {
  orderNumber: 'NXT-2026-1048',
  status: 'Shipped',
  estimatedDelivery: estimateDelivery(),
}
