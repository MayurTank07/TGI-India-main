import React from "react";
import SEO from "../components/SEO";
import ContactSection from "../components/ContactUs/ContactSection";
import Footer from "../components/Footer/Footer";

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Talent Group of India",
  "url": "https://www.talentgroupofindia.com/contact",
  "description": "Get in touch with Talent Group of India, Mumbai's #1 HR recruitment agency, for staffing, hiring, and job placement enquiries.",
  "mainEntity": {
    "@type": "LocalBusiness",
    "name": "Talent Group of India",
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
        title="Contact Us | HR Recruitment Agency in Mumbai — Get a Free Consultation"
        description="Contact Talent Group of India for HR recruitment, staffing, and job placement in Mumbai. Get a free consultation today. We serve employers and job seekers across Mumbai, Pune, Delhi, Bangalore and all major Indian cities."
        canonical="/contact"
        schema={contactSchema}
      />
      <ContactSection />
      <Footer />
    </div>
  );
}
