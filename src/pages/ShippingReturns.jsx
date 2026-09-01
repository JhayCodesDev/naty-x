import { useEffect } from 'react'

export default function ShippingReturns() {
  useEffect(() => {
    document.title = 'Shipping & Returns — NATY X'
  }, [])

  return (
    <main className="container-x py-10 sm:py-16 max-w-3xl">
      <p className="eyebrow mb-2">Customer Care</p>
      <h1 className="text-3xl sm:text-5xl mb-12">Shipping &amp; Returns</h1>

      <section className="mb-10">
        <h2 className="text-xl mb-3">Shipping</h2>
        <p className="text-stone leading-relaxed">
          We deliver nationwide across Nigeria. Orders are processed within 24–48 hours and
          delivered through trusted logistics partners.
        </p>
      </section>

      <div className="grid sm:grid-cols-2 gap-8 mb-10">
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest2 mb-2">Processing</h3>
          <p className="text-sm text-stone leading-relaxed">
            All orders are processed within 24–48 hours of payment confirmation, excluding weekends
            and public holidays.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest2 mb-2">Delivery</h3>
          <p className="text-sm text-stone leading-relaxed">
            Delivery within Lagos typically takes 1–2 business days. Other states across Nigeria
            typically take 2–5 business days depending on location.
          </p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-xl mb-3">Returns &amp; Exchanges</h2>
        <p className="text-stone leading-relaxed">
          Customers can request an exchange for wrong sizes or damaged products within 7 days of
          delivery, provided the item is unused and in its original condition.
        </p>
      </section>

      <div className="grid sm:grid-cols-2 gap-8">
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest2 mb-2">Damaged Items</h3>
          <p className="text-sm text-stone leading-relaxed">
            If your item arrives damaged, contact us on WhatsApp within 48 hours of delivery with
            photos of the item so we can arrange a replacement.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest2 mb-2">Conditions</h3>
          <p className="text-sm text-stone leading-relaxed">
            Items must be unworn, unwashed, and returned with original tags and packaging to be
            eligible for exchange.
          </p>
        </div>
      </div>
    </main>
  )
}
