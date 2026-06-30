import { motion } from 'framer-motion'
import { fadeUp } from '../lib/motion'

// Scroll-triggered reveal wrapper. Defaults to a cinematic fade-up.
export default function Reveal({
  children,
  variants = fadeUp,
  className = '',
  as = 'div',
  amount = 0.25,
  once = true,
  ...rest
}) {
  const MotionTag = motion[as] || motion.div
  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
