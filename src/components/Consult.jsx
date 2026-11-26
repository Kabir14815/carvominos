import { useState } from "react"
import Reveal from "./Reveal"
import SmsConsentFields from "./SmsConsentFields"

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
    freeWord: "Free",
    freeSub: "to start",
    submit: "See My Options",
    sentMessage: "We successfully received your query. Our team will contact you shortly.",
  },
  es: {
    nameLabel: "Tu nombre",
    namePlaceholder: "María",
    phoneLabel: "Teléfono o WhatsApp",
    phonePlaceholder: "(470) 000-0000",
    freeWord: "Gratis",
    freeSub: "para empezar",
    submit: "Ver mis opciones",
    sentMessage:
      "Recibimos tu consulta correctamente. Nuestro equipo se pondrá en contacto contigo pronto.",
  },
}

export default function Consult() {
  const [sent, setSent] = useState(false)
  const [language, setLanguage] = useState(getInitialLanguage)
  const [transactionalConsent, setTransactionalConsent] = useState(false)
  const [promotionalConsent, setPromotionalConsent] = useState(false)
  const [termsConsent, setTermsConsent] = useState(false)

  const t = formCopy[language] || formCopy.en

  return (
    <section id="see-my-options" className="bg-canvas py-8 md:py-10">
      <div className="mx-auto max-w-7xl rounded-3xl bg-cloud px-6 py-12 sm:px-10">
        <Reveal className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold text-primary-brand">Not sure where to start?</p>
            <h2 className="font-display mt-2 text-3xl font-semibold md:text-4xl">
              Tell us about your situation
            </h2>
            <p className="mt-4 max-w-xl text-charcoal">
              Share a few basics about your credit, budget, down payment, and what you need.
              We&apos;ll help you see which options may make sense — without the pressure of a
              dealership office.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold">
              <span className="rounded-full bg-canvas px-3 py-1">Private conversation</span>
              <span className="rounded-full bg-canvas px-3 py-1">English or Spanish</span>
            </div>
          </div>
          <form
            className="rounded-2xl border border-hairline bg-canvas p-6"
            onSubmit={(e) => {
              e.preventDefault()
              e.currentTarget.reset()
              setTransactionalConsent(false)
              setPromotionalConsent(false)
              setTermsConsent(false)
              setSent(true)
            }}
          >
            <div className="mb-4 flex items-center justify-end gap-1.5 text-xs">
              <button
                type="button"
                onClick={() => setLanguage("en")}
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
                onClick={() => setLanguage("es")}
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
            <SmsConsentFields
              idPrefix="consult-sms"
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
            <button className="mt-4 w-full rounded-full bg-primary-brand py-3 text-sm font-semibold text-white">
              {t.submit}
            </button>
            {sent && <p className="mt-3 text-sm text-charcoal">{t.sentMessage}</p>}
          </form>
        </Reveal>
      </div>
    </section>
  )
}
