import { ChevronLeft, ChevronRight } from "lucide-react";
import { useContent } from "../../context/ContentContext";

export default function TestimonialsJob() {
  const { content } = useContent();
  const { heading, subheading, item } = content.testimonials.jobSeekers;

  return (
    <section className="bg-[#EDE4F6] py-16 md:py-28 px-5 md:px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center">

        {/* LEFT CONTENT */}
        <div>
          <span className="inline-block bg-[#F3E8FF] text-[#7A1CC2] border border-[#CFA8FF] px-4 py-1 rounded-full text-sm mb-4 md:mb-6">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4 md:mb-6">
            <span className="text-[#7A1CC2]">What</span> our Job Seekers
            <br />are saying ?
          </h2>
          <p className="text-gray-700 text-base md:text-[17px] max-w-[480px] leading-relaxed">{subheading}</p>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col items-center">
          <div className="bg-gradient-to-b from-[#7A1CC2] to-[#5B0FA3] text-white p-6 md:p-12 rounded-2xl md:rounded-[30px] w-full max-w-md min-h-[320px] md:min-h-[420px] flex flex-col justify-between">
            <div>
              <div className="text-5xl md:text-7xl leading-none mb-4 md:mb-6 opacity-90">"</div>
              <p className="text-base md:text-[17px] leading-relaxed">"{item.text}"</p>
            </div>
            <div className="flex items-center gap-3 md:gap-4 mt-6 md:mt-10">
              <img src={item.image} alt="profile" className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover" />
              <div>
                <h4 className="font-semibold text-base md:text-xl">{item.name}</h4>
                <p className="text-xs md:text-sm opacity-80">{item.role}</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 md:gap-6 mt-5 md:mt-8">
            <button className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-400 flex items-center justify-center text-gray-700 hover:bg-gray-200 transition">
              <ChevronLeft size={18} />
            </button>
            <button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#3C33D8] text-white flex items-center justify-center hover:opacity-90 transition">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
