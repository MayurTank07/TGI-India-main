import React from "react";

import Home from "../components/Home/Home";
import Services from "../components/Home/Services";
import Approach from "../components/Home/Approach";
import WhyTrust from "../components/Home/WhyTrust";
import StatsSection from "../components/Home/StatsSection";
import ContactForm from "../components/Home/ContactForm";
import Footer from "../components/Footer/Footer";

export default function HomePage() {
  return (
    <div className="bg-gray-100 min-h-screen">
  
      <Home />
      <Services />
      <Approach />
      <WhyTrust />
      <StatsSection />
      <ContactForm />
      <Footer />
    </div>
  );
}