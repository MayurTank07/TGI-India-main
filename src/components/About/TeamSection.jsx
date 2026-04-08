import { Linkedin, Twitter } from "lucide-react";
import { useContent } from "../../context/ContentContext";

export default function TeamSection() {
  const { content } = useContent();
  const { heading, subheading, members } = content.about.team;

  return (
    <section className="bg-[#F5F5F7] py-28 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-[44px] font-bold mb-4">
          {heading.split(" ").slice(0, -1).join(" ")}{" "}
          <span className="text-[#7A1CC2]">{heading.split(" ").slice(-1)}</span>
        </h2>

        <p className="text-gray-600 text-lg mb-14 max-w-xl">{subheading}</p>

        {/* Team Grid */}
        <div className="grid md:grid-cols-4 gap-10">
          {members.map((member, index) => (
            <div key={index}>
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-[320px] object-cover rounded-[26px] mb-4"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{member.role}</p>
              <div className="flex gap-3">
                <a href={member.linkedin || "#"} className="border border-[#3C33D8] text-[#3C33D8] p-2 rounded-full hover:bg-indigo-50 transition">
                  <Linkedin size={16} />
                </a>
                <a href={member.twitter || "#"} className="border border-[#3C33D8] text-[#3C33D8] p-2 rounded-full hover:bg-indigo-50 transition">
                  <Twitter size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
