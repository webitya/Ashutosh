import HomeCommunityLayout from "../../Components/HomePage/HomeCommunity"
import Footer from "../FooterEl"
import NavbarEl from "../NavbarEl"


const LayoutEl=(data)=>{
    return (
        <>
          <NavbarEl/>
           {data.children}
           <HomeCommunityLayout/>
           <Footer/>

        </>
    )
}
export default LayoutEl