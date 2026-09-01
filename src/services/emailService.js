// MOCK email service — frontend demo only. No real email is ever sent.

export async function sendNewsletterSignup(email) {
  await new Promise((resolve) => setTimeout(resolve, 700))
  console.info(`[mock email] Newsletter signup simulated for ${email}`)
  return { success: true }
}

export async function sendContactMessage({ name, email, message }) {
  await new Promise((resolve) => setTimeout(resolve, 700))
  console.info(`[mock email] Contact message simulated from ${name} <${email}>: ${message}`)
  return { success: true }
}

export async function sendOrderConfirmationEmail(order) {
  await new Promise((resolve) => setTimeout(resolve, 300))
  console.info(`[mock email] Order confirmation simulated for ${order.orderNumber}`)
  return { success: true }
}
