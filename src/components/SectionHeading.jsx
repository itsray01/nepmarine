import Reveal from './Reveal'
import { stagger, fadeUp } from '../lib/motion'

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  invert = false,
  className = '',
}) {
  const alignment =
    align === 'center' ? 'items-center text-center mx-auto' : 'items-start'
  return (
    <Reveal
      variants={stagger(0.12)}
      className={`flex max-w-2xl flex-col gap-5 ${alignment} ${className}`}
    >
      {eyebrow && (
        <Reveal as="span" variants={fadeUp} className={`eyebrow ${invert ? 'eyebrow-invert' : ''}`}>
          <span className="h-px w-8 bg-brass/70" />
          {eyebrow}
        </Reveal>
      )}
      <Reveal
        as="h2"
        variants={fadeUp}
        className={`font-display text-display-sm font-light text-balance ${
          invert ? 'text-foam' : 'text-ink'
        }`}
      >
        {title}
      </Reveal>
      {description && (
        <Reveal
          as="p"
          variants={fadeUp}
          className={`text-lg leading-relaxed ${invert ? 'text-foam/65' : 'text-slate'}`}
        >
          {description}
        </Reveal>
      )}
    </Reveal>
  )
}
