import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const milestones = [
  {
    year: 'Argentina',
    title: 'Professional Volleyball Player',
    detail: 'Competed at a professional level in Argentina, embracing discipline, teamwork, and high-performance culture.'
  },
  {
    year: 'USA',
    title: 'Sports Management (B.S.)',
    detail: 'Graduated with a focus on athlete development, sports operations, and international recruiting.'
  },
  {
    year: 'Certified',
    title: 'UX/UI Design',
    detail: 'Earned certification in user experience and interface design, bridging design thinking with sports business.'
  },
  {
    year: 'Global',
    title: 'Recruiting Career',
    detail: 'Placed talent across countries, building trusted pipelines and strategic partnerships.'
  },
  {
    year: 'Digital',
    title: 'Sports Creator',
    detail: 'Sharing insights and tools for athletes navigating opportunities worldwide.'
  }
]

function AboutTimeline() {
  const [active, setActive] = useState(0)

  return (
    <section className="relative bg-cream-50 text-olive-950 py-24">
      <div className="absolute inset-0 opacity-[0.05] bg-[url('https://images.unsplash.com/photo-1544989164-31dc3c645987?q=80&w=1935&auto=format&fit=crop')] bg-cover" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-olive-900">A Journey Crafted with Intention</h2>
          <p className="mt-4 text-olive-700">Explore the milestones — click to reveal more.</p>
        </div>

        <div className="grid md:grid-cols-5 gap-4">
          {milestones.map((m, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`group relative overflow-hidden rounded-xl border px-4 py-6 text-left transition-all ${
                i === active
                  ? 'border-gold-500/60 bg-cream-100 shadow-[inset_0_0_0_1px_rgba(212,175,55,0.4)]'
                  : 'border-olive-200 hover:border-gold-400/60 hover:shadow-[inset_0_0_0_1px_rgba(212,175,55,0.25)]'
              }`}
            >
              <span className="absolute inset-0 bg-gradient-to-b from-gold-200/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="font-semibold text-olive-800">{m.year}</div>
              <div className="mt-1 text-olive-600">{m.title}</div>
            </button>
          ))}
        </div>

        <div className="mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-olive-200/70 bg-cream-100 p-6 md:p-8 shadow-sm"
            >
              <p className="text-olive-800 text-lg leading-relaxed">{milestones[active].detail}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default AboutTimeline
