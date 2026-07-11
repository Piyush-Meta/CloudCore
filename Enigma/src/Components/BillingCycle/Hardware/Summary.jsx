import React from 'react'
import { useNavigate } from 'react-router-dom';

const Summary = () => {
  
  const navigate = useNavigate();

  const basePrice = 25.00;
  const cpuPrice = 145.00;
  const ramPrice = 84.00;
  const storagePrice = 35.00;
  const totalPrice = basePrice + cpuPrice + ramPrice + storagePrice;
  return (
    <div>
      <aside className="lg:col-span-4 sticky  grow w-120 top-24">
            <div style={{ backgroundColor: '#ffffff', borderColor: '#c5c6ce' }} className="rounded-2xl border p-6 shadow-md flex flex-col gap-6">
              <h3 className="text-xl font-bold text-[#141b2c] border-b pb-4" style={{ borderColor: '#c5c6ce' }}>
                Configuration Summary
              </h3>
              
              <div className="space-y-4 divide-y divide-gray-100" style={{ borderColor: '#c5c6ce' }}>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-semibold text-[#141b2c]">Base Bare Metal</p>
                    <p style={{ color: '#44474d' }} className="text-xs">Pro Gen 2 Chassis</p>
                  </div>
                  <span className="text-sm font-semibold text-[#141b2c]">${basePrice.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between items-start pt-4">
                  <div>
                    <p className="text-sm font-semibold text-[#141b2c]">Intel Xeon Gold 6248R</p>
                    <p style={{ color: '#44474d' }} className="text-xs">24 Cores @ 3.00 GHz</p>
                  </div>
                  <span className="text-sm font-semibold text-[#141b2c]">${cpuPrice.toFixed(2)}</span>
                </div>

                <div className="flex justify-between items-start pt-4">
                  <div>
                    <p className="text-sm font-semibold text-[#141b2c]">128 GB DDR4 ECC</p>
                    <p style={{ color: '#44474d' }} className="text-xs">Performance Memory</p>
                  </div>
                  <span className="text-sm font-semibold text-[#141b2c]">${ramPrice.toFixed(2)}</span>
                </div>

                <div className="flex justify-between items-start pt-4">
                  <div>
                    <p className="text-sm font-semibold text-[#141b2c]">1 TB NVMe SSD</p>
                    <p style={{ color: '#44474d' }} className="text-xs">Primary Boot Drive</p>
                  </div>
                  <span className="text-sm font-semibold text-[#141b2c]">${storagePrice.toFixed(2)}</span>
                </div>
              </div>

              {/* Aggregated Fee Frame Block */}
              <div style={{ backgroundColor: '#e9edff' }} className="p-4 rounded-xl space-y-3">
                <div className="flex justify-between items-center style={{ color: '#44474d' }} text-sm">
                  <span>Subtotal</span>
                  <span className="font-semibold">${totalPrice.toFixed(2)}</span>
                </div>
                <div style={{ borderColor: '#c5c6ce' }} className="flex justify-between items-center text-sm border-b pb-3">
                  <span>Estimated Tax</span>
                  <span className="font-semibold">$0.00</span>
                </div>
                <div className="flex justify-between items-center pt-1">
                  <span className="text-base font-bold text-[#141b2c]">Monthly Total</span>
                  <span className="text-2xl font-extrabold text-[#0051d5]">${totalPrice.toFixed(2)}</span>
                </div>
              </div>

              {/* Action Button CTA */}
              <button 
                onClick={()=>navigate('/Software')}
                style={{ backgroundColor: '#0051d5', color: '#ffffff' }}
                className="w-full py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:opacity-90 hover:scale-[1.01] active:scale-95 transition-all duration-300 shadow-lg shadow-blue-600/20 group"
              >
                Continue to Software
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              
              <p style={{ color: '#44474d' }} className="text-center text-xs font-medium">No setup fees. Cancel anytime.</p>

              {/* Footnote Badge Box */}
              <div style={{ backgroundColor: 'rgba(172, 237, 255, 0.2)' }} className="flex items-center gap-3 p-3 rounded-lg">
                <svg className="w-5 h-5 text-[#004e5c] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a.75.75 0 00-.708.522L3.511 12.14a1.5 1.5 0 00.33 1.57l1.528 1.528A1.5 1.5 0 006.94 15.5h6.12a1.5 1.5 0 001.06-.44l1.528-1.528a1.5 1.5 0 00.33-1.57l-2.048-8.163a.75.75 0 00-.708-.522H6.267zm6.65 4.793a.75.75 0 00-1.06-1.06l-3.5 3.5-1.5-1.5a.75.75 0 10-1.06 1.06l2 2a.75.75 0 001.06 0l4-4z" clipRule="evenodd" />
                </svg>
                <p style={{ color: '#004e5c' }} className="text-xs font-medium leading-relaxed">
                  Price includes 24/7 Priority Support and 1Gbps unmetered port.
                </p>
              </div>

            </div>
          </aside>
    </div>
  )
}

export default Summary
