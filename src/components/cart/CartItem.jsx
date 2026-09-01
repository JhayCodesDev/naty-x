import { Minus, Plus, X } from 'lucide-react'
import { formatNaira } from '../../utils/format.js'
import { useCart } from '../../context/CartContext.jsx'

export default function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart()

  return (
    <div className="flex gap-4 py-5 border-b border-line">
      <div className="w-20 h-24 sm:w-24 sm:h-28 bg-haze overflow-hidden shrink-0">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <p className="text-sm font-medium truncate">{item.name}</p>
            <p className="text-xs text-stone mt-1">
              {item.size} · {item.color}
            </p>
          </div>
          <button
            onClick={() => removeFromCart(item.key)}
            aria-label={`Remove ${item.name} from cart`}
            className="p-1 text-stone hover:text-ink shrink-0"
          >
            <X size={16} />
          </button>
        </div>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center border border-line">
            <button
              onClick={() => updateQuantity(item.key, item.quantity - 1)}
              aria-label="Decrease quantity"
              className="p-2 hover:bg-haze"
            >
              <Minus size={14} />
            </button>
            <span className="w-8 text-center text-sm" aria-live="polite">
              {item.quantity}
            </span>
            <button
              onClick={() => updateQuantity(item.key, item.quantity + 1)}
              aria-label="Increase quantity"
              className="p-2 hover:bg-haze"
            >
              <Plus size={14} />
            </button>
          </div>
          <p className="text-sm font-semibold">{formatNaira(item.price * item.quantity)}</p>
        </div>
      </div>
    </div>
  )
}
