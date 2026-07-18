import React from "react";
import SEO from "../components/SEO";
import TrustedClients from "../components/Client/TrustedClients";
import TrustedOrganizations from "../components/Client/TrustedOrganizations";
import Footer from "../components/Footer/Footer";

export default function OurClientPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <SEO
        title="Recruitment Clients Across India"
        description="See companies and organizations that work with Talent Group of India for recruitment, staffing and hiring support across IT, healthcare, finance, BPO and corporate sectors."
        canonical="/our-clients"
      />
      <TrustedClients />
      <TrustedOrganizations />
      <Footer />
    </div>
  );
}
