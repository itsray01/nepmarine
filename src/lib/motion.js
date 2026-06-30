// Shared spring-physics easing + reveal variants for a cohesive feel.

export const spring = {
  type: 'spring',
  stiffness: 120,
  damping: 18,
  mass: 0.9,
}

export const softSpring = {
  type: 'spring',
  stiffness: 80,
  damping: 20,
  mass: 1,
}

// Cinematic expo-out curve used across non-spring transitions.
export const expoOut = [0.16, 1, 0.3, 1]

export const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: expoOut },
  },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1, ease: expoOut } },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92, y: 24 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: spring,
  },
}

export const stagger = (amount = 0.12, delay = 0) => ({
  hidden: {},
  show: {
    transition: { staggerChildren: amount, delayChildren: delay },
  },
})
