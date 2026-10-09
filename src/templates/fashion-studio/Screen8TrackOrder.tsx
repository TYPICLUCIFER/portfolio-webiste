import React, { useState } from 'react';
import { useFashionStudio } from './FashionStudioContext';
import { FASHION_PRODUCTS } from './fashionStudioData';

export const Screen8TrackOrder: React.FC = () => {
  const { setActiveScreen, themeVariant, trackedOrderId, setTrackedOrderId } = useFashionStudio();
  const isDark = themeVariant === 'atelier-dark';

  const [inputVal, setInputVal] = useState(trackedOrderId || '#AT12345');
  const [activeOrderFound, setActiveOrderFound] = useState(true);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputVal.trim()) {
      setTrackedOrderId(inputVal.trim());
      setActiveOrderFound(true);
    }
  };

  const steps = [
    { name: 'Order Placed', time: '12 Oct 2026, 10:30 AM', status: 'done' },
    { name: 'Fabric Sourcing', time: '12 Oct 2026, 02:00 PM', status: 'done' },
    { name: 'In Stitching', time: '13 Oct 2026, 11:00 AM', status: 'done' },
    { name: 'Quality Check', time: '14 Oct 2026, 01:00 PM', status: 'current' },
    { name: 'Packed', time: 'Expected 15 Oct', status: 'pending' },
    { name: 'Shipped', time: 'Expected 16 Oct', status: 'pending' },
    { name: 'Out for Delivery', time: 'Expected 18 Oct', status: 'pending' },
    { name: 'Delivered', time: 'Expected 19 Oct', status: 'pending' },
  ];

  return (
    <div className={`space-y-12 pb-16 ${isDark ? 'bg-[#0E0F12] text-[#F3F1EC]' : 'bg-[#FFFFFF] text-[#191A1E]'}`}>
      <section className="px-4 sm:px-8 pt-10 max-w-3xl mx-auto space-y-8">
        <div className="space-y-2 text-center sm:text-left">
          <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#B27338]">
            Logistics & Delivery
          </span>
          <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight">
            Track Your Order
          </h1>
          <p className="text-xs sm:text-sm opacity-70">
            Enter your order ID or email to view the live fabrication & dispatch progress.
          </p>
        </div>

        {/* Input Bar */}
        <form onSubmit={handleTrack} className="flex gap-2">
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Enter Order ID (e.g. #AT12345 or #NV12345)"
            required
            className="flex-1 px-4 py-2.5 text-xs rounded-xs border border-current/20 bg-transparent focus:outline-hidden font-mono"
          />
          <button
            type="submit"
            className={`px-6 py-2.5 text-xs uppercase tracking-wider font-bold rounded-xs transition-colors shrink-0 ${
              isDark ? 'bg-white text-black hover:bg-[#F3EFE6]' : 'bg-black text-white hover:bg-[#252525]'
            }`}
          >
            Track
          </button>
        </form>

        {activeOrderFound && (
          <div
            className={`p-6 sm:p-8 border rounded-sm space-y-8 ${
              isDark ? 'bg-[#13151A] border-[#22252F]' : 'bg-[#FAF8F5] border-[#E8E4DA]'
            }`}
          >
            {/* Order Overview Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b pb-6 border-current/10">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider opacity-60">Tracking Order</span>
                <div className="text-xl font-mono font-bold text-[#B27338]">{inputVal}</div>
                <div className="text-xs opacity-75 font-mono">Placed on 12 Oct 2026</div>
              </div>

              {/* Product preview */}
              <div className="flex items-center gap-3">
                <img
                  src={FASHION_PRODUCTS[0].image}
                  alt="Freedom Tee"
                  className="w-12 h-14 object-cover rounded-xs border border-current/10"
                />
                <div className="text-xs">
                  <div className="font-bold">Freedom Tee</div>
                  <div className="opacity-60 text-[11px]">Size: L • Color: Black</div>
                  <div className="text-[11px] font-mono text-emerald-500 font-semibold mt-0.5">
                    ● In Production (Jaipur)
                  </div>
                </div>
              </div>
            </div>

            {/* Stepper Timeline */}
            <div className="space-y-6">
              <h3 className="text-xs uppercase tracking-wider font-bold">
                Order Timeline
              </h3>

              <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-current/15">
                {steps.map((s, idx) => (
                  <div key={idx} className="relative flex items-start gap-4">
                    {/* Status Dot */}
                    <div
                      className={`absolute -left-6 top-1 w-4 h-4 rounded-full flex items-center justify-center text-[9px] ${
                        s.status === 'done'
                          ? 'bg-emerald-500 text-white'
                          : s.status === 'current'
                          ? 'bg-[#B27338] text-white ring-4 ring-[#B27338]/20 animate-pulse'
                          : 'bg-current/20 text-transparent'
                      }`}
                    >
                      {s.status === 'done' && '✓'}
                      {s.status === 'current' && '●'}
                    </div>

                    <div className="text-xs">
                      <div className={`font-bold ${s.status === 'current' ? 'text-[#B27338]' : ''}`}>
                        {s.name}
                      </div>
                      <div className="text-[11px] opacity-60 font-mono mt-0.5">{s.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Help Callout */}
            <div className="pt-4 border-t border-current/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
              <span className="opacity-75">Need assistance or want to update your delivery address?</span>
              <button
                type="button"
                onClick={() => setActiveScreen('contact')}
                className="px-4 py-2 uppercase tracking-wider font-semibold rounded-xs border border-current/20 hover:border-current shrink-0"
              >
                Contact Support →
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};
