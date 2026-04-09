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
    "@type": "LocalBusiness",
    "name": "Talent Group of India",
    "url": "https://www.talentgroupofindia.com"
  },
  "areaServed": { "@type": "City", "name": "Mumbai" },
  "description": "Executive search and corporate hiring agency in Mumbai. We recruit C-suite executives, directors, senior managers, and leadership talent for top corporations.",
  "url": "https://www.talentgroupofindia.com/services/corporate"
};

export default function CorporatePage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <SEO
        title="Corporate Hiring & Executive Search Agency in Mumbai | Leadership Recruitment"
        description="Mumbai's premier corporate hiring and executive search firm. Talent Group of India recruits C-suite leaders, directors, senior managers, and board-level executives for India's top corporations. Start your search today."
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
