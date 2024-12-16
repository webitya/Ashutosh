
import PrjHeroSection from "../../Components/Projectss/PrjHeroSection"
import PrjSolutionSection from "../../Components/Projectss/PrjSolutionSection"
import FilterableProjects from "../../Components/Projectss/ProjectFilter"
import LayoutEl from "../../Shared/LayoutEl"
const Projects=()=>{
    return (
        <>
        
        <LayoutEl>
        <PrjHeroSection/>
        <PrjSolutionSection/>
            <FilterableProjects/>
        </LayoutEl>
        </>
    )

}
export default Projects