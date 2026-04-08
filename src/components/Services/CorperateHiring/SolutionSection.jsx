import { useContent } from "../../../context/ContentContext";

const SolutionsSection = () => {
  const { content } = useContent();
  const { heading, description, items } = content.services.corporate.offerings;

  return (
    <section className="bg-white py-16 md:py-20 px-5 md:px-12 lg:px-24 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-6">{heading}</h2>
          <p className="text-gray-600 text-sm md:text-lg max-w-4xl leading-relaxed">{description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-8 gap-y-8 md:gap-y-16">
          {items.map((item, index) => (
            <div key={index} className="group flex flex-col">
              <div className="mb-4 md:mb-6 overflow-hidden rounded-2xl md:rounded-[2.5rem] shadow-sm">
                <img src={item.img} alt={item.title} className="w-full h-[220px] md:h-[320px] object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out" />
              </div>
              <div className="space-y-2 md:space-y-3">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 tracking-tight">{item.title}</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
