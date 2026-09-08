import Reveal from "./Reveal"

export default function Consult() {
  return (
    <section id="see-my-options" className="bg-canvas py-8 md:py-10">
      <div className="mx-auto max-w-7xl rounded-3xl bg-cloud px-6 py-12 sm:px-10">
        <Reveal className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold text-primary-brand">Not sure where to start?</p>
            <h2 className="font-display mt-2 text-3xl font-semibold md:text-4xl">
              Tell us about your situation
            </h2>
            <p className="mt-4 max-w-xl text-charcoal">
              Share a few basics about your credit, budget, down payment, and what you need.
              We&apos;ll help you see which options may make sense — without the pressure of a
              dealership office.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold">
              <span className="rounded-full bg-canvas px-3 py-1">Private conversation</span>
              <span className="rounded-full bg-canvas px-3 py-1">English or Spanish</span>
            </div>
          </div>
          <form
            className="rounded-2xl border border-hairline bg-canvas p-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <label className="block text-sm font-semibold">Your name</label>
            <input className="mt-1 w-full rounded-xl border border-hairline px-3 py-2" placeholder="Maria" />
            <label className="mt-4 block text-sm font-semibold">Phone or WhatsApp</label>
            <input className="mt-1 w-full rounded-xl border border-hairline px-3 py-2" placeholder="(470) 000-0000" />
            <p className="mt-4 font-display text-3xl font-bold text-primary-brand">
              Free <span className="text-sm font-semibold text-graphite">to start</span>
            </p>
            <button className="mt-4 w-full rounded-full bg-primary-brand py-3 text-sm font-semibold text-white">
              See My Options
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
