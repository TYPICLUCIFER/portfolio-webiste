import React from 'react';
import { Search, ShoppingBag, User, ShieldCheck } from 'lucide-react';
import { useFashionStudio } from './FashionStudioContext';

export const FashionStudioHeader: React.FC = () => {
  const { activeScreen, setActiveScreen, themeVariant, cartItems } = useFashionStudio();
  const isDark = themeVariant === 'atelier-dark';
  const brandTitle = isDark ? 'ATELIER' : 'NOVA';

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header
      className={`sticky top-0 z-30 transition-colors border-b px-4 sm:px-8 py-3.5 flex items-center justify-between ${
        isDark
          ? 'bg-[#0E0F12]/95 border-[#21232B] text-[#F3F1EC]'
          : 'bg-[#FFFFFF]/95 border-[#E6E1D6] text-[#191A1E]'
      } backdrop-blur-md`}
    >
      {/* Brand Wordmark */}
      <div className="flex items-center gap-6">
        <button
          type="button"
          onClick={() => setActiveScreen('home')}
          className="text-lg sm:text-xl font-bold tracking-[0.2em] uppercase focus:outline-hidden hover:opacity-80 transition-opacity"
        >
          {brandTitle}
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-6 text-xs uppercase tracking-wider font-medium">
          <button
            type="button"
            onClick={() => setActiveScreen('shop')}
            className={`transition-colors hover:text-[#B27338] ${
              activeScreen === 'shop' ? 'font-bold underline underline-offset-4 text-[#B27338]' : 'opacity-80'
            }`}
          >
            Shop
          </button>
          <button
            type="button"
            onClick={() => setActiveScreen('shop')}
            className="opacity-80 hover:opacity-100 transition-opacity"
          >
            Collections
          </button>
          <button
            type="button"
            onClick={() => setActiveScreen('about')}
            className={`transition-colors hover:text-[#B27338] ${
              activeScreen === 'about' ? 'font-bold underline underline-offset-4 text-[#B27338]' : 'opacity-80'
            }`}
          >
            About
          </button>
          <button
            type="button"
            onClick={() => setActiveScreen('contact')}
            className={`transition-colors hover:text-[#B27338] ${
              activeScreen === 'contact' ? 'font-bold underline underline-offset-4 text-[#B27338]' : 'opacity-80'
            }`}
          >
            Contact
          </button>
        </nav>
      </div>

      {/* Right Icons: Search, Track/Account, Cart */}
      <div className="flex items-center space-x-4">
        {/* Admin Link Badge */}
        <button
          type="button"
          onClick={() => setActiveScreen('admin')}
          className={`hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xs text-[10px] uppercase tracking-wider font-semibold border transition-colors ${
            activeScreen === 'admin'
              ? 'bg-[#B27338] text-white border-[#B27338]'
              : isDark
              ? 'border-[#2D303C] text-[#9E9DA6] hover:text-white'
              : 'border-[#E6E1D6] text-[#595861] hover:text-[#191A1E]'
          }`}
          title="Store Owner Admin View"
        >
          <ShieldCheck className="w-3 h-3 text-[#B27338]" />
          <span>Admin View</span>
        </button>

        {/* Track Order link */}
        <button
          type="button"
          onClick={() => setActiveScreen('track')}
          className={`text-xs uppercase tracking-wider transition-colors hidden lg:inline-block ${
            activeScreen === 'track' ? 'text-[#B27338] font-bold' : 'opacity-70 hover:opacity-100'
          }`}
        >
          Track Order
        </button>

        {/* Search */}
        <button
          type="button"
          onClick={() => setActiveScreen('shop')}
          className="p-1 opacity-80 hover:opacity-100 transition-opacity"
          aria-label="Search items"
        >
          <Search className="w-4 h-4" />
        </button>

        {/* User Account */}
        <button
          type="button"
          onClick={() => setActiveScreen('account')}
          className={`p-1 transition-opacity ${
            activeScreen === 'account' ? 'text-[#B27338]' : 'opacity-80 hover:opacity-100'
          }`}
          aria-label="Account profile"
        >
          <User className="w-4 h-4" />
        </button>

        {/* Cart Bag */}
        <button
          type="button"
          onClick={() => setActiveScreen('cart')}
          className="p-1 relative opacity-90 hover:opacity-100 transition-opacity"
          aria-label="Shopping bag"
        >
          <ShoppingBag className="w-4 h-4" />
          {totalCartCount > 0 && (
            <span className="absolute -top-1 -right-1.5 w-4 h-4 rounded-full bg-[#B27338] text-white text-[10px] font-bold flex items-center justify-center">
              {totalCartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};
