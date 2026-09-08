import { useState } from "react"
import { Link } from "react-router-dom"
import { MessageCircle, X } from "lucide-react"
import { whatsapp } from "../data"

export default function Overlays() {
  const [showTip, setShowTip] = useState(true)
  const [showBar, setShowBar] = useState(true)

  return (
    <>
      {showBar && (
        <div className="fixed bottom-5 left-1/2 z-50 flex w-[min(640px,calc(100%-2rem))] -translate-x-1/2 items-center gap-3 rounded-full border border-hairline bg-canvas px-3 py-2 shadow-[0_12px_40px_rgba(26,26,26,0.14)]">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-brand text-white">
            <MessageCircle className="h-5 w-5" />
          </span>
          <p className="min-w-0 flex-1 text-sm text-charcoal">
            <strong className="text-ink">¿Hablas español?</strong> A simple conversation about your
            situation.
          </p>
          <Link
            to="/contact"
            className="shrink-0 rounded-full bg-primary-brand px-4 py-2 text-xs font-semibold text-white"
          >
            See My Options
          </Link>
          <button
            type="button"
            aria-label="Dismiss consultancy prompt"
            className="shrink-0 text-graphite hover:text-ink"
            onClick={() => setShowBar(false)}
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

      <div className="fixed bottom-5 right-5 z-50 flex items-end gap-2">
        {showTip && (
          <div className="max-w-[210px] rounded-2xl border border-hairline bg-canvas p-3 shadow-[0_4px_20px_rgba(26,26,26,0.12)]">
            <div className="flex items-start gap-2">
              <div className="min-w-0">
                <p className="text-xs font-semibold leading-snug text-ink">Chat with us on WhatsApp</p>
                <p className="mt-0.5 text-xs leading-snug text-charcoal">
                  We&apos;re here. Tell us your situation.
                </p>
              </div>
              <button type="button" aria-label="Dismiss" className="text-graphite hover:text-ink" onClick={() => setShowTip(false)}>
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        )}
        <a
          href={whatsapp.href}
          target="_blank"
          rel="noreferrer"
          aria-label={`Chat on WhatsApp at ${whatsapp.display}`}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg"
        >
          <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden>
            <path d="M17.47 14.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.48-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5 0 1.47 1.08 2.9 1.23 3.1.15.2 2.13 3.25 5.16 4.56 1.92.83 2.28.75 2.7.7.42-.05 1.36-.55 1.55-1.1.19-.54.19-1 .13-1.1-.05-.1-.27-.17-.57-.32z" />
            <path d="M12.04 2C6.5 2 2 6.48 2 12c0 1.77.46 3.45 1.28 4.9L2 22l5.25-1.38A9.96 9.96 0 0 0 12.04 22C17.57 22 22 17.52 22 12S17.57 2 12.04 2zm0 18.15c-1.64 0-3.2-.48-4.52-1.36l-.32-.2-3.11.82.83-3.04-.21-.33A8.13 8.13 0 0 1 3.87 12c0-4.5 3.67-8.15 8.17-8.15 4.5 0 8.16 3.65 8.16 8.15 0 4.49-3.66 8.15-8.16 8.15z" />
          </svg>
        </a>
      </div>
    </>
  )
}
