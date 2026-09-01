export const formatNaira = (amount) =>
  `₦${Number(amount).toLocaleString('en-NG', { maximumFractionDigits: 0 })}`

export const formatDate = (date) =>
  new Date(date).toLocaleDateString('en-NG', { year: 'numeric', month: 'long', day: 'numeric' })

export const cartLineKey = (id, size, color) => `${id}__${size}__${color}`
