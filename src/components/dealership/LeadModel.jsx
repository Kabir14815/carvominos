import Reveal from "../Reveal"
import JourneyLines from "./JourneyLines"
import { lanes, modelSteps, traits } from "../../pages/dealerships/content"

export default function LeadModel() {
  return (
    <section id="the-model" className="bg-canvas py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.28px] text-graphite">
            The model · Requirements to leads
          </p>
          <h2 className="font-display mt-2 max-w-3xl text-3xl font-semibold md:text-4xl">
            High-quality leads built from your brief—with assistance through every step
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-charcoal">
            The lanes below summarize volume by vertical you care about—new, used, finance, digital
            campaigns, service. Above, a short look at happy customers at delivery—the showroom
            outcome we build toward. Underneath is our process: we translate your requirements into
            targeting and creative, filter for fit and consent, then hand off leads with context so
            your team can work them with confidence. Ask us to walk the rules behind the numbers
            anytime.
          </p>
        </Reveal>

        <div className="mt-8 flex flex-wrap gap-2">
          {lanes.map((lane) => (
            <span
              key={lane}
              className="rounded-full border border-hairline bg-cloud px-4 py-2 text-sm font-medium text-ink"
            >
              {lane}
            </span>
          ))}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {modelSteps.map((step) => (
            <Reveal key={step.n}>
              <article className="h-full rounded-2xl border border-hairline bg-cloud p-6">
                <span className="font-display text-sm font-bold text-primary-brand">{step.n}</span>
                <h3 className="mt-2 font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal">{step.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {traits.map((item) => (
            <Reveal key={item.title}>
              <article>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <JourneyLines />
        </Reveal>
      </div>
    </section>
  )
}
