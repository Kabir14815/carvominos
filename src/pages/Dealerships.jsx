import DealerHero from "../components/dealership/DealerHero"
import ScenePrivate from "../components/dealership/ScenePrivate"
import WhyDealers from "../components/dealership/WhyDealers"
import LeadModel from "../components/dealership/LeadModel"
import SceneHandoff from "../components/dealership/SceneHandoff"
import DealerQuote from "../components/dealership/DealerQuote"
import DealerFaq from "../components/dealership/DealerFaq"
import DealerFinale from "../components/dealership/DealerFinale"

export default function Dealerships() {
  return (
    <>
      <DealerHero />
      <ScenePrivate />
      <WhyDealers />
      <LeadModel />
      <SceneHandoff />
      <DealerQuote />
      <DealerFaq />
      <DealerFinale />
    </>
  )
}
