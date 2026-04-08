import { useState } from "react";
import { useContent } from "../../context/ContentContext";
import { submissionAPI } from "../../services/api";

export default function ContactSection() {
  const { content } = useContent();
  const { subheading, categoryOptions, cityOptions } = content.contact;

  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", category: "", city: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    
    try {
      await submissionAPI.create({ ...form, source: "Contact Us Page" });
      setSubmitted(true);
      setForm({ firstName: "", lastName: "", email: "", phone: "", category: "", city: "", message: "" });
      setTimeout(() => setSubmitted(false), 4000);
    } catch (err) {
      console.error('Error submitting form:', err);
      setSubmitted(true);
      setForm({ firstName: "", lastName: "", email: "", phone: "", category: "", city: "", message: "" });
      setTimeout(() => setSubmitted(false), 4000);
    }
  }

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-28 px-5 md:px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-12 lg:gap-20 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-6">
          <span className="inline-block bg-purple-50 text-purple-700 border border-purple-200 px-5 py-2 rounded-full text-sm font-semibold">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Let's</span> write your
            <br />success story
            <br />together
          </h2>
          <p className="text-gray-600 text-base md:text-xl leading-relaxed">{subheading}</p>
        </div>

        {/* CONTACT FORM */}
        <div className="flex justify-center md:justify-end mt-8 md:mt-0">
          <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-purple-700 p-6 md:p-10 rounded-2xl md:rounded-3xl w-full max-w-md text-white shadow-2xl">
            <h3 className="text-xl md:text-3xl font-bold mb-2 text-center">Contact</h3>
            <p className="text-xs md:text-base text-center opacity-90 mb-6 md:mb-8">
              Got Questions or ready to start?
              <br />We're here with you
            </p>

            {submitted && (
              <div className="mb-6 bg-green-500/20 border-2 border-green-400/50 text-green-100 px-4 py-3 rounded-xl text-sm text-center font-medium">
                ✓ Message submitted successfully!
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <input name="firstName" value={form.firstName} onChange={handleChange} required type="text" placeholder="First Name*" className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg md:rounded-xl bg-white/95 text-gray-900 outline-none focus:ring-2 focus:ring-white/50 transition-all placeholder:text-gray-400 text-sm md:text-base" />
                <input name="lastName" value={form.lastName} onChange={handleChange} required type="text" placeholder="Last Name*" className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg md:rounded-xl bg-white/95 text-gray-900 outline-none focus:ring-2 focus:ring-white/50 transition-all placeholder:text-gray-400 text-sm md:text-base" />
              </div>
              <input name="email" value={form.email} onChange={handleChange} required type="email" placeholder="Email*" className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg md:rounded-xl bg-white/95 text-gray-900 outline-none focus:ring-2 focus:ring-white/50 transition-all placeholder:text-gray-400 text-sm md:text-base" />
              <input name="phone" value={form.phone} onChange={handleChange} type="text" placeholder="Phone no." className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg md:rounded-xl bg-white/95 text-gray-900 outline-none focus:ring-2 focus:ring-white/50 transition-all placeholder:text-gray-400 text-sm md:text-base" />
              <select name="category" value={form.category} onChange={handleChange} className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg md:rounded-xl bg-white/95 text-gray-900 outline-none focus:ring-2 focus:ring-white/50 transition-all text-sm md:text-base">
                <option value="">Select Category</option>
                {categoryOptions?.map((opt, i) => <option key={i}>{opt}</option>)}
              </select>
              <select name="city" value={form.city} onChange={handleChange} className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg md:rounded-xl bg-white/95 text-gray-900 outline-none focus:ring-2 focus:ring-white/50 transition-all text-sm md:text-base">
                <option value="">Select City</option>
                {cityOptions?.map((city, i) => <option key={i}>{city}</option>)}
              </select>
              <textarea name="message" value={form.message} onChange={handleChange} placeholder="Write your message here" rows="3" className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg md:rounded-xl bg-white/95 text-gray-900 outline-none focus:ring-2 focus:ring-white/50 transition-all placeholder:text-gray-400 resize-none text-sm md:text-base" />
              <div className="flex justify-center pt-2 md:pt-4">
                <button type="submit" className="bg-white text-purple-700 px-8 md:px-10 py-3 md:py-3.5 rounded-full font-bold text-sm md:text-base hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
