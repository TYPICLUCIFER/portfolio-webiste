import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Sparkles,
  Image as ImageIcon,
  X,
} from 'lucide-react';
import { FashionStudioProvider, useFashionStudio } from './FashionStudioContext';
import { FashionStudioHeader } from './FashionStudioHeader';
import { FashionStudioFooter } from './FashionStudioFooter';
import { Screen1Home } from './Screen1Home';
import { Screen2Shop } from './Screen2Shop';
import { Screen3Product } from './Screen3Product';
import { Screen4Cart } from './Screen4Cart';
import { Screen5Checkout } from './Screen5Checkout';
import { Screen6About } from './Screen6About';
import { Screen7Contact } from './Screen7Contact';
import { Screen8TrackOrder } from './Screen8TrackOrder';
import { Screen9Account } from './Screen9Account';
import { Screen10AdminDashboard } from './Screen10AdminDashboard';
import { useQuoteModal } from '../../context/QuoteModalContext';
import type { FashionScreenId } from './types';

const SCREENS: { id: FashionScreenId; label: string; number: string }[] = [
  { id: 'home', label: 'Home', number: '1' },
  { id: 'shop', label: 'Shop / Catalog', number: '2' },
  { id: 'product', label: 'Product Page', number: '3' },
  { id: 'cart', label: 'Cart', number: '4' },
  { id: 'checkout', label: 'Checkout', number: '5' },
  { id: 'about', label: 'About Us', number: '6' },
  { id: 'contact', label: 'Contact', number: '7' },
  { id: 'track', label: 'Track Order', number: '8' },
  { id: 'account', label: 'Account / Orders', number: '9' },
  { id: 'admin', label: 'Admin Dashboard', number: '10' },
];

const FashionStudioInner: React.FC = () => {
  const { activeScreen, setActiveScreen, themeVariant, setThemeVariant } = useFashionStudio();
  const { openQuoteModal } = useQuoteModal();
  const [showOriginalBoard, setShowOriginalBoard] = useState(false);

  const isDark = themeVariant === 'atelier-dark';

  const renderActiveScreen = () => {
    switch (activeScreen) {
      case 'home':
        return <Screen1Home />;
      case 'shop':
        return <Screen2Shop />;
      case 'product':
        return <Screen3Product />;
      case 'cart':
        return <Screen4Cart />;
      case 'checkout':
        return <Screen5Checkout />;
      case 'about':
        return <Screen6About />;
      case 'contact':
        return <Screen7Contact />;
      case 'track':
        return <Screen8TrackOrder />;
      case 'account':
        return <Screen9Account />;
      case 'admin':
        return <Screen10AdminDashboard />;
      default:
        return <Screen1Home />;
    }
  };

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors ${
      isDark ? 'bg-[#0E0F12] text-[#F3F1EC]' : 'bg-[#FFFFFF] text-[#191A1E]'
    }`}>
      {/* Top Demo Toolbar Switcher */}
      <div className="sticky top-0 z-40 bg-[#16181F] text-white border-b border-[#2B2E3B] px-3 sm:px-6 py-2.5 shadow-xl">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          {/* Left: Back & Title */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
            <Link
              to="/templates"
              className="inline-flex items-center gap-1.5 text-xs text-[#9E9DA6] hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Agency Site</span>
            </Link>

            <div className="h-4 w-px bg-white/20" />

            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C88645]">
                {isDark ? 'ATELIER' : 'NOVA'} Template Demo
              </span>
              <span className="hidden sm:inline text-[10px] bg-white/10 px-2 py-0.5 rounded-xs font-mono text-[#A3A2A8]">
                10 Full Screens
              </span>
            </div>
          </div>

          {/* Center: 10 Screens Tabs */}
          <div className="flex items-center gap-1 overflow-x-auto max-w-full pb-1 md:pb-0 scrollbar-none">
            {SCREENS.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setActiveScreen(s.id)}
                className={`px-2.5 py-1 rounded-xs text-[11px] font-semibold uppercase tracking-wider whitespace-nowrap transition-all ${
                  activeScreen === s.id
                    ? 'bg-[#C88645] text-white shadow-xs'
                    : 'bg-white/5 text-[#A3A2A8] hover:bg-white/10 hover:text-white'
                }`}
              >
                <span className="font-mono opacity-60 mr-1">{s.number}.</span>
                <span>{s.label.split(' ')[0]}</span>
              </button>
            ))}
          </div>

          {/* Right: Theme Variant Toggle & Quote CTA */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Dark / Light Variant Toggle */}
            <div className="flex items-center bg-black/40 border border-white/10 rounded-xs p-0.5 text-[11px]">
              <button
                type="button"
                onClick={() => setThemeVariant('atelier-dark')}
                className={`px-2 py-1 rounded-xs transition-colors ${
                  themeVariant === 'atelier-dark'
                    ? 'bg-[#2B2E3B] text-white font-bold'
                    : 'text-[#A3A2A8] hover:text-white'
                }`}
                title="Atelier Dark Editorial Aesthetic"
              >
                Atelier (Dark)
              </button>
              <button
                type="button"
                onClick={() => setThemeVariant('nova-light')}
                className={`px-2 py-1 rounded-xs transition-colors ${
                  themeVariant === 'nova-light'
                    ? 'bg-[#2B2E3B] text-white font-bold'
                    : 'text-[#A3A2A8] hover:text-white'
                }`}
                title="Nova Light Streetwear Aesthetic"
              >
                Nova (Light)
              </button>
            </div>

            {/* View Original Design Board Lightbox */}
            <button
              type="button"
              onClick={() => setShowOriginalBoard(true)}
              className="p-1.5 rounded-xs bg-white/10 text-white hover:bg-white/20 transition-colors text-xs"
              title="Inspect supplied 10-screen design board"
            >
              <ImageIcon className="w-3.5 h-3.5" />
            </button>

            {/* Get This Template CTA */}
            <button
              type="button"
              onClick={() =>
                openQuoteModal({
                  templateId: 'atelier-fashion',
                  templateName: 'ATELIER // NOVA — Streetwear & Fashion Studio',
                  category: 'ecommerce',
                })
              }
              className="px-3.5 py-1.5 rounded-xs text-xs font-semibold uppercase tracking-wider bg-[#C88645] hover:bg-[#D99754] text-white shadow-xs flex items-center gap-1.5"
            >
              <Sparkles className="w-3 h-3" />
              <span className="hidden sm:inline">Get This Template</span>
              <span className="sm:hidden">Get</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Template Header */}
      <FashionStudioHeader />

      {/* Main Active Screen Content */}
      <main className="flex-1">
        {renderActiveScreen()}
      </main>

      {/* Main Template Footer */}
      <FashionStudioFooter />

      {/* Modal: Original Supplied Design Board Lightbox */}
      {showOriginalBoard && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col justify-between p-4 overflow-y-auto">
          <div className="flex items-center justify-between py-2 border-b border-white/20 max-w-7xl mx-auto w-full text-white">
            <div className="flex items-center gap-3">
              <span className="font-bold text-sm tracking-widest uppercase text-[#C88645]">
                Supplied 10-Screen Design Board
              </span>
              <span className="text-xs opacity-75">
                ({themeVariant === 'atelier-dark' ? 'Atelier Dark Edition' : 'Nova Light Edition'})
              </span>
            </div>
            <button
              type="button"
              onClick={() => setShowOriginalBoard(false)}
              className="p-1.5 rounded-xs bg-white/10 hover:bg-white/20 text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="my-auto py-6 max-w-7xl mx-auto w-full text-center">
            <img
              src={
                themeVariant === 'atelier-dark'
                  ? '/templates/fashion-studio/atelier-dark-board.jpg'
                  : '/templates/fashion-studio/nova-light-board.jpg'
              }
              alt="Design Board"
              className="w-full h-auto rounded-sm border border-white/20 shadow-2xl mx-auto block"
            />
          </div>

          <div className="py-2 border-t border-white/20 max-w-7xl mx-auto w-full text-center text-xs text-white/70">
            Click outside or press X to return to interactive demo.
          </div>
        </div>
      )}
    </div>
  );
};

export const FashionStudioDemoPage: React.FC = () => {
  return (
    <FashionStudioProvider>
      <FashionStudioInner />
    </FashionStudioProvider>
  );
};
