import { Link } from "react-router-dom"
import Logo from "./Logo"
import { sales, whatsapp } from "../data"

export default function Footer() {
  return (
    <footer className="border-t border-hairline bg-canvas py-12">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <Logo className="h-24 w-auto" to="/" />
          <p className="mt-2 text-sm text-charcoal">
            Helping Spanish-speaking drivers across the U.S. find vehicle and dealership options
            that may fit. Based in Atlanta.
          </p>
        </div>
        <div>
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.7px]">Support for your situation</h3>
          <ul className="space-y-2 text-sm text-charcoal">
            <li><Link to="/options#bad-credit">Bad credit</Link></li>
            <li><Link to="/options#documentation">Documentation issues</Link></li>
            <li><Link to="/options#itin">ITIN holders</Link></li>
            <li><Link to="/options#no-license">No driver license</Link></li>
            <li><Link to="/options">All situations</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.7px]">About</h3>
          <ul className="space-y-2 text-sm text-charcoal">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/dealerships">For Dealerships</Link></li>
            <li><Link to="/options">All Options</Link></li>
            <li><Link to="/guides">Guides</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/legal/privacy">Privacy Policy</Link></li>
            <li><Link to="/legal/terms">Terms of Service</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.7px]">Contact</h3>
          <ul className="space-y-2 text-sm text-charcoal">
            <li>hello@carvaminos.com</li>
            <li>
              <a href={whatsapp.href} target="_blank" rel="noreferrer">
                {whatsapp.display}
              </a>
            </li>
            <li>
              <a href={sales.mailto}>{sales.email}</a>
            </li>
            <li>Se habla español</li>
            <li>Serving the United States</li>
            <li>HQ: Atlanta, Georgia</li>
          </ul>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-7xl px-4 text-xs text-graphite sm:px-6 lg:px-8">
        © 2026 CARVAMINOS. ALL RIGHTS RESERVED. A vehicle-matching service. Not a lender. Not a
        dealership.
      </p>
    </footer>
  )
}
