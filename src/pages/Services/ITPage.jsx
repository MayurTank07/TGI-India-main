import React from "react";

import ITServicesHero from "../../components/Services/IT/ITServicesHero";
import WhatWeOffer from "../../components/Services/IT/WhatWeOffer";
import ITHiringProcess from "../../components/Services/IT/ITHiringProcess";
import WhyChooseIT from "../../components/Services/IT/WhyChooseIT";
import ContactSection from "../../components/Services/IT/ContactForm";
import Footer from "../../components/Footer/Footer";



export default function ITPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
    
      <ITServicesHero />
      <WhatWeOffer />
      <ITHiringProcess />
      <WhyChooseIT />
      <ContactSection/>
      <Footer  />
      
    </div>
  );
}