import React from "react";
import SEO from "../components/SEO";
import TrustedClients from "../components/Client/TrustedClients";
import TrustedOrganizations from "../components/Client/TrustedOrganizations";
import Footer from "../components/Footer/Footer";

export default function OurClientPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <SEO
        title="Our Clients | Trusted by 950+ Leading Companies Across India"
        description="Talent Group of India is trusted by 950+ leading companies across Mumbai and India for HR recruitment and staffing. See our client portfolio spanning IT, healthcare, finance, BPO, and corporate sectors."
        canonical="/our-clients"
      />
      <TrustedClients />
      <TrustedOrganizations />
      <Footer />
    </div>
  );
}
