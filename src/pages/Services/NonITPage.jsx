import React from "react";
import SEO from "../../components/SEO";

import NonITHero from "../../components/Services/NonIt/NonITHero";
import NonITHiring from "../../components/Services/NonIt/NonITHiring";
import WhyChooseNonIT from "../../components/Services/NonIt/WhyChooseNonIT";
import ContactSection from "../../components/Services/IT/ContactForm";
import Footer from "../../components/Footer/Footer";

const nonITSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Non-IT Recruitment Services in Mumbai",
  "provider": {
    "@type": "ProfessionalService",
    "name": "Talent Group of India",
    "url": "https://www.talentgroupofindia.com"
  },
  "areaServed": ["India", "Mumbai", "Bangalore", "Gujarat"],
  "description": "Non-IT recruitment support for sales, marketing, operations, HR, administration, and business support roles.",
  "url": "https://www.talentgroupofindia.com/services/non-it",
  "serviceType": ["non-IT recruitment company", "sales hiring", "operations hiring", "HR hiring"]
};

export default function NonITPage() {
  return (
    <>
      <SEO
        title="Non-IT Recruitment Company in Mumbai"
        description="Recruit sales, marketing, operations, HR and administration professionals with Talent Group of India's non-IT recruitment services across India."
        canonical="/services/non-it"
        schema={nonITSchema}
      />
      <NonITHero />
      <NonITHiring />
      <WhyChooseNonIT />
      <ContactSection />
      <Footer />
    </>
  );
}
