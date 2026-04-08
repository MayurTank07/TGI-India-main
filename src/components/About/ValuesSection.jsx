import { useContent } from "../../context/ContentContext";
import {
  ShieldCheck, Zap, Heart, Target, Ear, CheckCircle, TrendingUp,
  Star, Award, Globe, Users, Briefcase, Clock, Smile, ThumbsUp, Lightbulb, Rocket, Shield
} from "lucide-react";

const iconMap = {
  ShieldCheck, Zap, Heart, Target, Ear, CheckCircle, TrendingUp,
  Star, Award, Globe, Users, Briefcase, Clock, Smile, ThumbsUp, Lightbulb, Rocket, Shield,
};

export default function ValuesSection() {
  const { content } = useContent();
  const { heading, subheading, items } = content.about.values;

  return (
    <section className="bg-gradient-to-b from-[#7A1CC2] to-[#5B0FA3] py-28 px-6 text-white">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-[44px] font-bold mb-4">{heading}</h2>
        <p className="text-white/90 mb-16 text-lg">{subheading}</p>

        <div className="grid md:grid-cols-4 gap-8">
          {items.map((value, index) => {
            const Icon = iconMap[value.icon] || Star;
            return (
              <div key={index} className="relative bg-white text-gray-800 rounded-2xl p-8 shadow-lg">
                <div className="absolute -top-6 left-8 bg-[#E9D5FF] p-4 rotate-45 rounded-lg">
                  <div className="-rotate-45 text-[#7A1CC2]">
                    <Icon size={26} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mt-6 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">{value.text}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
