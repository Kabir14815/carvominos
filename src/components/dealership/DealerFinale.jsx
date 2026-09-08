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
            Finale · Roll credits
          </p>
          <h2 className="font-display mt-2 text-3xl font-semibold md:text-4xl">
            Thirty quiet minutes—no trailer, no spoiler reel
          </h2>
          <p className="mt-4 leading-relaxed text-charcoal">
            Bring your GSM, your marketing lead, whoever owns the showroom story. We are a marketing
            company that provides leads—so we need your truth: the shoppers you want, the offers
            that are real, the volume that would feel like a win. You walk away with a plain
            outline: how we would market first, how we would qualify and deliver leads, and what
            “working” looks like in thirty to sixty days—before you commit to a longer run.
          </p>
          <img
            src="/cars/toyota-camry.png"
            alt="Red Toyota Camry"
            className="mt-8 h-48 w-full rounded-2xl object-contain bg-cloud"
          />
          <div className="mt-8 flex items-center gap-4">
            <img src="/carvaminos-logo.jpg" alt="Carvaminos Auto Leads mascot logo" className="h-20 w-auto" />
            <div>
              <p className="font-semibold">Leads that drive results</p>
              <p className="text-sm text-charcoal">Brief-led campaigns & qualified leads for dealers.</p>
            </div>
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
          <h3 className="font-display text-2xl font-semibold">Book the quiet room</h3>
          <label className="mt-5 block text-sm font-semibold">Dealership / rooftop</label>
          <input required className="mt-1 w-full rounded-xl border border-hairline bg-canvas px-3 py-2" placeholder="Atlanta Ford" />
          <label className="mt-4 block text-sm font-semibold">Your name and role</label>
          <input required className="mt-1 w-full rounded-xl border border-hairline bg-canvas px-3 py-2" placeholder="GSM / marketing lead" />
          <label className="mt-4 block text-sm font-semibold">Work email or phone</label>
          <input required className="mt-1 w-full rounded-xl border border-hairline bg-canvas px-3 py-2" placeholder="you@dealership.com" />
          <label className="mt-4 block text-sm font-semibold">Markets you defend</label>
          <input className="mt-1 w-full rounded-xl border border-hairline bg-canvas px-3 py-2" placeholder="Atlanta metro, specific ZIP clusters" />
          <label className="mt-4 block text-sm font-semibold">Inventory priorities</label>
          <select className="mt-1 w-full rounded-xl border border-hairline bg-canvas px-3 py-2">
            <option>New inventory</option>
            <option>Used & CPO</option>
            <option>Finance / special finance</option>
            <option>Service-to-sales</option>
            <option>A mix across rooftops</option>
          </select>
          <label className="mt-4 block text-sm font-semibold">What winning volume looks like</label>
          <textarea
            className="mt-1 min-h-24 w-full rounded-xl border border-hairline bg-canvas px-3 py-2"
            placeholder="30–60 day target, trims you can actually deliver..."
          />
          <button className="mt-5 w-full rounded-md bg-primary-brand py-3 text-sm font-medium text-white">
            Book the quiet room
          </button>
          {sent && (
            <p className="mt-3 text-sm text-charcoal">
              Thank you. We will follow up with a 30-to-60-day outline—no trailer, no spoiler reel.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
