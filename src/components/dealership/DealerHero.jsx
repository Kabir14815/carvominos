import { motion } from "framer-motion"

export default function DealerHero() {
  return (
    <section className="overflow-x-clip bg-ink px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
          <p className="text-xs font-semibold uppercase tracking-[0.28px] text-primary-soft">
            Dealer-first marketing
          </p>
          <h1 className="font-display mt-3 text-4xl font-medium leading-none md:text-6xl">
            Leads that <span className="text-primary-brand">drive results.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
            Campaigns and qualified leads for U.S. dealers—built from your brief, matched to your
            inventory.
          </p>
          <p className="mt-4 text-sm text-white/60">Atlanta · Automotive leads for every rooftop</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#brief"
              className="rounded-md bg-primary-brand px-6 py-3 text-sm font-medium text-white"
            >
              Get leads
            </a>
            <a
              href="#why-us"
              className="rounded-md border border-white/30 px-6 py-3 text-sm font-medium text-white"
            >
              Learn more
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative"
        >
          <div className="absolute left-1/2 top-1/2 h-64 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-brand/30 blur-2xl" />
          <img
            src="/cars/toyota-camry.png"
            alt="Red Toyota Camry"
            className="relative z-10 mx-auto w-full max-w-md object-contain"
          />
        </motion.div>
      </div>
    </section>
  )
}
