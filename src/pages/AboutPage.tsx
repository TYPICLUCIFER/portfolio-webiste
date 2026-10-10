import React from 'react';
import { Sparkles, CheckCircle, CodeXml, Palette, Zap, ArrowRight, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { useQuoteModal } from '../context/QuoteModalContext';

export const AboutPage: React.FC = () => {
  const { openQuoteModal } = useQuoteModal();

  const principles = [
    {
      title: 'Restrained, Editorial Aesthetics',
      description: 'We avoid overdesigned gradients, chaotic animations, and generic cookie-cutter templates. Every layout utilizes balanced whitespace, sharp typographic hierarchy, and warm organic palettes.',
      icon: <Palette className="w-5 h-5 text-[#B27338] dark:text-[#C88645]" />,
    },
    {
      title: 'Performance & Zero-Bloat Engineering',
      description: 'Built with modern React and clean web standards. No sluggish WordPress page builder plugins or fragile drag-and-drop systems. Your website loads in sub-second times across mobile devices.',
      icon: <Zap className="w-5 h-5 text-[#B27338] dark:text-[#C88645]" />,
    },
    {
      title: 'Modular, Future-Proof Architecture',
      description: 'Templates and custom builds are designed so new categories, products, team members, or blogs can be added effortlessly as your brand scales.',
      icon: <CodeXml className="w-5 h-5 text-[#B27338] dark:text-[#C88645]" />,
    },
    {
      title: 'Total Ownership & Transparency',
      description: 'You own 100% of your code, assets, domain, and data. No predatory hosting lock-ins or recurring licensing fees just to keep your website live.',
      icon: <ShieldCheck className="w-5 h-5 text-[#B27338] dark:text-[#C88645]" />,
    },
  ];

  return (
    <div className="space-y-16 pb-20">
      {/* About Hero */}
      <section className="bg-[#FFFFFF] dark:bg-[#14161B] border-b border-[#E6E1D6] dark:border-[#242732] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#F7EEE4] dark:bg-[#241D17] text-[#B27338] dark:text-[#C88645] border border-[#DFCBB5] dark:border-[#523E2A]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Studio Ethos</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#191A1E] dark:text-[#F4F2EC]">
            Crafting Digital Presence for Growing Brands
          </h1>

          <p className="text-base sm:text-lg text-[#595861] dark:text-[#9E9DA6] leading-relaxed">
            {siteConfig.brandName} is an independent web development studio. We bridge the gap between expensive bespoke agencies and clunky, generic template sites.
          </p>
        </div>
      </section>

      {/* Story & Philosophy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191A1E] dark:text-[#F4F2EC]">
              Why the Template + Custom Approach Wins
            </h2>
            <p className="text-sm sm:text-base text-[#595861] dark:text-[#9E9DA6] leading-relaxed">
              Most businesses face a frustrating dilemma: hire a slow, expensive agency engagement, or wrestle with frustrating DIY website builders that look generic and break easily.
            </p>
            <p className="text-sm sm:text-base text-[#595861] dark:text-[#9E9DA6] leading-relaxed">
              Our studio solves this. We pre-engineer refined, conversion-tested website architectures across 10 business categories. When you choose an architecture, we tailor the typography, imagery, copy, and backend integrations to your brand identity in days rather than months.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => openQuoteModal()}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-wider font-semibold rounded-sm bg-[#B27338] text-white hover:bg-[#9E632B]"
              >
                <span>Partner with Us</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="p-8 rounded-md bg-[#FAF7F2] dark:bg-[#1B1E26] border border-[#E6E1D6] dark:border-[#242732] space-y-4">
              <h3 className="text-lg font-bold text-[#191A1E] dark:text-[#F4F2EC]">
                What You Can Expect
              </h3>
              <ul className="space-y-3 text-sm text-[#595861] dark:text-[#9E9DA6]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>Direct communication with the developer coding your website.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>Firm milestone deadlines and realistic delivery schedules.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>Sub-second page speeds scored 90+ on Google PageSpeed.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>Clean codebase ready for your supplied design assets.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Design Principles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191A1E] dark:text-[#F4F2EC]">
            Our Core Studio Principles
          </h2>
          <p className="text-sm text-[#595861] dark:text-[#9E9DA6]">
            Every line of code and visual touchpoint adheres to these four standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {principles.map((pr, idx) => (
            <div
              key={idx}
              className="p-6 rounded-md bg-[#FFFFFF] dark:bg-[#14161B] border border-[#E6E1D6] dark:border-[#242732] space-y-3 shadow-xs"
            >
              <div className="w-10 h-10 rounded-sm bg-[#F7EEE4] dark:bg-[#241D17] border border-[#DFCBB5] dark:border-[#523E2A] flex items-center justify-center">
                {pr.icon}
              </div>
              <h3 className="text-lg font-bold text-[#191A1E] dark:text-[#F4F2EC]">
                {pr.title}
              </h3>
              <p className="text-sm text-[#595861] dark:text-[#9E9DA6] leading-relaxed">
                {pr.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
