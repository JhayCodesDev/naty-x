const WHATSAPP_NUMBER = '2349133358306' // 09133358306 in international format

export function whatsappUrl(message) {
  const text = encodeURIComponent(message)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`
}

export function ProductInquiryButton({ productName, className = '' }) {
  const message = `Hello NATY X, I'm interested in the ${productName}. Please provide more information.`
  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-outline ${className}`}
    >
      Ask on WhatsApp
    </a>
  )
}

export function CheckoutSupportButton({ className = '' }) {
  const message = `Hello NATY X, I need help completing my order on the website.`
  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`link-underline text-sm ${className}`}
    >
      Need help? Chat with us on WhatsApp
    </a>
  )
}

export function ContactWhatsAppButton({ className = '' }) {
  const message = `Hello NATY X, I'd like to know more about your brand.`
  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-primary ${className}`}
    >
      Chat on WhatsApp
    </a>
  )
}

export default function FloatingWhatsAppButton() {
  const message = `Hello NATY X, I have a question about your products.`
  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with NATY X on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:scale-105 active:scale-95 transition-transform"
    >
      <svg viewBox="0 0 32 32" width="28" height="28" fill="currentColor" aria-hidden="true">
        <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.362.687 4.564 1.868 6.417L4 29l7.77-1.833A11.94 11.94 0 0 0 16.001 27C22.63 27 28 21.627 28 15S22.63 3 16.001 3Zm0 21.6c-1.98 0-3.83-.55-5.41-1.505l-.388-.23-4.61 1.088 1.116-4.49-.253-.4A9.55 9.55 0 0 1 6.4 15c0-5.302 4.3-9.6 9.601-9.6 5.3 0 9.6 4.298 9.6 9.6 0 5.302-4.3 9.6-9.6 9.6Zm5.267-7.19c-.288-.144-1.706-.842-1.97-.938-.264-.096-.456-.144-.648.144-.192.288-.744.938-.912 1.13-.168.192-.336.216-.624.072-.288-.144-1.217-.449-2.318-1.43-.857-.764-1.436-1.708-1.604-1.996-.168-.288-.018-.444.126-.587.13-.129.288-.336.432-.504.144-.168.192-.288.288-.48.096-.192.048-.36-.024-.504-.072-.144-.648-1.562-.888-2.14-.234-.562-.472-.486-.648-.495-.168-.009-.36-.011-.552-.011-.192 0-.504.072-.768.36-.264.288-1.008.985-1.008 2.402 0 1.417 1.032 2.785 1.176 2.977.144.192 2.03 3.1 4.92 4.347.688.297 1.224.474 1.642.607.69.22 1.317.189 1.814.115.553-.083 1.706-.697 1.946-1.37.24-.673.24-1.25.168-1.37-.072-.12-.264-.192-.552-.336Z" />
      </svg>
    </a>
  )
}
