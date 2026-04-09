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
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-XXXXXXXXXX",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi"]
      },
      "sameAs": [
        "https://www.facebook.com/talentgroupofindia",
        "https://twitter.com/talentgroupofindia",
        "https://www.instagram.com/talentgroupofindia",
        "https://www.linkedin.com/company/talentgroupofindia"
      ]
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.talentgroupofindia.com/#localbusiness",
      "name": "Talent Group of India",
      "image": "https://www.talentgroupofindia.com/og-image.jpg",
      "description": "Mumbai's leading HR recruitment and staffing agency specializing in IT, BPO, Non-IT, Accounting, Healthcare, and Corporate hiring. 10+ years of excellence, 60,000+ placements, 950+ clients.",
      "url": "https://www.talentgroupofindia.com",
      "telephone": "+91-XXXXXXXXXX",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Mumbai",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "postalCode": "400001",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 19.0760,
        "longitude": 72.8777
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.5",
        "reviewCount": "200"
      },
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
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.talentgroupofindia.com/contact?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  ]
};

export default function HomePage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <SEO
        title="HR Recruitment & Staffing Agency in Mumbai"
        description="Talent Group of India is Mumbai's #1 HR recruitment and staffing agency. We specialize in IT, BPO, Non-IT, Finance, Healthcare & Corporate hiring. 10+ years | 60,000+ placements | 950+ clients. Get top talent today."
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
