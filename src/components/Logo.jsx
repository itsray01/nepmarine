import { Link } from 'react-router-dom'

// tone="light"  -> for dark backgrounds (foam text)
// tone="dark"   -> for light backgrounds (ink text)
// Refined take on the original Nepmarine emblem: an "N" monogram built from a
// brass vertical pair plus a lighter brass "wave" diagonal, set in a ring.
export default function Logo({ className = '', tone = 'light' }) {
  const isLight = tone === 'light'
  return (
    <Link
      to="/"
      className={`group flex items-center gap-3 ${className}`}
      aria-label="Nepmarine Agency home"
    >
      <span className="relative grid h-10 w-10 place-items-center transition-transform duration-500 ease-out-expo group-hover:scale-105">
        <svg viewBox="0 0 40 40" className="h-10 w-10" aria-hidden="true">
          {/* Ring */}
          <circle
            cx="20"
            cy="20"
            r="18.4"
            fill="none"
            className={isLight ? 'stroke-brass/80' : 'stroke-brass'}
            strokeWidth="1.8"
          />
          {/* N verticals */}
          <path
            d="M11.5 11.5 H16 V28.5 H11.5 Z M24 11.5 H28.5 V28.5 H24 Z"
            className="fill-brass"
          />
          {/* N diagonal as a 'wave / sail' accent */}
          <path
            d="M16 11.5 L24 23.5 V28.5 L16 16.5 Z"
            className="fill-brass-light"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-lg font-semibold tracking-tight transition-colors duration-300 ${
            isLight ? 'text-foam' : 'text-ink'
          }`}
        >
          Nepmarine
        </span>
        <span
          className={`font-mono text-[10px] uppercase tracking-[0.32em] transition-colors duration-300 ${
            isLight ? 'text-spray/70' : 'text-slate/70'
          }`}
        >
          Agency
        </span>
      </span>
    </Link>
  )
}
