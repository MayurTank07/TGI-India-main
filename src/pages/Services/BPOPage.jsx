import React from "react";
import SEO from "../../components/SEO";
import { ROUTE_SEO } from "../../seo/metadata";

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
    "@type": "ProfessionalService",
    "name": "Talent Group of India",
    "url": "https://www.talentgroupofindia.com"
  },
  "areaServed": ["India", "Mumbai", "Bangalore", "Gujarat"],
  "description": "BPO recruitment and staffing support for call center agents, customer service executives, telecallers, and back-office professionals.",
  "url": "https://www.talentgroupofindia.com/services/bpo",
  "serviceType": ["BPO recruitment company", "customer support staffing", "call center hiring"]
};

export default function BPOPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <SEO {...ROUTE_SEO['/services/bpo']} schema={bpoSchema} />
      <BPOHero />
      <BPOSolutions />
      <WhyChooseHR />
      <ContactSection />
      <Footer />
    </div>
  );
}
