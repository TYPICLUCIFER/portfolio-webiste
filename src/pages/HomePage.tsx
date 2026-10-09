import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Sparkles,
  CheckCircle,
  Eye,
  ExternalLink,
  Globe,
  Palette,
  RefreshCw,
  Server,
  ShieldCheck,
  ShoppingBag,
} from 'lucide-react';
import { categories } from '../data/categories';
import { templates, getFeaturedTemplates } from '../data/templates';
import { howItWorksSteps } from '../data/howItWorks';
import { services } from '../data/services';
import { pricingPlans } from '../data/pricing';
import { portfolioItems } from '../data/portfolio';
import { TrustMetrics } from '../components/TrustMetrics';
import { SectionHeader } from '../components/SectionHeader';
import { TemplateCard } from '../components/TemplateCard';
import { CategoryCard } from '../components/CategoryCard';
import { useQuoteModal } from '../context/QuoteModalContext';
import { usePreviewModal } from '../context/PreviewModalContext';

export const HomePage: React.FC = () => {
  const { openQuoteModal } = useQuoteModal();
  const { openPreview } = usePreviewModal();
  const featuredTemplates = getFeaturedTemplates().slice(0, 4);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="w-5 h-5 text-[#B27338] dark:text-[#C88645]" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5 text-[#B27338] dark:text-[#C88645]" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-[#B27338] dark:text-[#C88645]" />;
      case 'RefreshCw':
        return <RefreshCw className="w-5 h-5 text-[#B27338] dark:text-[#C88645]" />;
      case 'Server':
        return <Server className="w-5 h-5 text-[#B27338] dark:text-[#C88645]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#B27338] dark:text-[#C88645]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#B27338] dark:text-[#C88645]" />;
    }
  };

  return (
    <div className="space-y-20 sm:space-y-28 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 sm:pt-20 pb-8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Headlines & Actions */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#F7EEE4] dark:bg-[#241D17] text-[#B27338] dark:text-[#C88645] border border-[#DFCBB5] dark:border-[#523E2A]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Modern Digital Studio & Template Catalogue</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#191A1E] dark:text-[#F4F2EC] leading-[1.08]">
                Beautiful Websites for Growing Brands
              </h1>

              <p className="text-base sm:text-lg text-[#595861] dark:text-[#9E9DA6] leading-relaxed max-w-xl">
                Choose from professionally designed website templates or request a custom website built specifically for your business. Fast turnarounds, clean modern code, and zero compromises on design aesthetics.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  to="/templates"
                  className="px-6 py-3.5 text-xs uppercase tracking-wider font-semibold rounded-sm bg-[#B27338] hover:bg-[#9E632B] dark:bg-[#C88645] dark:hover:bg-[#D99754] text-white shadow-xs transition-all duration-150 transform hover:-translate-y-0.5"
                >
                  Browse Templates
                </Link>

                <Link
                  to="/portfolio"
                  className="px-6 py-3.5 text-xs uppercase tracking-wider font-semibold rounded-sm border border-[#E6E1D6] dark:border-[#242732] bg-[#FFFFFF] dark:bg-[#14161B] hover:bg-[#F3EFE6] dark:hover:bg-[#1C1E25] text-[#191A1E] dark:text-[#F4F2EC] transition-colors"
                >
                  View Our Work
                </Link>
              </div>

              {/* Quick Highlight Points */}
              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-[#595861] dark:text-[#9E9DA6]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#B27338] dark:text-[#C88645]" />
                  <span>10 Business Categories</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#B27338] dark:text-[#C88645]" />
                  <span>Full Mobile Responsiveness</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#B27338] dark:text-[#C88645]" />
                  <span>Pricing in INR (from ₹5,000)</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Artwork / Desktop & Mobile Mockup Area */}
            {/* Built to easily replace with supplied assets */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
                {/* Desktop Mockup Frame */}
                <div className="relative bg-[#FFFFFF] dark:bg-[#14161B] border border-[#E6E1D6] dark:border-[#242732] rounded-lg shadow-xl overflow-hidden group">
                  {/* Window Bar */}
                  <div className="px-4 py-2.5 bg-[#F3EFE6] dark:bg-[#1C1E25] border-b border-[#E6E1D6] dark:border-[#242732] flex items-center justify-between text-xs text-[#8A8892]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                    </div>
                    <div className="text-[11px] font-mono text-[#595861] dark:text-[#9E9DA6]">
                      atelier-couture.studio
                    </div>
                    <span className="text-[10px] text-[#B27338] uppercase font-mono">Desktop View</span>
                  </div>

                  {/* Artwork Image */}
                  <div className="relative aspect-16/10 bg-[#FAF7F2] dark:bg-[#0D0E12] overflow-hidden">
                    <img
                      src={templates[0]?.desktopPreview || 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80'}
                      alt="Hero Desktop Preview Mockup"
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent flex items-end p-4">
                      <button
                        type="button"
                        onClick={() => openPreview(templates[0])}
                        className="px-3 py-1.5 rounded-sm bg-white/95 dark:bg-[#14161B]/95 text-xs font-semibold text-[#191A1E] dark:text-[#F4F2EC] flex items-center gap-1.5 shadow-md hover:bg-white"
                      >
                        <Eye className="w-3.5 h-3.5 text-[#B27338]" />
                        <span>Interactive Preview</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Floating Mobile Mockup Frame (Offset) */}
                <div className="absolute -bottom-6 -right-2 sm:-right-4 w-44 sm:w-56 bg-[#FFFFFF] dark:bg-[#14161B] border-2 border-[#E6E1D6] dark:border-[#242732] rounded-xl shadow-2xl overflow-hidden hidden sm:block">
                  <div className="px-3 py-1.5 bg-[#F3EFE6] dark:bg-[#1C1E25] border-b border-[#E6E1D6] dark:border-[#242732] flex items-center justify-between text-[10px]">
                    <div className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF5F56]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FFBD2E]" />
                    </div>
                    <span className="text-[9px] uppercase font-mono text-[#8A8892]">Mobile</span>
                  </div>
                  <div className="h-44 sm:h-56 bg-[#FAF7F2] dark:bg-[#0D0E12] overflow-hidden">
                    <img
                      src={templates[0]?.mobilePreview || 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=600&q=80'}
                      alt="Hero Mobile Preview Mockup"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>

              {/* Asset Placeholder Guide Tag */}
              <div className="mt-8 text-center sm:text-right">
                <span className="text-[11px] font-mono text-[#8A8892] dark:text-[#6B6A73] bg-[#F3EFE6] dark:bg-[#181A21] px-2 py-1 rounded-xs">
                  Hero artwork modular container • Ready for your custom brand mockups
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST INDICATORS SECTION */}
      <TrustMetrics />

      {/* 3. BROWSE BY CATEGORY SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Business Niches"
          title="Browse Website Templates by Category"
          subtitle="Explore tailored web architectures designed for 10 distinct industries. Built so you can plug in your own template designs effortlessly."
          ctaText="Explore All Categories"
          ctaHref="/templates"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </section>

      {/* 4. FEATURED TEMPLATES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Curated Selection"
          title="Featured Website Templates"
          subtitle="A glimpse of our signature designs with responsive previews, starting prices, and comprehensive feature breakdowns."
          ctaText="View Complete Catalogue"
          ctaHref="/templates"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredTemplates.map((template) => (
            <TemplateCard key={template.id} template={template} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/templates"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs uppercase tracking-wider font-semibold rounded-sm border border-[#B27338] text-[#B27338] dark:text-[#C88645] hover:bg-[#B27338] hover:text-white dark:hover:bg-[#C88645] dark:hover:text-[#0D0E12] transition-colors"
          >
            <span>Browse All {templates.length} Sample Templates</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* 5. HOW IT WORKS SECTION */}
      <section className="bg-[#FFFFFF] dark:bg-[#14161B] border-y border-[#E6E1D6] dark:border-[#242732] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Simple 4-Step Process"
            title="How We Deliver Your Website"
            subtitle="From template selection to live launch, our streamlined process ensures clarity, velocity, and craftsmanship."
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {howItWorksSteps.map((step, idx) => (
              <div
                key={step.stepNumber}
                className="relative p-6 rounded-md bg-[#FAF7F2] dark:bg-[#1B1E26] border border-[#E6E1D6] dark:border-[#242732] flex flex-col justify-between space-y-4 shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-black text-[#B27338] dark:text-[#C88645]">
                      {step.stepNumber}
                    </span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-xs bg-[#F7EEE4] dark:bg-[#241D17] text-[#B27338] dark:text-[#C88645]">
                      Step {idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#191A1E] dark:text-[#F4F2EC] mb-1">
                    {step.title}
                  </h3>

                  <p className="text-xs font-medium text-[#B27338] dark:text-[#C88645] mb-2">
                    {step.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-[#595861] dark:text-[#9E9DA6] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <ul className="pt-4 border-t border-[#E6E1D6] dark:border-[#242732] space-y-1.5 text-xs text-[#595861] dark:text-[#9E9DA6]">
                  {step.details.map((item, dIdx) => (
                    <li key={dIdx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B27338] dark:bg-[#C88645]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PORTFOLIO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Selected Case Studies"
          title="Recent Client Work"
          subtitle="Explore completed digital experiences built for growing brands, clinics, institutes, and creative studios."
          ctaText="View All Portfolio Work"
          ctaHref="/portfolio"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioItems.map((project) => (
            <div
              key={project.id}
              className="group bg-[#FFFFFF] dark:bg-[#14161B] border border-[#E6E1D6] dark:border-[#242732] rounded-md overflow-hidden hover:border-[#B27338]/60 dark:hover:border-[#C88645]/60 transition-all shadow-xs flex flex-col justify-between"
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

                <div className="pt-2 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2 py-0.5 rounded-xs bg-[#F3EFE6] dark:bg-[#1B1E26] text-[#595861] dark:text-[#9E9DA6]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-3 border-t border-[#E6E1D6] dark:border-[#242732] flex items-center justify-between text-xs">
                  <div className="text-[11px] text-[#8A8892] dark:text-[#6B6A73]">
                    {project.results[0]}
                  </div>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-semibold text-[#B27338] dark:text-[#C88645] hover:underline"
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

      {/* 7. SERVICES SECTION */}
      <section className="bg-[#FFFFFF] dark:bg-[#14161B] border-y border-[#E6E1D6] dark:border-[#242732] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Studio Offerings"
            title="Comprehensive Web Development Services"
            subtitle="Whether you need a template quickly tailored or an end-to-end bespoke digital platform, we provide engineering and design solutions."
            ctaText="View Service Details"
            ctaHref="/services"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((srv) => (
              <div
                key={srv.id}
                className="p-6 rounded-md bg-[#FAF7F2] dark:bg-[#1B1E26] border border-[#E6E1D6] dark:border-[#242732] hover:border-[#B27338]/60 transition-colors flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-sm bg-[#F7EEE4] dark:bg-[#241D17] border border-[#DFCBB5] dark:border-[#523E2A] flex items-center justify-center">
                    {getServiceIcon(srv.iconName)}
                  </div>
                  <h3 className="text-lg font-bold text-[#191A1E] dark:text-[#F4F2EC]">
                    {srv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#595861] dark:text-[#9E9DA6] leading-relaxed">
                    {srv.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E6E1D6] dark:border-[#242732] flex items-center justify-between text-xs">
                  <span className="font-semibold text-[#B27338] dark:text-[#C88645]">
                    From ₹{srv.startingPrice.toLocaleString('en-IN')}
                  </span>
                  <span className="text-[#8A8892] dark:text-[#6B6A73]">
                    {srv.timeline}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. PRICING OVERVIEW SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Clear Investment"
          title="Transparent Pricing & Service Packages"
          subtitle="Fixed-scope tiers in Indian Rupees. What you see is what you pay, with optional add-ons and zero surprise hidden charges."
          ctaText="Explore Full Pricing Guide"
          ctaHref="/pricing"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-md p-6 flex flex-col justify-between border transition-all ${
                plan.popular
                  ? 'bg-[#FFFFFF] dark:bg-[#1B1E26] border-[#B27338] dark:border-[#C88645] shadow-lg ring-1 ring-[#B27338]/20 relative'
                  : 'bg-[#FFFFFF] dark:bg-[#14161B] border-[#E6E1D6] dark:border-[#242732] shadow-xs'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-3 py-0.5 rounded-full bg-[#B27338] dark:bg-[#C88645] text-white">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-[#191A1E] dark:text-[#F4F2EC]">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-[#595861] dark:text-[#9E9DA6] mt-1 line-clamp-2">
                    {plan.description}
                  </p>
                </div>

                <div className="py-2 border-y border-[#E6E1D6] dark:border-[#242732]">
                  <span className="text-2xl font-black text-[#191A1E] dark:text-[#F4F2EC]">
                    {plan.priceRangeFormatted}
                  </span>
                  <p className="text-[11px] text-[#8A8892] dark:text-[#6B6A73] mt-0.5">
                    One-time development cost
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-2 text-xs">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[#8A8892] dark:text-[#6B6A73]">
                    What's Included:
                  </span>
                  <ul className="space-y-1.5 text-[#595861] dark:text-[#9E9DA6]">
                    {plan.includedFeatures.slice(0, 5).map((f, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-[#E6E1D6] dark:border-[#242732] space-y-2">
                <button
                  type="button"
                  onClick={() =>
                    openQuoteModal({
                      packageTierId: plan.id,
                      packageTierName: plan.name,
                    })
                  }
                  className={`w-full py-2.5 px-3 text-xs uppercase tracking-wider font-semibold rounded-sm text-center transition-colors ${
                    plan.popular
                      ? 'bg-[#B27338] hover:bg-[#9E632B] dark:bg-[#C88645] dark:hover:bg-[#D99754] text-white shadow-xs'
                      : 'border border-[#E6E1D6] dark:border-[#242732] hover:bg-[#F3EFE6] dark:hover:bg-[#181A21] text-[#191A1E] dark:text-[#F4F2EC]'
                  }`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
