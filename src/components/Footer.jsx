import { Link } from 'react-router-dom'
import { ArrowUpRight, ArrowUp, Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import Logo from './Logo'
import Reveal from './Reveal'

const COLUMNS = [
  {
    title: 'Explore',
    links: [
      { label: 'About Us', to: '/about' },
      { label: 'Services', to: '/services' },
      { label: 'Ports Covered', to: '/ports' },
      { label: 'Contact Us', to: '/contact' },
    ],
  },
  {
    title: 'Ports',
    links: [
      { label: 'Singapore', to: '/ports' },
      { label: 'Malaysia', to: '/ports' },
      { label: 'Indonesia', to: '/ports' },
    ],
  },
]

export default function Footer() {
  const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-abyss">
      {/* Brass hairline accent + ambient glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brass/50 to-transparent" />
      <div className="pointer-events-none absolute -top-44 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-tide/20 blur-[130px]" />

      <div className="shell relative">
        {/* Top band */}
        <Reveal className="grid gap-12 py-20 lg:grid-cols-[1.5fr_1fr_1fr_1.1fr]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-6 text-sm leading-relaxed text-foam/60">
              Founded in Singapore in 2024, Nepmarine Agency delivers reliable ship
              agency support to charterers and owners across Singapore, Malaysia, and
              Indonesia.
            </p>

            <span className="mt-7 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-foam/70">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brass/70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brass" />
              </span>
              Operating 24/7 across Southeast Asia
            </span>

            <div className="mt-7">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-foam/70 transition-colors hover:border-brass hover:text-brass-light"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="font-mono text-xs uppercase tracking-[0.28em] text-brass-light">
                {col.title}
              </h4>
              <ul className="mt-6 space-y-3.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="group inline-flex items-center gap-1 text-sm text-foam/65 transition-colors hover:text-foam"
                    >
                      {l.label}
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.28em] text-brass-light">
              Get in touch
            </h4>
            <ul className="mt-6 space-y-3">
              <li>
                <a
                  href="tel:+6569577364"
                  className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-foam/75 transition-colors hover:border-brass/40 hover:text-foam"
                >
                  <Phone className="h-4 w-4 text-spray" />
                  +65 6957 7364
                </a>
              </li>
              <li>
                <a
                  href="mailto:agency@nepmarine.com"
                  className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-foam/75 transition-colors hover:border-brass/40 hover:text-foam"
                >
                  <Mail className="h-4 w-4 text-spray" />
                  agency@nepmarine.com
                </a>
              </li>
              <li className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-foam/75">
                <MapPin className="h-4 w-4 text-spray" />
                Singapore · Malaysia · Indonesia
              </li>
            </ul>
          </div>
        </Reveal>

        {/* Embossed wordmark watermark */}
        <div className="relative select-none border-t border-white/5 pt-8" aria-hidden="true">
          <span className="block bg-gradient-to-b from-foam/[0.07] to-transparent bg-clip-text font-display text-[clamp(3rem,15vw,13rem)] font-light leading-[0.8] tracking-tight text-transparent">
            Nepmarine
          </span>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-start justify-between gap-5 border-t border-white/10 py-8 text-xs text-foam/45 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Nepmarine Agency. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="transition-colors hover:text-foam/80">
              Terms of Use
            </a>
            <a href="#" className="transition-colors hover:text-foam/80">
              Privacy Policy
            </a>
            <button
              type="button"
              onClick={toTop}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3.5 py-1.5 text-foam/65 transition-colors hover:border-brass hover:text-brass-light"
            >
              Back to top
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
