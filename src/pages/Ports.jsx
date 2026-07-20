import { ArrowRight, Navigation, MapPin, Clock, Ship, Droplets, Building2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import GlobeSection from '../components/GlobeSection'
import Reveal from '../components/Reveal'
import { fadeUp, scaleIn, stagger } from '../lib/motion'
import { ports } from '../lib/content'

const portByCountry = Object.fromEntries(ports.map((p) => [p.country, p]))
const orderByCountry = Object.fromEntries(ports.map((p, i) => [p.country, i + 1]))

const flagByCountry = {
  Singapore: 'sg',
  Malaysia: 'my',
  Indonesia: 'id',
  Vietnam: 'vn',
  Thailand: 'th',
  China: 'cn',
  India: 'in',
  Bangladesh: 'bd',
  Guam: 'gu',
  Philippines: 'ph',
}

const flagUrl = (country) => `https://flagcdn.com/w640/${flagByCountry[country]}.png`

const regions = [
  {
    label: 'Southeast Asia',
    note: 'Our home waters',
    countries: ['Singapore', 'Malaysia', 'Indonesia', 'Vietnam', 'Thailand', 'Philippines'],
  },
  {
    label: 'South Asia',
    note: 'Subcontinent gateways',
    countries: ['India', 'Bangladesh'],
  },
  {
    label: 'East Asia & Pacific',
    note: 'Deep-water & waypoint calls',
    countries: ['China', 'Guam'],
  },
]

function PortCard({ p }) {
  const Icon = p.icon
  return (
    <Reveal variants={scaleIn}>
      <div className="group card relative flex h-full flex-col overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${flagUrl(p.country)})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/85 to-white/55" />
        </div>
        <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brass/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-brass/60 to-transparent transition-transform duration-500 group-hover:scale-x-100" />

        <div className="relative z-10 flex items-start justify-between">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-line bg-cloud text-brass-deep transition-colors duration-300 group-hover:border-brass/40 group-hover:bg-brass/[0.06]">
            <Icon className="h-5 w-5" strokeWidth={1.6} />
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-slate/40">
            {String(orderByCountry[p.country]).padStart(2, '0')}
          </span>
        </div>

        <h3 className="relative z-10 mt-5 font-display text-2xl font-light text-ink">
          {p.country}
        </h3>

        <div className="relative z-10 mt-6 flex items-center gap-2 border-t border-line pt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-slate/60">
          <Navigation className="h-3.5 w-3.5 text-brass-deep/60" strokeWidth={1.6} />
          Full agency coverage
        </div>
      </div>
    </Reveal>
  )
}

const hubHighlights = [
  { icon: Building2, label: 'Global head office & command centre' },
  { icon: Ship, label: 'Dedicated in-house agency services' },
  { icon: Clock, label: '24/7 vessel attendance & clearances' },
  { icon: Droplets, label: 'Coverage of dry and wet docking' },
]

export default function Ports() {
  const hub = portByCountry['Singapore']

  return (
    <>
      <GlobeSection
        eyebrow="Ports covered"
        title="Safeguarding maritime assets across the region and beyond."
        description="Drag to explore our network, then select a port pin for its local address, phone, and email."
        blendTarget="paper"
      />

      {/* Primary hub spotlight — Singapore */}
      <section className="shell pt-16">
        <Reveal variants={scaleIn}>
          <div className="relative overflow-hidden rounded-5xl border border-white/10 bg-deep p-8 sm:p-12">
            <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-brass/15 blur-[110px]" />
            <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-tide/25 blur-[120px]" />

            <div className="relative z-10 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.28em] text-brass-light">
                  <MapPin className="h-3.5 w-3.5" />
                  Primary hub
                </span>
                <h2 className="mt-6 font-display text-display-sm font-light leading-[1.05] text-foam">
                  {hub.country}
                </h2>
                <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.22em] text-brass-light/80">
                  {hub.tagline}
                </p>
                <p className="mt-5 max-w-md text-lg leading-relaxed text-foam/70">
                  {hub.body}
                </p>
              </div>

              <div className="lg:border-l lg:border-white/10 lg:pl-10">
                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-foam/40">
                  Why it matters
                </span>
                <div className="mt-5 flex flex-col gap-3">
                  {hubHighlights.map((h) => {
                    const Icon = h.icon
                    return (
                      <div
                        key={h.label}
                        className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5 transition-colors duration-300 hover:border-brass/30 hover:bg-brass/[0.05]"
                      >
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5 text-brass-light">
                          <Icon className="h-4 w-4" strokeWidth={1.6} />
                        </span>
                        <span className="text-sm leading-snug text-foam/80">{h.label}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Region-grouped country cards */}
      <section className="shell py-16">
        <div className="flex flex-col gap-14">
          {regions.map((region) => (
            <div key={region.label}>
              <Reveal variants={fadeUp} className="flex items-baseline justify-between border-b border-line pb-4">
                <h2 className="font-display text-2xl font-light text-ink">{region.label}</h2>
                <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-brass-deep/70">
                  {region.note}
                </span>
              </Reveal>
              <Reveal
                variants={stagger(0.07)}
                className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
              >
                {region.countries.map((name) => (
                  <PortCard key={name} p={portByCountry[name]} />
                ))}
              </Reveal>
            </div>
          ))}
        </div>

        <Reveal variants={fadeUp} className="mt-16">
          <div className="group relative overflow-hidden rounded-4xl border border-line bg-paper shadow-card">
            {/* grayscale globe backdrop */}
            <div
              className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-90 grayscale transition-transform duration-[1200ms] ease-out-expo group-hover:scale-105"
              style={{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80)',
              }}
            />
            {/* readability scrim — solid at the text, opening up over the globe */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-paper via-paper/90 to-paper/45" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-paper/70 to-transparent" />
            <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-brass/15 blur-[90px] transition-opacity duration-700 group-hover:opacity-90" />
            <div className="pointer-events-none absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-brass via-brass/40 to-transparent" />

            <div className="relative z-10 flex flex-col items-start gap-8 p-8 sm:p-11 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-start gap-5">
                <span className="relative grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-brass/30 bg-brass/[0.07] text-brass-deep">
                  <span className="absolute inset-0 rounded-2xl border border-brass/40 opacity-0 transition-all duration-700 group-hover:scale-125 group-hover:opacity-100" />
                  <MapPin className="h-6 w-6 transition-transform duration-500 group-hover:-translate-y-0.5" strokeWidth={1.6} />
                </span>
                <div>
                  <span className="font-mono text-xs uppercase tracking-[0.32em] text-brass-deep/80 sm:text-sm">
                    Beyond the map
                  </span>
                  <h3 className="mt-2.5 font-display text-3xl font-light leading-tight text-ink sm:text-4xl">
                    Calling at a port not listed here?
                  </h3>
                  <p className="mt-3 max-w-xl text-base leading-relaxed text-slate sm:text-lg">
                    Our regional network extends coverage on request — share your
                    rotation and we’ll confirm attendance, formalities, and a
                    transparent estimate.
                  </p>
                </div>
              </div>

              <Link to="/contact" className="btn-brass shrink-0 group/btn">
                Ask about your port
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  )
}
