import { Link } from "react-router-dom";
import { useContent } from "../context/ContentContext";
import {
  Navigation, AlignJustify, Home, Info, MessageSquare,
  Phone, Briefcase, Users, RotateCcw, ExternalLink
} from "lucide-react";

const sections = [
  { label: "Navbar", desc: "Navigation links, logo, CTA button", path: "/admin/navbar", icon: Navigation, color: "bg-blue-50 text-blue-600" },
  { label: "Footer", desc: "Address, social links, description", path: "/admin/footer", icon: AlignJustify, color: "bg-green-50 text-green-600" },
  { label: "Home Page", desc: "Hero, services, stats, approach", path: "/admin/home", icon: Home, color: "bg-purple-50 text-purple-600" },
  { label: "About Page", desc: "Team, values, journey, who we are", path: "/admin/about", icon: Info, color: "bg-pink-50 text-pink-600" },
  { label: "Testimonials", desc: "Employer, job seeker & team reviews", path: "/admin/testimonials", icon: MessageSquare, color: "bg-yellow-50 text-yellow-600" },
  { label: "Contact", desc: "Contact info & form options", path: "/admin/contact", icon: Phone, color: "bg-orange-50 text-orange-600" },
  { label: "Services", desc: "IT, BPO, Non-IT, Accounting & more", path: "/admin/services", icon: Briefcase, color: "bg-indigo-50 text-indigo-600" },
  { label: "Our Clients", desc: "Client logos & heading text", path: "/admin/clients", icon: Users, color: "bg-teal-50 text-teal-600" },
];

export default function AdminDashboard() {
  const { resetToDefaults } = useContent();

  function handleReset() {
    if (window.confirm("Are you sure you want to reset ALL content to defaults? This cannot be undone.")) {
      resetToDefaults();
      alert("Content reset to defaults.");
    }
  }

  return (
    <div className="p-8 max-w-6xl mx-auto">

      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-500 mt-1">Manage all website content from here</p>
        </div>

        <div className="flex gap-3">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-50 transition"
          >
            <ExternalLink size={15} />
            View Website
          </a>

          <button
            onClick={handleReset}
            className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 border border-red-200 rounded-lg text-sm hover:bg-red-100 transition"
          >
            <RotateCcw size={15} />
            Reset All
          </button>
        </div>
      </div>

      {/* Info Card */}
      <div className="bg-gradient-to-r from-[#7A1CC2] to-[#3C33D8] text-white rounded-2xl p-6 mb-8">
        <h2 className="font-semibold text-lg mb-1">Content Management System</h2>
        <p className="text-white/80 text-sm">
          All changes are saved instantly and reflected on the website. Click any section below to edit its content.
          Changes persist across browser sessions.
        </p>
      </div>

      {/* Section Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {sections.map(({ label, desc, path, icon: Icon, color }) => (
          <Link
            key={path}
            to={path}
            className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all group"
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${color}`}>
              <Icon size={20} />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-purple-700 transition-colors">
              {label}
            </h3>
            <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
          </Link>
        ))}
      </div>

    </div>
  );
}
