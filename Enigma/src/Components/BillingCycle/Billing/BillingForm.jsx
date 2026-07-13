import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function BillingForm({
  accountType, setAccountType,
  paymentMethod, setPaymentMethod,
  formData, handleInputChange,
  agreeTerms, setAgreeTerms,
  isProvisioning, isSuccess, handleSubmit
}) {
    const navigate= useNavigate();
  return (
    <div className="bg-white rounded-xl border  ml-80 w-190 border-[#c5c6ce] p-6 lg:p-10 shadow-sm">
      <h2 className="text-2xl font-bold text-[#141b2c] mb-10">Billing Details</h2>
      
      <form onSubmit={handleSubmit} className="space-y-10">
        
        {/* Account Workspace Switchers */}
        <div className="space-y-3">
          <label className="block text-sm font-semibold text-[#141b2c]">Account Type</label>
          <div className="grid grid-cols-2 gap-6">
            <button
              type="button"
              onClick={() => setAccountType('individual')}
              className={`relative flex items-center justify-center p-6 border-2 rounded-lg cursor-pointer transition-all ${
                accountType === 'individual'
                  ? 'border-[#0051d5] bg-[#0051d5]/5 text-[#0051d5]'
                  : 'border-[#c5c6ce] text-[#44474d] hover:bg-[#f1f3ff]'
              }`}
            >
              <span className="text-sm font-semibold">Individual</span>
            </button>
            <button
              type="button"
              onClick={() => setAccountType('company')}
              className={`relative flex items-center justify-center p-6 border-2 rounded-lg cursor-pointer transition-all ${
                accountType === 'company'
                  ? 'border-[#0051d5] bg-[#0051d5]/5 text-[#0051d5]'
                  : 'border-[#c5c6ce] text-[#44474d] hover:bg-[#f1f3ff]'
              }`}
            >
              <span className="text-sm font-semibold">Company</span>
            </button>
          </div>
        </div>

        {/* Dynamic Controlled Instrument Selections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['credit_card', 'paypal', 'crypto'].map((method) => {
            const labels = { credit_card: 'Credit Card', paypal: 'PayPal', crypto: 'Crypto' };
            const icons = { credit_card: 'credit_card', paypal: 'account_balance_wallet', crypto: 'currency_bitcoin' };
            const isActive = paymentMethod === method;
            return (
              <button
                key={method}
                type="button"
                onClick={() => setPaymentMethod(method)}
                className={`relative flex items-center justify-between p-6 border-2 rounded-lg cursor-pointer transition-all ${
                  isActive
                    ? 'border-[#0051d5] bg-[#0051d5]/5 text-[#0051d5]'
                    : 'border-[#c5c6ce] text-[#44474d] hover:bg-[#f1f3ff]'
                }`}
              >
                <span className="text-sm font-semibold">{labels[method]}</span>
                <span className={`material-symbols-outlined ${isActive ? 'text-[#0051d5]' : 'text-[#44474d]'}`}>{icons[method]}</span>
              </button>
            );
          })}
        </div>

        {/* Input Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {accountType === 'company' && (
            <div className="md:col-span-2">
              <label className="block text-xs font-semibold text-[#141b2c] mb-1">Company Name</label>
              <input
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                className="w-full bg-white border border-[#c5c6ce] rounded-lg px-6 py-3 text-sm focus:ring-2 focus:ring-[#0051d5]/20 focus:border-[#0051d5] outline-none transition-all"
                placeholder="Acme Corp"
                type="text"
              />
            </div>
          )}

          <div className="md:col-span-2">
            <label className="block text-xs font-semibold text-[#141b2c] mb-1">Cardholder Name</label>
            <input
              name="cardholderName"
              value={formData.cardholderName}
              onChange={handleInputChange}
              className="w-full bg-white border border-[#c5c6ce] rounded-lg px-6 py-3 text-sm focus:ring-2 focus:ring-[#0051d5]/20 focus:border-[#0051d5] outline-none transition-all"
              placeholder="John Doe"
              type="text"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-xs font-semibold text-[#141b2c] mb-1">Tax ID / VAT Number</label>
            <input
              name="taxId"
              value={formData.taxId}
              onChange={handleInputChange}
              className="w-full bg-white border border-[#c5c6ce] rounded-lg px-6 py-3 text-sm focus:ring-2 focus:ring-[#0051d5]/20 focus:border-[#0051d5] outline-none transition-all"
              placeholder="Optional (e.g. EU123456789)"
              type="text"
            />
          </div>

          <div className="md:col-span-2 relative">
            <label className="block text-xs font-semibold text-[#141b2c] mb-1">Card Number</label>
            <div className="relative">
              <input
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleInputChange}
                className="w-full bg-white border border-[#c5c6ce] rounded-lg px-6 py-3 text-sm focus:ring-2 focus:ring-[#0051d5]/20 focus:border-[#0051d5] outline-none transition-all pr-12"
                placeholder="0000 0000 0000 0000"
                type="text"
                required
              />
              <span className="absolute right-6 top-1/2 -translate-y-1/2 flex">
                <span className="material-symbols-outlined text-[#44474d] opacity-40">credit_card</span>
              </span>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#141b2c] mb-1">Expiration Date</label>
            <input
              name="expirationDate"
              value={formData.expirationDate}
              onChange={handleInputChange}
              className="w-full bg-white border border-[#c5c6ce] rounded-lg px-6 py-3 text-sm focus:ring-2 focus:ring-[#0051d5]/20 focus:border-[#0051d5] outline-none transition-all"
              placeholder="MM / YY"
              type="text"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#141b2c] mb-1">Security Code (CVV)</label>
            <input
              name="cvv"
              value={formData.cvv}
              onChange={handleInputChange}
              className="w-full bg-white border border-[#c5c6ce] rounded-lg px-6 py-3 text-sm focus:ring-2 focus:ring-[#0051d5]/20 focus:border-[#0051d5] outline-none transition-all"
              placeholder="•••"
              type="text"
              maxLength="4"
              required
            />
          </div>
        </div>

        {/* Address Segment Mapping */}
        <div className="pt-6 border-t border-[#c5c6ce]">
          <h3 className="text-xl font-bold text-[#141b2c] mb-6">Billing Address</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-xs font-semibold text-[#141b2c] mb-1">Company Name</label>
              <input
                name="billingCompanyName"
                value={formData.billingCompanyName}
                onChange={handleInputChange}
                className="w-full bg-white border border-[#c5c6ce] rounded-lg px-6 py-3 text-sm focus:ring-2 focus:ring-[#0051d5]/20 focus:border-[#0051d5] outline-none transition-all"
                placeholder="Acme Corp"
                type="text"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs font-semibold text-[#141b2c] mb-1">Street Address</label>
              <input
                name="streetAddress"
                value={formData.streetAddress}
                onChange={handleInputChange}
                className="w-full bg-white border border-[#c5c6ce] rounded-lg px-6 py-3 text-sm focus:ring-2 focus:ring-[#0051d5]/20 focus:border-[#0051d5] outline-none transition-all"
                placeholder="123 Cloud St."
                type="text"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#141b2c] mb-1">City</label>
              <input
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className="w-full bg-white border border-[#c5c6ce] rounded-lg px-6 py-3 text-sm focus:ring-2 focus:ring-[#0051d5]/20 focus:border-[#0051d5] outline-none transition-all"
                placeholder="San Francisco"
                type="text"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-[#141b2c] mb-1">State</label>
                <input
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full bg-white border border-[#c5c6ce] rounded-lg px-6 py-3 text-sm focus:ring-2 focus:ring-[#0051d5]/20 focus:border-[#0051d5] outline-none transition-all"
                  placeholder="CA"
                  type="text"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#141b2c] mb-1">ZIP Code</label>
                <input
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  className="w-full bg-white border border-[#c5c6ce] rounded-lg px-6 py-3 text-sm focus:ring-2 focus:ring-[#0051d5]/20 focus:border-[#0051d5] outline-none transition-all"
                  placeholder="94103"
                  type="text"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        {/* Agreements & Click Triggers */}
        <div className="pt-10 flex flex-col items-center gap-6">
          <div className="flex items-start gap-3">
            <input
              id="terms"
              type="checkbox"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
              className="mt-1 h-4 w-4 rounded border-[#c5c6ce] text-[#0051d5] focus:ring-[#0051d5]"
            />
            <label className="text-xs text-[#44474d]" htmlFor="terms">
              I agree to the <a className="text-[#0051d5] hover:underline" href="#">Service Level Agreement</a> and the <a className="text-[#0051d5] hover:underline" href="#">Automatic Renewal Policy</a>. My server will be provisioned instantly upon successful payment.
            </label>
          </div>

          <button
            onClick={()=>navigate('/docs')}
            type="submit"
            disabled={isProvisioning || isSuccess}
            className={`w-full text-white font-semibold text-lg py-4 rounded-xl active:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-lg ${
              isSuccess
                ? 'bg-green-600 shadow-green-600/20'
                : 'bg-[#0051d5] hover:opacity-95 shadow-[#0051d5]/20 disabled:opacity-80 disabled:pointer-events-none'
            }`}
          >
            {isProvisioning && (
              <>
                <span className="material-symbols-outlined animate-spin">sync</span>
                Provisioning...
              </>
            )}
            {isSuccess && (
              <>
                <span className="material-symbols-outlined">check_circle</span>
                Success!
              </>
            )}
            {!isProvisioning && !isSuccess && (
              <>
                Complete Order & Provision Server
                <span className="material-symbols-outlined">rocket_launch</span>
              </>
            )}
          </button>
          
          <p className="text-xs font-semibold text-[#44474d] opacity-60">
            Estimated Provisioning Time: <span className="text-[#141b2c] font-bold">~4 minutes</span>
          </p>
        </div>

      </form>
    </div>
  );
}




