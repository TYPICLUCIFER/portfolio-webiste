import React, { useState } from 'react';
import {
  CheckCircle,
  XCircle,
  Sparkles,
  Calculator,
  ArrowRight,
} from 'lucide-react';
import {
  pricingPlans,
  pricingAddOns,
  recurringCostsExplainer,
} from '../data/pricing';
import { formatCurrency } from '../data/siteConfig';
import { useQuoteModal } from '../context/QuoteModalContext';

export const PricingPage: React.FC = () => {
  const { openQuoteModal } = useQuoteModal();

  // Interactive Quick Estimator
  const [selectedPlanId, setSelectedPlanId] = useState<string>(pricingPlans[1].id);
  const [extraPagesCount, setExtraPagesCount] = useState<number>(0);
  const [includePaymentGateway, setIncludePaymentGateway] = useState<boolean>(false);
  const [includeMultiLanguage, setIncludeMultiLanguage] = useState<boolean>(false);
  const [includeMaintenance, setIncludeMaintenance] = useState<boolean>(false);

  const activePlan = pricingPlans.find((p) => p.id === selectedPlanId) || pricingPlans[1];

  // Calculate estimated total
  const baseCost = activePlan.startingPrice;
  const pageUnitRate = selectedPlanId === 'landing-page' ? 1500 : 1800;
  const extraPagesTotal = extraPagesCount * pageUnitRate;
  const paymentGatewayCost = includePaymentGateway ? 4000 : 0;
  const multiLanguageCost = includeMultiLanguage ? 4500 : 0;
  const monthlyMaintenanceCost = includeMaintenance ? 2500 : 0;

  const estimatedOneTimeTotal = baseCost + extraPagesTotal + paymentGatewayCost + multiLanguageCost;

  return (
    <div className="space-y-16 pb-20">
      {/* Pricing Hero */}
      <section className="bg-[#FFFFFF] dark:bg-[#14161B] border-b border-[#E6E1D6] dark:border-[#242732] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#F7EEE4] dark:bg-[#241D17] text-[#B27338] dark:text-[#C88645] border border-[#DFCBB5] dark:border-[#523E2A]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent INR Pricing</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#191A1E] dark:text-[#F4F2EC]">
            Predictable Investment Packages
          </h1>

          <p className="text-base sm:text-lg text-[#595861] dark:text-[#9E9DA6] leading-relaxed">
            Straightforward pricing in Indian Rupees with distinct separation between one-time development, optional custom add-ons, and recurring third-party expenses.
          </p>

          <p className="text-xs text-[#8A8892] dark:text-[#6B6A73] font-mono">
            * All figures are configurable sample baselines. Custom scope quotes provided after requirement review.
          </p>
        </div>
      </section>

      {/* 4 Core Pricing Tiers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-md p-6 flex flex-col justify-between border transition-all ${
                plan.popular
                  ? 'bg-[#FFFFFF] dark:bg-[#1B1E26] border-[#B27338] dark:border-[#C88645] shadow-lg ring-1 ring-[#B27338]/20 relative'
                  : 'bg-[#FFFFFF] dark:bg-[#14161B] border-[#E6E1D6] dark:border-[#242732] shadow-xs'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-3 py-0.5 rounded-full bg-[#B27338] dark:bg-[#C88645] text-white">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-[#191A1E] dark:text-[#F4F2EC]">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-[#595861] dark:text-[#9E9DA6] mt-1 leading-relaxed">
                    {plan.tagline}
                  </p>
                </div>

                <div className="py-3 border-y border-[#E6E1D6] dark:border-[#242732]">
                  <span className="text-2xl sm:text-3xl font-black text-[#191A1E] dark:text-[#F4F2EC]">
                    {plan.priceRangeFormatted}
                  </span>
                  <p className="text-[11px] text-[#8A8892] dark:text-[#6B6A73] mt-0.5">
                    Starting at {formatCurrency(plan.startingPrice)}
                  </p>
                </div>

                <div className="text-xs text-[#595861] dark:text-[#9E9DA6]">
                  <strong className="text-[#191A1E] dark:text-[#F4F2EC]">Best for:</strong> {plan.bestFor}
                </div>

                {/* Inclusions */}
                <div className="space-y-2 pt-2">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[#8A8892] dark:text-[#6B6A73]">
                    What's Included:
                  </span>
                  <ul className="space-y-2 text-xs text-[#595861] dark:text-[#9E9DA6]">
                    {plan.includedFeatures.map((f, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Exclusions if any */}
                {plan.notIncluded && plan.notIncluded.length > 0 && (
                  <div className="space-y-1.5 pt-2 border-t border-[#E6E1D6] dark:border-[#242732]">
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-[#8A8892] dark:text-[#6B6A73]">
                      Not Included:
                    </span>
                    <ul className="space-y-1 text-xs text-[#8A8892] dark:text-[#6B6A73]">
                      {plan.notIncluded.map((nf, i) => (
                        <li key={i} className="flex items-start gap-1.5 line-through opacity-75">
                          <XCircle className="w-3.5 h-3.5 text-[#8A8892] shrink-0 mt-0.5" />
                          <span>{nf}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="pt-6 mt-6 border-t border-[#E6E1D6] dark:border-[#242732] space-y-2">
                <button
                  type="button"
                  onClick={() =>
                    openQuoteModal({
                      packageTierId: plan.id,
                      packageTierName: plan.name,
                    })
                  }
                  className={`w-full py-2.5 px-3 text-xs uppercase tracking-wider font-semibold rounded-sm text-center transition-colors ${
                    plan.popular
                      ? 'bg-[#B27338] hover:bg-[#9E632B] dark:bg-[#C88645] dark:hover:bg-[#D99754] text-white shadow-xs'
                      : 'border border-[#E6E1D6] dark:border-[#242732] hover:bg-[#F3EFE6] dark:hover:bg-[#181A21] text-[#191A1E] dark:text-[#F4F2EC]'
                  }`}
                >
                  Choose {plan.name.split(' ')[0]}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Quick Cost Calculator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-md bg-[#FAF7F2] dark:bg-[#1B1E26] border border-[#E6E1D6] dark:border-[#242732] shadow-sm">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-6 flex-1">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#B27338] dark:text-[#C88645]">
                  <Calculator className="w-4 h-4" />
                  <span>Interactive Estimation Tool</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191A1E] dark:text-[#F4F2EC]">
                  Estimate Your Project Investment
                </h2>
                <p className="text-sm text-[#595861] dark:text-[#9E9DA6]">
                  Configure your starting package and optional custom requirements in real-time.
                </p>
              </div>

              {/* Selector 1: Base Tier */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#191A1E] dark:text-[#F4F2EC]">
                  1. Select Base Package Tier
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {pricingPlans.map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setSelectedPlanId(p.id)}
                      className={`p-2.5 rounded-sm text-left border text-xs transition-colors ${
                        selectedPlanId === p.id
                          ? 'bg-[#B27338] text-white border-[#B27338]'
                          : 'bg-[#FFFFFF] dark:bg-[#14161B] border-[#E6E1D6] dark:border-[#242732] text-[#191A1E] dark:text-[#F4F2EC]'
                      }`}
                    >
                      <div className="font-bold truncate">{p.name.split(' ')[0]}</div>
                      <div className="text-[11px] opacity-80">{formatCurrency(p.startingPrice)}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Selector 2: Extra Pages */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-[#191A1E] dark:text-[#F4F2EC]">
                  <span>2. Additional Custom Pages</span>
                  <span className="font-mono text-[#B27338] dark:text-[#C88645]">
                    +{extraPagesCount} Pages ({formatCurrency(extraPagesTotal)})
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="10"
                  value={extraPagesCount}
                  onChange={(e) => setExtraPagesCount(Number(e.target.value))}
                  className="w-full accent-[#B27338] cursor-pointer"
                />
              </div>

              {/* Selector 3: Optional Add-on Toggles */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#191A1E] dark:text-[#F4F2EC]">
                  3. Optional Add-ons & Integrations
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <label
                    onClick={() => setIncludePaymentGateway(!includePaymentGateway)}
                    className={`p-2.5 rounded-sm border text-xs cursor-pointer flex items-center justify-between ${
                      includePaymentGateway
                        ? 'bg-[#F7EEE4] dark:bg-[#241D17] border-[#DFCBB5] text-[#B27338] font-semibold'
                        : 'bg-[#FFFFFF] dark:bg-[#14161B] border-[#E6E1D6] dark:border-[#242732] text-[#595861]'
                    }`}
                  >
                    <span>Razorpay / Stripe Gateway</span>
                    <span className="text-[11px]">+₹4,000</span>
                  </label>

                  <label
                    onClick={() => setIncludeMultiLanguage(!includeMultiLanguage)}
                    className={`p-2.5 rounded-sm border text-xs cursor-pointer flex items-center justify-between ${
                      includeMultiLanguage
                        ? 'bg-[#F7EEE4] dark:bg-[#241D17] border-[#DFCBB5] text-[#B27338] font-semibold'
                        : 'bg-[#FFFFFF] dark:bg-[#14161B] border-[#E6E1D6] dark:border-[#242732] text-[#595861]'
                    }`}
                  >
                    <span>Multi-Language Switcher</span>
                    <span className="text-[11px]">+₹4,500</span>
                  </label>

                  <label
                    onClick={() => setIncludeMaintenance(!includeMaintenance)}
                    className={`p-2.5 rounded-sm border text-xs cursor-pointer flex items-center justify-between ${
                      includeMaintenance
                        ? 'bg-[#F7EEE4] dark:bg-[#241D17] border-[#DFCBB5] text-[#B27338] font-semibold'
                        : 'bg-[#FFFFFF] dark:bg-[#14161B] border-[#E6E1D6] dark:border-[#242732] text-[#595861]'
                    }`}
                  >
                    <span>Monthly Retainer Support</span>
                    <span className="text-[11px]">+₹2,500/mo</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Total Estimate Card */}
            <div className="w-full lg:w-80 bg-[#FFFFFF] dark:bg-[#14161B] border border-[#E6E1D6] dark:border-[#242732] p-6 rounded-md shadow-md space-y-4 shrink-0">
              <span className="text-xs uppercase tracking-wider font-bold text-[#8A8892] dark:text-[#6B6A73]">
                Estimated Development
              </span>

              <div className="border-b border-[#E6E1D6] dark:border-[#242732] pb-4">
                <span className="text-3xl font-black text-[#191A1E] dark:text-[#F4F2EC]">
                  {formatCurrency(estimatedOneTimeTotal)}
                </span>
                <span className="text-xs text-[#8A8892] block mt-0.5">one-time project fee</span>

                {monthlyMaintenanceCost > 0 && (
                  <span className="text-xs font-semibold text-[#B27338] dark:text-[#C88645] block mt-1">
                    + {formatCurrency(monthlyMaintenanceCost)} / month ongoing support
                  </span>
                )}
              </div>

              <div className="space-y-1.5 text-xs text-[#595861] dark:text-[#9E9DA6]">
                <div className="flex justify-between">
                  <span>Base ({activePlan.name.split(' ')[0]}):</span>
                  <span>{formatCurrency(baseCost)}</span>
                </div>
                {extraPagesTotal > 0 && (
                  <div className="flex justify-between">
                    <span>Extra Pages ({extraPagesCount}):</span>
                    <span>+{formatCurrency(extraPagesTotal)}</span>
                  </div>
                )}
                {paymentGatewayCost > 0 && (
                  <div className="flex justify-between">
                    <span>Payment Gateway:</span>
                    <span>+{formatCurrency(paymentGatewayCost)}</span>
                  </div>
                )}
                {multiLanguageCost > 0 && (
                  <div className="flex justify-between">
                    <span>Multi-Language:</span>
                    <span>+{formatCurrency(multiLanguageCost)}</span>
                  </div>
                )}
              </div>

              <button
                type="button"
                onClick={() =>
                  openQuoteModal({
                    packageTierId: activePlan.id,
                    packageTierName: `${activePlan.name} (Estimated ${formatCurrency(
                      estimatedOneTimeTotal
                    )})`,
                  })
                }
                className="w-full py-3 text-xs uppercase tracking-wider font-semibold rounded-sm bg-[#B27338] hover:bg-[#9E632B] text-white shadow-xs flex items-center justify-center gap-1.5"
              >
                <span>Request This Custom Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Distinction Between Starting Price, Add-ons & Recurring Expenses */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="max-w-2xl space-y-2">
          <h2 className="text-2xl font-bold text-[#191A1E] dark:text-[#F4F2EC]">
            Understanding Recurring & Third-Party Expenses
          </h2>
          <p className="text-sm text-[#595861] dark:text-[#9E9DA6]">
            We believe in 100% transparency. Here is how hosting, domains, and payment charges work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recurringCostsExplainer.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-md bg-[#FFFFFF] dark:bg-[#14161B] border border-[#E6E1D6] dark:border-[#242732] space-y-2 text-xs"
            >
              <div className="font-bold text-[#191A1E] dark:text-[#F4F2EC] text-sm">
                {item.title}
              </div>
              <div className="font-mono font-semibold text-[#B27338] dark:text-[#C88645]">
                {item.typicalCost}
              </div>
              <p className="text-[#595861] dark:text-[#9E9DA6] leading-relaxed pt-1">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Add-ons Menu */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="max-w-2xl space-y-1">
          <h2 className="text-2xl font-bold text-[#191A1E] dark:text-[#F4F2EC]">
            A La Carte Add-Ons & Enhancements
          </h2>
          <p className="text-xs text-[#595861] dark:text-[#9E9DA6]">
            Add specific capabilities to any template or website package.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingAddOns.map((addon, idx) => (
            <div
              key={idx}
              className="p-5 rounded-md bg-[#FFFFFF] dark:bg-[#14161B] border border-[#E6E1D6] dark:border-[#242732] space-y-2"
            >
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-[#191A1E] dark:text-[#F4F2EC]">
                  {addon.name}
                </h4>
              </div>
              <div className="text-xs font-semibold text-[#B27338] dark:text-[#C88645] font-mono">
                {addon.price}
              </div>
              <p className="text-xs text-[#595861] dark:text-[#9E9DA6] leading-relaxed">
                {addon.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
