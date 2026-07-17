import { Link } from 'react-router-dom'
import { Check, ArrowRight, ShieldCheck, Lock } from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import CTASection from '../components/CTASection'
import { fadeUp, scaleIn, stagger } from '../lib/motion'
import { serviceGroups } from '../lib/content'

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
                  Naval & defence
                </span>
                <h2 className="mt-6 font-display text-display-sm font-light leading-[1.05] text-foam">
                  Discreet husbandry for naval and defence vessels.
                </h2>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-foam/70">
                  Nepmarine is entrusted with the confidential handling of warships and
                  naval vessels. We support defence and military operations with the
                  utmost discretion — coordinating secure port calls, husbandry, and
                  logistics while safeguarding every operational detail.
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

      <CTASection
        title="Not sure which services you need?"
        subtitle="Tell us about your vessel and route. We’ll put together a tailored scope and a transparent quote."
      />
    </>
  )
}
