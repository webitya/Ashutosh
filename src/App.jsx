import { BrowserRouter, Routes,Route } from "react-router-dom"
import HomePage from "./Pages/Homepage"
import MaintenancePage from "./Shared/Maintainance"
import PageNotFound from "./Pages/NotFound404"



const App=()=>{
   return (
    <>
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<HomePage/>} />
       <Route path="*" element={<MaintenancePage/>}/>


    </Routes>
    </BrowserRouter>
    
    </>
   )

}
export default App