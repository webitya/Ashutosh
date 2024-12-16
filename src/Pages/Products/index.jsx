


import PrHeroSection from "../../Components/Products/PrHeroSection"
import FilterableProducts from "../../Components/Products/ProductFilter"
import PrSolutionSection from "../../Components/Products/PrSolutionSection"

import LayoutEl from "../../Shared/LayoutEl"
const Products=()=>{
      return (
        <>
        <LayoutEl>
            <PrHeroSection/>
            <PrSolutionSection/>
            <FilterableProducts/>
        </LayoutEl>
        
        </>
      )
}
export default Products