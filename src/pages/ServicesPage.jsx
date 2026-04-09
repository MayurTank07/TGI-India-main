import { Link } from "react-router-dom";
import { useContent } from "../context/ContentContext";
import Footer from "../components/Footer/Footer";
import SEO from "../components/SEO";
import { 
  Code, 
  Headphones, 
  Users, 
  Calculator, 
  Heart, 
  Briefcase,
  ArrowRight 
} from "lucide-react";

export default function ServicesPage() {
  const { content } = useContent();

  const services = [
    {
      title: "IT Recruitment",
      description: "Find top tech talent for your software development, cloud, DevOps, and IT infrastructure needs.",
      icon: Code,
      path: "/services/it",
      color: "from-blue-600 to-indigo-600"
    },
    {
      title: "BPO & Customer Support",
      description: "Build exceptional customer service teams with skilled BPO professionals.",
      icon: Headphones,
      path: "/services/bpo",
      color: "from-purple-600 to-pink-600"
    },
    {
      title: "Non-IT Recruitment",
      description: "Hire skilled professionals across sales, marketing, operations, and more.",
      icon: Users,
      path: "/services/non-it",
      color: "from-green-600 to-teal-600"
    },
    {
      title: "Accounting & Finance",
      description: "Connect with certified accountants, financial analysts, and finance experts.",
      icon: Calculator,
      path: "/services/accounting",
      color: "from-orange-600 to-red-600"
    },
    {
      title: "Healthcare Staffing",
      description: "Recruit qualified healthcare professionals for hospitals, clinics, and medical facilities.",
      icon: Heart,
      path: "/services/healthcare",
      color: "from-red-600 to-pink-600"
    },
    {
      title: "Corporate Hiring",
      description: "End-to-end recruitment solutions for corporate teams and leadership positions.",
      icon: Briefcase,
      path: "/services/corporate",
      color: "from-indigo-600 to-purple-600"
    }
  ];

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "HR Recruitment & Staffing Services in Mumbai",
    "url": "https://www.talentgroupofindia.com/services",
    "itemListElement": services.map((s, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": s.title,
      "url": `https://www.talentgroupofindia.com${s.path}`
    }))
  };

  return (
    <>
      <SEO
        title="HR Recruitment & Staffing Services in Mumbai | IT, BPO, Finance, Healthcare"
        description="Explore Talent Group of India's full range of HR recruitment services in Mumbai — IT recruitment, BPO staffing, Non-IT hiring, Accounting, Healthcare, and Corporate executive search."
        canonical="/services"
        schema={servicesSchema}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-700 via-purple-700 to-purple-900 py-16 md:py-28 px-5 md:px-6 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block bg-white/20 border border-white/30 px-5 py-2 rounded-full text-sm font-semibold mb-6">
            Our Services
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            Comprehensive Recruitment
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">Solutions for Every Industry</span>
          </h1>
          <p className="text-base md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            From IT to Healthcare, BPO to Corporate Hiring—we deliver tailored recruitment solutions 
            that connect the right talent with the right opportunities.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-28 px-5 md:px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-gray-900">
              Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Services</span>
            </h2>
            <p className="text-gray-600 text-base md:text-xl max-w-2xl mx-auto">
              Choose the service that fits your hiring needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link
                  key={index}
                  to={service.path}
                  className="group bg-white rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                >
                  <div className={`w-14 h-14 md:w-20 md:h-20 rounded-xl md:rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-7 h-7 md:w-10 md:h-10 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl md:text-3xl font-bold mb-2 md:mb-4 text-gray-900 group-hover:text-indigo-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4 md:mb-6 text-sm md:text-lg">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-indigo-600 font-semibold group-hover:gap-3 transition-all">
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-purple-700 py-16 md:py-24 px-5 md:px-6 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Ready to Find the Perfect Talent?
          </h2>
          <p className="text-base md:text-xl text-white/90 mb-8 md:mb-10 leading-relaxed">
            Let's discuss your hiring needs and create a customized recruitment strategy for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-purple-700 px-8 md:px-12 py-3.5 md:py-5 rounded-full font-bold text-base md:text-lg hover:bg-gray-100 transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105 text-center"
            >
              Get Started
            </Link>
            <Link
              to="/our-clients"
              className="border-2 border-white text-white px-8 md:px-12 py-3.5 md:py-5 rounded-full font-bold text-base md:text-lg hover:bg-white/10 transition-all duration-200 hover:scale-105 text-center"
            >
              View Our Clients
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
