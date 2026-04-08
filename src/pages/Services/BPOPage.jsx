import React from "react";

import BPOHero from "../../components/Services/BPO/BPOHero";
import BPOSolutions from "../../components/Services/BPO/BPOSolutions";
import WhyChooseHR from "../../components/Services/BPO/WhyChooseHR";
import ContactSection from "../../components/Services/IT/ContactForm";
import Footer from "../../components/Footer/Footer";



export default function BPOPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
    
      <BPOHero />
      <BPOSolutions />
        <WhyChooseHR />
      <ContactSection/>
      <Footer  />
      
    </div>
  );
}