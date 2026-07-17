import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, PhoneCall } from 'lucide-react'
import Logo from './Logo'
import { expoOut } from '../lib/motion'

const NAV = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/ports', label: 'Ports Covered' },
  { to: '/team', label: 'Team' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [overGlobe, setOverGlobe] = useState(true)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const isPorts = location.pathname === '/ports'
  const hasDarkHero = isHome || isPorts

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Dark nav while over a full-screen dark hero (home video or ports globe).
  useEffect(() => {
    if (!hasDarkHero) {
      setOverGlobe(false)
      return
    }

    const onScroll = () => {
      const h = Math.max(window.innerHeight, 1)
      setOverGlobe(window.scrollY < h * 0.92)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [hasDarkHero])

  // Sync page chrome so nothing white bleeds above/behind the fixed header.
  useEffect(() => {
    const root = document.documentElement
    const body = document.body
    const dark = hasDarkHero && overGlobe

    root.style.backgroundColor = dark ? '#15171b' : '#ffffff'
    body.style.backgroundColor = dark ? '#15171b' : '#ffffff'

    return () => {
      root.style.backgroundColor = ''
      body.style.backgroundColor = ''
    }
  }, [hasDarkHero, overGlobe])

  const isDark = hasDarkHero && overGlobe

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: expoOut }}
        className={`border-b transition-colors duration-500 ease-out-expo ${
          isDark
            ? 'border-white/10 bg-ink'
            : 'border-line bg-paper'
        }`}
      >
        <nav className="shell flex h-20 items-center justify-between gap-6">
          <Logo tone={isDark ? 'light' : 'dark'} heightClass="h-16" />

          <ul className="hidden items-center gap-9 lg:flex">
            {NAV.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `link-underline text-sm font-medium tracking-wide transition-colors duration-200 ${
                      isDark
                        ? isActive
                          ? 'text-brass-light'
                          : 'text-foam/70 hover:text-foam'
                        : isActive
                          ? 'text-brass-deep'
                          : 'text-slate hover:text-ink'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <Link to="/contact" className="btn-brass hidden sm:inline-flex">
              <PhoneCall className="h-4 w-4" />
              Book a Call
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className={`grid h-11 w-11 place-items-center rounded-full border transition-colors lg:hidden ${
                isDark
                  ? 'border-white/20 text-foam'
                  : 'border-ink/15 text-ink'
              }`}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-20 z-40 bg-ink/97 backdrop-blur-2xl lg:hidden"
          >
            <motion.ul
              className="shell flex flex-col gap-2 py-10"
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.06 } } }}
            >
              {NAV.map((item) => (
                <motion.li
                  key={item.to}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    show: { opacity: 1, x: 0 },
                  }}
                >
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) =>
                      `block border-b border-white/5 py-4 font-display text-3xl tracking-tight ${
                        isActive ? 'text-brass-light' : 'text-foam'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </motion.li>
              ))}
              <motion.li
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: { opacity: 1, y: 0 },
                }}
                className="pt-6"
              >
                <Link to="/contact" className="btn-brass w-full">
                  <PhoneCall className="h-4 w-4" />
                  Book a Call
                </Link>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
