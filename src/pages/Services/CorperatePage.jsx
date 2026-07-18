import React from "react";
import SEO from "../../components/SEO";

import CorperateHero from "../../components/Services/CorperateHiring/CorperateHero";
import SolutionsSection from "../../components/Services/CorperateHiring/SolutionSection";
import ProcessSection from "../../components/Services/CorperateHiring/ProcessSection";
import WhyChooseSection from "../../components/Services/CorperateHiring/WhyChooseSection";
import ContactSection from "../../components/Services/IT/ContactForm";
import Footer from "../../components/Footer/Footer";

const corporateSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Corporate Hiring & Executive Search in Mumbai",
  "provider": {
    "@type": "ProfessionalService",
    "name": "Talent Group of India",
    "url": "https://www.talentgroupofindia.com"
  },
  "areaServed": ["India", "Mumbai", "Bangalore", "Gujarat"],
  "description": "Corporate hiring and executive search support for leadership, management, specialist, and confidential roles.",
  "url": "https://www.talentgroupofindia.com/services/corporate",
  "serviceType": ["corporate hiring company", "executive search", "leadership recruitment"]
};

export default function CorporatePage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <SEO
        title="Corporate Hiring Company in Mumbai"
        description="Recruit leaders, managers and specialist professionals with corporate hiring and executive search support from Talent Group of India."
        canonical="/services/corporate"
        schema={corporateSchema}
      />
      <CorperateHero />
      <SolutionsSection />
      <ProcessSection />
      <WhyChooseSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
