import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { Menu, X } from "lucide-react"
import Logo from "./Logo"

const links = [
  { href: "/options", label: "Options" },
  { href: "/help", label: "Help" },
  { href: "/dealers", label: "Dealers" },
  { href: "/dealerships", label: "For Dealerships" },
  { href: "/about", label: "About" },
  { href: "/guides", label: "Guides" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-canvas/90 backdrop-blur">
      <div className="mx-auto flex h-[84px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo className="h-[72px] w-auto" />

        <nav className="hidden items-center gap-5 text-sm font-medium text-charcoal lg:flex" aria-label="Main navigation">
          {links.map((l) => (
            <NavLink
              key={l.href}
              to={l.href}
              className={({ isActive }) =>
                `transition hover:text-primary-brand ${isActive ? "text-primary-brand" : ""}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Link to="/contact" className="rounded-md bg-primary-brand px-4 py-2 text-sm font-medium text-white transition hover:bg-link-blue">
            See My Options
          </Link>
          <Link to="/contact" className="text-sm font-medium text-charcoal hover:text-primary-brand">
            Contact
          </Link>
        </div>

        <button className="rounded-md p-2 lg:hidden" aria-label="Open navigation menu" onClick={() => setOpen((v) => !v)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-hairline bg-canvas px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-3 text-sm font-medium">
            {links.map((l) => (
              <Link key={l.href} to={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="rounded-md bg-primary-brand px-4 py-2 text-center text-white"
            >
              See My Options
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
