import CareerContactForm from "../../Components/Career/CareerForm"
import CareerHeroSection from "../../Components/Career/CareerHeroSection"
import CareerSection from "../../Components/Career/CareerSection"
import CrAboutUsSection from "../../Components/Career/CrAboutUsSection"
import LayoutEl from "../../Shared/LayoutEl"



const Career=()=>{
    return (
        <>
         <LayoutEl>
            <CareerHeroSection/>
            <CareerSection/>
            <CrAboutUsSection/>
            <CareerContactForm/>
         </LayoutEl>
        </>
    )
}
export default Career