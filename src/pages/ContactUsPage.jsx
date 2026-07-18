import React from "react";
import SEO from "../components/SEO";
import { ROUTE_SEO } from "../seo/metadata";
import ContactSection from "../components/ContactUs/ContactSection";
import Footer from "../components/Footer/Footer";

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Talent Group of India",
  "url": "https://www.talentgroupofindia.com/contact",
  "description": "Get in touch with Talent Group of India for recruitment, staffing, manpower hiring, and job placement enquiries.",
  "mainEntity": {
    "@type": "ProfessionalService",
    "name": "Talent Group of India",
    "url": "https://www.talentgroupofindia.com",
    "email": "contact@talentgroupofindia.com",
    "telephone": "+91 97022 06887",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "postalCode": "400042",
      "addressCountry": "IN"
    }
  }
};

export default function ContactUsPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <SEO {...ROUTE_SEO['/contact']} schema={contactSchema} />
      <ContactSection />
      <Footer />
    </div>
  );
}
