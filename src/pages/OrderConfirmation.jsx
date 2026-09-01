import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'
import { getOrder } from '../services/orderService.js'
import { formatNaira, formatDate } from '../utils/format.js'
import Loading from '../components/ui/Loading.jsx'
import { whatsappUrl } from '../components/layout/WhatsAppButton.jsx'

export default function OrderConfirmation() {
  const [searchParams] = useSearchParams()
  const orderNumber = searchParams.get('order')
  const [order, setOrder] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    document.title = 'Order Confirmed — NATY X'
    let active = true
    if (orderNumber) {
      getOrder(orderNumber).then((result) => {
        if (active) {
          setOrder(result)
          setLoading(false)
        }
      })
    } else {
      setLoading(false)
    }
    return () => { active = false }
  }, [orderNumber])

  if (loading) return <Loading label="Confirming your order" />

  if (!order) {
    return (
      <main className="container-x py-24 text-center">
        <h1 className="font-display text-2xl mb-4">Order Not Found</h1>
        <p className="text-stone text-sm mb-6">We couldn't find that order. It may have already been fulfilled.</p>
        <Link to="/shop" className="btn-primary">Continue Shopping</Link>
      </main>
    )
  }

  return (
    <main className="container-x py-14 sm:py-20 max-w-2xl">
      <div className="text-center mb-10">
        <CheckCircle2 size={48} className="mx-auto mb-4 text-ink" />
        <p className="eyebrow mb-2">Thank You</p>
        <h1 className="text-3xl sm:text-4xl mb-2">Order Confirmed</h1>
        <p className="text-stone text-sm">Order #{order.orderNumber}</p>
      </div>

      <div className="border border-line p-6 sm:p-8 mb-8">
        <div className="grid sm:grid-cols-2 gap-6 mb-6 text-sm">
          <div>
            <p className="eyebrow mb-1">Customer</p>
            <p>{order.customer?.fullName}</p>
          </div>
          <div>
            <p className="eyebrow mb-1">Payment Method</p>
            <p className="capitalize">{order.payment?.method?.replace('-', ' ')}</p>
          </div>
          <div>
            <p className="eyebrow mb-1">Delivery Address</p>
            <p>{order.customer?.address}, {order.customer?.city}, {order.customer?.state}</p>
          </div>
          <div>
            <p className="eyebrow mb-1">Estimated Delivery</p>
            <p>{formatDate(order.estimatedDelivery)}</p>
          </div>
        </div>

        <div className="border-t border-line pt-6 space-y-3 mb-6">
          {order.items?.map((item) => (
            <div key={item.key} className="flex justify-between text-sm">
              <span>{item.name} ({item.size}, {item.color}) × {item.quantity}</span>
              <span>{formatNaira(item.price * item.quantity)}</span>
            </div>
          ))}
        </div>

        <div className="border-t border-line pt-4 flex justify-between font-semibold">
          <span>Total</span>
          <span>{formatNaira(order.total)}</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <Link to="/shop" className="btn-outline flex-1 text-center">Continue Shopping</Link>
        <Link to={`/track-order?order=${order.orderNumber}`} className="btn-outline flex-1 text-center">
          Track Order
        </Link>
        <a
          href={whatsappUrl(`Hello NATY X, I'd like support with my order ${order.orderNumber}.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary flex-1 text-center"
        >
          WhatsApp Support
        </a>
      </div>
    </main>
  )
}
