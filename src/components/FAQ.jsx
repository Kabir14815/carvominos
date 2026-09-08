import { useState } from "react"
import { faqs } from "../data"
import Reveal from "./Reveal"

export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section id="questions" className="bg-cloud py-20 md:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.28px] text-graphite">Questions</p>
          <h2 className="font-display mt-2 text-3xl font-semibold">Common questions, honest answers</h2>
          <p className="mt-2 text-charcoal">Simple answers. No complicated language.</p>
        </Reveal>
        <div className="mt-8 divide-y divide-hairline rounded-2xl bg-canvas">
          {faqs.map((item, i) => (
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
