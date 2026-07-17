import { Link } from 'react-router-dom'

// tone="light" -> for dark backgrounds (logo stays white)
// tone="dark"  -> for light backgrounds (logo inverted to dark)
export default function Logo({ className = '', tone = 'light', heightClass = 'h-11' }) {
  const isLight = tone === 'light'
  return (
    <Link
      to="/"
      className={`group inline-flex items-center ${className}`}
      aria-label="Nepmarine Agency home"
    >
      <img
        src="/nepmarine-logo-white.png"
        alt="Nepmarine Agency"
        className={`${heightClass} w-auto transition-transform duration-500 ease-out-expo group-hover:scale-105 ${
          isLight ? '' : 'invert'
        }`}
      />
    </Link>
  )
}
