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
       <Route path="" element={<CaBimModelling/>}/>
       <Route path="" element={<CaFloodModeling/>}/>
       <Route path="" element={<CaSewerModelling/>}/>
       <Route path="" element={<CaWaterModelling/>}/>
       {/*Infrastructure*/}
       <Route path="" element={<CaEaseOfLiving/>}/>
       <Route path="" element={<CaSmartCities/>}/>
       <Route path="" element={<CaWasteWater/>}/>
       <Route path="" element={<CaWater/>}/>
       {/* Nature based Solutions */}
       <Route path="" element={<CaCleanTech/>}/>
       <Route path="" element={<CaEnvironmental/>}/>
       <Route path="" element={<CaSolidWaste/>}/>
       <Route path="" element={<CaWetLand/>}/>
       {/* Technology*/}
       <Route path="" element={<CaAIAnalytics/>}/>
       <Route path="" element={<CaBlockChain/>}/>
       <Route path="" element={<CaDigitalMarketing/>}/>
       <Route path="" element={<CaIndustrialIOT/>}/>
       {/* Trenchless */}
       <Route path="" element={<CaConditionAssessment/>}/>
       <Route path="" element={<CaMicroTunneling/>}/>
       <Route path="" element={<CaSewerRehabilitation/>}/>
       {/* ===================INFRASTRUCTURE================== */}
       <Route path="" element={<InClimateChange/>}/>
       <Route path="" element={<InHousing/>}/>
       <Route path="" element={<InMobility/>}/>
       <Route path="" element={<InSmartIndustry/>}/>
       <Route path="" element={<InWaterManagement/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
   )

}
export default App