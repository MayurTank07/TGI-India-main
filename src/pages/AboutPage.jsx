import React from "react";
import SEO from "../components/SEO";

import AboutSection from "../components/About/AboutUs";
import WhoWeAre from "../components/About/WhoWeAre";
import JourneySection from "../components/About/JourneySection";
import ValuesSection from "../components/About/ValuesSection";
import TeamSection from "../components/About/TeamSection";
import ContactSection from "../components/About/ContactForm";
import Footer from "../components/Footer/Footer";

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About Talent Group of India",
  "url": "https://www.talentgroupofindia.com/about",
  "description": "Learn about Talent Group of India, Mumbai's leading HR recruitment and staffing agency founded in 2012 with 10+ years of excellence and 60,000+ successful placements.",
  "mainEntity": {
    "@type": "Organization",
    "name": "Talent Group of India",
    "foundingDate": "2012",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": "200"
    },
    "areaServed": ["Mumbai", "Pune", "Delhi", "Bangalore", "Chennai", "Hyderabad"]
  }
};

export default function AboutPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <SEO
        title="About Us | Leading HR Recruitment Agency in Mumbai Since 2012"
        description="Talent Group of India has been Mumbai's trusted HR recruitment partner since 2012. Discover our story, values, expert team, and 10+ years of placing top talent across IT, BPO, Finance, Healthcare and more."
        canonical="/about"
        schema={aboutSchema}
      />
      <AboutSection />
      <WhoWeAre />
      <JourneySection />
      <ValuesSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
