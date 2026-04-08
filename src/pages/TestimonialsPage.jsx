import React from "react";
import TestimonialsHero from "../components/Testimonials/TestimonialsHero";
import TestimonialsJob from "../components/Testimonials/TestimonialsJob";
import TestimonialsSection from "../components/Testimonials/TestimonialsSection";
import Footer from "../components/Footer/Footer";

export default function TestimonialsPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
        <TestimonialsHero />
        <TestimonialsJob />
        <TestimonialsSection />
      <Footer />
    </div>
  );
}