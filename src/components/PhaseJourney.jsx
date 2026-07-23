import { motion } from 'framer-motion'
import { ClipboardCheck, Ship, ShieldCheck, LifeBuoy } from 'lucide-react'
import Parallax from './Parallax'

const img = (id) =>
  `https://images.unsplash.com/${id}?q=85&w=1920&auto=format&fit=crop`

const phases = [
  {
    key: 'Appoint',
    number: '01',
    tag: 'Phase 01',
    heading: 'Appointment & pre-arrival',
    body: 'We confirm nominations, file pre-arrival documents, and brief all stakeholders before the vessel berths — so everything is ready the moment she arrives.',
    image: img('photo-1494412574643-ff11b0a5c1c3'),
    points: [{ icon: ClipboardCheck, label: 'Appointment & Pre-arrival' }],
  },
  {
    key: 'Assure',
    number: '02',
    tag: 'Phase 02',
    heading: 'Port call execution & oversight',
    body: 'Clearances, berthing, cargo ops, and crew matters handled on the ground in real time — backed by transparent reporting and disbursement accounts that keep your interests fully protected.',
    image: img('photo-1578575437130-527eed3abbec'),
    points: [
      { icon: Ship, label: 'Port Call Execution' },
      { icon: ShieldCheck, label: 'Owner-Protective Oversight' },
    ],
  },
  {
    key: 'Achieve',
    number: '03',
    tag: 'Phase 03',
    heading: 'Departure & closure',
    body: 'Smooth sailing out, with complete documentation and a clear post-call summary — the port call closed cleanly and accounted for.',
    image: img('photo-1530890448995-4d82724f702c'),
    points: [{ icon: LifeBuoy, label: 'Departure & Closure' }],
  },
]

const easeExpo = [0.16, 1, 0.3, 1]

export default function PhaseJourney() {
  return (
    <div className="relative mt-20">
      {/* Central spine (desktop) */}
      <div className="pointer-events-none absolute inset-y-4 left-1/2 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-line to-transparent lg:block" />

      <div className="space-y-24 sm:space-y-28 lg:space-y-40">
        {phases.map((p, i) => {
          const flip = i % 2 === 1
          return (
            <div
              key={p.key}
              className="relative grid items-center gap-10 lg:grid-cols-2 lg:gap-20"
            >
              {/* Node on the spine */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
                <span className="grid h-14 w-14 place-items-center rounded-full border border-line bg-paper font-mono text-sm text-brass-deep shadow-card">
                  {p.number}
                </span>
              </div>

              {/* Photo */}
              <motion.div
                initial={{ opacity: 0, y: i === 0 ? 96 : 40, scale: i === 0 ? 0.9 : 1 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: i === 0 ? 0.15 : 0.25 }}
                transition={{ duration: i === 0 ? 2 : 1.7, ease: easeExpo }}
                className={`relative ${flip ? 'lg:order-2 lg:pl-14' : 'lg:pr-14'}`}
              >
                <Parallax speed={26}>
                  <div className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 shadow-card">
                    <img
                      src={p.image}
                      alt=""
                      loading="lazy"
                      className="aspect-[5/4] w-full object-cover transition-transform duration-[1.2s] ease-out-expo group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/5 to-transparent" />
                    <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-ink/50 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.25em] text-foam backdrop-blur-md">
                      {p.tag}
                    </span>
                  </div>
                </Parallax>
              </motion.div>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, x: flip ? 48 : -48, y: i === 0 ? 48 : 0 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: i === 0 ? 0.15 : 0.3 }}
                transition={{ duration: i === 0 ? 1.9 : 1.6, ease: easeExpo, delay: i === 0 ? 0.25 : 0.1 }}
                className={`relative ${flip ? 'lg:order-1 lg:pr-14 lg:text-right' : 'lg:pl-14'}`}
              >
                {/* Oversized watermark numeral */}
                <span
                  className={`pointer-events-none absolute -top-24 select-none font-display text-[9rem] font-light leading-none text-brass/[0.07] sm:text-[12rem] ${
                    flip ? 'right-0' : 'left-0'
                  }`}
                >
                  {p.number}
                </span>

                <div
                  className={`relative flex items-center gap-3 ${
                    flip ? 'lg:justify-end' : ''
                  }`}
                >
                  <span className="h-px w-10 bg-brass" />
                  <span className="font-mono text-xs uppercase tracking-[0.3em] text-brass-deep">
                    {p.tag}
                  </span>
                </div>

                <h3 className="relative mt-5 font-display text-5xl font-light leading-none text-ink sm:text-7xl">
                  {p.key}
                </h3>
                <p className="relative mt-3 font-display text-xl font-light text-ink/45 sm:text-2xl">
                  {p.heading}
                </p>
                <p
                  className={`relative mt-6 max-w-md text-base leading-relaxed text-slate ${
                    flip ? 'lg:ml-auto' : ''
                  }`}
                >
                  {p.body}
                </p>

                <div
                  className={`relative mt-7 flex flex-wrap gap-3 ${
                    flip ? 'lg:justify-end' : ''
                  }`}
                >
                  {p.points.map((pt) => {
                    const Icon = pt.icon
                    return (
                      <span
                        key={pt.label}
                        className="inline-flex items-center gap-2.5 rounded-full border border-line bg-paper px-4 py-2 text-sm text-ink/75"
                      >
                        <Icon className="h-4 w-4 text-brass-deep" strokeWidth={1.7} />
                        {pt.label}
                      </span>
                    )
                  })}
                </div>
              </motion.div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
