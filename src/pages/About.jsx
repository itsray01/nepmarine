import { Link } from 'react-router-dom'
import { ArrowRight, Compass, HeartHandshake, Gauge, ShieldCheck } from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Parallax from '../components/Parallax'
import SectionHeading from '../components/SectionHeading'
import CTASection from '../components/CTASection'
import { fadeUp, scaleIn, stagger } from '../lib/motion'
import { stats, process } from '../lib/content'

const values = [
  {
    icon: HeartHandshake,
    title: 'Reliability first',
    body: 'We treat every port call as if our own vessel were on the line. Calm, prepared, and accountable.',
  },
  {
    icon: Gauge,
    title: 'Speed without shortcuts',
    body: 'Fast clearances and tight turnarounds, never at the expense of compliance or quality.',
  },
  {
    icon: ShieldCheck,
    title: 'Owner-protective',
    body: 'Transparent disbursements and husbandry handled with discretion and your interests at heart.',
  },
  {
    icon: Compass,
    title: 'Local mastery',
    body: 'Deep knowledge of ports across Singapore, Malaysia, and Indonesia, built on real relationships.',
  },
]

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Built in Singapore. Trusted across the straits."
        description="Nepmarine Agency was founded in 2024 to give charterers and ship owners a dependable, modern partner that blends regional expertise with a relentless commitment to getting things done."
      >
        <Link to="/contact" className="btn-brass">
          Work with us
          <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHero>

      {/* Story */}
      <section className="shell grid gap-14 py-20 lg:grid-cols-2 lg:items-center">
        <Reveal variants={fadeUp} className="space-y-6 text-lg leading-relaxed text-slate">
          <p>
            Whether you require a reliable agent for seamless cargo operations or an
            experienced partner for owner-protective and husbandry matters, we deliver
            exceptional service tailored to your operations.
          </p>
          <p>
            Our dedicated team combines quality, innovation, and competitive pricing to
            keep your vessels moving, from the world’s busiest transshipment hub in
            Singapore to key ports across Malaysia and Indonesia.
          </p>
          <p className="text-slate/75">
            We exist to remove friction from your port calls, so your crews stay safe,
            your cargo stays protected, and your schedule stays intact.
          </p>
        </Reveal>

        <Parallax speed={36}>
          <Reveal variants={scaleIn} className="relative overflow-hidden rounded-5xl border border-white/10 bg-deep p-10">
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brass/15 blur-[90px]" />
            <div className="grid grid-cols-2 gap-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-4xl font-light text-gradient-foam">
                    {s.value}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-foam/55">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </Parallax>
      </section>

      {/* Values */}
      <section className="shell py-20">
        <SectionHeading
          eyebrow="What guides us"
          title="The principles behind every port call."
        />
        <Reveal variants={stagger(0.08)} className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => {
            const Icon = v.icon
            return (
              <Reveal
                key={v.title}
                variants={scaleIn}
                className="group card p-7 transition-shadow duration-300 hover:shadow-card-hover"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl border border-line bg-cloud text-brass-deep transition-transform duration-300 group-hover:-translate-y-1">
                  <Icon className="h-6 w-6" strokeWidth={1.6} />
                </span>
                <h3 className="mt-6 font-display text-xl font-light text-ink">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">{v.body}</p>
              </Reveal>
            )
          })}
        </Reveal>
      </section>

      {/* Process */}
      <section className="relative bg-cloud py-30">
        <div className="shell">
          <SectionHeading
            eyebrow="How we work"
            title="A clear course, from nomination to departure."
            align="center"
          />
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => {
              const Icon = p.icon
              return (
                <Reveal
                  key={p.title}
                  variants={fadeUp}
                  transition={{ delay: i * 0.08 }}
                  className="card relative p-7"
                >
                  <span className="font-mono text-xs text-brass-deep/70">
                    0{i + 1}
                  </span>
                  <span className="mt-5 grid h-12 w-12 place-items-center rounded-2xl border border-line bg-cloud text-brass-deep">
                    <Icon className="h-6 w-6" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-6 font-display text-lg font-light text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate">{p.body}</p>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
