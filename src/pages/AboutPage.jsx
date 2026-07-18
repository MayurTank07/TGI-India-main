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
  "description": "Learn about Talent Group of India, a Mumbai-based HR recruitment company supporting employers and job seekers across India.",
  "mainEntity": {
    "@type": "Organization",
    "name": "Talent Group of India",
    "foundingDate": "2012",
    "url": "https://www.talentgroupofindia.com",
    "areaServed": ["India", "Mumbai", "Bangalore", "Gujarat"]
  }
};

export default function AboutPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <SEO
        title="About Us | HR Recruitment Company in Mumbai"
        description="Learn how Talent Group of India supports recruitment, staffing and manpower hiring for IT, BPO, Finance, Healthcare, Non-IT and corporate roles across India."
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
