import { useContent } from "../../context/ContentContext";
import { Ear, CheckCircle, Target, TrendingUp, Star, Award, Globe, Users, Briefcase, Clock, Smile, ThumbsUp, Lightbulb, Rocket, Shield, ShieldCheck, Zap, Heart } from "lucide-react";

const iconMap = {
  Ear, CheckCircle, Target, TrendingUp, Star, Award, Globe, Users, Briefcase,
  Clock, Smile, ThumbsUp, Lightbulb, Rocket, Shield, ShieldCheck, Zap, Heart,
};

export default function Approach() {
  const { content } = useContent();
  const { heading, items } = content.home.approach;
  const headingLines = heading.split("\n");

  return (
    <section className="py-16 md:py-28 px-5 md:px-6 bg-gradient-to-br from-indigo-700 via-purple-700 to-purple-900">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold max-w-3xl mx-auto">
            {headingLines.map((line, i) => (
              <span key={i}>{line}{i < headingLines.length - 1 && <br />}</span>
            ))}
          </h2>
          <div className="w-24 h-1.5 bg-white/80 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {items.map((item, index) => {
            const Icon = iconMap[item.icon] || Star;
            return (
              <div key={index} className="relative bg-white rounded-2xl md:rounded-3xl p-6 pt-10 md:p-10 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="absolute -top-5 md:-top-7 left-6 md:left-8 bg-gradient-to-br from-purple-500 to-indigo-600 p-3.5 md:p-5 rotate-45 rounded-xl md:rounded-2xl shadow-xl group-hover:rotate-[50deg] transition-transform duration-300">
                  <div className="-rotate-45 text-white">
                    <Icon size={24} className="md:hidden" strokeWidth={2.5} />
                    <Icon size={32} className="hidden md:block" strokeWidth={2.5} />
                  </div>
                </div>
                <h3 className="text-lg md:text-2xl font-bold mt-4 md:mt-8 mb-3 md:mb-4 text-gray-900 group-hover:text-purple-700 transition-colors">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">{item.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
