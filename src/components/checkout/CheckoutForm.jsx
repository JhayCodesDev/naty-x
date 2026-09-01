import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Input from '../ui/Input.jsx'
import PaymentMethods from './PaymentMethods.jsx'
import { useCart } from '../../context/CartContext.jsx'
import { charge } from '../../services/paymentService.js'
import { createOrder } from '../../services/orderService.js'
import { sendOrderConfirmationEmail } from '../../services/emailService.js'

const NIGERIAN_STATES = [
  'Lagos', 'Abuja (FCT)', 'Ogun', 'Oyo', 'Rivers', 'Kano', 'Kaduna', 'Enugu', 'Delta', 'Edo', 'Other',
]

const initialFields = {
  fullName: '',
  email: '',
  phone: '',
  whatsapp: '',
  address: '',
  city: '',
  state: 'Lagos',
  instructions: '',
}

export default function CheckoutForm() {
  const navigate = useNavigate()
  const { cartItems, cartSubtotal, shippingFee, cartTotal, clearCart } = useCart()
  const [fields, setFields] = useState(initialFields)
  const [errors, setErrors] = useState({})
  const [paymentMethod, setPaymentMethod] = useState('paystack')
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  function updateField(key, value) {
    setFields((prev) => ({ ...prev, [key]: value }))
  }

  function validate() {
    const next = {}
    if (!fields.fullName.trim()) next.fullName = 'Please enter your full name.'
    if (!/^\S+@\S+\.\S+$/.test(fields.email)) next.email = 'Please enter a valid email address.'
    if (!/^[0-9+ ]{7,15}$/.test(fields.phone)) next.phone = 'Please enter a valid phone number.'
    if (!fields.address.trim()) next.address = 'Please enter your delivery address.'
    if (!fields.city.trim()) next.city = 'Please enter your city.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setSubmitError('')
    if (!cartItems.length) return
    if (!validate()) return

    setSubmitting(true)
    const result = await charge({ method: paymentMethod, amount: cartTotal, customer: fields })

    if (!result.success) {
      setSubmitting(false)
      setSubmitError(result.error)
      return
    }

    const order = await createOrder({
      items: cartItems,
      customer: fields,
      payment: { method: paymentMethod, reference: result.reference },
      subtotal: cartSubtotal,
      shipping: shippingFee,
      total: cartTotal,
    })

    await sendOrderConfirmationEmail(order)
    clearCart()
    setSubmitting(false)
    navigate(`/order-confirmation?order=${order.orderNumber}`)
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-10">
      <div>
        <p className="eyebrow mb-4">Contact Information</p>
        <div className="grid sm:grid-cols-2 gap-4">
          <Input
            id="fullName"
            label="Full Name"
            value={fields.fullName}
            onChange={(e) => updateField('fullName', e.target.value)}
            error={errors.fullName}
            autoComplete="name"
          />
          <Input
            id="email"
            label="Email"
            type="email"
            value={fields.email}
            onChange={(e) => updateField('email', e.target.value)}
            error={errors.email}
            autoComplete="email"
          />
          <Input
            id="phone"
            label="Phone Number"
            type="tel"
            value={fields.phone}
            onChange={(e) => updateField('phone', e.target.value)}
            error={errors.phone}
            autoComplete="tel"
          />
          <Input
            id="whatsapp"
            label="WhatsApp Number (optional)"
            type="tel"
            value={fields.whatsapp}
            onChange={(e) => updateField('whatsapp', e.target.value)}
          />
        </div>
      </div>

      <div>
        <p className="eyebrow mb-4">Delivery Address</p>
        <div className="space-y-4">
          <Input
            id="address"
            label="Street Address"
            value={fields.address}
            onChange={(e) => updateField('address', e.target.value)}
            error={errors.address}
            autoComplete="street-address"
          />
          <div className="grid sm:grid-cols-2 gap-4">
            <Input
              id="city"
              label="City"
              value={fields.city}
              onChange={(e) => updateField('city', e.target.value)}
              error={errors.city}
              autoComplete="address-level2"
            />
            <div>
              <label htmlFor="state" className="block text-xs uppercase tracking-widest2 text-stone mb-2">
                State
              </label>
              <select
                id="state"
                value={fields.state}
                onChange={(e) => updateField('state', e.target.value)}
                className="input-field"
              >
                {NIGERIAN_STATES.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>
          <Input
            id="instructions"
            label="Delivery Instructions (optional)"
            textarea
            value={fields.instructions}
            onChange={(e) => updateField('instructions', e.target.value)}
          />
        </div>
      </div>

      <PaymentMethods selected={paymentMethod} onSelect={setPaymentMethod} />

      {submitError && (
        <p role="alert" className="text-sm text-red-600 bg-red-50 px-4 py-3">
          {submitError}
        </p>
      )}

      <button type="submit" disabled={submitting || !cartItems.length} className="btn-primary w-full">
        {submitting ? 'Processing Payment…' : 'Place Order'}
      </button>
    </form>
  )
}
