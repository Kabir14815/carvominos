import { useEffect, useState } from "react"
import { CheckCircle2 } from "lucide-react"
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
    sentTitle: "Query received!",
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
    sentTitle: "¡Consulta recibida!",
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

  useEffect(() => {
    if (!sent) return
    const timer = setTimeout(() => setSent(false), 4000)
    return () => clearTimeout(timer)
  }, [sent])

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
          {sent ? (
            <div
              role="status"
              aria-live="polite"
              className="flex min-h-[340px] flex-col items-center justify-center rounded-2xl border border-hairline bg-canvas p-8 text-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                <CheckCircle2 className="h-10 w-10" strokeWidth={2} />
              </div>
              <h3 className="font-display mt-5 text-2xl font-semibold text-ink">{t.sentTitle}</h3>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-charcoal">{t.sentMessage}</p>
            </div>
          ) : (
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
                {t.freeWord}{" "}
                <span className="text-sm font-semibold text-graphite">{t.freeSub}</span>
              </p>
              <button className="mt-4 w-full rounded-full bg-primary-brand py-3 text-sm font-semibold text-white">
                {t.submit}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
