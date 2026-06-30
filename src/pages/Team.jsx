import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Linkedin, Mail } from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import CTASection from '../components/CTASection'
import { fadeUp, scaleIn, stagger } from '../lib/motion'
import { team } from '../lib/content'

function initials(name) {
  return name
    .split(' ')
    .map((p) => p[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

export default function Team() {
  return (
    <>
      <PageHero
        eyebrow="Our people"
        title="The team behind every smooth port call."
        description="A close-knit group of maritime specialists who know the region intimately and treat your vessel as if it were their own."
      >
        <Link to="/contact" className="btn-brass">
          Work with us
          <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHero>

      <section className="shell pb-24">
        <Reveal
          variants={stagger(0.08)}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {team.map((m) => (
            <Reveal
              key={m.name}
              variants={scaleIn}
              className="group card flex flex-col p-7 transition-shadow duration-300 hover:shadow-card-hover"
            >
              <div className="flex items-center gap-4">
                {m.image ? (
                  <img
                    src={m.image}
                    alt={m.name}
                    loading="lazy"
                    className="h-16 w-16 rounded-2xl object-cover"
                  />
                ) : (
                  <span className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-tide to-deep font-display text-xl font-light text-foam">
                    {initials(m.name)}
                  </span>
                )}
                <div>
                  <h2 className="font-display text-xl font-light text-ink">{m.name}</h2>
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-brass-deep/80">
                    {m.role}
                  </p>
                </div>
              </div>

              <p className="mt-6 flex-1 text-sm leading-relaxed text-slate">{m.focus}</p>

              <div className="mt-6 flex items-center justify-between border-t border-line pt-5">
                <span className="flex items-center gap-1.5 text-xs text-slate/80">
                  <MapPin className="h-3.5 w-3.5 text-brass-deep/70" />
                  {m.location}
                </span>
                <div className="flex items-center gap-2">
                  <span className="grid h-8 w-8 place-items-center rounded-full border border-line text-slate transition-colors duration-200 group-hover:border-brass-deep group-hover:text-brass-deep">
                    <Linkedin className="h-4 w-4" strokeWidth={1.7} />
                  </span>
                  <span className="grid h-8 w-8 place-items-center rounded-full border border-line text-slate transition-colors duration-200 group-hover:border-brass-deep group-hover:text-brass-deep">
                    <Mail className="h-4 w-4" strokeWidth={1.7} />
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </Reveal>

        <Reveal variants={fadeUp} className="mt-16">
          <SectionHeading
            align="center"
            eyebrow="Join the crew"
            title="We are always looking for capable maritime talent."
            description="If you live and breathe ship operations across Southeast Asia, we would love to hear from you."
          />
          <div className="mt-8 flex justify-center">
            <Link to="/contact" className="btn-ghost">
              Get in touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>

      <CTASection />
    </>
  )
}
