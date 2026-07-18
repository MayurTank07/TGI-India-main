import React from "react";
import SEO from "../components/SEO";
import { ROUTE_SEO } from "../seo/metadata";
import TrustedClients from "../components/Client/TrustedClients";
import TrustedOrganizations from "../components/Client/TrustedOrganizations";
import Footer from "../components/Footer/Footer";

const clientsSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Recruitment Clients Across India",
  "description": ROUTE_SEO['/our-clients'].description,
  "url": "https://www.talentgroupofindia.com/our-clients",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Talent Group of India",
    "url": "https://www.talentgroupofindia.com"
  }
};

export default function OurClientPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <SEO {...ROUTE_SEO['/our-clients']} schema={clientsSchema} />
      <TrustedClients />
      <TrustedOrganizations />
      <Footer />
    </div>
  );
}
