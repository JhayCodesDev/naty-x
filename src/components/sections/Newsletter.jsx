import { useState } from 'react'
import { sendNewsletterSignup } from '../../services/emailService.js'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  async function handleSubmit(e) {
    e.preventDefault()
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setStatus('error')
      return
    }
    setStatus('loading')
    await sendNewsletterSignup(email)
    setStatus('success')
  }

  return (
    <section className="bg-haze py-16 sm:py-20">
      <div className="container-x max-w-xl text-center">
        <h2 className="text-2xl sm:text-3xl mb-3">Join the List</h2>
        <p className="text-stone text-sm mb-8">
          Be the first to know about new drops, restocks, and exclusive access.
        </p>

        {status === 'success' ? (
          <p className="text-sm font-medium">You're on the list. Welcome to NATY X.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="input-field flex-1"
            />
            <button type="submit" disabled={status === 'loading'} className="btn-primary">
              {status === 'loading' ? 'Submitting…' : 'Subscribe'}
            </button>
          </form>
        )}
        {status === 'error' && (
          <p role="alert" className="text-xs text-red-600 mt-2">Please enter a valid email address.</p>
        )}
        <p className="text-[11px] text-stone mt-4">
          This is a demo signup — no email is actually sent.
        </p>
      </div>
    </section>
  )
}
