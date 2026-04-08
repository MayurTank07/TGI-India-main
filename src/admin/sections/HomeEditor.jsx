import { useState } from "react";
import { useContent } from "../../context/ContentContext";
import AdminHeader from "../components/AdminHeader";
import {
  Field, Input, Textarea, SectionCard, ItemCard, AddButton, ImageUpload, IconSelect
} from "../components/FieldGroup";

export default function HomeEditor() {
  const { content, updateSection } = useContent();
  const [local, setLocal] = useState(structuredClone(content.home));
  const [saved, setSaved] = useState(false);
  const [tab, setTab] = useState("hero");

  function save() {
    updateSection("home", local);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  }

  // --- Hero ---
  function setHero(key, val) { setLocal({ ...local, hero: { ...local.hero, [key]: val } }); }

  // --- Services ---
  function setServicesHeading(key, val) { setLocal({ ...local, services: { ...local.services, [key]: val } }); }
  function updateServiceItem(i, key, val) {
    const items = [...local.services.items];
    items[i] = { ...items[i], [key]: val };
    setLocal({ ...local, services: { ...local.services, items } });
  }
  function addServiceItem() {
    const items = [...local.services.items, { title: "New Service", description: "", image: "" }];
    setLocal({ ...local, services: { ...local.services, items } });
  }
  function removeServiceItem(i) {
    const items = local.services.items.filter((_, idx) => idx !== i);
    setLocal({ ...local, services: { ...local.services, items } });
  }

  // --- Approach ---
  function setApproachHeading(val) { setLocal({ ...local, approach: { ...local.approach, heading: val } }); }
  function updateApproachItem(i, key, val) {
    const items = [...local.approach.items];
    items[i] = { ...items[i], [key]: val };
    setLocal({ ...local, approach: { ...local.approach, items } });
  }
  function addApproachItem() {
    const items = [...local.approach.items, { icon: "Star", title: "New Step", description: "" }];
    setLocal({ ...local, approach: { ...local.approach, items } });
  }
  function removeApproachItem(i) {
    const items = local.approach.items.filter((_, idx) => idx !== i);
    setLocal({ ...local, approach: { ...local.approach, items } });
  }

  // --- Stats ---
  function setStats(key, val) { setLocal({ ...local, stats: { ...local.stats, [key]: val } }); }
  function updateStatItem(i, key, val) {
    const items = [...local.stats.items];
    items[i] = { ...items[i], [key]: val };
    setLocal({ ...local, stats: { ...local.stats, items } });
  }
  function addStatItem() {
    const items = [...local.stats.items, { number: "0+", label: "New Stat" }];
    setLocal({ ...local, stats: { ...local.stats, items } });
  }
  function removeStatItem(i) {
    const items = local.stats.items.filter((_, idx) => idx !== i);
    setLocal({ ...local, stats: { ...local.stats, items } });
  }

  // --- Contact Form ---
  function setContactForm(key, val) { setLocal({ ...local, contactForm: { ...local.contactForm, [key]: val } }); }
  function updateListItem(section, key, i, val) {
    const arr = [...local.contactForm[key]];
    arr[i] = val;
    setLocal({ ...local, contactForm: { ...local.contactForm, [key]: arr } });
  }
  function addListItem(key, def) {
    setLocal({ ...local, contactForm: { ...local.contactForm, [key]: [...local.contactForm[key], def] } });
  }
  function removeListItem(key, i) {
    setLocal({ ...local, contactForm: { ...local.contactForm, [key]: local.contactForm[key].filter((_, idx) => idx !== i) } });
  }

  // --- WhyTrust ---
  function setWhyTrust(key, val) { setLocal({ ...local, whyTrust: { ...local.whyTrust, [key]: val } }); }
  function updateWhyTrustPoint(i, val) {
    const points = [...local.whyTrust.points];
    points[i] = val;
    setLocal({ ...local, whyTrust: { ...local.whyTrust, points } });
  }
  function addWhyTrustPoint() {
    setLocal({ ...local, whyTrust: { ...local.whyTrust, points: [...local.whyTrust.points, "New trust point"] } });
  }
  function removeWhyTrustPoint(i) {
    setLocal({ ...local, whyTrust: { ...local.whyTrust, points: local.whyTrust.points.filter((_, idx) => idx !== i) } });
  }
  function updateWhyTrustImage(i, val) {
    const images = [...local.whyTrust.images];
    images[i] = val;
    setLocal({ ...local, whyTrust: { ...local.whyTrust, images } });
  }

  const tabs = [
    { id: "hero", label: "Hero" },
    { id: "services", label: "Services" },
    { id: "approach", label: "Approach" },
    { id: "whyTrust", label: "Why Trust" },
    { id: "stats", label: "Stats" },
    { id: "contactForm", label: "Contact Form" },
  ];

  return (
    <div>
      <AdminHeader title="Home Page Editor" subtitle="Edit home page sections" onSave={save} saved={saved} />

      {/* Tabs */}
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

        {/* HERO TAB */}
        {tab === "hero" && (
          <>
            <SectionCard title="Hero Section">
              <Field label="Badge Text">
                <Input value={local.hero.badge} onChange={(v) => setHero("badge", v)} />
              </Field>
              <Field label="Main Title" hint="Use \n for line breaks">
                <Textarea value={local.hero.title} onChange={(v) => setHero("title", v)} rows={4} />
              </Field>
              <Field label="Description">
                <Textarea value={local.hero.description} onChange={(v) => setHero("description", v)} rows={3} />
              </Field>
              <div className="grid grid-cols-2 gap-4">
                <Field label="Primary CTA Button">
                  <Input value={local.hero.primaryCTA} onChange={(v) => setHero("primaryCTA", v)} />
                </Field>
                <Field label="Secondary CTA Button">
                  <Input value={local.hero.secondaryCTA} onChange={(v) => setHero("secondaryCTA", v)} />
                </Field>
              </div>
              <Field label="Hero Image">
                <ImageUpload value={local.hero.image} onChange={(v) => setHero("image", v)} />
              </Field>
              <div className="grid grid-cols-2 gap-4">
                <Field label="Star Rating">
                  <Input value={local.hero.rating} onChange={(v) => setHero("rating", v)} placeholder="4.5" />
                </Field>
                <Field label="Rating Label">
                  <Input value={local.hero.ratingLabel} onChange={(v) => setHero("ratingLabel", v)} placeholder="review rating" />
                </Field>
              </div>
            </SectionCard>
          </>
        )}

        {/* SERVICES TAB */}
        {tab === "services" && (
          <SectionCard title="Services Section">
            <Field label="Heading">
              <Input value={local.services.heading} onChange={(v) => setServicesHeading("heading", v)} />
            </Field>
            <Field label="Heading Accent (purple text)">
              <Input value={local.services.headingAccent} onChange={(v) => setServicesHeading("headingAccent", v)} />
            </Field>

            <div className="mt-4 border-t border-gray-100 pt-4">
              <p className="text-xs font-bold text-gray-500 uppercase mb-4">Service Cards</p>
              {local.services.items.map((item, i) => (
                <ItemCard key={i} title={`Card ${i + 1}`} onRemove={() => removeServiceItem(i)}>
                  <Field label="Title">
                    <Input value={item.title} onChange={(v) => updateServiceItem(i, "title", v)} />
                  </Field>
                  <Field label="Description">
                    <Textarea value={item.description} onChange={(v) => updateServiceItem(i, "description", v)} rows={2} />
                  </Field>
                  <Field label="Image">
                    <ImageUpload value={item.image} onChange={(v) => updateServiceItem(i, "image", v)} />
                  </Field>
                </ItemCard>
              ))}
              <AddButton onClick={addServiceItem} label="Add Service Card" />
            </div>
          </SectionCard>
        )}

        {/* APPROACH TAB */}
        {tab === "approach" && (
          <SectionCard title="Approach Section">
            <Field label="Heading" hint="Use \n for line breaks">
              <Textarea value={local.approach.heading} onChange={setApproachHeading} rows={2} />
            </Field>

            <div className="mt-4 border-t border-gray-100 pt-4">
              <p className="text-xs font-bold text-gray-500 uppercase mb-4">Approach Steps</p>
              {local.approach.items.map((item, i) => (
                <ItemCard key={i} title={`Step ${i + 1}`} onRemove={() => removeApproachItem(i)}>
                  <Field label="Icon">
                    <IconSelect value={item.icon} onChange={(v) => updateApproachItem(i, "icon", v)} />
                  </Field>
                  <Field label="Title">
                    <Input value={item.title} onChange={(v) => updateApproachItem(i, "title", v)} />
                  </Field>
                  <Field label="Description">
                    <Textarea value={item.description} onChange={(v) => updateApproachItem(i, "description", v)} rows={2} />
                  </Field>
                </ItemCard>
              ))}
              <AddButton onClick={addApproachItem} label="Add Approach Step" />
            </div>
          </SectionCard>
        )}

        {/* WHY TRUST TAB */}
        {tab === "whyTrust" && (
          <SectionCard title="Why Trust Us Section">
            <Field label="Section Heading">
              <Textarea value={local.whyTrust?.heading} onChange={(v) => setWhyTrust("heading", v)} rows={2} />
            </Field>

            <div className="mt-4 border-t border-gray-100 pt-4">
              <p className="text-xs font-bold text-gray-500 uppercase mb-4">Trust Points</p>
              {local.whyTrust?.points?.map((point, i) => (
                <div key={i} className="flex gap-2 mb-2 items-center">
                  <div className="flex-1">
                    <Input value={point} onChange={(v) => updateWhyTrustPoint(i, v)} />
                  </div>
                  <button onClick={() => removeWhyTrustPoint(i)} className="text-red-400 text-sm px-2 py-1.5 bg-red-50 rounded-lg">✕</button>
                </div>
              ))}
              <AddButton onClick={addWhyTrustPoint} label="Add Trust Point" />
            </div>

            <div className="mt-4 border-t border-gray-100 pt-4">
              <p className="text-xs font-bold text-gray-500 uppercase mb-4">Image Grid (4 images)</p>
              {local.whyTrust?.images?.map((img, i) => (
                <Field key={i} label={`Image ${i + 1}`}>
                  <ImageUpload value={img} onChange={(v) => updateWhyTrustImage(i, v)} />
                </Field>
              ))}
            </div>
          </SectionCard>
        )}

        {/* STATS TAB */}
        {tab === "stats" && (
          <SectionCard title="Stats Section">
            <Field label="Section Heading">
              <Textarea value={local.stats.heading} onChange={(v) => setStats("heading", v)} rows={2} />
            </Field>
            <Field label="Quote Prefix Text">
              <Input value={local.stats.quotePrefix} onChange={(v) => setStats("quotePrefix", v)} />
            </Field>
            <Field label="Quote Text">
              <Textarea value={local.stats.quote} onChange={(v) => setStats("quote", v)} rows={2} />
            </Field>

            <div className="mt-4 border-t border-gray-100 pt-4">
              <p className="text-xs font-bold text-gray-500 uppercase mb-4">Stat Cards</p>
              {local.stats.items.map((item, i) => (
                <ItemCard key={i} title={`Stat ${i + 1}`} onRemove={() => removeStatItem(i)}>
                  <div className="grid grid-cols-2 gap-4">
                    <Field label="Number">
                      <Input value={item.number} onChange={(v) => updateStatItem(i, "number", v)} placeholder="950+" />
                    </Field>
                    <Field label="Label">
                      <Input value={item.label} onChange={(v) => updateStatItem(i, "label", v)} placeholder="Clients" />
                    </Field>
                  </div>
                </ItemCard>
              ))}
              <AddButton onClick={addStatItem} label="Add Stat" />
            </div>
          </SectionCard>
        )}

        {/* CONTACT FORM TAB */}
        {tab === "contactForm" && (
          <SectionCard title="Contact Form Section">
            <Field label="Heading" hint="Use \n for line breaks">
              <Textarea value={local.contactForm.heading} onChange={(v) => setContactForm("heading", v)} rows={2} />
            </Field>
            <Field label="Subheading">
              <Textarea value={local.contactForm.subheading} onChange={(v) => setContactForm("subheading", v)} rows={2} />
            </Field>

            <div className="mt-4 border-t border-gray-100 pt-4">
              <p className="text-xs font-bold text-gray-500 uppercase mb-4">Category Options</p>
              {local.contactForm.categoryOptions?.map((opt, i) => (
                <div key={i} className="flex gap-2 mb-2">
                  <Input value={opt} onChange={(v) => updateListItem("contactForm", "categoryOptions", i, v)} />
                  <button onClick={() => removeListItem("categoryOptions", i)} className="text-red-400 text-sm px-2">✕</button>
                </div>
              ))}
              <AddButton onClick={() => addListItem("categoryOptions", "New Option")} label="Add Category Option" />
            </div>

            <div className="mt-4 border-t border-gray-100 pt-4">
              <p className="text-xs font-bold text-gray-500 uppercase mb-4">City Options</p>
              {local.contactForm.cityOptions?.map((opt, i) => (
                <div key={i} className="flex gap-2 mb-2">
                  <Input value={opt} onChange={(v) => updateListItem("contactForm", "cityOptions", i, v)} />
                  <button onClick={() => removeListItem("cityOptions", i)} className="text-red-400 text-sm px-2">✕</button>
                </div>
              ))}
              <AddButton onClick={() => addListItem("cityOptions", "New City")} label="Add City" />
            </div>
          </SectionCard>
        )}

      </div>
    </div>
  );
}
