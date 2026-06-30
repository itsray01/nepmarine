import { motion } from 'framer-motion'
import { fadeUp, stagger } from '../lib/motion'

export default function PageHero({ eyebrow, title, description, children }) {
  return (
    <section className="relative overflow-hidden bg-paper pt-38 pb-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[34rem] w-[60rem] -translate-x-1/2 rounded-full bg-tide/10 blur-[150px]" />
        <div
          className="absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #e6e6e9 1px, transparent 1px), linear-gradient(to bottom, #e6e6e9 1px, transparent 1px)',
            backgroundSize: '110px 110px',
            maskImage: 'radial-gradient(circle at 50% 0%, black, transparent 68%)',
            WebkitMaskImage: 'radial-gradient(circle at 50% 0%, black, transparent 68%)',
          }}
        />
      </div>

      <motion.div
        initial="hidden"
        animate="show"
        variants={stagger(0.1, 0.05)}
        className="shell relative max-w-3xl"
      >
        {eyebrow && (
          <motion.span variants={fadeUp} className="eyebrow">
            <span className="h-px w-10 bg-brass/70" />
            {eyebrow}
          </motion.span>
        )}
        <motion.h1
          variants={fadeUp}
          className="mt-6 font-display text-display font-light leading-[0.98] text-balance text-ink"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-2xl text-lg leading-relaxed text-slate"
          >
            {description}
          </motion.p>
        )}
        {children && (
          <motion.div variants={fadeUp} className="mt-9">
            {children}
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}
