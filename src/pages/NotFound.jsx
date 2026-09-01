import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  useEffect(() => {
    document.title = 'Page Not Found — NATY X'
  }, [])

  return (
    <main className="container-x py-24 sm:py-32 text-center">
      <p className="font-display text-7xl sm:text-9xl mb-4">404</p>
      <h1 className="text-xl sm:text-2xl mb-3">Page Not Found</h1>
      <p className="text-stone text-sm mb-8 max-w-sm mx-auto">
        The page you're looking for doesn't exist or may have been moved.
      </p>
      <Link to="/" className="btn-primary">Back to Home</Link>
    </main>
  )
}
