import React, { useState } from 'react';
import { ArrowRight, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { useFashionStudio } from './FashionStudioContext';
import { FASHION_PRODUCTS } from './fashionStudioData';

export const Screen1Home: React.FC = () => {
  const { setActiveScreen, themeVariant } = useFashionStudio();
  const isDark = themeVariant === 'atelier-dark';

  const [wishlist, setWishlist] = useState<string[]>([]);
  const [carouselIndex, setCarouselIndex] = useState(1);

  const toggleWishlist = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const newArrivals = FASHION_PRODUCTS.slice(0, 4);

  return (
    <div className={`space-y-16 pb-16 ${isDark ? 'bg-[#0E0F12] text-[#F3F1EC]' : 'bg-[#FFFFFF] text-[#191A1E]'}`}>
      {/* 1. HERO SECTION */}
      <section className="relative px-4 sm:px-8 pt-8 pb-12 overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Hero Copy */}
          <div className="md:col-span-6 space-y-6 z-10">
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#B27338] block">
              {isDark ? 'Autumn / Winter Edition 2026' : 'Streetwear Drop 04'}
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[1.05]">
              {isDark ? (
                <>
                  Wear A <br />
                  Different <br />
                  Perspective
                </>
              ) : (
                <>
                  More <br />
                  Than <br />
                  Clothing
                </>
              )}
            </h1>

            <p className="text-sm sm:text-base opacity-75 max-w-md leading-relaxed font-light">
              {isDark
                ? 'Timeless designs for a more thoughtful everyday. Heavyweight cotton silhouettes tailored for effortless expression.'
                : 'Streetwear with a story. Designed for everyday rebels who appreciate meticulous construction.'}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => setActiveScreen('shop')}
                className={`px-6 py-3.5 text-xs uppercase tracking-widest font-bold transition-all flex items-center gap-2 ${
                  isDark
                    ? 'bg-white text-black hover:bg-[#F3EFE6]'
                    : 'bg-black text-white hover:bg-[#252525]'
                }`}
              >
                <span>{isDark ? 'Explore Collections' : 'Shop Now'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                type="button"
                onClick={() => setActiveScreen('product')}
                className={`px-5 py-3.5 text-xs uppercase tracking-widest font-semibold border transition-colors ${
                  isDark
                    ? 'border-[#2C2F3A] hover:bg-[#1B1E26] text-white'
                    : 'border-[#E6E1D6] hover:bg-[#F7F5F0] text-black'
                }`}
              >
                Featured Drop
              </button>
            </div>

            {/* Carousel indicator */}
            <div className="pt-6 flex items-center gap-3 text-xs opacity-60 font-mono">
              <button
                type="button"
                onClick={() => setCarouselIndex((prev) => (prev === 1 ? 3 : prev - 1))}
                className="p-1 hover:opacity-100"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span>0{carouselIndex} / 03</span>
              <button
                type="button"
                onClick={() => setCarouselIndex((prev) => (prev === 3 ? 1 : prev + 1))}
                className="p-1 hover:opacity-100"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Hero Model Artwork */}
          <div className="md:col-span-6 relative">
            <div
              onClick={() => setActiveScreen('product')}
              className={`relative aspect-4/5 rounded-sm overflow-hidden cursor-pointer group shadow-2xl border ${
                isDark ? 'border-[#22252F]' : 'border-[#E6E1D6]'
              }`}
            >
              <img
                src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=1200&q=80"
                alt="Model in streetwear hoodie"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                <div className="text-white space-y-1">
                  <span className="text-[10px] uppercase tracking-widest font-bold px-2 py-0.5 bg-black/80 rounded-xs">
                    Freedom Tee & Hoodie Drop
                  </span>
                  <p className="text-sm font-semibold flex items-center gap-1">
                    Click to view Freedom Tee product page →
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. NEW ARRIVALS */}
      <section className="px-4 sm:px-8 max-w-6xl mx-auto space-y-6">
        <div className="flex items-center justify-between border-b pb-3 border-current/10">
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#B27338] block">
              Curated Pieces
            </span>
            <h2 className="text-2xl font-bold uppercase tracking-tight">
              New Arrivals
            </h2>
          </div>

          <button
            type="button"
            onClick={() => setActiveScreen('shop')}
            className="text-xs uppercase tracking-wider font-semibold hover:text-[#B27338] flex items-center gap-1"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {newArrivals.map((product) => (
            <div
              key={product.id}
              onClick={() => setActiveScreen('product')}
              className={`group cursor-pointer border rounded-sm overflow-hidden flex flex-col justify-between transition-all ${
                isDark
                  ? 'bg-[#13151A] border-[#22252F] hover:border-[#B27338]/50'
                  : 'bg-[#FAF8F5] border-[#E8E4DA] hover:border-black/30'
              }`}
            >
              {/* Product Photo */}
              <div className="relative aspect-3/4 overflow-hidden bg-black/5">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <button
                  type="button"
                  onClick={(e) => toggleWishlist(product.id, e)}
                  className={`absolute top-2.5 right-2.5 p-1.5 rounded-full transition-colors ${
                    wishlist.includes(product.id)
                      ? 'bg-rose-500 text-white'
                      : isDark
                      ? 'bg-black/60 text-white/80 hover:text-white'
                      : 'bg-white/80 text-black/70 hover:text-black'
                  }`}
                  aria-label="Save item"
                >
                  <Heart className="w-3.5 h-3.5 fill-current" />
                </button>
              </div>

              {/* Product Details */}
              <div className="p-3.5 space-y-1">
                <h3 className="text-xs sm:text-sm font-semibold truncate group-hover:text-[#B27338] transition-colors">
                  {product.name}
                </h3>
                <p className="text-xs font-mono font-bold opacity-80">
                  ₹{product.price.toLocaleString('en-IN')}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. BRAND PILLARS BANNER */}
      <section className="px-4 sm:px-8 max-w-6xl mx-auto">
        <div
          className={`relative rounded-sm overflow-hidden border p-8 sm:p-12 ${
            isDark
              ? 'bg-[#15171E] border-[#282B37]'
              : 'bg-[#191A1E] text-white border-[#2A2B33]'
          }`}
        >
          <div className="max-w-xl space-y-4 text-white">
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#B27338]">
              Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight">
              {isDark ? 'Built For The Ones Who Notice' : 'Designed For Real People'}
            </h2>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light">
              Comfort. Quality. Expression. We believe everyday clothing should outlive micro-trends through heavy fabrics and deliberate design.
            </p>
            <div>
              <button
                type="button"
                onClick={() => setActiveScreen('about')}
                className="px-5 py-2.5 text-xs uppercase tracking-widest font-semibold bg-white text-black hover:bg-[#F3EFE6] transition-colors inline-flex items-center gap-2"
              >
                <span>Our Story</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* 4 Feature Badges at bottom */}
          <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-3 text-[11px] text-white/80 uppercase tracking-wider font-mono">
            <div>⬡ Premium Fabrics</div>
            <div>⬡ Ethical Production</div>
            <div>⬡ Made For You</div>
            <div>⬡ Worldwide Shipping</div>
          </div>
        </div>
      </section>

      {/* 4. SHOP BY CATEGORY */}
      <section className="px-4 sm:px-8 max-w-6xl mx-auto space-y-6">
        <div className="flex items-center justify-between border-b pb-3 border-current/10">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight">
              Shop by Category
            </h2>
          </div>
          <button
            type="button"
            onClick={() => setActiveScreen('shop')}
            className="text-xs uppercase tracking-wider font-semibold hover:text-[#B27338]"
          >
            View All →
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              name: 'T-Shirts',
              image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80',
            },
            {
              name: 'Hoodies',
              image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=600&q=80',
            },
            {
              name: 'Bottoms',
              image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=600&q=80',
            },
            {
              name: 'Accessories',
              image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=600&q=80',
            },
          ].map((cat) => (
            <div
              key={cat.name}
              onClick={() => setActiveScreen('shop')}
              className="relative aspect-square rounded-sm overflow-hidden cursor-pointer group shadow-sm"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center p-4">
                <span className="text-white text-sm font-bold uppercase tracking-widest text-center border-b border-transparent group-hover:border-white transition-all">
                  {cat.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
