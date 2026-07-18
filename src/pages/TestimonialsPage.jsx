import React from "react";
import SEO from "../components/SEO";
import { ROUTE_SEO } from "../seo/metadata";
import TestimonialsHero from "../components/Testimonials/TestimonialsHero";
import TestimonialsJob from "../components/Testimonials/TestimonialsJob";
import TestimonialsSection from "../components/Testimonials/TestimonialsSection";
import Footer from "../components/Footer/Footer";

const testimonialsSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Client Testimonials — Talent Group of India",
  "description": "Testimonials from employers and job seekers who worked with Talent Group of India for recruitment and career placement support.",
  "url": "https://www.talentgroupofindia.com/testimonials"
};

export default function TestimonialsPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <SEO {...ROUTE_SEO['/testimonials']} schema={testimonialsSchema} />
      <TestimonialsHero />
      <TestimonialsJob />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
