import Reveal from "../Reveal"
import { acts } from "../../pages/dealerships/content"

export default function TheArc() {
  return (
    <section className="bg-canvas py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.28px] text-graphite">
            Act I–III · The arc
          </p>
          <h2 className="font-display mt-2 max-w-3xl text-3xl font-semibold md:text-4xl">
            Better, because we market on your terms—then we deliver the leads
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-charcoal">
            Carvaminos is a marketing company: we design and run the outreach; we provide the leads
            that come from it. Ten-plus years in automotive marketing taught us a simple rule: the
            creative has to sound like your store, and the people who reach you have to belong in
            your script. The three beats below are how we keep that promise—before a single shopper
            crosses your threshold.
          </p>
        </Reveal>
        <div className="mt-10 space-y-6">
          {acts.map((act) => (
            <Reveal key={act.label}>
              <article className="rounded-3xl border border-hairline bg-cloud p-6 md:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-brand">
                  {act.label} — {act.title}
                </p>
                <p className="mt-3 leading-relaxed text-charcoal">{act.text}</p>
                <p className="mt-4 text-sm italic text-ink">{act.difference}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#brief" className="rounded-md bg-primary-brand px-6 py-3 text-sm font-medium text-white">
            Pitch us your brief
          </a>
          <a
            href="#the-model"
            className="rounded-md border border-primary-brand px-6 py-3 text-sm font-medium text-primary-brand"
          >
            See the living model
          </a>
        </div>
      </div>
    </section>
  )
}
