import { Suspense, lazy, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Phone, Mail, X, Globe2 } from 'lucide-react'
import { globePorts } from '../lib/content'

// Code-split the three.js scene so it stays out of the initial bundle.
const Globe = lazy(() => import('./Globe'))

export default function GlobeSection({
  eyebrow = 'Our global network',
  title = 'One trusted partner, port by port across the world.',
  description = 'Drag to spin the globe, then select a port to see its local address, phone, and email.',
  blendTarget = 'paper',
}) {
  const [selected, setSelected] = useState(null)
  const blendClass = blendTarget === 'ink' ? 'to-ink' : 'to-paper'

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-ink">
      {/* 3D globe fills the section and handles drag / clicks */}
      <div className="absolute inset-0 z-0">
        <Suspense
          fallback={
            <div className="flex h-full w-full items-center justify-center">
              <span className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.32em] text-foam/40">
                <Globe2 className="h-4 w-4 animate-spin" />
                Loading globe
              </span>
            </div>
          }
        >
          <Globe
            ports={globePorts}
            selectedId={selected?.id}
            onSelect={(port) => setSelected(port)}
          />
        </Suspense>
      </div>

      {/* Blend into the section below */}
      <div className={`pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-40 bg-gradient-to-b from-transparent ${blendClass}`} />

      {/* Heading overlay (does not capture pointer so the globe stays draggable) */}
      <div className="pointer-events-none relative z-10 shell flex min-h-[100svh] flex-col justify-between py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl"
        >
          <span className="eyebrow eyebrow-invert">
            <span className="h-px w-10 bg-brass/70" />
            {eyebrow}
          </span>
          <h2 className="mt-6 font-display text-display-sm font-light leading-[1.02] text-balance text-foam">
            {title}
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-foam/65">
            {description}
          </p>
        </motion.div>

        <span className="font-mono text-[11px] uppercase tracking-[0.32em] text-foam/40">
          {new Set(globePorts.map((p) => p.name)).size} countries
        </span>
      </div>

      {/* Selected-port info card */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key={selected.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto absolute inset-x-4 bottom-6 z-30 mx-auto max-w-md rounded-4xl border border-white/10 bg-deep/95 p-7 shadow-lift backdrop-blur-xl sm:inset-x-auto sm:bottom-10 sm:right-10 sm:mx-0 sm:w-[23rem]"
          >
            <button
              type="button"
              onClick={() => setSelected(null)}
              aria-label="Close"
              className="absolute right-5 top-5 grid h-8 w-8 place-items-center rounded-full border border-white/15 text-foam/70 transition-colors hover:border-brass hover:text-brass-light"
            >
              <X className="h-4 w-4" />
            </button>

            <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-brass-light">
              {selected.port}
            </span>
            <h3 className="mt-2 font-display text-2xl font-light text-foam">
              {selected.name}
            </h3>

            <div className="mt-6 flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/5 text-brass-light">
                  <MapPin className="h-4 w-4" />
                </span>
                <p className="text-sm leading-relaxed text-foam/80">{selected.address}</p>
              </div>

              <a href={`tel:${selected.phone.replace(/\s+/g, '')}`} className="group flex items-center gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/5 text-brass-light">
                  <Phone className="h-4 w-4" />
                </span>
                <span className="text-sm text-foam/80 transition-colors group-hover:text-brass-light">
                  {selected.phone}
                </span>
              </a>

              <a href={`mailto:${selected.email}`} className="group flex items-center gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/5 text-brass-light">
                  <Mail className="h-4 w-4" />
                </span>
                <span className="text-sm text-foam/80 transition-colors group-hover:text-brass-light">
                  {selected.email}
                </span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
