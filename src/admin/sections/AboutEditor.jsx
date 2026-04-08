import { useState } from "react";
import { useContent } from "../../context/ContentContext";
import AdminHeader from "../components/AdminHeader";
import {
  Field, Input, Textarea, SectionCard, ItemCard, AddButton, ImageUpload, IconSelect
} from "../components/FieldGroup";

export default function AboutEditor() {
  const { content, updateSection } = useContent();
  const [local, setLocal] = useState(structuredClone(content.about));
  const [saved, setSaved] = useState(false);
  const [tab, setTab] = useState("team");

  function save() {
    updateSection("about", local);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  }

  // ---- Team ----
  function setTeamMeta(key, val) { setLocal({ ...local, team: { ...local.team, [key]: val } }); }
  function updateMember(i, key, val) {
    const members = [...local.team.members];
    members[i] = { ...members[i], [key]: val };
    setLocal({ ...local, team: { ...local.team, members } });
  }
  function addMember() {
    setLocal({ ...local, team: { ...local.team, members: [...local.team.members, { name: "New Member", role: "Role", img: "", linkedin: "#", twitter: "#" }] } });
  }
  function removeMember(i) {
    setLocal({ ...local, team: { ...local.team, members: local.team.members.filter((_, idx) => idx !== i) } });
  }

  // ---- Values ----
  function setValuesMeta(key, val) { setLocal({ ...local, values: { ...local.values, [key]: val } }); }
  function updateValue(i, key, val) {
    const items = [...local.values.items];
    items[i] = { ...items[i], [key]: val };
    setLocal({ ...local, values: { ...local.values, items } });
  }
  function addValue() {
    setLocal({ ...local, values: { ...local.values, items: [...local.values.items, { icon: "Star", title: "New Value", text: "" }] } });
  }
  function removeValue(i) {
    setLocal({ ...local, values: { ...local.values, items: local.values.items.filter((_, idx) => idx !== i) } });
  }

  // ---- Journey ----
  function setJourney(key, val) { setLocal({ ...local, journey: { ...local.journey, [key]: val } }); }
  function updateJourneyStat(i, key, val) {
    const stats = [...local.journey.stats];
    stats[i] = { ...stats[i], [key]: val };
    setLocal({ ...local, journey: { ...local.journey, stats } });
  }
  function addJourneyStat() {
    setLocal({ ...local, journey: { ...local.journey, stats: [...local.journey.stats, { number: "0+", label: "New Stat" }] } });
  }
  function removeJourneyStat(i) {
    setLocal({ ...local, journey: { ...local.journey, stats: local.journey.stats.filter((_, idx) => idx !== i) } });
  }

  // ---- Who We Are ----
  function setWhoWeAre(key, val) { setLocal({ ...local, whoWeAre: { ...local.whoWeAre, [key]: val } }); }
  function updateWhoWeAreImage(i, val) {
    const images = [...local.whoWeAre.images];
    images[i] = val;
    setLocal({ ...local, whoWeAre: { ...local.whoWeAre, images } });
  }

  // ---- Hero ----
  function setHero(key, val) { setLocal({ ...local, hero: { ...local.hero, [key]: val } }); }

  const tabs = [
    { id: "team", label: "Team (Visionaries)" },
    { id: "values", label: "Values" },
    { id: "journey", label: "Journey" },
    { id: "whoWeAre", label: "Who We Are" },
    { id: "hero", label: "Hero Section" },
  ];

  return (
    <div>
      <AdminHeader title="About Page Editor" subtitle="Edit about page content" onSave={save} saved={saved} />

      {/* Tabs */}
      <div className="px-8 pt-6 border-b border-gray-200 bg-gray-50">
        <div className="flex gap-1 flex-wrap">
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

        {/* TEAM TAB */}
        {tab === "team" && (
          <SectionCard title="Meet the Visionaries — Team Section">
            <Field label="Section Heading">
              <Input value={local.team.heading} onChange={(v) => setTeamMeta("heading", v)} />
            </Field>
            <Field label="Section Subheading">
              <Textarea value={local.team.subheading} onChange={(v) => setTeamMeta("subheading", v)} rows={2} />
            </Field>

            <div className="mt-4 border-t border-gray-100 pt-4">
              <p className="text-xs font-bold text-gray-500 uppercase mb-4">Team Members</p>
              {local.team.members.map((member, i) => (
                <ItemCard key={i} title={`Member ${i + 1}: ${member.name}`} onRemove={() => removeMember(i)}>
                  <div className="grid grid-cols-2 gap-4">
                    <Field label="Full Name">
                      <Input value={member.name} onChange={(v) => updateMember(i, "name", v)} placeholder="John Doe" />
                    </Field>
                    <Field label="Role / Title">
                      <Input value={member.role} onChange={(v) => updateMember(i, "role", v)} placeholder="CEO & Founder" />
                    </Field>
                  </div>
                  <Field label="Photo">
                    <ImageUpload value={member.img} onChange={(v) => updateMember(i, "img", v)} />
                  </Field>
                  <div className="grid grid-cols-2 gap-4">
                    <Field label="LinkedIn URL">
                      <Input value={member.linkedin} onChange={(v) => updateMember(i, "linkedin", v)} placeholder="#" />
                    </Field>
                    <Field label="Twitter URL">
                      <Input value={member.twitter} onChange={(v) => updateMember(i, "twitter", v)} placeholder="#" />
                    </Field>
                  </div>
                </ItemCard>
              ))}
              <AddButton onClick={addMember} label="Add Team Member" />
            </div>
          </SectionCard>
        )}

        {/* VALUES TAB */}
        {tab === "values" && (
          <SectionCard title="The Values that Guide Us">
            <Field label="Section Heading">
              <Input value={local.values.heading} onChange={(v) => setValuesMeta("heading", v)} />
            </Field>
            <Field label="Section Subheading">
              <Textarea value={local.values.subheading} onChange={(v) => setValuesMeta("subheading", v)} rows={2} />
            </Field>

            <div className="mt-4 border-t border-gray-100 pt-4">
              <p className="text-xs font-bold text-gray-500 uppercase mb-4">Value Cards</p>
              {local.values.items.map((item, i) => (
                <ItemCard key={i} title={`Value ${i + 1}: ${item.title}`} onRemove={() => removeValue(i)}>
                  <Field label="Icon">
                    <IconSelect value={item.icon} onChange={(v) => updateValue(i, "icon", v)} />
                  </Field>
                  <Field label="Title">
                    <Input value={item.title} onChange={(v) => updateValue(i, "title", v)} />
                  </Field>
                  <Field label="Description">
                    <Textarea value={item.text} onChange={(v) => updateValue(i, "text", v)} rows={3} />
                  </Field>
                </ItemCard>
              ))}
              <AddButton onClick={addValue} label="Add Value" />
            </div>
          </SectionCard>
        )}

        {/* JOURNEY TAB */}
        {tab === "journey" && (
          <SectionCard title="Our Journey Section">
            <Field label="Section Heading">
              <Textarea value={local.journey.heading} onChange={(v) => setJourney("heading", v)} rows={2} />
            </Field>
            <Field label="Paragraph 1">
              <Textarea value={local.journey.paragraph1} onChange={(v) => setJourney("paragraph1", v)} rows={4} />
            </Field>
            <Field label="Paragraph 2">
              <Textarea value={local.journey.paragraph2} onChange={(v) => setJourney("paragraph2", v)} rows={4} />
            </Field>
            <Field label="Journey Image">
              <ImageUpload value={local.journey.image} onChange={(v) => setJourney("image", v)} />
            </Field>

            <div className="mt-4 border-t border-gray-100 pt-4">
              <p className="text-xs font-bold text-gray-500 uppercase mb-4">Journey Stats</p>
              {local.journey.stats.map((stat, i) => (
                <ItemCard key={i} title={`Stat ${i + 1}`} onRemove={() => removeJourneyStat(i)}>
                  <div className="grid grid-cols-2 gap-4">
                    <Field label="Number">
                      <Input value={stat.number} onChange={(v) => updateJourneyStat(i, "number", v)} placeholder="10+" />
                    </Field>
                    <Field label="Label">
                      <Input value={stat.label} onChange={(v) => updateJourneyStat(i, "label", v)} placeholder="Years of Excellence" />
                    </Field>
                  </div>
                </ItemCard>
              ))}
              <AddButton onClick={addJourneyStat} label="Add Stat" />
            </div>
          </SectionCard>
        )}

        {/* WHO WE ARE TAB */}
        {tab === "whoWeAre" && (
          <SectionCard title="Who We Are Section">
            <Field label="Heading">
              <Input value={local.whoWeAre.heading} onChange={(v) => setWhoWeAre("heading", v)} />
            </Field>
            <Field label="Paragraph 1">
              <Textarea value={local.whoWeAre.paragraph1} onChange={(v) => setWhoWeAre("paragraph1", v)} rows={4} />
            </Field>
            <Field label="Paragraph 2">
              <Textarea value={local.whoWeAre.paragraph2} onChange={(v) => setWhoWeAre("paragraph2", v)} rows={4} />
            </Field>

            <div className="mt-4 border-t border-gray-100 pt-4">
              <p className="text-xs font-bold text-gray-500 uppercase mb-4">Image Grid (4 images)</p>
              {local.whoWeAre.images.map((img, i) => (
                <Field key={i} label={`Image ${i + 1}`}>
                  <ImageUpload value={img} onChange={(v) => updateWhoWeAreImage(i, v)} />
                </Field>
              ))}
            </div>
          </SectionCard>
        )}

        {/* HERO TAB */}
        {tab === "hero" && (
          <SectionCard title="About Page Hero Section">
            <Field label="Badge Text">
              <Input value={local.hero.badge} onChange={(v) => setHero("badge", v)} />
            </Field>
            <Field label="Heading">
              <Input value={local.hero.heading} onChange={(v) => setHero("heading", v)} />
            </Field>
            <Field label="Description">
              <Textarea value={local.hero.description} onChange={(v) => setHero("description", v)} rows={3} />
            </Field>
            <div className="grid grid-cols-2 gap-4">
              <Field label="Primary CTA">
                <Input value={local.hero.primaryCTA} onChange={(v) => setHero("primaryCTA", v)} />
              </Field>
              <Field label="Secondary CTA">
                <Input value={local.hero.secondaryCTA} onChange={(v) => setHero("secondaryCTA", v)} />
              </Field>
            </div>
            <Field label="Hero Image">
              <ImageUpload value={local.hero.image} onChange={(v) => setHero("image", v)} />
            </Field>
          </SectionCard>
        )}

      </div>
    </div>
  );
}
