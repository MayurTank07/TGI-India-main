import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useContent } from "../../context/ContentContext";

export default function TestimonialsSection() {
  const { content } = useContent();
  const { heading, subheading, items } = content.testimonials.growingTeams;

  const [current, setCurrent] = useState(0);
  const t = items[current] || {};
  const prev = () => setCurrent(current === 0 ? items.length - 1 : current - 1);
  const next = () => setCurrent(current === items.length - 1 ? 0 : current + 1);

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-28 px-5 md:px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-12 lg:gap-20 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-6">
          <span className="inline-block px-5 py-2 border-2 border-purple-200 bg-purple-50 text-purple-700 rounded-full text-sm font-semibold">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">What</span> our Growing
            <br />Teams are saying?
          </h2>
          <p className="text-gray-600 text-base md:text-xl leading-relaxed">{subheading}</p>
        </div>

        {/* TESTIMONIAL CARD */}
        <div className="relative mt-8 md:mt-0">
          <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-purple-700 text-white p-6 md:p-12 rounded-2xl md:rounded-3xl shadow-2xl max-w-lg ml-auto">
            <div className="text-5xl md:text-8xl mb-4 md:mb-6 opacity-50 leading-none">"</div>
            <p className="text-base md:text-xl leading-relaxed mb-8 md:mb-12">{t.text}</p>
            <div className="flex items-center gap-3 md:gap-5">
              <img src={t.image} alt={t.name} className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border-3 border-white shadow-lg" />
              <div>
                <p className="font-bold text-base md:text-xl">{t.name}</p>
                <p className="text-xs md:text-base opacity-90">{t.role}</p>
              </div>
            </div>
          </div>

          <div className="flex gap-3 md:gap-4 mt-5 md:mt-8 justify-end">
            <button onClick={prev} className="w-10 h-10 md:w-14 md:h-14 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center hover:bg-gray-100 hover:border-indigo-600 transition-all duration-200 shadow-md hover:shadow-lg">
              <ChevronLeftIcon className="w-4 h-4 md:w-6 md:h-6 text-gray-700" />
            </button>
            <button onClick={next} className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-indigo-600 text-white flex items-center justify-center hover:bg-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105">
              <ChevronRightIcon className="w-4 h-4 md:w-6 md:h-6" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
