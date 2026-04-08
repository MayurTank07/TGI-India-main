import { useState } from "react";
import { useContent } from "../../context/ContentContext";
import AdminHeader from "../components/AdminHeader";
import {
  Field, Input, Textarea, SectionCard, ItemCard, AddButton, ImageUpload, IconSelect
} from "../components/FieldGroup";

const SERVICE_KEYS = [
  { key: "it", label: "IT Services" },
  { key: "bpo", label: "BPO Services" },
  { key: "nonit", label: "Non-IT Services" },
  { key: "accounting", label: "Accounting" },
  { key: "healthcare", label: "Healthcare" },
  { key: "corporate", label: "Corporate Hiring" },
];

export default function ServicesEditor() {
  const { content, updateSection } = useContent();
  const [local, setLocal] = useState(structuredClone(content.services));
  const [saved, setSaved] = useState(false);
  const [serviceKey, setServiceKey] = useState("it");
  const [sectionTab, setSectionTab] = useState("hero");

  function save() {
    updateSection("services", local);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  }

  const svc = local[serviceKey];

  function setSvcField(section, key, val) {
    setLocal({ ...local, [serviceKey]: { ...svc, [section]: { ...svc[section], [key]: val } } });
  }

  function updateOfferingItem(i, key, val) {
    const items = [...svc.offerings.items];
    items[i] = { ...items[i], [key]: val };
    setLocal({ ...local, [serviceKey]: { ...svc, offerings: { ...svc.offerings, items } } });
  }
  function addOfferingItem() {
    const items = [...svc.offerings.items, { title: "New Offering", desc: "", img: "" }];
    setLocal({ ...local, [serviceKey]: { ...svc, offerings: { ...svc.offerings, items } } });
  }
  function removeOfferingItem(i) {
    const items = svc.offerings.items.filter((_, idx) => idx !== i);
    setLocal({ ...local, [serviceKey]: { ...svc, offerings: { ...svc.offerings, items } } });
  }

  function updateBenefit(i, val) {
    const points = [...svc.benefits.points];
    points[i] = val;
    setLocal({ ...local, [serviceKey]: { ...svc, benefits: { ...svc.benefits, points } } });
  }
  function addBenefit() {
    const points = [...svc.benefits.points, "New benefit point"];
    setLocal({ ...local, [serviceKey]: { ...svc, benefits: { ...svc.benefits, points } } });
  }
  function removeBenefit(i) {
    const points = svc.benefits.points.filter((_, idx) => idx !== i);
    setLocal({ ...local, [serviceKey]: { ...svc, benefits: { ...svc.benefits, points } } });
  }

  function updateProcessItem(i, key, val) {
    const items = [...(svc.process?.items || [])];
    items[i] = { ...items[i], [key]: val };
    setLocal({ ...local, [serviceKey]: { ...svc, process: { ...svc.process, items } } });
  }
  function addProcessItem() {
    const items = [...(svc.process?.items || []), { icon: "Star", title: "New Step", text: "" }];
    setLocal({ ...local, [serviceKey]: { ...svc, process: { ...(svc.process || {}), items } } });
  }
  function removeProcessItem(i) {
    const items = (svc.process?.items || []).filter((_, idx) => idx !== i);
    setLocal({ ...local, [serviceKey]: { ...svc, process: { ...svc.process, items } } });
  }

  const sectionTabs = [
    { id: "hero", label: "Hero" },
    { id: "offerings", label: "Offerings" },
    { id: "benefits", label: "Benefits" },
    ...(svc.process ? [{ id: "process", label: "Process" }] : []),
  ];

  return (
    <div>
      <AdminHeader title="Services Editor" subtitle="Edit all service page content" onSave={save} saved={saved} />

      {/* Service selector */}
      <div className="px-8 pt-6 bg-gray-50 border-b border-gray-200">
        <p className="text-xs font-bold text-gray-500 uppercase mb-3">Select Service</p>
        <div className="flex gap-2 flex-wrap pb-4">
          {SERVICE_KEYS.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => { setServiceKey(key); setSectionTab("hero"); }}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition ${
                serviceKey === key
                  ? "bg-[#7A1CC2] text-white"
                  : "bg-white border border-gray-300 text-gray-600 hover:border-purple-400"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Section tabs */}
        <div className="flex gap-1">
          {sectionTabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setSectionTab(t.id)}
              className={`px-4 py-2 text-sm font-medium rounded-t-lg transition ${
                sectionTab === t.id
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

        {/* HERO */}
        {sectionTab === "hero" && (
          <SectionCard title={`${SERVICE_KEYS.find(s => s.key === serviceKey)?.label} — Hero Section`}>
            <Field label="Badge Text">
              <Input value={svc.hero.badge} onChange={(v) => setSvcField("hero", "badge", v)} />
            </Field>
            <Field label="Heading">
              <Textarea value={svc.hero.heading} onChange={(v) => setSvcField("hero", "heading", v)} rows={3} />
            </Field>
            <Field label="Description">
              <Textarea value={svc.hero.description} onChange={(v) => setSvcField("hero", "description", v)} rows={3} />
            </Field>
            <div className="grid grid-cols-2 gap-4">
              <Field label="Primary CTA">
                <Input value={svc.hero.primaryCTA} onChange={(v) => setSvcField("hero", "primaryCTA", v)} />
              </Field>
              <Field label="Secondary CTA">
                <Input value={svc.hero.secondaryCTA} onChange={(v) => setSvcField("hero", "secondaryCTA", v)} />
              </Field>
            </div>
            <Field label="Hero Image">
              <ImageUpload value={svc.hero.image} onChange={(v) => setSvcField("hero", "image", v)} />
            </Field>
          </SectionCard>
        )}

        {/* OFFERINGS */}
        {sectionTab === "offerings" && (
          <SectionCard title="Service Offerings / What We Offer">
            <Field label="Section Heading">
              <Input value={svc.offerings.heading} onChange={(v) => setSvcField("offerings", "heading", v)} />
            </Field>
            <Field label="Section Description">
              <Textarea value={svc.offerings.description} onChange={(v) => setSvcField("offerings", "description", v)} rows={3} />
            </Field>

            <div className="mt-4 border-t border-gray-100 pt-4">
              {svc.offerings.items.map((item, i) => (
                <ItemCard key={i} title={`Offering ${i + 1}: ${item.title}`} onRemove={() => removeOfferingItem(i)}>
                  <Field label="Title">
                    <Input value={item.title} onChange={(v) => updateOfferingItem(i, "title", v)} />
                  </Field>
                  <Field label="Description">
                    <Textarea value={item.desc} onChange={(v) => updateOfferingItem(i, "desc", v)} rows={2} />
                  </Field>
                  <Field label="Image">
                    <ImageUpload value={item.img} onChange={(v) => updateOfferingItem(i, "img", v)} />
                  </Field>
                </ItemCard>
              ))}
              <AddButton onClick={addOfferingItem} label="Add Offering" />
            </div>
          </SectionCard>
        )}

        {/* BENEFITS */}
        {sectionTab === "benefits" && (
          <SectionCard title="Why Choose Us — Benefits">
            <Field label="Section Heading">
              <Input value={svc.benefits.heading} onChange={(v) => setSvcField("benefits", "heading", v)} />
            </Field>

            <div className="mt-4 border-t border-gray-100 pt-4">
              <p className="text-xs font-bold text-gray-500 uppercase mb-4">Benefit Points</p>
              {svc.benefits.points.map((point, i) => (
                <div key={i} className="flex gap-2 mb-2 items-center">
                  <div className="flex-1">
                    <Input value={point} onChange={(v) => updateBenefit(i, v)} />
                  </div>
                  <button
                    onClick={() => removeBenefit(i)}
                    className="text-red-400 hover:text-red-600 text-sm px-2 py-1.5 bg-red-50 rounded-lg"
                  >✕</button>
                </div>
              ))}
              <AddButton onClick={addBenefit} label="Add Benefit Point" />
            </div>
          </SectionCard>
        )}

        {/* PROCESS (IT & Corporate only) */}
        {sectionTab === "process" && svc.process && (
          <SectionCard title="Hiring Process Steps">
            <Field label="Section Heading">
              <Input value={svc.process.heading} onChange={(v) => setSvcField("process", "heading", v)} />
            </Field>

            <div className="mt-4 border-t border-gray-100 pt-4">
              {svc.process.items.map((step, i) => (
                <ItemCard key={i} title={`Step ${i + 1}: ${step.title}`} onRemove={() => removeProcessItem(i)}>
                  <Field label="Icon">
                    <IconSelect value={step.icon} onChange={(v) => updateProcessItem(i, "icon", v)} />
                  </Field>
                  <Field label="Title">
                    <Input value={step.title} onChange={(v) => updateProcessItem(i, "title", v)} />
                  </Field>
                  <Field label="Description">
                    <Textarea value={step.text} onChange={(v) => updateProcessItem(i, "text", v)} rows={2} />
                  </Field>
                </ItemCard>
              ))}
              <AddButton onClick={addProcessItem} label="Add Process Step" />
            </div>
          </SectionCard>
        )}

      </div>
    </div>
  );
}
