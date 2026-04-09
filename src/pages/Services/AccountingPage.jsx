import React from "react";
import SEO from "../../components/SEO";

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
    "@type": "LocalBusiness",
    "name": "Talent Group of India",
    "url": "https://www.talentgroupofindia.com"
  },
  "areaServed": { "@type": "City", "name": "Mumbai" },
  "description": "Specialized accounting and finance recruitment agency in Mumbai. We place CA, CPA, financial analysts, CFOs, auditors, and accounts executives in top companies.",
  "url": "https://www.talentgroupofindia.com/services/accounting"
};

export default function AccountingPage() {
  return (
    <>
      <SEO
        title="Accounting & Finance Recruitment Agency in Mumbai | CA, CFO & Analyst Hiring"
        description="Mumbai's top accounting and finance recruitment agency. Talent Group of India places chartered accountants, financial analysts, CFOs, auditors and accounts executives in leading firms. Fast hiring. Contact us."
        canonical="/services/accounting"
        schema={accountingSchema}
      />
      <AccountingHero />
      <AccountingTalent />
      <WhyChooseAccounting />
      <ContactSection />
      <Footer />
    </>
  );
}
