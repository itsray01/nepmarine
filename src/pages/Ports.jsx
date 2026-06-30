import { MapPin, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import GlobeSection from '../components/GlobeSection'
import Reveal from '../components/Reveal'
import CTASection from '../components/CTASection'
import { fadeUp, scaleIn, stagger } from '../lib/motion'
import { ports } from '../lib/content'

export default function Ports() {
  return (
    <>
      <GlobeSection
        eyebrow="Ports covered"
        title="Safeguarding maritime assets across the region and beyond."
        description="Drag to explore our network, then select a port pin for its local address, phone, and email."
        blendTarget="paper"
      />

      <section className="shell py-16">
        <Reveal variants={stagger(0.12)} className="grid gap-6 lg:grid-cols-3">
          {ports.map((p) => {
            const Icon = p.icon
            return (
              <Reveal key={p.country} variants={scaleIn}>
                <div className="card flex h-full flex-col p-8 transition-shadow duration-500 hover:shadow-card-hover">
                  <span className="relative z-10 grid h-12 w-12 place-items-center rounded-2xl border border-line bg-cloud text-brass-deep">
                    <Icon className="h-6 w-6" strokeWidth={1.6} />
                  </span>

                  <span className="relative z-10 mt-8 block font-mono text-[11px] uppercase tracking-[0.28em] text-brass-deep/80">
                    {p.tagline}
                  </span>
                  <h2 className="relative z-10 mt-2 font-display text-3xl font-light text-ink">
                    {p.country}
                  </h2>
                  <p className="relative z-10 mt-3 text-sm leading-relaxed text-slate">
                    {p.body}
                  </p>

                  <ul className="relative z-10 mt-7 space-y-2.5 border-t border-line pt-6">
                    {p.harbours.map((h) => (
                      <li
                        key={h}
                        className="flex items-center gap-2.5 text-sm text-slate"
                      >
                        <MapPin className="h-4 w-4 text-brass-deep/70" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )
          })}
        </Reveal>

        <Reveal variants={fadeUp} className="mt-10 flex flex-col items-center gap-5 rounded-4xl border border-line bg-cloud px-8 py-12 text-center">
          <p className="max-w-xl text-lg leading-relaxed text-slate">
            Calling at a port not listed here? Our regional network frequently extends
            coverage on request.
          </p>
          <Link to="/contact" className="btn-ghost">
            Ask about your port
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>

      <CTASection
        title="Plot your next call with confidence."
        subtitle="Share your port rotation and we’ll confirm coverage, formalities, and a transparent estimate."
      />
    </>
  )
}
