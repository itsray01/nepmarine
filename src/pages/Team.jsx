import { Link } from 'react-router-dom'
import { ArrowRight, Mail, Contact, Link2 } from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import CTASection from '../components/CTASection'
import { fadeUp, scaleIn, stagger } from '../lib/motion'
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

        <Reveal variants={fadeUp} className="mt-20">
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
