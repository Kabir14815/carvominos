import { useState } from "react"
import PageHero from "../components/PageHero"
import FAQ from "../components/FAQ"
import FinalCta from "../components/FinalCta"
import SmsConsentFields from "../components/SmsConsentFields"
import { whatsapp } from "../data"

function getInitialLanguage() {
  if (typeof window !== "undefined") {
    const param = new URLSearchParams(window.location.search).get("lang")
    if (param?.toLowerCase().startsWith("es")) return "es"
    if (document.documentElement.lang?.toLowerCase().startsWith("es")) return "es"
  }
  return "en"
}

const formCopy = {
  en: {
    nameLabel: "Your name",
    namePlaceholder: "Maria",
    phoneLabel: "Phone or WhatsApp",
    phonePlaceholder: "(470) 000-0000",
    preferredLanguageLabel: "Preferred language",
    languageOptions: [
      { value: "Spanish", label: "Spanish" },
      { value: "English", label: "English" },
      { value: "Either", label: "Either is fine" },
    ],
    situationLabel: "Your situation",
    situations: [
      "Bad or low credit",
      "Little or no credit history",
      "ITIN / no Social Security number",
      "Matricula or passport ID",
      "Self employed — no pay stubs",
      "Documentation issues",
      "No driver license",
      "Prime credit / best rate",
      "Lease deals",
      "Small down payment",
      "Rejected by a dealership before",
      "I’m not sure — I just need a car",
    ],
    vehicleLabel: "What kind of vehicle?",
    vehicles: [
      "Sedan (Camry, Civic, Elantra)",
      "SUV (RAV4, Rogue)",
      "Truck (F-150, Tacoma, Silverado)",
      "I’m open",
    ],
    notesLabel: "Anything else we should know?",
    notesPlaceholder: "I was turned away last month. I have about $1,000 to put down...",
    freeWord: "Free",
    freeSub: "to start",
    submit: "See My Options",
    sentMessage:
      "Thank you. We received your note. A Carvamonos guide will follow up — no judgment, and no approval promise.",
  },
  es: {
    nameLabel: "Tu nombre",
    namePlaceholder: "María",
    phoneLabel: "Teléfono o WhatsApp",
    phonePlaceholder: "(470) 000-0000",
    preferredLanguageLabel: "Idioma preferido",
    languageOptions: [
      { value: "Spanish", label: "Español" },
      { value: "English", label: "Inglés" },
      { value: "Either", label: "Cualquiera está bien" },
    ],
    situationLabel: "Tu situación",
    situations: [
      "Crédito malo o bajo",
      "Poco o ningún historial de crédito",
      "ITIN / sin número de Seguro Social",
      "Matrícula consular o pasaporte",
      "Trabajador independiente — sin talones de pago",
      "Problemas con documentos",
      "Sin licencia de conducir",
      "Buen crédito / mejor tasa",
      "Ofertas de arrendamiento (lease)",
      "Enganche pequeño",
      "Rechazado anteriormente en un concesionario",
      "No estoy seguro — solo necesito un auto",
    ],
    vehicleLabel: "¿Qué tipo de vehículo buscas?",
    vehicles: [
      "Sedán (Camry, Civic, Elantra)",
      "SUV (RAV4, Rogue)",
      "Camioneta (F-150, Tacoma, Silverado)",
      "Estoy abierto a opciones",
    ],
    notesLabel: "¿Algo más que debamos saber?",
    notesPlaceholder:
      "Me rechazaron el mes pasado. Tengo alrededor de $1,000 para el enganche...",
    freeWord: "Gratis",
    freeSub: "para empezar",
    submit: "Ver mis opciones",
    sentMessage:
      "Gracias. Recibimos tu mensaje. Un guía de Carvamonos se pondrá en contacto contigo — sin juicios y sin promesas de aprobación.",
  },
}

export default function Contact() {
  const initialLang = getInitialLanguage()
  const [sent, setSent] = useState(false)
  const [language, setLanguage] = useState(initialLang)
  const [preferredLanguage, setPreferredLanguage] = useState(
    initialLang === "es" ? "Spanish" : "English"
  )
  const [transactionalConsent, setTransactionalConsent] = useState(false)
  const [promotionalConsent, setPromotionalConsent] = useState(false)
  const [termsConsent, setTermsConsent] = useState(false)

  const t = formCopy[language] || formCopy.en

  const handleFormLanguageChange = (nextLang) => {
    setLanguage(nextLang)
    setPreferredLanguage(nextLang === "es" ? "Spanish" : "English")
  }

  const handlePreferredLanguageChange = (value) => {
    setPreferredLanguage(value)
    if (value === "Spanish") {
      setLanguage("es")
    } else if (value === "English") {
      setLanguage("en")
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us about your situation"
        text="This is a conversation, not a loan application. Share a few basics. We’ll help you see which vehicle and dealership options may make sense."
        image="/cars/hyundai-elantra.jpg"
        alt="Hyundai Elantra"
      />

      <section id="see-my-options" className="bg-cloud py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <form
            className="rounded-3xl border border-hairline bg-canvas p-6 md:p-8"
            onSubmit={(e) => {
              e.preventDefault()
              setSent(true)
            }}
          >
            <div className="mb-4 flex items-center justify-end gap-1.5 text-xs">
              <button
                type="button"
                onClick={() => handleFormLanguageChange("en")}
                className={`rounded-full px-2.5 py-0.5 font-medium transition ${
                  language === "en"
                    ? "bg-primary-brand text-white"
                    : "border border-hairline bg-canvas text-charcoal hover:border-hairline-strong"
                }`}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => handleFormLanguageChange("es")}
                className={`rounded-full px-2.5 py-0.5 font-medium transition ${
                  language === "es"
                    ? "bg-primary-brand text-white"
                    : "border border-hairline bg-canvas text-charcoal hover:border-hairline-strong"
                }`}
              >
                Español
              </button>
            </div>

            <label className="block text-sm font-semibold">{t.nameLabel}</label>
            <input
              required
              className="mt-1 w-full rounded-xl border border-hairline px-3 py-2"
              placeholder={t.namePlaceholder}
            />

            <label className="mt-4 block text-sm font-semibold">{t.phoneLabel}</label>
            <input
              required
              type="tel"
              className="mt-1 w-full rounded-xl border border-hairline px-3 py-2"
              placeholder={t.phonePlaceholder}
            />

            <label className="mt-4 block text-sm font-semibold">{t.preferredLanguageLabel}</label>
            <select
              value={preferredLanguage}
              onChange={(e) => handlePreferredLanguageChange(e.target.value)}
              className="mt-1 w-full rounded-xl border border-hairline px-3 py-2"
            >
              {t.languageOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>

            <label className="mt-4 block text-sm font-semibold">{t.situationLabel}</label>
            <select className="mt-1 w-full rounded-xl border border-hairline px-3 py-2">
              {t.situations.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>

            <label className="mt-4 block text-sm font-semibold">{t.vehicleLabel}</label>
            <select className="mt-1 w-full rounded-xl border border-hairline px-3 py-2">
              {t.vehicles.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>

            <label className="mt-4 block text-sm font-semibold">{t.notesLabel}</label>
            <textarea
              className="mt-1 min-h-28 w-full rounded-xl border border-hairline px-3 py-2"
              placeholder={t.notesPlaceholder}
            />

            <SmsConsentFields
              idPrefix="contact-sms"
              language={language}
              transactionalChecked={transactionalConsent}
              onTransactionalChange={setTransactionalConsent}
              promotionalChecked={promotionalConsent}
              onPromotionalChange={setPromotionalConsent}
              termsChecked={termsConsent}
              onTermsChange={setTermsConsent}
            />

            <p className="mt-4 font-display text-3xl font-bold text-primary-brand">
              {t.freeWord} <span className="text-sm font-semibold text-graphite">{t.freeSub}</span>
            </p>
            <button className="mt-4 w-full rounded-md bg-primary-brand py-3 text-sm font-medium text-white">
              {t.submit}
            </button>
            {sent && <p className="mt-3 text-sm text-charcoal">{t.sentMessage}</p>}
          </form>

          <div>
            <h2 className="font-display text-2xl font-semibold">¿Hablas español? Estamos aquí para ayudarte.</h2>
            <p className="mt-3 leading-relaxed text-charcoal">
              You can write in Spanish. We understand that buying a car is stressful when your
              credit is not perfect. Starting here does not commit you to a dealership or a loan.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-charcoal">
              <li>hello@carvamonos.com</li>
              <li>
                <a href={whatsapp.href} target="_blank" rel="noreferrer" className="font-semibold text-primary-brand">
                  WhatsApp {whatsapp.display}
                </a>
              </li>
              <li>Se habla español</li>
              <li>Serving the United States</li>
              <li>HQ: Atlanta, Georgia</li>
            </ul>
            <img
              src="/cars/jeep-wrangler.jpg"
              alt="Jeep Wrangler"
              className="mt-8 h-56 w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>
      <FAQ />
      <FinalCta />
    </>
  )
}
