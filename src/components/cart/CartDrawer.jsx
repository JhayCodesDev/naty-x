import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { X, ShoppingBag } from 'lucide-react'
import { useCart } from '../../context/CartContext.jsx'
import CartItem from './CartItem.jsx'
import CartSummary from './CartSummary.jsx'

export default function CartDrawer() {
  const { isCartOpen, setIsCartOpen, cartItems } = useCart()

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden'
      function handleKey(e) {
        if (e.key === 'Escape') setIsCartOpen(false)
      }
      document.addEventListener('keydown', handleKey)
      return () => {
        document.body.style.overflow = ''
        document.removeEventListener('keydown', handleKey)
      }
    }
  }, [isCartOpen, setIsCartOpen])

  if (!isCartOpen) return null

  return (
    <div className="fixed inset-0 z-[85]">
      <button
        aria-label="Close cart"
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-black/50"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        className="absolute right-0 top-0 h-full w-full sm:w-[420px] bg-paper flex flex-col animate-slideIn"
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-line">
          <p className="font-display text-lg">Cart ({cartItems.length})</p>
          <button onClick={() => setIsCartOpen(false)} aria-label="Close cart" className="p-1">
            <X size={22} />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 px-6 text-center">
            <ShoppingBag size={40} className="text-line" />
            <p className="font-display text-lg">Your cart is empty</p>
            <p className="text-sm text-stone">Looks like you haven't added anything yet.</p>
            <Link to="/shop" onClick={() => setIsCartOpen(false)} className="btn-primary mt-2">
              Start Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6">
              {cartItems.map((item) => (
                <CartItem key={item.key} item={item} />
              ))}
            </div>
            <div className="px-6 py-6 border-t border-line space-y-4">
              <CartSummary />
              <Link to="/checkout" onClick={() => setIsCartOpen(false)} className="btn-primary w-full">
                Checkout
              </Link>
              <Link
                to="/cart"
                onClick={() => setIsCartOpen(false)}
                className="block text-center text-xs uppercase tracking-widest2 link-underline mx-auto w-fit"
              >
                View Full Cart
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
