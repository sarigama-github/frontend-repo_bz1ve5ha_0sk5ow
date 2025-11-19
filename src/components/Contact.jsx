import { useState } from 'react'
import { motion } from 'framer-motion'

function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <section className="relative bg-cream-50 py-24">
      <div className="absolute inset-0 opacity-[0.05] bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM1MTI1ODN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover" />
      <div className="relative mx-auto max-w-3xl px-6">
        <h2 className="font-display text-4xl md:text-5xl text-olive-900 text-center">Let’s Connect</h2>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true) }}
          className="mt-10 rounded-2xl border border-olive-200/70 bg-cream-100 p-6 md:p-8 shadow-sm"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="text-sm text-olive-700">Name</label>
              <input className="mt-1 w-full rounded-lg border border-olive-300 bg-cream-50 px-4 py-3 outline-none focus:border-gold-500/70 focus:ring-0 transition" required />
            </div>
            <div>
              <label className="text-sm text-olive-700">Email</label>
              <input type="email" className="mt-1 w-full rounded-lg border border-olive-300 bg-cream-50 px-4 py-3 outline-none focus:border-gold-500/70 focus:ring-0 transition" required />
            </div>
          </div>
          <div className="mt-4">
            <label className="text-sm text-olive-700">Message</label>
            <textarea rows="5" className="mt-1 w-full rounded-lg border border-olive-300 bg-cream-50 px-4 py-3 outline-none focus:border-gold-500/70 focus:ring-0 transition" required />
          </div>
          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="mt-6 rounded-lg bg-olive-900 px-6 py-3 text-cream-100 hover:bg-olive-800 border border-gold-400/40">
            Send Message
          </motion.button>
          {sent && <p className="mt-3 text-olive-700">Thanks! Your message was captured locally for this demo.</p>}
        </form>

        <div className="mt-6 flex justify-center">
          <a href="https://wa.me/" className="rounded-full border border-gold-500/50 px-4 py-2 text-olive-900 hover:bg-gold-50">WhatsApp</a>
        </div>
      </div>
    </section>
  )
}

export default Contact
