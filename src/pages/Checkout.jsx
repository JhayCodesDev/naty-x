import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import CheckoutForm from '../components/checkout/CheckoutForm.jsx'
import OrderSummary from '../components/checkout/OrderSummary.jsx'
import { CheckoutSupportButton } from '../components/layout/WhatsAppButton.jsx'

export default function Checkout() {
  const { cartItems } = useCart()

  useEffect(() => {
    document.title = 'Checkout — NATY X'
  }, [])

  if (!cartItems.length) {
    return (
      <main className="container-x py-24 text-center">
        <h1 className="font-display text-2xl mb-4">Your cart is empty</h1>
        <p className="text-stone text-sm mb-6">Add something to your cart before checking out.</p>
        <Link to="/shop" className="btn-primary">Shop Now</Link>
      </main>
    )
  }

  return (
    <main className="container-x py-10 sm:py-16">
      <h1 className="text-3xl sm:text-5xl mb-10">Checkout</h1>
      <div className="grid lg:grid-cols-[1fr_380px] gap-12">
        <CheckoutForm />
        <div className="space-y-6">
          <OrderSummary />
          <CheckoutSupportButton className="block text-center" />
        </div>
      </div>
    </main>
  )
}
