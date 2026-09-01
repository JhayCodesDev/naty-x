import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Search, ShoppingBag, Menu, Heart } from 'lucide-react'
import { useCart } from '../../context/CartContext.jsx'
import { useWishlist } from '../../context/WishlistContext.jsx'
import MobileMenu from './MobileMenu.jsx'
import SearchOverlay from '../ui/SearchOverlay.jsx'

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const { cartCount, setIsCartOpen } = useCart()
  const { wishlistCount } = useWishlist()

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-paper/95 backdrop-blur transition-shadow duration-300 ${
          scrolled ? 'border-b border-line shadow-sm' : 'border-b border-transparent'
        }`}
      >
        <div className="container-x flex items-center justify-between h-16 lg:h-20">
          <NavLink to="/" className="font-display text-xl lg:text-2xl tracking-tight">
            NATY&nbsp;X
          </NavLink>

          <nav className="hidden lg:flex items-center gap-10" aria-label="Primary">
            {LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `text-xs uppercase tracking-widest2 font-semibold link-underline ${
                    isActive ? 'text-ink' : 'text-stone'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-1 sm:gap-2">
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              className="p-2 hover:opacity-60 transition-opacity"
            >
              <Search size={20} />
            </button>
            <NavLink
              to="/shop"
              aria-label={`Wishlist, ${wishlistCount} items`}
              className="relative hidden sm:inline-flex p-2 hover:opacity-60 transition-opacity"
            >
              <Heart size={20} />
              {wishlistCount > 0 && (
                <span className="absolute top-0.5 right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-ink text-[10px] text-paper">
                  {wishlistCount}
                </span>
              )}
            </NavLink>
            <button
              onClick={() => setIsCartOpen(true)}
              aria-label={`Cart, ${cartCount} items`}
              className="relative p-2 hover:opacity-60 transition-opacity"
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute top-0.5 right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-ink text-[10px] text-paper">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="p-2 lg:hidden hover:opacity-60 transition-opacity"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}
