import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

// Gentle vertical parallax tied to scroll position.
// `speed` > 0 moves slower than scroll (drifts up), negative drifts down.
export default function Parallax({ children, speed = 40, className = '' }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [speed, -speed])

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  )
}
