import { useState } from 'react'
import { Phone, Mail, MapPin, Send, Check, Clock } from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { fadeUp, scaleIn, stagger } from '../lib/motion'

const details = [
  { icon: Phone, label: 'Call us', value: '+65 6957 7364', href: 'tel:+6569577364' },
  {
    icon: Mail,
    label: 'Email us',
    value: 'agency@nepmarine.com',
    href: 'mailto:agency@nepmarine.com',
  },
  {
    icon: MapPin,
    label: 'We operate in',
    value: '13 Countries',
  },
  { icon: Clock, label: 'Availability', value: '24 / 7 operational support' },
]

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    vessel: '',
    message: '',
  })

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    // Compose a mailto so the message is actually deliverable without a backend.
    const subject = encodeURIComponent(
      `Enquiry from ${form.name || 'a prospective client'}`
    )
    const body = encodeURIComponent(
      `Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\nVessel / Route: ${form.vessel}\n\n${form.message}`
    )
    window.location.href = `mailto:agency@nepmarine.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  const inputClass =
    'w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-foam placeholder:text-foam/35 outline-none transition-colors duration-200 focus:border-brass/60 focus:bg-white/[0.06]'

  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Let’s plan your next port call."
        description="Tell us about your vessel and route. Our team responds quickly, day or night, serving 13 countries."
      />

      <section className="shell grid gap-10 pb-24 lg:grid-cols-[1fr_1.2fr] lg:items-start">
        {/* Details */}
        <Reveal variants={stagger(0.1)} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {details.map((d) => {
            const Icon = d.icon
            const Wrapper = d.href ? 'a' : 'div'
            return (
              <Reveal
                key={d.label}
                variants={fadeUp}
                className="group card p-6 transition-shadow duration-300 hover:shadow-card-hover"
              >
                <Wrapper
                  {...(d.href ? { href: d.href } : {})}
                  className="flex items-start gap-4"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-line bg-cloud text-brass-deep">
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <div>
                    <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-brass-deep/80">
                      {d.label}
                    </div>
                    <div className="mt-1.5 text-base text-ink">{d.value}</div>
                  </div>
                </Wrapper>
              </Reveal>
            )
          })}
        </Reveal>

        {/* Form */}
        <Reveal
          variants={scaleIn}
          className="relative overflow-hidden rounded-5xl border border-white/10 bg-deep p-8 sm:p-10"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-brass/10 blur-[100px]" />

          {sent ? (
            <div className="relative z-10 flex min-h-[24rem] flex-col items-center justify-center text-center">
              <span className="grid h-16 w-16 place-items-center rounded-full bg-brass/20 text-brass-light">
                <Check className="h-8 w-8" />
              </span>
              <h3 className="mt-6 font-display text-3xl font-light text-foam">
                Your message is on its way.
              </h3>
              <p className="mt-3 max-w-sm text-foam/60">
                We’ve opened your email client to send the enquiry. Prefer to call?
                Reach us anytime at +65 6957 7364.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="btn-ghost mt-8"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="relative z-10 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-foam/60" htmlFor="name">
                    Full name
                  </label>
                  <input
                    id="name"
                    required
                    value={form.name}
                    onChange={update('name')}
                    className={inputClass}
                    placeholder="Jane Mariner"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-foam/60" htmlFor="company">
                    Company
                  </label>
                  <input
                    id="company"
                    value={form.company}
                    onChange={update('company')}
                    className={inputClass}
                    placeholder="Ocean Lines Ltd."
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-foam/60" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={update('email')}
                    className={inputClass}
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-foam/60" htmlFor="vessel">
                    Vessel / Route
                  </label>
                  <input
                    id="vessel"
                    value={form.vessel}
                    onChange={update('vessel')}
                    className={inputClass}
                    placeholder="MV Example · Singapore"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm text-foam/60" htmlFor="message">
                  How can we help?
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={update('message')}
                  className={`${inputClass} resize-none`}
                  placeholder="Tell us about your port call, cargo, or husbandry needs…"
                />
              </div>

              <button type="submit" className="btn-brass w-full sm:w-auto">
                <Send className="h-4 w-4" />
                Send enquiry
              </button>
            </form>
          )}
        </Reveal>
      </section>
    </>
  )
}
