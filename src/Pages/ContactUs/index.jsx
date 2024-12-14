import ContactForm from "../../Components/ContactUs/ContactForm"
import LayoutEl from "../../Shared/LayoutEl"



const ContactUs=()=>{
    return (
        <>
          <LayoutEl>
            <div className="py-20 flex justify-center items-center bg-blue-900 text-white">
                <h1 className="text-5xl">Contact Us</h1>
            </div>
          <ContactForm/>
          </LayoutEl>
        
        </>
    )
}
export default ContactUs