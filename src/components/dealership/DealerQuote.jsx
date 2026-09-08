import Reveal from "../Reveal"

export default function DealerQuote() {
  return (
    <section className="bg-ink px-4 py-20 text-white sm:px-6 lg:px-8">
      <Reveal className="mx-auto max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.28px] text-primary-soft">
          Interlude · From the aisle seat
        </p>
        <blockquote className="font-display mt-5 text-2xl font-medium leading-snug md:text-3xl">
          “It used to feel like leads wandered in from another movie—wrong numbers, no context,
          nobody knew which line they had rehearsed. Now when the phone buzzes, we recognize the
          scene: a real voice, a trim they already pictured, the exact ad still warm in their
          pocket.”
        </blockquote>
        <p className="mt-6 text-sm text-white/60">GSM, multi-store group (name on request)</p>
      </Reveal>
    </section>
  )
}
