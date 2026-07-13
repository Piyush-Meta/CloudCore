import React from 'react'

const StepTracking = () => {
  return (
    <div>
       <div className="mb-16">
          <div className="flex items-center justify-between max-w-4xl mx-auto relative">
            {/* Connector Base Alignment Rule */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-[#dbe2f9] -translate-y-1/2 z-0"></div>
            
            {/* Step 1: Hardware */}
            <div className="relative z-10 flex flex-col items-center gap-1">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#0051d5] text-white shadow-md">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              </div>
              <span className="text-xs font-medium text-[#0051d5]">Hardware</span>
            </div>

            {/* Step 2: Software */}
            <div className="relative z-10 flex flex-col items-center gap-1">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#0051d5] text-white shadow-md">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              </div>
              <span className="text-xs font-medium text-[#0051d5]">Software</span>
            </div>

            {/* Step 3: Billing (Active Frame) */}
            <div className="relative z-10 flex flex-col items-center gap-1">
              <div className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-[#0051d5] text-[#0051d5] font-bold bg-[#f9f9ff] shadow-lg ring-4 ring-[#0051d5]/10">
                <span className="text-sm font-semibold">3</span>
              </div>
              <span className="text-xs text-[#141b2c] font-bold">Billing</span>
            </div>

            {/* Step 4: Documentation */}
            <div className="relative z-10 flex flex-col items-center gap-1">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#e0e8ff] text-[#44474d] shadow-sm">
                <span className="text-sm font-semibold">4</span>
              </div>
              <span className="text-xs font-medium text-[#44474d]">Docs</span>
            </div>

            {/* Step 5: Review */}
            <div className="relative z-10 flex flex-col items-center gap-1">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#e0e8ff] text-[#44474d] shadow-sm">
                <span className="text-sm font-semibold">5</span>
              </div>
              <span className="text-xs font-medium text-[#44474d]">Review</span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default StepTracking
