import { useState, useEffect } from "react";
import { Trash2, Download, RefreshCw, Inbox } from "lucide-react";
import AdminHeader from "../components/AdminHeader";
import { submissionAPI } from "../../services/api";

const SOURCES = ["All Sources", "Home Page Contact Form", "Contact Us Page"];

export default function SubmissionsViewer() {
  const [submissions, setSubmissions] = useState([]);
  const [filter, setFilter] = useState("All Sources");
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(false);

  async function load() {
    try {
      setLoading(true);
      const response = await submissionAPI.getAll({ source: filter });
      setSubmissions(response.submissions || []);
    } catch (err) {
      console.error('Error loading submissions:', err);
      alert('Failed to load submissions');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { load(); }, [filter]);

  async function deleteOne(id) {
    try {
      await submissionAPI.delete(id);
      setSubmissions(submissions.filter((s) => s._id !== id));
      if (selected?._id === id) setSelected(null);
    } catch (err) {
      console.error('Error deleting submission:', err);
      alert('Failed to delete submission');
    }
  }

  async function deleteAll() {
    if (!window.confirm("Delete ALL submissions? This cannot be undone.")) return;
    try {
      await submissionAPI.deleteAll();
      setSubmissions([]);
      setSelected(null);
    } catch (err) {
      console.error('Error deleting all submissions:', err);
      alert('Failed to delete submissions');
    }
  }

  function exportCSV() {
    const rows = submissions;
    if (!rows.length) return;
    const headers = ["ID", "Source", "Submitted At", "First Name", "Last Name", "Email", "Phone", "Category", "City", "Message"];
    const lines = rows.map((r) =>
      [r._id, r.source, r.createdAt, r.firstName, r.lastName, r.email, r.phone, r.category, r.city, `"${(r.message || "").replace(/"/g, '""')}"`].join(",")
    );
    const csv = [headers.join(","), ...lines].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `tgi_submissions_${Date.now()}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div>
      <AdminHeader
        title="Form Submissions"
        subtitle={`${submissions.length} submission${submissions.length !== 1 ? "s" : ""}`}
      />

      {/* Toolbar */}
      <div className="px-8 pt-5 pb-4 flex flex-wrap items-center gap-3 border-b border-gray-200 bg-gray-50">
        {/* Source filter */}
        <div className="flex gap-1">
          {SOURCES.map((src) => (
            <button
              key={src}
              onClick={() => setFilter(src)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                filter === src ? "bg-purple-600 text-white" : "bg-white border border-gray-300 text-gray-600 hover:bg-gray-100"
              }`}
            >
              {src}
            </button>
          ))}
        </div>

        <div className="flex-1" />

        <button onClick={load} disabled={loading} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white border border-gray-300 text-gray-600 hover:bg-gray-100 transition disabled:opacity-50">
          <RefreshCw size={13} className={loading ? "animate-spin" : ""} /> Refresh
        </button>
        <button onClick={exportCSV} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white border border-gray-300 text-gray-600 hover:bg-gray-100 transition">
          <Download size={13} /> Export CSV
        </button>
        {submissions.length > 0 && (
          <button onClick={deleteAll} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-red-50 border border-red-200 text-red-600 hover:bg-red-100 transition">
            <Trash2 size={13} /> Delete All
          </button>
        )}
      </div>

      {/* Content */}
      {loading ? (
        <div className="flex flex-col items-center justify-center py-24 text-gray-400">
          <RefreshCw size={48} className="mb-3 opacity-40 animate-spin" />
          <p className="text-base font-medium">Loading submissions...</p>
        </div>
      ) : submissions.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-gray-400">
          <Inbox size={48} className="mb-3 opacity-40" />
          <p className="text-base font-medium">No submissions yet</p>
          <p className="text-sm mt-1">When visitors fill contact forms, entries will appear here.</p>
        </div>
      ) : (
        <div className="flex h-[calc(100vh-160px)]">

          {/* List */}
          <div className="w-80 flex-shrink-0 border-r border-gray-200 overflow-y-auto bg-white">
            {submissions.map((sub) => (
              <div
                key={sub._id}
                onClick={() => setSelected(sub)}
                className={`px-5 py-4 cursor-pointer border-b border-gray-100 hover:bg-purple-50 transition ${
                  selected?._id === sub._id ? "bg-purple-50 border-l-4 border-l-purple-600" : ""
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-semibold text-gray-800">
                    {sub.firstName} {sub.lastName}
                  </span>
                  <button
                    onClick={(e) => { e.stopPropagation(); deleteOne(sub._id); }}
                    className="text-red-400 hover:text-red-600 transition"
                  >
                    <Trash2 size={13} />
                  </button>
                </div>
                <p className="text-xs text-gray-500 truncate">{sub.email}</p>
                <p className="text-xs text-purple-500 mt-1">{sub.source}</p>
                <p className="text-xs text-gray-400 mt-0.5">
                  {new Date(sub.createdAt).toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" })}
                </p>
              </div>
            ))}
          </div>

          {/* Detail Panel */}
          <div className="flex-1 overflow-y-auto p-8 bg-gray-50">
            {selected ? (
              <div className="max-w-xl">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-bold text-gray-800">{selected.firstName} {selected.lastName}</h2>
                  <button
                    onClick={() => deleteOne(selected._id)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-red-50 border border-red-200 text-red-600 hover:bg-red-100 transition"
                  >
                    <Trash2 size={13} /> Delete
                  </button>
                </div>

                <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-4">
                  <Row label="Source" value={selected.source} accent />
                  <Row label="Submitted" value={new Date(selected.createdAt).toLocaleString("en-IN", { dateStyle: "full", timeStyle: "short" })} />
                  <Row label="Email" value={selected.email} />
                  <Row label="Phone" value={selected.phone} />
                  <Row label="Category" value={selected.category} />
                  <Row label="City" value={selected.city} />
                  {selected.message && (
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase mb-1.5">Message</p>
                      <p className="text-sm text-gray-800 bg-gray-50 rounded-xl p-4 leading-relaxed whitespace-pre-wrap">{selected.message}</p>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full text-gray-400">
                <p className="text-sm">Select a submission to view details</p>
              </div>
            )}
          </div>

        </div>
      )}
    </div>
  );
}

function Row({ label, value, accent }) {
  if (!value) return null;
  return (
    <div>
      <p className="text-xs font-semibold text-gray-500 uppercase mb-0.5">{label}</p>
      <p className={`text-sm font-medium ${accent ? "text-purple-700" : "text-gray-800"}`}>{value}</p>
    </div>
  );
}
