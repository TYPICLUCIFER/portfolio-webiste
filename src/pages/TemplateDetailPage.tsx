import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Eye,
  ExternalLink,
  Sparkles,
  CheckCircle,
  Clock,
  ChevronDown,
  Monitor,
} from 'lucide-react';
import { getTemplateBySlug, templates } from '../data/templates';
import { formatCurrency } from '../data/siteConfig';
import { usePreviewModal } from '../context/PreviewModalContext';
import { useQuoteModal } from '../context/QuoteModalContext';
import { TemplateCard } from '../components/TemplateCard';

export const TemplateDetailPage: React.FC = () => {
  const { templateSlug } = useParams<{ templateSlug: string }>();
  const { openPreview } = usePreviewModal();
  const { openQuoteModal } = useQuoteModal();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const template = templateSlug ? getTemplateBySlug(templateSlug) : undefined;

  if (!template) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <h1 className="text-2xl font-bold text-[#191A1E] dark:text-[#F4F2EC]">
          Template Not Found
        </h1>
        <p className="text-sm text-[#595861] dark:text-[#9E9DA6]">
          The template you are searching for may have been updated or moved.
        </p>
        <Link
          to="/templates"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-[#B27338] text-white text-xs font-semibold uppercase tracking-wider"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Catalogue
        </Link>
      </div>
    );
  }

  // Related templates from the same category or others
  const relatedTemplates = templates
    .filter((t) => t.id !== template.id && (t.category === template.category || t.featured))
    .slice(0, 3);

  const gallery = template.previewGallery && template.previewGallery.length > 0
    ? template.previewGallery
    : [template.coverImage];

  const handleRequestTemplate = (tierId?: string, tierName?: string) => {
    openQuoteModal({
      templateId: template.id,
      templateName: template.name,
      category: template.category,
      packageTierId: tierId,
      packageTierName: tierName,
    });
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="space-y-16 pb-20">
      {/* Top Breadcrumb & Actions Bar */}
      <div className="border-b border-[#E6E1D6] dark:border-[#242732] bg-[#FFFFFF] dark:bg-[#14161B] py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link
            to="/templates"
            className="inline-flex items-center gap-2 text-xs text-[#8A8892] dark:text-[#6B6A73] hover:text-[#B27338] dark:hover:text-[#C88645] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Catalogue</span>
            <span>/</span>
            <span className="text-[#191A1E] dark:text-[#F4F2EC] font-medium">{template.categoryName}</span>
          </Link>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => openPreview(template)}
              className="px-3 py-1.5 text-xs font-semibold rounded-sm border border-[#E6E1D6] dark:border-[#242732] text-[#191A1E] dark:text-[#F4F2EC] hover:bg-[#F3EFE6] dark:hover:bg-[#1B1E26] flex items-center gap-1.5 transition-colors"
            >
              <Eye className="w-3 h-3 text-[#B27338]" />
              <span>Interactive Device Preview</span>
            </button>

            {template.liveDemoUrl && (
              template.liveDemoUrl.startsWith('/') ? (
                <Link
                  to={template.liveDemoUrl}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-sm bg-[#B27338] text-white hover:bg-[#9E632B] transition-colors shadow-xs"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Launch 10-Screen Interactive Demo</span>
                </Link>
              ) : (
                <a
                  href={template.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-sm border border-[#E6E1D6] dark:border-[#242732] text-[#595861] dark:text-[#9E9DA6] hover:text-[#191A1E] hover:bg-[#F3EFE6] transition-colors"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )
            )}
          </div>
        </div>
      </div>

      {/* Main Hero Showcase: Gallery & Specifications */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Gallery & Previews (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Primary Main Image Frame */}
            <div className="relative bg-[#FFFFFF] dark:bg-[#14161B] border border-[#E6E1D6] dark:border-[#242732] rounded-lg overflow-hidden shadow-lg group">
              <div className="px-4 py-2.5 bg-[#F3EFE6] dark:bg-[#1C1E25] border-b border-[#E6E1D6] dark:border-[#242732] flex items-center justify-between text-xs text-[#8A8892]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                </div>
                <div className="text-[11px] font-mono text-[#595861] dark:text-[#9E9DA6]">
                  {template.slug}.preview
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] uppercase font-mono text-[#B27338]">{template.designStyle}</span>
                </div>
              </div>

              <div className="relative aspect-16/10 bg-[#FAF7F2] dark:bg-[#0D0E12] overflow-hidden">
                <img
                  src={gallery[selectedImageIndex]}
                  alt={`${template.name} preview`}
                  className="w-full h-full object-cover object-top"
                />

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button
                    type="button"
                    onClick={() => openPreview(template)}
                    className="px-4 py-2 rounded-sm bg-white text-[#191A1E] text-xs font-semibold flex items-center gap-2 shadow-lg"
                  >
                    <Eye className="w-4 h-4 text-[#B27338]" />
                    <span>Open Fullscreen Device Preview</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Thumbnail Strip */}
            {gallery.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-1">
                {gallery.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`relative w-24 h-16 rounded-sm overflow-hidden border transition-all shrink-0 ${
                      selectedImageIndex === idx
                        ? 'border-[#B27338] ring-2 ring-[#B27338]/30'
                        : 'border-[#E6E1D6] dark:border-[#242732] opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Responsive Mode Switcher Bar */}
            <div className="p-4 rounded-md bg-[#FAF7F2] dark:bg-[#1B1E26] border border-[#E6E1D6] dark:border-[#242732] flex items-center justify-between text-xs">
              <span className="text-[#595861] dark:text-[#9E9DA6] flex items-center gap-2">
                <Monitor className="w-4 h-4 text-[#B27338]" />
                <span>Responsive Viewports: Desktop, Tablet & Mobile</span>
              </span>
              <button
                type="button"
                onClick={() => openPreview(template)}
                className="text-xs font-semibold text-[#B27338] dark:text-[#C88645] hover:underline"
              >
                Test device switcher →
              </button>
            </div>
          </div>

          {/* Right: Template Details & Purchase Actions (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#B27338] dark:text-[#C88645]">
                  {template.categoryName}
                </span>
                <span>•</span>
                <span className="text-xs text-[#8A8892] dark:text-[#6B6A73]">
                  {template.designStyle} Style
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#191A1E] dark:text-[#F4F2EC]">
                {template.name}
              </h1>

              {/* Price Banner */}
              <div className="p-4 rounded-md bg-[#F7EEE4] dark:bg-[#241D17] border border-[#DFCBB5] dark:border-[#523E2A] flex items-baseline justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#8A8892] dark:text-[#9E9DA6]">
                    Starting Investment
                  </span>
                  <div className="text-2xl font-black text-[#191A1E] dark:text-[#F4F2EC]">
                    {formatCurrency(template.startingPrice)}
                  </div>
                </div>
                <div className="text-right text-xs text-[#595861] dark:text-[#9E9DA6]">
                  <div className="flex items-center gap-1 font-mono text-[#B27338] dark:text-[#C88645]">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{template.estimatedDelivery}</span>
                  </div>
                  <span className="text-[11px]">Ready for deployment</span>
                </div>
              </div>

              <p className="text-sm text-[#595861] dark:text-[#9E9DA6] leading-relaxed">
                {template.description}
              </p>
            </div>

            {/* Target Audience */}
            <div className="p-4 rounded-md bg-[#FFFFFF] dark:bg-[#14161B] border border-[#E6E1D6] dark:border-[#242732] space-y-1.5 text-xs">
              <span className="font-bold uppercase tracking-wider text-[#191A1E] dark:text-[#F4F2EC]">
                Ideal For:
              </span>
              <p className="text-[#595861] dark:text-[#9E9DA6] leading-relaxed">
                {template.targetAudience}
              </p>
            </div>

            {/* Key Features & Pages Overview */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#191A1E] dark:text-[#F4F2EC]">
                Included Pages ({template.pageCount})
              </h3>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {template.includedPages.map((page, i) => (
                  <div
                    key={i}
                    className="p-2 rounded-xs bg-[#FAF7F2] dark:bg-[#1B1E26] border border-[#E6E1D6] dark:border-[#242732] flex items-center gap-2 text-[#595861] dark:text-[#9E9DA6]"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span className="truncate">{page}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Integrations Supported */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#191A1E] dark:text-[#F4F2EC]">
                Ready Integrations
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {template.availableIntegrations.map((intg) => (
                  <span
                    key={intg}
                    className="px-2.5 py-1 rounded-xs text-xs bg-[#FFFFFF] dark:bg-[#14161B] border border-[#E6E1D6] dark:border-[#242732] text-[#595861] dark:text-[#9E9DA6]"
                  >
                    {intg}
                  </span>
                ))}
              </div>
            </div>

            {/* Request CTAs */}
            <div className="pt-4 border-t border-[#E6E1D6] dark:border-[#242732] space-y-3">
              <button
                type="button"
                onClick={() => handleRequestTemplate()}
                className="w-full py-3.5 px-4 text-xs uppercase tracking-wider font-semibold rounded-sm bg-[#B27338] hover:bg-[#9E632B] dark:bg-[#C88645] dark:hover:bg-[#D99754] text-white shadow-sm transition-all duration-150 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Get This Website — {formatCurrency(template.startingPrice)}</span>
              </button>

              <p className="text-center text-[11px] text-[#8A8892] dark:text-[#6B6A73]">
                Includes full branding customisation, domain routing, and launch assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Package Tiers & Pricing Breakdown */}
      {template.packageTiers && template.packageTiers.length > 0 && (
        <section className="bg-[#FFFFFF] dark:bg-[#14161B] border-y border-[#E6E1D6] dark:border-[#242732] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191A1E] dark:text-[#F4F2EC]">
                Package Options for {template.name}
              </h2>
              <p className="text-sm text-[#595861] dark:text-[#9E9DA6]">
                Choose the scope tier that suits your launch goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {template.packageTiers.map((tier) => (
                <div
                  key={tier.id}
                  className={`p-6 rounded-md border flex flex-col justify-between transition-all ${
                    tier.recommended
                      ? 'bg-[#FAF7F2] dark:bg-[#1B1E26] border-[#B27338] dark:border-[#C88645] shadow-md ring-1 ring-[#B27338]/30 relative'
                      : 'bg-[#FAF7F2] dark:bg-[#1B1E26] border-[#E6E1D6] dark:border-[#242732]'
                  }`}
                >
                  {tier.recommended && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="text-[10px] uppercase font-bold tracking-wider px-3 py-0.5 rounded-full bg-[#B27338] dark:bg-[#C88645] text-white">
                        Recommended
                      </span>
                    </div>
                  )}

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-bold text-[#191A1E] dark:text-[#F4F2EC]">
                        {tier.name}
                      </h3>
                      <p className="text-xs text-[#595861] dark:text-[#9E9DA6] mt-1">
                        {tier.description}
                      </p>
                    </div>

                    <div className="py-2 border-y border-[#E6E1D6] dark:border-[#242732]">
                      <span className="text-2xl font-black text-[#191A1E] dark:text-[#F4F2EC]">
                        {formatCurrency(tier.price)}
                      </span>
                      <p className="text-[11px] text-[#8A8892] dark:text-[#6B6A73]">
                        Delivery: {tier.deliveryDays}
                      </p>
                    </div>

                    <ul className="space-y-2 text-xs text-[#595861] dark:text-[#9E9DA6]">
                      {tier.includes.map((inc, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 mt-4 border-t border-[#E6E1D6] dark:border-[#242732]">
                    <button
                      type="button"
                      onClick={() => handleRequestTemplate(tier.id, tier.name)}
                      className={`w-full py-2.5 px-3 text-xs uppercase tracking-wider font-semibold rounded-sm text-center transition-colors ${
                        tier.recommended
                          ? 'bg-[#B27338] hover:bg-[#9E632B] dark:bg-[#C88645] dark:hover:bg-[#D99754] text-white'
                          : 'border border-[#E6E1D6] dark:border-[#242732] hover:bg-[#F3EFE6] dark:hover:bg-[#14161B] text-[#191A1E] dark:text-[#F4F2EC]'
                      }`}
                    >
                      Select This Package
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Customisation Add-ons Section */}
      {template.customizationOptions && template.customizationOptions.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="space-y-1">
            <h2 className="text-xl sm:text-2xl font-bold text-[#191A1E] dark:text-[#F4F2EC]">
              Available Customisation Add-ons
            </h2>
            <p className="text-xs text-[#595861] dark:text-[#9E9DA6]">
              Optional extensions to elevate your template setup.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {template.customizationOptions.map((addon) => (
              <div
                key={addon.id}
                className="p-4 rounded-md bg-[#FFFFFF] dark:bg-[#14161B] border border-[#E6E1D6] dark:border-[#242732] space-y-2"
              >
                <div className="flex items-start justify-between gap-2">
                  <h4 className="text-sm font-bold text-[#191A1E] dark:text-[#F4F2EC]">
                    {addon.name}
                  </h4>
                  <span className="text-xs font-semibold text-[#B27338] dark:text-[#C88645] shrink-0">
                    +{formatCurrency(addon.price)}
                  </span>
                </div>
                <p className="text-xs text-[#595861] dark:text-[#9E9DA6]">
                  {addon.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* FAQs Section */}
      {template.faqs && template.faqs.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center space-y-1">
            <h2 className="text-xl sm:text-2xl font-bold text-[#191A1E] dark:text-[#F4F2EC]">
              Frequently Asked Questions
            </h2>
            <p className="text-xs text-[#595861] dark:text-[#9E9DA6]">
              Clear answers regarding templates, revisions, and launch delivery.
            </p>
          </div>

          <div className="space-y-2">
            {template.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-[#E6E1D6] dark:border-[#242732] rounded-md bg-[#FFFFFF] dark:bg-[#14161B] overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 text-left flex items-center justify-between gap-4 text-sm font-semibold text-[#191A1E] dark:text-[#F4F2EC]"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#8A8892] transition-transform duration-200 ${
                      openFaqIndex === idx ? 'rotate-180 text-[#B27338]' : ''
                    }`}
                  />
                </button>
                {openFaqIndex === idx && (
                  <div className="px-4 pb-4 text-xs sm:text-sm text-[#595861] dark:text-[#9E9DA6] leading-relaxed border-t border-[#E6E1D6]/60 dark:border-[#242732]/60 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Related Templates */}
      {relatedTemplates.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-[#E6E1D6] dark:border-[#242732] space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-[#191A1E] dark:text-[#F4F2EC]">
              Related Templates You Might Like
            </h2>
            <Link
              to="/templates"
              className="text-xs font-semibold text-[#B27338] dark:text-[#C88645] hover:underline"
            >
              View all templates →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedTemplates.map((t) => (
              <TemplateCard key={t.id} template={t} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
