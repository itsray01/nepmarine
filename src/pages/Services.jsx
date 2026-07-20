import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Check, ArrowRight, ShieldCheck, Lock } from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import CTASection from '../components/CTASection'
import { fadeUp, scaleIn, stagger } from '../lib/motion'
import { serviceGroups } from '../lib/content'

function MaritimeCompass() {
  return (
    <motion.div
      className="relative grid h-16 w-16 shrink-0 place-items-center rounded-full border border-line bg-cloud shadow-card"
      whileHover={{ scale: 1.1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 18 }}
      aria-hidden="true"
    >
      {/* Slowly rotating compass rose */}
      <motion.svg
        viewBox="0 0 100 100"
        className="absolute h-12 w-12 text-brass-deep/45"
        fill="currentColor"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, ease: 'linear', repeat: Infinity }}
      >
        <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="1.5" />
        {Array.from({ length: 12 }).map((_, i) => (
          <rect
            key={i}
            x="49.2"
            y="6"
            width="1.6"
            height={i % 3 === 0 ? 9 : 6}
            transform={`rotate(${i * 30} 50 50)`}
          />
        ))}
        <path
          transform="rotate(45 50 50)"
          opacity="0.5"
          d="M50 26 L53 47 L74 50 L53 53 L50 74 L47 53 L26 50 L47 47 Z"
        />
        <path d="M50 14 L54 46 L86 50 L54 54 L50 86 L46 54 L14 50 L46 46 Z" />
      </motion.svg>

      {/* Gently swaying needle */}
      <motion.svg
        viewBox="0 0 100 100"
        className="relative h-9 w-9"
        animate={{ rotate: [-7, 7, -7] }}
        transition={{ duration: 5, ease: 'easeInOut', repeat: Infinity }}
      >
        <polygon points="50,18 45.5,50 54.5,50" className="fill-brass-deep" />
        <polygon points="50,82 45.5,50 54.5,50" className="fill-slate/60" />
        <circle cx="50" cy="50" r="4.5" className="fill-ink" />
      </motion.svg>
    </motion.div>
  )
}

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything your vessel needs, in one trusted agency."
        description="Nepmarine is dedicated to supporting your success at sea. From core port-call handling to specialized operations, we cover the full spectrum of agency work."
      >
        <Link to="/contact" className="btn-brass">
          Request a quote
          <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHero>

      <section className="shell space-y-6 py-16">
        {serviceGroups.map((g, i) => {
          const Icon = g.icon
          const flip = i % 2 === 1
          return (
            <Reveal key={g.id} variants={scaleIn}>
              <div className="card grid gap-10 p-8 transition-shadow duration-500 hover:shadow-card-hover sm:p-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
                <div className={`relative z-10 ${flip ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center gap-4">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl border border-line bg-cloud text-brass-deep">
                      <Icon className="h-7 w-7" strokeWidth={1.5} />
                    </span>
                    <span className="font-mono text-sm text-brass-deep/70">{g.number}</span>
                  </div>
                  <h2 className="mt-7 font-display text-display-sm font-light text-ink">
                    {g.title}
                  </h2>
                  <p className="mt-4 max-w-md text-lg leading-relaxed text-slate">
                    {g.summary}
                  </p>
                </div>

                <Reveal
                  variants={stagger(0.08)}
                  className={`relative z-10 grid gap-3 sm:grid-cols-2 ${
                    flip ? 'lg:order-1' : ''
                  }`}
                >
                  {g.points.map((pt) => (
                    <Reveal
                      key={pt}
                      as="div"
                      variants={fadeUp}
                      className="flex items-start gap-3 rounded-2xl border border-line bg-cloud px-4 py-4"
                    >
                      <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brass/15 text-brass-deep">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-sm leading-snug text-ink/80">{pt}</span>
                    </Reveal>
                  ))}
                </Reveal>
              </div>
            </Reveal>
          )
        })}
      </section>

      {/* Naval & defence — discreet handling */}
      <section className="shell pb-16">
        <Reveal variants={scaleIn}>
          <div className="relative overflow-hidden rounded-5xl border border-white/10 bg-deep p-8 sm:p-12">
            <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-brass/15 blur-[110px]" />
            <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-tide/25 blur-[120px]" />

            <div className="relative z-10 grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.28em] text-brass-light">
                  <Lock className="h-3.5 w-3.5" />
                  Specialised Services
                </span>
                <h2 className="mt-6 font-display text-display-sm font-light leading-[1.05] text-foam">
                  Discreet husbandry for naval and defence vessels.
                </h2>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-foam/70">
                  Nepmarine is entrusted with the confidential handling of warships and
                  naval vessels, delivering complete naval husbandry services across both
                  offshore and onshore operations. We support defence and military
                  activities with the utmost discretion — coordinating secure port calls,
                  husbandry, and logistics while safeguarding every operational detail.
                </p>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-foam/50">
                  Our naval desk operates under strict confidentiality. We are proud to
                  serve, and we never disclose the specifics of the assignments we handle.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { icon: Lock, title: 'Total confidentiality', body: 'Need-to-know handling with no public disclosure of vessels or movements.' },
                  { icon: ShieldCheck, title: 'Secure port calls', body: 'Controlled access, vetted vendors, and protected logistics chains.' },
                  { icon: Check, title: 'Mission-ready support', body: 'Bunkers, stores, crew, and husbandry aligned to operational tempo.' },
                  { icon: ShieldCheck, title: 'Trusted partner', body: 'A record of dependable, low-profile service for defence operators.' },
                ].map((f) => {
                  const Icon = f.icon
                  return (
                    <div
                      key={f.title}
                      className="rounded-3xl border border-white/10 bg-white/[0.03] p-5"
                    >
                      <span className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-brass-light">
                        <Icon className="h-5 w-5" strokeWidth={1.6} />
                      </span>
                      <h3 className="mt-4 font-display text-lg font-light text-foam">
                        {f.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-foam/55">{f.body}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Section separator */}
      <Reveal variants={fadeUp} className="shell py-16">
        <div className="group/sep flex items-center justify-center gap-4">
          {/* left line — golden sweeps from the compass outward on hover */}
          <span className="relative h-px w-full max-w-[30rem]">
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-line to-line" />
            <span className="absolute inset-0 origin-right scale-x-0 bg-gradient-to-l from-brass via-brass to-brass/10 transition-transform duration-700 ease-out group-hover/sep:scale-x-100" />
          </span>

          <svg
            viewBox="0 0 100 140"
            aria-hidden="true"
            className="h-4 w-3 shrink-0 fill-brass transition-transform duration-500 ease-out group-hover/sep:scale-[1.35]"
          >
            <path d="M50 6 C54 30 70 52 94 70 C70 88 54 110 50 134 C46 110 30 88 6 70 C30 52 46 30 50 6 Z" />
          </svg>

          <MaritimeCompass />

          <svg
            viewBox="0 0 100 140"
            aria-hidden="true"
            className="h-4 w-3 shrink-0 fill-brass transition-transform duration-500 ease-out group-hover/sep:scale-[1.35]"
          >
            <path d="M50 6 C54 30 70 52 94 70 C70 88 54 110 50 134 C46 110 30 88 6 70 C30 52 46 30 50 6 Z" />
          </svg>

          {/* right line — golden sweeps from the compass outward on hover */}
          <span className="relative h-px w-full max-w-[30rem]">
            <span className="absolute inset-0 bg-gradient-to-l from-transparent via-line to-line" />
            <span className="absolute inset-0 origin-left scale-x-0 bg-gradient-to-r from-brass via-brass to-brass/10 transition-transform duration-700 ease-out group-hover/sep:scale-x-100" />
          </span>
        </div>
      </Reveal>

      <CTASection
        title="Not sure which services you need?"
        subtitle="Tell us about your vessel and route. We’ll put together a tailored scope and a transparent quote."
      />
    </>
  )
}
