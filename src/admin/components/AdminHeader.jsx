import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function AdminHeader({ title, subtitle, onSave, saved }) {
  const navigate = useNavigate();

  return (
    <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button
          onClick={() => navigate("/admin/dashboard")}
          className="p-2 rounded-lg hover:bg-gray-100 transition text-gray-500"
        >
          <ArrowLeft size={18} />
        </button>
        <div>
          <h1 className="text-xl font-bold text-gray-900">{title}</h1>
          {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
        </div>
      </div>

      <div className="flex items-center gap-3">
        {saved && (
          <span className="text-green-600 text-sm font-medium flex items-center gap-1">
            ✓ Saved successfully
          </span>
        )}
        <button
          onClick={onSave}
          className="px-6 py-2 bg-gradient-to-r from-[#7A1CC2] to-[#3C33D8] text-white text-sm font-semibold rounded-xl hover:opacity-90 transition"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
