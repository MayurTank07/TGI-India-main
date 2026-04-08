import { Link } from "react-router-dom";
import { useContent } from "../../context/ContentContext";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const { content } = useContent();
  const { logoImage, logoText, logoSubtext, links, ctaButton } = content.navbar;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const serviceLinks = [
    { label: "IT Recruitment", path: "/services/it" },
    { label: "BPO & Customer Support", path: "/services/bpo" },
    { label: "Non-IT Recruitment", path: "/services/non-it" },
    { label: "Accounting & Finance", path: "/services/accounting" },
    { label: "Healthcare Staffing", path: "/services/healthcare" },
    { label: "Corporate Hiring", path: "/services/corperate" }
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 md:py-5 px-4 md:px-8">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 md:gap-4 group">
          {logoImage ? (
            <img src={logoImage} alt={logoText} className="w-10 h-10 md:w-12 md:h-12 object-contain rounded transition-transform group-hover:scale-105" />
          ) : (
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full shadow-md group-hover:shadow-lg transition-all" />
          )}
          <div>
            <p className="text-sm md:text-base font-bold text-gray-900 leading-none group-hover:text-indigo-600 transition-colors">{logoText}</p>
            <p className="text-xs md:text-sm text-gray-600">{logoSubtext}</p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 lg:gap-10 text-gray-700 font-medium items-center">
          {links.map((link, i) => {
            // Check if this is the Services link
            if (link.label === "Services" || link.path === "/services") {
              return (
                <li 
                  key={i} 
                  className="relative"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <Link 
                    to={link.path} 
                    className="hover:text-indigo-600 transition-colors duration-200 relative group flex items-center gap-1"
                  >
                    {link.label}
                    <ChevronDown size={16} className={`transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-200"></span>
                  </Link>
                  
                  {/* Dropdown Menu */}
                  {servicesDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 py-3 z-50">
                      {serviceLinks.map((service, idx) => (
                        <Link
                          key={idx}
                          to={service.path}
                          className="block px-5 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors text-sm font-medium"
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              );
            }
            
            return (
              <li key={i}>
                <Link to={link.path} className="hover:text-indigo-600 transition-colors duration-200 relative group">
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-200"></span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA Button */}
        <Link to="/contact" className="hidden md:block bg-indigo-600 text-white px-6 lg:px-8 py-2.5 lg:py-3 rounded-full hover:bg-indigo-700 transition-all duration-200 font-semibold shadow-md hover:shadow-lg hover:scale-105 text-center">
          {ctaButton}
        </Link>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-xl">
          <ul className="flex flex-col">
            {links.map((link, i) => {
              // Check if this is the Services link
              if (link.label === "Services" || link.path === "/services") {
                return (
                  <li key={i} className="border-b border-gray-100">
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="w-full flex items-center justify-between px-5 py-3.5 text-gray-700 font-medium hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                    >
                      <span>{link.label}</span>
                      <ChevronDown size={18} className={`transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {/* Mobile Services Submenu */}
                    {mobileServicesOpen && (
                      <div className="bg-gray-50 border-t border-gray-200">
                        {serviceLinks.map((service, idx) => (
                          <Link
                            key={idx}
                            to={service.path}
                            className="block px-8 py-2.5 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 transition-colors text-sm"
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setMobileServicesOpen(false);
                            }}
                          >
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </li>
                );
              }
              
              return (
                <li key={i}>
                  <Link 
                    to={link.path} 
                    className="block px-5 py-3.5 text-gray-700 font-medium hover:bg-indigo-50 hover:text-indigo-600 transition-colors border-b border-gray-100"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li className="p-4">
              <Link to="/contact" className="block w-full bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition-all font-semibold shadow-md text-center text-sm" onClick={() => setMobileMenuOpen(false)}>
                {ctaButton}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
