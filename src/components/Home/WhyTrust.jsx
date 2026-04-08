import { Check } from "lucide-react";
import { useContent } from "../../context/ContentContext";

export default function WhyTrust() {
  const { content } = useContent();
  const { heading, points, images } = content.home.whyTrust;

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 w-full py-16 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT IMAGE GRID */}
          <div className="grid grid-cols-2 gap-3 md:gap-6">
            {images.map((src, i) => (
              <div key={i} className={`${i % 2 === 1 ? "mt-6 md:mt-12" : ""}`}>
                <img
                  src={src}
                  className="rounded-xl md:rounded-3xl h-[180px] sm:h-[220px] md:h-[280px] w-full object-cover shadow-xl hover:shadow-2xl transition-shadow duration-300"
                  alt=""
                />
              </div>
            ))}
          </div>

          {/* RIGHT TEXT */}
          <div className="mt-8 lg:mt-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-bold mb-6 md:mb-12 text-gray-900">
              {heading.split("Talent Group Of India?")[0]}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Talent Group Of India?</span>
            </h2>
            <ul className="space-y-6">
              {points.map((point, index) => (
                <li key={index} className="flex items-start gap-3 md:gap-4 text-base md:text-lg lg:text-xl text-gray-700 group">
                  <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full bg-purple-100 flex items-center justify-center mt-0.5 group-hover:bg-purple-600 transition-colors">
                    <Check className="text-purple-600 group-hover:text-white transition-colors" size={18} strokeWidth={3} />
                  </div>
                  <span className="font-medium leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
