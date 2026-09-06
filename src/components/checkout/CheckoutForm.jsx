import { useState } from "react";
import Input from "../ui/Input.jsx";
import { useCart } from "../../context/CartContext.jsx";
import { whatsappUrl } from "../layout/WhatsAppButton.jsx";

export default function CheckoutForm() {
  const { cartItems, cartTotal } = useCart();
  const [customer, setCustomer] = useState({
    fullName: "",
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  function validate() {
    const next = {};
    if (!customer.fullName.trim())
      next.fullName = "Please enter your full name.";
    if (!/^\S+@\S+\.\S+$/.test(customer.email))
      next.email = "Please enter a valid email address.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitError("");
    if (!cartItems.length) return;
    if (!validate()) return;

    const orderItems = cartItems
      .map((item) => {
        const subTotal = item.price * item.quantity;
        return `${item.quantity} x ${item.name} -₦${subTotal.toLocaleString()}`;
      })
      .join("\n");

    const total = cartTotal;

    const orderId = `ORD-${Date.now()}`;
    console.log(orderId, total);

    const message = `
    Hi! 👋 I'd like to place an order.

    Order Id: ${orderId}
    
    Customer Details:
    Name: ${customer.fullName}
    Email: ${customer.email}

    Order Details
    ${orderItems}

    Total: ₦${total.toLocaleString()}
    
    Please assit me with completing my order. Thank You!
    `;

    window.location.href = whatsappUrl(message);
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-10">
      <div>
        <p className="eyebrow mb-4">Contact Information</p>
        <div className="grid sm:grid-cols-2 gap-4">
          <Input
            id="fullName"
            name="fullName"
            label="Full Name"
            value={customer.fullName}
            onChange={handleChange}
            placeholder="Your name"
            error={errors.fullName}
            autoComplete="name"
          />
          <Input
            id="email"
            name="email"
            label="Email"
            type="email"
            value={customer.email}
            onChange={handleChange}
            placeholder="Your email"
            error={errors.email}
            autoComplete="email"
          />
        </div>
      </div>

      {submitError && (
        <p role="alert" className="text-sm text-red-600 bg-red-50 px-4 py-3">
          {submitError}
        </p>
      )}

      <button type="submit" className="btn-primary w-300 mx-auto">
        Continue to whatsapp
      </button>
    </form>
  );
}
