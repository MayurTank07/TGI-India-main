import { useState } from "react";
import { useContent } from "../../context/ContentContext";
import AdminHeader from "../components/AdminHeader";
import { Field, Input, Textarea, SectionCard, ItemCard, AddButton, ImageUpload } from "../components/FieldGroup";

export default function FooterEditor() {
  const { content, updateSection } = useContent();
  const [local, setLocal] = useState(structuredClone(content.footer));
  const [saved, setSaved] = useState(false);

  function save() {
    updateSection("footer", local);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  }

  function set(key, val) { setLocal({ ...local, [key]: val }); }
  function setSocial(key, val) { setLocal({ ...local, socialLinks: { ...local.socialLinks, [key]: val } }); }

  function updateSitemapLink(i, val) {
    const arr = [...local.sitemapLinks];
    arr[i] = val;
    setLocal({ ...local, sitemapLinks: arr });
  }

  function addSitemapLink() {
    setLocal({ ...local, sitemapLinks: [...local.sitemapLinks, "New Link"] });
  }

  function removeSitemapLink(i) {
    setLocal({ ...local, sitemapLinks: local.sitemapLinks.filter((_, idx) => idx !== i) });
  }

  return (
    <div>
      <AdminHeader title="Footer Editor" subtitle="Edit footer content and contact info" onSave={save} saved={saved} />

      <div className="p-8 max-w-3xl">

        <SectionCard title="Logo & Description">
          <Field label="Logo Image">
            <ImageUpload 
              value={local.logoImage || ""} 
              onChange={(v) => set("logoImage", v)} 
            />
            <p className="text-xs text-gray-500 mt-2">Upload your company logo. Leave empty to use default gradient circle.</p>
          </Field>
          <Field label="Logo Text">
            <Input value={local.logoText} onChange={(v) => set("logoText", v)} />
          </Field>
          <Field label="Logo Subtitle">
            <Input value={local.logoSubtext} onChange={(v) => set("logoSubtext", v)} />
          </Field>
          <Field label="Description" hint="Short company description shown in footer">
            <Textarea value={local.description} onChange={(v) => set("description", v)} rows={3} />
          </Field>
        </SectionCard>

        <SectionCard title="Contact Information">
          <Field label="Email">
            <Input type="email" value={local.email} onChange={(v) => set("email", v)} placeholder="info@tgindia.com" />
          </Field>
          <Field label="Phone">
            <Input value={local.phone} onChange={(v) => set("phone", v)} placeholder="+91 98765 43210" />
          </Field>
          <Field label="Address">
            <Textarea value={local.address} onChange={(v) => set("address", v)} rows={2} placeholder="Bangalore, Karnataka..." />
          </Field>
        </SectionCard>

        <SectionCard title="Social Media Links">
          <Field label="Facebook URL">
            <Input value={local.socialLinks?.facebook} onChange={(v) => setSocial("facebook", v)} placeholder="https://facebook.com/..." />
          </Field>
          <Field label="Twitter URL">
            <Input value={local.socialLinks?.twitter} onChange={(v) => setSocial("twitter", v)} placeholder="https://twitter.com/..." />
          </Field>
          <Field label="Instagram URL">
            <Input value={local.socialLinks?.instagram} onChange={(v) => setSocial("instagram", v)} placeholder="https://instagram.com/..." />
          </Field>
        </SectionCard>

        <SectionCard title="Sitemap Links">
          {local.sitemapLinks?.map((link, i) => (
            <ItemCard key={i} title={`Link ${i + 1}`} onRemove={() => removeSitemapLink(i)}>
              <Field label="Link Text">
                <Input value={link} onChange={(v) => updateSitemapLink(i, v)} />
              </Field>
            </ItemCard>
          ))}
          <AddButton onClick={addSitemapLink} label="Add Sitemap Link" />
        </SectionCard>

      </div>
    </div>
  );
}
