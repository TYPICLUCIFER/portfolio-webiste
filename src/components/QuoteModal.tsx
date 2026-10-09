import React, { useState, useEffect } from 'react';
import {
  X,
  Send,
  CheckCircle,
  MessageSquare,
  AlertCircle,
  Sparkles,
  Copy,
  Check,
} from 'lucide-react';
import { useQuoteModal } from '../context/QuoteModalContext';
import { categories } from '../data/categories';
import { templates } from '../data/templates';
import { siteConfig, formatCurrency } from '../data/siteConfig';
import type { QuoteFormData } from '../types';

const INITIAL_FORM_DATA: QuoteFormData = {
  fullName: '',
  email: '',
  phone: '',
  businessName: '',
  businessCategory: '',
  selectedTemplateId: '',
  selectedPackageTierId: '',
  desiredFeatures: [],
  budgetRange: '₹12,000 – ₹25,000',
  expectedLaunchDate: 'Within 2–3 weeks',
  additionalRequirements: '',
};

const FEATURE_OPTIONS = [
  'E-commerce & Checkout',
  'Appointment / Table Booking',
  'Custom Blog & CMS',
  'WhatsApp Live Chat Routing',
  'Payment Gateway (Razorpay/Stripe)',
  'Multi-Language Support',
  'Lead Capture & Email Alerts',
  'SEO & Google Maps Setup',
];

const BUDGET_OPTIONS = [
  '₹5,000 – ₹8,000 (Starter Landing Page)',
  '₹8,000 – ₹15,000 (Standard Business Website)',
  '₹15,000 – ₹30,000 (Premium Editorial Site)',
  '₹30,000 – ₹50,000+ (Full E-commerce / Custom)',
];

const TIMELINE_OPTIONS = [
  'ASAP (Rush / 3–5 Days)',
  'Within 2–3 weeks',
  'Within 1 month',
  'Flexible / Planning stage',
];

export const QuoteModal: React.FC = () => {
  const { isOpen, initialData, closeQuoteModal } = useQuoteModal();
  const [formData, setFormData] = useState<QuoteFormData>(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState<Partial<Record<keyof QuoteFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submittedRef, setSubmittedRef] = useState('');
  const [copiedRef, setCopiedRef] = useState(false);

  // Sync initialData when modal opens
  useEffect(() => {
    if (isOpen) {
      setSubmitSuccess(false);
      setErrors({});
      setFormData({
        ...INITIAL_FORM_DATA,
        selectedTemplateId: initialData.templateId || '',
        businessCategory: initialData.category || '',
        selectedPackageTierId: initialData.packageTierId || '',
      });
    }
  }, [isOpen, initialData]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeQuoteModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeQuoteModal]);

  if (!isOpen) return null;

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof QuoteFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone or WhatsApp number.';
    } else if (formData.phone.replace(/[^0-9]/g, '').length < 8) {
      newErrors.phone = 'Please enter a valid phone number (at least 8 digits).';
    }

    if (!formData.businessCategory) {
      newErrors.businessCategory = 'Please select a business category.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFeatureToggle = (feature: string) => {
    setFormData((prev) => {
      const exists = prev.desiredFeatures.includes(feature);
      return {
        ...prev,
        desiredFeatures: exists
          ? prev.desiredFeatures.filter((f) => f !== feature)
          : [...prev.desiredFeatures, feature],
      };
    });
  };

  /**
   * INTEGRATION POINT:
   * Replace the simulation below with your actual backend endpoint, EmailJS, Formspree, or CRM webhook.
   * Example:
   * await fetch('https://api.yourdomain.com/quote-requests', {
   *   method: 'POST',
   *   headers: { 'Content-Type': 'application/json' },
   *   body: JSON.stringify(formData),
   * });
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      // Simulate network request to real backend / CRM integration point
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const refId = `QTE-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedRef(refId);
      setSubmitSuccess(true);
    } catch {
      setErrors({ fullName: 'Submission failed. Please try again or message via WhatsApp.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedTemplate = templates.find((t) => t.id === formData.selectedTemplateId);

  // Generate pre-filled WhatsApp message
  const whatsappMessage = encodeURIComponent(
    `Hello! I would like to request a quote for my business.\n\n` +
      `• Reference: ${submittedRef || 'New Inquiry'}\n` +
      `• Name: ${formData.fullName}\n` +
      `• Business: ${formData.businessName || 'Not specified'}\n` +
      `• Category: ${formData.businessCategory}\n` +
      `• Template: ${selectedTemplate ? selectedTemplate.name : 'Custom / Not chosen'}\n` +
      `• Budget: ${formData.budgetRange}\n` +
      `• Launch: ${formData.expectedLaunchDate}\n` +
      `• Desired Features: ${formData.desiredFeatures.join(', ') || 'Standard package'}`
  );

  const copyRefToClipboard = () => {
    navigator.clipboard.writeText(submittedRef);
    setCopiedRef(true);
    setTimeout(() => setCopiedRef(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
      <div
        className="relative w-full max-w-2xl bg-[#FAF7F2] dark:bg-[#14161B] border border-[#E6E1D6] dark:border-[#242732] rounded-lg shadow-2xl overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E6E1D6] dark:border-[#242732] bg-[#F3EFE6] dark:bg-[#1B1E26]">
          <div className="flex items-center gap-2">
            <span className="p-1 rounded-sm bg-[#F7EEE4] dark:bg-[#241D17] text-[#B27338] dark:text-[#C88645]">
              <Sparkles className="w-4 h-4" />
            </span>
            <div>
              <h2 id="modal-headline" className="text-base font-bold text-[#191A1E] dark:text-[#F4F2EC]">
                Request a Custom Quote
              </h2>
              <p className="text-xs text-[#595861] dark:text-[#9E9DA6]">
                Share your requirements. We respond within 12 business hours.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={closeQuoteModal}
            className="p-1.5 rounded-sm text-[#595861] dark:text-[#9E9DA6] hover:bg-[#E6E1D6] dark:hover:bg-[#242732] transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[75vh] overflow-y-auto">
          {submitSuccess ? (
            /* Genuine Success State */
            <div className="space-y-6 py-4 text-center">
              <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                <CheckCircle className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold text-[#191A1E] dark:text-[#F4F2EC]">
                  Quote Request Received!
                </h3>
                <p className="text-sm text-[#595861] dark:text-[#9E9DA6] max-w-md mx-auto">
                  Thank you, <span className="font-semibold text-[#191A1E] dark:text-[#F4F2EC]">{formData.fullName}</span>. We have logged your enquiry with reference:
                </p>

                {/* Reference ID Pill */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-[#F7EEE4] dark:bg-[#241D17] border border-[#DFCBB5] dark:border-[#523E2A] text-[#B27338] dark:text-[#C88645] font-mono text-sm font-semibold">
                  <span>{submittedRef}</span>
                  <button
                    type="button"
                    onClick={copyRefToClipboard}
                    className="p-1 hover:text-[#191A1E] dark:hover:text-[#F4F2EC]"
                    title="Copy reference ID"
                  >
                    {copiedRef ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Inquiry Summary Box */}
              <div className="bg-[#F3EFE6] dark:bg-[#1B1E26] border border-[#E6E1D6] dark:border-[#242732] rounded-sm p-4 text-left text-xs space-y-2 max-w-md mx-auto">
                <div className="flex justify-between">
                  <span className="text-[#8A8892] dark:text-[#6B6A73]">Template:</span>
                  <span className="font-semibold text-[#191A1E] dark:text-[#F4F2EC]">
                    {selectedTemplate ? selectedTemplate.name : 'Bespoke / No Template'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8A8892] dark:text-[#6B6A73]">Category:</span>
                  <span className="font-semibold text-[#191A1E] dark:text-[#F4F2EC]">
                    {formData.businessCategory}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8A8892] dark:text-[#6B6A73]">Budget Range:</span>
                  <span className="font-semibold text-[#191A1E] dark:text-[#F4F2EC]">
                    {formData.budgetRange}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8A8892] dark:text-[#6B6A73]">Expected Launch:</span>
                  <span className="font-semibold text-[#191A1E] dark:text-[#F4F2EC]">
                    {formData.expectedLaunchDate}
                  </span>
                </div>
              </div>

              {/* Direct WhatsApp Call to Action */}
              <div className="space-y-3 pt-2">
                <p className="text-xs text-[#595861] dark:text-[#9E9DA6]">
                  Need an immediate response? Connect with us on WhatsApp right away:
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsappNumber.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs uppercase tracking-wider font-semibold rounded-sm bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Open in WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={closeQuoteModal}
                    className="px-5 py-2.5 text-xs uppercase tracking-wider font-semibold rounded-sm border border-[#E6E1D6] dark:border-[#242732] bg-[#FAF7F2] dark:bg-[#14161B] text-[#595861] dark:text-[#9E9DA6] hover:bg-[#EAE5D9] dark:hover:bg-[#1E2028]"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* Enquiry Form */
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Selected Template Badge (if applicable) */}
              {selectedTemplate && (
                <div className="p-3 bg-[#F7EEE4] dark:bg-[#241D17] border border-[#DFCBB5] dark:border-[#523E2A] rounded-sm flex items-center justify-between">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#B27338] dark:text-[#C88645] font-semibold">
                      Selected Template:
                    </span>
                    <h3 className="text-sm font-bold text-[#191A1E] dark:text-[#F4F2EC]">
                      {selectedTemplate.name} ({formatCurrency(selectedTemplate.startingPrice)})
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, selectedTemplateId: '' })}
                    className="text-xs text-[#B27338] dark:text-[#C88645] hover:underline"
                  >
                    Remove
                  </button>
                </div>
              )}

              {/* Personal & Business Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-[#191A1E] dark:text-[#F4F2EC] mb-1">
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className={`w-full px-3 py-2 text-sm rounded-sm bg-[#FFFFFF] dark:bg-[#181A21] border ${
                      errors.fullName ? 'border-rose-500' : 'border-[#E6E1D6] dark:border-[#242732]'
                    } focus:outline-hidden focus:ring-1 focus:ring-[#B27338] text-[#191A1E] dark:text-[#F4F2EC]`}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-semibold text-[#191A1E] dark:text-[#F4F2EC] mb-1">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@business.com"
                    className={`w-full px-3 py-2 text-sm rounded-sm bg-[#FFFFFF] dark:bg-[#181A21] border ${
                      errors.email ? 'border-rose-500' : 'border-[#E6E1D6] dark:border-[#242732]'
                    } focus:outline-hidden focus:ring-1 focus:ring-[#B27338] text-[#191A1E] dark:text-[#F4F2EC]`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone / WhatsApp */}
                <div>
                  <label className="block text-xs font-semibold text-[#191A1E] dark:text-[#F4F2EC] mb-1">
                    Phone or WhatsApp Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className={`w-full px-3 py-2 text-sm rounded-sm bg-[#FFFFFF] dark:bg-[#181A21] border ${
                      errors.phone ? 'border-rose-500' : 'border-[#E6E1D6] dark:border-[#242732]'
                    } focus:outline-hidden focus:ring-1 focus:ring-[#B27338] text-[#191A1E] dark:text-[#F4F2EC]`}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.phone}
                    </p>
                  )}
                </div>

                {/* Business Name */}
                <div>
                  <label className="block text-xs font-semibold text-[#191A1E] dark:text-[#F4F2EC] mb-1">
                    Business / Brand Name
                  </label>
                  <input
                    type="text"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    placeholder="e.g. Apex Health Clinic"
                    className="w-full px-3 py-2 text-sm rounded-sm bg-[#FFFFFF] dark:bg-[#181A21] border border-[#E6E1D6] dark:border-[#242732] focus:outline-hidden focus:ring-1 focus:ring-[#B27338] text-[#191A1E] dark:text-[#F4F2EC]"
                  />
                </div>
              </div>

              {/* Business Category & Template Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#191A1E] dark:text-[#F4F2EC] mb-1">
                    Business Category <span className="text-rose-500">*</span>
                  </label>
                  <select
                    value={formData.businessCategory}
                    onChange={(e) => setFormData({ ...formData, businessCategory: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-sm bg-[#FFFFFF] dark:bg-[#181A21] border border-[#E6E1D6] dark:border-[#242732] focus:outline-hidden focus:ring-1 focus:ring-[#B27338] text-[#191A1E] dark:text-[#F4F2EC]"
                  >
                    <option value="">Select a Category...</option>
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.slug}>
                        {cat.name}
                      </option>
                    ))}
                    <option value="other">Other / Custom Niche</option>
                  </select>
                  {errors.businessCategory && (
                    <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.businessCategory}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#191A1E] dark:text-[#F4F2EC] mb-1">
                    Template Preference
                  </label>
                  <select
                    value={formData.selectedTemplateId}
                    onChange={(e) => setFormData({ ...formData, selectedTemplateId: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-sm bg-[#FFFFFF] dark:bg-[#181A21] border border-[#E6E1D6] dark:border-[#242732] focus:outline-hidden focus:ring-1 focus:ring-[#B27338] text-[#191A1E] dark:text-[#F4F2EC]"
                  >
                    <option value="">I need guidance / Custom design</option>
                    {templates.map((tpl) => (
                      <option key={tpl.id} value={tpl.id}>
                        {tpl.name} ({formatCurrency(tpl.startingPrice)})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Desired Features Checkboxes */}
              <div>
                <label className="block text-xs font-semibold text-[#191A1E] dark:text-[#F4F2EC] mb-2">
                  Desired Features & Integrations
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-2">
                  {FEATURE_OPTIONS.map((feat) => {
                    const checked = formData.desiredFeatures.includes(feat);
                    return (
                      <label
                        key={feat}
                        onClick={() => handleFeatureToggle(feat)}
                        className={`flex items-center gap-2 p-2 rounded-sm border text-xs cursor-pointer select-none transition-colors ${
                          checked
                            ? 'bg-[#F7EEE4] dark:bg-[#241D17] border-[#DFCBB5] dark:border-[#523E2A] text-[#B27338] dark:text-[#C88645] font-medium'
                            : 'bg-[#FFFFFF] dark:bg-[#181A21] border-[#E6E1D6] dark:border-[#242732] text-[#595861] dark:text-[#9E9DA6] hover:bg-[#F3EFE6] dark:hover:bg-[#1E2028]'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => {}}
                          className="rounded-xs text-[#B27338] focus:ring-[#B27338] cursor-pointer"
                        />
                        <span className="truncate">{feat}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Budget & Timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#191A1E] dark:text-[#F4F2EC] mb-1">
                    Budget Range
                  </label>
                  <select
                    value={formData.budgetRange}
                    onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-sm bg-[#FFFFFF] dark:bg-[#181A21] border border-[#E6E1D6] dark:border-[#242732] focus:outline-hidden focus:ring-1 focus:ring-[#B27338] text-[#191A1E] dark:text-[#F4F2EC]"
                  >
                    {BUDGET_OPTIONS.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#191A1E] dark:text-[#F4F2EC] mb-1">
                    Expected Launch Date
                  </label>
                  <select
                    value={formData.expectedLaunchDate}
                    onChange={(e) => setFormData({ ...formData, expectedLaunchDate: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-sm bg-[#FFFFFF] dark:bg-[#181A21] border border-[#E6E1D6] dark:border-[#242732] focus:outline-hidden focus:ring-1 focus:ring-[#B27338] text-[#191A1E] dark:text-[#F4F2EC]"
                  >
                    {TIMELINE_OPTIONS.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Additional Requirements */}
              <div>
                <label className="block text-xs font-semibold text-[#191A1E] dark:text-[#F4F2EC] mb-1">
                  Additional Requirements & Design Preferences
                </label>
                <textarea
                  rows={3}
                  value={formData.additionalRequirements}
                  onChange={(e) => setFormData({ ...formData, additionalRequirements: e.target.value })}
                  placeholder="Share details about your brand, preferred aesthetic, competitor websites you admire, or specific questions..."
                  className="w-full px-3 py-2 text-sm rounded-sm bg-[#FFFFFF] dark:bg-[#181A21] border border-[#E6E1D6] dark:border-[#242732] focus:outline-hidden focus:ring-1 focus:ring-[#B27338] text-[#191A1E] dark:text-[#F4F2EC]"
                />
              </div>

              {/* Actions */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#E6E1D6] dark:border-[#242732]">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                    'Hi! I would like to quickly discuss a website project.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#595861] dark:text-[#9E9DA6] hover:text-[#B27338] dark:hover:text-[#C88645] transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Or quick-chat on WhatsApp</span>
                </a>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={closeQuoteModal}
                    className="flex-1 sm:flex-none px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-sm border border-[#E6E1D6] dark:border-[#242732] text-[#595861] dark:text-[#9E9DA6] hover:bg-[#EAE5D9] dark:hover:bg-[#1E2028]"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2 text-xs uppercase tracking-wider font-semibold rounded-sm bg-[#B27338] hover:bg-[#9E632B] dark:bg-[#C88645] dark:hover:bg-[#D99754] text-white shadow-xs transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Submitting...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Quote Request</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
