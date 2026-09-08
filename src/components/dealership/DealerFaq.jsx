import { useState } from "react"
import Reveal from "../Reveal"
import { dealerFaqs } from "../../pages/dealerships/content"

export default function DealerFaq() {
  const [open, setOpen] = useState(0)

  return (
    <section className="bg-cloud py-20 md:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.28px] text-graphite">Dealers ask</p>
          <h2 className="font-display mt-2 text-3xl font-semibold">Carvaminos, in plain answers</h2>
        </Reveal>
        <div className="mt-8 divide-y divide-hairline rounded-2xl bg-canvas">
          {dealerFaqs.map((item, i) => (
            <button
              key={item.q}
              className="block w-full px-5 py-4 text-left"
              onClick={() => setOpen(open === i ? -1 : i)}
            >
              <h3 className="font-semibold">{item.q}</h3>
              {open === i && <p className="mt-2 text-sm leading-relaxed text-charcoal">{item.a}</p>}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
