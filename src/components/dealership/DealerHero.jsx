import { motion } from "framer-motion"
import { ArrowRight, ShieldCheck } from "lucide-react"
import { whatsapp } from "../../data"

const chat = `${whatsapp.href}?text=${encodeURIComponent("Hello, I'd like Spanish auto leads from Carvaminos.")}`

export default function DealerHero() {
  return (
    <section id="home" className="relative overflow-x-clip bg-canvas px-4 pt-8 pb-16 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-16 top-0 h-72 w-72 rounded-full bg-primary-soft/70 blur-3xl" />
        <div className="absolute right-0 top-10 h-80 w-80 rounded-full bg-primary-brand/15 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          className="rounded-3xl border border-hairline bg-canvas px-6 py-8 shadow-[0_18px_42px_rgba(26,26,26,0.08)] sm:px-10 sm:py-12"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="inline-flex rounded-full border border-hairline bg-cloud px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-graphite">
            Carvaminos <span className="mx-1.5 text-primary-brand">/</span> lead lab
          </p>
          <p className="mt-5 text-sm font-medium text-primary-brand">Spanish-first marketing</p>
          <h1 className="font-display mt-2 text-4xl font-medium leading-none text-ink md:text-6xl">
            Leads that <span className="text-primary-brand">fit your brief.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-charcoal md:text-lg">
            Campaigns and leads for U.S. dealers—built from your brief, matched to your inventory.
          </p>
          <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-hairline bg-cloud px-3 py-1.5 text-sm text-charcoal">
            <ShieldCheck className="h-4 w-4 text-primary-brand" />
            Based in Atlanta · Hispanic automotive audiences nationwide
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={chat}
              target="_blank"
              rel="noreferrer"
              className="rounded-md bg-primary-brand px-6 py-3 text-sm font-medium text-white hover:bg-link-blue"
            >
              Get leads
            </a>
            <a
              href="#why-us"
              className="inline-flex items-center gap-1 rounded-md border border-primary-brand px-6 py-3 text-sm font-medium text-primary-brand"
            >
              Learn more <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="relative flex min-h-[240px] items-end justify-center lg:min-h-[420px]"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="absolute left-1/2 top-1/2 h-64 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-brand/20 blur-2xl" />
          <img
            src="/hispano/hero-pickup-corner.png"
            alt="Pickup truck"
            className="relative z-10 w-full max-w-lg object-contain"
          />
        </motion.div>
      </div>
    </section>
  )
}
