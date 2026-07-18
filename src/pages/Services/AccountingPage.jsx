import React from "react";
import SEO from "../../components/SEO";
import { ROUTE_SEO } from "../../seo/metadata";

import AccountingHero from "../../components/Services/Accouting/AccountingHero";
import AccountingTalent from "../../components/Services/Accouting/AccountingTalent";
import WhyChooseAccounting from "../../components/Services/Accouting/WhyChooseAccounting";
import ContactSection from "../../components/Home/ContactForm";
import Footer from "../../components/Footer/Footer";

const accountingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Accounting & Finance Recruitment in Mumbai",
  "provider": {
    "@type": "ProfessionalService",
    "name": "Talent Group of India",
    "url": "https://www.talentgroupofindia.com"
  },
  "areaServed": ["India", "Mumbai", "Bangalore", "Gujarat"],
  "description": "Accounting and finance recruitment support for chartered accountants, financial analysts, auditors, CFOs, and accounts executives.",
  "url": "https://www.talentgroupofindia.com/services/accounting",
  "serviceType": ["finance recruitment company", "accounting recruitment", "CFO hiring", "auditor hiring"]
};

export default function AccountingPage() {
  return (
    <>
      <SEO {...ROUTE_SEO['/services/accounting']} schema={accountingSchema} />
      <AccountingHero />
      <AccountingTalent />
      <WhyChooseAccounting />
      <ContactSection />
      <Footer />
    </>
  );
}
