import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const LegalPage: React.FC = () => {
  const location = useLocation();
  const isPrivacy = location.pathname.includes('privacy');

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-xs text-[#8A8892] dark:text-[#6B6A73] hover:text-[#B27338]"
      >
        <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
      </Link>

      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#191A1E] dark:text-[#F4F2EC]">
          {isPrivacy ? 'Privacy Policy' : 'Terms & Conditions'}
        </h1>
        <p className="text-xs text-[#8A8892] dark:text-[#6B6A73]">
          Last Updated: March 2026 • {siteConfig.brandName}
        </p>
      </div>

      <div className="prose dark:prose-invert max-w-none text-sm text-[#595861] dark:text-[#9E9DA6] space-y-6 leading-relaxed">
        {isPrivacy ? (
          <>
            <p>
              At <strong>{siteConfig.brandName}</strong>, we respect your privacy and are committed to protecting the personal information you share with us. This policy describes how we collect, store, and process information when you use our website or request custom template services.
            </p>
            <h2 className="text-lg font-bold text-[#191A1E] dark:text-[#F4F2EC] mt-6">
              1. Information We Collect
            </h2>
            <p>
              When you submit a quote inquiry or contact form, we collect the details you provide, including your name, email address, phone/WhatsApp number, business category, and design preferences. We do not sell or rent this data to third parties.
            </p>
            <h2 className="text-lg font-bold text-[#191A1E] dark:text-[#F4F2EC] mt-6">
              2. How We Use Your Information
            </h2>
            <p>
              Your contact details are solely used to prepare project proposals, communicate delivery milestones, and coordinate domain mapping or payment gateway configurations.
            </p>
            <h2 className="text-lg font-bold text-[#191A1E] dark:text-[#F4F2EC] mt-6">
              3. Client Ownership & Data Security
            </h2>
            <p>
              All customer assets, logos, and custom code delivered during customisation belong completely to the client upon final settlement. We implement industry-standard encryption protocols.
            </p>
          </>
        ) : (
          <>
            <p>
              These Terms and Conditions govern your engagement with <strong>{siteConfig.brandName}</strong> for template adaptation, custom web development, and digital consulting services.
            </p>
            <h2 className="text-lg font-bold text-[#191A1E] dark:text-[#F4F2EC] mt-6">
              1. Scope of Work & Deliverables
            </h2>
            <p>
              Each project begins with a clear scope breakdown and agreed timeline. Our template services adapt our pre-engineered architectures with your provided branding, copy, and products.
            </p>
            <h2 className="text-lg font-bold text-[#191A1E] dark:text-[#F4F2EC] mt-6">
              2. Payments & Milestone Structure
            </h2>
            <p>
              Projects typically operate on a 50% initial deposit upon milestone commencement and 50% upon final staging approval before domain transfer or repository handover.
            </p>
            <h2 className="text-lg font-bold text-[#191A1E] dark:text-[#F4F2EC] mt-6">
              3. Revisions & Warranty
            </h2>
            <p>
              All packages include post-launch warranty support (between 7 to 30 days depending on tier) covering minor adjustments and bug resolution.
            </p>
          </>
        )}
      </div>
    </div>
  );
};
