import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { useFashionStudio } from './FashionStudioContext';

export const Screen7Contact: React.FC = () => {
  const { themeVariant } = useFashionStudio();
  const isDark = themeVariant === 'atelier-dark';
  const brandName = isDark ? 'ATELIER' : 'NOVA';

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
    }
  };

  return (
    <div className={`space-y-12 pb-16 ${isDark ? 'bg-[#0E0F12] text-[#F3F1EC]' : 'bg-[#FFFFFF] text-[#191A1E]'}`}>
      <section className="px-4 sm:px-8 pt-10 max-w-6xl mx-auto space-y-8">
        <div className="space-y-2">
          <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#B27338]">
            Customer Support & Flagship
          </span>
          <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight">
            {isDark ? "Let's Talk." : 'Get In Touch'}
          </h1>
          <p className="text-xs sm:text-sm opacity-70">
            {isDark
              ? 'Questions about sizing, custom drops, or wholesale inquiries? Reach out directly.'
              : "We'd love to hear from you."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left: Contact Info & Form (7 cols) */}
          <div className="md:col-span-7 space-y-6">
            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div
                className={`p-4 border rounded-sm space-y-1 ${
                  isDark ? 'bg-[#13151A] border-[#22252F]' : 'bg-[#FAF8F5] border-[#E8E4DA]'
                }`}
              >
                <Mail className="w-4 h-4 text-[#B27338]" />
                <span className="opacity-60 block text-[10px] uppercase tracking-wider">Email</span>
                <span className="font-semibold block truncate">support@{brandName.toLowerCase()}.in</span>
              </div>

              <div
                className={`p-4 border rounded-sm space-y-1 ${
                  isDark ? 'bg-[#13151A] border-[#22252F]' : 'bg-[#FAF8F5] border-[#E8E4DA]'
                }`}
              >
                <Phone className="w-4 h-4 text-[#B27338]" />
                <span className="opacity-60 block text-[10px] uppercase tracking-wider">Phone</span>
                <span className="font-semibold block">+91 96765 43210</span>
              </div>

              <div
                className={`p-4 border rounded-sm space-y-1 ${
                  isDark ? 'bg-[#13151A] border-[#22252F]' : 'bg-[#FAF8F5] border-[#E8E4DA]'
                }`}
              >
                <MapPin className="w-4 h-4 text-[#B27338]" />
                <span className="opacity-60 block text-[10px] uppercase tracking-wider">Location</span>
                <span className="font-semibold block">Jaipur, Rajasthan</span>
              </div>
            </div>

            {/* Form */}
            <div
              className={`p-6 border rounded-sm space-y-4 ${
                isDark ? 'bg-[#13151A] border-[#22252F]' : 'bg-[#FAF8F5] border-[#E8E4DA]'
              }`}
            >
              {submitted ? (
                <div className="py-8 text-center space-y-3">
                  <CheckCircle className="w-8 h-8 text-emerald-500 mx-auto" />
                  <h3 className="text-base font-bold uppercase tracking-wider">
                    Message Sent
                  </h3>
                  <p className="text-xs opacity-70 max-w-sm mx-auto">
                    Thanks for reaching out! A member of the {brandName} team will reply to your email within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-[#B27338] underline"
                  >
                    Send another query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider opacity-75 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        placeholder="Your Name"
                        className="w-full px-3 py-2 text-xs rounded-xs border border-current/20 bg-transparent focus:outline-hidden"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider opacity-75 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        placeholder="yourname@gmail.com"
                        className="w-full px-3 py-2 text-xs rounded-xs border border-current/20 bg-transparent focus:outline-hidden"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider opacity-75 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Order Inquiry / Sizing Help"
                      className="w-full px-3 py-2 text-xs rounded-xs border border-current/20 bg-transparent focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider opacity-75 mb-1">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      placeholder="How can we help you?"
                      className="w-full px-3 py-2 text-xs rounded-xs border border-current/20 bg-transparent focus:outline-hidden"
                    />
                  </div>

                  <button
                    type="submit"
                    className={`w-full py-3 text-xs uppercase tracking-widest font-bold rounded-xs transition-colors flex items-center justify-center gap-2 ${
                      isDark ? 'bg-white text-black hover:bg-[#F3EFE6]' : 'bg-black text-white hover:bg-[#252525]'
                    }`}
                  >
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right: Studio Photo (5 cols) */}
          <div className="md:col-span-5 aspect-4/5 rounded-sm overflow-hidden border border-current/10 shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80"
              alt="Jaipur Design Studio"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
