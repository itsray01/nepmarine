// Seamless, accessibility-aware logo/word marquee.
export default function Marquee({ items = [], className = '' }) {
  const doubled = [...items, ...items]
  // Keep a constant scroll speed regardless of item count (baseline: 7 items @ 40s).
  const durationSec = items.length * (40 / 7)
  return (
    <div className={`group relative flex overflow-hidden ${className}`}>
      <div
        className="flex shrink-0 animate-marquee items-center gap-12 pr-12 group-hover:[animation-play-state:paused]"
        style={{ animationDuration: `${durationSec}s` }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-3 whitespace-nowrap font-display text-xl text-slate/55"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brass/60" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
