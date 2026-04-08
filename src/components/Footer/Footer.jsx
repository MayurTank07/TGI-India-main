import { Facebook, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { useContent } from "../../context/ContentContext";

export default function Footer() {
  const { content } = useContent();
  const { logoImage, logoText, logoSubtext, description, address, email, phone, socialLinks, sitemapLinks } = content.footer;

  // Map sitemap link text to routes
  const getLinkPath = (linkText) => {
    const linkMap = {
      "Home": "/",
      "About": "/about",
      "About Us": "/about",
      "Services": "/services",
      "Our Clients": "/our-clients",
      "Clients": "/our-clients",
      "Testimonials": "/testimonials",
      "Contact": "/contact",
      "Contact Us": "/contact"
    };
    return linkMap[linkText] || "/";
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12 md:py-20 px-5 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">

        {/* Logo Section */}
        <div className="sm:col-span-2 md:col-span-1">
          <Link to="/" className="flex items-center gap-3 md:gap-4 mb-5 group">
            {logoImage ? (
              <img src={logoImage} alt={logoText} className="w-10 h-10 md:w-12 md:h-12 object-contain rounded transition-transform group-hover:scale-105" />
            ) : (
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full shadow-lg group-hover:shadow-xl transition-all" />
            )}
            <div>
              <h3 className="text-lg md:text-xl font-bold group-hover:text-indigo-400 transition-colors">{logoText}</h3>
              <p className="text-sm text-gray-400">{logoSubtext}</p>
            </div>
          </Link>
          <p className="text-sm md:text-base text-gray-400 leading-relaxed">{description}</p>
        </div>

        {/* Sitemap */}
        <div>
          <h4 className="font-bold mb-4 md:mb-5 text-base md:text-lg text-white">Sitemap</h4>
          <ul className="space-y-2.5 md:space-y-3 text-gray-400 text-sm md:text-base">
            {sitemapLinks?.map((link, i) => (
              <li key={i}>
                <Link 
                  to={getLinkPath(link)} 
                  className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold mb-4 md:mb-5 text-base md:text-lg text-white">Contact Us</h4>
          <ul className="space-y-2.5 md:space-y-3 text-gray-400 text-sm md:text-base">
            {email && <li className="break-all hover:text-white transition-colors">{email}</li>}
            {phone && <li className="hover:text-white transition-colors">{phone}</li>}
          </ul>
        </div>

        {/* Address & Social */}
        <div className="sm:col-span-2 md:col-span-1">
          <h4 className="font-bold mb-4 md:mb-5 text-base md:text-lg text-white">Address</h4>
          <p className="text-sm md:text-base text-gray-400 mb-6 leading-relaxed whitespace-pre-line">{address}</p>

          {/* Social Icons */}
          <div className="flex gap-3 md:gap-4">
            <a href={socialLinks?.facebook || "#"} className="bg-white/10 border border-white/20 p-2.5 md:p-3 rounded-full hover:bg-indigo-600 hover:border-indigo-600 transition-all duration-200 group">
              <Facebook size={18} className="md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a href={socialLinks?.twitter || "#"} className="bg-white/10 border border-white/20 p-2.5 md:p-3 rounded-full hover:bg-indigo-600 hover:border-indigo-600 transition-all duration-200 group">
              <Twitter size={18} className="md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a href={socialLinks?.instagram || "#"} className="bg-white/10 border border-white/20 p-2.5 md:p-3 rounded-full hover:bg-indigo-600 hover:border-indigo-600 transition-all duration-200 group">
              <Instagram size={18} className="md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
