import HealthcareHero from "../../components/Services/Healthcare/HealthcareHero"; 
import HealthcareOffer from "../../components/Services/Healthcare/HealthcareOffer";
import WhyChooseHealthcare from "../../components/Services/Healthcare/WhyChooseHealthcare";
import ContactSection from "../../components/Home/ContactForm";    
import Footer from "../../components/Footer/Footer";    

export default function HealthcarePage() {
  return (
    <>
      <HealthcareHero />
      <HealthcareOffer />  
      <WhyChooseHealthcare />
      <ContactSection />    
      <Footer />     
    </>
  );
}