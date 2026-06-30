import { Link } from 'react-router-dom'
import { PhoneCall, ArrowRight } from 'lucide-react'
import Reveal from './Reveal'
import Parallax from './Parallax'

export default function CTASection({
  title = 'Choose Nepmarine for all your ship agency needs',
  subtitle = 'Tell us your next port call and we’ll take care of the rest, from clearances and cargo to crew and everything in between.',
  secondaryLabel = 'Our story',
  secondaryTo = '/about',
}) {
  return (
    <section className="shell py-30">
      <Reveal className="relative overflow-hidden rounded-5xl border border-white/10 bg-deep px-8 py-20 text-center sm:px-16">
        <div className="pointer-events-none absolute inset-0 grain opacity-[0.06]" />
        <Parallax speed={28} className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-tide/30 blur-[110px]" >
          <span />
        </Parallax>
        <div className="pointer-events-none absolute -bottom-28 -left-16 h-80 w-80 rounded-full bg-brass/15 blur-[120px]" />

        <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-7">
          <span className="eyebrow eyebrow-invert">
            <span className="h-px w-8 bg-brass/70" />
            Set your course
          </span>
          <h2 className="font-display text-display-sm font-light text-balance text-foam">
            {title}
          </h2>
          <p className="max-w-xl text-lg leading-relaxed text-foam/60">{subtitle}</p>
          <div className="mt-2 flex flex-col items-center gap-4 sm:flex-row">
            <Link to="/contact" className="btn-brass">
              <PhoneCall className="h-4 w-4" />
              Book a Call
            </Link>
            <Link to={secondaryTo} className="btn-ghost-invert">
              {secondaryLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
