import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Sparkles,
  CheckCircle,
  ShoppingBag,
  GraduationCap,
  Stethoscope,
  Dumbbell,
  Briefcase,
  Building2,
  Utensils,
  UserCheck,
  Compass,
  CalendarHeart,
  LayoutGrid,
} from 'lucide-react';
import { getCategoryBySlug, categories } from '../data/categories';
import { getTemplatesByCategory } from '../data/templates';
import { TemplateCard } from '../components/TemplateCard';
import { useQuoteModal } from '../context/QuoteModalContext';

const iconMap: Record<string, React.ReactNode> = {
  ShoppingBag: <ShoppingBag className="w-5 h-5 text-[#B27338]" />,
  GraduationCap: <GraduationCap className="w-5 h-5 text-[#B27338]" />,
  Stethoscope: <Stethoscope className="w-5 h-5 text-[#B27338]" />,
  Dumbbell: <Dumbbell className="w-5 h-5 text-[#B27338]" />,
  Briefcase: <Briefcase className="w-5 h-5 text-[#B27338]" />,
  Building2: <Building2 className="w-5 h-5 text-[#B27338]" />,
  Utensils: <Utensils className="w-5 h-5 text-[#B27338]" />,
  UserCheck: <UserCheck className="w-5 h-5 text-[#B27338]" />,
  Compass: <Compass className="w-5 h-5 text-[#B27338]" />,
  CalendarHeart: <CalendarHeart className="w-5 h-5 text-[#B27338]" />,
};

export const CategoryPage: React.FC = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const { openQuoteModal } = useQuoteModal();
  const [selectedStyleFilter, setSelectedStyleFilter] = useState<string>('all');

  const category = categorySlug ? getCategoryBySlug(categorySlug) : undefined;
  const categoryTemplates = categorySlug ? getTemplatesByCategory(categorySlug) : [];

  if (!category) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <h1 className="text-2xl font-bold text-[#191A1E] dark:text-[#F4F2EC]">
          Category Not Found
        </h1>
        <p className="text-sm text-[#595861] dark:text-[#9E9DA6]">
          The category you requested does not exist or may have been renamed.
        </p>
        <Link
          to="/templates"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-[#B27338] text-white text-xs font-semibold uppercase tracking-wider"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Return to Catalogue
        </Link>
      </div>
    );
  }

  // Filter templates by style
  const filteredTemplates = categoryTemplates.filter((t) => {
    if (selectedStyleFilter === 'all') return true;
    return t.designStyle.toLowerCase() === selectedStyleFilter.toLowerCase();
  });

  const availableStyles = Array.from(new Set(categoryTemplates.map((t) => t.designStyle)));

  return (
    <div className="space-y-16 pb-20">
      {/* Category Hero Banner */}
      <section className="relative bg-[#FFFFFF] dark:bg-[#14161B] border-b border-[#E6E1D6] dark:border-[#242732] py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl space-y-4">
              {/* Back to Catalogue Breadcrumb */}
              <Link
                to="/templates"
                className="inline-flex items-center gap-1.5 text-xs text-[#8A8892] dark:text-[#6B6A73] hover:text-[#B27338] dark:hover:text-[#C88645] transition-colors"
              >
                <ArrowLeft className="w-3 h-3" />
                <span>All Categories</span>
              </Link>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-sm bg-[#F7EEE4] dark:bg-[#241D17] border border-[#DFCBB5] dark:border-[#523E2A]">
                  {iconMap[category.iconName] || <LayoutGrid className="w-5 h-5 text-[#B27338]" />}
                </div>
                <span className="text-xs uppercase tracking-widest font-semibold text-[#B27338] dark:text-[#C88645]">
                  Industry Vertical
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#191A1E] dark:text-[#F4F2EC]">
                {category.name}
              </h1>

              <p className="text-base text-[#595861] dark:text-[#9E9DA6] leading-relaxed">
                {category.fullDescription}
              </p>

              {/* Metric Pill */}
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs">
                <span className="px-3 py-1 rounded-xs bg-[#F3EFE6] dark:bg-[#1B1E26] font-semibold text-[#191A1E] dark:text-[#F4F2EC]">
                  Scope planned after consultation
                </span>
                <span className="text-[#8A8892] dark:text-[#6B6A73]">
                  {categoryTemplates.length} Template Architectures Available
                </span>
              </div>
            </div>

            {/* Feature Highlights Card */}
            <div className="w-full lg:w-96 bg-[#FAF7F2] dark:bg-[#1B1E26] border border-[#E6E1D6] dark:border-[#242732] p-5 rounded-md shadow-xs space-y-3">
              <h3 className="text-xs uppercase tracking-wider font-bold text-[#191A1E] dark:text-[#F4F2EC] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#B27338]" />
                <span>Standard Architecture Inclusions</span>
              </h3>
              <ul className="space-y-2 text-xs text-[#595861] dark:text-[#9E9DA6]">
                {category.featureHighlights.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-2 border-t border-[#E6E1D6] dark:border-[#242732]">
                <button
                  type="button"
                  onClick={() => openQuoteModal({ category: category.slug })}
                  className="w-full py-2 text-center text-xs uppercase tracking-wider font-semibold rounded-sm bg-[#B27338] text-white hover:bg-[#9E632B]"
                >
                  Request Custom {category.name} Site
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Relevant Category Templates */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E6E1D6] dark:border-[#242732] pb-4">
          <div>
            <h2 className="text-2xl font-bold text-[#191A1E] dark:text-[#F4F2EC]">
              Templates for {category.name}
            </h2>
            <p className="text-xs text-[#595861] dark:text-[#9E9DA6] mt-0.5">
              Ready for your supplied designs, branding, and copywriting.
            </p>
          </div>

          {/* Style Filter Tabs */}
          {availableStyles.length > 1 && (
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
              <button
                type="button"
                onClick={() => setSelectedStyleFilter('all')}
                className={`px-3 py-1 rounded-xs text-xs font-medium transition-colors ${
                  selectedStyleFilter === 'all'
                    ? 'bg-[#B27338] text-white'
                    : 'bg-[#FAF7F2] dark:bg-[#1B1E26] text-[#595861] dark:text-[#9E9DA6]'
                }`}
              >
                All Styles
              </button>
              {availableStyles.map((style) => (
                <button
                  key={style}
                  type="button"
                  onClick={() => setSelectedStyleFilter(style)}
                  className={`px-3 py-1 rounded-xs text-xs font-medium transition-colors ${
                    selectedStyleFilter === style
                      ? 'bg-[#B27338] text-white'
                      : 'bg-[#FAF7F2] dark:bg-[#1B1E26] text-[#595861] dark:text-[#9E9DA6]'
                  }`}
                >
                  {style}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Templates Grid */}
        {filteredTemplates.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTemplates.map((template) => (
              <TemplateCard key={template.id} template={template} />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center bg-[#FFFFFF] dark:bg-[#14161B] border border-[#E6E1D6] dark:border-[#242732] rounded-md space-y-4">
            <p className="text-sm text-[#595861] dark:text-[#9E9DA6]">
              Designs for this category will be integrated as soon as supplied. We can immediately build a bespoke website in this category!
            </p>
            <button
              type="button"
              onClick={() => openQuoteModal({ category: category.slug })}
              className="px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-sm bg-[#B27338] text-white"
            >
              Request Custom Website in this Category
            </button>
          </div>
        )}
      </section>

      {/* Other Categories Switcher */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-[#E6E1D6] dark:border-[#242732]">
        <h3 className="text-xs uppercase tracking-widest font-semibold text-[#8A8892] dark:text-[#6B6A73] mb-4">
          Explore Other Industries
        </h3>
        <div className="flex flex-wrap gap-2">
          {categories
            .filter((c) => c.slug !== category.slug)
            .map((cat) => (
              <Link
                key={cat.id}
                to={`/templates/category/${cat.slug}`}
                className="px-3 py-1.5 rounded-sm bg-[#FFFFFF] dark:bg-[#14161B] border border-[#E6E1D6] dark:border-[#242732] hover:border-[#B27338] text-xs text-[#595861] dark:text-[#9E9DA6] hover:text-[#191A1E] dark:hover:text-[#F4F2EC] transition-colors"
              >
                {cat.name}
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
};
