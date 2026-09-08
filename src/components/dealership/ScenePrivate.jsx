import Reveal from "../Reveal"
import LaptopMock from "./LaptopMock"
import { frames } from "../../pages/dealerships/content"

export default function ScenePrivate() {
  return (
    <section id="learn-more" className="bg-canvas py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.28px] text-graphite">
            Scene II · The frame tightens
          </p>
          <h2 className="font-display mt-2 max-w-3xl text-3xl font-semibold md:text-4xl">
            We market in public; you get the leads in private.
          </h2>
        </Reveal>
        <div className="mt-12 grid items-start gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            {frames.map((item) => (
              <Reveal key={item.title}>
                <article className="rounded-2xl border border-hairline bg-cloud p-6">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal">{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <LaptopMock />
            <p className="mt-4 text-center text-xs text-graphite">
              A structured lead and task workspace for dealers
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
