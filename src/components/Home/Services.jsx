import { Link } from "react-router-dom";
import { useContent } from "../../context/ContentContext";

export default function Services() {
  const { content } = useContent();
  const { heading, headingAccent, items } = content.home.services;

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-28 px-5 md:px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            {heading}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">{headingAccent}</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {items.map((service, index) => (
            <div key={index} className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-5 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-gray-900 group-hover:text-indigo-600 transition-colors">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">{service.description}</p>
                <Link to="/services" className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:gap-3 transition-all group/btn">
                  <span>Learn More</span>
                  <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
