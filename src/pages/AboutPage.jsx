import React from "react";
import SEO from "../components/SEO";
import { ROUTE_SEO } from "../seo/metadata";

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
      <SEO {...ROUTE_SEO['/about']} schema={aboutSchema} />
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
