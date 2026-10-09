import React from 'react';
import { useFashionStudio } from './FashionStudioContext';

export const FashionStudioFooter: React.FC = () => {
  const { setActiveScreen, themeVariant } = useFashionStudio();
  const isDark = themeVariant === 'atelier-dark';
  const brandTitle = isDark ? 'ATELIER' : 'NOVA';

  return (
    <footer
      className={`border-t px-6 py-12 transition-colors ${
        isDark
          ? 'bg-[#0B0C0E] border-[#1F2128] text-[#9E9DA6]'
          : 'bg-[#F9F7F2] border-[#E6E1D6] text-[#595861]'
      }`}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-xs">
        {/* Brand Col */}
        <div className="space-y-3">
          <span className={`text-base font-bold tracking-[0.2em] uppercase ${isDark ? 'text-white' : 'text-[#191A1E]'}`}>
            {brandTitle}
          </span>
          <p className="leading-relaxed">
            Streetwear crafted with purpose. Minimalist silhouettes engineered with heavyweight cotton in Jaipur, India.
          </p>
          <p className="text-[11px] opacity-60">© 2026 {brandTitle} Studio. All rights reserved.</p>
        </div>

        {/* Shop Links */}
        <div className="space-y-2">
          <span className={`font-bold uppercase tracking-wider block ${isDark ? 'text-white' : 'text-[#191A1E]'}`}>
            Collections
          </span>
          <ul className="space-y-1.5">
            <li>
              <button type="button" onClick={() => setActiveScreen('shop')} className="hover:underline">
                New Arrivals
              </button>
            </li>
            <li>
              <button type="button" onClick={() => setActiveScreen('shop')} className="hover:underline">
                Heavyweight Tees
              </button>
            </li>
            <li>
              <button type="button" onClick={() => setActiveScreen('shop')} className="hover:underline">
                Oversized Hoodies
              </button>
            </li>
            <li>
              <button type="button" onClick={() => setActiveScreen('shop')} className="hover:underline">
                Cargo Bottoms
              </button>
            </li>
          </ul>
        </div>

        {/* Client Care */}
        <div className="space-y-2">
          <span className={`font-bold uppercase tracking-wider block ${isDark ? 'text-white' : 'text-[#191A1E]'}`}>
            Client Care
          </span>
          <ul className="space-y-1.5">
            <li>
              <button type="button" onClick={() => setActiveScreen('track')} className="hover:underline">
                Track Order (#AT12345)
              </button>
            </li>
            <li>
              <button type="button" onClick={() => setActiveScreen('contact')} className="hover:underline">
                Help & Contact Us
              </button>
            </li>
            <li>
              <button type="button" onClick={() => setActiveScreen('account')} className="hover:underline">
                Customer Account
              </button>
            </li>
            <li>
              <button type="button" onClick={() => setActiveScreen('about')} className="hover:underline">
                Our Story & Philosophy
              </button>
            </li>
          </ul>
        </div>

        {/* Flagship Location */}
        <div className="space-y-2">
          <span className={`font-bold uppercase tracking-wider block ${isDark ? 'text-white' : 'text-[#191A1E]'}`}>
            Flagship Studio
          </span>
          <p className="leading-relaxed">
            MI Road, C-Scheme,<br />
            Jaipur, Rajasthan 302001<br />
            support@{isDark ? 'atelier' : 'nova'}.in
          </p>
          <div className="pt-1">
            <button
              type="button"
              onClick={() => setActiveScreen('admin')}
              className="text-[#B27338] hover:underline font-semibold"
            >
              Access Store Owner Admin →
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
