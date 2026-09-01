import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Check } from 'lucide-react'
import Input from '../components/ui/Input.jsx'
import { getOrder, DEMO_ORDER } from '../services/orderService.js'
import { formatDate } from '../utils/format.js'

const STEPS = ['Order Placed', 'Payment Confirmed', 'Processing', 'Shipped', 'Delivered']

function stepIndex(status) {
  const idx = STEPS.indexOf(status)
  return idx === -1 ? 0 : idx
}

export default function TrackOrder() {
  const [searchParams] = useSearchParams()
  const [orderId, setOrderId] = useState(searchParams.get('order') || '')
  const [contact, setContact] = useState('')
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    document.title = 'Track Order — NATY X'
  }, [])

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setResult(null)
    if (!orderId.trim()) {
      setError('Please enter your order ID.')
      return
    }
    setLoading(true)
    if (orderId.trim().toUpperCase() === DEMO_ORDER.orderNumber) {
      setResult(DEMO_ORDER)
      setLoading(false)
      return
    }
    const order = await getOrder(orderId.trim())
    setLoading(false)
    if (!order) {
      setError('We couldn\'t find an order with that ID. Try the demo order NXT-2026-1048, or double-check your details.')
      return
    }
    setResult(order)
  }

  return (
    <main className="container-x py-10 sm:py-16 max-w-2xl">
      <p className="eyebrow mb-2">Order Status</p>
      <h1 className="text-3xl sm:text-5xl mb-10">Track Your Order</h1>

      <form onSubmit={handleSubmit} className="grid sm:grid-cols-[1fr_1fr_auto] gap-3 items-end mb-12">
        <Input
          id="order-id"
          label="Order ID"
          placeholder="e.g. NXT-2026-1048"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
        />
        <Input
          id="contact"
          label="Email or Phone"
          placeholder="Used at checkout"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
        <button type="submit" disabled={loading} className="btn-primary h-fit">
          {loading ? 'Searching…' : 'Track'}
        </button>
      </form>

      {error && <p role="alert" className="text-sm text-red-600 bg-red-50 px-4 py-3 mb-8">{error}</p>}

      {result && (
        <div>
          <p className="text-sm text-stone mb-1">Order #{result.orderNumber}</p>
          <p className="text-lg font-semibold mb-8">Status: {result.status}</p>

          <ol className="space-y-0">
            {STEPS.map((step, i) => {
              const currentIndex = stepIndex(result.status)
              const done = i <= currentIndex
              return (
                <li key={step} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-xs ${
                        done ? 'bg-ink border-ink text-paper' : 'border-line text-stone'
                      }`}
                    >
                      {done ? <Check size={14} /> : i + 1}
                    </span>
                    {i < STEPS.length - 1 && (
                      <span className={`w-px flex-1 my-1 ${i < currentIndex ? 'bg-ink' : 'bg-line'}`} style={{ minHeight: '2.5rem' }} />
                    )}
                  </div>
                  <div className="pb-8">
                    <p className={`text-sm font-medium ${done ? 'text-ink' : 'text-stone'}`}>{step}</p>
                  </div>
                </li>
              )
            })}
          </ol>

          {result.estimatedDelivery && (
            <p className="text-sm text-stone">Estimated delivery: {formatDate(result.estimatedDelivery)}</p>
          )}
        </div>
      )}

      {!result && !error && (
        <p className="text-xs text-stone">
          Demo tip: try order ID <span className="font-semibold">{DEMO_ORDER.orderNumber}</span> to see a sample tracking timeline.
        </p>
      )}
    </main>
  )
}
