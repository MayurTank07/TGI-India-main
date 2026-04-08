import { useState } from "react";
import { useContent } from "../../context/ContentContext";
import { submissionAPI } from "../../services/api";

export default function ContactSection() {
  const { content } = useContent();
  const { heading, subheading, categoryOptions, cityOptions } = content.home.contactForm;
  const headingLines = heading.split("\n");

  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", category: "", city: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    
    try {
      await submissionAPI.create({ ...form, source: "Home Page Contact Form" });
      setSubmitted(true);
      setForm({ firstName: "", lastName: "", email: "", phone: "", category: "", city: "", message: "" });
      setTimeout(() => setSubmitted(false), 4000);
    } catch (err) {
      console.error('Error submitting form:', err);
      alert('Failed to submit form. Please try again.');
    }
  }

  return (
    <section className="bg-gradient-to-br from-indigo-700 via-purple-700 to-purple-900 py-16 md:py-28 px-5 md:px-6 text-white">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
          {headingLines.map((line, i) => (
            <span key={i}>{line}{i < headingLines.length - 1 && <br />}</span>
          ))}
        </h2>

          {/* Subheading */}
          <p className="text-white/90 text-base md:text-xl max-w-2xl mx-auto">{subheading}</p>
        </div>

        {submitted && (
          <div className="mb-8 bg-green-500/20 border-2 border-green-400/50 text-green-100 px-6 py-4 rounded-2xl text-base font-medium text-center backdrop-blur-sm">
            ✓ Thank you! Your message has been submitted successfully.
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-md rounded-2xl md:rounded-3xl p-5 md:p-10 border border-white/20 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-4 md:gap-8">
            <div>
              <label className="block text-sm font-medium mb-3 text-white/90">First Name*</label>
              <input name="firstName" value={form.firstName} onChange={handleChange} required type="text" placeholder="John" className="w-full bg-white/95 text-gray-900 rounded-xl px-4 md:px-5 py-3 md:py-4 outline-none focus:ring-2 focus:ring-white/50 transition-all placeholder:text-gray-400 text-sm md:text-base" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-3 text-white/90">Last Name*</label>
              <input name="lastName" value={form.lastName} onChange={handleChange} required type="text" placeholder="Doe" className="w-full bg-white/95 text-gray-900 rounded-xl px-4 md:px-5 py-3 md:py-4 outline-none focus:ring-2 focus:ring-white/50 transition-all placeholder:text-gray-400 text-sm md:text-base" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-3 text-white/90">E-mail*</label>
              <input name="email" value={form.email} onChange={handleChange} required type="email" placeholder="john@example.com" className="w-full bg-white/95 text-gray-900 rounded-xl px-4 md:px-5 py-3 md:py-4 outline-none focus:ring-2 focus:ring-white/50 transition-all placeholder:text-gray-400 text-sm md:text-base" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-3 text-white/90">Phone*</label>
              <input name="phone" value={form.phone} onChange={handleChange} required type="text" placeholder="+91 9876543210" className="w-full bg-white/95 text-gray-900 rounded-xl px-4 md:px-5 py-3 md:py-4 outline-none focus:ring-2 focus:ring-white/50 transition-all placeholder:text-gray-400 text-sm md:text-base" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-3 text-white/90">Select Category</label>
              <select name="category" value={form.category} onChange={handleChange} className="w-full bg-white/95 text-gray-900 rounded-xl px-4 md:px-5 py-3 md:py-4 outline-none focus:ring-2 focus:ring-white/50 transition-all text-sm md:text-base">
                <option value="">-- Select Category --</option>
                {categoryOptions?.map((opt, i) => <option key={i}>{opt}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-3 text-white/90">Select City</label>
              <select name="city" value={form.city} onChange={handleChange} className="w-full bg-white/95 text-gray-900 rounded-xl px-4 md:px-5 py-3 md:py-4 outline-none focus:ring-2 focus:ring-white/50 transition-all text-sm md:text-base">
                <option value="">-- Select City --</option>
                {cityOptions?.map((city, i) => <option key={i}>{city}</option>)}
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-3 text-white/90">Write your Comment</label>
              <textarea name="message" value={form.message} onChange={handleChange} rows="4" placeholder="Tell us about your requirements..." className="w-full bg-white/95 text-gray-900 rounded-xl px-4 md:px-5 py-3 md:py-4 outline-none focus:ring-2 focus:ring-white/50 transition-all placeholder:text-gray-400 resize-none text-sm md:text-base" />
            </div>
          </div>
        </form>

        <div className="flex justify-center mt-8">
          <button onClick={handleSubmit} className="px-10 md:px-16 py-3.5 md:py-5 rounded-full bg-white text-purple-700 font-bold text-base md:text-lg hover:bg-gray-100 transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105">
            Submit Message
          </button>
        </div>

      </div>
    </section>
  );
}
