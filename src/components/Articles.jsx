import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { articles } from "../data"
import Reveal from "./Reveal"

export default function Articles() {
  return (
    <section className="bg-canvas py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.28px] text-graphite">Helpful answers</p>
          <h2 className="font-display mt-2 text-3xl font-semibold md:text-4xl">
            Questions people ask us
          </h2>
          <Link to="/guides" className="mt-3 inline-block text-sm font-semibold text-primary-brand">
            View all guides
          </Link>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {articles.map((a) => (
            <motion.article
              key={a.title}
              className="group overflow-hidden rounded-2xl border border-hairline"
              whileHover={{ y: -4 }}
            >
              <img
                src={a.img}
                alt={a.alt}
                className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="p-5">
                <h3 className="font-semibold">{a.title}</h3>
                <p className="mt-2 text-sm text-charcoal">{a.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
