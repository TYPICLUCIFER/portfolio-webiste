import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  X,
  Monitor,
  Tablet,
  Smartphone,
  ExternalLink,
  Sparkles,
  Layers,
  CheckCircle,
} from 'lucide-react';
import { usePreviewModal } from '../context/PreviewModalContext';
import { useQuoteModal } from '../context/QuoteModalContext';
import { formatCurrency } from '../data/siteConfig';

type DeviceMode = 'desktop' | 'tablet' | 'mobile';

export const TemplatePreviewModal: React.FC = () => {
  const navigate = useNavigate();
  const { activeTemplate, isOpen, closePreview } = usePreviewModal();
  const { openQuoteModal } = useQuoteModal();
  const [device, setDevice] = useState<DeviceMode>('desktop');
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closePreview();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closePreview]);

  // Reset active image when template changes
  useEffect(() => {
    setActiveImageIndex(0);
    setDevice('desktop');
  }, [activeTemplate]);

  if (!isOpen || !activeTemplate) return null;

  const currentPreviewImage =
    device === 'desktop'
      ? activeTemplate.desktopPreview || activeTemplate.coverImage
      : device === 'tablet'
      ? activeTemplate.tabletPreview || activeTemplate.coverImage
      : activeTemplate.mobilePreview || activeTemplate.coverImage;

  const handleGetWebsite = () => {
    const templateToRequest = activeTemplate;
    closePreview();
    openQuoteModal({
      templateId: templateToRequest.id,
      templateName: templateToRequest.name,
      category: templateToRequest.category,
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex flex-col justify-between">
      {/* Top Bar / Navigation Toolbar */}
      <div className="sticky top-0 z-10 bg-[#0E1013]/95 border-b border-[#242732] px-4 py-3 sm:px-6 flex items-center justify-between gap-4">
        {/* Template Information */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="hidden sm:flex flex-col">
            <span className="text-xs uppercase tracking-wider text-[#A3A2A8]">
              {activeTemplate.categoryName}
            </span>
            <h2 className="text-sm sm:text-base font-bold text-[#F5F3EF] truncate">
              {activeTemplate.name}
            </h2>
          </div>

          <span className="text-xs font-semibold px-2.5 py-1 rounded-sm bg-[#241D17] text-[#C88645] border border-[#523E2A]">
            Starting at {formatCurrency(activeTemplate.startingPrice)}
          </span>
        </div>

        {/* Device Mode Switcher */}
        <div className="flex items-center bg-[#15171C] border border-[#242732] rounded-md p-0.5">
          <button
            type="button"
            onClick={() => setDevice('desktop')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-xs font-medium transition-all ${
              device === 'desktop'
                ? 'bg-[#242732] text-[#F5F3EF] shadow-xs'
                : 'text-[#A3A2A8] hover:text-[#F5F3EF]'
            }`}
            title="Desktop Preview"
          >
            <Monitor className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Desktop</span>
          </button>
          <button
            type="button"
            onClick={() => setDevice('tablet')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-xs font-medium transition-all ${
              device === 'tablet'
                ? 'bg-[#242732] text-[#F5F3EF] shadow-xs'
                : 'text-[#A3A2A8] hover:text-[#F5F3EF]'
            }`}
            title="Tablet Preview"
          >
            <Tablet className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Tablet</span>
          </button>
          <button
            type="button"
            onClick={() => setDevice('mobile')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-xs font-medium transition-all ${
              device === 'mobile'
                ? 'bg-[#242732] text-[#F5F3EF] shadow-xs'
                : 'text-[#A3A2A8] hover:text-[#F5F3EF]'
            }`}
            title="Mobile Preview"
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Mobile</span>
          </button>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {activeTemplate.liveDemoUrl && (
            activeTemplate.liveDemoUrl.startsWith('/') ? (
              <button
                type="button"
                onClick={() => {
                  closePreview();
                  navigate(activeTemplate.liveDemoUrl!);
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-xs font-semibold bg-[#B27338] text-white hover:bg-[#9E632B] transition-colors"
                title="Launch 10-screen interactive live demo"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Launch 10-Screen Demo</span>
              </button>
            ) : (
              <a
                href={activeTemplate.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-xs font-medium text-[#A3A2A8] hover:text-[#F5F3EF] border border-[#242732] hover:bg-[#1C1E25] transition-colors"
                title="Open external live demo in new tab"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )
          )}

          <button
            type="button"
            onClick={handleGetWebsite}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-sm text-xs font-semibold uppercase tracking-wider bg-[#C88645] hover:bg-[#D99754] text-white shadow-xs transition-colors"
          >
            <Sparkles className="w-3 h-3" />
            <span>Get This Website</span>
          </button>

          <button
            type="button"
            onClick={closePreview}
            className="p-1.5 rounded-sm text-[#A3A2A8] hover:text-[#F5F3EF] hover:bg-[#242732] transition-colors"
            aria-label="Close preview"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Preview Stage */}
      <div className="flex-1 py-8 px-4 flex items-center justify-center overflow-x-hidden">
        <div
          className={`transition-all duration-300 mx-auto flex flex-col items-center ${
            device === 'desktop'
              ? 'w-full max-w-5xl'
              : device === 'tablet'
              ? 'w-full max-w-[768px]'
              : 'w-full max-w-[390px]'
          }`}
        >
          {/* Device Mockup Wrapper */}
          <div className="w-full bg-[#15171C] border border-[#242732] rounded-xl overflow-hidden shadow-2xl flex flex-col">
            {/* Device Browser Header / Status Bar */}
            <div className="px-4 py-2.5 bg-[#1C1E25] border-b border-[#242732] flex items-center justify-between text-xs text-[#6D6C74]">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
              </div>
              <div className="flex-1 max-w-md mx-4 hidden sm:block">
                <div className="bg-[#121316] rounded-sm py-1 px-3 text-[11px] text-center text-[#9E9DA6] truncate">
                  https://preview.agency/{activeTemplate.slug} • {device.toUpperCase()} MODE
                </div>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-[#A3A2A8]">
                <span>{activeTemplate.includedPages.length} Pages</span>
              </div>
            </div>

            {/* Asset Notice Banner */}
            <div className="bg-[#241D17] border-b border-[#523E2A] px-4 py-1.5 flex items-center justify-between text-[11px] text-[#D99754]">
              <span className="truncate">
                Architecture Preview • Replace with your supplied template designs
              </span>
              <span className="hidden sm:inline font-mono">
                {activeTemplate.designStyle} Style
              </span>
            </div>

            {/* Screen Content Image */}
            <div className="relative bg-[#0D0E12] max-h-[72vh] overflow-y-auto">
              <img
                src={
                  activeTemplate.previewGallery && activeTemplate.previewGallery[activeImageIndex]
                    ? activeTemplate.previewGallery[activeImageIndex]
                    : currentPreviewImage
                }
                alt={`${activeTemplate.name} preview`}
                className="w-full h-auto object-top object-cover block"
                loading="eager"
              />
            </div>

            {/* Gallery Thumbnail Strip (if multiple preview images) */}
            {activeTemplate.previewGallery && activeTemplate.previewGallery.length > 1 && (
              <div className="p-3 bg-[#15171C] border-t border-[#242732] flex items-center gap-2 overflow-x-auto">
                <span className="text-[11px] uppercase tracking-wider text-[#6D6C74] font-medium mr-1 flex items-center gap-1">
                  <Layers className="w-3 h-3" /> Shots:
                </span>
                {activeTemplate.previewGallery.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-16 h-10 rounded-sm overflow-hidden border transition-all shrink-0 ${
                      activeImageIndex === idx
                        ? 'border-[#C88645] ring-2 ring-[#C88645]/40'
                        : 'border-[#242732] opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Information Footer */}
      <div className="bg-[#0E1013] border-t border-[#242732] px-6 py-3 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#A3A2A8]">
        <div className="flex items-center gap-4 flex-wrap">
          <span className="flex items-center gap-1 text-[#F5F3EF]">
            <CheckCircle className="w-3.5 h-3.5 text-[#C88645]" />
            Includes: {activeTemplate.includedPages.slice(0, 3).join(', ')}...
          </span>
          <span>Delivery: {activeTemplate.estimatedDelivery}</span>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleGetWebsite}
            className="text-[#C88645] hover:underline font-medium"
          >
            Configure & Request Quote →
          </button>
        </div>
      </div>
    </div>
  );
};
