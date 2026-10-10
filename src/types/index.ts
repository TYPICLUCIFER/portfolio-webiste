export type ThemeMode = 'light' | 'dark';

export type DesignStyle =
  | 'Minimal'
  | 'Luxury'
  | 'Modern'
  | 'Editorial'
  | 'Corporate'
  | 'Creative'
  | 'Bold';

export type TemplateFeature =
  | 'E-commerce'
  | 'Booking'
  | 'Blog'
  | 'Dashboard'
  | 'Contact Form'
  | 'Portfolio'
  | 'CMS'
  | 'Animations'
  | 'Multi-language';

export type TemplateAvailability = 'Available' | 'Popular' | 'New' | 'Coming Soon';

export interface PackageTier {
  id: string;
  name: string;
  price: number; // in INR
  description: string;
  deliveryDays: string;
  includes: string[];
  recommended?: boolean;
}

export interface CustomizationOption {
  id: string;
  name: string;
  price: number;
  description: string;
}

export interface TemplateFAQ {
  question: string;
  answer: string;
}

export interface TemplateItem {
  id: string;
  slug: string;
  name: string;
  category: string;
  categoryName: string;
  designStyle: DesignStyle;
  startingPrice: number; // INR
  description: string;
  shortFeatureSummary: string;
  targetAudience: string;
  features: TemplateFeature[];
  includedPages: string[];
  pageCount: number;
  responsiveIndicators: {
    desktop: boolean;
    tablet: boolean;
    mobile: boolean;
  };
  coverImage: string;
  previewGallery: string[];
  desktopPreview: string;
  tabletPreview: string;
  mobilePreview: string;
  liveDemoUrl?: string;
  featured: boolean;
  availabilityStatus: TemplateAvailability;
  packageTiers: PackageTier[];
  customizationOptions: CustomizationOption[];
  estimatedDelivery: string;
  faqs: TemplateFAQ[];
  availableIntegrations: string[];
  createdAt: string;
}

export interface CategoryItem {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  coverImage: string;
  iconName: string;
  templateCount?: number;
  priceRange: string;
  featureHighlights: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  startingPrice: number;
  deliverables: string[];
  timeline: string;
  iconName: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  category: string;
  year: string;
  description: string;
  coverImage: string;
  liveUrl?: string;
  tags: string[];
  results: string[];
}

export interface TrustIndicator {
  label: string;
  value: string;
  description: string;
  iconName: string;
}

export interface QuoteFormData {
  fullName: string;
  email: string;
  phone: string;
  businessName: string;
  businessCategory: string;
  selectedTemplateId: string;
  selectedPackageTierId: string;
  desiredFeatures: string[];
  budgetRange: string;
  expectedLaunchDate: string;
  additionalRequirements: string;
}
