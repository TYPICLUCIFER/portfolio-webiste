import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { useFashionStudio } from './FashionStudioContext';
import { FASHION_PRODUCTS } from './fashionStudioData';

export const Screen2Shop: React.FC = () => {
  const { setActiveScreen, themeVariant } = useFashionStudio();
  const isDark = themeVariant === 'atelier-dark';

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [notifyEmail, setNotifyEmail] = useState('');
  const [notified, setNotified] = useState(false);

  const categories = ['All', 'T-Shirts', 'Hoodies', 'Bottoms', 'Accessories'];

  const filteredProducts = FASHION_PRODUCTS.filter((product) => {
    if (selectedCategory !== 'All' && product.category !== selectedCategory) {
      return false;
    }
    return true;
  });

  const toggleWishlist = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleNotify = (e: React.FormEvent) => {
    e.preventDefault();
    if (notifyEmail) {
      setNotified(true);
    }
  };

  return (
    <div className={`space-y-12 pb-16 ${isDark ? 'bg-[#0E0F12] text-[#F3F1EC]' : 'bg-[#FFFFFF] text-[#191A1E]'}`}>
      {/* Header Banner */}
      <section className="px-4 sm:px-8 pt-10 pb-6 border-b border-current/10 max-w-6xl mx-auto">
        <div className="space-y-2">
          <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#B27338]">
            {isDark ? 'Collection Archive' : 'All Streetwear'}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight">
            {isDark ? 'Essentials' : 'All Products'}
          </h1>
          <p className="text-xs sm:text-sm opacity-70">
            {isDark ? 'Minimal pieces. Maximum expression.' : 'Bold designs for everyday life.'}
          </p>
        </div>

        {/* Top Category Filter Pills */}
        <div className="pt-6 flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xs text-xs uppercase tracking-wider font-semibold transition-colors ${
                  selectedCategory === cat
                    ? isDark
                      ? 'bg-white text-black'
                      : 'bg-black text-white'
                    : isDark
                    ? 'bg-[#181A21] text-[#9E9DA6] hover:text-white'
                    : 'bg-[#F3EFE6] text-[#595861] hover:text-black'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4 text-xs font-mono opacity-80">
            <span>Showing {filteredProducts.length} Pieces</span>
            <span>Sort: Latest ↓</span>
          </div>
        </div>
      </section>

      {/* Main Catalog Grid */}
      <section className="px-4 sm:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => setActiveScreen('product')}
              className={`group cursor-pointer border rounded-sm overflow-hidden flex flex-col justify-between transition-all ${
                isDark
                  ? 'bg-[#13151A] border-[#22252F] hover:border-[#B27338]/60'
                  : 'bg-[#FAF8F5] border-[#E8E4DA] hover:border-black/40'
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
                      ? 'bg-black/60 text-white/80'
                      : 'bg-white/80 text-black/70'
                  }`}
                  aria-label="Wishlist"
                >
                  <Heart className="w-3.5 h-3.5 fill-current" />
                </button>

                {product.badge && (
                  <span className="absolute bottom-2.5 left-2.5 text-[9px] uppercase tracking-wider font-bold px-2 py-0.5 bg-black/80 text-white rounded-xs">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Product Info */}
              <div className="p-4 space-y-1">
                <h3 className="text-sm font-semibold truncate group-hover:text-[#B27338] transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono font-bold">
                    ₹{product.price.toLocaleString('en-IN')}
                  </span>
                  <span className="text-[11px] opacity-60">
                    {product.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Limited Collection Dropping Soon Teaser */}
      <section className="px-4 sm:px-8 max-w-6xl mx-auto">
        <div
          className={`relative rounded-sm overflow-hidden border p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 ${
            isDark ? 'bg-[#15171E] border-[#282B37]' : 'bg-[#191A1E] text-white border-[#2A2B33]'
          }`}
        >
          <div className="space-y-2 text-white text-center md:text-left">
            <span className="text-[10px] uppercase tracking-widest text-[#B27338] font-bold">
              Exclusive Release
            </span>
            <h3 className="text-2xl font-bold uppercase tracking-tight">
              Limited Collection Dropping Soon
            </h3>
            <p className="text-xs text-white/70">
              Be the first to know when the next edition launches. Early access via SMS / Email.
            </p>
          </div>

          <div className="w-full md:w-auto">
            {notified ? (
              <span className="text-xs text-emerald-400 font-semibold px-4 py-2 border border-emerald-500/30 rounded-xs bg-emerald-500/10">
                ✓ You will be notified on launch day!
              </span>
            ) : (
              <form onSubmit={handleNotify} className="flex gap-2">
                <input
                  type="email"
                  value={notifyEmail}
                  onChange={(e) => setNotifyEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="px-3 py-2 text-xs rounded-xs bg-black/40 border border-white/20 text-white placeholder-white/50 focus:outline-hidden"
                />
                <button
                  type="submit"
                  className="px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-xs bg-white text-black hover:bg-[#F3EFE6] shrink-0"
                >
                  Notify Me
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
