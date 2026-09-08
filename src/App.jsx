import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Options from "./pages/Options"
import Help from "./pages/Help"
import Dealers from "./pages/Dealers"
import Dealerships from "./pages/Dealerships"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Guides from "./pages/Guides"
import Legal from "./pages/Legal"

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/options" element={<Options />} />
        <Route path="/help" element={<Help />} />
        <Route path="/dealers" element={<Dealers />} />
        <Route path="/dealerships" element={<Dealerships />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/guides" element={<Guides />} />
        <Route path="/legal/:slug" element={<Legal />} />
      </Route>
    </Routes>
  )
}
