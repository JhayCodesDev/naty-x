import { NavLink } from 'react-router-dom'
import { X, Instagram } from 'lucide-react'

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
  { to: '/faq', label: 'FAQ' },
  { to: '/track-order', label: 'Track Order' },
]

export default function MobileMenu({ open, onClose }) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-[75] lg:hidden">
      <button
        aria-label="Close menu"
        onClick={onClose}
        className="absolute inset-0 bg-black/50"
      />
      <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-paper animate-slideIn flex flex-col">
        <div className="flex items-center justify-between px-6 py-5 border-b border-line">
          <span className="font-display text-lg">NATY X</span>
          <button onClick={onClose} aria-label="Close menu" className="p-1">
            <X size={24} />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto px-6 py-8">
          <ul className="space-y-1">
            {LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  onClick={onClose}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `block py-3 text-2xl font-display ${isActive ? 'text-ink' : 'text-stone'}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="px-6 py-6 border-t border-line flex items-center gap-5 text-stone">
          <a href="https://instagram.com/natyx" target="_blank" rel="noopener noreferrer" aria-label="NATY X on Instagram" className="hover:text-ink">
            <Instagram size={20} />
          </a>
          <span className="text-xs uppercase tracking-widest2">Lagos, Nigeria</span>
        </div>
      </div>
    </div>
  )
}
