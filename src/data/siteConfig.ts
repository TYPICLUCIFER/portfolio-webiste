import type { TrustIndicator } from '../types';

export const siteConfig = {
  // Brand identity - replace with your brand name
  brandName: '[YOUR BRAND NAME]',
  brandShortName: 'STUDIO',
  brandTagline: 'Beautiful Websites for Growing Brands',
  brandDescription:
    'Choose from curated, professionally architected website templates or request a bespoke digital experience tailored to your exact business goals.',
  
  // Contact details
  contact: {
    email: 'contact@yourdomain.com',
    phone: '+91 98765 43210',
    whatsappNumber: '+919876543210', // digits only with country code
    whatsappDisplay: '+91 98765 43210',
    address: 'Bangalore / Mumbai, India (Serving Clients Worldwide)',
    businessHours: 'Mon – Sat, 10:00 AM – 7:00 PM IST',
  },

  // Social Links
  social: {
    twitter: 'https://twitter.com',
    github: 'https://github.com',
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com',
    dribbble: 'https://dribbble.com',
  },

  // Currency
  currency: {
    code: 'INR',
    symbol: '₹',
    locale: 'en-IN',
  },

  // Trust indicators (Sample data until verified figures are provided)
  trustIndicators: [
    {
      label: 'Available Templates',
      value: '24+',
      description: 'Handcrafted across 10 business verticals',
      iconName: 'LayoutGrid',
    },
    {
      label: 'Completed Projects',
      value: '45+',
      description: 'Delivered for modern brands and studios',
      iconName: 'FolderCheck',
    },
    {
      label: 'Client Satisfaction',
      value: '99.4%',
      description: 'Consistently 5-star client feedback',
      iconName: 'Sparkles',
    },
    {
      label: 'Typical Turnaround',
      value: '5–7 Days',
      description: 'From template selection to live launch',
      iconName: 'Zap',
    },
  ] as TrustIndicator[],

  // Notice for placeholder assets
  assetNotice:
    'Sample Template Data & Visual Preview — Replace with your supplied template designs via src/data/templates.ts.',
};

/**
 * Format currency in Indian Rupees format (e.g. ₹15,000)
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}
