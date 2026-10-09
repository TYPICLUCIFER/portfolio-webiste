import React from 'react';
import {
  Globe,
  ShoppingBag,
  Palette,
  RefreshCw,
  Server,
  ShieldCheck,
  CheckCircle,
  Clock,
  Sparkles,
  ArrowRight,
  MessageSquare,
} from 'lucide-react';
import { services } from '../data/services';
import { siteConfig, formatCurrency } from '../data/siteConfig';
import { useQuoteModal } from '../context/QuoteModalContext';

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe className="w-6 h-6 text-[#B27338] dark:text-[#C88645]" />,
  ShoppingBag: <ShoppingBag className="w-6 h-6 text-[#B27338] dark:text-[#C88645]" />,
  Palette: <Palette className="w-6 h-6 text-[#B27338] dark:text-[#C88645]" />,
  RefreshCw: <RefreshCw className="w-6 h-6 text-[#B27338] dark:text-[#C88645]" />,
  Server: <Server className="w-6 h-6 text-[#B27338] dark:text-[#C88645]" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#B27338] dark:text-[#C88645]" />,
};

export const ServicesPage: React.FC = () => {
  const { openQuoteModal } = useQuoteModal();

  return (
    <div className="space-y-16 pb-20">
      {/* Services Hero */}
      <section className="bg-[#FFFFFF] dark:bg-[#14161B] border-b border-[#E6E1D6] dark:border-[#242732] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#F7EEE4] dark:bg-[#241D17] text-[#B27338] dark:text-[#C88645] border border-[#DFCBB5] dark:border-[#523E2A]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Full-Cycle Web Solutions</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#191A1E] dark:text-[#F4F2EC]">
            Web Development Services
          </h1>

          <p className="text-base sm:text-lg text-[#595861] dark:text-[#9E9DA6] leading-relaxed">
            From adapting our catalogue templates with your custom branding to building full-scale bespoke digital architectures, we partner with growing brands to build websites that deliver results.
          </p>
        </div>
      </section>

      {/* Services Deep-Dive Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((srv) => (
            <div
              key={srv.id}
              className="p-8 rounded-md bg-[#FFFFFF] dark:bg-[#14161B] border border-[#E6E1D6] dark:border-[#242732] shadow-xs flex flex-col justify-between space-y-6 hover:border-[#B27338]/60 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-sm bg-[#F7EEE4] dark:bg-[#241D17] border border-[#DFCBB5] dark:border-[#523E2A] flex items-center justify-center">
                    {iconMap[srv.iconName] || <Sparkles className="w-6 h-6 text-[#B27338]" />}
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase tracking-wider text-[#8A8892]">Starts at</span>
                    <div className="text-base font-bold text-[#191A1E] dark:text-[#F4F2EC]">
                      {formatCurrency(srv.startingPrice)}
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#191A1E] dark:text-[#F4F2EC]">
                  {srv.title}
                </h3>

                <p className="text-sm text-[#595861] dark:text-[#9E9DA6] leading-relaxed">
                  {srv.fullDescription}
                </p>

                {/* Deliverables */}
                <div className="pt-2 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#191A1E] dark:text-[#F4F2EC]">
                    What We Deliver:
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#595861] dark:text-[#9E9DA6]">
                    {srv.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 border-t border-[#E6E1D6] dark:border-[#242732] flex items-center justify-between gap-3 flex-wrap">
                <div className="flex items-center gap-1.5 text-xs text-[#8A8892] dark:text-[#6B6A73] font-mono">
                  <Clock className="w-3.5 h-3.5 text-[#B27338]" />
                  <span>Timeline: {srv.timeline}</span>
                </div>

                <button
                  type="button"
                  onClick={() => openQuoteModal({ businessName: srv.title })}
                  className="px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-sm bg-[#B27338] hover:bg-[#9E632B] dark:bg-[#C88645] text-white flex items-center gap-1.5 transition-colors"
                >
                  <span>Inquire for {srv.title.split(' ')[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Consultation Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-md bg-[#FAF7F2] dark:bg-[#1B1E26] border border-[#E6E1D6] dark:border-[#242732] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <h3 className="text-2xl font-bold text-[#191A1E] dark:text-[#F4F2EC]">
              Not sure which service or template fits your vision?
            </h3>
            <p className="text-sm text-[#595861] dark:text-[#9E9DA6]">
              Share your project brief or schedule a free 15-minute WhatsApp discovery consultation.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 shrink-0">
            <button
              type="button"
              onClick={() => openQuoteModal()}
              className="px-5 py-3 text-xs uppercase tracking-wider font-semibold rounded-sm bg-[#B27338] text-white hover:bg-[#9E632B]"
            >
              Request Free Consultation
            </button>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                'Hi, I would like to consult on my website requirements.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 text-xs uppercase tracking-wider font-semibold rounded-sm border border-[#E6E1D6] dark:border-[#242732] bg-[#FFFFFF] dark:bg-[#14161B] text-[#191A1E] dark:text-[#F4F2EC] flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-[#B27338]" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
