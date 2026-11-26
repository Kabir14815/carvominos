import { Link } from "react-router-dom"

const copy = {
  en: {
    transactional:
      "I agree to receive text messages from Carvamonos about my vehicle inquiry, including vehicle availability, test drives, and appointment confirmations or reminders. Message frequency varies. Message and data rates may apply. Reply STOP to opt out or HELP for help.",
    promotional:
      "I agree to receive promotional text and picture messages (SMS/MMS) from Carvamonos, including personalized vehicle offers, discounts, and vehicle photos. Consent is optional and is not a condition of purchase. Message frequency varies. Message and data rates may apply. Reply STOP to opt out or HELP for help.",
    privacyLabel: "Privacy Policy",
    termsLabel: "Terms of Service",
  },
  es: {
    transactional:
      "Acepto recibir mensajes de texto de Carvamonos sobre mi consulta, incluida la disponibilidad de vehículos, las pruebas de manejo y las confirmaciones o recordatorios de citas. La frecuencia de los mensajes puede variar. Pueden aplicarse tarifas de mensajes y datos. Responda STOP para cancelar o HELP para obtener ayuda.",
    promotional:
      "Acepto recibir mensajes promocionales de Carvamonos por texto o con imágenes (SMS/MMS), incluidas ofertas personalizadas, descuentos y fotos de vehículos. Mi consentimiento es opcional y no es un requisito para realizar una compra. La frecuencia de los mensajes puede variar. Pueden aplicarse tarifas de mensajes y datos. Responda STOP para cancelar o HELP para obtener ayuda.",
    privacyLabel: "Política de privacidad",
    termsLabel: "Términos del servicio",
  },
}

export default function SmsConsentFields({
  idPrefix = "sms",
  language = "en",
  onLanguageChange,
  transactionalChecked,
  onTransactionalChange,
  promotionalChecked,
  onPromotionalChange,
}) {
  const t = copy[language] || copy.en

  return (
    <div className="mt-4 space-y-3">
      {onLanguageChange && (
        <div className="flex items-center justify-end gap-1.5 text-xs">
          <button
            type="button"
            onClick={() => onLanguageChange("en")}
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
            onClick={() => onLanguageChange("es")}
            className={`rounded-full px-2.5 py-0.5 font-medium transition ${
              language === "es"
                ? "bg-primary-brand text-white"
                : "border border-hairline bg-canvas text-charcoal hover:border-hairline-strong"
            }`}
          >
            Español
          </button>
        </div>
      )}

      <label
        htmlFor={`${idPrefix}-transactional`}
        className="flex cursor-pointer items-start gap-3 rounded-xl border border-hairline bg-surface/60 p-3 text-xs leading-relaxed text-charcoal"
      >
        <input
          id={`${idPrefix}-transactional`}
          name="smsTransactionalConsent"
          type="checkbox"
          checked={transactionalChecked}
          onChange={(e) => onTransactionalChange(e.target.checked)}
          className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded border-hairline-strong accent-primary-brand"
        />
        <span>{t.transactional}</span>
      </label>

      <label
        htmlFor={`${idPrefix}-promotional`}
        className="flex cursor-pointer items-start gap-3 rounded-xl border border-hairline bg-surface/60 p-3 text-xs leading-relaxed text-charcoal"
      >
        <input
          id={`${idPrefix}-promotional`}
          name="smsPromotionalConsent"
          type="checkbox"
          checked={promotionalChecked}
          onChange={(e) => onPromotionalChange(e.target.checked)}
          className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded border-hairline-strong accent-primary-brand"
        />
        <span>{t.promotional}</span>
      </label>

      <p className="pt-0.5 text-xs text-graphite">
        <Link
          to="/legal/privacy"
          className="font-medium text-primary-brand underline underline-offset-2 hover:text-link-blue"
        >
          {t.privacyLabel}
        </Link>
        <span className="mx-1.5" aria-hidden="true">
          ·
        </span>
        <Link
          to="/legal/terms"
          className="font-medium text-primary-brand underline underline-offset-2 hover:text-link-blue"
        >
          {t.termsLabel}
        </Link>
      </p>
    </div>
  )
}
