import { useEffect } from "react"
import { Link, useParams } from "react-router-dom"

const EFFECTIVE_DATE = "November 26, 2026"
const SUPPORT_EMAIL = "hello@carvamonos.com"

function PrivacyPolicy() {
  return (
    <>
      <h1 className="font-display text-4xl font-semibold">Carvamonos Privacy Policy</h1>
      <p className="mt-3 text-sm text-graphite">Effective date: {EFFECTIVE_DATE}</p>

      <div className="mt-8 space-y-6 leading-relaxed text-charcoal">
        <section>
          <h2 className="font-display text-xl font-semibold text-ink">Who we are</h2>
          <p className="mt-2">
            Carvamonos is operated by Tikun Technologies LLC. This Privacy Policy explains how we
            handle information when you contact us about a vehicle, ask us to arrange a dealership
            visit, or sign up for Carvamonos text messages.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-ink">Information we collect</h2>
          <p className="mt-2">
            When you submit an inquiry, we collect the details you provide. These may include your
            name, mobile number, email address, the vehicle you are interested in, and your
            preferred appointment time. If you contact us again, we may keep your messages together
            with the original inquiry so our team can follow up on your request.
          </p>
          <p className="mt-3">
            When you choose to receive text messages, we record your messaging preferences. These
            distinguish permission to discuss your inquiry from permission to send promotional
            offers. We also record unsubscribe requests so we can honor them.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-ink">How we use your information</h2>
          <p className="mt-2">
            We use your inquiry details to answer questions, check vehicle availability, coordinate
            test drives, and confirm or reschedule appointments. If you separately sign up for
            promotions, we may use the vehicle preferences you share to send relevant offers,
            discounts, or photos by SMS or MMS.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-ink">
            Working with dealerships and service providers
          </h2>
          <p className="mt-2">
            When you ask us to arrange a visit, we may share details needed to fulfill that request
            with the dealership handling your appointment. For example, the dealership may need your
            name, the vehicle you want to see, and the agreed appointment time. Service providers
            that deliver our messages or maintain our customer communication systems may process
            information on our behalf.
          </p>
          <p className="mt-3">
            We do not sell or share your SMS opt-in data or personal information with third parties
            for marketing purposes. We do not share your mobile number or messaging consent with
            affiliates for their own marketing. Your choice to receive Carvamonos promotions applies
            to messages from Carvamonos.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-ink">Your choices</h2>
          <p className="mt-2">
            You can submit a vehicle inquiry without signing up for text messages. If you have
            subscribed, reply STOP to unsubscribe or HELP for assistance. You may also contact us to
            ask about the information associated with your inquiry or to request a correction or
            deletion.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-ink">Contact us</h2>
          <p className="mt-2">
            For privacy questions or requests, email{" "}
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="font-medium text-primary-brand underline underline-offset-2 hover:text-link-blue"
            >
              {SUPPORT_EMAIL}
            </a>
            . Please identify the inquiry or phone number associated with your request so our team
            can locate it.
          </p>
        </section>
      </div>
    </>
  )
}

function TermsOfService() {
  return (
    <>
      <h1 className="font-display text-4xl font-semibold">Carvamonos Terms of Service</h1>
      <p className="mt-3 text-sm text-graphite">Effective date: {EFFECTIVE_DATE}</p>

      <div className="mt-8 space-y-6 leading-relaxed text-charcoal">
        <section>
          <h2 className="font-display text-xl font-semibold text-ink">About the service</h2>
          <p className="mt-2">
            Tikun Technologies LLC operates Carvamonos to help customers get information about
            vehicles and arrange visits with participating dealerships. You can use our inquiry form
            to ask about a vehicle, request a test drive, or follow up on an appointment.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-ink">
            Vehicle information and appointments
          </h2>
          <p className="mt-2">
            Inventory, pricing, incentives, and appointment availability may change. Before
            traveling or making a purchase decision, confirm availability and the terms of any
            advertised offer with the dealership. An appointment confirmation reserves a time to
            visit. Any vehicle reservation or purchase agreement is handled separately with the
            dealership.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-ink">
            Carvamonos SMS and MMS program
          </h2>
          <p className="mt-2">
            You can choose either or both messaging options on our inquiry form:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              <strong className="font-semibold text-ink">
                Vehicle inquiry and appointment texts.
              </strong>{" "}
              A Carvamonos representative may answer questions about the vehicle you requested,
              follow up on availability, and help schedule or confirm your visit.
            </li>
            <li>
              <strong className="font-semibold text-ink">
                Promotional texts and picture messages.
              </strong>{" "}
              If you select the separate promotional option, Carvamonos may send personalized
              vehicle offers, discounts, inventory updates, and vehicle photos by SMS or MMS.
            </li>
          </ul>
          <p className="mt-3">
            Both choices are optional. You can submit an inquiry or make a purchase without
            consenting to promotional messages.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-ink">Frequency and charges</h2>
          <p className="mt-2">
            Message frequency varies based on your inquiry, your conversations with our team, and
            the messaging options you select. Message and data rates may apply under your wireless
            plan. Contact your wireless provider for details about your rates.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-ink">
            How to unsubscribe or get help
          </h2>
          <p className="mt-2">
            Reply STOP to a Carvamonos message to unsubscribe. You may receive one final text
            confirming your request.
          </p>
          <p className="mt-3">
            Reply HELP for assistance, or email{" "}
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="font-medium text-primary-brand underline underline-offset-2 hover:text-link-blue"
            >
              {SUPPORT_EMAIL}
            </a>{" "}
            if you have a question about the program or need help with your messaging preferences.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-ink">
            Message delivery and privacy
          </h2>
          <p className="mt-2">
            Message delivery depends on your wireless provider and network availability. Carriers
            are not liable for delayed or undelivered messages. For information about how Tikun
            Technologies LLC handles inquiry details, mobile numbers, and messaging preferences,
            read the{" "}
            <Link
              to="/legal/privacy"
              className="font-medium text-primary-brand underline underline-offset-2 hover:text-link-blue"
            >
              Carvamonos Privacy Policy
            </Link>
            .
          </p>
        </section>
      </div>
    </>
  )
}

function CookiesPolicy() {
  return (
    <>
      <h1 className="font-display text-4xl font-semibold">Cookies Policy</h1>
      <p className="mt-6 leading-relaxed text-charcoal">
        This site may use basic cookies to keep the page working. We do not use them to judge your
        credit.
      </p>
    </>
  )
}

export default function Legal({ slug: slugProp }) {
  const { slug: routeSlug } = useParams()
  const activeSlug = slugProp || routeSlug || "privacy"

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [activeSlug])

  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      {activeSlug === "terms" ? (
        <TermsOfService />
      ) : activeSlug === "cookies" ? (
        <CookiesPolicy />
      ) : (
        <PrivacyPolicy />
      )}
    </section>
  )
}
