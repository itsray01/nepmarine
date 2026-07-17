import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { PhoneCall, ArrowRight } from 'lucide-react'
import { fadeUp, stagger, spring } from '../lib/motion'

// Self-hosted placeholder footage in /public (Pexels, free license). Hosting it
// locally avoids hotlink/redirect issues that break inline playback in production.
// Swap this file for Nepmarine's own licensed footage when available.
const VIDEO_SRC = '/hero-ship.mp4'

export default function VideoHero() {
  const words = ['Your', 'Trusted', 'Maritime', 'Partner']

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink pt-20">
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      >
        <source src={VIDEO_SRC} type="video/mp4" />
      </video>

      {/* Cinematic legibility overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/55 to-ink/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-ink/40" />

      <div className="shell relative z-10 py-24">
        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger(0.08, 0.1)}
          className="max-w-4xl"
        >
          <motion.span variants={fadeUp} className="eyebrow eyebrow-invert">
            <span className="h-px w-10 bg-brass/70" />
            Serving 10 countries since 2024
          </motion.span>

          <h1 className="mt-7 font-display text-display-lg font-light leading-[0.95] text-foam">
            <span className="block overflow-hidden">
              {words.map((w, i) => (
                <motion.span
                  key={w}
                  className="mr-[0.25em] inline-block"
                  variants={{
                    hidden: { y: '110%', opacity: 0 },
                    show: {
                      y: '0%',
                      opacity: 1,
                      transition: { ...spring, delay: 0.1 + i * 0.07 },
                    },
                  }}
                >
                  {w}
                </motion.span>
              ))}
            </span>
            <motion.span variants={fadeUp} className="mt-2 block text-gradient-brass">
              across the seas of Asia Pacific.
            </motion.span>
          </h1>

          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-xl text-lg leading-relaxed text-foam/75"
          >
            Founded in Singapore, Nepmarine Agency delivers reliable ship agency
            support to charterers and owners, combining quality, innovation, and
            competitive pricing for seamless maritime operations.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link to="/contact" className="btn-brass">
              <PhoneCall className="h-4 w-4" />
              Book a Call
            </Link>
            <Link to="/services" className="btn-ghost-invert">
              Our Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex h-11 w-7 items-start justify-center rounded-full border border-white/25 p-1.5">
          <motion.span
            className="h-2 w-1 rounded-full bg-brass"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  )
}
