import React, { useState } from 'react';
import { Trash2, Plus, Minus, ArrowRight, ShieldCheck, RotateCcw, Clock } from 'lucide-react';
import { useFashionStudio } from './FashionStudioContext';

export const Screen4Cart: React.FC = () => {
  const {
    setActiveScreen,
    themeVariant,
    cartItems,
    updateQuantity,
    removeItem,
    cartSubtotal,
    shippingFee,
    cartTotal,
  } = useFashionStudio();
  const isDark = themeVariant === 'atelier-dark';

  const [coupon, setCoupon] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const [discountAmount, setDiscountAmount] = useState(0);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (coupon.trim().toUpperCase() === 'FIRST10' || coupon.trim().toUpperCase() === 'ATELIER') {
      const discount = Math.round(cartSubtotal * 0.1);
      setDiscountAmount(discount);
      setCouponApplied(true);
    } else if (coupon.trim()) {
      alert('Invalid coupon. Try "FIRST10" for 10% off!');
    }
  };

  const finalTotal = Math.max(0, cartTotal - discountAmount);

  return (
    <div className={`space-y-12 pb-16 ${isDark ? 'bg-[#0E0F12] text-[#F3F1EC]' : 'bg-[#FFFFFF] text-[#191A1E]'}`}>
      <section className="px-4 sm:px-8 pt-10 max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between border-b pb-4 border-current/10">
          <h1 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight">
            Your Cart ({cartItems.reduce((acc, i) => acc + i.quantity, 0)})
          </h1>
          <button
            type="button"
            onClick={() => setActiveScreen('shop')}
            className="text-xs uppercase tracking-wider font-semibold opacity-70 hover:opacity-100 hover:text-[#B27338] transition-colors"
          >
            Continue Shopping →
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="py-16 text-center space-y-4">
            <p className="text-base opacity-70">Your shopping bag is currently empty.</p>
            <button
              type="button"
              onClick={() => setActiveScreen('shop')}
              className="px-6 py-3 text-xs uppercase tracking-widest font-bold bg-[#B27338] text-white rounded-xs"
            >
              Browse The Collection
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Cart Items List (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              {cartItems.map((item, index) => (
                <div
                  key={`${item.product.id}-${item.selectedColor}-${item.selectedSize}`}
                  className={`p-4 border rounded-sm flex gap-4 items-center justify-between transition-colors ${
                    isDark ? 'bg-[#13151A] border-[#22252F]' : 'bg-[#FAF8F5] border-[#E8E4DA]'
                  }`}
                >
                  {/* Thumbnail */}
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-20 object-cover rounded-xs border border-current/10 shrink-0"
                  />

                  {/* Info */}
                  <div className="flex-1 min-w-0 space-y-1">
                    <h3 className="text-sm font-bold truncate">
                      {item.product.name}
                    </h3>
                    <p className="text-xs opacity-70 font-mono">
                      ₹{item.product.price.toLocaleString('en-IN')}
                    </p>
                    <p className="text-[11px] opacity-60">
                      Size: <span className="font-semibold">{item.selectedSize}</span> • Color:{' '}
                      <span className="font-semibold">{item.selectedColor}</span>
                    </p>
                  </div>

                  {/* Quantity & Delete */}
                  <div className="flex items-center gap-3 shrink-0">
                    <div className="flex items-center border border-current/20 rounded-xs">
                      <button
                        type="button"
                        onClick={() => updateQuantity(index, -1)}
                        className="p-1 hover:opacity-100 opacity-70"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-2 text-xs font-mono font-bold">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(index, 1)}
                        className="p-1 hover:opacity-100 opacity-70"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeItem(index)}
                      className="p-1 text-rose-500 hover:text-rose-600 opacity-80 hover:opacity-100"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}

              {/* Coupon Code Input */}
              <div
                className={`p-4 border rounded-sm ${
                  isDark ? 'bg-[#13151A] border-[#22252F]' : 'bg-[#FAF8F5] border-[#E8E4DA]'
                }`}
              >
                <form onSubmit={handleApplyCoupon} className="flex gap-2">
                  <input
                    type="text"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    placeholder="Have a coupon code? (Try FIRST10)"
                    disabled={couponApplied}
                    className="flex-1 px-3 py-2 text-xs rounded-xs border border-current/20 bg-transparent focus:outline-hidden"
                  />
                  <button
                    type="submit"
                    disabled={couponApplied}
                    className="px-4 py-2 text-xs uppercase tracking-wider font-bold rounded-xs border border-current/20 hover:border-current transition-colors disabled:opacity-50"
                  >
                    {couponApplied ? 'Applied' : 'Apply'}
                  </button>
                </form>
                {couponApplied && (
                  <p className="text-[11px] text-emerald-500 mt-1 font-mono">
                    ✓ 10% First Order Discount Applied (-₹{discountAmount.toLocaleString('en-IN')})
                  </p>
                )}
              </div>
            </div>

            {/* Right: Order Summary (5 cols) */}
            <div
              className={`lg:col-span-5 p-6 border rounded-sm space-y-5 ${
                isDark ? 'bg-[#13151A] border-[#22252F]' : 'bg-[#FAF8F5] border-[#E8E4DA]'
              }`}
            >
              <h2 className="text-base font-bold uppercase tracking-wider border-b pb-3 border-current/10">
                Order Summary
              </h2>

              <div className="space-y-2.5 text-xs">
                <div className="flex justify-between">
                  <span className="opacity-70">Subtotal</span>
                  <span className="font-mono font-bold">₹{cartSubtotal.toLocaleString('en-IN')}</span>
                </div>
                {couponApplied && (
                  <div className="flex justify-between text-emerald-500">
                    <span>Discount</span>
                    <span className="font-mono font-bold">-₹{discountAmount.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="opacity-70">Shipping</span>
                  <span className="font-mono font-bold">
                    {shippingFee === 0 ? 'FREE' : `₹${shippingFee.toLocaleString('en-IN')}`}
                  </span>
                </div>
                <div className="pt-3 border-t border-current/10 flex justify-between text-sm font-bold">
                  <span>Total</span>
                  <span className="font-mono text-base font-black">
                    ₹{finalTotal.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setActiveScreen('checkout')}
                className={`w-full py-3.5 text-xs uppercase tracking-widest font-bold rounded-xs transition-colors flex items-center justify-center gap-2 ${
                  isDark
                    ? 'bg-white text-black hover:bg-[#F3EFE6]'
                    : 'bg-black text-white hover:bg-[#252525]'
                }`}
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              {/* Badges */}
              <div className="pt-4 border-t border-current/10 space-y-2 text-[11px] opacity-75">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#B27338]" />
                  <span>Secure 256-bit encrypted payments</span>
                </div>
                <div className="flex items-center gap-2">
                  <RotateCcw className="w-3.5 h-3.5 text-[#B27338]" />
                  <span>7-day easy returns & exchanges</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#B27338]" />
                  <span>Dispatched in 7-10 business days</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};
