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

function MemberCard({ m, featured = false }) {
  return (
    <Reveal
      variants={scaleIn}
      className={`group card flex flex-col p-7 transition-shadow duration-300 hover:shadow-card-hover ${
        featured ? 'border-brass/30' : ''
      }`}
    >
      <div className="flex items-center gap-4">
        {m.image ? (
          <img
            src={m.image}
            alt={m.name}
            loading="lazy"
            className={`${featured ? 'h-20 w-20' : 'h-16 w-16'} rounded-2xl object-cover`}
          />
        ) : (
          <span
            className={`grid place-items-center rounded-2xl bg-gradient-to-br from-tide to-deep font-display font-light text-foam ${
              featured ? 'h-20 w-20 text-2xl' : 'h-16 w-16 text-xl'
            }`}
          >
            {initials(m.name)}
          </span>
        )}
        <div>
          <h3
            className={`font-display font-light text-ink ${
              featured ? 'text-2xl' : 'text-xl'
            }`}
          >
            {m.name}
          </h3>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-brass-deep/80">
            {m.role}
          </p>
        </div>
      </div>

      {m.focus && (
        <p className="mt-6 text-sm leading-relaxed text-slate">{m.focus}</p>
      )}

      <div className="mt-6 flex items-center gap-2.5 border-t border-line pt-5">
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
        {/* Team — 3 x 2 grid, General Manager first */}
        <Reveal
          variants={stagger(0.08)}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {members.map((m, i) => (
            <MemberCard key={m.name} m={m} featured={i === 0} />
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
