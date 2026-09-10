import { Link } from "react-router-dom"

export default function FinalCta() {
  return (
    <section className="bg-canvas px-4 pb-16 sm:px-6">
      <div className="mx-auto max-w-7xl rounded-2xl bg-ink px-8 py-16 text-center text-white md:py-20">
        <p className="text-sm font-semibold text-primary-soft">Ready when you are</p>
        <h2 className="font-display mt-2 text-4xl font-extrabold tracking-tight md:text-6xl">
          CARVAMINOS <span className="text-primary-brand">U.S.A.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/80">
          Your credit situation doesn&apos;t have to stop you from looking for a car. We&apos;ll
          help you explore options that may fit — before you spend another day at dealerships.
        </p>
        <Link
          to="/contact"
          className="mt-7 inline-flex rounded-full bg-primary-brand px-6 py-3 text-sm font-semibold text-white"
        >
          See My Options
        </Link>
        <p className="mt-4 text-xs text-white/60">No judgment — No pressure — No approval promises</p>
      </div>
    </section>
  )
}
