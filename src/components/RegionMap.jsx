import { motion } from 'framer-motion'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { fadeUp } from '../lib/motion'

// Stylized (non-geographic) region graphic: three connected nodes laid out to
// echo Singapore at the heart of the Malaysia / Indonesia corridor.
const NODES = [
  { name: 'Malaysia', caption: 'Strait of Malacca', x: 28, y: 30 },
  { name: 'Singapore', caption: 'Global transshipment hub', x: 50, y: 52, primary: true },
  { name: 'Indonesia', caption: 'Archipelago reach', x: 72, y: 72 },
]

export default function RegionMap() {
  return (
    <section className="relative overflow-hidden bg-cloud py-24">
      {/* Texture + glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.6]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #e6e6e9 1px, transparent 1px), linear-gradient(to bottom, #e6e6e9 1px, transparent 1px)',
          backgroundSize: '90px 90px',
          maskImage: 'radial-gradient(circle at 50% 50%, black, transparent 78%)',
          WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black, transparent 78%)',
        }}
      />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-tide/10 blur-[140px]" />

      <div className="shell relative grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          eyebrow="Our network"
          title="One trusted point of contact, across the region."
          description="From the Strait of Malacca to the Indonesian archipelago, Singapore sits at the heart of everything we coordinate."
        />

        {/* Graphic */}
        <Reveal variants={fadeUp} className="relative aspect-[16/11] w-full">
          {/* Connector lines */}
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
          >
            {[
              'M28,30 Q40,44 50,52',
              'M50,52 Q62,62 72,72',
              'M28,30 Q52,38 72,72',
            ].map((d, i) => (
              <motion.path
                key={i}
                d={d}
                fill="none"
                stroke="#c6a15b"
                strokeWidth="0.4"
                strokeDasharray="2 2.4"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: i === 2 ? 0.3 : 0.7 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 + i * 0.2 }}
              />
            ))}
          </svg>

          {/* Nodes */}
          {NODES.map((n, i) => (
            <motion.div
              key={n.name}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${n.x}%`, top: `${n.y}%` }}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.5 + i * 0.18 }}
            >
              <div className="relative grid place-items-center">
                {n.primary && (
                  <motion.span
                    className="absolute rounded-full border border-brass/60"
                    initial={{ width: 16, height: 16, opacity: 0.6 }}
                    animate={{ width: 64, height: 64, opacity: 0 }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: 'easeOut' }}
                  />
                )}
                <span
                  className={`relative z-10 block rounded-full ${
                    n.primary
                      ? 'h-4 w-4 bg-brass shadow-[0_0_18px_4px_rgba(198,161,91,0.45)]'
                      : 'h-3 w-3 bg-tide shadow-[0_0_14px_3px_rgba(68,75,86,0.35)]'
                  }`}
                />
              </div>
              <div className="absolute left-1/2 top-full mt-2 w-40 -translate-x-1/2 text-center">
                <div
                  className={`font-display text-lg font-light ${
                    n.primary ? 'text-brass-deep' : 'text-ink'
                  }`}
                >
                  {n.name}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate/70">
                  {n.caption}
                </div>
              </div>
            </motion.div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
