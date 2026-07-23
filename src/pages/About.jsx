import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Compass, HeartHandshake, Clock, ShieldCheck, Check, Target, Eye } from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Parallax from '../components/Parallax'
import SectionHeading from '../components/SectionHeading'
import PhaseJourney from '../components/PhaseJourney'
import { fadeUp, scaleIn, stagger } from '../lib/motion'
import { stats } from '../lib/content'

const values = [
  {
    icon: Clock,
    title: 'On alert, around the clock',
    body: 'Our team monitors every port call 24/7 and responds the moment your vessel needs us — day or night, across every time zone.',
  },
  {
    icon: HeartHandshake,
    title: 'Reliability first',
    body: 'We treat every port call as if our own vessel were on the line. Steady, prepared, and accountable.',
  },
  {
    icon: ShieldCheck,
    title: 'Client-protective',
    body: 'Economic disbursements and husbandry services, delivered with your interests at heart.',
  },
  {
    icon: Compass,
    title: 'Local Expertise',
    body: 'Deep knowledge of ports across 13 countries, built on real relationships.',
  },
]

const missionVision = [
  {
    icon: Target,
    eyebrow: 'Our mission',
    title: 'Mission',
    body: 'Our strength lies in our continuous efforts to reduce our principals’ operational costs through efficient, cost-effective solutions and timely, transparent communication, providing confidence, assurance and peace of mind throughout each appointment.',
  },
  {
    icon: Eye,
    eyebrow: 'Our vision',
    title: 'Vision',
    body: 'To be a leading one-stop maritime services provider in the region, redefining ship agency through efficiency, innovation, integrity and a client-focused approach.',
  },
]

const whyChooseUs = [
  'Reliable and seamless cargo operations',
  'Specialized husbandry support',
  'Tailored services for every operation',
  'Experienced and dedicated team',
  'Consistent service quality',
  'Efficient response to client needs',
]

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Founded in Singapore. Trusted across Multiple Regions."
        description="Nepmarine Agency was founded in 2024 to give charterers and ship owners a dependable, modern partner that blends regional expertise with a relentless commitment to getting things done."
      >
        <Link to="/contact" className="btn-brass">
          Appoint Us
          <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHero>

      {/* Story */}
      <section className="shell grid gap-14 py-20 lg:grid-cols-2 lg:items-stretch">
        <Reveal variants={fadeUp} className="space-y-6 text-lg leading-relaxed text-slate">
          <p>
            Nepmarine Agency is a Singapore-based shipping and port agency committed to
            delivering reliable, efficient and customer-focused maritime services.
            Established in 2024, the company underwent a new phase of growth following a
            strategic restructuring in 2026.
          </p>
          <p>
            Under new leadership, Nepmarine has been adopted a modern and
            responsive service approach, prioritising long-term partnerships and customer
            loyalty over short-term profit.
          </p>
          <p className="text-slate/75">
            Our dynamic team provides comprehensive support across the region, covering
            everything from port formalities to tailored business arrangements. With
            experience handling tankers, LNG carriers, general cargo vessels and naval
            vessels, we ensure smooth and efficient operations throughout every port call.
          </p>
        </Reveal>

        <Parallax speed={36} className="h-full">
          <Reveal variants={scaleIn} className="relative h-full overflow-hidden rounded-5xl bg-white/10 p-[1.5px]">
            {/* animated brass border — a highlight sweeps around the panel edge */}
            <motion.div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[170%] -translate-x-1/2 -translate-y-1/2"
              style={{
                background:
                  'conic-gradient(from 0deg, transparent 0deg, rgba(201,162,90,0.55) 45deg, transparent 120deg)',
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 9, repeat: Infinity, ease: 'linear' }}
            />
            <div className="relative flex h-full flex-col justify-center overflow-hidden rounded-[calc(2.75rem-1.5px)] bg-deep p-12">
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brass/15 blur-[90px]" />
              <div className="relative grid grid-cols-2 gap-x-10 gap-y-12">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="font-display text-5xl font-light text-gradient-foam">
                      {s.value}
                    </div>
                    <p className="mt-3 text-base leading-relaxed text-foam/55">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </Parallax>
      </section>

      {/* Mission & Vision */}
      <section className="relative bg-cloud py-30">
        <div className="shell">
          <SectionHeading
            eyebrow="Mission & vision"
            title="We see our clients’ assurance as our ultimate achievement."
            align="center"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {missionVision.map((m) => {
              const Icon = m.icon
              return (
                <Reveal
                  key={m.title}
                  variants={scaleIn}
                  className="group card relative overflow-hidden p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover sm:p-10"
                >
                  <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-brass/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-brass/60 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
                  <Icon
                    className="pointer-events-none absolute -bottom-8 -right-8 h-44 w-44 text-brass/[0.06]"
                    strokeWidth={1}
                  />

                  <div className="relative z-10 flex items-center gap-4">
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-line bg-cloud text-brass-deep transition-colors duration-300 group-hover:border-brass/40 group-hover:bg-brass/[0.06]">
                      <Icon className="h-6 w-6" strokeWidth={1.5} />
                    </span>
                    <span className="font-mono text-lg uppercase tracking-[0.22em] text-brass-deep/80">
                      {m.eyebrow}
                    </span>
                  </div>

                  <p className="relative z-10 mt-6 text-base leading-relaxed text-slate">
                    {m.body}
                  </p>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="shell py-20">
        <SectionHeading
          eyebrow="Why Nepmarine"
          title="The reasons owners and charterers appoint us."
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
              className="group flex items-start gap-3 rounded-2xl border border-line bg-cloud px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-brass/40 hover:bg-white hover:shadow-card"
            >
              <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brass/15 text-brass-deep transition-all duration-300 group-hover:scale-110 group-hover:bg-brass/25">
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
          eyebrow="Our reference points"
          title="The expectations of our agent behind every port call."
        />
        <Reveal variants={stagger(0.08)} className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => {
            const Icon = v.icon
            return (
              <Reveal
                key={v.title}
                variants={scaleIn}
                className="group card relative overflow-hidden p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-brass/70 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
                <span className="grid h-12 w-12 place-items-center rounded-2xl border border-line bg-cloud text-brass-deep transition-all duration-300 group-hover:-translate-y-1 group-hover:border-brass/40 group-hover:bg-brass/[0.06]">
                  <Icon className="h-6 w-6" strokeWidth={1.6} />
                </span>
                <h3 className="mt-6 font-display text-xl font-light text-ink">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">{v.body}</p>
              </Reveal>
            )
          })}
        </Reveal>
      </section>

      {/* Process — Appoint · Assure · Achieve */}
      <section className="relative bg-cloud py-30">
        <div className="shell">
          <SectionHeading
            eyebrow="How we work"
            title="Three phases: Appoint, Assure, Achieve."
            description="Scroll through each phase to see how we guide your vessel from nomination to departure."
            align="center"
          />
          <PhaseJourney />
        </div>
      </section>
    </>
  )
}
