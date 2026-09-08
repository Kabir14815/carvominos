import Reveal from "../Reveal"
import { handoffPoints } from "../../pages/dealerships/content"

export default function SceneHandoff() {
  return (
    <section className="bg-cloud py-20 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <img
            src="/cars/ford-f150-lot.jpg"
            alt="Dealership lot ready for a handoff"
            className="h-80 w-full rounded-3xl object-cover"
          />
        </Reveal>
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.28px] text-graphite">
            Scene IV · The handoff in one breath
          </p>
          <h2 className="font-display mt-2 text-3xl font-semibold md:text-4xl">
            From our campaigns to your phones—with the receipt attached
          </h2>
          <ul className="mt-6 space-y-4 text-sm leading-relaxed text-charcoal">
            {handoffPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <a
            href="#brief"
            className="mt-8 inline-flex rounded-md bg-primary-brand px-6 py-3 text-sm font-medium text-white"
          >
            Walk the handoff with us
          </a>
        </Reveal>
      </div>
    </section>
  )
}
