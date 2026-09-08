import { reasons } from "../data"
import Reveal from "./Reveal"

export default function WhyTrust() {
  return (
    <section id="about" className="bg-cloud py-20 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <img
            src="/cars/ford-f150-lot.jpg"
            alt="Ford F-150 at a dealership lot"
            className="h-[420px] w-full rounded-3xl object-cover"
          />
        </Reveal>
        <div>
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.28px] text-graphite">Why trust us</p>
            <h2 className="font-display mt-2 text-3xl font-semibold md:text-4xl">
              We&apos;re here to help — not judge
            </h2>
          </Reveal>
          <div className="mt-8 space-y-5">
            {reasons.map((item) => (
              <Reveal key={item.title}>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-charcoal">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
