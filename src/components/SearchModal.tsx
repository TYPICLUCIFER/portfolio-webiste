import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight, LayoutTemplate, Sparkles, Folder } from 'lucide-react';
import { templates } from '../data/templates';
import { categories } from '../data/categories';
import { services } from '../data/services';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Parent handles opening
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const trimmed = query.trim().toLowerCase();

  const matchedTemplates = trimmed
    ? templates.filter(
        (t) =>
          t.name.toLowerCase().includes(trimmed) ||
          t.categoryName.toLowerCase().includes(trimmed) ||
          t.designStyle.toLowerCase().includes(trimmed) ||
          t.description.toLowerCase().includes(trimmed) ||
          t.features.some((f) => f.toLowerCase().includes(trimmed))
      )
    : [];

  const matchedCategories = trimmed
    ? categories.filter(
        (c) =>
          c.name.toLowerCase().includes(trimmed) ||
          c.shortDescription.toLowerCase().includes(trimmed)
      )
    : [];

  const matchedServices = trimmed
    ? services.filter(
        (s) =>
          s.title.toLowerCase().includes(trimmed) ||
          s.shortDescription.toLowerCase().includes(trimmed)
      )
    : [];

  const handleSelectTemplate = (slug: string) => {
    onClose();
    navigate(`/templates/view/${slug}`);
  };

  const handleSelectCategory = (slug: string) => {
    onClose();
    navigate(`/templates/category/${slug}`);
  };

  const handleSelectService = () => {
    onClose();
    navigate('/services');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs flex items-start justify-center pt-20 px-4 sm:px-6">
      <div
        className="relative w-full max-w-2xl bg-[#FAF7F2] dark:bg-[#14161B] border border-[#E6E1D6] dark:border-[#242732] rounded-lg shadow-2xl overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-[#E6E1D6] dark:border-[#242732] bg-[#FFFFFF] dark:bg-[#181A21]">
          <Search className="w-5 h-5 text-[#8A8892] dark:text-[#6B6A73] mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search templates, categories, styles (e.g. fashion, clinic, minimal, booking)..."
            className="w-full bg-transparent text-sm text-[#191A1E] dark:text-[#F4F2EC] placeholder-[#8A8892] dark:placeholder-[#6B6A73] focus:outline-hidden"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-[#8A8892] hover:text-[#191A1E] dark:hover:text-[#F4F2EC] mr-2"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs px-2 py-1 rounded-sm bg-[#F3EFE6] dark:bg-[#242732] text-[#595861] dark:text-[#9E9DA6]"
          >
            ESC
          </button>
        </div>

        {/* Search Results Area */}
        <div className="p-4 max-h-[60vh] overflow-y-auto space-y-4">
          {!trimmed && (
            <div className="py-6 text-center text-xs text-[#8A8892] dark:text-[#6B6A73] space-y-2">
              <Sparkles className="w-6 h-6 mx-auto text-[#B27338] dark:text-[#C88645] opacity-60" />
              <p>Type to search across website templates, business niches, and services.</p>
              <div className="flex flex-wrap justify-center gap-1.5 pt-2">
                {['E-commerce', 'Healthcare', 'Corporate', 'Restaurants', 'Minimal', 'Luxury'].map(
                  (tag) => (
                    <button
                      key={tag}
                      onClick={() => setQuery(tag)}
                      className="px-2.5 py-1 rounded-full text-[11px] bg-[#F3EFE6] dark:bg-[#1C1E25] text-[#595861] dark:text-[#9E9DA6] hover:text-[#B27338] transition-colors"
                    >
                      {tag}
                    </button>
                  )
                )}
              </div>
            </div>
          )}

          {trimmed && (
            <>
              {matchedTemplates.length === 0 &&
                matchedCategories.length === 0 &&
                matchedServices.length === 0 && (
                  <div className="py-8 text-center text-sm text-[#8A8892] dark:text-[#6B6A73]">
                    No matching templates or categories found for "{query}".
                  </div>
                )}

              {/* Templates */}
              {matchedTemplates.length > 0 && (
                <div>
                  <h3 className="text-[11px] uppercase tracking-wider font-semibold text-[#8A8892] dark:text-[#6B6A73] mb-2 px-2 flex items-center gap-1.5">
                    <LayoutTemplate className="w-3.5 h-3.5 text-[#B27338] dark:text-[#C88645]" />
                    <span>Templates ({matchedTemplates.length})</span>
                  </h3>
                  <div className="space-y-1.5">
                    {matchedTemplates.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => handleSelectTemplate(item.slug)}
                        className="flex items-center justify-between p-2.5 rounded-sm hover:bg-[#F3EFE6] dark:hover:bg-[#1C1E25] cursor-pointer transition-colors group"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <img
                            src={item.coverImage}
                            alt=""
                            className="w-10 h-10 object-cover rounded-xs border border-[#E6E1D6] dark:border-[#242732] shrink-0"
                          />
                          <div className="min-w-0">
                            <h4 className="text-sm font-semibold text-[#191A1E] dark:text-[#F4F2EC] truncate group-hover:text-[#B27338] dark:group-hover:text-[#C88645]">
                              {item.name}
                            </h4>
                            <p className="text-xs text-[#595861] dark:text-[#9E9DA6] truncate">
                              {item.categoryName} • {item.designStyle}
                            </p>
                          </div>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-[#8A8892] group-hover:text-[#B27338] group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Categories */}
              {matchedCategories.length > 0 && (
                <div>
                  <h3 className="text-[11px] uppercase tracking-wider font-semibold text-[#8A8892] dark:text-[#6B6A73] mb-2 px-2 flex items-center gap-1.5">
                    <Folder className="w-3.5 h-3.5 text-[#B27338] dark:text-[#C88645]" />
                    <span>Categories ({matchedCategories.length})</span>
                  </h3>
                  <div className="space-y-1.5">
                    {matchedCategories.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => handleSelectCategory(item.slug)}
                        className="flex items-center justify-between p-2.5 rounded-sm hover:bg-[#F3EFE6] dark:hover:bg-[#1C1E25] cursor-pointer transition-colors group"
                      >
                        <div>
                          <h4 className="text-sm font-semibold text-[#191A1E] dark:text-[#F4F2EC] group-hover:text-[#B27338]">
                            {item.name}
                          </h4>
                          <p className="text-xs text-[#595861] dark:text-[#9E9DA6] line-clamp-1">
                            {item.shortDescription}
                          </p>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-[#8A8892] group-hover:text-[#B27338] group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Services */}
              {matchedServices.length > 0 && (
                <div>
                  <h3 className="text-[11px] uppercase tracking-wider font-semibold text-[#8A8892] dark:text-[#6B6A73] mb-2 px-2">
                    Services ({matchedServices.length})
                  </h3>
                  <div className="space-y-1.5">
                    {matchedServices.map((item) => (
                      <div
                        key={item.id}
                        onClick={handleSelectService}
                        className="flex items-center justify-between p-2.5 rounded-sm hover:bg-[#F3EFE6] dark:hover:bg-[#1C1E25] cursor-pointer transition-colors group"
                      >
                        <div>
                          <h4 className="text-sm font-semibold text-[#191A1E] dark:text-[#F4F2EC] group-hover:text-[#B27338]">
                            {item.title}
                          </h4>
                          <p className="text-xs text-[#595861] dark:text-[#9E9DA6] line-clamp-1">
                            {item.shortDescription}
                          </p>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-[#8A8892] group-hover:text-[#B27338] shrink-0 ml-2" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
