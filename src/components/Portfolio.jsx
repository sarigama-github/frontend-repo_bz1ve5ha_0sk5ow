import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const projects = [
  { id: 1, title: 'Aquino Tech Ecommerce', tag: 'UX/UI', image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=2069&auto=format&fit=crop' },
  { id: 2, title: 'Volleyball Transfer Portal', tag: 'Product', image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2069&auto=format&fit=crop' },
  { id: 3, title: 'Sports Digital Marketing', tag: 'Marketing', image: 'https://images.unsplash.com/photo-1521417531039-452d87a5f33f?q=80&w=2068&auto=format&fit=crop' },
  { id: 4, title: 'Recruiting Success Stories', tag: 'Recruiting', image: 'https://images.unsplash.com/photo-1521417531039-452d87a5f33f?q=80&w=2068&auto=format&fit=crop' }
]

function Portfolio() {
  const [active, setActive] = useState(null)

  return (
    <section className="relative bg-cream-50 text-olive-950 py-24">
      <div className="absolute inset-0 opacity-[0.05] bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM1MTI1ODN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover" />
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="font-display text-4xl md:text-5xl text-center">Portfolio</h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {projects.map(p => (
            <button key={p.id} onClick={() => setActive(p)} className="group relative overflow-hidden rounded-2xl border border-olive-200 bg-cream-100 shadow hover:shadow-lg transition-shadow">
              <img src={p.image} alt="" className="h-48 w-full object-cover object-center opacity-90 group-hover:opacity-100 transition-opacity" />
              <div className="p-4">
                <div className="text-gold-700 text-sm tracking-widest">{p.tag}</div>
                <div className="font-semibold text-olive-900">{p.title}</div>
              </div>
              <span className="absolute inset-0 bg-gradient-to-t from-olive-900/10 to-transparent" />
            </button>
          ))}
        </div>

        <AnimatePresence>
          {active && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-6">
              <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 20, opacity: 0 }} className="relative max-w-3xl w-full overflow-hidden rounded-2xl bg-cream-50 text-olive-950 shadow-2xl">
                <img src={active.image} alt="" className="h-64 w-full object-cover" />
                <div className="p-6">
                  <div className="text-gold-700 text-sm tracking-widest">{active.tag}</div>
                  <h3 className="font-display text-3xl mt-1">{active.title}</h3>
                  <p className="mt-3 text-olive-800">Detailed case study content goes here — goals, process, outcomes, and elegant visuals that reflect luxury and precision.</p>
                </div>
                <div className="flex justify-end gap-3 p-6 pt-0">
                  <button onClick={() => setActive(null)} className="rounded-full border border-olive-300 px-4 py-2 hover:border-gold-500/60 hover:text-gold-700">Close</button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Portfolio
