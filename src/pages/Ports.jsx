import { ArrowRight } from 'lucide-react'
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
        <Reveal
          variants={stagger(0.08)}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5"
        >
          {ports.map((p) => {
            const Icon = p.icon
            return (
              <Reveal key={p.country} variants={scaleIn}>
                <div className="card flex h-full items-center gap-3 p-5 transition-shadow duration-300 hover:shadow-card-hover">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-line bg-cloud text-brass-deep">
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <h2 className="font-display text-xl font-light text-ink">
                    {p.country}
                  </h2>
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
