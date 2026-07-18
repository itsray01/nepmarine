import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { spring } from '../lib/motion'

// A premium sticky split showcase: a pinned visual "stage" on the left that
// morphs as scroll-driven feature panels on the right come into view.
export default function StickyShowcase({
  eyebrow,
  title,
  description,
  features = [],
}) {
  const [active, setActive] = useState(0)
  const current = features[active] || features[0]
  const ActiveIcon = current?.icon

  return (
    <section className="shell py-30">
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />

      <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Sticky stage (desktop) */}
        <div className="hidden lg:block">
          <div className="sticky top-28">
            <div className="relative aspect-[4/5] overflow-hidden rounded-5xl border border-white/10 bg-deep">
              {/* Crossfading placeholder imagery for the active feature */}
              <AnimatePresence mode="popLayout">
                <motion.img
                  key={current?.image}
                  src={current?.image}
                  alt={current?.imageAlt || current?.title || ''}
                  loading="lazy"
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>

              {/* Readability overlays */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/10" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-tide/15 to-transparent mix-blend-overlay" />

              <div className="relative flex h-full flex-col justify-between p-10">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-sm text-brass/70">
                    {String(active + 1).padStart(2, '0')}
                    <span className="text-foam/30"> / {String(features.length).padStart(2, '0')}</span>
                  </span>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={spring}
                  >
                    {ActiveIcon && (
                      <span className="grid h-16 w-16 place-items-center rounded-3xl border border-white/10 bg-white/5 text-brass-light">
                        <ActiveIcon className="h-8 w-8" strokeWidth={1.4} />
                      </span>
                    )}
                    <h3 className="mt-7 font-display text-4xl font-light leading-tight text-foam">
                      {current?.title}
                    </h3>
                    <p className="mt-4 max-w-sm text-base leading-relaxed text-foam/65">
                      {current?.body}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Progress segments */}
                <div className="mt-8 flex gap-1.5">
                  {features.map((_, i) => (
                    <span
                      key={i}
                      className={`h-1 flex-1 rounded-full transition-colors duration-500 ${
                        i === active ? 'bg-brass' : 'bg-white/10'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scrolling feature panels */}
        <div className="flex flex-col">
          {features.map((f, i) => {
            const Icon = f.icon
            const isActive = i === active
            return (
              <motion.button
                type="button"
                key={f.title}
                onViewportEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                viewport={{ margin: '-48% 0px -48% 0px' }}
                className="group border-t border-line py-9 text-left last:border-b lg:py-12"
              >
                <motion.div
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-start gap-5"
                >
                  {/* Mobile-only icon (stage is hidden on small screens) */}
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-line bg-cloud text-brass-deep lg:hidden">
                    {Icon && <Icon className="h-6 w-6" strokeWidth={1.6} />}
                  </span>

                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-4">
                      <h3
                        className={`font-display text-2xl font-light transition-colors duration-500 ease-out sm:text-3xl ${
                          isActive ? 'text-ink' : 'text-ink/35'
                        }`}
                      >
                        {f.title}
                      </h3>
                      <ArrowUpRight
                        className={`h-5 w-5 shrink-0 transition-all duration-500 ${
                          isActive
                            ? 'text-brass-deep opacity-100'
                            : 'text-slate/40 opacity-0 group-hover:opacity-100'
                        }`}
                      />
                    </div>

                    <motion.div
                      initial={false}
                      animate={{
                        height: isActive ? 'auto' : 0,
                        opacity: isActive ? 1 : 0,
                      }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pt-3 text-base leading-relaxed text-slate">
                        {f.body}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.button>
            )
          })}

        </div>
      </div>
    </section>
  )
}
