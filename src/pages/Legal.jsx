import { useParams } from "react-router-dom"

const pages = {
  privacy: {
    title: "Privacy Policy",
    body: "Carvaminos uses the information you share — name, phone, and a few details about your situation — only to help you explore vehicle and dealership options. We do not sell your story to random lots. We are not a lender.",
  },
  terms: {
    title: "Terms of Service",
    body: "Carvaminos is a vehicle-matching and dealership connection service. We do not guarantee financing or vehicle availability. Dealerships make their own decisions. You choose every next step.",
  },
  cookies: {
    title: "Cookies Policy",
    body: "This site may use basic cookies to keep the page working. We do not use them to judge your credit.",
  },
}

export default function Legal() {
  const { slug } = useParams()
  const page = pages[slug] || pages.privacy
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="font-display text-4xl font-semibold">{page.title}</h1>
      <p className="mt-6 leading-relaxed text-charcoal">{page.body}</p>
    </section>
  )
}
