import { useState } from "react"
import { motion } from "framer-motion"
import { Megaphone, Users, MessageCircle, Target } from "lucide-react"

const benefits = [
  {
    icon: Megaphone,
    title: "We run the ads",
    text: "Carvaminos advertises to Spanish-speaking shoppers in Atlanta who are already looking for a car — including people with credit concerns who still need to buy.",
  },
  {
    icon: Users,
    title: "Spanish-speaking leads",
    text: "Leads come from customers who prefer Spanish. They told us their situation once. You do not have to hunt for this audience from scratch.",
  },
  {
    icon: Target,
    title: "Higher-intent conversations",
    text: "These are not cold website clicks. People shared credit, budget, down payment, and the vehicle they want before they reach your BDC.",
  },
  {
    icon: MessageCircle,
    title: "Ready to talk",
    text: "We introduce shoppers to lots that may fit. Your team gets a warmer conversation instead of a stranger who is still afraid of being turned away.",
  },
]

const steps = [
  {
    n: "01",
    title: "We advertise",
    text: "Spanish-language and bilingual ads reach Atlanta drivers who need a vehicle and are worried about credit, down payment, or a past rejection.",
  },
  {
    n: "02",
    title: "They tell us their situation",
    text: "Shoppers share basics — not a full credit app with us. We learn what they can put down, what they need, and how they want to be contacted.",
  },
  {
    n: "03",
    title: "You receive the lead",
    text: "Matched dealerships get the lead while the shopper is still in-market. Your BDC or sales desk follows up in Spanish or English.",
  },
  {
    n: "04",
    title: "You close the deal",
    text: "Financing and the sale stay with you. Carvaminos is the bridge. We do not take the deal or the customer relationship.",
  },
]

export default function Dealerships() {
  const [sent, setSent] = useState(false)

  return (
    <>
      <section className="overflow-x-clip bg-ink px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-xs font-semibold uppercase tracking-[0.28px] text-primary-soft">
              For Atlanta dealerships
            </p>
            <h1 className="font-display mt-3 text-4xl font-medium leading-none md:text-5xl">
              Highly converted <span className="text-primary-brand">Spanish leads</span> — from ads we run
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
              Carvaminos runs paid ads to Spanish-speaking car shoppers in Atlanta, qualifies their
              situation, and sends your store people who are already looking — not strangers who
              wandered onto the lot.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#partner"
                className="rounded-md bg-primary-brand px-6 py-3 text-sm font-medium text-white"
              >
                Get Spanish leads
              </a>
              <a
                href="#how-leads-work"
                className="rounded-md border border-white/30 px-6 py-3 text-sm font-medium text-white"
              >
                How it works
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex justify-center"
          >
            <img
              src="/carvaminos-logo.jpg"
              alt="Carvaminos"
              className="w-full max-w-md rounded-3xl bg-white object-contain p-4"
            />
          </motion.div>
        </div>
      </section>

      <section className="bg-canvas py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold">Why dealers partner with us</h2>
          <p className="mt-3 max-w-2xl text-charcoal">
            Atlanta has a large Spanish-speaking market. Many of those shoppers avoid dealerships
            because they expect a “no.” We meet them first. You get the appointment.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {benefits.map((item) => (
              <article key={item.title} className="rounded-2xl border border-hairline bg-cloud p-6">
                <item.icon className="h-6 w-6 text-primary-brand" />
                <h3 className="mt-3 font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="how-leads-work" className="bg-cloud py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold">From ad click to your showroom</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <article key={step.n} className="rounded-2xl bg-canvas p-5">
                <span className="font-display text-sm font-bold text-primary-brand">{step.n}</span>
                <h3 className="mt-2 font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-canvas py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <img
            src="/cars/ford-f150-lot.jpg"
            alt="Ford F-150 at a dealership lot"
            className="h-80 w-full rounded-3xl object-cover"
          />
          <div>
            <h2 className="font-display text-3xl font-semibold">What a Carvaminos lead includes</h2>
            <ul className="mt-5 space-y-3 text-charcoal">
              <li>• Name and phone / WhatsApp</li>
              <li>• Preferred language (Spanish or English)</li>
              <li>• Credit situation in their own words</li>
              <li>• Budget and down payment range</li>
              <li>• Vehicle interest — sedan, SUV, or truck</li>
            </ul>
            <p className="mt-5 text-sm text-graphite">
              We do not promise every lead will finance. We send shoppers who asked for options and
              agreed to be connected. Your desk still works the deal.
            </p>
          </div>
        </div>
      </section>

      <section id="partner" className="bg-cloud py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28px] text-primary-brand">
              Partner with Carvaminos
            </p>
            <h2 className="font-display mt-2 text-3xl font-semibold">
              Want Spanish leads at your store?
            </h2>
            <p className="mt-4 text-charcoal">
              Tell us your rooftop, your inventory focus, and how you handle special finance. We
              will explain how ads and lead delivery work for Atlanta stores.
            </p>
            <img
              src="/cars/toyota-tacoma.jpg"
              alt="Toyota Tacoma"
              className="mt-8 h-56 w-full rounded-2xl object-cover"
            />
          </div>
          <form
            className="rounded-3xl border border-hairline bg-canvas p-6 md:p-8"
            onSubmit={(e) => {
              e.preventDefault()
              setSent(true)
            }}
          >
            <label className="block text-sm font-semibold">Dealership name</label>
            <input required className="mt-1 w-full rounded-xl border border-hairline px-3 py-2" placeholder="Atlanta Ford / Toyota" />
            <label className="mt-4 block text-sm font-semibold">Your name</label>
            <input required className="mt-1 w-full rounded-xl border border-hairline px-3 py-2" placeholder="General manager" />
            <label className="mt-4 block text-sm font-semibold">Work email or phone</label>
            <input required className="mt-1 w-full rounded-xl border border-hairline px-3 py-2" placeholder="you@dealership.com" />
            <label className="mt-4 block text-sm font-semibold">What do you want more of?</label>
            <select className="mt-1 w-full rounded-xl border border-hairline px-3 py-2">
              <option>Spanish-speaking special finance leads</option>
              <option>First-time buyer / no-credit leads</option>
              <option>Truck and SUV shoppers</option>
              <option>A mix of in-market Spanish leads</option>
            </select>
            <label className="mt-4 block text-sm font-semibold">Notes</label>
            <textarea
              className="mt-1 min-h-24 w-full rounded-xl border border-hairline px-3 py-2"
              placeholder="We have a strong SF desk and bilingual BDC..."
            />
            <button className="mt-5 w-full rounded-md bg-primary-brand py-3 text-sm font-medium text-white">
              Request dealer information
            </button>
            {sent && (
              <p className="mt-3 text-sm text-charcoal">
                Thank you. A Carvaminos partner will follow up about ads and lead delivery.
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  )
}
