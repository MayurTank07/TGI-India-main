import React from "react";

import AboutSection from "../components/About/AboutUs";  
import WhoWeAre from "../components/About/WhoWeAre";
import JourneySection from "../components/About/JourneySection";
import ValuesSection from "../components/About/ValuesSection";
import TeamSection from "../components/About/TeamSection";
import ContactSection from "../components/About/ContactForm";
import Footer from "../components/Footer/Footer";


export default function HomePage() {
  return (
    <div className="bg-gray-100 min-h-screen">
     
      <AboutSection />
      <WhoWeAre />
      <JourneySection />
      <ValuesSection/>
      <TeamSection/>
      <ContactSection/>
      <Footer  />
      
    </div>
  );
}