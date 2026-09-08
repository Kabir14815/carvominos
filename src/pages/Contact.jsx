import { useState } from "react"
import PageHero from "../components/PageHero"
import FAQ from "../components/FAQ"
import FinalCta from "../components/FinalCta"
import { whatsapp } from "../data"

export default function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us about your situation"
        text="This is a conversation, not a loan application. Share a few basics. We’ll help you see which vehicle and dealership options may make sense."
        image="/cars/hyundai-elantra.jpg"
        alt="Hyundai Elantra"
      />

      <section id="see-my-options" className="bg-cloud py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <form
            className="rounded-3xl border border-hairline bg-canvas p-6 md:p-8"
            onSubmit={(e) => {
              e.preventDefault()
              setSent(true)
            }}
          >
            <label className="block text-sm font-semibold">Your name</label>
            <input required className="mt-1 w-full rounded-xl border border-hairline px-3 py-2" placeholder="Maria" />

            <label className="mt-4 block text-sm font-semibold">Phone or WhatsApp</label>
            <input required className="mt-1 w-full rounded-xl border border-hairline px-3 py-2" placeholder="(470) 000-0000" />

            <label className="mt-4 block text-sm font-semibold">Preferred language</label>
            <select className="mt-1 w-full rounded-xl border border-hairline px-3 py-2">
              <option>Spanish</option>
              <option>English</option>
              <option>Either is fine</option>
            </select>

            <label className="mt-4 block text-sm font-semibold">Your situation</label>
            <select className="mt-1 w-full rounded-xl border border-hairline px-3 py-2">
              <option>Bad or low credit</option>
              <option>Little or no credit history</option>
              <option>Small down payment</option>
              <option>Rejected by a dealership before</option>
              <option>I’m not sure — I just need a car</option>
            </select>

            <label className="mt-4 block text-sm font-semibold">What kind of vehicle?</label>
            <select className="mt-1 w-full rounded-xl border border-hairline px-3 py-2">
              <option>Sedan (Camry, Civic, Elantra)</option>
              <option>SUV (RAV4, Rogue)</option>
              <option>Truck (F-150, Tacoma, Silverado)</option>
              <option>I’m open</option>
            </select>

            <label className="mt-4 block text-sm font-semibold">Anything else we should know?</label>
            <textarea
              className="mt-1 min-h-28 w-full rounded-xl border border-hairline px-3 py-2"
              placeholder="I was turned away last month. I have about $1,000 to put down..."
            />

            <p className="mt-4 font-display text-3xl font-bold text-primary-brand">
              Free <span className="text-sm font-semibold text-graphite">to start</span>
            </p>
            <button className="mt-4 w-full rounded-md bg-primary-brand py-3 text-sm font-medium text-white">
              See My Options
            </button>
            {sent && (
              <p className="mt-3 text-sm text-charcoal">
                Thank you. We received your note. A Carvaminos guide will follow up — no judgment,
                and no approval promise.
              </p>
            )}
          </form>

          <div>
            <h2 className="font-display text-2xl font-semibold">¿Hablas español? Estamos aquí para ayudarte.</h2>
            <p className="mt-3 leading-relaxed text-charcoal">
              You can write in Spanish. We understand that buying a car is stressful when your
              credit is not perfect. Starting here does not commit you to a dealership or a loan.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-charcoal">
              <li>hello@carvaminos.com</li>
              <li>
                <a href={whatsapp.href} target="_blank" rel="noreferrer" className="font-semibold text-primary-brand">
                  WhatsApp {whatsapp.display}
                </a>
              </li>
              <li>Se habla español</li>
              <li>Atlanta metro</li>
              <li>Atlanta, Georgia</li>
            </ul>
            <img
              src="/cars/jeep-wrangler.jpg"
              alt="Jeep Wrangler"
              className="mt-8 h-56 w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>
      <FAQ />
      <FinalCta />
    </>
  )
}
