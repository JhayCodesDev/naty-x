const METHODS = [
  { id: 'paystack', label: 'Paystack', hint: 'Pay securely via Paystack (demo)' },
  { id: 'bank-transfer', label: 'Bank Transfer', hint: 'Instant transfer confirmation (demo)' },
  { id: 'card', label: 'Debit / Credit Card', hint: 'Visa, Mastercard, Verve (demo)' },
  { id: 'wallet', label: 'Apple Pay / Google Pay', hint: 'One-tap wallet checkout (demo)' },
]

export default function PaymentMethods({ selected, onSelect }) {
  return (
    <fieldset>
      <legend className="eyebrow mb-3">Payment Method</legend>
      <div className="space-y-2">
        {METHODS.map((method) => (
          <label
            key={method.id}
            className={`flex items-center justify-between gap-3 border px-4 py-3 cursor-pointer transition-colors ${
              selected === method.id ? 'border-ink' : 'border-line'
            }`}
          >
            <span>
              <span className="block text-sm font-medium">{method.label}</span>
              <span className="block text-xs text-stone">{method.hint}</span>
            </span>
            <input
              type="radio"
              name="payment-method"
              value={method.id}
              checked={selected === method.id}
              onChange={() => onSelect(method.id)}
              className="accent-black h-4 w-4"
            />
          </label>
        ))}
      </div>
      <p className="text-xs text-stone mt-3">
        This is a frontend demo — no real payment is processed and no card details are collected.
      </p>
    </fieldset>
  )
}

export { METHODS }
