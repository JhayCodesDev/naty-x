import { useEffect } from 'react'

export default function Terms() {
  useEffect(() => {
    document.title = 'Terms & Conditions — NATY X'
  }, [])

  return (
    <main className="container-x py-10 sm:py-16 max-w-3xl">
      <p className="eyebrow mb-2">Legal</p>
      <h1 className="text-3xl sm:text-5xl mb-6">Terms &amp; Conditions</h1>
      <p className="text-xs bg-haze px-4 py-3 mb-10 text-stone">
        This is placeholder/demo content generated for development purposes. Review with a
        qualified professional before using in production.
      </p>

      <div className="space-y-8 text-stone leading-relaxed text-sm">
        <section>
          <h2 className="text-lg text-ink mb-2">Orders</h2>
          <p>
            By placing an order through this website, you confirm that the information provided is
            accurate and that you are authorised to use the payment method selected.
          </p>
        </section>
        <section>
          <h2 className="text-lg text-ink mb-2">Pricing</h2>
          <p>
            All prices are listed in Nigerian Naira (₦) and are subject to change without prior
            notice. Prices at the time of order confirmation apply.
          </p>
        </section>
        <section>
          <h2 className="text-lg text-ink mb-2">Payments</h2>
          <p>
            Payments are processed through supported third-party providers. NATY X does not store
            your card details.
          </p>
        </section>
        <section>
          <h2 className="text-lg text-ink mb-2">Delivery</h2>
          <p>
            Estimated delivery timeframes are provided in good faith and may vary depending on
            location and courier availability.
          </p>
        </section>
        <section>
          <h2 className="text-lg text-ink mb-2">Returns &amp; Exchanges</h2>
          <p>
            Please refer to our Shipping &amp; Returns page for full details on our exchange policy
            and eligibility conditions.
          </p>
        </section>
        <section>
          <h2 className="text-lg text-ink mb-2">Website Usage</h2>
          <p>
            You agree to use this website only for lawful purposes and not to engage in any activity
            that could damage, disable, or impair the site.
          </p>
        </section>
        <section>
          <h2 className="text-lg text-ink mb-2">Product Availability</h2>
          <p>
            All products are subject to availability. We reserve the right to limit quantities or
            discontinue any product at any time.
          </p>
        </section>
      </div>
    </main>
  )
}
