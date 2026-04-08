import { useState } from "react";
import { useContent } from "../../context/ContentContext";
import AdminHeader from "../components/AdminHeader";
import { Field, Input, Textarea, SectionCard, AddButton } from "../components/FieldGroup";

export default function ContactEditor() {
  const { content, updateSection } = useContent();
  const [local, setLocal] = useState(structuredClone(content.contact));
  const [saved, setSaved] = useState(false);

  function save() {
    updateSection("contact", local);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  }

  function set(key, val) { setLocal({ ...local, [key]: val }); }

  function updateCategory(i, val) {
    const arr = [...local.categoryOptions];
    arr[i] = val;
    setLocal({ ...local, categoryOptions: arr });
  }
  function updateCity(i, val) {
    const arr = [...local.cityOptions];
    arr[i] = val;
    setLocal({ ...local, cityOptions: arr });
  }

  return (
    <div>
      <AdminHeader title="Contact Page Editor" subtitle="Edit contact information and form options" onSave={save} saved={saved} />

      <div className="p-8 max-w-3xl">

        <SectionCard title="Contact Page Content">
          <Field label="Heading">
            <Textarea value={local.heading} onChange={(v) => set("heading", v)} rows={2} />
          </Field>
          <Field label="Subheading">
            <Textarea value={local.subheading} onChange={(v) => set("subheading", v)} rows={2} />
          </Field>
        </SectionCard>

        <SectionCard title="Contact Details">
          <Field label="Email Address">
            <Input type="email" value={local.email} onChange={(v) => set("email", v)} placeholder="info@tgindia.com" />
          </Field>
          <Field label="Phone Number">
            <Input value={local.phone} onChange={(v) => set("phone", v)} placeholder="+91 98765 43210" />
          </Field>
          <Field label="Address">
            <Textarea value={local.address} onChange={(v) => set("address", v)} rows={3} placeholder="Bangalore, Karnataka..." />
          </Field>
        </SectionCard>

        <SectionCard title="Form Category Options">
          {local.categoryOptions?.map((opt, i) => (
            <div key={i} className="flex gap-2 mb-2 items-center">
              <div className="flex-1">
                <Input value={opt} onChange={(v) => updateCategory(i, v)} />
              </div>
              <button
                onClick={() => setLocal({ ...local, categoryOptions: local.categoryOptions.filter((_, idx) => idx !== i) })}
                className="text-red-400 hover:text-red-600 text-sm px-2 py-1 bg-red-50 rounded-lg"
              >✕</button>
            </div>
          ))}
          <AddButton
            onClick={() => setLocal({ ...local, categoryOptions: [...local.categoryOptions, "New Option"] })}
            label="Add Category Option"
          />
        </SectionCard>

        <SectionCard title="Form City Options">
          {local.cityOptions?.map((city, i) => (
            <div key={i} className="flex gap-2 mb-2 items-center">
              <div className="flex-1">
                <Input value={city} onChange={(v) => updateCity(i, v)} />
              </div>
              <button
                onClick={() => setLocal({ ...local, cityOptions: local.cityOptions.filter((_, idx) => idx !== i) })}
                className="text-red-400 hover:text-red-600 text-sm px-2 py-1 bg-red-50 rounded-lg"
              >✕</button>
            </div>
          ))}
          <AddButton
            onClick={() => setLocal({ ...local, cityOptions: [...local.cityOptions, "New City"] })}
            label="Add City"
          />
        </SectionCard>

      </div>
    </div>
  );
}
