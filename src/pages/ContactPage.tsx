import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MessageSquare,
  Clock,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Sparkles,
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { categories } from '../data/categories';
import { useQuoteModal } from '../context/QuoteModalContext';

export const ContactPage: React.FC = () => {
  const { openQuoteModal } = useQuoteModal();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in your name, email, and message.');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      // Integration point simulation
      await new Promise((resolve) => setTimeout(resolve, 800));
      setSubmitted(true);
    } catch {
      setError('Failed to send message. Please reach out via WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber.replace(
    /[^0-9]/g,
    ''
  )}?text=${encodeURIComponent(
    'Hi! I would like to inquire about developing a website for my business.'
  )}`;

  return (
    <div className="space-y-16 pb-20">
      {/* Contact Hero */}
      <section className="bg-[#FFFFFF] dark:bg-[#14161B] border-b border-[#E6E1D6] dark:border-[#242732] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#F7EEE4] dark:bg-[#241D17] text-[#B27338] dark:text-[#C88645] border border-[#DFCBB5] dark:border-[#523E2A]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Communication</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#191A1E] dark:text-[#F4F2EC]">
            Get In Touch
          </h1>

          <p className="text-base sm:text-lg text-[#595861] dark:text-[#9E9DA6] leading-relaxed">
            Have a project in mind, want to request a customised template, or need a bespoke digital experience? We are ready to talk.
          </p>
        </div>
      </section>

      {/* Main Grid: Direct Contacts + Contact Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Contact Info & WhatsApp Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* WhatsApp Card */}
            <div className="p-6 rounded-md bg-[#F7EEE4] dark:bg-[#241D17] border border-[#DFCBB5] dark:border-[#523E2A] space-y-3">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
                <MessageSquare className="w-4 h-4" />
                <span>Fastest Response</span>
              </div>
              <h3 className="text-xl font-bold text-[#191A1E] dark:text-[#F4F2EC]">
                Instant WhatsApp Chat
              </h3>
              <p className="text-xs text-[#595861] dark:text-[#9E9DA6] leading-relaxed">
                Connect directly with the developer to discuss ideas, timeline estimates, or specific questions in real-time.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs uppercase tracking-wider font-semibold rounded-sm bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Open Chat: {siteConfig.contact.whatsappDisplay}</span>
              </a>
            </div>

            {/* Direct Details Box */}
            <div className="p-6 rounded-md bg-[#FFFFFF] dark:bg-[#14161B] border border-[#E6E1D6] dark:border-[#242732] space-y-4">
              <h4 className="text-xs uppercase tracking-wider font-bold text-[#191A1E] dark:text-[#F4F2EC]">
                Direct Contact Channels
              </h4>

              <div className="space-y-3 text-sm text-[#595861] dark:text-[#9E9DA6]">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#B27338] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-[#8A8892] block">Email:</span>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-[#191A1E] dark:text-[#F4F2EC] hover:text-[#B27338] font-medium"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#B27338] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-[#8A8892] block">Phone:</span>
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="text-[#191A1E] dark:text-[#F4F2EC] hover:text-[#B27338] font-medium"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#B27338] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-[#8A8892] block">Business Hours:</span>
                    <span className="text-[#191A1E] dark:text-[#F4F2EC]">
                      {siteConfig.contact.businessHours}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#B27338] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-[#8A8892] block">Location:</span>
                    <span className="text-[#191A1E] dark:text-[#F4F2EC]">
                      {siteConfig.contact.address}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote Modal Shortcut */}
            <div className="p-5 rounded-md bg-[#FAF7F2] dark:bg-[#1B1E26] border border-[#E6E1D6] dark:border-[#242732] flex items-center justify-between">
              <div>
                <h5 className="text-xs font-bold text-[#191A1E] dark:text-[#F4F2EC]">
                  Need a full quote with package selection?
                </h5>
                <p className="text-[11px] text-[#8A8892]">Use our interactive quote builder</p>
              </div>
              <button
                type="button"
                onClick={() => openQuoteModal()}
                className="px-3 py-1.5 text-xs font-semibold rounded-sm bg-[#B27338] text-white hover:bg-[#9E632B]"
              >
                Open Quote
              </button>
            </div>
          </div>

          {/* Right: Message Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#FFFFFF] dark:bg-[#14161B] border border-[#E6E1D6] dark:border-[#242732] p-8 rounded-md shadow-xs">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#191A1E] dark:text-[#F4F2EC]">
                  Message Received!
                </h3>
                <p className="text-sm text-[#595861] dark:text-[#9E9DA6] max-w-sm mx-auto">
                  Thank you for reaching out. We will get back to you within 12 business hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-semibold text-[#B27338] underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold text-[#191A1E] dark:text-[#F4F2EC]">
                  Send a Direct Message
                </h3>

                {error && (
                  <div className="p-3 rounded-xs bg-rose-500/10 border border-rose-500/30 text-rose-600 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#191A1E] dark:text-[#F4F2EC] mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Priya Patel"
                      className="w-full px-3 py-2 text-sm rounded-sm bg-[#FAF7F2] dark:bg-[#181A21] border border-[#E6E1D6] dark:border-[#242732] text-[#191A1E] dark:text-[#F4F2EC] focus:outline-hidden focus:ring-1 focus:ring-[#B27338]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#191A1E] dark:text-[#F4F2EC] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@business.com"
                      className="w-full px-3 py-2 text-sm rounded-sm bg-[#FAF7F2] dark:bg-[#181A21] border border-[#E6E1D6] dark:border-[#242732] text-[#191A1E] dark:text-[#F4F2EC] focus:outline-hidden focus:ring-1 focus:ring-[#B27338]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#191A1E] dark:text-[#F4F2EC] mb-1">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-3 py-2 text-sm rounded-sm bg-[#FAF7F2] dark:bg-[#181A21] border border-[#E6E1D6] dark:border-[#242732] text-[#191A1E] dark:text-[#F4F2EC] focus:outline-hidden focus:ring-1 focus:ring-[#B27338]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#191A1E] dark:text-[#F4F2EC] mb-1">
                      Business Vertical
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-3 py-2 text-sm rounded-sm bg-[#FAF7F2] dark:bg-[#181A21] border border-[#E6E1D6] dark:border-[#242732] text-[#191A1E] dark:text-[#F4F2EC] focus:outline-hidden focus:ring-1 focus:ring-[#B27338]"
                    >
                      <option value="">Select industry category...</option>
                      {categories.map((c) => (
                        <option key={c.id} value={c.slug}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#191A1E] dark:text-[#F4F2EC] mb-1">
                    Project Message or Inquiries *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your brand, what you need built, and your target launch schedule..."
                    className="w-full px-3 py-2 text-sm rounded-sm bg-[#FAF7F2] dark:bg-[#181A21] border border-[#E6E1D6] dark:border-[#242732] text-[#191A1E] dark:text-[#F4F2EC] focus:outline-hidden focus:ring-1 focus:ring-[#B27338]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 text-xs uppercase tracking-wider font-semibold rounded-sm bg-[#B27338] hover:bg-[#9E632B] text-white shadow-xs transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Direct Inquiry</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
