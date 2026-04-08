import { useContent } from "../../context/ContentContext";

export default function JourneySection() {
  const { content } = useContent();
  const { heading, paragraph1, paragraph2, image, stats } = content.about.journey;

  return (
    <section className="bg-[#F5F5F7] py-28 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center">

        {/* LEFT IMAGE */}
        <div>
          <img
            src={image}
            alt="team"
            className="w-full max-w-[440px] h-[560px] object-cover rounded-[28px]"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-[44px] font-bold leading-tight mb-6">
            {heading.split("Vision for India")[0]}
            <span className="text-[#7A1CC2]">Vision for India</span>
          </h2>

          <p className="text-gray-700 text-[17px] leading-relaxed mb-6">{paragraph1}</p>
          <p className="text-gray-700 text-[17px] leading-relaxed mb-10">{paragraph2}</p>

          {/* Stats */}
          <div className="flex gap-20">
            {stats.map((stat, i) => (
              <div key={i}>
                <h3 className="text-[#7A1CC2] text-2xl font-bold">{stat.number}</h3>
                <p className="text-gray-700 text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
