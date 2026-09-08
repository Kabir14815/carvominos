import { Link } from "react-router-dom"

export default function Logo({ className = "h-14 w-auto", to = "/" }) {
  const img = (
    <img
      src="/carvaminos-logo.jpg"
      alt="Carvaminos"
      className={`${className} object-contain`}
    />
  )
  if (!to) return img
  return (
    <Link to={to} className="inline-flex items-center" aria-label="Carvaminos home">
      {img}
    </Link>
  )
}
