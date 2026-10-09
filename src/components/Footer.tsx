import React from 'react';
import { Link } from 'react-router-dom';
import {
  Mail,
  Phone,
  MessageSquare,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { categories } from '../data/categories';
import { useQuoteModal } from '../context/QuoteModalContext';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  const { openQuoteModal } = useQuoteModal();

  return (
    <footer className="w-full bg-[#F3EFE6] dark:bg-[#14161B] border-t border-[#E6E1D6] dark:border-[#242732] transition-colors">
      {/* Top CTA Banner */}
      <div className="border-b border-[#E6E1D6] dark:border-[#242732] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase bg-[#F7EEE4] dark:bg-[#241D17] text-[#B27338] dark:text-[#C88645] border border-[#DFCBB5] dark:border-[#523E2A]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready to Elevate Your Digital Presence?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#191A1E] dark:text-[#F4F2EC]">
            Choose a template today, or let’s craft a custom website tailored for you.
          </h2>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#595861] dark:text-[#9E9DA6]">
            Every template is built with clean architecture and ready for immediate deployment with your brand assets and content.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              type="button"
              onClick={() => openQuoteModal()}
              className="px-6 py-3.5 text-xs uppercase tracking-wider font-semibold rounded-sm bg-[#B27338] hover:bg-[#9E632B] dark:bg-[#C88645] dark:hover:bg-[#D99754] text-white shadow-sm transition-all duration-150 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Request Custom Website Quote
            </button>

            <a
              href={`https://wa.me/${siteConfig.contact.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                'Hi, I am interested in building a website for my business.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs uppercase tracking-wider font-semibold rounded-sm border border-[#E6E1D6] dark:border-[#242732] bg-[#FAF7F2] dark:bg-[#1B1E26] hover:bg-[#EAE5D9] dark:hover:bg-[#232733] text-[#191A1E] dark:text-[#F4F2EC] transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-[#B27338] dark:text-[#C88645]" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-sm bg-[#191A1E] dark:bg-[#F4F2EC] text-[#FAF7F2] dark:text-[#0D0E12] flex items-center justify-center font-bold text-xs">
                ✦
              </span>
              <span className="font-bold text-lg text-[#191A1E] dark:text-[#F4F2EC]">
                {siteConfig.brandName}
              </span>
            </div>
            <p className="text-sm text-[#595861] dark:text-[#9E9DA6] leading-relaxed max-w-sm">
              Modern website template catalogue and bespoke web development studio. High-performance digital products for modern brands, creators, and business enterprises.
            </p>
            <div className="pt-2 space-y-2 text-sm text-[#595861] dark:text-[#9E9DA6]">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#B27338] dark:text-[#C88645]" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-[#191A1E] dark:hover:text-[#F4F2EC] transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#B27338] dark:text-[#C88645]" />
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="hover:text-[#191A1E] dark:hover:text-[#F4F2EC] transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="text-xs uppercase tracking-widest font-semibold text-[#191A1E] dark:text-[#F4F2EC] mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm text-[#595861] dark:text-[#9E9DA6]">
              <li>
                <Link to="/" className="hover:text-[#191A1E] dark:hover:text-[#F4F2EC] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/templates" className="hover:text-[#191A1E] dark:hover:text-[#F4F2EC] transition-colors">
                  Template Catalogue
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#191A1E] dark:hover:text-[#F4F2EC] transition-colors">
                  Agency Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-[#191A1E] dark:hover:text-[#F4F2EC] transition-colors">
                  Recent Work
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-[#191A1E] dark:hover:text-[#F4F2EC] transition-colors">
                  Pricing & Packages
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#191A1E] dark:hover:text-[#F4F2EC] transition-colors">
                  About Studio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#191A1E] dark:hover:text-[#F4F2EC] transition-colors">
                  Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Top Categories */}
          <div>
            <h3 className="text-xs uppercase tracking-widest font-semibold text-[#191A1E] dark:text-[#F4F2EC] mb-4">
              Categories
            </h3>
            <ul className="space-y-2.5 text-sm text-[#595861] dark:text-[#9E9DA6]">
              {categories.slice(0, 6).map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/templates/category/${cat.slug}`}
                    className="hover:text-[#191A1E] dark:hover:text-[#F4F2EC] transition-colors flex items-center justify-between group"
                  >
                    <span>{cat.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#B27338]" />
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/templates"
                  className="text-xs font-semibold text-[#B27338] dark:text-[#C88645] hover:underline"
                >
                  View all 10 categories →
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & Legal */}
          <div>
            <h3 className="text-xs uppercase tracking-widest font-semibold text-[#191A1E] dark:text-[#F4F2EC] mb-4">
              Connect & Legal
            </h3>
            <ul className="space-y-2.5 text-sm text-[#595861] dark:text-[#9E9DA6]">
              <li>
                <a
                  href={siteConfig.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#191A1E] dark:hover:text-[#F4F2EC] transition-colors"
                >
                  Twitter / X
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#191A1E] dark:hover:text-[#F4F2EC] transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#191A1E] dark:hover:text-[#F4F2EC] transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-[#191A1E] dark:hover:text-[#F4F2EC] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="hover:text-[#191A1E] dark:hover:text-[#F4F2EC] transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#E6E1D6] dark:border-[#242732] flex flex-col sm:flex-row items-center justify-between text-xs text-[#8A8892] dark:text-[#6B6A73] gap-4">
          <p>© {CURRENT_YEAR} {siteConfig.brandName}. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Architecture configured for custom template designs and assets.
          </p>
        </div>
      </div>
    </footer>
  );
};
