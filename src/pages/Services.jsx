import { Link } from 'react-router-dom'
import { Check, ArrowRight } from 'lucide-react'
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

      <CTASection
        title="Not sure which services you need?"
        subtitle="Tell us about your vessel and route. We’ll put together a tailored scope and a transparent quote."
      />
    </>
  )
}
