import { formatNaira } from '../../utils/format.js'
import { useCart } from '../../context/CartContext.jsx'
import CartSummary from '../cart/CartSummary.jsx'

export default function OrderSummary() {
  const { cartItems } = useCart()

  return (
    <div className="bg-haze p-6">
      <p className="eyebrow mb-5">Order Summary</p>
      <div className="space-y-4 max-h-72 overflow-y-auto mb-5 pr-1">
        {cartItems.map((item) => (
          <div key={item.key} className="flex gap-3">
            <div className="relative w-14 h-16 bg-paper shrink-0">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-ink text-paper text-[10px] flex items-center justify-center">
                {item.quantity}
              </span>
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-medium truncate">{item.name}</p>
              <p className="text-xs text-stone">{item.size} · {item.color}</p>
            </div>
            <p className="text-xs font-semibold shrink-0">{formatNaira(item.price * item.quantity)}</p>
          </div>
        ))}
      </div>
      <CartSummary showCheckoutNote={false} />
    </div>
  )
}
