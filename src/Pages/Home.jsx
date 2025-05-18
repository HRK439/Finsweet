import Banner from "../Components/Banner/Banner"
import Blog from "../Components/Blog/Blog"
import ContactForm from "../Components/ContactForm/ContactForm"
import FAQ from "../Components/FAQ/FAQ"
import Featurs from "../Components/Featurs/Featurs"
import Footer from "../Components/Footer/Footer"
import OurWork from "../Components/OurWork/OurWork"
import Testimonials from "../Components/Testimonials/Testimonials"
import Work from "../Components/Work/Work"

const Home = () => {
  return (
    <>
    <Banner/>
    <Work/>
    <OurWork/>
    <Featurs/>
    <Testimonials/>
    <FAQ/>
    <ContactForm/>
    <Blog/>
    <Footer/>
    </>
  )
}

export default Home