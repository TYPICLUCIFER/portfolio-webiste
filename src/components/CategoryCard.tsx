import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, LayoutGrid } from 'lucide-react';
import type { CategoryItem } from '../types';

interface CategoryCardProps {
  category: CategoryItem;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link
      to={`/templates/category/${category.slug}`}
      className="group relative bg-[#FFFFFF] dark:bg-[#14161B] border border-[#E6E1D6] dark:border-[#242732] rounded-md overflow-hidden hover:border-[#B27338]/60 dark:hover:border-[#C88645]/60 transition-all duration-300 flex flex-col justify-between shadow-xs"
    >
      {/* Cover Image */}
      <div className="relative aspect-16/10 overflow-hidden bg-[#F3EFE6] dark:bg-[#1B1E26]">
        <img
          src={category.coverImage}
          alt={category.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

        {/* Count Pill */}
        <div className="absolute top-3 right-3">
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-xs bg-[#FAF7F2]/90 dark:bg-[#0D0E12]/90 text-[#191A1E] dark:text-[#F4F2EC] backdrop-blur-xs border border-[#E6E1D6] dark:border-[#242732]">
            <LayoutGrid className="w-3 h-3 text-[#B27338]" />
            {category.templateCount ? `${category.templateCount} Templates` : 'Browse'}
          </span>
        </div>

        {/* Category Title on image overlay for bold editorial aesthetic */}
        <div className="absolute bottom-3 left-4 right-4">
          <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#F7EEE4] transition-colors drop-shadow-xs">
            {category.name}
          </h3>
        </div>
      </div>

      {/* Description & Link Bar */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
        <p className="text-xs sm:text-sm text-[#595861] dark:text-[#9E9DA6] leading-relaxed line-clamp-2">
          {category.shortDescription}
        </p>

        <div className="pt-2 border-t border-[#E6E1D6] dark:border-[#242732] flex items-center justify-between text-xs">
          <span className="text-[11px] text-[#8A8892] dark:text-[#6B6A73]">
            Tailored launch scope
          </span>
          <span className="inline-flex items-center gap-1 font-semibold text-[#B27338] dark:text-[#C88645] group-hover:translate-x-0.5 transition-transform">
            <span>Explore Category</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
};
