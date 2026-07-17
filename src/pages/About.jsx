import { Link } from 'react-router-dom'
import { ArrowRight, Compass, HeartHandshake, Gauge, ShieldCheck, Check } from 'lucide-react'
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
    body: 'Deep knowledge of ports across 10 countries, built on real relationships.',
  },
]

const missionVision = [
  {
    title: 'Mission',
    body: 'Our strength lies in our effort to continuously search for new and innovative ways to service our clients better. We are determined to deliver the best services, in terms of work quality, responsiveness to client needs, and competitive pricing.',
  },
  {
    title: 'Vision',
    body: 'To be the preferred maritime agency recognized for pioneering innovation, exceeding client expectations, and delivering unparalleled service quality, responsiveness, and value in every aspect of our operations.',
  },
]

const whyChooseUs = [
  'Reliable and seamless cargo operations',
  'Specialized husbandry support',
  'Tailored services for every operation',
  'Experienced and dedicated team',
  'Free guidance to clients',
  'Consistent service quality',
  'Efficient response to client needs',
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
            Founded in Singapore in 2024, Nepmarine delivers reliable agency services to
            charterers and ship owners, combining quality, innovation, and competitive
            pricing to support seamless maritime operations.
          </p>
          <p>
            We proudly function as trusted local ship agents for tankers calling at ports
            across 10 countries. Our expertise lies in overseeing the seamless loading and
            discharging of petroleum cargoes, ensuring smooth and efficient operations at
            every step.
          </p>
          <p className="text-slate/75">
            Whether you require a reliable agent for seamless cargo operations or an
            experienced agent for owner-protective and husbandry matters, we deliver
            exceptional service tailored to your operations.
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

      {/* Mission & Vision */}
      <section className="relative bg-cloud py-30">
        <div className="shell">
          <SectionHeading
            eyebrow="Mission & vision"
            title="We see our clients’ success as our ultimate achievement."
            align="center"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {missionVision.map((m) => (
              <Reveal
                key={m.title}
                variants={scaleIn}
                className="card p-8 sm:p-10"
              >
                <h3 className="font-display text-2xl font-light text-ink">{m.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-slate">{m.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="shell py-20">
        <SectionHeading
          eyebrow="Why choose us"
          title="The reasons owners and charterers rely on us."
        />
        <Reveal
          variants={stagger(0.06)}
          className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {whyChooseUs.map((reason) => (
            <Reveal
              key={reason}
              as="div"
              variants={fadeUp}
              className="flex items-start gap-3 rounded-2xl border border-line bg-cloud px-5 py-4"
            >
              <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brass/15 text-brass-deep">
                <Check className="h-3.5 w-3.5" />
              </span>
              <span className="text-sm leading-snug text-ink/80">{reason}</span>
            </Reveal>
          ))}
        </Reveal>
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
