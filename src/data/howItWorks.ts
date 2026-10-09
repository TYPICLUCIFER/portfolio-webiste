export interface HowItWorksStep {
  stepNumber: string;
  title: string;
  tagline: string;
  description: string;
  details: string[];
  iconName: string;
}

export const howItWorksSteps: HowItWorksStep[] = [
  {
    stepNumber: '01',
    title: 'Choose a Template',
    tagline: 'Or request a custom layout concept',
    description: 'Explore our curated catalogue across 10 business categories. Preview desktop, tablet, and mobile layouts to discover the architecture that aligns with your brand.',
    details: [
      'Filter by business niche and design style',
      'Test interactive device previews live',
      'Select starting features and package tiers',
    ],
    iconName: 'LayoutTemplate',
  },
  {
    stepNumber: '02',
    title: 'Share Branding & Requirements',
    tagline: 'We gather your assets and vision',
    description: 'Submit your logo, color palette, typography preferences, photos, and copy via our straightforward onboarding form or a quick discovery WhatsApp discussion.',
    details: [
      'Simple brand asset checklist provided',
      'Copywriting guidance if you need text help',
      'Clear milestone timeline agreed upfront',
    ],
    iconName: 'Sparkles',
  },
  {
    stepNumber: '03',
    title: 'We Customise & Develop',
    tagline: 'Precision engineering and styling',
    description: 'We code and tailor every section to your specific identity. We configure forms, payment gateways, mobile responsiveness, and SEO tags with meticulous care.',
    details: [
      'Live staging preview link to review changes',
      'Cross-browser and mobile device verification',
      'Revisions and polish based on your feedback',
    ],
    iconName: 'CodeXml',
  },
  {
    stepNumber: '04',
    title: 'Launch Your Website',
    tagline: 'Live to the world with full ownership',
    description: 'We connect your custom domain, set up SSL security, configure fast edge hosting, test form routing, and hand over complete ownership and training.',
    details: [
      'Zero-downtime domain & DNS launch',
      'Full source code and ownership handoff',
      'Post-launch warranty & support included',
    ],
    iconName: 'Rocket',
  },
];
