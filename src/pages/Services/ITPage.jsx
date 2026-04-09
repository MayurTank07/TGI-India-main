import React from "react";
import SEO from "../../components/SEO";

import ITServicesHero from "../../components/Services/IT/ITServicesHero";
import WhatWeOffer from "../../components/Services/IT/WhatWeOffer";
import ITHiringProcess from "../../components/Services/IT/ITHiringProcess";
import WhyChooseIT from "../../components/Services/IT/WhyChooseIT";
import ContactSection from "../../components/Services/IT/ContactForm";
import Footer from "../../components/Footer/Footer";

const itSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "IT Recruitment Services in Mumbai",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Talent Group of India",
    "url": "https://www.talentgroupofindia.com"
  },
  "areaServed": { "@type": "City", "name": "Mumbai" },
  "description": "Expert IT recruitment services in Mumbai. We source top software developers, cloud engineers, DevOps specialists, IT support, and infrastructure professionals for leading tech companies.",
  "url": "https://www.talentgroupofindia.com/services/it",
  "serviceType": ["IT Recruitment", "Tech Staffing", "Software Developer Hiring"]
};

export default function ITPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <SEO
        title="IT Recruitment Agency in Mumbai | Software Developer & Tech Talent Hiring"
        description="Mumbai's top IT recruitment agency. Talent Group of India sources skilled software developers, cloud engineers, DevOps, cybersecurity & IT support professionals. Fast, quality tech hiring. Contact us today."
        canonical="/services/it"
        schema={itSchema}
      />
      <ITServicesHero />
      <WhatWeOffer />
      <ITHiringProcess />
      <WhyChooseIT />
      <ContactSection />
      <Footer />
    </div>
  );
}
