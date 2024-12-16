import InHeroSection from "../../Components/Insights/inHeroSection"
import FilterableInsights from "../../Components/Insights/InsightFilter"
import InSolutionSection from "../../Components/Insights/InSolutonSection"
import LayoutEl from "../../Shared/LayoutEl"


const Insights=()=>{
    return (
        <>
        <LayoutEl>
            <InHeroSection/>
            <InSolutionSection/>
            <FilterableInsights/>
        </LayoutEl>
        
        </>
    )
}
export default Insights