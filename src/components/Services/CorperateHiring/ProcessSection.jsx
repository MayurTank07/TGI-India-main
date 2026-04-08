import { useContent } from "../../../context/ContentContext";
import { Ear, CheckCircle, Target, TrendingUp, Star, ShieldCheck, UserCheck, Search, Award, Globe, Users, Briefcase, Clock, Smile, ThumbsUp, Lightbulb, Rocket, Shield, Zap, Heart } from "lucide-react";

const iconMap = { Ear, CheckCircle, Target, TrendingUp, Star, ShieldCheck, UserCheck, Search, Award, Globe, Users, Briefcase, Clock, Smile, ThumbsUp, Lightbulb, Rocket, Shield, Zap, Heart };

const ProcessSection = () => {
  const { content } = useContent();
  const { heading, items } = content.services.corporate.process;

  return (
    <section className="bg-[#7c00be] py-16 md:py-20 px-5 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-12 md:mb-20 max-w-md leading-tight">{heading}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {items.map((step, index) => {
            const Icon = iconMap[step.icon] || Star;
            return (
              <div key={index} className="relative bg-white rounded-2xl md:rounded-3xl p-6 pt-10 md:p-8 md:pt-12 shadow-xl h-full">
                <div className="absolute -top-6 md:-top-8 left-6 md:left-1/2 md:-translate-x-1/2 lg:left-12 lg:translate-x-0">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-[#e9d5ff] rotate-45 flex items-center justify-center rounded-lg md:rounded-xl shadow-md">
                    <div className="-rotate-45 text-purple-700"><Icon className="w-5 h-5 md:w-6 md:h-6" /></div>
                  </div>
                </div>
                <div className="mt-2 md:mt-4 space-y-2 md:space-y-4">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-snug">{step.title}</h3>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">{step.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
