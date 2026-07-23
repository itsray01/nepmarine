import { Star, Quote } from 'lucide-react'

import VideoHero from '../components/VideoHero'
import Reveal from '../components/Reveal'
import Marquee from '../components/Marquee'
import StickyShowcase from '../components/StickyShowcase'
import SectionHeading from '../components/SectionHeading'
import CTASection from '../components/CTASection'
import { fadeUp, scaleIn } from '../lib/motion'
import { stats, bentoFeatures, testimonials } from '../lib/content'

function StatsBand() {
  return (
    <section className="border-y border-line bg-paper py-20">
      <div className="shell">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} variants={fadeUp} transition={{ delay: i * 0.08 }}>
              <div className="font-display text-5xl font-light text-ink">{s.value}</div>
              <p className="mt-3 text-sm leading-relaxed text-slate">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Bento() {
  return (
    <StickyShowcase
      eyebrow="What we do"
      title="A full-service agency, engineered for smooth port calls."
      description="From cargo operations to specialized husbandry, every service is handled by a dedicated team that knows the region intimately."
      features={bentoFeatures}
    />
  )
}

function Testimonials() {
  return (
    <section className="bg-cloud py-30">
      <div className="shell">
        <SectionHeading
          eyebrow="Social proof"
          title="Trusted by the teams that move the world’s cargo."
          description="From chartering directors to technical superintendents, operators rely on Nepmarine for calm, capable execution."
          align="center"
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              variants={scaleIn}
              transition={{ delay: i * 0.1 }}
              className="card flex flex-col p-8"
            >
              <Quote className="h-9 w-9 text-brass/50" />
              <div className="mt-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-brass text-brass" />
                ))}
              </div>
              <p className="mt-5 flex-1 text-base leading-relaxed text-slate">
                “{t.quote}”
              </p>
              <div className="mt-7 flex items-center gap-4 border-t border-line pt-6">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-brass/15 font-display text-lg text-brass-deep">
                  {t.name.charAt(0)}
                </span>
                <div>
                  <div className="font-medium text-ink">{t.name}</div>
                  <div className="text-xs text-slate/80">{t.role}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <VideoHero />

      <div className="border-b border-line bg-paper py-7">
        <Marquee
          items={[
            'Customs Clearance',
            'Bunker Operations',
            'Crew Changes',
            'STS Coordination',
            'Husbandry',
            'Cargo Supervision',
            'Underwater Cleaning',
            'Medical Arrangements',
            'Service Attendance',
            'Provision Supply',
            'Bill of Lading Services',
            'Industry Conference Liaison',
          ]}
        />
      </div>

      <StatsBand />
      <Bento />
      <Testimonials />
      <CTASection />
    </>
  )
}
