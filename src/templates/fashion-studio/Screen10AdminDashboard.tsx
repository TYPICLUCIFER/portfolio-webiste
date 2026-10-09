import React from 'react';
import {
  LayoutDashboard,
  ShoppingBag,
  Package,
  Users,
  TrendingUp,
  TicketPercent,
  Settings,
  Calendar,
} from 'lucide-react';
import { useFashionStudio } from './FashionStudioContext';
import { ADMIN_STATS, FASHION_ORDERS } from './fashionStudioData';

export const Screen10AdminDashboard: React.FC = () => {
  const { setActiveScreen, themeVariant, setTrackedOrderId } = useFashionStudio();
  const isDark = themeVariant === 'atelier-dark';
  const brandName = isDark ? 'ATELIER' : 'NOVA';

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Processing':
        return 'bg-amber-500/15 text-amber-500 border-amber-500/30';
      case 'Shipped':
        return 'bg-sky-500/15 text-sky-400 border-sky-500/30';
      case 'Delivered':
        return 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30';
      case 'Canceled':
        return 'bg-rose-500/15 text-rose-400 border-rose-500/30';
      default:
        return 'bg-gray-500/15 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className={`space-y-8 pb-16 ${isDark ? 'bg-[#0E0F12] text-[#F3F1EC]' : 'bg-[#FFFFFF] text-[#191A1E]'}`}>
      <section className="px-4 sm:px-8 pt-8 max-w-7xl mx-auto space-y-6">
        {/* Banner indicating this is the client's store management view */}
        <div className="p-3 bg-[#B27338]/10 border border-[#B27338]/30 rounded-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <div>
            <span className="font-bold text-[#B27338] uppercase tracking-wider block">
              ✦ Store Owner Back-Office View (Screen 10 of 10)
            </span>
            <span className="opacity-80">
              This dashboard is delivered ready with the template so you or your client can monitor store revenue, track orders, and manage inventory.
            </span>
          </div>
          <button
            type="button"
            onClick={() => setActiveScreen('home')}
            className="px-3 py-1 text-[11px] uppercase tracking-wider font-bold rounded-xs bg-[#B27338] text-white shrink-0"
          >
            Switch to Storefront
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Admin Navigation Sidebar (3 cols) */}
          <div
            className={`lg:col-span-3 p-4 border rounded-sm space-y-1 text-xs font-semibold uppercase tracking-wider ${
              isDark ? 'bg-[#13151A] border-[#22252F]' : 'bg-[#FAF8F5] border-[#E8E4DA]'
            }`}
          >
            <div className="px-3 py-2 border-b border-current/10 mb-2">
              <span className="text-sm font-bold tracking-[0.2em]">{brandName} OS</span>
              <span className="text-[10px] opacity-60 block font-mono">Store Manager v2.4</span>
            </div>

            <button
              type="button"
              className="w-full flex items-center gap-3 p-2.5 rounded-xs bg-[#B27338] text-white font-bold"
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>Dashboard</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveScreen('shop')}
              className="w-full flex items-center gap-3 p-2.5 rounded-xs opacity-75 hover:opacity-100"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Products (48)</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveScreen('account')}
              className="w-full flex items-center gap-3 p-2.5 rounded-xs opacity-75 hover:opacity-100"
            >
              <Package className="w-4 h-4" />
              <span>Orders (156)</span>
            </button>

            <button
              type="button"
              className="w-full flex items-center gap-3 p-2.5 rounded-xs opacity-75 hover:opacity-100"
            >
              <Users className="w-4 h-4" />
              <span>Customers</span>
            </button>

            <button
              type="button"
              className="w-full flex items-center gap-3 p-2.5 rounded-xs opacity-75 hover:opacity-100"
            >
              <TrendingUp className="w-4 h-4" />
              <span>Analytics</span>
            </button>

            <button
              type="button"
              className="w-full flex items-center gap-3 p-2.5 rounded-xs opacity-75 hover:opacity-100"
            >
              <TicketPercent className="w-4 h-4" />
              <span>Discounts</span>
            </button>

            <button
              type="button"
              className="w-full flex items-center gap-3 p-2.5 rounded-xs opacity-75 hover:opacity-100"
            >
              <Settings className="w-4 h-4" />
              <span>Settings</span>
            </button>
          </div>

          {/* Admin Main Pane (9 cols) */}
          <div className="lg:col-span-9 space-y-6">
            {/* Header & Date Filter */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b pb-4 border-current/10">
              <div>
                <h1 className="text-2xl font-bold uppercase tracking-tight">
                  Dashboard Overview
                </h1>
                <p className="text-xs opacity-60">Store analytics & dispatch operations</p>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono border border-current/15 px-3 py-1.5 rounded-xs">
                <Calendar className="w-3.5 h-3.5 text-[#B27338]" />
                <span>1 Oct – 31 Oct 2026</span>
              </div>
            </div>

            {/* Metrics KPI Cards Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div
                className={`p-4 border rounded-sm space-y-1 ${
                  isDark ? 'bg-[#13151A] border-[#22252F]' : 'bg-[#FAF8F5] border-[#E8E4DA]'
                }`}
              >
                <span className="text-[10px] uppercase tracking-wider opacity-60">Total Orders</span>
                <div className="text-2xl font-mono font-bold">{ADMIN_STATS.totalOrders}</div>
                <div className="text-[11px] text-emerald-500 font-mono">{ADMIN_STATS.totalOrdersChange}</div>
              </div>

              <div
                className={`p-4 border rounded-sm space-y-1 ${
                  isDark ? 'bg-[#13151A] border-[#22252F]' : 'bg-[#FAF8F5] border-[#E8E4DA]'
                }`}
              >
                <span className="text-[10px] uppercase tracking-wider opacity-60">Revenue</span>
                <div className="text-2xl font-mono font-bold">{ADMIN_STATS.revenue}</div>
                <div className="text-[11px] text-emerald-500 font-mono">{ADMIN_STATS.revenueChange}</div>
              </div>

              <div
                className={`p-4 border rounded-sm space-y-1 ${
                  isDark ? 'bg-[#13151A] border-[#22252F]' : 'bg-[#FAF8F5] border-[#E8E4DA]'
                }`}
              >
                <span className="text-[10px] uppercase tracking-wider opacity-60">Avg. Order Value</span>
                <div className="text-2xl font-mono font-bold">{ADMIN_STATS.avgOrder}</div>
                <div className="text-[11px] text-emerald-500 font-mono">{ADMIN_STATS.avgOrderChange}</div>
              </div>

              <div
                className={`p-4 border rounded-sm space-y-1 ${
                  isDark ? 'bg-[#13151A] border-[#22252F]' : 'bg-[#FAF8F5] border-[#E8E4DA]'
                }`}
              >
                <span className="text-[10px] uppercase tracking-wider opacity-60">Customers</span>
                <div className="text-2xl font-mono font-bold">{ADMIN_STATS.customers}</div>
                <div className="text-[11px] text-emerald-500 font-mono">{ADMIN_STATS.customersChange}</div>
              </div>
            </div>

            {/* Recent Orders Table */}
            <div
              className={`border rounded-sm overflow-hidden ${
                isDark ? 'bg-[#13151A] border-[#22252F]' : 'bg-[#FAF8F5] border-[#E8E4DA]'
              }`}
            >
              <div className="p-4 border-b border-current/10 flex items-center justify-between">
                <h3 className="text-xs font-bold uppercase tracking-wider">
                  Recent Orders
                </h3>
                <span className="text-[11px] text-[#B27338] font-mono">View All 156 Orders →</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="border-b border-current/10 text-[10px] uppercase tracking-wider opacity-60">
                    <tr>
                      <th className="p-3">Order ID</th>
                      <th className="p-3">Customer</th>
                      <th className="p-3">Amount</th>
                      <th className="p-3">Status</th>
                      <th className="p-3 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-current/10">
                    {FASHION_ORDERS.map((order) => (
                      <tr key={order.id} className="hover:bg-current/5 transition-colors">
                        <td className="p-3 font-mono font-bold text-[#B27338]">
                          {order.id}
                        </td>
                        <td className="p-3 font-medium">
                          {order.customerName}
                        </td>
                        <td className="p-3 font-mono">
                          ₹{order.total.toLocaleString('en-IN')}
                        </td>
                        <td className="p-3">
                          <span
                            className={`px-2 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider border ${getStatusBadge(
                              order.status
                            )}`}
                          >
                            {order.status}
                          </span>
                        </td>
                        <td className="p-3 text-right">
                          <button
                            type="button"
                            onClick={() => {
                              setTrackedOrderId(order.id);
                              setActiveScreen('track');
                            }}
                            className="text-[#B27338] hover:underline font-mono text-[11px]"
                          >
                            Track →
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
