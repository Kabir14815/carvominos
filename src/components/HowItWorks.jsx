import { motion } from "framer-motion"
import { steps } from "../data"
import Reveal from "./Reveal"

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-cloud py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.28px] text-graphite">Easy steps</p>
          <h2 className="font-display mt-2 text-3xl font-semibold md:text-4xl">How it works</h2>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.article
              key={step.n}
              className="rounded-2xl bg-canvas p-5"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <span className="font-display text-sm font-bold text-primary-brand">{step.n}</span>
              <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal">{step.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
