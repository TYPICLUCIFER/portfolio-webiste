import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  center?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  ctaText,
  ctaHref,
  center = false,
}) => {
  return (
    <div
      className={`mb-10 sm:mb-12 ${
        center ? 'text-center max-w-3xl mx-auto' : 'flex flex-col md:flex-row md:items-end md:justify-between gap-4'
      }`}
    >
      <div className={center ? 'space-y-3' : 'space-y-3 max-w-2xl'}>
        {badge && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#F7EEE4] dark:bg-[#241D17] text-[#B27338] dark:text-[#C88645] border border-[#DFCBB5] dark:border-[#523E2A]">
            <span>✦</span>
            <span>{badge}</span>
          </div>
        )}

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#191A1E] dark:text-[#F4F2EC] leading-tight">
          {title}
        </h2>

        {subtitle && (
          <p className="text-sm sm:text-base text-[#595861] dark:text-[#9E9DA6] leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {ctaText && ctaHref && !center && (
        <div className="shrink-0">
          <Link
            to={ctaHref}
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#B27338] dark:text-[#C88645] hover:text-[#9E632B] dark:hover:text-[#D99754] group"
          >
            <span>{ctaText}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      )}
    </div>
  );
};
