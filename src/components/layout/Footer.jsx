import { Link } from 'react-router-dom'
import { MessageCircle } from 'lucide-react'
import { siInstagram } from 'simple-icons'
import { whatsappUrl } from './WhatsAppButton.jsx'

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="container-x py-14 grid grid-cols-2 sm:grid-cols-4 gap-10">
        <div className="col-span-2 sm:col-span-1">
          <Link to="/" className="font-display text-xl">
            NATY&nbsp;X
          </Link>
          <p className="mt-3 text-sm text-stone max-w-[220px]">
            Wear Confidence. Premium Nigerian streetwear.
          </p>
        </div>

        <div>
          <p className="eyebrow mb-4">Navigate</p>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/" className="link-underline">Home</Link></li>
            <li><Link to="/shop" className="link-underline">Shop</Link></li>
            <li><Link to="/about" className="link-underline">About</Link></li>
            <li><Link to="/contact" className="link-underline">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Customer Care</p>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/faq" className="link-underline">FAQ</Link></li>
            <li><Link to="/shipping-returns" className="link-underline">
              Shipping &amp; Returns
            </Link></li>
            <li><Link to="/track-order" className="link-underline">
              Track Order
            </Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Legal</p>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/privacy" className="link-underline">
              Privacy Policy
            </Link></li>
            <li><Link to="/terms" className="link-underline">
              Terms &amp; Conditions
            </Link></li>
          </ul>
        </div>
      </div>

      <div className="container-x py-6 border-t border-line flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
        <div className="text-xs text-stone space-y-1">
          <p>Lagos, Nigeria</p>
          <p>09133358306 · fahiqabiola@gmail.com</p>
        </div>

        {/* NATY X social links */}
        <div className="flex items-center gap-4">
          <a
            href="https://instagram.com/natyx"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="NATY X on Instagram"
            className="hover:opacity-60"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              aria-hidden="true"
            >
              <path d={siInstagram.path} />
            </svg>
          </a>

          <a
            href="https://tiktok.com/@nxtfits_07"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="NATY X on TikTok"
            className="text-xs uppercase tracking-widest2 hover:opacity-60"
          >
            TikTok
          </a>

          <a
            href={whatsappUrl('Hello NATY X, I have a question.')}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="NATY X on WhatsApp"
            className="hover:opacity-60"
          >
            <MessageCircle size={18} />
          </a>
        </div>

        {/* Copyright + developer credit */}
        <div className="text-xs text-stone text-center sm:text-right">
          <p>© 2026 NATY X. All rights reserved.</p>

          <p className="mt-1">
            Designed &amp; developed by{' '}
            <a
              href="https://jhaycodesdev.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline"
            >
              JhayCodes
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
