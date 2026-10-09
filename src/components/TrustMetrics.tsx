import React from 'react';
import {
  LayoutGrid,
  FolderCheck,
  Sparkles,
  Zap,
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

const iconMap: Record<string, React.ReactNode> = {
  LayoutGrid: <LayoutGrid className="w-5 h-5 text-[#B27338] dark:text-[#C88645]" />,
  FolderCheck: <FolderCheck className="w-5 h-5 text-[#B27338] dark:text-[#C88645]" />,
  Sparkles: <Sparkles className="w-5 h-5 text-[#B27338] dark:text-[#C88645]" />,
  Zap: <Zap className="w-5 h-5 text-[#B27338] dark:text-[#C88645]" />,
};

export const TrustMetrics: React.FC = () => {
  return (
    <div className="w-full bg-[#FFFFFF] dark:bg-[#14161B] border-y border-[#E6E1D6] dark:border-[#242732] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {siteConfig.trustIndicators.map((metric, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-3 sm:p-4 rounded-sm border border-[#E6E1D6]/50 dark:border-[#242732]/50 bg-[#FAF7F2]/40 dark:bg-[#1B1E26]/40"
            >
              <div className="p-2.5 rounded-full bg-[#F7EEE4] dark:bg-[#241D17] mb-3">
                {iconMap[metric.iconName] || <Sparkles className="w-5 h-5 text-[#B27338]" />}
              </div>
              <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#191A1E] dark:text-[#F4F2EC]">
                {metric.value}
              </span>
              <span className="text-xs sm:text-sm font-semibold text-[#191A1E] dark:text-[#F4F2EC] mt-1">
                {metric.label}
              </span>
              <span className="text-[11px] text-[#8A8892] dark:text-[#6B6A73] mt-0.5 max-w-[180px]">
                {metric.description}
              </span>
            </div>
          ))}
        </div>

        {/* Honest Sample Label Notice */}
        <p className="mt-4 text-center text-[11px] text-[#8A8892] dark:text-[#6B6A73]">
          * Configurable metrics. Customize values in <code className="px-1 py-0.5 text-[10px] bg-[#F3EFE6] dark:bg-[#1C1E25] rounded-xs font-mono">src/data/siteConfig.ts</code>.
        </p>
      </div>
    </div>
  );
};
