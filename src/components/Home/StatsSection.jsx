import { useContent } from "../../context/ContentContext";

export default function StatsSection() {
  const { content } = useContent();
  const { heading, quote, quotePrefix, items } = content.home.stats;

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-28 px-5 md:px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-bold max-w-4xl mb-10 md:mb-20">
          {heading.split(" ").map((word, i) => (
            <span key={i}>
              {word.includes("great") || word.includes("organization") || word.includes("right") || word.includes("people")
                ? <span className="text-purple-600">{word} </span>
                : <span>{word} </span>}
            </span>
          ))}
        </h2>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-12 md:mb-20">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-indigo-600 via-purple-600 to-purple-700 text-white rounded-2xl md:rounded-3xl p-5 md:p-10 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-1 md:mb-3 group-hover:scale-110 transition-transform">{item.number}</h3>
              <p className="text-xs sm:text-sm md:text-lg font-medium opacity-95">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="max-w-4xl">
          <p className="text-gray-600 text-base md:text-xl mb-6 md:mb-8 leading-relaxed">{quotePrefix}</p>
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border-l-4 border-purple-600 rounded-r-2xl p-5 md:p-8">
            <p className="text-gray-900 text-lg md:text-2xl font-semibold leading-relaxed italic">
              "{quote}"
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
