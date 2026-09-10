import Reveal from "./Reveal"

export default function Network() {
  return (
    <section id="dealers" className="bg-canvas py-16 md:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.28px] text-graphite">How it works</p>
          <h2 className="font-display mt-2 text-3xl font-semibold md:text-4xl">
            One situation. <span className="text-primary-brand">Multiple possibilities.</span>
          </h2>
          <p className="mt-4 text-charcoal">
            Our network of 100+ U.S. dealerships gives you more places to explore instead of
            limiting yourself to one lot.
          </p>
          <p className="mt-6 font-display text-5xl font-extrabold text-primary-brand">100+</p>
          <p className="text-sm font-semibold text-graphite">lots to explore</p>
        </Reveal>
        <Reveal>
          <img
            src="/cars/toyota-tacoma.jpg"
            alt="Toyota Tacoma pickup"
            className="h-80 w-full rounded-3xl object-cover"
          />
        </Reveal>
      </div>
    </section>
  )
}
