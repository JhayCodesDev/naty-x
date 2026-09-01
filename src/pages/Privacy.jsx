import { useEffect } from 'react'

export default function Privacy() {
  useEffect(() => {
    document.title = 'Privacy Policy — NATY X'
  }, [])

  return (
    <main className="container-x py-10 sm:py-16 max-w-3xl">
      <p className="eyebrow mb-2">Legal</p>
      <h1 className="text-3xl sm:text-5xl mb-6">Privacy Policy</h1>
      <p className="text-xs bg-haze px-4 py-3 mb-10 text-stone">
        This is placeholder/demo content generated for development purposes. Review with a
        qualified professional before using in production.
      </p>

      <div className="space-y-8 text-stone leading-relaxed text-sm">
        <section>
          <h2 className="text-lg text-ink mb-2">Information We Collect</h2>
          <p>
            When you place an order or contact us, we may collect information such as your name,
            email address, phone number, and delivery address in order to fulfil your order and
            respond to enquiries.
          </p>
        </section>
        <section>
          <h2 className="text-lg text-ink mb-2">How We Use Information</h2>
          <p>
            Information collected is used solely to process orders, provide customer support, and,
            where you have opted in, send updates about new products and promotions.
          </p>
        </section>
        <section>
          <h2 className="text-lg text-ink mb-2">Data Storage</h2>
          <p>
            This demo website stores cart and wishlist data locally in your browser. No customer
            data is transmitted to a live server in this demo version of the site.
          </p>
        </section>
        <section>
          <h2 className="text-lg text-ink mb-2">Third-Party Services</h2>
          <p>
            When connected to real payment processors such as Paystack, those providers will
            process payment information under their own privacy policies.
          </p>
        </section>
        <section>
          <h2 className="text-lg text-ink mb-2">Your Rights</h2>
          <p>
            You may request access to, correction of, or deletion of your personal information at
            any time by contacting us at fahiqabiola@gmail.com.
          </p>
        </section>
        <section>
          <h2 className="text-lg text-ink mb-2">Contact</h2>
          <p>Questions about this policy can be directed to fahiqabiola@gmail.com.</p>
        </section>
      </div>
    </main>
  )
}
