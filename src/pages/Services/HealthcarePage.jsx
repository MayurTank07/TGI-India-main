import React from "react";
import SEO from "../../components/SEO";

import HealthcareHero from "../../components/Services/Healthcare/HealthcareHero";
import HealthcareOffer from "../../components/Services/Healthcare/HealthcareOffer";
import WhyChooseHealthcare from "../../components/Services/Healthcare/WhyChooseHealthcare";
import ContactSection from "../../components/Home/ContactForm";
import Footer from "../../components/Footer/Footer";

const healthcareSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Healthcare Staffing Agency in Mumbai",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Talent Group of India",
    "url": "https://www.talentgroupofindia.com"
  },
  "areaServed": { "@type": "City", "name": "Mumbai" },
  "description": "Healthcare staffing and medical recruitment agency in Mumbai. We place nurses, doctors, medical billing professionals, hospital administrators and allied health staff.",
  "url": "https://www.talentgroupofindia.com/services/healthcare"
};

export default function HealthcarePage() {
  return (
    <>
      <SEO
        title="Healthcare Staffing Agency in Mumbai | Medical & Hospital Recruitment"
        description="Talent Group of India is Mumbai's trusted healthcare staffing agency. We recruit nurses, doctors, medical billing professionals, hospital administrators and allied health staff for hospitals and clinics. Contact us today."
        canonical="/services/healthcare"
        schema={healthcareSchema}
      />
      <HealthcareHero />
      <HealthcareOffer />
      <WhyChooseHealthcare />
      <ContactSection />
      <Footer />
    </>
  );
}
