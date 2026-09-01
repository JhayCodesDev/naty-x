import { formatNaira } from '../../utils/format.js'
import { useCart } from '../../context/CartContext.jsx'

export default function CartSummary({ showCheckoutNote = true }) {
  const { cartSubtotal, shippingFee, cartTotal, freeShippingThreshold } = useCart()
  const remaining = freeShippingThreshold - cartSubtotal

  return (
    <div className="space-y-3">
      {showCheckoutNote && remaining > 0 && cartSubtotal > 0 && (
        <p className="text-xs text-stone bg-haze px-3 py-2">
          Add {formatNaira(remaining)} more for free shipping.
        </p>
      )}
      <div className="flex justify-between text-sm">
        <span className="text-stone">Subtotal</span>
        <span>{formatNaira(cartSubtotal)}</span>
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-stone">Estimated Delivery</span>
        <span>{shippingFee === 0 ? 'Free' : formatNaira(shippingFee)}</span>
      </div>
      <div className="flex justify-between text-base font-semibold pt-3 border-t border-line">
        <span>Total</span>
        <span>{formatNaira(cartTotal)}</span>
      </div>
    </div>
  )
}
