import React, { useState } from 'react';
import { CheckCircle, ShieldCheck, CreditCard, ArrowRight } from 'lucide-react';
import { useFashionStudio } from './FashionStudioContext';

export const Screen5Checkout: React.FC = () => {
  const { setActiveScreen, themeVariant, cartTotal, setTrackedOrderId } = useFashionStudio();
  const isDark = themeVariant === 'atelier-dark';

  const [shippingMethod, setShippingMethod] = useState<'standard' | 'express'>('standard');
  const [paymentMethod, setPaymentMethod] = useState<'razorpay' | 'cod'>('razorpay');
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [generatedId, setGeneratedId] = useState('#AT12345');

  const [formData, setFormData] = useState({
    email: 'rohan.sharma@example.com',
    fullName: 'Rohan Sharma',
    phone: '+91 98765 43210',
    address: '42, C-Scheme, Subhash Marg',
    pincode: '302001',
    city: 'Jaipur',
    state: 'Rajasthan',
  });

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const id = isDark ? '#AT12345' : '#NV12345';
    setGeneratedId(id);
    setTrackedOrderId(id);
    setOrderPlaced(true);
  };

  const shippingCost = shippingMethod === 'standard' ? 99 : 199;
  const codFee = paymentMethod === 'cod' ? 49 : 0;
  const totalPayable = cartTotal - 99 + shippingCost + codFee;

  return (
    <div className={`space-y-12 pb-16 ${isDark ? 'bg-[#0E0F12] text-[#F3F1EC]' : 'bg-[#FFFFFF] text-[#191A1E]'}`}>
      <section className="px-4 sm:px-8 pt-10 max-w-4xl mx-auto space-y-8">
        {/* Checkout Stepper */}
        <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-wider font-semibold border-b pb-4 border-current/10">
          <span className="flex items-center gap-1.5 text-[#B27338]">
            <span className="w-5 h-5 rounded-full bg-[#B27338] text-white flex items-center justify-center text-[10px]">1</span>
            <span>Information</span>
          </span>
          <span className="opacity-30">→</span>
          <span className="flex items-center gap-1.5 text-[#B27338]">
            <span className="w-5 h-5 rounded-full bg-[#B27338] text-white flex items-center justify-center text-[10px]">2</span>
            <span>Shipping</span>
          </span>
          <span className="opacity-30">→</span>
          <span className="flex items-center gap-1.5 opacity-60">
            <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[10px]">3</span>
            <span>Payment</span>
          </span>
        </div>

        {orderPlaced ? (
          /* Order Success View */
          <div
            className={`p-8 sm:p-12 rounded-sm border text-center space-y-6 ${
              isDark ? 'bg-[#13151A] border-[#22252F]' : 'bg-[#FAF8F5] border-[#E8E4DA]'
            }`}
          >
            <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center border border-emerald-500/20">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-widest text-[#B27338] font-bold">
                Order Confirmed
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight">
                Thank You, {formData.fullName.split(' ')[0]}!
              </h2>
              <p className="text-xs sm:text-sm opacity-75 max-w-md mx-auto">
                Your order <strong className="font-mono text-[#B27338]">{generatedId}</strong> has been logged and sent to our Jaipur workshop for crafting.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <button
                type="button"
                onClick={() => setActiveScreen('track')}
                className="px-6 py-3 text-xs uppercase tracking-widest font-bold bg-[#B27338] text-white rounded-xs flex items-center justify-center gap-2"
              >
                <span>Track This Order Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                type="button"
                onClick={() => setActiveScreen('home')}
                className="px-6 py-3 text-xs uppercase tracking-widest font-bold border border-current/20 rounded-xs hover:border-current"
              >
                Return to Store
              </button>
            </div>
          </div>
        ) : (
          /* Checkout Form */
          <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Left Form: Details, Address & Shipping (7 cols) */}
            <div className="md:col-span-7 space-y-6">
              {/* Contact Information */}
              <div
                className={`p-5 rounded-sm border space-y-3 ${
                  isDark ? 'bg-[#13151A] border-[#22252F]' : 'bg-[#FAF8F5] border-[#E8E4DA]'
                }`}
              >
                <h3 className="text-xs font-bold uppercase tracking-wider">
                  Contact Information
                </h3>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Email Address"
                  required
                  className="w-full px-3 py-2 text-xs rounded-xs border border-current/20 bg-transparent focus:outline-hidden"
                />
                <label className="flex items-center gap-2 text-[11px] opacity-75 cursor-pointer">
                  <input type="checkbox" defaultChecked className="rounded-xs accent-[#B27338]" />
                  <span>Create an account for faster checkout</span>
                </label>
              </div>

              {/* Shipping Address */}
              <div
                className={`p-5 rounded-sm border space-y-3 ${
                  isDark ? 'bg-[#13151A] border-[#22252F]' : 'bg-[#FAF8F5] border-[#E8E4DA]'
                }`}
              >
                <h3 className="text-xs font-bold uppercase tracking-wider">
                  Shipping Address
                </h3>
                <div className="space-y-2.5">
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Full Name"
                    required
                    className="w-full px-3 py-2 text-xs rounded-xs border border-current/20 bg-transparent focus:outline-hidden"
                  />
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Phone Number (10 digits)"
                    required
                    className="w-full px-3 py-2 text-xs rounded-xs border border-current/20 bg-transparent focus:outline-hidden"
                  />
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="House / Street Address"
                    required
                    className="w-full px-3 py-2 text-xs rounded-xs border border-current/20 bg-transparent focus:outline-hidden"
                  />
                  <div className="grid grid-cols-3 gap-2">
                    <input
                      type="text"
                      value={formData.pincode}
                      onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                      placeholder="Pincode"
                      required
                      className="px-3 py-2 text-xs rounded-xs border border-current/20 bg-transparent focus:outline-hidden"
                    />
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="City"
                      required
                      className="px-3 py-2 text-xs rounded-xs border border-current/20 bg-transparent focus:outline-hidden"
                    />
                    <input
                      type="text"
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      placeholder="State"
                      required
                      className="px-3 py-2 text-xs rounded-xs border border-current/20 bg-transparent focus:outline-hidden"
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Method */}
              <div
                className={`p-5 rounded-sm border space-y-3 ${
                  isDark ? 'bg-[#13151A] border-[#22252F]' : 'bg-[#FAF8F5] border-[#E8E4DA]'
                }`}
              >
                <h3 className="text-xs font-bold uppercase tracking-wider">
                  Shipping Method
                </h3>
                <div className="space-y-2 text-xs">
                  <label
                    onClick={() => setShippingMethod('standard')}
                    className={`p-3 rounded-xs border flex items-center justify-between cursor-pointer ${
                      shippingMethod === 'standard' ? 'border-[#B27338] bg-[#B27338]/5 font-semibold' : 'border-current/10'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <input type="radio" checked={shippingMethod === 'standard'} readOnly className="accent-[#B27338]" />
                      <span>Standard Delivery (7-10 days)</span>
                    </div>
                    <span className="font-mono">₹99</span>
                  </label>

                  <label
                    onClick={() => setShippingMethod('express')}
                    className={`p-3 rounded-xs border flex items-center justify-between cursor-pointer ${
                      shippingMethod === 'express' ? 'border-[#B27338] bg-[#B27338]/5 font-semibold' : 'border-current/10'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <input type="radio" checked={shippingMethod === 'express'} readOnly className="accent-[#B27338]" />
                      <span>Express Delivery (3-5 days)</span>
                    </div>
                    <span className="font-mono">₹199</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Right: Payment & Summary (5 cols) */}
            <div className="md:col-span-5 space-y-6">
              {/* Payment Method */}
              <div
                className={`p-5 rounded-sm border space-y-3 ${
                  isDark ? 'bg-[#13151A] border-[#22252F]' : 'bg-[#FAF8F5] border-[#E8E4DA]'
                }`}
              >
                <h3 className="text-xs font-bold uppercase tracking-wider">
                  Payment Method
                </h3>
                <div className="space-y-2 text-xs">
                  <label
                    onClick={() => setPaymentMethod('razorpay')}
                    className={`p-3 rounded-xs border flex flex-col gap-2 cursor-pointer ${
                      paymentMethod === 'razorpay' ? 'border-[#B27338] bg-[#B27338]/5 font-semibold' : 'border-current/10'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <input type="radio" checked={paymentMethod === 'razorpay'} readOnly className="accent-[#B27338]" />
                        <span>UPI / Cards / Net Banking</span>
                      </div>
                      <CreditCard className="w-4 h-4 text-[#B27338]" />
                    </div>
                    <div className="flex items-center gap-2 text-[10px] opacity-75 font-mono">
                      <span className="px-1.5 py-0.5 rounded-xs border border-current/20">VISA</span>
                      <span className="px-1.5 py-0.5 rounded-xs border border-current/20">Mastercard</span>
                      <span className="px-1.5 py-0.5 rounded-xs border border-current/20">RuPay</span>
                      <span className="px-1.5 py-0.5 rounded-xs border border-current/20">UPI</span>
                    </div>
                  </label>

                  <label
                    onClick={() => setPaymentMethod('cod')}
                    className={`p-3 rounded-xs border flex items-center justify-between cursor-pointer ${
                      paymentMethod === 'cod' ? 'border-[#B27338] bg-[#B27338]/5 font-semibold' : 'border-current/10'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <input type="radio" checked={paymentMethod === 'cod'} readOnly className="accent-[#B27338]" />
                      <span>Cash on Delivery</span>
                    </div>
                    <span className="text-[11px] font-mono opacity-80">+₹49</span>
                  </label>
                </div>
              </div>

              {/* Final Total Card */}
              <div
                className={`p-5 rounded-sm border space-y-4 ${
                  isDark ? 'bg-[#13151A] border-[#22252F]' : 'bg-[#FAF8F5] border-[#E8E4DA]'
                }`}
              >
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="opacity-70">Shipping</span>
                    <span className="font-mono font-bold">₹{shippingCost}</span>
                  </div>
                  {paymentMethod === 'cod' && (
                    <div className="flex justify-between">
                      <span className="opacity-70">COD Handling</span>
                      <span className="font-mono font-bold">₹49</span>
                    </div>
                  )}
                  <div className="pt-2 border-t border-current/10 flex justify-between font-bold text-sm">
                    <span>Total Amount</span>
                    <span className="font-mono text-base font-black">
                      ₹{totalPayable.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  className={`w-full py-3.5 text-xs uppercase tracking-widest font-bold rounded-xs transition-colors flex items-center justify-center gap-2 ${
                    isDark
                      ? 'bg-white text-black hover:bg-[#F3EFE6]'
                      : 'bg-black text-white hover:bg-[#252525]'
                  }`}
                >
                  <ShieldCheck className="w-4 h-4 text-[#B27338]" />
                  <span>Place Order — ₹{totalPayable.toLocaleString('en-IN')}</span>
                </button>

                <p className="text-[10px] text-center opacity-60">
                  By placing an order, you agree to our Terms of Service & Return Policy.
                </p>
              </div>
            </div>
          </form>
        )}
      </section>
    </div>
  );
};
