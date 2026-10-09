import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Search,
  Filter,
  SlidersHorizontal,
  LayoutGrid,
  List,
  RotateCcw,
  Sparkles,
  ArrowUpDown,
  Check,
} from 'lucide-react';
import { templates } from '../data/templates';
import { categories } from '../data/categories';
import { TemplateCard } from '../components/TemplateCard';
import type { DesignStyle, TemplateFeature } from '../types';

const DESIGN_STYLES: DesignStyle[] = [
  'Minimal',
  'Luxury',
  'Modern',
  'Editorial',
  'Corporate',
  'Creative',
  'Bold',
];

const FEATURE_FILTERS: TemplateFeature[] = [
  'E-commerce',
  'Booking',
  'Blog',
  'Dashboard',
  'Contact Form',
  'Portfolio',
];

const SORT_OPTIONS = [
  { id: 'featured', label: 'Featured First' },
  { id: 'price-low', label: 'Price: Low to High' },
  { id: 'price-high', label: 'Price: High to Low' },
  { id: 'newest', label: 'Newest First' },
  { id: 'name-az', label: 'Name: A to Z' },
];

export const CataloguePage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Filter state
  const initialCategory = searchParams.get('category') || 'all';
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStyles, setSelectedStyles] = useState<DesignStyle[]>([]);
  const [selectedFeatures, setSelectedFeatures] = useState<TemplateFeature[]>([]);
  const [priceMax, setPriceMax] = useState<number>(50000);
  const [sortBy, setSortBy] = useState<string>('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // Pagination / Load More
  const ITEMS_PER_PAGE = 8;
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  // Toggle filter items
  const toggleStyle = (style: DesignStyle) => {
    setSelectedStyles((prev) =>
      prev.includes(style) ? prev.filter((s) => s !== style) : [...prev, style]
    );
  };

  const toggleFeature = (feature: TemplateFeature) => {
    setSelectedFeatures((prev) =>
      prev.includes(feature) ? prev.filter((f) => f !== feature) : [...prev, feature]
    );
  };

  const clearAllFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
    setSelectedStyles([]);
    setSelectedFeatures([]);
    setPriceMax(50000);
    setSortBy('featured');
    setSearchParams({});
    setVisibleCount(ITEMS_PER_PAGE);
  };

  // Filtered & Sorted Templates
  const filteredTemplates = useMemo(() => {
    return templates
      .filter((t) => {
        // Category filter
        if (selectedCategory !== 'all' && t.category !== selectedCategory) {
          return false;
        }

        // Search query
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matches =
            t.name.toLowerCase().includes(q) ||
            t.categoryName.toLowerCase().includes(q) ||
            t.description.toLowerCase().includes(q) ||
            t.designStyle.toLowerCase().includes(q);
          if (!matches) return false;
        }

        // Style filter
        if (selectedStyles.length > 0 && !selectedStyles.includes(t.designStyle)) {
          return false;
        }

        // Features filter
        if (
          selectedFeatures.length > 0 &&
          !selectedFeatures.every((feat) => t.features.includes(feat))
        ) {
          return false;
        }

        // Max price filter
        if (t.startingPrice > priceMax) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'featured') {
          if (a.featured === b.featured) return 0;
          return a.featured ? -1 : 1;
        }
        if (sortBy === 'price-low') {
          return a.startingPrice - b.startingPrice;
        }
        if (sortBy === 'price-high') {
          return b.startingPrice - a.startingPrice;
        }
        if (sortBy === 'newest') {
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        }
        if (sortBy === 'name-az') {
          return a.name.localeCompare(b.name);
        }
        return 0;
      });
  }, [
    selectedCategory,
    searchQuery,
    selectedStyles,
    selectedFeatures,
    priceMax,
    sortBy,
  ]);

  const visibleTemplates = filteredTemplates.slice(0, visibleCount);
  const hasActiveFilters =
    selectedCategory !== 'all' ||
    searchQuery.trim() !== '' ||
    selectedStyles.length > 0 ||
    selectedFeatures.length > 0 ||
    priceMax < 50000;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10">
      {/* Page Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#F7EEE4] dark:bg-[#241D17] text-[#B27338] dark:text-[#C88645] border border-[#DFCBB5] dark:border-[#523E2A]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Curated Architecture</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#191A1E] dark:text-[#F4F2EC]">
          Website Template Catalogue
        </h1>

        <p className="text-base text-[#595861] dark:text-[#9E9DA6] leading-relaxed">
          Filter by industry, aesthetic style, features, and price range. Every template includes fully responsive layouts, clean code, and fast delivery.
        </p>
      </div>

      {/* Main Layout: Filters Sidebar + Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        {/* DESKTOP FILTER SIDEBAR */}
        <div className="hidden lg:block lg:col-span-1 space-y-6 bg-[#FFFFFF] dark:bg-[#14161B] border border-[#E6E1D6] dark:border-[#242732] p-5 rounded-md shadow-xs">
          <div className="flex items-center justify-between pb-3 border-b border-[#E6E1D6] dark:border-[#242732]">
            <span className="text-xs uppercase tracking-widest font-bold text-[#191A1E] dark:text-[#F4F2EC] flex items-center gap-2">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#B27338]" /> Filters
            </span>
            {hasActiveFilters && (
              <button
                type="button"
                onClick={clearAllFilters}
                className="text-xs text-[#B27338] dark:text-[#C88645] hover:underline flex items-center gap-1"
              >
                <RotateCcw className="w-3 h-3" /> Clear All
              </button>
            )}
          </div>

          {/* Category Dropdown/Radio */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-[#191A1E] dark:text-[#F4F2EC]">
              Business Category
            </label>
            <div className="space-y-1 max-h-48 overflow-y-auto pr-1">
              <button
                type="button"
                onClick={() => setSelectedCategory('all')}
                className={`w-full text-left px-2 py-1.5 rounded-xs text-xs flex items-center justify-between transition-colors ${
                  selectedCategory === 'all'
                    ? 'bg-[#F7EEE4] dark:bg-[#241D17] text-[#B27338] dark:text-[#C88645] font-semibold'
                    : 'text-[#595861] dark:text-[#9E9DA6] hover:bg-[#F3EFE6] dark:hover:bg-[#1B1E26]'
                }`}
              >
                <span>All Categories</span>
                <span>({templates.length})</span>
              </button>
              {categories.map((cat) => {
                const count = templates.filter((t) => t.category === cat.id).length;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.slug)}
                    className={`w-full text-left px-2 py-1.5 rounded-xs text-xs flex items-center justify-between transition-colors ${
                      selectedCategory === cat.slug
                        ? 'bg-[#F7EEE4] dark:bg-[#241D17] text-[#B27338] dark:text-[#C88645] font-semibold'
                        : 'text-[#595861] dark:text-[#9E9DA6] hover:bg-[#F3EFE6] dark:hover:bg-[#1B1E26]'
                    }`}
                  >
                    <span className="truncate">{cat.name}</span>
                    <span>({count})</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Price Range Slider */}
          <div className="space-y-2 pt-4 border-t border-[#E6E1D6] dark:border-[#242732]">
            <div className="flex items-center justify-between text-xs">
              <label className="font-bold uppercase tracking-wider text-[#191A1E] dark:text-[#F4F2EC]">
                Max Starting Price
              </label>
              <span className="font-mono font-semibold text-[#B27338] dark:text-[#C88645]">
                ₹{priceMax.toLocaleString('en-IN')}
              </span>
            </div>
            <input
              type="range"
              min="8000"
              max="50000"
              step="2000"
              value={priceMax}
              onChange={(e) => setPriceMax(Number(e.target.value))}
              className="w-full accent-[#B27338] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-[#8A8892]">
              <span>₹8,000</span>
              <span>₹50,000</span>
            </div>
          </div>

          {/* Design Style Filter */}
          <div className="space-y-2 pt-4 border-t border-[#E6E1D6] dark:border-[#242732]">
            <label className="text-xs font-bold uppercase tracking-wider text-[#191A1E] dark:text-[#F4F2EC]">
              Design Style
            </label>
            <div className="flex flex-wrap gap-1.5">
              {DESIGN_STYLES.map((style) => {
                const active = selectedStyles.includes(style);
                return (
                  <button
                    key={style}
                    type="button"
                    onClick={() => toggleStyle(style)}
                    className={`px-2.5 py-1 text-xs rounded-xs border transition-colors ${
                      active
                        ? 'bg-[#B27338] text-white border-[#B27338]'
                        : 'bg-[#FAF7F2] dark:bg-[#1B1E26] border-[#E6E1D6] dark:border-[#242732] text-[#595861] dark:text-[#9E9DA6] hover:border-[#B27338]/60'
                    }`}
                  >
                    {style}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Feature Filters */}
          <div className="space-y-2 pt-4 border-t border-[#E6E1D6] dark:border-[#242732]">
            <label className="text-xs font-bold uppercase tracking-wider text-[#191A1E] dark:text-[#F4F2EC]">
              Key Features
            </label>
            <div className="space-y-1.5">
              {FEATURE_FILTERS.map((feat) => {
                const active = selectedFeatures.includes(feat);
                return (
                  <label
                    key={feat}
                    onClick={() => toggleFeature(feat)}
                    className="flex items-center gap-2 text-xs text-[#595861] dark:text-[#9E9DA6] cursor-pointer hover:text-[#191A1E] dark:hover:text-[#F4F2EC]"
                  >
                    <div
                      className={`w-3.5 h-3.5 rounded-xs border flex items-center justify-center transition-colors ${
                        active
                          ? 'bg-[#B27338] border-[#B27338] text-white'
                          : 'border-[#E6E1D6] dark:border-[#242732]'
                      }`}
                    >
                      {active && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                    </div>
                    <span>{feat}</span>
                  </label>
                );
              })}
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT: TOOLBAR + TEMPLATE GRID */}
        <div className="lg:col-span-3 space-y-6">
          {/* Top Control Bar: Search, Sort, View Toggle, Mobile Filter Trigger */}
          <div className="bg-[#FFFFFF] dark:bg-[#14161B] border border-[#E6E1D6] dark:border-[#242732] p-4 rounded-md shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3">
            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-[#8A8892] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search templates or styles..."
                className="w-full pl-9 pr-3 py-1.5 text-xs rounded-sm bg-[#FAF7F2] dark:bg-[#1B1E26] border border-[#E6E1D6] dark:border-[#242732] text-[#191A1E] dark:text-[#F4F2EC] placeholder-[#8A8892] focus:outline-hidden focus:ring-1 focus:ring-[#B27338]"
              />
            </div>

            {/* Mobile Filters Toggle */}
            <button
              type="button"
              onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
              className="lg:hidden w-full sm:w-auto px-3 py-1.5 text-xs font-semibold rounded-sm border border-[#E6E1D6] dark:border-[#242732] flex items-center justify-center gap-1.5 text-[#191A1E] dark:text-[#F4F2EC]"
            >
              <Filter className="w-3.5 h-3.5" />
              <span>Filters {hasActiveFilters && '(Active)'}</span>
            </button>

            {/* Sort & Grid/List View Controls */}
            <div className="flex items-center justify-between w-full sm:w-auto gap-3">
              <div className="flex items-center gap-1.5 text-xs text-[#595861] dark:text-[#9E9DA6]">
                <ArrowUpDown className="w-3.5 h-3.5 text-[#8A8892]" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent text-xs font-medium text-[#191A1E] dark:text-[#F4F2EC] focus:outline-hidden cursor-pointer"
                >
                  {SORT_OPTIONS.map((opt) => (
                    <option key={opt.id} value={opt.id}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* View Mode Switcher */}
              <div className="flex items-center border border-[#E6E1D6] dark:border-[#242732] rounded-xs overflow-hidden">
                <button
                  type="button"
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 transition-colors ${
                    viewMode === 'grid'
                      ? 'bg-[#F3EFE6] dark:bg-[#1B1E26] text-[#B27338] dark:text-[#C88645]'
                      : 'text-[#8A8892] hover:text-[#191A1E]'
                  }`}
                  aria-label="Grid layout"
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('list')}
                  className={`p-1.5 transition-colors ${
                    viewMode === 'list'
                      ? 'bg-[#F3EFE6] dark:bg-[#1B1E26] text-[#B27338] dark:text-[#C88645]'
                      : 'text-[#8A8892] hover:text-[#191A1E]'
                  }`}
                  aria-label="List layout"
                >
                  <List className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Results Summary Bar */}
          <div className="flex items-center justify-between text-xs text-[#8A8892] dark:text-[#6B6A73] px-1">
            <span>
              Showing <strong className="text-[#191A1E] dark:text-[#F4F2EC]">{visibleTemplates.length}</strong> of{' '}
              <strong className="text-[#191A1E] dark:text-[#F4F2EC]">{filteredTemplates.length}</strong> matching templates
            </span>

            {hasActiveFilters && (
              <button
                type="button"
                onClick={clearAllFilters}
                className="text-[#B27338] dark:text-[#C88645] hover:underline"
              >
                Reset filters
              </button>
            )}
          </div>

          {/* TEMPLATE CARDS GRID / LIST */}
          {visibleTemplates.length === 0 ? (
            /* Empty State */
            <div className="bg-[#FFFFFF] dark:bg-[#14161B] border border-[#E6E1D6] dark:border-[#242732] rounded-md p-12 text-center space-y-4">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#F7EEE4] dark:bg-[#241D17] text-[#B27338] dark:text-[#C88645] flex items-center justify-center">
                <SlidersHorizontal className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#191A1E] dark:text-[#F4F2EC]">
                No templates match your filters
              </h3>
              <p className="text-sm text-[#595861] dark:text-[#9E9DA6] max-w-sm mx-auto">
                Try widening your price range, choosing fewer feature filters, or clearing your search query.
              </p>
              <button
                type="button"
                onClick={clearAllFilters}
                className="px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-sm bg-[#B27338] text-white hover:bg-[#9E632B]"
              >
                Clear All Filters
              </button>
            </div>
          ) : viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleTemplates.map((template) => (
                <TemplateCard key={template.id} template={template} viewMode="grid" />
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {visibleTemplates.map((template) => (
                <TemplateCard key={template.id} template={template} viewMode="list" />
              ))}
            </div>
          )}

          {/* Load More Button / Pagination */}
          {filteredTemplates.length > visibleCount && (
            <div className="pt-6 text-center">
              <button
                type="button"
                onClick={() => setVisibleCount((prev) => prev + ITEMS_PER_PAGE)}
                className="px-6 py-2.5 text-xs uppercase tracking-wider font-semibold rounded-sm border border-[#E6E1D6] dark:border-[#242732] bg-[#FFFFFF] dark:bg-[#14161B] hover:bg-[#F3EFE6] dark:hover:bg-[#1B1E26] text-[#191A1E] dark:text-[#F4F2EC] transition-colors"
              >
                Load More Templates ({filteredTemplates.length - visibleCount} remaining)
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
