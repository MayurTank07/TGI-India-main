import { Link } from "react-router-dom";
import { useContent } from "../../context/ContentContext";

export default function Home() {
  const { content } = useContent();
  const { title, description, primaryCTA, secondaryCTA, image, rating, ratingLabel } = content.home.hero;

  const titleLines = title.split("\n");

  return (
    <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center px-5 md:px-8 py-12 md:py-20 lg:py-24">

      {/* Left Content */}
      <div className="space-y-6 md:space-y-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-bold leading-[1.1] tracking-tight text-gray-900">
          {titleLines.map((line, i) => (
            <span key={i}>
              {line.split(" ").map((word, j) => (
                <span key={j} className={j > 0 || i > 0 ? "" : ""}>
                  {word}{" "}
                </span>
              ))}
              {i < titleLines.length - 1 && <br />}
            </span>
          ))}
        </h1>

        <p className="text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed max-w-xl">{description}</p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <Link to="/contact" className="bg-indigo-600 text-white px-6 md:px-10 py-3 md:py-4 rounded-full hover:bg-indigo-700 transition-all duration-200 text-base md:text-lg font-semibold shadow-lg shadow-indigo-600/30 hover:shadow-xl hover:shadow-indigo-600/40 hover:scale-105 text-center">
            {primaryCTA}
          </Link>
          <Link to="/services" className="border-2 border-indigo-600 text-indigo-600 px-6 md:px-10 py-3 md:py-4 rounded-full hover:bg-indigo-50 transition-all duration-200 text-base md:text-lg font-semibold hover:scale-105 text-center">
            {secondaryCTA}
          </Link>
        </div>

        {/* Reviews */}
        <div className="flex items-center gap-4 md:gap-5 pt-2">
          <div className="flex -space-x-3">
            <img src="https://randomuser.me/api/portraits/women/1.jpg" className="w-10 h-10 md:w-12 md:h-12 rounded-full border-3 border-white shadow-md" alt="" />
            <img src="https://randomuser.me/api/portraits/men/2.jpg" className="w-10 h-10 md:w-12 md:h-12 rounded-full border-3 border-white shadow-md" alt="" />
            <img src="https://randomuser.me/api/portraits/women/3.jpg" className="w-10 h-10 md:w-12 md:h-12 rounded-full border-3 border-white shadow-md" alt="" />
            <img src="https://randomuser.me/api/portraits/men/4.jpg" className="w-10 h-10 md:w-12 md:h-12 rounded-full border-3 border-white shadow-md" alt="" />
          </div>
          <div>
            <p className="text-gray-900 text-sm md:text-base font-semibold">
              ⭐ {rating} Rating
            </p>
            <p className="text-gray-600 text-xs md:text-sm">{ratingLabel}</p>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex justify-center md:justify-end mt-8 md:mt-0">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl transform rotate-3 opacity-10"></div>
          <img
            src={image}
            alt="Recruitment team"
            className="relative rounded-3xl shadow-2xl w-full max-w-lg object-cover hover:scale-[1.02] transition-transform duration-300"
          />
        </div>
      </div>

    </section>
  );
}
