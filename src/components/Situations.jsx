import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { situations } from "../data"
import Reveal from "./Reveal"

export default function Situations() {
  return (
    <section id="options" className="bg-canvas py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.28px] text-graphite">How we help</p>
          <h2 className="font-display mt-2 text-3xl font-semibold md:text-4xl">
            Your credit isn&apos;t the whole story
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {situations.map((item, i) => (
            <motion.article
              key={item.title}
              className="rounded-2xl border border-hairline bg-canvas p-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary-brand">
                {item.label}
              </p>
              <h3 className="font-display mt-2 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal">{item.text}</p>
              <Link to={`/options#${item.id}`} className="mt-3 inline-block text-sm font-semibold text-primary-brand">
                Read more
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
