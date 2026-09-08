import Reveal from "../Reveal"

export default function DealerQuote() {
  return (
    <section className="bg-ink px-4 py-16 text-white sm:px-6 lg:px-8">
      <Reveal className="mx-auto max-w-3xl">
        <blockquote className="font-display text-2xl font-medium leading-snug md:text-3xl">
          “When the phone buzzes, we recognize the scene—a real voice, a trim they already pictured,
          the ad still warm in their pocket.”
        </blockquote>
        <p className="mt-5 text-sm text-white/60">GSM, multi-store group</p>
      </Reveal>
    </section>
  )
}
