import { Link } from "react-router-dom"
import PageHero from "../components/PageHero"
import Network from "../components/Network"
import FinalCta from "../components/FinalCta"
import { vehicles } from "../data"
import { dealerNotes } from "./pageContent"

export default function Dealers() {
  return (
    <>
      <PageHero
        eyebrow="Dealers"
        title="One situation. Multiple possibilities."
        text="Our network of 100+ U.S. dealerships is how we help you save time—so you are not limited to one lot and one long wait."
        image="/cars/ford-f150-lot.jpg"
        alt="Ford F-150 at a dealership lot"
      />

      <Network />

      <section className="bg-cloud py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold">Vehicles people often ask about</h2>
          <p className="mt-3 max-w-2xl text-charcoal">
            These are examples, not promises. The right match depends on your credit, budget, and
            what you need day to day.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {vehicles.map((car) => (
              <article key={car.src} className="rounded-2xl border border-hairline bg-canvas p-3">
                <img src={car.src} alt={car.alt} className="h-28 w-full rounded-xl object-cover" />
                <p className="mt-2 text-center text-sm font-semibold">{car.name}</p>
              </article>
            ))}
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {dealerNotes.map((n) => (
              <article key={n.title} className="rounded-2xl bg-canvas p-6">
                <h3 className="font-semibold">{n.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal">{n.text}</p>
              </article>
            ))}
          </div>
          <p className="mt-10 max-w-3xl text-sm text-charcoal">
            Instead of You → Dealership #1 → Rejected, then Dealership #2 → Rejected, Carvaminos
            helps you explore potential options across a broader network first.
          </p>
          <Link to="/contact" className="mt-6 inline-flex rounded-md bg-primary-brand px-5 py-2.5 text-sm font-medium text-white">
            See My Options
          </Link>
        </div>
      </section>
      <FinalCta />
    </>
  )
}
