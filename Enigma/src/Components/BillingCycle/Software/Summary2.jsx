import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Summary2 = () => {
  const navigate= useNavigate();
  const [selectedOS, setSelectedOS] = useState('ubuntu');
  const [selectedPanel, setSelectedPanel] = useState('none');
  const basePrice = 25.00;
  const cpuPrice = 145.00;
  const ramPrice = 84.00;
  const storagePrice = 35.00;

  const getPanelPrice = () => {
    if (selectedPanel === 'cpanel') return 15.00;
    if (selectedPanel === 'plesk') return 12.00;
    return 0.00;
  };
  const totalPrice = basePrice + cpuPrice + ramPrice + storagePrice + getPanelPrice();
  return (
    <div>
      {/* ================= PRICING SIDEBAR STICKER ================= */}
      <aside className="lg:col-span-4 w-120 sticky top-24">
        <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-md flex flex-col gap-4">
          <h3 className="text-lg font-bold text-[#141b2c] border-b border-gray-100 pb-3">
            Configuration Summary
          </h3>
          
          <div className="space-y-3 py-2 text-sm divide-y divide-gray-50">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-bold text-[#141b2c]">Base Bare Metal</p>
                <p className="text-gray-400 text-xs">Pro Gen 2 Chassis</p>
              </div>
              <span className="font-semibold text-gray-700">${basePrice.toFixed(2)}</span>
            </div>
            
            <div className="flex justify-between items-start pt-2">
              <div>
                <p className="font-bold text-[#141b2c]">Intel Xeon Gold 6248R</p>
                <p className="text-gray-400 text-xs">24 Cores @ 3.00 GHz</p>
              </div>
              <span className="font-semibold text-gray-700">${cpuPrice.toFixed(2)}</span>
            </div>

            <div className="flex justify-between items-start pt-2">
              <div>
                <p className="font-bold text-[#141b2c]">128 GB DDR4 ECC</p>
                <p className="text-gray-400 text-xs">Performance Memory</p>
              </div>
              <span className="font-semibold text-gray-700">${ramPrice.toFixed(2)}</span>
            </div>

            <div className="flex justify-between items-start pt-2">
              <div>
                <p className="font-bold text-[#141b2c]">1 TB NVMe SSD</p>
                <p className="text-gray-400 text-xs">Primary Boot Drive</p>
              </div>
              <span className="font-semibold text-gray-700">${storagePrice.toFixed(2)}</span>
            </div>

            {/* Dynamic Content Mapping Context Fields */}
            <div className="flex justify-between items-start border-t border-gray-100 pt-3">
              <div>
                <p className="font-bold text-[#141b2c]">Operating System</p>
                <p className="text-gray-400 text-xs capitalize">{selectedOS} Platform</p>
              </div>
              <span className="font-semibold text-green-600 text-xs">FREE</span>
            </div>

            <div className="flex justify-between items-start pt-2">
              <div>
                <p className="font-bold text-[#141b2c]">Control Panel</p>
                <p className="text-gray-400 text-xs capitalize">{selectedPanel}</p>
              </div>
              <span className="font-semibold text-[#141b2c]">
                {getPanelPrice() === 0 ? 'FREE' : `$${getPanelPrice().toFixed(2)}`}
              </span>
            </div>
          </div>

          {/* Fee Matrix Sub-block */}
          <div className="bg-gray-50 p-4 rounded-xl space-y-2">
            <div className="flex justify-between items-center text-gray-500 text-xs">
              <span>Subtotal</span>
              <span className="font-semibold">${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center text-gray-500 text-xs border-b border-gray-200 pb-2">
              <span>Estimated Tax</span>
              <span>$0.00</span>
            </div>
            <div className="flex justify-between items-center pt-2">
              <span className="text-sm font-bold text-[#141b2c]">Monthly Total</span>
              <span className="text-xl font-extrabold text-[#0051d5]">${totalPrice.toFixed(2)}</span>
            </div>
          </div>

          
          <button 
            type="button"
            onClick={() => navigate('/security')} // Ready for next route step link
            style={{ backgroundColor: '#0051d5', color: '#ffffff' }}
            className="w-full py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:opacity-95 hover:scale-[1.01] active:scale-95 transition-all duration-200 shadow-lg shadow-blue-700/20 group"
          >
            Continue to Security 
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
          
          <p className="text-center text-xs text-gray-400 font-medium">No setup fees. Cancel anytime.</p>
          
          <div style={{ backgroundColor: 'rgba(0, 144, 169, 0.08)' }} className="flex items-center gap-2 p-3 rounded-lg">
            <span className="text-[#0051d5] text-xs font-bold">✓</span>
            <p className="text-xs text-[#004e5c] font-medium leading-tight">
              Price includes 24/7 Priority Support and 1Gbps unmetered port.
            </p>
          </div>
        </div>
      </aside>
    </div>
  )
}

export default Summary2
