import { useState } from "react"
import Reveal from "../Reveal"
import { sales, whatsapp } from "../../data"

export default function DealerFinale() {
  const [sent, setSent] = useState(false)

  return (
    <section id="brief" className="bg-canvas py-20 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.28px] text-primary-brand">
            Get started
          </p>
          <h2 className="font-display mt-2 text-3xl font-semibold md:text-4xl">
            Thirty minutes. A 30-to-60-day outline.
          </h2>
          <p className="mt-4 leading-relaxed text-charcoal">
            Bring your GSM or marketing lead. Tell us the shoppers you want and the volume that
            would feel like a win. No long pitch.
          </p>
          <img
            src="/carvaminos-auto-leads-logo.jpg"
            alt="Carvaminos Auto Leads"
            className="mt-8 w-full max-w-sm rounded-3xl object-contain"
          />
          <div className="mt-6">
            <p className="font-semibold">Leads that drive results</p>
            <p className="text-sm text-charcoal">Brief-led campaigns & qualified leads for dealers.</p>
          </div>
          <ul className="mt-6 space-y-2 text-sm text-charcoal">
            <li>
              <a href={whatsapp.href} target="_blank" rel="noreferrer" className="font-semibold text-primary-brand">
                {whatsapp.display}
              </a>
            </li>
            <li>
              <a href={sales.mailto} className="text-primary-brand">
                {sales.email}
              </a>
            </li>
            <li>Atlanta, Georgia, United States</li>
          </ul>
        </Reveal>

        <form
          className="rounded-3xl border border-hairline bg-cloud p-6 md:p-8"
          onSubmit={(e) => {
            e.preventDefault()
            setSent(true)
          }}
        >
          <h3 className="font-display text-2xl font-semibold">Book a call</h3>
          <label className="mt-5 block text-sm font-semibold">Dealership</label>
          <input required className="mt-1 w-full rounded-xl border border-hairline bg-canvas px-3 py-2" placeholder="Atlanta Ford" />
          <label className="mt-4 block text-sm font-semibold">Name</label>
          <input required className="mt-1 w-full rounded-xl border border-hairline bg-canvas px-3 py-2" placeholder="GSM / marketing lead" />
          <label className="mt-4 block text-sm font-semibold">Email or phone</label>
          <input required className="mt-1 w-full rounded-xl border border-hairline bg-canvas px-3 py-2" placeholder="you@dealership.com" />
          <label className="mt-4 block text-sm font-semibold">Focus</label>
          <select className="mt-1 w-full rounded-xl border border-hairline bg-canvas px-3 py-2">
            <option>New inventory</option>
            <option>Used & CPO</option>
            <option>Finance</option>
            <option>Service-to-sales</option>
            <option>A mix</option>
          </select>
          <label className="mt-4 block text-sm font-semibold">Notes</label>
          <textarea
            className="mt-1 min-h-20 w-full rounded-xl border border-hairline bg-canvas px-3 py-2"
            placeholder="Markets, volume goal, trims you can deliver..."
          />
          <button className="mt-5 w-full rounded-md bg-primary-brand py-3 text-sm font-medium text-white">
            Book a call
          </button>
          {sent && (
            <p className="mt-3 text-sm text-charcoal">Thank you. We will follow up shortly.</p>
          )}
        </form>
      </div>
    </section>
  )
}
