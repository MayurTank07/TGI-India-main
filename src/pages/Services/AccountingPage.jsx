import AccountingHero from "../../components/Services/Accouting/AccountingHero";
import AccountingTalent from "../../components/Services/Accouting/AccountingTalent";
import WhyChooseAccounting from "../../components/Services/Accouting/WhyChooseAccounting";  
import ContactSection from "../../components/Home/ContactForm";    
import Footer from "../../components/Footer/Footer";    

export default function AccountingPage() {
  return (
    <>
      <AccountingHero />
      <AccountingTalent />  
      <WhyChooseAccounting />  
      <ContactSection />    
      <Footer />     
    </>
  );
}