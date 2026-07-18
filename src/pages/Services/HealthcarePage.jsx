import React from "react";
import SEO from "../../components/SEO";
import { ROUTE_SEO } from "../../seo/metadata";

import HealthcareHero from "../../components/Services/Healthcare/HealthcareHero";
import HealthcareOffer from "../../components/Services/Healthcare/HealthcareOffer";
import WhyChooseHealthcare from "../../components/Services/Healthcare/WhyChooseHealthcare";
import ContactSection from "../../components/Home/ContactForm";
import Footer from "../../components/Footer/Footer";

const healthcareSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Healthcare Recruitment Company in Mumbai",
  "provider": {
    "@type": "ProfessionalService",
    "name": "Talent Group of India",
    "url": "https://www.talentgroupofindia.com"
  },
  "areaServed": ["India", "Mumbai", "Bangalore", "Gujarat"],
  "description": "Healthcare recruitment and staffing support for nurses, doctors, medical billing professionals, hospital administrators and allied health staff.",
  "url": "https://www.talentgroupofindia.com/services/healthcare",
  "serviceType": ["healthcare recruitment company", "medical staffing", "hospital hiring"]
};

export default function HealthcarePage() {
  return (
    <>
      <SEO {...ROUTE_SEO['/services/healthcare']} schema={healthcareSchema} />
      <HealthcareHero />
      <HealthcareOffer />
      <WhyChooseHealthcare />
      <ContactSection />
      <Footer />
    </>
  );
}
