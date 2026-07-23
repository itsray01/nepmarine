import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Mail, Contact, Link2, Send, Check, Anchor } from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { scaleIn, stagger } from '../lib/motion'
import { generalManager, teamGroups } from '../lib/content'

function initials(name) {
  return name
    .split(' ')
    .map((p) => p[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

function IconLink({ href, icon: Icon, label, external = false }) {
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      className="grid h-9 w-9 place-items-center rounded-full border border-line text-slate transition-colors duration-200 hover:border-brass-deep hover:text-brass-deep"
    >
      <Icon className="h-4 w-4" strokeWidth={1.7} />
    </a>
  )
}

function MemberCard({ m, featured = false, className = '' }) {
  return (
    <Reveal
      variants={scaleIn}
      className={`group card relative flex flex-col p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover ${
        featured ? 'border-brass/30' : ''
      } ${className}`}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-brass/70 to-transparent transition-transform duration-500 group-hover:scale-x-100" />

      <div className="flex items-center gap-5">
        {m.image ? (
          <img
            src={m.image}
            alt={m.name}
            loading="lazy"
            className="h-20 w-20 rounded-2xl object-cover"
          />
        ) : (
          <span className="grid h-20 w-20 place-items-center rounded-2xl bg-gradient-to-br from-tide to-deep font-display text-2xl font-light text-foam">
            {initials(m.name)}
          </span>
        )}
        <div>
          <h3
            className={`font-display font-normal leading-snug text-ink ${
              featured ? 'text-[1.7rem]' : 'text-2xl'
            }`}
          >
            {m.name}
          </h3>
          <p className="mt-1 flex items-center gap-2 font-mono text-sm uppercase tracking-[0.16em] text-brass-deep/80">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brass" />
            {m.role}
          </p>
        </div>
      </div>

      {m.focus && (
        <p className="mt-6 text-sm leading-relaxed text-slate">{m.focus}</p>
      )}

      <div className="mt-6 flex items-center justify-end gap-2.5 border-t border-line pt-5">
        {m.email && (
          <IconLink href={`mailto:${m.email}`} icon={Mail} label={`Email ${m.name}`} />
        )}
        {m.businessCard && (
          <IconLink
            href={m.businessCard}
            icon={Contact}
            label={`${m.name} business card`}
            external
          />
        )}
        {m.linktree && (
          <IconLink href={m.linktree} icon={Link2} label="Nepmarine Linktree" external />
        )}
      </div>
    </Reveal>
  )
}

const members = [generalManager, ...teamGroups.flatMap((g) => g.members)]

const perks = [
  'Hands-on exposure across the full ship-agency lifecycle',
  'A tight, supportive crew that shares knowledge openly',
  'Real responsibility and room to grow, fast',
]

const careerInputClass =
  'w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-foam placeholder:text-foam/35 outline-none transition-colors duration-200 focus:border-brass/60 focus:bg-white/[0.06]'

function CareersForm() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    message: '',
  })

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(
      `Career enquiry from ${form.name || 'a prospective crew member'}`
    )
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nPosition of interest: ${form.position}\n\n${form.message}`
    )
    window.location.href = `mailto:agency@nepmarine.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <Reveal
      variants={scaleIn}
      className="relative overflow-hidden rounded-5xl border border-white/10 bg-deep p-8 sm:p-12"
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brass/12 blur-[110px]" />
      <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-tide/20 blur-[120px]" />

      <div className="relative z-10 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-14">
        {/* Left — invitation */}
        <div>
          <span className="eyebrow eyebrow-invert">
            <span className="h-px w-10 bg-brass/70" />
            Join the crew
          </span>
          <h2 className="mt-6 font-display text-display-sm font-light leading-[1.05] text-balance text-foam">
            We are always looking for capable maritime talent.
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-foam/65">
            If you live and breathe ship operations across the Asia-Pacific,
            we would love to hear from you.
          </p>
          <ul className="mt-8 flex flex-col gap-3.5">
            {perks.map((perk) => (
              <li key={perk} className="flex items-start gap-3 text-foam/75">
                <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full border border-brass/40 bg-brass/10 text-brass-light">
                  <Anchor className="h-2.5 w-2.5" strokeWidth={2} />
                </span>
                <span className="text-sm leading-relaxed">{perk}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right — form */}
        {sent ? (
          <div className="flex min-h-[22rem] flex-col items-center justify-center rounded-4xl border border-white/10 bg-white/[0.02] p-8 text-center">
            <span className="grid h-16 w-16 place-items-center rounded-full bg-brass/20 text-brass-light">
              <Check className="h-8 w-8" />
            </span>
            <h3 className="mt-6 font-display text-2xl font-light text-foam">
              Thanks for reaching out.
            </h3>
            <p className="mt-3 max-w-sm text-foam/60">
              We’ve opened your email client to send your details. Our team will
              be in touch if there’s a fit.
            </p>
            <button type="button" onClick={() => setSent(false)} className="btn-ghost mt-8">
              Submit another
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-foam/60" htmlFor="career-name">
                  Full name
                </label>
                <input
                  id="career-name"
                  required
                  value={form.name}
                  onChange={update('name')}
                  className={careerInputClass}
                  placeholder="Jane Mariner"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-foam/60" htmlFor="career-email">
                  Email
                </label>
                <input
                  id="career-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={update('email')}
                  className={careerInputClass}
                  placeholder="you@email.com"
                />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-foam/60" htmlFor="career-phone">
                  Phone
                </label>
                <input
                  id="career-phone"
                  value={form.phone}
                  onChange={update('phone')}
                  className={careerInputClass}
                  placeholder="+65 0000 0000"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-foam/60" htmlFor="career-position">
                  Position of interest
                </label>
                <input
                  id="career-position"
                  value={form.position}
                  onChange={update('position')}
                  className={careerInputClass}
                  placeholder="Operations, Commercial…"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm text-foam/60" htmlFor="career-message">
                Tell us about yourself
              </label>
              <textarea
                id="career-message"
                required
                rows={4}
                value={form.message}
                onChange={update('message')}
                className={`${careerInputClass} resize-none`}
                placeholder="A little about your experience and what you’re looking for…"
              />
            </div>

            <button type="submit" className="btn-brass w-full sm:w-auto">
              <Send className="h-4 w-4" />
              Submit application
            </button>
          </form>
        )}
      </div>
    </Reveal>
  )
}

export default function Team() {
  return (
    <>
      <PageHero
        eyebrow="Our people"
        title="The team behind every successful port call."
        description="A close-knit team of maritime specialists with strong regional expertise, dedicated to caring for every vessel as if it were their own."
      >
        <Link to="/contact" className="btn-brass">
          Work with us
          <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHero>

      <section className="shell pb-24">
        {/* Team — top row of 3, bottom row of 2 centered */}
        <Reveal
          variants={stagger(0.08)}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6"
        >
          {members.map((m, i) => (
            <MemberCard
              key={m.name}
              m={m}
              featured={i === 0}
              className={`lg:col-span-2 ${i === 3 ? 'lg:col-start-2' : ''}`}
            />
          ))}
        </Reveal>

        <div className="mt-20">
          <CareersForm />
        </div>
      </section>
    </>
  )
}
