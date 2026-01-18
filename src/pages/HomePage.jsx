//Section Imports
import FeaturesSection from "../sections/FeaturesSection"
import HeroSection from "../sections/HeroSection"
import PricingSection from "../sections/PricingSection"
import LogoCarousel from "../sections/LogoCarousel"
import TestimonialSection from "../sections/TestimonialSection"
import Footer from "../sections/Footer"


const HomePage = () => {
  return (
    <div className="bg-black mx-auto">

        {/* Hero Section */}
        <HeroSection/>

         {/* Logo Carousel Section */}
         <LogoCarousel/>

         {/* features section */}
         <FeaturesSection/>

         {/* Pricing section */}
         <PricingSection/>

         {/* Testimonial Section */}
         <TestimonialSection/>

         {/* footer section */}
         <Footer/>
    </div>
  )
}

export default HomePage