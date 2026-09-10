import { stories } from "../data"
import Reveal from "./Reveal"

export default function Stories() {
  return (
    <section className="overflow-x-clip bg-cloud py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.28px] text-graphite">People like you</p>
          <h2 className="font-display mt-2 text-3xl font-semibold md:text-4xl">
            Built for people who are tired of being turned away
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            ["4.9 / 5", "Simple, human help"],
            ["100+", "U.S. dealerships"],
            ["100%", "Honest — no approval promises"],
          ].map(([n, l]) => (
            <div key={l} className="rounded-2xl bg-canvas p-5">
              <p className="font-display text-3xl font-extrabold text-primary-brand">{n}</p>
              <p className="text-sm text-graphite">{l}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {stories.map((s) => (
            <Reveal key={s.name}>
              <article className="h-full rounded-2xl bg-canvas p-6">
                <p className="text-sm leading-relaxed text-charcoal">“{s.quote}”</p>
                <p className="mt-4 font-semibold">{s.name}</p>
                <p className="text-sm text-graphite">{s.role}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
