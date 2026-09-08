import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Overlays from "./Overlays"

export default function Layout() {
  return (
    <div id="top" className="min-h-screen bg-canvas pb-24">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <Overlays />
    </div>
  )
}
