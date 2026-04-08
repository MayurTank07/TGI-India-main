import { useContent } from "../../../context/ContentContext";

export default function AccountingTalent() {
  const { content } = useContent();
  const { heading, description, items } = content.services.accounting.offerings;

  return (
    <section className="bg-gray-100 py-16 md:py-24 px-5 md:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">{heading}</h2>
        <p className="text-gray-600 max-w-3xl mb-8 md:mb-14 text-sm md:text-base">{description}</p>
        <div className="grid md:grid-cols-3 gap-6 md:gap-10">
          {items.map((service, index) => (
            <div key={index}>
              <img src={service.img} alt={service.title} className="w-full h-[240px] md:h-[320px] lg:h-[400px] object-cover rounded-xl md:rounded-2xl mb-4 md:mb-5" />
              <h3 className="font-semibold text-base md:text-lg mb-1.5 md:mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
