import React, { useState } from 'react';
import { User, Package, MapPin, Heart, Settings, LogOut, ArrowRight } from 'lucide-react';
import { useFashionStudio } from './FashionStudioContext';
import { FASHION_ORDERS } from './fashionStudioData';

export const Screen9Account: React.FC = () => {
  const { setActiveScreen, themeVariant, setTrackedOrderId } = useFashionStudio();
  const isDark = themeVariant === 'atelier-dark';

  const [activeTab, setActiveTab] = useState<'All' | 'Processing' | 'Shipped' | 'Delivered'>('All');

  const filteredOrders = activeTab === 'All'
    ? FASHION_ORDERS.slice(0, 3)
    : FASHION_ORDERS.slice(0, 3).filter((o) => o.status === activeTab);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Processing':
        return 'bg-amber-500/10 text-amber-500 border-amber-500/30';
      case 'Shipped':
        return 'bg-sky-500/10 text-sky-400 border-sky-500/30';
      case 'Delivered':
        return 'bg-emerald-500/10 text-emerald-500 border-emerald-500/30';
      default:
        return 'bg-gray-500/10 text-gray-400 border-gray-500/30';
    }
  };

  const handleViewOrder = (orderId: string) => {
    setTrackedOrderId(orderId);
    setActiveScreen('track');
  };

  return (
    <div className={`space-y-12 pb-16 ${isDark ? 'bg-[#0E0F12] text-[#F3F1EC]' : 'bg-[#FFFFFF] text-[#191A1E]'}`}>
      <section className="px-4 sm:px-8 pt-10 max-w-6xl mx-auto space-y-8">
        <div className="space-y-1">
          <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#B27338]">
            Customer Portal
          </span>
          <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight">
            My Account
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left Navigation Sidebar (4 cols) */}
          <div
            className={`md:col-span-4 p-4 border rounded-sm space-y-1 text-xs font-semibold uppercase tracking-wider ${
              isDark ? 'bg-[#13151A] border-[#22252F]' : 'bg-[#FAF8F5] border-[#E8E4DA]'
            }`}
          >
            <button
              type="button"
              className="w-full flex items-center gap-3 p-3 rounded-xs opacity-70 hover:opacity-100"
            >
              <User className="w-4 h-4" />
              <span>Profile Overview</span>
            </button>

            <button
              type="button"
              className="w-full flex items-center gap-3 p-3 rounded-xs bg-[#B27338] text-white font-bold"
            >
              <Package className="w-4 h-4" />
              <span>My Orders (3)</span>
            </button>

            <button
              type="button"
              className="w-full flex items-center gap-3 p-3 rounded-xs opacity-70 hover:opacity-100"
            >
              <MapPin className="w-4 h-4" />
              <span>Saved Addresses</span>
            </button>

            <button
              type="button"
              className="w-full flex items-center gap-3 p-3 rounded-xs opacity-70 hover:opacity-100"
            >
              <Heart className="w-4 h-4" />
              <span>Wishlist (4)</span>
            </button>

            <button
              type="button"
              className="w-full flex items-center gap-3 p-3 rounded-xs opacity-70 hover:opacity-100"
            >
              <Settings className="w-4 h-4" />
              <span>Account Settings</span>
            </button>

            <div className="pt-2 border-t border-current/10">
              <button
                type="button"
                onClick={() => setActiveScreen('home')}
                className="w-full flex items-center gap-3 p-3 rounded-xs opacity-60 hover:opacity-100 text-rose-500"
              >
                <LogOut className="w-4 h-4" />
                <span>Log Out</span>
              </button>
            </div>
          </div>

          {/* Right Pane: My Orders (8 cols) */}
          <div className="md:col-span-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-3 border-current/10">
              <h2 className="text-xl font-bold uppercase tracking-tight">
                Order History
              </h2>

              {/* Status Filter Tabs */}
              <div className="flex items-center gap-1.5 overflow-x-auto text-xs">
                {(['All', 'Processing', 'Shipped', 'Delivered'] as const).map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-1 rounded-xs uppercase tracking-wider font-semibold transition-colors ${
                      activeTab === tab
                        ? 'bg-[#B27338] text-white'
                        : 'border border-current/15 opacity-70 hover:opacity-100'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Orders List */}
            <div className="space-y-4">
              {filteredOrders.map((order) => (
                <div
                  key={order.id}
                  className={`p-5 border rounded-sm space-y-4 transition-colors ${
                    isDark ? 'bg-[#13151A] border-[#22252F]' : 'bg-[#FAF8F5] border-[#E8E4DA]'
                  }`}
                >
                  <div className="flex items-center justify-between flex-wrap gap-2 text-xs">
                    <div className="flex items-center gap-3">
                      <span className="font-mono font-bold text-sm">{order.id}</span>
                      <span className="opacity-60 font-mono text-[11px]">{order.date}</span>
                    </div>

                    <span
                      className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full border ${getStatusBadge(
                        order.status
                      )}`}
                    >
                      {order.status}
                    </span>
                  </div>

                  {/* Items Strip */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      {order.items.map((it, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <img
                            src={it.image}
                            alt=""
                            className="w-12 h-14 object-cover rounded-xs border border-current/10"
                          />
                          <span className="text-xs font-medium truncate max-w-[140px] sm:max-w-none">
                            {it.name}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="text-right">
                      <div className="text-xs opacity-60">Total Amount</div>
                      <div className="text-sm font-mono font-bold">
                        ₹{order.total.toLocaleString('en-IN')}
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-current/10 flex items-center justify-between text-xs">
                    <span className="text-[11px] opacity-60">Standard Shipping • Prepaid</span>
                    <button
                      type="button"
                      onClick={() => handleViewOrder(order.id)}
                      className="text-[#B27338] hover:underline font-semibold flex items-center gap-1"
                    >
                      <span>View Live Tracking</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
