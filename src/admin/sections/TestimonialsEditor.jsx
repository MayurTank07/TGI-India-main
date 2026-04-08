import { useState } from "react";
import { useContent } from "../../context/ContentContext";
import AdminHeader from "../components/AdminHeader";
import { Field, Input, Textarea, SectionCard, ItemCard, AddButton, ImageUpload } from "../components/FieldGroup";

function TestimonialItemForm({ item, onChange, onRemove, index }) {
  return (
    <ItemCard title={`Testimonial ${index + 1}: ${item.name}`} onRemove={onRemove}>
      <Field label="Quote Text">
        <Textarea value={item.text} onChange={(v) => onChange({ ...item, text: v })} rows={3} />
      </Field>
      <div className="grid grid-cols-2 gap-4">
        <Field label="Name">
          <Input value={item.name} onChange={(v) => onChange({ ...item, name: v })} placeholder="John Doe" />
        </Field>
        <Field label="Role / Company">
          <Input value={item.role} onChange={(v) => onChange({ ...item, role: v })} placeholder="CEO, Company" />
        </Field>
      </div>
      <Field label="Photo">
        <ImageUpload value={item.image} onChange={(v) => onChange({ ...item, image: v })} />
      </Field>
    </ItemCard>
  );
}

export default function TestimonialsEditor() {
  const { content, updateSection } = useContent();
  const [local, setLocal] = useState(structuredClone(content.testimonials));
  const [saved, setSaved] = useState(false);
  const [tab, setTab] = useState("employers");

  function save() {
    updateSection("testimonials", local);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  }

  // --- Employers ---
  function setEmployersMeta(key, val) { setLocal({ ...local, employers: { ...local.employers, [key]: val } }); }
  function updateEmployer(i, val) {
    const items = [...local.employers.items];
    items[i] = val;
    setLocal({ ...local, employers: { ...local.employers, items } });
  }
  function addEmployer() {
    setLocal({ ...local, employers: { ...local.employers, items: [...local.employers.items, { text: "", name: "New Person", role: "Role, Company", image: "" }] } });
  }
  function removeEmployer(i) {
    setLocal({ ...local, employers: { ...local.employers, items: local.employers.items.filter((_, idx) => idx !== i) } });
  }

  // --- Job Seekers ---
  function setJobSeekerMeta(key, val) { setLocal({ ...local, jobSeekers: { ...local.jobSeekers, [key]: val } }); }
  function setJobSeekerItem(key, val) { setLocal({ ...local, jobSeekers: { ...local.jobSeekers, item: { ...local.jobSeekers.item, [key]: val } } }); }

  // --- Growing Teams ---
  function setGrowingTeamsMeta(key, val) { setLocal({ ...local, growingTeams: { ...local.growingTeams, [key]: val } }); }
  function updateGrowingTeam(i, val) {
    const items = [...local.growingTeams.items];
    items[i] = val;
    setLocal({ ...local, growingTeams: { ...local.growingTeams, items } });
  }
  function addGrowingTeam() {
    setLocal({ ...local, growingTeams: { ...local.growingTeams, items: [...local.growingTeams.items, { text: "", name: "New Person", role: "Role, Company", image: "" }] } });
  }
  function removeGrowingTeam(i) {
    setLocal({ ...local, growingTeams: { ...local.growingTeams, items: local.growingTeams.items.filter((_, idx) => idx !== i) } });
  }

  const tabs = [
    { id: "employers", label: "Employers" },
    { id: "jobSeekers", label: "Job Seekers" },
    { id: "growingTeams", label: "Growing Teams" },
  ];

  return (
    <div>
      <AdminHeader title="Testimonials Editor" subtitle="Edit testimonial content" onSave={save} saved={saved} />

      <div className="px-8 pt-6 border-b border-gray-200 bg-gray-50">
        <div className="flex gap-1">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`px-4 py-2 text-sm font-medium rounded-t-lg transition ${
                tab === t.id
                  ? "bg-white text-purple-700 border border-b-white border-gray-200 -mb-px"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="p-8 max-w-3xl">

        {/* EMPLOYERS */}
        {tab === "employers" && (
          <SectionCard title="Employer Testimonials">
            <Field label="Section Heading">
              <Textarea value={local.employers.heading} onChange={(v) => setEmployersMeta("heading", v)} rows={2} />
            </Field>
            <Field label="Section Subheading">
              <Textarea value={local.employers.subheading} onChange={(v) => setEmployersMeta("subheading", v)} rows={3} />
            </Field>
            <div className="mt-4 border-t border-gray-100 pt-4">
              {local.employers.items.map((item, i) => (
                <TestimonialItemForm
                  key={i}
                  item={item}
                  index={i}
                  onChange={(val) => updateEmployer(i, val)}
                  onRemove={() => removeEmployer(i)}
                />
              ))}
              <AddButton onClick={addEmployer} label="Add Employer Testimonial" />
            </div>
          </SectionCard>
        )}

        {/* JOB SEEKERS */}
        {tab === "jobSeekers" && (
          <SectionCard title="Job Seeker Testimonial">
            <Field label="Section Heading">
              <Textarea value={local.jobSeekers.heading} onChange={(v) => setJobSeekerMeta("heading", v)} rows={2} />
            </Field>
            <Field label="Section Subheading">
              <Textarea value={local.jobSeekers.subheading} onChange={(v) => setJobSeekerMeta("subheading", v)} rows={3} />
            </Field>
            <div className="mt-4 border-t border-gray-100 pt-4">
              <ItemCard title="Featured Testimonial">
                <Field label="Quote Text">
                  <Textarea value={local.jobSeekers.item.text} onChange={(v) => setJobSeekerItem("text", v)} rows={3} />
                </Field>
                <div className="grid grid-cols-2 gap-4">
                  <Field label="Name">
                    <Input value={local.jobSeekers.item.name} onChange={(v) => setJobSeekerItem("name", v)} />
                  </Field>
                  <Field label="Role">
                    <Input value={local.jobSeekers.item.role} onChange={(v) => setJobSeekerItem("role", v)} />
                  </Field>
                </div>
                <Field label="Photo">
                  <ImageUpload value={local.jobSeekers.item.image} onChange={(v) => setJobSeekerItem("image", v)} />
                </Field>
              </ItemCard>
            </div>
          </SectionCard>
        )}

        {/* GROWING TEAMS */}
        {tab === "growingTeams" && (
          <SectionCard title="Growing Teams Testimonials">
            <Field label="Section Heading">
              <Textarea value={local.growingTeams.heading} onChange={(v) => setGrowingTeamsMeta("heading", v)} rows={2} />
            </Field>
            <Field label="Section Subheading">
              <Textarea value={local.growingTeams.subheading} onChange={(v) => setGrowingTeamsMeta("subheading", v)} rows={3} />
            </Field>
            <div className="mt-4 border-t border-gray-100 pt-4">
              {local.growingTeams.items.map((item, i) => (
                <TestimonialItemForm
                  key={i}
                  item={item}
                  index={i}
                  onChange={(val) => updateGrowingTeam(i, val)}
                  onRemove={() => removeGrowingTeam(i)}
                />
              ))}
              <AddButton onClick={addGrowingTeam} label="Add Growing Team Testimonial" />
            </div>
          </SectionCard>
        )}

      </div>
    </div>
  );
}
