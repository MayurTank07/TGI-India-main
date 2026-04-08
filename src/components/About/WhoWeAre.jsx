import { useContent } from "../../context/ContentContext";

export default function WhoWeAre() {
  const { content } = useContent();
  const { heading, paragraph1, paragraph2, images } = content.about.whoWeAre;

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-28 px-5 md:px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-12 lg:gap-20 items-center">

        {/* LEFT TEXT */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Who</span> We Are?
          </h2>
          <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-700">{paragraph1}</p>
          <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-700">{paragraph2}</p>
        </div>

        {/* RIGHT IMAGE GRID */}
        <div className="grid grid-cols-2 gap-3 md:gap-6 mt-8 md:mt-0">
          {images.map((img, i) => (
            <div key={i} className={`${i % 2 === 1 ? "mt-6 md:mt-12" : ""}`}>
              <img
                src={img}
                className="rounded-xl md:rounded-3xl h-[160px] sm:h-[200px] md:h-[260px] w-full object-cover shadow-xl hover:shadow-2xl transition-shadow duration-300"
                alt=""
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
