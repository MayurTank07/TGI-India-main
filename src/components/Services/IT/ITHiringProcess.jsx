import { useContent } from "../../../context/ContentContext";
import { Ear, CheckCircle, Target, TrendingUp, Star, Award, Globe, Users, Briefcase, Clock, Smile, ThumbsUp, Lightbulb, Rocket, Shield, ShieldCheck, Zap, Heart } from "lucide-react";

const iconMap = { Ear, CheckCircle, Target, TrendingUp, Star, Award, Globe, Users, Briefcase, Clock, Smile, ThumbsUp, Lightbulb, Rocket, Shield, ShieldCheck, Zap, Heart };

export default function ITHiringProcess() {
  const { content } = useContent();
  const { heading, items } = content.services.it.process;

  return (
    <section className="bg-gradient-to-b from-[#7A1CC2] to-[#5B0FA3] py-16 md:py-28 px-5 md:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-10 md:mb-16">{heading}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {items.map((step, index) => {
            const Icon = iconMap[step.icon] || Star;
            return (
              <div key={index} className="relative bg-white rounded-xl md:rounded-2xl p-6 pt-10 md:p-8 shadow-lg">
                <div className="absolute -top-5 md:-top-6 left-6 md:left-8 bg-[#E9D5FF] p-3 md:p-4 rotate-45 rounded-lg">
                  <div className="-rotate-45 text-[#7A1CC2]"><Icon size={22} className="md:hidden" /><Icon size={26} className="hidden md:block" /></div>
                </div>
                <h3 className="text-lg md:text-xl font-semibold mt-4 md:mt-6 mb-2 md:mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed">{step.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
