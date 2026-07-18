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
    "@type": "ProfessionalService",
    "name": "Talent Group of India",
    "url": "https://www.talentgroupofindia.com"
  },
  "areaServed": ["India", "Mumbai", "Bangalore", "Gujarat"],
  "description": "IT recruitment services for software developers, cloud engineers, DevOps specialists, IT support, and infrastructure professionals.",
  "url": "https://www.talentgroupofindia.com/services/it",
  "serviceType": ["IT recruitment company", "tech staffing", "software developer hiring"]
};

export default function ITPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <SEO
        title="IT Recruitment Company in Mumbai"
        description="Hire software developers, cloud engineers, DevOps, cybersecurity and IT support professionals with Talent Group of India's IT recruitment services."
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
