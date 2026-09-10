import { Link } from "react-router-dom"
import PageHero from "../components/PageHero"
import HowItWorks from "../components/HowItWorks"
import FAQ from "../components/FAQ"
import FinalCta from "../components/FinalCta"
import { helpDetails } from "./pageContent"

export default function Help() {
  return (
    <>
      <PageHero
        eyebrow="Help"
        title="How Carvaminos works"
        text="Four simple steps. No complicated language. No trip across town until you have a better idea of where to start."
        image="/cars/ford-f150.png"
        alt="Ford F-150"
      />

      <HowItWorks />

      <section className="bg-canvas py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          {helpDetails.map((item) => (
            <article key={item.title} className="rounded-2xl border border-hairline bg-cloud p-6">
              <h2 className="font-display text-xl font-semibold">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-charcoal">{item.text}</p>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-primary-soft/50 p-8">
            <h2 className="font-display text-2xl font-semibold">What happens after you contact us?</h2>
            <p className="mt-3 max-w-3xl text-charcoal">
              You tell us your situation. We look for potential matches across our U.S. dealership
              network. Then you decide which vehicle or lot you want to explore. You are not applying
              for a loan with Carvaminos.
            </p>
            <Link to="/contact" className="mt-5 inline-flex rounded-md bg-primary-brand px-5 py-2.5 text-sm font-medium text-white">
              See My Options
            </Link>
          </div>
        </div>
      </section>
      <FAQ />
      <FinalCta />
    </>
  )
}
