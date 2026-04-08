import { NavLink, useNavigate, Outlet } from "react-router-dom";
import {
  LayoutDashboard, Navigation, AlignJustify, Home, Info,
  MessageSquare, Phone, Briefcase, Users, LogOut, Inbox
} from "lucide-react";

const navItems = [
  { label: "Dashboard", path: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Navbar", path: "/admin/navbar", icon: Navigation },
  { label: "Footer", path: "/admin/footer", icon: AlignJustify },
  { label: "Home Page", path: "/admin/home", icon: Home },
  { label: "About Page", path: "/admin/about", icon: Info },
  { label: "Testimonials", path: "/admin/testimonials", icon: MessageSquare },
  { label: "Contact", path: "/admin/contact", icon: Phone },
  { label: "Services", path: "/admin/services", icon: Briefcase },
  { label: "Our Clients", path: "/admin/clients", icon: Users },
  { label: "Form Submissions", path: "/admin/submissions", icon: Inbox },
];

export default function AdminLayout() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("tgi_admin_token");
    sessionStorage.removeItem("tgi_admin_auth");
    navigate("/admin/login");
  }

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">

      {/* Sidebar */}
      <aside className="w-64 bg-[#17021d] text-white flex flex-col flex-shrink-0">

        {/* Logo */}
        <div className="px-6 py-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full" />
            <div>
              <p className="text-sm font-bold">TG INDIA</p>
              <p className="text-xs text-gray-400">Admin Panel</p>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
          {navItems.map(({ label, path, icon: Icon }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition ${
                  isActive
                    ? "bg-[#7A1CC2] text-white"
                    : "text-gray-300 hover:bg-white/10 hover:text-white"
                }`
              }
            >
              <Icon size={17} />
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Logout */}
        <div className="px-3 py-4 border-t border-white/10">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-4 py-2.5 rounded-xl text-sm font-medium text-gray-300 hover:bg-red-900/40 hover:text-red-300 transition"
          >
            <LogOut size={17} />
            Logout
          </button>
        </div>

      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>

    </div>
  );
}
