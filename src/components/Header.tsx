import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Sun,
  Moon,
  Search,
  Menu,
  X,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useQuoteModal } from '../context/QuoteModalContext';
import { siteConfig } from '../data/siteConfig';

interface HeaderProps {
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSearch }) => {
  const { theme, toggleTheme } = useTheme();
  const { openQuoteModal } = useQuoteModal();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Templates', href: '/templates' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 border-b ${
          isScrolled
            ? 'bg-[#FAF7F2]/90 dark:bg-[#0D0E12]/90 backdrop-blur-md border-[#E6E1D6] dark:border-[#242732] shadow-xs py-3.5'
            : 'bg-[#FAF7F2] dark:bg-[#0D0E12] border-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo / Name */}
            <Link
              to="/"
              className="flex items-center gap-2.5 group focus:outline-hidden"
            >
              <div className="w-8 h-8 rounded-sm bg-[#191A1E] dark:bg-[#F4F2EC] text-[#FAF7F2] dark:text-[#0D0E12] flex items-center justify-center font-bold text-sm tracking-wider transition-transform duration-200 group-hover:scale-105">
                ✦
              </div>
              <div className="flex flex-col">
                <span className="font-bold tracking-tight text-base sm:text-lg text-[#191A1E] dark:text-[#F4F2EC]">
                  {siteConfig.brandName}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#8A8892] dark:text-[#6B6A73] font-medium -mt-1 hidden sm:inline">
                  Digital Agency & Catalogue
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`px-3 py-1.5 rounded-sm text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? 'text-[#B27338] dark:text-[#C88645] bg-[#F7EEE4] dark:bg-[#241D17]'
                      : 'text-[#595861] dark:text-[#9E9DA6] hover:text-[#191A1E] dark:hover:text-[#F4F2EC] hover:bg-[#F3EFE6] dark:hover:bg-[#181A21]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Actions: Search, Theme Toggle, Get a Quote */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Search Button */}
              <button
                type="button"
                onClick={onOpenSearch}
                aria-label="Search templates and services"
                className="p-2 rounded-sm text-[#595861] dark:text-[#9E9DA6] hover:text-[#191A1E] dark:hover:text-[#F4F2EC] hover:bg-[#F3EFE6] dark:hover:bg-[#181A21] transition-colors focus:outline-hidden"
                title="Search templates (Ctrl+K)"
              >
                <Search className="w-4 h-4" />
              </button>

              {/* Light / Dark Mode Toggle */}
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
                className="p-2 rounded-sm text-[#595861] dark:text-[#9E9DA6] hover:text-[#191A1E] dark:hover:text-[#F4F2EC] hover:bg-[#F3EFE6] dark:hover:bg-[#181A21] transition-colors focus:outline-hidden"
                title={theme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme'}
              >
                {theme === 'light' ? (
                  <Moon className="w-4 h-4 text-[#595861]" />
                ) : (
                  <Sun className="w-4 h-4 text-[#C88645]" />
                )}
              </button>

              {/* Prominent "Get a Quote" Button */}
              <button
                type="button"
                onClick={() => openQuoteModal()}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-sm bg-[#B27338] hover:bg-[#9E632B] dark:bg-[#C88645] dark:hover:bg-[#D99754] text-white shadow-xs transition-all duration-150 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Get a Quote</span>
              </button>

              {/* Mobile Menu Toggle Button */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="lg:hidden p-2 rounded-sm text-[#191A1E] dark:text-[#F4F2EC] hover:bg-[#F3EFE6] dark:hover:bg-[#181A21] focus:outline-hidden"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-[#FAF7F2] dark:bg-[#0D0E12] border-l border-[#E6E1D6] dark:border-[#242732] p-6 shadow-xl flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#E6E1D6] dark:border-[#242732]">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm tracking-tight text-[#191A1E] dark:text-[#F4F2EC]">
                    {siteConfig.brandName}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 rounded-sm text-[#595861] dark:text-[#9E9DA6] hover:bg-[#F3EFE6] dark:hover:bg-[#181A21]"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="mt-6 flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-3 py-2.5 rounded-sm text-sm font-medium transition-colors ${
                      isActive(link.href)
                        ? 'text-[#B27338] dark:text-[#C88645] bg-[#F7EEE4] dark:bg-[#241D17]'
                        : 'text-[#595861] dark:text-[#9E9DA6] hover:text-[#191A1E] dark:hover:text-[#F4F2EC] hover:bg-[#F3EFE6] dark:hover:bg-[#181A21]'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-[#E6E1D6] dark:border-[#242732] space-y-3">
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openQuoteModal();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs uppercase tracking-wider font-semibold rounded-sm bg-[#B27338] hover:bg-[#9E632B] dark:bg-[#C88645] dark:hover:bg-[#D99754] text-white shadow-xs"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <div className="flex items-center justify-between px-2 pt-2 text-xs text-[#8A8892] dark:text-[#6B6A73]">
                <span>Theme: {theme === 'light' ? 'Light' : 'Dark'}</span>
                <button
                  onClick={toggleTheme}
                  className="text-xs underline text-[#B27338] dark:text-[#C88645]"
                >
                  Toggle Theme
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
