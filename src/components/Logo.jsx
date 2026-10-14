import { Link } from "react-router-dom"

export default function Logo({ className = "h-14 w-auto", to = "/" }) {
  const img = (
    <img
      src="/carvamonos-logo.jpg"
      alt="Carvamonos"
      className={`${className} object-contain`}
    />
  )
  if (!to) return img
  return (
    <Link to={to} className="inline-flex items-center" aria-label="Carvamonos home">
      {img}
    </Link>
  )
}
