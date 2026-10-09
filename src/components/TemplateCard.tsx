import React from 'react';
import { Link } from 'react-router-dom';
import {
  Monitor,
  Tablet,
  Smartphone,
  Eye,
  ArrowRight,
  Sparkles,
  Layers,
} from 'lucide-react';
import type { TemplateItem } from '../types';
import { formatCurrency } from '../data/siteConfig';
import { usePreviewModal } from '../context/PreviewModalContext';
import { useQuoteModal } from '../context/QuoteModalContext';

interface TemplateCardProps {
  template: TemplateItem;
  viewMode?: 'grid' | 'list';
}

export const TemplateCard: React.FC<TemplateCardProps> = ({
  template,
  viewMode = 'grid',
}) => {
  const { openPreview } = usePreviewModal();
  const { openQuoteModal } = useQuoteModal();

  const handleGetThisWebsite = (e: React.MouseEvent) => {
    e.stopPropagation();
    openQuoteModal({
      templateId: template.id,
      templateName: template.name,
      category: template.category,
    });
  };

  const handlePreviewDemo = (e: React.MouseEvent) => {
    e.stopPropagation();
    openPreview(template);
  };

  if (viewMode === 'list') {
    return (
      <div className="w-full bg-[#FFFFFF] dark:bg-[#14161B] border border-[#E6E1D6] dark:border-[#242732] rounded-md overflow-hidden hover:border-[#B27338]/60 dark:hover:border-[#C88645]/60 transition-all duration-200 group flex flex-col md:flex-row shadow-xs">
        {/* Cover Preview Image */}
        <div
          className="relative md:w-80 h-56 md:h-auto overflow-hidden bg-[#F3EFE6] dark:bg-[#1B1E26] cursor-pointer shrink-0"
          onClick={handlePreviewDemo}
        >
          <img
            src={template.coverImage}
            alt={template.name}
            loading="lazy"
            className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-white/90 text-xs font-semibold text-[#191A1E]">
              <Eye className="w-3.5 h-3.5" /> Preview Demo
            </span>
          </div>
          {/* Badge */}
          <div className="absolute top-3 left-3 flex gap-1.5">
            <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-xs bg-[#191A1E]/80 text-white backdrop-blur-xs">
              {template.designStyle}
            </span>
          </div>
        </div>

        {/* Info Column */}
        <div className="p-6 flex-1 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="text-xs uppercase tracking-wider text-[#8A8892] dark:text-[#6B6A73] font-semibold">
                {template.categoryName}
              </span>
              <div className="flex items-center gap-2 text-xs text-[#8A8892] dark:text-[#6B6A73]">
                <span className="flex items-center gap-1 font-mono">
                  <Layers className="w-3 h-3 text-[#B27338]" /> {template.pageCount} Pages
                </span>
                <span>•</span>
                <div className="flex items-center gap-1" title="Responsive across Desktop, Tablet & Mobile">
                  <Monitor className="w-3.5 h-3.5 text-[#595861] dark:text-[#9E9DA6]" />
                  <Tablet className="w-3 h-3 text-[#595861] dark:text-[#9E9DA6]" />
                  <Smartphone className="w-3 h-3 text-[#595861] dark:text-[#9E9DA6]" />
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-[#191A1E] dark:text-[#F4F2EC] group-hover:text-[#B27338] transition-colors">
              <Link to={`/templates/view/${template.slug}`}>
                {template.name}
              </Link>
            </h3>

            <p className="text-sm text-[#595861] dark:text-[#9E9DA6] line-clamp-2">
              {template.shortFeatureSummary || template.description}
            </p>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {template.features.slice(0, 4).map((feat) => (
                <span
                  key={feat}
                  className="px-2 py-0.5 rounded-xs text-[11px] bg-[#F3EFE6] dark:bg-[#1B1E26] text-[#595861] dark:text-[#9E9DA6]"
                >
                  {feat}
                </span>
              ))}
            </div>
          </div>

          {/* Pricing & Card Action Buttons */}
          <div className="pt-5 mt-4 border-t border-[#E6E1D6] dark:border-[#242732] flex items-center justify-between flex-wrap gap-3">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#8A8892] dark:text-[#6B6A73]">
                Starting from
              </span>
              <p className="text-lg font-bold text-[#191A1E] dark:text-[#F4F2EC]">
                {formatCurrency(template.startingPrice)}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePreviewDemo}
                className="px-3 py-1.5 text-xs font-semibold rounded-sm border border-[#E6E1D6] dark:border-[#242732] hover:bg-[#F3EFE6] dark:hover:bg-[#1B1E26] text-[#191A1E] dark:text-[#F4F2EC] transition-colors flex items-center gap-1.5"
              >
                <Eye className="w-3 h-3" />
                <span>Preview Demo</span>
              </button>

              <Link
                to={`/templates/view/${template.slug}`}
                className="px-3 py-1.5 text-xs font-semibold rounded-sm border border-[#E6E1D6] dark:border-[#242732] hover:bg-[#F3EFE6] dark:hover:bg-[#1B1E26] text-[#191A1E] dark:text-[#F4F2EC] transition-colors"
              >
                View Details
              </Link>

              <button
                type="button"
                onClick={handleGetThisWebsite}
                className="px-3.5 py-1.5 text-xs font-semibold rounded-sm bg-[#B27338] hover:bg-[#9E632B] dark:bg-[#C88645] dark:hover:bg-[#D99754] text-white shadow-xs transition-colors flex items-center gap-1"
              >
                <Sparkles className="w-3 h-3" />
                <span>Get This Website</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Grid Mode (Default)
  return (
    <div className="bg-[#FFFFFF] dark:bg-[#14161B] border border-[#E6E1D6] dark:border-[#242732] rounded-md overflow-hidden hover:border-[#B27338]/60 dark:hover:border-[#C88645]/60 transition-all duration-200 group flex flex-col justify-between shadow-xs">
      {/* Top Media Container */}
      <div className="relative aspect-16/10 overflow-hidden bg-[#F3EFE6] dark:bg-[#1B1E26]">
        <img
          src={template.coverImage}
          alt={template.name}
          loading="lazy"
          className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
        />

        {/* Hover Action Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 p-4">
          <button
            type="button"
            onClick={handlePreviewDemo}
            className="px-3.5 py-2 rounded-sm bg-white text-[#191A1E] text-xs font-semibold flex items-center gap-1.5 shadow-md hover:bg-[#FAF7F2] transition-colors"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Preview Demo</span>
          </button>
        </div>

        {/* Badges Top */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-xs bg-[#191A1E]/85 text-white backdrop-blur-xs">
            {template.designStyle}
          </span>
          <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-xs bg-[#FAF7F2]/90 dark:bg-[#14161B]/90 text-[#191A1E] dark:text-[#F4F2EC] backdrop-blur-xs border border-[#E6E1D6] dark:border-[#242732]">
            {template.categoryName}
          </span>
        </div>

        {/* Sample Marker Ribbon */}
        <div className="absolute bottom-2 left-2 text-[10px] font-mono tracking-tight text-white/80 bg-black/60 px-1.5 py-0.5 rounded-xs backdrop-blur-xs">
          Sample Architecture
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          {/* Header Row */}
          <div className="flex items-center justify-between text-xs text-[#8A8892] dark:text-[#6B6A73]">
            <span className="flex items-center gap-1 font-mono">
              <Layers className="w-3 h-3 text-[#B27338]" /> {template.pageCount} Pages Included
            </span>

            {/* Responsive Indicator */}
            <div className="flex items-center gap-1.5" title="Fully responsive on all devices">
              <Monitor className="w-3.5 h-3.5 text-[#595861] dark:text-[#9E9DA6]" />
              <Tablet className="w-3 h-3 text-[#595861] dark:text-[#9E9DA6]" />
              <Smartphone className="w-3 h-3 text-[#595861] dark:text-[#9E9DA6]" />
            </div>
          </div>

          {/* Template Title */}
          <h3 className="text-lg font-bold text-[#191A1E] dark:text-[#F4F2EC] group-hover:text-[#B27338] transition-colors">
            <Link to={`/templates/view/${template.slug}`}>
              {template.name}
            </Link>
          </h3>

          {/* Short Feature Summary */}
          <p className="text-xs text-[#595861] dark:text-[#9E9DA6] line-clamp-2 leading-relaxed">
            {template.shortFeatureSummary || template.description}
          </p>

          {/* Feature Tags */}
          <div className="flex flex-wrap gap-1 pt-1">
            {template.features.slice(0, 3).map((f) => (
              <span
                key={f}
                className="text-[10px] px-1.5 py-0.5 rounded-xs bg-[#F3EFE6] dark:bg-[#1B1E26] text-[#595861] dark:text-[#9E9DA6]"
              >
                {f}
              </span>
            ))}
          </div>
        </div>

        {/* Pricing & Footer Actions */}
        <div className="pt-3 border-t border-[#E6E1D6] dark:border-[#242732] space-y-3">
          <div className="flex items-baseline justify-between">
            <span className="text-[10px] uppercase tracking-wider text-[#8A8892] dark:text-[#6B6A73]">
              Starting Price
            </span>
            <span className="text-base font-bold text-[#191A1E] dark:text-[#F4F2EC]">
              {formatCurrency(template.startingPrice)}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Link
              to={`/templates/view/${template.slug}`}
              className="w-full py-2 px-2 text-center text-xs font-semibold rounded-sm border border-[#E6E1D6] dark:border-[#242732] hover:bg-[#F3EFE6] dark:hover:bg-[#1B1E26] text-[#191A1E] dark:text-[#F4F2EC] transition-colors"
            >
              View Details
            </Link>

            <button
              type="button"
              onClick={handleGetThisWebsite}
              className="w-full py-2 px-2 text-center text-xs font-semibold rounded-sm bg-[#B27338] hover:bg-[#9E632B] dark:bg-[#C88645] dark:hover:bg-[#D99754] text-white shadow-xs transition-colors flex items-center justify-center gap-1"
            >
              <span>Get Website</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
