import { Check } from "lucide-react";
import { useContent } from "../../../context/ContentContext";

const WhyChooseSection = () => {
  const { content } = useContent();
  const { heading, points } = content.services.corporate.benefits;

  return (
    <section className="bg-white py-16 md:py-20 px-5 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 md:gap-16">
        <div className="flex-1 grid grid-cols-2 gap-3 md:gap-4 w-full">
          <div className="space-y-3 md:space-y-4">
            <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600" alt="" className="w-full h-40 md:h-64 object-cover rounded-xl md:rounded-[2rem]" />
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600" alt="" className="w-full h-32 md:h-48 object-cover rounded-xl md:rounded-[2rem]" />
          </div>
          <div className="space-y-3 md:space-y-4 pt-6 md:pt-12">
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600" alt="" className="w-full h-32 md:h-48 object-cover rounded-xl md:rounded-[2rem]" />
            <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600" alt="" className="w-full h-40 md:h-64 object-cover rounded-xl md:rounded-[2rem]" />
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-5 md:mb-8 leading-tight">
            {heading.split("Corporate Service?")[0]}<br /><span className="text-[#7c00be]">Corporate Service?</span>
          </h2>
          <ul className="space-y-3 md:space-y-4">
            {points.map((benefit, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  <Check className="w-5 h-5 md:w-6 md:h-6 text-[#7c00be] stroke-[3px]" />
                </div>
                <span className="text-gray-800 text-base md:text-lg font-medium">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
