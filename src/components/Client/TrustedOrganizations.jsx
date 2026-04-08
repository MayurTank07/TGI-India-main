import { useContent } from "../../context/ContentContext";

export default function TrustedOrganizations() {
  const { content } = useContent();
  const { organizations } = content.clients;

  return (
    <section className="bg-gradient-to-b from-purple-50 to-white py-16 md:py-28 px-5 md:px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-12 lg:gap-20 items-center">

        {/* LEFT TEXT */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
            Trusted by <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">great Organizations</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed">
            Over 4,000 companies across industries trust Talent Group Of India to find the right talent,
            build stronger teams, and drive business growth.
          </p>
        </div>

        {/* LOGO GRID */}
        <div className="grid grid-cols-3 gap-3 md:gap-6">
          {organizations?.map((org, index) => (
            <div key={index} className="bg-white rounded-xl md:rounded-2xl p-4 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center">
              <img
                src={org.logo}
                alt={org.name}
                className="h-8 md:h-12 w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
