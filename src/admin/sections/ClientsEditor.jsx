import { useState } from "react";
import { useContent } from "../../context/ContentContext";
import AdminHeader from "../components/AdminHeader";
import { Field, Input, Textarea, SectionCard, ItemCard, AddButton, ImageUpload } from "../components/FieldGroup";

export default function ClientsEditor() {
  const { content, updateSection } = useContent();
  const [local, setLocal] = useState(structuredClone(content.clients));
  const [saved, setSaved] = useState(false);

  function save() {
    updateSection("clients", local);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  }

  function set(key, val) { setLocal({ ...local, [key]: val }); }
  function updateOrg(i, key, val) {
    const organizations = [...local.organizations];
    organizations[i] = { ...organizations[i], [key]: val };
    setLocal({ ...local, organizations });
  }
  function addOrg() {
    setLocal({ ...local, organizations: [...local.organizations, { name: "New Client", logo: "" }] });
  }
  function removeOrg(i) {
    setLocal({ ...local, organizations: local.organizations.filter((_, idx) => idx !== i) });
  }

  return (
    <div>
      <AdminHeader title="Our Clients Editor" subtitle="Edit client logos and heading" onSave={save} saved={saved} />

      <div className="p-8 max-w-3xl">

        <SectionCard title="Clients Hero Section">
          <Field label="Heading">
            <Input value={local.heading} onChange={(v) => set("heading", v)} />
          </Field>
          <Field label="Subheading">
            <Textarea value={local.subheading} onChange={(v) => set("subheading", v)} rows={2} />
          </Field>
          <Field label="CTA Button Text">
            <Input value={local.primaryCTA} onChange={(v) => set("primaryCTA", v)} />
          </Field>
          <Field label="Hero Image">
            <ImageUpload value={local.image} onChange={(v) => set("image", v)} />
          </Field>
        </SectionCard>

        <SectionCard title="Client Organizations">
          <p className="text-xs text-gray-400 mb-4">
            Tip: Use Clearbit logo URLs like <code className="bg-gray-100 px-1 rounded">https://logo.clearbit.com/company.com</code>
          </p>
          {local.organizations?.map((org, i) => (
            <ItemCard key={i} title={`${i + 1}. ${org.name}`} onRemove={() => removeOrg(i)}>
              <Field label="Company Name">
                <Input value={org.name} onChange={(v) => updateOrg(i, "name", v)} placeholder="Google" />
              </Field>
              <Field label="Logo">
                <ImageUpload value={org.logo} onChange={(v) => updateOrg(i, "logo", v)} />
              </Field>
            </ItemCard>
          ))}
          <AddButton onClick={addOrg} label="Add Client Organization" />
        </SectionCard>

      </div>
    </div>
  );
}
