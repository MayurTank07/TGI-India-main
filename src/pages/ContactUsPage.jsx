import React from "react";
import SEO from "../components/SEO";
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
    "email": "info@talentgroupofindia.com",
    "telephone": "+91 98765 43210",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    }
  }
};

export default function ContactUsPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <SEO
        title="Contact HR Recruitment Company in Mumbai"
        description="Contact Talent Group of India for HR recruitment, staffing, manpower hiring and job placement support across Mumbai, Bangalore, Gujarat and India."
        canonical="/contact"
        schema={contactSchema}
      />
      <ContactSection />
      <Footer />
    </div>
  );
}
