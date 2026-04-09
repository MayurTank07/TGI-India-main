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
    "@type": "LocalBusiness",
    "name": "Talent Group of India",
    "url": "https://www.talentgroupofindia.com"
  },
  "areaServed": { "@type": "City", "name": "Mumbai" },
  "description": "Non-IT recruitment agency in Mumbai hiring sales, marketing, operations, HR, and admin professionals for leading companies across industries.",
  "url": "https://www.talentgroupofindia.com/services/non-it"
};

export default function NonITPage() {
  return (
    <>
      <SEO
        title="Non-IT Recruitment Agency in Mumbai | Sales, Marketing & Operations Hiring"
        description="Talent Group of India recruits top non-IT professionals in Mumbai — sales managers, marketing executives, operations staff, HR personnel, and admin teams. Industry-focused, fast turnaround. Contact us today."
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
