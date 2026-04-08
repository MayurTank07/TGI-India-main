import { Link } from "react-router-dom";
import { useContent } from "../../../context/ContentContext";

export default function AccountingHero() {
  const { content } = useContent();
  const { badge, heading, description, primaryCTA, secondaryCTA, image } = content.services.accounting.hero;

  return (
    <section className="bg-[#F5F5F7] py-16 md:py-28 px-5 md:px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10 md:gap-16 lg:gap-24">
        <div>
          <span className="inline-block bg-[#F3E8FF] text-[#7A1CC2] border border-[#CFA8FF] px-4 py-1.5 rounded-full text-sm mb-6 md:mb-8">{badge}</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 md:mb-6">{heading}</h1>
          <p className="text-gray-600 text-base md:text-lg max-w-[480px] leading-relaxed mb-8 md:mb-10">{description}</p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link to="/contact" className="bg-[#3C33D8] text-white px-6 md:px-8 py-3 rounded-full font-medium hover:opacity-90 transition text-center">{primaryCTA}</Link>
            <Link to="/services" className="border border-[#3C33D8] text-[#3C33D8] px-6 md:px-8 py-3 rounded-full font-medium hover:bg-[#F3F0FF] transition text-center">{secondaryCTA}</Link>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <img src={image} alt="Accounting professionals" className="w-full max-w-sm md:max-w-md lg:w-[460px] h-[320px] sm:h-[400px] md:h-[480px] lg:h-[560px] object-cover rounded-2xl md:rounded-[28px]" />
        </div>
      </div>
    </section>
  );
}
