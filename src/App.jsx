import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import { expoOut } from './lib/motion'

import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Ports from './pages/Ports'
import Team from './pages/Team'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function Page({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.5, ease: expoOut }}
    >
      {children}
    </motion.main>
  )
}

export default function App() {
  const location = useLocation()
  return (
    <div className="relative min-h-screen bg-paper">
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Page><Home /></Page>} />
          <Route path="/about" element={<Page><About /></Page>} />
          <Route path="/services" element={<Page><Services /></Page>} />
          <Route path="/ports" element={<Page><Ports /></Page>} />
          <Route path="/team" element={<Page><Team /></Page>} />
          <Route path="/contact" element={<Page><Contact /></Page>} />
          <Route path="*" element={<Page><NotFound /></Page>} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  )
}
