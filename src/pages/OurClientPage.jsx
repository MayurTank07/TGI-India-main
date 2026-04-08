import React from "react";
import TrustedClients from "../components/Client/TrustedClients";
import TrustedOrganizations from "../components/Client/TrustedOrganizations";

import Footer from "../components/Footer/Footer";

export default function OurClientPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
        <TrustedClients />
        <TrustedOrganizations />
      <Footer />
    </div>
  );
}