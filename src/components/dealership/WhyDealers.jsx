import Reveal from "../Reveal"
import { reasons } from "../../pages/dealerships/content"

export default function WhyDealers() {
  return (
    <section id="why-us" className="bg-cloud py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.28px] text-graphite">Why us</p>
          <h2 className="font-display mt-2 text-3xl font-semibold md:text-4xl">
            Why choose Carvaminos?
          </h2>
          <p className="mt-3 max-w-2xl text-charcoal">
            Brief-led creative, tight targeting, honest handoffs—leads that match your inventory.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {reasons.map((item) => (
            <Reveal key={item.title}>
              <article className="h-full rounded-2xl bg-canvas p-6">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
