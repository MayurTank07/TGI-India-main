// Reusable form field components for the admin panel
import { useRef, useState } from "react";

export function Field({ label, hint, children }) {
  return (
    <div className="mb-5">
      <label className="block text-sm font-semibold text-gray-700 mb-1">{label}</label>
      {hint && <p className="text-xs text-gray-400 mb-2">{hint}</p>}
      {children}
    </div>
  );
}

export function Input({ value, onChange, placeholder, type = "text" }) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-400"
    />
  );
}

export function Textarea({ value, onChange, placeholder, rows = 3 }) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={rows}
      className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
    />
  );
}

export function ImagePreview({ src }) {
  if (!src) return null;
  return (
    <div className="mt-2">
      <img
        src={src}
        alt="preview"
        className="w-32 h-20 object-cover rounded-lg border border-gray-200"
        onError={(e) => { e.target.style.display = "none"; }}
      />
    </div>
  );
}

export function SectionCard({ title, children }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
      <h2 className="text-base font-bold text-gray-800 mb-5 pb-3 border-b border-gray-100">
        {title}
      </h2>
      {children}
    </div>
  );
}

export function ItemCard({ title, onRemove, children }) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-4 relative">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-gray-700">{title}</h3>
        {onRemove && (
          <button
            onClick={onRemove}
            className="text-red-500 hover:text-red-700 text-xs font-medium px-3 py-1 bg-red-50 rounded-lg hover:bg-red-100 transition"
          >
            Remove
          </button>
        )}
      </div>
      {children}
    </div>
  );
}

export function AddButton({ onClick, label }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-4 py-2 border-2 border-dashed border-purple-300 text-purple-600 rounded-xl text-sm font-medium hover:bg-purple-50 transition w-full justify-center mt-2"
    >
      + {label}
    </button>
  );
}

// ImageUpload: supports both URL input and local file upload (stored as base64)
export function ImageUpload({ value, onChange, label = "Image" }) {
  const fileRef = useRef();
  const [mode, setMode] = useState(value?.startsWith("data:") ? "file" : "url");

  function handleFile(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => onChange(ev.target.result);
    reader.readAsDataURL(file);
  }

  return (
    <div>
      {/* Mode toggle */}
      <div className="flex gap-2 mb-2">
        <button
          type="button"
          onClick={() => setMode("url")}
          className={`text-xs px-3 py-1 rounded-lg border transition ${mode === "url" ? "bg-purple-600 text-white border-purple-600" : "bg-white border-gray-300 text-gray-600 hover:bg-gray-50"}`}
        >
          URL
        </button>
        <button
          type="button"
          onClick={() => { setMode("file"); setTimeout(() => fileRef.current?.click(), 50); }}
          className={`text-xs px-3 py-1 rounded-lg border transition ${mode === "file" ? "bg-purple-600 text-white border-purple-600" : "bg-white border-gray-300 text-gray-600 hover:bg-gray-50"}`}
        >
          Upload File
        </button>
        {value && (
          <button type="button" onClick={() => onChange("")} className="text-xs px-3 py-1 rounded-lg border border-red-200 bg-red-50 text-red-500 hover:bg-red-100 transition ml-auto">
            Clear
          </button>
        )}
      </div>

      {mode === "url" ? (
        <input
          type="text"
          value={value?.startsWith("data:") ? "" : (value || "")}
          onChange={(e) => onChange(e.target.value)}
          placeholder="https://images.unsplash.com/..."
          className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
      ) : (
        <div
          onClick={() => fileRef.current?.click()}
          className="w-full border-2 border-dashed border-purple-300 rounded-xl px-4 py-3 text-sm text-purple-600 text-center cursor-pointer hover:bg-purple-50 transition"
        >
          {value?.startsWith("data:") ? "File loaded — click to change" : "Click to choose a file"}
        </div>
      )}

      <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleFile} />

      {value && (
        <div className="mt-2">
          <img
            src={value}
            alt="preview"
            className="w-32 h-20 object-cover rounded-lg border border-gray-200"
            onError={(e) => { e.target.style.display = "none"; }}
          />
        </div>
      )}
    </div>
  );
}

export function IconSelect({ value, onChange }) {
  const icons = [
    "ShieldCheck", "Zap", "Heart", "Target", "Ear", "CheckCircle",
    "TrendingUp", "Star", "Award", "Globe", "Users", "Briefcase",
    "Clock", "Smile", "ThumbsUp", "Lightbulb", "Rocket", "Shield",
  ];
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-400"
    >
      {icons.map((icon) => (
        <option key={icon} value={icon}>{icon}</option>
      ))}
    </select>
  );
}
