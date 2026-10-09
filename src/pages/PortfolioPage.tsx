import React, { useState } from 'react';
import { Sparkles, ExternalLink, CheckCircle } from 'lucide-react';
import { portfolioItems } from '../data/portfolio';
import { useQuoteModal } from '../context/QuoteModalContext';

export const PortfolioPage: React.FC = () => {
  const { openQuoteModal } = useQuoteModal();
  const [selectedTag, setSelectedTag] = useState<string>('all');

  const categories = ['all', ...Array.from(new Set(portfolioItems.map((p) => p.category)))];

  const filteredProjects = selectedTag === 'all'
    ? portfolioItems
    : portfolioItems.filter((p) => p.category === selectedTag);

  return (
    <div className="space-y-16 pb-20">
      {/* Portfolio Hero */}
      <section className="bg-[#FFFFFF] dark:bg-[#14161B] border-b border-[#E6E1D6] dark:border-[#242732] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#F7EEE4] dark:bg-[#241D17] text-[#B27338] dark:text-[#C88645] border border-[#DFCBB5] dark:border-[#523E2A]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Realised Client Work</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#191A1E] dark:text-[#F4F2EC]">
            Selected Client Projects
          </h1>

          <p className="text-base sm:text-lg text-[#595861] dark:text-[#9E9DA6] leading-relaxed">
            A portfolio of custom digital experiences and template transformations delivered for businesses across luxury e-commerce, healthcare clinics, architecture studios, and education academies.
          </p>
        </div>
      </section>

      {/* Filter Tabs & Project Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-[#E6E1D6] dark:border-[#242732]">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedTag(cat)}
              className={`px-3.5 py-1.5 rounded-sm text-xs font-semibold capitalize whitespace-nowrap transition-colors ${
                selectedTag === cat
                  ? 'bg-[#B27338] text-white'
                  : 'bg-[#FFFFFF] dark:bg-[#14161B] border border-[#E6E1D6] dark:border-[#242732] text-[#595861] dark:text-[#9E9DA6] hover:text-[#191A1E]'
              }`}
            >
              {cat === 'all' ? 'All Projects' : cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-[#FFFFFF] dark:bg-[#14161B] border border-[#E6E1D6] dark:border-[#242732] rounded-md overflow-hidden hover:border-[#B27338]/60 transition-all flex flex-col justify-between shadow-xs"
            >
              <div className="relative aspect-16/10 overflow-hidden bg-[#F3EFE6] dark:bg-[#1B1E26]">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-xs bg-[#191A1E]/80 text-white backdrop-blur-xs">
                    {project.category}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-xs bg-[#FAF7F2]/90 dark:bg-[#0D0E12]/90 text-[#191A1E] dark:text-[#F4F2EC]">
                    {project.year}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <span className="text-xs text-[#8A8892] dark:text-[#6B6A73]">
                    {project.client}
                  </span>
                  <h3 className="text-xl font-bold text-[#191A1E] dark:text-[#F4F2EC] group-hover:text-[#B27338] transition-colors mt-0.5">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#595861] dark:text-[#9E9DA6] mt-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Key measurable outcomes */}
                <div className="pt-2 space-y-1 text-xs text-[#595861] dark:text-[#9E9DA6]">
                  {project.results.map((res, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>{res}</span>
                    </div>
                  ))}
                </div>

                {/* Tag Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2 py-0.5 rounded-xs bg-[#F3EFE6] dark:bg-[#1B1E26] text-[#595861] dark:text-[#9E9DA6]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-[#E6E1D6] dark:border-[#242732] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => openQuoteModal({ businessName: `Inspired by ${project.title}` })}
                    className="text-xs font-semibold text-[#B27338] dark:text-[#C88645] hover:underline"
                  >
                    Build something like this →
                  </button>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-[#595861] dark:text-[#9E9DA6] hover:text-[#191A1E] dark:hover:text-[#F4F2EC]"
                    >
                      <span>Live Site</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-md bg-[#FAF7F2] dark:bg-[#1B1E26] border border-[#E6E1D6] dark:border-[#242732] text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191A1E] dark:text-[#F4F2EC]">
            Ready to build your next flagship website?
          </h2>
          <p className="text-sm text-[#595861] dark:text-[#9E9DA6] max-w-xl mx-auto">
            Whether starting with one of our ready templates or designing a completely bespoke solution, we are ready to bring your vision to reality.
          </p>
          <button
            type="button"
            onClick={() => openQuoteModal()}
            className="px-6 py-3 text-xs uppercase tracking-wider font-semibold rounded-sm bg-[#B27338] text-white hover:bg-[#9E632B]"
          >
            Start Your Project
          </button>
        </div>
      </section>
    </div>
  );
};
