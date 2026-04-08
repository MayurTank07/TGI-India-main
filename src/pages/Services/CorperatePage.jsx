import React from "react";
import CorperateHero from "../../components/Services/CorperateHiring/CorperateHero";
import SolutionsSection from "../../components/Services/CorperateHiring/SolutionSection";
import ProcessSection from "../../components/Services/CorperateHiring/ProcessSection";
import WhyChooseSection from "../../components/Services/CorperateHiring/WhyChooseSection";
import ContactSection from "../../components/Services/IT/ContactForm";
import Footer from "../../components/Footer/Footer";



export default function BPOPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
        <CorperateHero/>
      <SolutionsSection/>
      <ProcessSection/>
      <WhyChooseSection/>
      <ContactSection/>
      <Footer  />
      
    </div>
  );
}