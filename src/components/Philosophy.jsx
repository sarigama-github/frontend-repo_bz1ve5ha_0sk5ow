import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

function Philosophy() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])

  return (
    <section ref={ref} className="relative overflow-hidden bg-olive-950 py-24">
      <motion.div style={{ y }} className="absolute inset-0 opacity-[0.12] bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM1MTI1ODN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.blockquote
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8 }}
          className="font-display text-3xl md:text-4xl leading-tight text-cream-100"
        >
          “Precision, legacy, and purpose — the pillars of a career crafted with intention.”
        </motion.blockquote>
      </div>
    </section>
  )
}

export default Philosophy
