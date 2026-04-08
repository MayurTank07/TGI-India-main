import { useContent } from "../../../context/ContentContext";

export default function HealthcareOffer() {
  const { content } = useContent();
  const { heading, description, items } = content.services.healthcare.offerings;

  return (
    <section className="bg-[#F5F5F7] py-16 md:py-28 px-5 md:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">{heading}</h2>
        <p className="text-gray-600 max-w-3xl text-sm md:text-base leading-relaxed mb-10 md:mb-16">{description}</p>
        <div className="grid md:grid-cols-3 gap-6 md:gap-10">
          {items.map((service, index) => (
            <div key={index} className="hover:-translate-y-2 transition">
              <img src={service.img} alt={service.title} className="w-full h-[200px] md:h-[300px] object-cover rounded-2xl md:rounded-[26px] mb-4 md:mb-5" />
              <h3 className="text-base md:text-lg font-semibold mb-1.5 md:mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
