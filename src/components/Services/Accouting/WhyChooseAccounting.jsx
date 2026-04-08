import { CheckIcon } from "@heroicons/react/24/solid";
import { useContent } from "../../../context/ContentContext";

export default function WhyChooseAccounting() {
  const { content } = useContent();
  const { heading, points } = content.services.accounting.benefits;

  return (
    <section className="bg-gray-100 py-16 md:py-24 px-5 md:px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="grid grid-cols-2 gap-3 md:gap-6">
          {["https://images.unsplash.com/photo-1552664730-d307ca884978","https://images.unsplash.com/photo-1556761175-b413da4baf72","https://images.unsplash.com/photo-1521737604893-d14cc237f11d","https://images.unsplash.com/photo-1556155092-490a1ba16284"].map((img, i) => (
            <img key={i} src={img} alt="" className="w-full h-[150px] sm:h-[180px] md:h-[220px] object-cover rounded-xl md:rounded-3xl" />
          ))}
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 md:mb-8 leading-tight">
            {heading.split("Accounting Service?")[0]}<br /><span className="text-[#7A1CC2]">Accounting Service?</span>
          </h2>
          <ul className="space-y-4 md:space-y-5">
            {points.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckIcon className="w-5 h-5 md:w-6 md:h-6 text-[#7A1CC2] mt-0.5 flex-shrink-0" />
                <span className="text-gray-800 text-base md:text-lg">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
