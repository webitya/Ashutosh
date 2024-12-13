import Footer from "../FooterEl"
import NavbarEl from "../NavbarEl"


const LayoutEl=(data)=>{
    return (
        <>
          <NavbarEl/>
           {data.children}
           <Footer/>

        </>
    )
}
export default LayoutEl