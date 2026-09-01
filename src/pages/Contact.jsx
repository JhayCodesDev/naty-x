import { useEffect, useState } from 'react'
import { Mail, Phone, MapPin, Instagram } from 'lucide-react'
import Input from '../components/ui/Input.jsx'
import { ContactWhatsAppButton } from '../components/layout/WhatsAppButton.jsx'
import { sendContactMessage } from '../services/emailService.js'

export default function Contact() {
  const [fields, setFields] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  useEffect(() => {
    document.title = 'Contact — NATY X'
  }, [])

  function update(key, value) {
    setFields((prev) => ({ ...prev, [key]: value }))
  }

  function validate() {
    const next = {}
    if (!fields.name.trim()) next.name = 'Please enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(fields.email)) next.email = 'Please enter a valid email address.'
    if (!fields.message.trim()) next.message = 'Please enter a message.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!validate()) return
    setStatus('loading')
    await sendContactMessage(fields)
    setStatus('success')
    setFields({ name: '', email: '', message: '' })
  }

  return (
    <main className="container-x py-10 sm:py-16">
      <p className="eyebrow mb-2">Get In Touch</p>
      <h1 className="text-3xl sm:text-5xl mb-12">Contact NATY X</h1>

      <div className="grid lg:grid-cols-2 gap-14">
        <div>
          <p className="text-stone mb-8 leading-relaxed max-w-md">
            Have a question about an order, sizing, or a collaboration idea? Reach out — we usually
            reply fastest on WhatsApp.
          </p>

          <ul className="space-y-5 mb-8">
            <li className="flex items-center gap-3 text-sm">
              <Phone size={18} className="text-stone" /> 09133358306
            </li>
            <li className="flex items-center gap-3 text-sm">
              <Mail size={18} className="text-stone" /> fahiqabiola@gmail.com
            </li>
            <li className="flex items-center gap-3 text-sm">
              <MapPin size={18} className="text-stone" /> Lagos, Nigeria
            </li>
            <li className="flex items-center gap-3 text-sm">
              <Instagram size={18} className="text-stone" />
              <a href="https://instagram.com/natyx" target="_blank" rel="noopener noreferrer" className="link-underline">
                @natyx
              </a>
              <span className="text-stone">·</span>
              <a href="https://tiktok.com/@nxtfits_07" target="_blank" rel="noopener noreferrer" className="link-underline">
                @nxtfits_07 (TikTok)
              </a>
            </li>
          </ul>

          <ContactWhatsAppButton />
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <Input
            id="contact-name"
            label="Full Name"
            value={fields.name}
            onChange={(e) => update('name', e.target.value)}
            error={errors.name}
          />
          <Input
            id="contact-email"
            label="Email"
            type="email"
            value={fields.email}
            onChange={(e) => update('email', e.target.value)}
            error={errors.email}
          />
          <Input
            id="contact-message"
            label="Message"
            textarea
            value={fields.message}
            onChange={(e) => update('message', e.target.value)}
            error={errors.message}
          />
          <button type="submit" disabled={status === 'loading'} className="btn-primary w-full">
            {status === 'loading' ? 'Sending…' : 'Send Message'}
          </button>
          {status === 'success' && (
            <p className="text-sm text-center">Thanks — we've received your message and will reply soon.</p>
          )}
        </form>
      </div>
    </main>
  )
}
