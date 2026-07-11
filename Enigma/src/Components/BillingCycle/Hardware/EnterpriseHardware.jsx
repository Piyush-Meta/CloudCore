import React from 'react'

const EnterpriseHardware = () => {
  return (
    <div>
      <section 
        style={{ backgroundColor: '#ffffff', borderColor: '#c5c6ce' }} 
        className="rounded-xl mt-10 overflow-hidden border shadow-sm"
      >
        <div className="relative h-64 w-full bg-white flex items-center justify-center p-6">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXSAiTeRNGBLelLElqk_3jZELypku7ddYLpdzoNok8QY8Je31i-UE4XKqH3CxaPen-u0UPafl1Gp6__VIQlKrxKUlu7tkSHv8IT0coTxBH4P0lv8U4-hUN_7GHrgQbciocvSsTHA8g-5LHddySHrZ4-Tm10eSKhpDzaU8bBTC5ZlbqeqmZMueKQBoBe4De2kKsVdNSvtRLsmMssinQulG3iuIFapMJZbrz126ncZf6AL4BODChQHCnnWkBLaErUZv2YK6KMZVx83I" 
            alt="High-end rack-mounted VPS server" 
            className="h-full w-full object-contain"
          />
          <div 
            style={{ 
              backgroundColor: 'rgba(9, 28, 53, 0.85)', 
              borderColor: '#374762' 
            }}
            className="absolute bottom-4 left-4 backdrop-blur-sm px-3 py-1 rounded border"
          >
            <span style={{ color: '#ffffff' }} className="font-bold text-xs uppercase tracking-wider">
              Enterprise Hardware
            </span>
          </div>
        </div>

        
        <div style={{ borderColor: '#c5c6ce' }} className="p-6 border-t">
          <h3 style={{ color: '#141b2c' }} className="text-xl font-bold mb-1">
            Configure Your Infrastructure
          </h3>
          <p style={{ color: '#44474d' }} className="text-sm leading-relaxed">
            Select the high-performance components for your dedicated environment. All hardware is enterprise-grade and fully redundant.
          </p>
        </div>
      </section>
    </div>
  )
}

export default EnterpriseHardware
