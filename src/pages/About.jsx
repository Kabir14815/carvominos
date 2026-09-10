import { Link } from "react-router-dom"
import PageHero from "../components/PageHero"
import WhyTrust from "../components/WhyTrust"
import Stories from "../components/Stories"
import FinalCta from "../components/FinalCta"

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="We’re here to help — not judge"
        text="Carvaminos is a vehicle-matching and dealership connection service for Spanish-speaking people across the U.S. We are based in Atlanta. We are not a bank, a lender, or a pushy car lot."
        image="/cars/toyota-tacoma.jpg"
        alt="Toyota Tacoma"
      />

      <section className="bg-canvas py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="font-display text-3xl font-semibold">What Carvaminos is</h2>
          <p className="mt-4 leading-relaxed text-charcoal">
            Tell us your situation. We help you see options across 100+ U.S. dealerships—so you do
            not have to feel alone after a no, a low score, missing papers, or another wasted Saturday.
          </p>
          <h2 className="font-display mt-10 text-3xl font-semibold">What we are not</h2>
          <ul className="mt-4 space-y-2 text-charcoal">
            <li>• We are not a lender.</li>
            <li>• We do not guarantee approval.</li>
            <li>• We do not say everyone qualifies.</li>
            <li>• We do not replace the dealership’s own process.</li>
          </ul>
          <h2 className="font-display mt-10 text-3xl font-semibold">¿Hablas español?</h2>
          <p className="mt-4 leading-relaxed text-charcoal">
            Estamos aquí para ayudarte. You can ask questions in Spanish. No judgment. No
            complicated financial language. Just a simple conversation about your situation.
          </p>
          <Link to="/contact" className="mt-8 inline-flex rounded-md bg-primary-brand px-5 py-2.5 text-sm font-medium text-white">
            Tell us about your situation
          </Link>
        </div>
      </section>
      <WhyTrust />
      <Stories />
      <FinalCta />
    </>
  )
}
