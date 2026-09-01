// MOCK payment service — frontend demo only.
// No real payment processing happens here.

export async function charge({ method, amount, customer }) {
  // Simulate network latency for a realistic demo experience.
  await new Promise((resolve) => setTimeout(resolve, 1200))

  // Simulate a payment failure roughly 1 in 20 times so the failed-checkout
  // UI path is reachable in the demo without needing a real gateway.
  const willFail = Math.random() < 0.05

  if (willFail) {
    return {
      success: false,
      error: 'Payment could not be confirmed. Please try again or choose another payment method.',
    }
  }

  return {
    success: true,
    reference: `NXTPAY-${Date.now().toString().slice(-8)}`,
    method,
    amount,
    customer,
  }
}
