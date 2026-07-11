import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Summary from '../Hardware/Summary';
import Summary2 from './Summary2';

export default function SoftwareConfiguration() {
  const navigate = useNavigate();

  // --- Dynamic Selection State Matrix ---
  const [selectedOS, setSelectedOS] = useState('ubuntu');
  const [selectedPanel, setSelectedPanel] = useState('none');
  

  // Pricing Model
  const basePrice = 25.00;
  const cpuPrice = 145.00;
  const ramPrice = 84.00;
  const storagePrice = 35.00;
  
  // Dynamic panel price calc
  const getPanelPrice = () => {
    if (selectedPanel === 'cpanel') return 15.00;
    if (selectedPanel === 'plesk') return 12.00;
    return 0.00;
  };

  const totalPrice = basePrice + cpuPrice + ramPrice + storagePrice + getPanelPrice();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mt-6">
      
      {/* ================= SELECTION WORKSPACE ================= */}
      <div className="lg:col-span-8 space-y-6">
        
        {/* Intro Node Panel Header */}
        <div className="bg-white p-4 rounded-xl border border-gray-200 flex flex-col md:flex-row gap-4 items-center shadow-sm">
          <div className="md:w-1/3 shrink-0">
            <img 
              alt="Software Configuration" 
              className="w-full h-auto rounded-lg object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUeAl7m4_T8bXVTKTZ8o9GJRGZKyHnoE2-M9vnEwbR48wBfyISujstwuWKDVSptEe5qRvxLUmXZEgGKPVqr11dx38xtl19NNqFO65YlQVKpUggd7icORZqX6PLA-WLD9Wa_LfWEhpYnnXzLtkFpHHkxV-Lko0wBodRBeD5OyizVdeSbYKDGszpFCa-944Xzb2Qm-wVYeOcAeap7ieYfEJWHuhJLwF1mwzpB0A7ATI2RVEiW4WIFy9VxYvkh_AhazVKtmHt7J4luUc" 
            />
          </div>
          <div className="space-y-2">
            <h1 className="text-xl font-bold text-[#141b2c]">Choose Operating System</h1>
            <p className="text-gray-500 text-sm leading-relaxed">
              Select the base environment for your enterprise node. All images are pre-optimized for high-performance workloads.
            </p>
          </div>
        </div>

        {/* Section: Linux Distributions */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-[#141b2c]">Linux Distributions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Ubuntu Radio Block */}
            <label className="cursor-pointer group" onClick={() => setSelectedOS('ubuntu')}>
              <div 
                style={{ 
                  backgroundColor: selectedOS === 'ubuntu' ? 'rgba(49, 107, 243, 0.04)' : '#ffffff',
                  borderColor: selectedOS === 'ubuntu' ? '#0051d5' : '#c5c6ce'
                }}
                className={`p-4 border-2 rounded-xl hover:bg-gray-50 transition-all duration-200 shadow-sm h-full flex flex-col justify-between context-card ${
                  selectedOS === 'ubuntu' ? 'ring-2 ring-blue-100' : ''
                }`}
              >
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-1">
                    <span className="text-[#0051d5] font-bold text-sm">✦ Terminal</span>
                    <h3 className="font-bold text-sm text-[#141b2c]">Ubuntu 22.04 LTS</h3>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="bg-green-500/10 text-green-600 text-xs font-extrabold px-2 py-0.5 rounded">FREE</span>
                    {selectedOS === 'ubuntu' && (
                      <span className="text-[#0051d5] text-sm font-bold">✓ Active</span>
                    )}
                  </div>
                </div>
              </div>
            </label>

            {/* Debian Radio Block */}
            <label className="cursor-pointer group" onClick={() => setSelectedOS('debian')}>
              <div 
                style={{ 
                  backgroundColor: selectedOS === 'debian' ? 'rgba(49, 107, 243, 0.04)' : '#ffffff',
                  borderColor: selectedOS === 'debian' ? '#0051d5' : '#c5c6ce'
                }}
                className={`p-4 border-2 rounded-xl hover:bg-gray-50 transition-all duration-200 shadow-sm h-full flex flex-col justify-between context-card ${
                  selectedOS === 'debian' ? 'ring-2 ring-blue-100' : ''
                }`}
              >
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-1">
                    <span className="text-gray-400 font-bold text-sm">✦ Terminal</span>
                    <h3 className="font-bold text-sm text-[#141b2c]">Debian 12</h3>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="bg-green-500/10 text-green-600 text-xs font-extrabold px-2 py-0.5 rounded">FREE</span>
                    {selectedOS === 'debian' && (
                      <span className="text-[#0051d5] text-sm font-bold">✓ Active</span>
                    )}
                  </div>
                </div>
              </div>
            </label>

          </div>
        </section>

        {/* Section: Software Add-ons */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-[#141b2c]">Software Add-ons</h2>
          <div className="bg-white p-6 rounded-xl border border-gray-200 space-y-6 shadow-sm">
            <div>
              <h3 className="text-sm font-bold text-[#141b2c] mb-4">Control Panel</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                
                {/* Panel Option: None */}
                <button 
                  type="button"
                  onClick={() => setSelectedPanel('none')}
                  className={`p-3 border-2 rounded-lg text-left transition-all ${
                    selectedPanel === 'none' ? 'border-[#0051d5] bg-blue-50/20' : 'border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <p className="font-bold text-sm text-[#141b2c]">None</p>
                  <p className="text-xs text-green-600 font-medium">Free</p>
                </button>

                {/* Panel Option: cPanel */}
                <button 
                  type="button"
                  onClick={() => setSelectedPanel('cpanel')}
                  className={`p-3 border-2 rounded-lg text-left transition-all ${
                    selectedPanel === 'cpanel' ? 'border-[#0051d5] bg-blue-50/20' : 'border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <p className="font-bold text-sm text-[#141b2c]">cPanel</p>
                  <p className="text-xs text-gray-500">+$15/mo</p>
                </button>

                {/* Panel Option: Plesk */}
                <button 
                  type="button"
                  onClick={() => setSelectedPanel('plesk')}
                  className={`p-3 border-2 rounded-lg text-left transition-all ${
                    selectedPanel === 'plesk' ? 'border-[#0051d5] bg-blue-50/20' : 'border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <p className="font-bold text-sm text-[#141b2c]">Plesk</p>
                  <p className="text-xs text-gray-500">+$12/mo</p>
                </button>

              </div>
            </div>
          </div>
        </section>

      </div>

      <Summary2/>

    </div>
  );
}