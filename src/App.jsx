import { BrowserRouter, Routes,Route } from "react-router-dom"
import HomePage from "./Pages/Homepage"
import MaintenancePage from "./Shared/Maintainance"
import PageNotFound from "./Pages/NotFound404"
import ContactUs from "./Pages/ContactUs"
import Projects from "./Pages/Projectss"



const App=()=>{
   return (
    <>
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<HomePage/>} />
       <Route path="*" element={<MaintenancePage/>}/>
       <Route path="/contact-us" element={<ContactUs/>}/>
       <Route path="/projects" element={<Projects/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
   )

}
export default App