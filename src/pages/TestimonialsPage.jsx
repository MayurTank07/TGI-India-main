import React from "react";
import SEO from "../components/SEO";
import TestimonialsHero from "../components/Testimonials/TestimonialsHero";
import TestimonialsJob from "../components/Testimonials/TestimonialsJob";
import TestimonialsSection from "../components/Testimonials/TestimonialsSection";
import Footer from "../components/Footer/Footer";

const testimonialsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Client Testimonials — Talent Group of India",
  "description": "Reviews and testimonials from employers and job seekers who worked with Talent Group of India, Mumbai's top HR recruitment agency.",
  "url": "https://www.talentgroupofindia.com/testimonials"
};

export default function TestimonialsPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <SEO
        title="Client Testimonials | What Employers & Job Seekers Say About TGI Mumbai"
        description="Read real testimonials from 950+ employers and 60,000+ job seekers who trusted Talent Group of India for HR recruitment and career placement in Mumbai. 4.5-star rated staffing agency."
        canonical="/testimonials"
        schema={testimonialsSchema}
      />
      <TestimonialsHero />
      <TestimonialsJob />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
