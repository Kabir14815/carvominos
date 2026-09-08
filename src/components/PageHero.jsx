import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export default function PageHero({ eyebrow, title, text, image, alt }) {
  return (
    <section className="overflow-x-clip bg-canvas px-4 pt-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-10 pb-8 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.28px] text-graphite">{eyebrow}</p>
          <h1 className="font-display text-4xl font-medium leading-none text-ink md:text-5xl">{title}</h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-charcoal md:text-lg">{text}</p>
          <Link
            to="/contact"
            className="mt-6 inline-flex rounded-md bg-primary-brand px-6 py-3 text-sm font-medium text-white"
          >
            See My Options
          </Link>
        </motion.div>
        {image && (
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="absolute left-1/2 top-1/2 h-64 w-72 -translate-x-1/2 -translate-y-1/2 rotate-[-8deg] rounded-full bg-primary-soft" />
            <img src={image} alt={alt} className="relative z-10 h-80 w-full rounded-3xl object-cover" />
          </motion.div>
        )}
      </div>
    </section>
  )
}
