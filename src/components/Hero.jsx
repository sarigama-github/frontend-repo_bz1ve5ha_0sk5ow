import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section ref={ref} className="relative min-h-[90vh] w-full overflow-hidden bg-olive-950 text-cream-100">
      {/* Textured background layers */}
      <motion.div style={{ y: y1, opacity }} className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(210,180,140,0.06),transparent_40%,rgba(255,215,0,0.04))]" />
        <div className="absolute inset-0 opacity-[0.10] mix-blend-overlay bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM1MTI1ODN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 opacity-[0.08] mix-blend-multiply bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM1MTI1ODN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center" />
      </motion.div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 py-28 sm:py-36 lg:py-40">
        <div className="flex flex-col items-center text-center">
          {/* Animated Monogram */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="mb-10"
          >
            <svg width="140" height="140" viewBox="0 0 140 140" fill="none" className="drop-shadow-[0_0_30px_rgba(212,175,55,0.35)]">
              <defs>
                <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#f8e7a1" />
                  <stop offset="50%" stopColor="#d4af37" />
                  <stop offset="100%" stopColor="#a67c00" />
                </linearGradient>
              </defs>
              <motion.path
                d="M30 105 L30 35 L65 35 C87 35 100 48 100 69 C100 90 87 105 65 105 L30 105 Z M110 35 L110 105"
                stroke="url(#gold)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.2, ease: 'easeInOut' }}
              />
            </svg>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl tracking-tight text-cream-100"
          >
            Julian Armendano
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="mt-6 max-w-3xl text-lg sm:text-xl text-cream-300"
          >
            Crafting elite pathways in sports, design, and global talent.
          </motion.p>

          <motion.div
            style={{ y: y2, opacity }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3 text-cream-200"
          >
            <span className="rounded-full border border-gold-400/40 bg-olive-900/50 px-4 py-2 text-sm backdrop-blur">UX/UI & Brand Identity</span>
            <span className="rounded-full border border-gold-400/40 bg-olive-900/50 px-4 py-2 text-sm backdrop-blur">Recruiting & Talent Placement</span>
            <span className="rounded-full border border-gold-400/40 bg-olive-900/50 px-4 py-2 text-sm backdrop-blur">Sports Business Strategy</span>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <div className="flex flex-col items-center text-cream-300/80">
              <div className="h-10 w-px bg-cream-200/20 mb-3" />
              <span className="text-xs tracking-[0.3em]">SCROLL</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
