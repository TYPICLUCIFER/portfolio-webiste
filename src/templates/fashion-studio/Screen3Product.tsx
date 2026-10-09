import React, { useState } from 'react';
import {
  Star,
  ChevronDown,
  ShoppingBag,
  Zap,
} from 'lucide-react';
import { useFashionStudio } from './FashionStudioContext';
import { FASHION_PRODUCTS } from './fashionStudioData';

export const Screen3Product: React.FC = () => {
  const { setActiveScreen, themeVariant, addToCart } = useFashionStudio();
  const isDark = themeVariant === 'atelier-dark';

  const product = FASHION_PRODUCTS[0]; // Freedom Tee

  const [selectedColor, setSelectedColor] = useState('Black');
  const [selectedSize, setSelectedSize] = useState('L');
  const [activeThumb, setActiveThumb] = useState(0);
  const [addedMessage, setAddedMessage] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string>('details');

  const galleryImages = [
    'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=1200&q=80',
  ];

  const handleAddToCart = () => {
    addToCart(product, selectedColor, selectedSize);
    setAddedMessage(true);
    setTimeout(() => setAddedMessage(false), 2500);
  };

  const handleBuyNow = () => {
    addToCart(product, selectedColor, selectedSize);
    setActiveScreen('checkout');
  };

  return (
    <div className={`space-y-16 pb-16 ${isDark ? 'bg-[#0E0F12] text-[#F3F1EC]' : 'bg-[#FFFFFF] text-[#191A1E]'}`}>
      {/* Product Stage */}
      <section className="px-4 sm:px-8 pt-8 max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <div className="text-[11px] uppercase tracking-wider opacity-60 mb-6 flex items-center gap-2">
          <button onClick={() => setActiveScreen('home')} className="hover:underline">Home</button>
          <span>/</span>
          <button onClick={() => setActiveScreen('shop')} className="hover:underline">Essentials</button>
          <span>/</span>
          <span className="opacity-100 font-semibold">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: Thumbnail Column + Large Product Photo (7 cols) */}
          <div className="lg:col-span-7 flex flex-col sm:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex sm:flex-col gap-2.5 order-2 sm:order-1 overflow-x-auto sm:overflow-visible shrink-0">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveThumb(idx)}
                  className={`w-16 h-20 rounded-xs overflow-hidden border transition-all ${
                    activeThumb === idx
                      ? 'border-[#B27338] ring-1 ring-[#B27338]'
                      : 'border-current/10 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Main Featured Photo */}
            <div className="flex-1 aspect-4/5 rounded-sm overflow-hidden border border-current/10 bg-black/5 order-1 sm:order-2">
              <img
                src={galleryImages[activeThumb]}
                alt={product.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Right: Specifications & Purchasing (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-extrabold uppercase tracking-tight">
                {product.name}
              </h1>

              {/* Price & Rating */}
              <div className="flex items-center justify-between">
                <span className="text-2xl font-mono font-bold">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>

                <div className="flex items-center gap-1.5 text-xs">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="opacity-70 font-mono">4.8 (132 reviews)</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm opacity-75 leading-relaxed pt-1">
                {product.description}
              </p>
            </div>

            {/* Color Selector */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold uppercase tracking-wider">
                <span>Color: {selectedColor}</span>
              </div>
              <div className="flex gap-2">
                {[
                  { name: 'Black', hex: '#191A1E' },
                  { name: 'Charcoal', hex: '#3B3D44' },
                  { name: 'Bone White', hex: '#EBE7DE' },
                ].map((c) => (
                  <button
                    key={c.name}
                    type="button"
                    onClick={() => setSelectedColor(c.name)}
                    className={`w-7 h-7 rounded-full border-2 transition-transform ${
                      selectedColor === c.name
                        ? 'border-[#B27338] scale-110 shadow-xs'
                        : 'border-transparent opacity-80 hover:opacity-100'
                    }`}
                    style={{ backgroundColor: c.hex }}
                    title={c.name}
                  />
                ))}
              </div>
            </div>

            {/* Size Selector */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold uppercase tracking-wider">
                <span>Size</span>
                <button type="button" className="text-[11px] underline opacity-70 hover:opacity-100">
                  Size Guide
                </button>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {['S', 'M', 'L', 'XL'].map((sz) => (
                  <button
                    key={sz}
                    type="button"
                    onClick={() => setSelectedSize(sz)}
                    className={`py-2 text-xs font-bold uppercase tracking-wider rounded-xs border transition-colors ${
                      selectedSize === sz
                        ? isDark
                          ? 'bg-white text-black border-white'
                          : 'bg-black text-white border-black'
                        : 'border-current/20 opacity-70 hover:opacity-100'
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5 pt-2">
              <button
                type="button"
                onClick={handleAddToCart}
                className={`w-full py-3.5 px-4 text-xs uppercase tracking-widest font-bold rounded-xs transition-colors flex items-center justify-center gap-2 ${
                  isDark
                    ? 'bg-white text-black hover:bg-[#F3EFE6]'
                    : 'bg-black text-white hover:bg-[#252525]'
                }`}
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Cart — ₹{product.price.toLocaleString('en-IN')}</span>
              </button>

              <button
                type="button"
                onClick={handleBuyNow}
                className={`w-full py-3.5 px-4 text-xs uppercase tracking-widest font-bold rounded-xs border transition-colors flex items-center justify-center gap-2 ${
                  isDark
                    ? 'border-[#2C2F3A] hover:bg-[#1B1E26] text-white'
                    : 'border-[#E6E1D6] hover:bg-[#F3EFE6] text-black'
                }`}
              >
                <Zap className="w-4 h-4 text-[#B27338]" />
                <span>Buy Now with 1-Click</span>
              </button>

              {addedMessage && (
                <div className="text-center text-xs font-semibold text-emerald-500 py-1 bg-emerald-500/10 rounded-xs border border-emerald-500/20">
                  ✓ Added Freedom Tee ({selectedSize}, {selectedColor}) to your cart!
                </div>
              )}
            </div>

            {/* 4 Perk Badges */}
            <div className="py-4 border-y border-current/10 grid grid-cols-2 gap-3 text-xs opacity-80">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B27338]" />
                <span>Premium 100% Cotton</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B27338]" />
                <span>Oversized Boxy Fit</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B27338]" />
                <span>7-10 Days Dispatch</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B27338]" />
                <span>Easy 7-Day Returns</span>
              </div>
            </div>

            {/* Expandable Accordions */}
            <div className="space-y-1.5 text-xs">
              {/* Product Details */}
              <div className="border-b border-current/10 py-2.5">
                <button
                  type="button"
                  onClick={() => setOpenAccordion(openAccordion === 'details' ? '' : 'details')}
                  className="w-full flex items-center justify-between font-bold uppercase tracking-wider text-left"
                >
                  <span>Product Details</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${openAccordion === 'details' ? 'rotate-180' : ''}`} />
                </button>
                {openAccordion === 'details' && (
                  <ul className="pt-2.5 space-y-1 opacity-75 list-disc list-inside">
                    <li>100% premium combed cotton</li>
                    <li>240 GSM heavy single jersey</li>
                    <li>Oversized dropped shoulder silhouette</li>
                    <li>High-density discharge screen print</li>
                    <li>Pre-shrunk to prevent washing shrinkage</li>
                    <li>Unisex styling</li>
                  </ul>
                )}
              </div>

              {/* Size & Fit */}
              <div className="border-b border-current/10 py-2.5">
                <button
                  type="button"
                  onClick={() => setOpenAccordion(openAccordion === 'size' ? '' : 'size')}
                  className="w-full flex items-center justify-between font-bold uppercase tracking-wider text-left"
                >
                  <span>Size & Fit Guide</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${openAccordion === 'size' ? 'rotate-180' : ''}`} />
                </button>
                {openAccordion === 'size' && (
                  <p className="pt-2.5 opacity-75 leading-relaxed">
                    Model is 6'1" wearing size L for a relaxed oversized drape. For a standard true-to-size look, size down one step.
                  </p>
                )}
              </div>

              {/* Shipping & Returns */}
              <div className="border-b border-current/10 py-2.5">
                <button
                  type="button"
                  onClick={() => setOpenAccordion(openAccordion === 'shipping' ? '' : 'shipping')}
                  className="w-full flex items-center justify-between font-bold uppercase tracking-wider text-left"
                >
                  <span>Shipping & Returns</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${openAccordion === 'shipping' ? 'rotate-180' : ''}`} />
                </button>
                {openAccordion === 'shipping' && (
                  <p className="pt-2.5 opacity-75 leading-relaxed">
                    Ships across India within 7-10 business days. Standard shipping ₹99 (Free on prepaid orders above ₹2,000). Hassle-free returns within 7 days of delivery.
                  </p>
                )}
              </div>

              {/* Care Instructions */}
              <div className="py-2.5">
                <button
                  type="button"
                  onClick={() => setOpenAccordion(openAccordion === 'care' ? '' : 'care')}
                  className="w-full flex items-center justify-between font-bold uppercase tracking-wider text-left"
                >
                  <span>Care Instructions</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${openAccordion === 'care' ? 'rotate-180' : ''}`} />
                </button>
                {openAccordion === 'care' && (
                  <p className="pt-2.5 opacity-75 leading-relaxed">
                    Machine wash cold inside-out. Do not iron directly on graphics. Lay flat or hang dry in shade.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details That Matter Banner */}
      <section className="px-4 sm:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center border border-current/10 p-6 sm:p-10 rounded-sm">
          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#B27338]">
              Craftsmanship
            </span>
            <h3 className="text-2xl font-bold uppercase tracking-tight">
              Details That Matter
            </h3>
            <p className="text-xs sm:text-sm opacity-75 leading-relaxed">
              Premium fabric. Thoughtful design. Made to last. Every seam and graphic placement is scrutinized for longevity and tactile comfort.
            </p>
          </div>
          <div className="aspect-16/9 rounded-xs overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80"
              alt="Fabric texture close-up"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
