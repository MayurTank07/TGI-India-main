import { useState } from "react";
import { useContent } from "../../context/ContentContext";
import AdminHeader from "../components/AdminHeader";
import { Field, Input, SectionCard, ItemCard, AddButton, ImageUpload } from "../components/FieldGroup";

export default function NavbarEditor() {
  const { content, updateSection } = useContent();
  const [local, setLocal] = useState(structuredClone(content.navbar));
  const [saved, setSaved] = useState(false);

  function save() {
    updateSection("navbar", local);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  }

  function updateLink(i, key, val) {
    const links = [...local.links];
    links[i] = { ...links[i], [key]: val };
    setLocal({ ...local, links });
  }

  function addLink() {
    setLocal({ ...local, links: [...local.links, { label: "New Link", path: "/" }] });
  }

  function removeLink(i) {
    setLocal({ ...local, links: local.links.filter((_, idx) => idx !== i) });
  }

  return (
    <div>
      <AdminHeader title="Navbar Editor" subtitle="Edit navigation bar content" onSave={save} saved={saved} />

      <div className="p-8 max-w-3xl">

        <SectionCard title="Logo">
          <Field label="Logo Image">
            <ImageUpload 
              value={local.logoImage || ""} 
              onChange={(v) => setLocal({ ...local, logoImage: v })} 
            />
            <p className="text-xs text-gray-500 mt-2">Upload your company logo. Leave empty to use default gradient circle.</p>
          </Field>
          <Field label="Logo Text (main)">
            <Input value={local.logoText} onChange={(v) => setLocal({ ...local, logoText: v })} placeholder="TG INDIA" />
          </Field>
          <Field label="Logo Subtitle">
            <Input value={local.logoSubtext} onChange={(v) => setLocal({ ...local, logoSubtext: v })} placeholder="Talent Group Of India" />
          </Field>
        </SectionCard>

        <SectionCard title="CTA Button">
          <Field label="Button Text">
            <Input value={local.ctaButton} onChange={(v) => setLocal({ ...local, ctaButton: v })} placeholder="Find Talent" />
          </Field>
        </SectionCard>

        <SectionCard title="Navigation Links">
          {local.links.map((link, i) => (
            <ItemCard key={i} title={`Link ${i + 1}`} onRemove={() => removeLink(i)}>
              <div className="grid grid-cols-2 gap-4">
                <Field label="Label">
                  <Input value={link.label} onChange={(v) => updateLink(i, "label", v)} placeholder="Home" />
                </Field>
                <Field label="Path">
                  <Input value={link.path} onChange={(v) => updateLink(i, "path", v)} placeholder="/" />
                </Field>
              </div>
            </ItemCard>
          ))}
          <AddButton onClick={addLink} label="Add Navigation Link" />
        </SectionCard>

      </div>
    </div>
  );
}
