import { Link } from "react-router-dom"
import Reveal from "./Reveal"

export default function Saturday() {
  return (
    <section className="overflow-x-clip bg-cloud px-4 py-20 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            Stop wasting your Saturday at dealerships
          </h2>
          <p className="mt-3 text-lg font-medium">
            You shouldn&apos;t sit for hours just to hear they can&apos;t help you
          </p>
          <p className="mt-4 text-charcoal">
            Carvaminos helps you identify potential vehicle and dealership matches before you
            make the trip. Less driving. Less waiting. Less stress.
          </p>
          <div className="mt-5 flex flex-wrap gap-2 text-sm font-semibold">
            <span className="rounded-full bg-canvas px-3 py-1">Less driving</span>
            <span className="rounded-full bg-canvas px-3 py-1">Less waiting</span>
            <span className="rounded-full bg-canvas px-3 py-1">Less stress</span>
          </div>
          <Link
            to="/contact"
            className="mt-6 inline-flex rounded-full bg-primary-brand px-5 py-2.5 text-sm font-semibold text-white"
          >
            See My Options
          </Link>
        </Reveal>
        <Reveal>
          <img
            src="/cars/toyota-rav4.jpg"
            alt="Toyota RAV4 SUV"
            className="h-80 w-full rounded-3xl object-cover"
          />
        </Reveal>
      </div>
    </section>
  )
}
