import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function OrderSummary() {
  const navigate = useNavigate();
  return (
    <aside className="lg:col-span-4 p-10 relative px-4">
      <div className="sticky top-24 space-y-6">
        
        {/* 1. Main Order Summary Card */}
        <div 
          style={{ backgroundColor: '#091c35', borderColor: '#374762' }} // primary-container, on-primary-fixed-variant
          className="text-white rounded-xl overflow-hidden shadow-xl border"
        >
          {/* Card Header */}
          <div style={{ borderColor: '#374762' }} className="p-4 border-b flex items-center justify-between">
            <h2 className="text-lg font-bold">Order Summary</h2>
            {/* Receipt Icon */}
            <svg className="w-6 h-6 text-[#7484a3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>

          {/* Card Items Content Area */}
          <div className="p-4 space-y-4">
            
            {/* Processor */}
            <div className="flex justify-between items-start gap-4">
              <div>
                <p style={{ color: '#7484a3' }} className="text-xs font-semibold uppercase tracking-wider">Processor</p>
                <p className="text-sm font-bold mt-0.5">Intel® Xeon® Gold</p>
              </div>
              <span style={{ color: '#7484a3' }} className="text-sm font-medium">$199.00</span>
            </div>

            {/* Memory */}
            <div className="flex justify-between items-start gap-4">
              <div>
                <p style={{ color: '#7484a3' }} className="text-xs font-semibold uppercase tracking-wider">Memory</p>
                <p className="text-sm font-bold mt-0.5">64GB DDR4 ECC</p>
              </div>
              <span style={{ color: '#7484a3' }} className="text-sm font-medium">Included</span>
            </div>

            {/* Storage */}
            <div className="flex justify-between items-start gap-4">
              <div>
                <p style={{ color: '#7484a3' }} className="text-xs font-semibold uppercase tracking-wider">Storage</p>
                <p className="text-sm font-bold mt-0.5">512 GB NVMe</p>
              </div>
              <span style={{ color: '#7484a3' }} className="text-sm font-medium">Included</span>
            </div>

            {/* Uptime SLA */}
            <div className="flex justify-between items-start gap-4">
              <div>
                <p style={{ color: '#7484a3' }} className="text-xs font-semibold uppercase tracking-wider">Uptime SLA</p>
                <p className="text-sm font-bold mt-0.5">99.99% Guarantee</p>
              </div>
              <span style={{ color: '#7484a3' }} className="text-sm font-medium">Free</span>
            </div>

            <hr style={{ borderColor: '#374762' }} />

            {/* Pricing Summary Block */}
            <div className="pt-2 space-y-2">
              <div className="flex justify-between items-center">
                <span style={{ color: '#7484a3' }} className="text-sm font-medium">Monthly Subtotal</span>
                <span className="text-2xl font-extrabold text-white">$199.00</span>
              </div>
              
              {/* Setup Fee row using on-tertiary-container (#0090a9) color style */}
              <div className="flex justify-between items-center text-[#0090a9]">
                <span className="text-xs font-semibold">Setup Fee</span>
                <span className="text-xs font-bold uppercase tracking-wider">Waived</span>
              </div>
            </div>

            {/* Primary Action Call-to-action Button */}
            <button
            onClick={() => navigate('/hardwaresection')}
            style={{ backgroundColor: '#0051d5', color: '#ffffff' }}
            className=" text-center w-full py-3 rounded-lg font-bold text-sm hover:scale-[0.98] transition-transform duration-150 mt-4 flex items-center justify-center gap-2 shadow-md shadow-blue-900/30"
            >
             Continue to Software
          {/* Arrow Right Icon */}
           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
          </button>
          </div>

          {/* Bottom Provisioning Banner bar using on-primary-fixed-variant and surface-variant */}
          <div style={{ backgroundColor: '#374762' }} className="p-3 text-center">
            <p style={{ color: '#dbe2f9' }} className="text-xs font-medium tracking-wide">
              Estimated Provisioning Time: 4 Hours
            </p>
          </div>
        </div>

        {/* 2. Help Support Desk Widget Box Container */}
        <div 
          style={{ backgroundColor: '#f1f3ff', borderColor: '#c5c6ce' }} // surface-container-low, outline-variant
          className="p-5 border rounded-xl shadow-sm"
        >
          <h4 style={{ color: '#141b2c' }} className="text-sm font-bold mb-1">
            Need Assistance?
          </h4>
          <p style={{ color: '#44474d' }} className="text-xs leading-relaxed mb-4">
            Our enterprise architects are available 24/7 to help you configure the perfect environment.
          </p>
          <button 
            style={{ borderColor: '#0051d5', color: '#0051d5' }} // secondary border and text
            className="w-full border py-2.5 rounded-lg text-xs font-bold bg-white hover:bg-blue-50 transition-colors duration-150"
          >
            Talk to an Expert
          </button>
        </div>

      </div>
    </aside>
  );
}
