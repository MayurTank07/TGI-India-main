import { Check } from "lucide-react";
import { useContent } from "../../../context/ContentContext";

export default function WhyChooseIT() {
  const { content } = useContent();
  const { heading, points } = content.services.it.benefits;

  return (
    <section className="bg-[#F5F5F7] py-16 md:py-28 px-5 md:px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center">
        <div className="grid grid-cols-2 gap-3 md:gap-6">
          <img src="https://images.unsplash.com/photo-1552664730-d307ca884978" className="rounded-xl md:rounded-[26px] h-[150px] sm:h-[180px] md:h-[220px] w-full object-cover" alt="" />
          <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d" className="rounded-xl md:rounded-[26px] h-[150px] sm:h-[180px] md:h-[220px] w-full object-cover mt-6 md:mt-12" alt="" />
          <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216" className="rounded-xl md:rounded-[26px] h-[150px] sm:h-[180px] md:h-[220px] w-full object-cover" alt="" />
          <img src="https://images.unsplash.com/photo-1551434678-e076c223a692" className="rounded-xl md:rounded-[26px] h-[150px] sm:h-[180px] md:h-[220px] w-full object-cover mt-6 md:mt-12" alt="" />
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 md:mb-8 leading-tight">
            {heading.split("IT Service?")[0]}<span className="text-[#7A1CC2]">IT Service?</span>
          </h2>
          <ul className="space-y-4 md:space-y-5">
            {points.map((point, index) => (
              <li key={index} className="flex items-start gap-3 text-base md:text-lg">
                <Check className="text-[#7A1CC2] mt-0.5 flex-shrink-0" size={20} strokeWidth={3} />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
