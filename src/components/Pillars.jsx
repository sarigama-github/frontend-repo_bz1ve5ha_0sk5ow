import { motion } from 'framer-motion'

const pillars = [
  {
    title: 'Recruiting & Talent Placement',
    desc: 'Guiding athletes to the right programs and opportunities with precision and care.'
  },
  {
    title: 'UX/UI Design & Digital Experiences',
    desc: 'Luxury-grade interfaces crafted for clarity, performance, and emotion.'
  },
  {
    title: 'Sports Business & Strategy',
    desc: 'Bridging sport, technology, and brand to unlock lasting value.'
  }
]

function Pillars() {
  return (
    <section className="relative bg-olive-950 text-cream-100 py-24">
      <div className="absolute inset-0 opacity-[0.06] bg-[url('https://images.unsplash.com/photo-1544989164-31dc3c645987?q=80&w=1935&auto=format&fit=crop')] bg-cover" />
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="font-display text-4xl md:text-5xl text-center">Professional Pillars</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-gold-400/30 bg-olive-900/60 p-6 backdrop-blur-md"
            >
              <span className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_0_0_1px_rgba(212,175,55,0.35)] opacity-60" />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-b from-gold-200/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <h3 className="font-display text-2xl text-cream-100">{p.title}</h3>
              <p className="mt-3 text-cream-300">{p.desc}</p>

              <div className="mt-6 flex items-center gap-2 text-gold-300">
                <div className="h-px w-8 bg-gold-400/60" />
                <span className="text-sm tracking-wider">LEARN MORE</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pillars
