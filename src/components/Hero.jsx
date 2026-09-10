import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Briefcase, Check, Clock, Star } from "lucide-react"
import { vehicles } from "../data"

function FlowButton({ href, children, filled = true }) {
  const base =
    "group relative inline-flex w-full items-center justify-center overflow-hidden rounded-md border-[1.5px] px-8 py-3 text-sm font-medium transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.95] sm:w-auto sm:min-w-[220px]"
  const skin = filled
    ? "bg-primary-brand border-primary-brand text-white"
    : "border-primary-brand bg-canvas/65 text-primary-brand"

  return (
    <Link to={href} className={`${base} ${skin}`}>
      <Briefcase
        className="absolute left-[-25%] z-[9] h-4 w-4 -rotate-90 transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:left-4 group-hover:rotate-0"
        aria-hidden
      />
      <span className="relative z-[1] -translate-x-3 transition-all duration-[800ms] ease-out group-hover:translate-x-0">
        {children}
      </span>
      <Briefcase
        className="absolute right-4 z-[9] h-4 w-4 -rotate-90 transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:right-[-25%] group-hover:rotate-0"
        aria-hidden
      />
    </Link>
  )
}

const cards = [
  {
    title: "Save Your Time",
    text: "Less driving. Less waiting. Less stress.",
    img: "/cars/toyota-camry.png",
    alt: "Toyota Camry",
    pos: "left-3 top-[calc(22%-80px)] xl:-left-20",
  },
  {
    title: "100+ Dealerships",
    text: "More places to explore than one lot",
    img: "/cars/ford-f150.png",
    alt: "Ford F-150",
    pos: "right-3 top-[42%] hidden xl:grid xl:-right-20",
  },
  {
    title: "No Judgment",
    text: "We look at your situation, not just a score",
    img: "/cars/toyota-rav4.jpg",
    alt: "Toyota RAV4",
    pos: "left-2 top-[58%] xl:-left-8",
  },
  {
    title: "U.S. Drivers",
    text: "We understand people in your situation",
    img: "/cars/ford-f150-lot.jpg",
    alt: "Ford F-150 at a lot",
    pos: "right-2 bottom-8 w-[250px] xl:-right-10",
    wide: true,
  },
]

export default function Hero() {
  return (
    <section className="relative overflow-x-clip px-0 sm:px-4 lg:px-5 xl:px-8">
      <div className="relative mx-auto flex max-w-7xl flex-col gap-6 pt-4 md:pt-8 lg:flex-row lg:items-center">
        <motion.div
          className="relative min-w-0 flex-1 overflow-hidden rounded-2xl bg-canvas px-4 pb-12 pt-4 md:px-10 md:pb-16 md:pt-8"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.28px] text-graphite">
            Helping Spanish-speaking drivers across the U.S.
          </p>
          <h1 className="font-display mb-4 text-left text-4xl font-medium leading-none text-ink md:text-6xl">
            Finding the right car{" "}
            <span className="text-primary-brand">shouldn&apos;t feel impossible</span>
          </h1>
          <p className="mb-6 max-w-xl text-base leading-relaxed text-charcoal md:text-lg">
            Bad credit? Tight budget? Missing papers? Carvaminos helps Spanish-speaking drivers
            across the U.S. find vehicle and dealership options that may fit.
          </p>
          <div className="mb-6 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
            <FlowButton href="/contact">See My Options</FlowButton>
            <FlowButton href="/help" filled={false}>
              How It Works
            </FlowButton>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-graphite">
            <span className="inline-flex items-center gap-1.5">
              <Check className="h-4 w-4 text-primary-brand" />
              No judgment. Just help.
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-primary-brand" />
              Fast turnaround
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Star className="h-4 w-4 text-primary-brand" />
              Based in Atlanta · Serving the U.S.
            </span>
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto h-[520px] w-full max-w-[560px] shrink-0 lg:h-[560px] lg:w-[48%]"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="absolute left-1/2 top-[46%] h-[350px] w-[380px] -translate-x-1/2 -translate-y-1/2 rotate-[-10deg] rounded-full bg-primary-brand/15 shadow-[18px_24px_60px_rgba(41,110,249,0.18)] xl:h-[390px] xl:w-[430px]" />
          <div className="absolute left-1/2 top-[47%] h-[330px] w-[360px] -translate-x-1/2 -translate-y-1/2 rotate-[-10deg] rounded-full bg-primary-soft shadow-[inset_-24px_-18px_46px_rgba(41,110,249,0.18),inset_18px_16px_34px_rgba(255,255,255,0.58)] xl:h-[370px] xl:w-[410px]" />
          <div className="absolute bottom-[116px] left-1/2 z-0 h-10 w-[62%] -translate-x-1/2 rounded-full bg-primary-soft shadow-[0_18px_35px_rgba(41,110,249,0.16)]" />

          <div className="relative z-10 mx-auto max-h-[500px] overflow-hidden [clip-path:ellipse(50%_45%_at_50%_48%)]">
            <img
              src="/cars/toyota-tacoma.jpg"
              alt="Toyota Tacoma pickup"
              width={432}
              height={504}
              className="mx-auto h-[460px] w-full object-cover object-center drop-shadow-xl"
            />
          </div>

          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              className={`absolute z-30 grid w-[232px] grid-cols-[68px_1fr] items-center gap-2 rounded-xl border border-hairline bg-canvas/95 px-2 py-1.5 shadow-[0_18px_42px_rgba(26,26,26,0.12)] backdrop-blur ${card.pos} ${card.wide ? "w-[250px]" : ""}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 + i * 0.12 }}
            >
              <img
                src={card.img}
                alt={card.alt}
                width={68}
                height={68}
                className="h-[68px] w-[68px] rounded-lg object-cover"
              />
              <div className="min-w-0">
                <p className="text-sm font-bold leading-tight text-ink">{card.title}</p>
                <p className="mt-1 text-[11px] font-medium leading-snug text-graphite">
                  {card.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <p className="mt-4 text-center text-xs font-medium uppercase tracking-[0.28px] text-graphite">
        We understand people in your situation
      </p>

      <div className="overflow-x-clip py-10">
        <div className="marquee-track flex w-max gap-4 pr-4">
          {[...vehicles, ...vehicles].map((car, i) => (
            <div
              key={`${car.src}-${i}`}
              className="w-[168px] shrink-0 rounded-2xl border border-hairline bg-canvas p-3 shadow-[0_10px_24px_rgba(26,26,26,0.06)]"
            >
              <img src={car.src} alt={car.alt} className="h-20 w-full rounded-xl object-cover" />
              <p className="mt-2 text-center text-xs font-semibold text-graphite">{car.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
