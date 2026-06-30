import { Link } from 'react-router-dom'
import { Compass, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="shell flex min-h-[80svh] flex-col items-center justify-center py-30 text-center">
      <span className="grid h-20 w-20 animate-floaty place-items-center rounded-full border border-line bg-cloud text-brass-deep">
        <Compass className="h-9 w-9" strokeWidth={1.4} />
      </span>
      <p className="mt-8 font-mono text-sm uppercase tracking-[0.32em] text-brass-deep">
        Error 404
      </p>
      <h1 className="mt-4 font-display text-display font-light text-ink">
        Off the charts.
      </h1>
      <p className="mt-5 max-w-md text-lg leading-relaxed text-slate">
        This heading led nowhere. Let’s navigate you back to safe harbour.
      </p>
      <Link to="/" className="btn-brass mt-9">
        <ArrowLeft className="h-4 w-4" />
        Back to home
      </Link>
    </section>
  )
}
