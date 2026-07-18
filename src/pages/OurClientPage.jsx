import React from "react";
import SEO from "../components/SEO";
import { ROUTE_SEO } from "../seo/metadata";
import TrustedClients from "../components/Client/TrustedClients";
import TrustedOrganizations from "../components/Client/TrustedOrganizations";
import Footer from "../components/Footer/Footer";

export default function OurClientPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <SEO {...ROUTE_SEO['/our-clients']} />
      <TrustedClients />
      <TrustedOrganizations />
      <Footer />
    </div>
  );
}
