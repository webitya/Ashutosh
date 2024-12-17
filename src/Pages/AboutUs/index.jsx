import AboutHero from "../../Components/AboutUs/AboutHero"
import AwardsSection from "../../Components/AboutUs/AwardsSection"
import BuildCommunitySection from "../../Components/AboutUs/BuildCommunity"
import CoreValues from "../../Components/AboutUs/CoreValues"
import HistorySection from "../../Components/AboutUs/HistorySection"
import SolutionsSection from "../../Components/AboutUs/SolutionSection"
import StatsSection from "../../Components/AboutUs/StatsSection"
import LayoutEl from "../../Shared/LayoutEl"


const AboutUs=()=>{
    return (
        <>
        <LayoutEl>
            <AboutHero/>
        <SolutionsSection/>
          <CoreValues/>
          <StatsSection/>
          <HistorySection/>
          <BuildCommunitySection/>
          <AwardsSection/>
        </LayoutEl>

        </>
    )
}
export default AboutUs