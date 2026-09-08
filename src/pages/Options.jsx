import { Link } from "react-router-dom"
import PageHero from "../components/PageHero"
import FinalCta from "../components/FinalCta"
import { optionPages } from "./pageContent"

export default function Options() {
  return (
    <>
      <PageHero
        eyebrow="Options"
        title="Your credit isn’t the whole story"
        text="Bad credit, no credit, a small down payment, or a past rejection — everyone’s situation is different. We help Spanish-speaking drivers in Atlanta explore vehicles and dealerships that may fit."
        image="/cars/toyota-rav4.jpg"
        alt="Toyota RAV4"
      />

      <section className="bg-cloud py-16 md:py-20">
        <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
          {optionPages.map((item, i) => (
            <article
              id={item.id}
              key={item.id}
              className="grid items-center gap-8 rounded-3xl bg-canvas p-6 md:p-10 lg:grid-cols-2"
            >
              <img
                src={item.image}
                alt={item.alt}
                className={`h-72 w-full rounded-2xl object-cover ${i % 2 === 1 ? "lg:order-2" : ""}`}
              />
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.28px] text-graphite">{item.eyebrow}</p>
                <h2 className="font-display mt-2 text-3xl font-semibold">{item.title}</h2>
                <p className="mt-3 font-medium text-ink">{item.lead}</p>
                {item.body.map((p) => (
                  <p key={p} className="mt-3 text-sm leading-relaxed text-charcoal">
                    {p}
                  </p>
                ))}
                <ul className="mt-4 space-y-2 text-sm text-charcoal">
                  {item.points.map((p) => (
                    <li key={p}>• {p}</li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex rounded-md bg-primary-brand px-5 py-2.5 text-sm font-medium text-white"
                >
                  Tell us about your situation
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <FinalCta />
    </>
  )
}
