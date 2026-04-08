import { Link } from "react-router-dom";
import { useContent } from "../../context/ContentContext";

export default function TrustedClients() {
  const { content } = useContent();
  const { heading, subheading, primaryCTA, image } = content.clients;

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-28 px-5 md:px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10 md:gap-12 lg:gap-20">

        {/* LEFT CONTENT */}
        <div className="space-y-6 md:space-y-8">
          <span className="inline-block bg-purple-50 text-purple-700 border border-purple-200 px-5 py-2 rounded-full text-sm font-semibold">
            Our Clients
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Trusted</span> by India's
            <br />Leading Organizations
          </h2>
          <p className="text-gray-600 text-base md:text-lg lg:text-xl max-w-xl leading-relaxed">{subheading}</p>
          <Link to="/contact" className="bg-indigo-600 text-white px-6 md:px-10 py-3 md:py-4 rounded-full font-semibold hover:bg-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 text-center inline-block">
            {primaryCTA}
          </Link>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end mt-8 md:mt-0">
          <div className="relative w-full max-w-sm md:max-w-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl md:rounded-3xl transform rotate-3 opacity-10"></div>
            <img
              src={image}
              alt="Business partnership"
              className="relative w-full h-[300px] sm:h-[380px] md:h-[520px] object-cover rounded-2xl md:rounded-3xl shadow-2xl hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
