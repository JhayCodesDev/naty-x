import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '../context/CartContext.jsx'
import CartItem from '../components/cart/CartItem.jsx'
import CartSummary from '../components/cart/CartSummary.jsx'

export default function Cart() {
  const { cartItems, clearCart } = useCart()

  useEffect(() => {
    document.title = 'Your Cart — NATY X'
  }, [])

  if (!cartItems.length) {
    return (
      <main className="container-x py-24 flex flex-col items-center text-center gap-4">
        <ShoppingBag size={44} className="text-line" />
        <h1 className="font-display text-2xl">Your Cart Is Empty</h1>
        <p className="text-stone text-sm max-w-sm">
          Looks like you haven't added anything yet. Explore the collection and find something you'll love.
        </p>
        <Link to="/shop" className="btn-primary mt-2">Start Shopping</Link>
      </main>
    )
  }

  return (
    <main className="container-x py-10 sm:py-16">
      <h1 className="text-3xl sm:text-5xl mb-10">Your Cart</h1>
      <div className="grid lg:grid-cols-[1fr_360px] gap-12">
        <div>
          {cartItems.map((item) => (
            <CartItem key={item.key} item={item} />
          ))}
          <button onClick={clearCart} className="text-xs uppercase tracking-widest2 underline underline-offset-4 mt-6">
            Clear Cart
          </button>
        </div>
        <div className="bg-haze p-6 h-fit">
          <CartSummary />
          <Link to="/checkout" className="btn-primary w-full mt-6">Proceed to Checkout</Link>
          <Link to="/shop" className="block text-center text-xs uppercase tracking-widest2 link-underline mx-auto w-fit mt-4">
            Continue Shopping
          </Link>
        </div>
      </div>
    </main>
  )
}
