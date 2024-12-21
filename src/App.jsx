import { BrowserRouter, Routes,Route } from "react-router-dom"
import HomePage from "./Pages/Homepage"
import MaintenancePage from "./Shared/Maintainance"
import PageNotFound from "./Pages/NotFound404"
import ContactUs from "./Pages/ContactUs"
import Projects from "./Pages/Projectss"
import Products from "./Pages/Products"
import Insights from "./Pages/Insights"
import AboutUs from "./Pages/AboutUs"
import Career from "./Pages/Career"
import CaBimModelling from "./Pages/Capabilities/DesignEngineering/CaBimModelling"
import CaFloodModeling from "./Pages/Capabilities/DesignEngineering/CaFloodModeling"
import CaSewerModelling from "./Pages/Capabilities/DesignEngineering/CaSewerModelling"
import CaWaterModelling from "./Pages/Capabilities/DesignEngineering/CaWaterModelling"
import CaEaseOfLiving from "./Pages/Capabilities/Infrastructure/CaEaseOfLiving"
import CaSmartCities from "./Pages/Capabilities/Infrastructure/CaSmartCities"
import CaWasteWater from "./Pages/Capabilities/Infrastructure/CaWasteWater"
import CaWater from "./Pages/Capabilities/Infrastructure/CaWater"
import CaCleanTech from "./Pages/Capabilities/NatureBasedSolutions/CaCleanTech"
import CaEnvironmental from "./Pages/Capabilities/NatureBasedSolutions/CaEnvironmental"
import CaSolidWaste from "./Pages/Capabilities/NatureBasedSolutions/CaSolidWaste"
import CaWetLand from "./Pages/Capabilities/NatureBasedSolutions/CaWetLand"
import CaAIAnalytics from "./Pages/Capabilities/Technology/CaAIAnalytics"
import CaBlockChain from "./Pages/Capabilities/Technology/CaBlockChain"
import CaDigitalMarketing from "./Pages/Capabilities/Technology/CaDigitalMarketing"
import CaIndustrialIOT from "./Pages/Capabilities/Technology/CaIndustrialIOT"
import CaConditionAssessment from "./Pages/Capabilities/Trenchless/CaConditionAssessment"
import CaMicroTunneling from "./Pages/Capabilities/Trenchless/CaMicroTunneling"
import CaSewerRehabilitation from "./Pages/Capabilities/Trenchless/CaSewerRehabilitation"
import InClimateChange from "./Pages/Industries/InClimateChange"
import InHousing from "./Pages/Industries/InHousing"
import InMobility from "./Pages/Industries/InMobility"
import InSmartIndustry from "./Pages/Industries/InSmartIndustry"
import InWaterManagement from "./Pages/Industries/InWaterManagement"

// ==============


// ============

const App=()=>{
   return (
    <>
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<HomePage/>} />
       <Route path="*" element={<MaintenancePage/>}/>
       <Route path="/contact-us" element={<ContactUs/>}/>
       <Route path="/projects" element={<Projects/>}/>
       <Route path="/products" element={<Products/>}/>
       <Route path="/insights" element={<Insights/>}/>
       <Route path="/about-us" element={<AboutUs/>}/>
       <Route path="/career" element={<Career/>}/>
       {/* ==========CAPABILITIES ===========*/}
       {/* DesignEngineering */}
       <Route path="/design-engineering/bim-modelling" element={<CaBimModelling/>}/>
       <Route path="/design-engineering/flood-modelling" element={<CaFloodModeling/>}/>
       <Route path="/design-engineering/sewer-modelling" element={<CaSewerModelling/>}/>
       <Route path="/design-engineering/water-modelling" element={<CaWaterModelling/>}/>
       {/*Infrastructure*/}
       <Route path="/infrastructure/ease-of-living" element={<CaEaseOfLiving/>}/>
       <Route path="/infrastructure/cities" element={<CaSmartCities/>}/>
       <Route path="/infrastructure/waste-water" element={<CaWasteWater/>}/>
       <Route path="/infrastructure/water" element={<CaWater/>}/>
       {/* Nature based Solutions */}
       <Route path="/nature-based-solutions/cleantech" element={<CaCleanTech/>}/>
       <Route path="/nature-based-solutions/environmental" element={<CaEnvironmental/>}/>
       <Route path="/nature-based-solutions/solid-waste" element={<CaSolidWaste/>}/>
       <Route path="/nature-based-solutions/wetland-rejuvenation" element={<CaWetLand/>}/>
       {/* Technology*/}
       <Route path="/technology/ai-analytics" element={<CaAIAnalytics/>}/>
       <Route path="/technology/blockchain-platform" element={<CaBlockChain/>}/>
       <Route path="/technology/digital-marketing" element={<CaDigitalMarketing/>}/>
       <Route path="/technology/industrial-iot" element={<CaIndustrialIOT/>}/>
       {/* Trenchless */}
       <Route path="/trenchless/condition-assessment" element={<CaConditionAssessment/>}/>
       <Route path="/trenchless/micro-tunneling" element={<CaMicroTunneling/>}/>
       <Route path="/trenchless/sewer-rehabilitation" element={<CaSewerRehabilitation/>}/>
       {/* ===================INFRASTRUCTURE================== */}
       <Route path="/climate-change" element={<InClimateChange/>}/>
       <Route path="/smart-industry" element={<InHousing/>}/>
       <Route path="/mobility" element={<InMobility/>}/>
       <Route path="/smart-infrastructure" element={<InSmartIndustry/>}/>
       <Route path="/water-management" element={<InWaterManagement/>}/>
    </Routes>
    </BrowserRouter>

    </>
   )

}
export default App