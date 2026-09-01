import { useEffect } from 'react'
import Accordion from '../components/ui/Accordion.jsx'

const FAQS = [
  {
    question: 'How do I place an order?',
    answer: 'Browse the shop, select your size and color, add the item to your cart, then proceed to checkout and fill in your delivery details.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept Paystack, direct bank transfer, debit/credit cards, and Apple Pay / Google Pay at checkout.',
  },
  {
    question: 'Do you deliver outside Lagos?',
    answer: 'Yes, we deliver nationwide across Nigeria through trusted logistics partners.',
  },
  {
    question: 'How long does delivery take?',
    answer: 'Orders are processed within 24–48 hours and delivered based on your location, typically within 2–5 business days.',
  },
  {
    question: 'Can I exchange an item?',
    answer: 'Yes, exchanges are accepted within 7 days of delivery provided the item is unused and in its original condition.',
  },
  {
    question: 'What happens if I select the wrong size?',
    answer: 'Reach out to us on WhatsApp as soon as possible after placing your order and we\'ll help arrange an exchange once delivered.',
  },
  {
    question: 'How do I track my order?',
    answer: 'Visit the Track Order page and enter your order ID along with the email or phone number used at checkout.',
  },
  {
    question: 'Can I order through WhatsApp?',
    answer: 'Yes — message us on WhatsApp with the product you\'re interested in and our team will guide you through the order.',
  },
  {
    question: 'Where is NATY X located?',
    answer: 'NATY X is based in Lagos, Nigeria.',
  },
  {
    question: 'How can I contact customer support?',
    answer: 'You can reach us via WhatsApp, email at fahiqabiola@gmail.com, or through the contact form on our Contact page.',
  },
]

export default function FAQ() {
  useEffect(() => {
    document.title = 'FAQ — NATY X'
  }, [])

  return (
    <main className="container-x py-10 sm:py-16 max-w-3xl">
      <p className="eyebrow mb-2">Help Center</p>
      <h1 className="text-3xl sm:text-5xl mb-12">Frequently Asked Questions</h1>
      <Accordion items={FAQS} />
    </main>
  )
}
