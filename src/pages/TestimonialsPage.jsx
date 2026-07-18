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
  "description": "Testimonials from employers and job seekers who worked with Talent Group of India for recruitment and career placement support.",
  "url": "https://www.talentgroupofindia.com/testimonials"
};

export default function TestimonialsPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <SEO
        title="Recruitment Testimonials from Employers & Job Seekers"
        description="Read testimonials from employers and job seekers who trusted Talent Group of India for HR recruitment, staffing and career placement support in India."
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
