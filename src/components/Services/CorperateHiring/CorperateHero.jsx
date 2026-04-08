import { Link } from "react-router-dom";
import { useContent } from "../../../context/ContentContext";

export default function CorperateHero() {
  const { content } = useContent();
  const { badge, heading, description, primaryCTA, secondaryCTA, image } = content.services.corporate.hero;

  return (
    <section className="bg-white py-16 md:py-20 px-5 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-12">
        <div className="flex-1 space-y-5 md:space-y-6">
          <div className="inline-block px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200">
            <span className="text-purple-600 text-sm font-semibold tracking-wide">{badge}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">{heading}</h1>
          <p className="text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl">{description}</p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 md:pt-4">
            <Link to="/contact" className="px-6 md:px-8 py-3.5 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-blue-200 text-center">{primaryCTA}</Link>
            <Link to="/services" className="px-6 md:px-8 py-3.5 border-2 border-blue-700 text-blue-700 font-semibold rounded-full hover:bg-blue-50 transition-all duration-300 text-center">{secondaryCTA}</Link>
          </div>
        </div>
        <div className="flex-1 relative w-full">
          <div className="rounded-2xl md:rounded-[3rem] overflow-hidden shadow-2xl transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
            <img src={image} alt="Executive" className="w-full h-auto object-cover aspect-[4/5]" />
          </div>
          <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 -z-10 w-full h-full bg-blue-50 rounded-2xl md:rounded-[3rem]" />
        </div>
      </div>
    </section>
  );
}
