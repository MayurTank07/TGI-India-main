import React from "react";
import SEO from "../components/SEO";

import Home from "../components/Home/Home";
import Services from "../components/Home/Services";
import Approach from "../components/Home/Approach";
import WhyTrust from "../components/Home/WhyTrust";
import StatsSection from "../components/Home/StatsSection";
import ContactForm from "../components/Home/ContactForm";
import Footer from "../components/Footer/Footer";

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.talentgroupofindia.com/#organization",
      "name": "Talent Group of India",
      "alternateName": "TG India",
      "url": "https://www.talentgroupofindia.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.talentgroupofindia.com/favicon.svg"
      },
      "email": "info@talentgroupofindia.com",
      "telephone": "+91 98765 43210",
      "sameAs": [
        "https://www.facebook.com/talentgroupofindia",
        "https://twitter.com/talentgroupofindia",
        "https://www.instagram.com/talentgroupofindia",
        "https://www.linkedin.com/company/talentgroupofindia"
      ]
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://www.talentgroupofindia.com/#professionalservice",
      "name": "Talent Group of India",
      "image": "https://www.talentgroupofindia.com/og-image.jpg",
      "description": "A recruitment and staffing company specializing in IT, BPO, Non-IT, Accounting, Healthcare, and Corporate hiring across India.",
      "url": "https://www.talentgroupofindia.com",
      "telephone": "+91 98765 43210",
      "email": "info@talentgroupofindia.com",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "addressCountry": "IN"
      },
      "areaServed": ["India", "Mumbai", "Bangalore", "Gujarat"],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "HR Recruitment & Staffing Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "IT Recruitment" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "BPO Staffing" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Non-IT Recruitment" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Accounting & Finance Staffing" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Healthcare Staffing" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Corporate Hiring & Executive Search" } }
        ]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.talentgroupofindia.com/#website",
      "url": "https://www.talentgroupofindia.com",
      "name": "Talent Group of India",
      "publisher": { "@id": "https://www.talentgroupofindia.com/#organization" },
      "inLanguage": "en-IN"
    }
  ]
};

export default function HomePage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <SEO
        title="Talent Group of India: HR Recruitment & Staffing Company in India"
        description="Talent Group of India is a leading HR recruitment and staffing company helping businesses hire skilled professionals across Mumbai, Bangalore, Gujarat and India."
        canonical="/"
        schema={homeSchema}
      />
      <Home />
      <Services />
      <Approach />
      <WhyTrust />
      <StatsSection />
      <ContactForm />
      <Footer />
    </div>
  );
}
