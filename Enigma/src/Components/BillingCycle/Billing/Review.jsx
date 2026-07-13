import React from 'react';

export default function Review() {
  return (
    <div className="space-y-6 w-90">
      <h2 className="text-2xl font-bold text-[#141b2c]">Review Order</h2>
      
      <div className="bg-white/80 backdrop-blur-md border border-[#e4e7ec] rounded-xl overflow-hidden shadow-sm">
        <div className="p-6 border-b border-[#c5c6ce] bg-[#f1f3ff] flex justify-between items-center">
          <h3 className="text-xl font-bold text-[#141b2c]">Server Instance</h3>
          <span className="px-3 py-1 bg-[#0051d5]/10 text-[#0051d5] text-xs font-semibold rounded-full">Dedicated</span>
        </div>
        
        <div className="relative h-40 bg-white p-3">
          <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent z-10"></div>
          <img alt="Server Visualization" className="w-full h-full object-contain relative z-0 opacity-80" src="https://lh3.googleusercontent.com/aida/AP1WRLsjNgV-pAlnF3766ff-Z5t6DH5U73tiYDmRUvG28YsWgJNhcfwW0rliakRBk2Mw-fTFOJcDx8NyJ513oWARUIWXdJjuy77H8ANa6WvmQI1-zleXRY61vmQDzU4s3TRF5i4nCgCQCsrnRFsIhfyjktWyBk-vZzEVoUmfRgo-4xdAK8KCN4nM0_OSb76uGCwxN5s9F4K2WBDG7_knOR4HdgM0Qr0wuXUO-tC2dg17AW4M4D5rlgzLo_Ib-Ws" />
        </div>
        
        <div className="p-6 space-y-6">
          <div>
            <div className="flex items-center gap-1 mb-1">
              <span className="material-symbols-outlined text-[#0051d5] text-base">memory</span>
              <p className="text-sm font-semibold text-[#141b2c]">Hardware Configuration</p>
            </div>
            <ul className="space-y-1 ml-7 text-xs text-[#44474d]">
              <li>Intel Xeon Gold (16-Core)</li>
              <li>128GB DDR4 ECC RAM</li>
              <li>1TB NVMe Enterprise Storage</li>
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-1 mb-1">
              <span className="material-symbols-outlined text-[#0051d5] text-base">terminal</span>
              <p className="text-sm font-semibold text-[#141b2c]">Software & OS</p>
            </div>
            <ul className="space-y-1 ml-7 text-xs text-[#44474d]">
              <li>Ubuntu 22.04 LTS</li>
              <li>No Control Panel (Raw Access)</li>
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-1 mb-1">
              <span className="material-symbols-outlined text-[#0051d5] text-base">shield</span>
              <p className="text-sm font-semibold text-[#141b2c]">Security & Monitoring</p>
            </div>
            <ul className="space-y-1 ml-7 text-xs text-[#44474d]">
              <li>Daily Automated Backups</li>
              <li>Standard Uptime Monitoring</li>
            </ul>
          </div>
        </div>

        <div className="p-6 bg-white border-t border-[#c5c6ce] space-y-3">
          <div className="flex justify-between items-center text-xs">
            <span className="text-[#44474d]">Monthly Recurring</span>
            <span className="font-semibold text-[#141b2c]">$309.00/mo</span>
          </div>
          <div className="flex justify-between items-center text-xs">
            <span className="text-[#44474d]">Tax</span>
            <span className="font-semibold text-[#141b2c]">$0.00</span>
          </div>
          <div className="flex justify-between items-center pt-2 border-t border-gray-100">
            <span className="text-lg font-bold text-[#141b2c]">Total Due Today</span>
            <span className="text-lg font-bold text-[#0051d5]">$309.00</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 py-6 opacity-70">
        <div className="flex flex-col items-center text-center gap-1">
          <span className="material-symbols-outlined text-[#141b2c]">verified_user</span>
          <span className="text-[10px] font-medium leading-tight tracking-wider">PCI COMPLIANT</span>
        </div>
        <div className="flex flex-col items-center text-center gap-1">
          <span className="material-symbols-outlined text-[#141b2c]">lock</span>
          <span className="text-[10px] font-medium leading-tight tracking-wider">SSL SECURED</span>
        </div>
        <div className="flex flex-col items-center text-center gap-1">
          <span className="material-symbols-outlined text-[#141b2c]">thumb_up</span>
          <span className="text-[10px] font-medium leading-tight tracking-wider">100% GUARANTEE</span>
        </div>
      </div>
    </div>
  );
}
