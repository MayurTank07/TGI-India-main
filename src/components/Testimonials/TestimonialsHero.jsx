import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useContent } from "../../context/ContentContext";

export default function TestimonialsHero() {
  const { content } = useContent();
  const { heading, subheading, items } = content.testimonials.employers;

  const [index, setIndex] = useState(0);
  const prev = () => setIndex(index === 0 ? items.length - 1 : index - 1);
  const next = () => setIndex(index === items.length - 1 ? 0 : index + 1);
  const t = items[index] || {};

  return (
    <section className="bg-[#EDEDF0] py-16 md:py-24 px-5 md:px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">

        {/* LEFT SIDE */}
        <div>
          <span className="px-4 py-1 border border-purple-500 text-purple-600 rounded-full text-sm font-medium">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mt-4 md:mt-6 mb-4 md:mb-6">
            <span className="text-purple-600">What</span> our Employers
            <br />and Hiring Managers
            <br />are saying ?
          </h2>
          <p className="text-gray-600 max-w-md text-base md:text-lg">{subheading}</p>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col items-center">
          <div className="bg-gradient-to-b from-purple-800 to-purple-600 text-white p-6 md:p-12 rounded-2xl md:rounded-[32px] max-w-md w-full shadow-xl">
            <div className="text-5xl md:text-7xl font-bold opacity-90 mb-4 md:mb-6">"</div>
            <p className="text-base md:text-lg leading-relaxed mb-8 md:mb-12 opacity-95">{t.text}</p>
            <div className="flex items-center gap-3 md:gap-4">
              <img src={t.image} alt={t.name} className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-2 border-white/30" />
              <div>
                <p className="font-semibold text-base md:text-xl">{t.name}</p>
                <p className="text-xs md:text-sm opacity-80">{t.role}</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 md:gap-6 mt-5 md:mt-8">
            <button onClick={prev} className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-400 flex items-center justify-center hover:bg-gray-200 transition">
              <ChevronLeftIcon className="w-4 md:w-5" />
            </button>
            <button onClick={next} className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center hover:bg-indigo-700 transition">
              <ChevronRightIcon className="w-4 md:w-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
