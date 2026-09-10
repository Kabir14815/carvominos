import { Link } from "react-router-dom"
import PageHero from "../components/PageHero"
import { articles } from "../data"
import FinalCta from "../components/FinalCta"

const extra = [
  {
    title: "Do you guarantee approval?",
    text: "No. Carvaminos does not guarantee approval. We help you identify potential vehicle and dealership options based on what you tell us.",
    img: "/cars/nissan-suv.jpg",
    alt: "Nissan SUV",
  },
  {
    title: "What if I don’t have insurance or a license yet?",
    text: "That’s okay to tell us. We look at your individual situation and help you understand what options may still make sense to explore.",
    img: "/cars/chevy-silverado.jpg",
    alt: "Chevrolet Silverado",
  },
  {
    title: "Do I have to speak English?",
    text: "No. We are here for Spanish-speaking drivers across the U.S. ¿Hablas español? Estamos aquí para ayudarte.",
    img: "/cars/toyota-camry.png",
    alt: "Toyota Camry",
  },
]

export default function Guides() {
  const all = [...articles, ...extra]
  return (
    <>
      <PageHero
        eyebrow="Guides"
        title="Questions people ask us"
        text="Simple answers. No complicated financial language. If you are nervous about credit, start here — then tell us your situation."
        image="/cars/toyota-rav4.jpg"
        alt="Toyota RAV4"
      />
      <section className="bg-cloud py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {all.map((a) => (
            <article key={a.title} className="overflow-hidden rounded-2xl bg-canvas">
              <img src={a.img} alt={a.alt} className="h-48 w-full object-cover" />
              <div className="p-5">
                <h2 className="font-semibold">{a.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-charcoal">{a.text}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Link to="/contact" className="inline-flex rounded-md bg-primary-brand px-6 py-3 text-sm font-medium text-white">
            Still have a question? Tell us your situation
          </Link>
        </div>
      </section>
      <FinalCta />
    </>
  )
}
