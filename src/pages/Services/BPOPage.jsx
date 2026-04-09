import React from "react";
import SEO from "../../components/SEO";

import BPOHero from "../../components/Services/BPO/BPOHero";
import BPOSolutions from "../../components/Services/BPO/BPOSolutions";
import WhyChooseHR from "../../components/Services/BPO/WhyChooseHR";
import ContactSection from "../../components/Services/IT/ContactForm";
import Footer from "../../components/Footer/Footer";

const bpoSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "BPO & Customer Support Staffing in Mumbai",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Talent Group of India",
    "url": "https://www.talentgroupofindia.com"
  },
  "areaServed": { "@type": "City", "name": "Mumbai" },
  "description": "Expert BPO staffing and customer support recruitment in Mumbai. We hire skilled call center agents, customer service executives, and back-office professionals.",
  "url": "https://www.talentgroupofindia.com/services/bpo"
};

export default function BPOPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <SEO
        title="BPO & Customer Support Staffing Agency in Mumbai | Call Center Hiring"
        description="Talent Group of India is Mumbai's leading BPO staffing agency. We recruit skilled call center agents, customer service executives, telecallers, and back-office professionals for BPO companies. Get a quote today."
        canonical="/services/bpo"
        schema={bpoSchema}
      />
      <BPOHero />
      <BPOSolutions />
      <WhyChooseHR />
      <ContactSection />
      <Footer />
    </div>
  );
}
