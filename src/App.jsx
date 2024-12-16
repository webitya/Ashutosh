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
       <Route path="insights" element={<Insights/>}/>
       <Route path="/about-us" element={<AboutUs/>}/>
       <Route path="/career" element={<Career/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
   )

}
export default App