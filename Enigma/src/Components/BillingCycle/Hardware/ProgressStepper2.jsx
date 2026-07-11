import React from 'react'

const ProgressStepper2 = () => {
  return (
    <div>
      <div className="flex items-center justify-center mb-16">
          <div className="flex items-center w-full max-w-3xl">
            {/* Step 1: Complete */}
            <div className="flex flex-col items-center relative z-10">
              <div style={{ backgroundColor: '#0051d5', color: '#ffffff' }} className="w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              </div>
              <span className="absolute top-12 font-bold text-xs text-[#0051d5] whitespace-nowrap">Hardware</span>
            </div>
            <div className="flex-grow h-1 bg-[#0051d5] mx-2"></div>

            {/* Step 2: Active */}
            <div className="flex flex-col items-center relative z-10">
              <div style={{ backgroundColor: '#316bf3', color: '#fefcff', borderColor: '#0051d5' }} className="w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold shadow-md">
                2
              </div>
              <span className="absolute top-12 font-bold text-xs text-[#141b2c] whitespace-nowrap">Software</span>
            </div>
            <div className="flex-grow h-1 bg-[#e0e8ff] mx-2"></div>

            {/* Step 3: Inactive */}
            <div className="flex flex-col items-center relative z-10 opacity-60">
              <div style={{ backgroundColor: '#e0e8ff', color: '#44474d' }} className="w-10 h-10 rounded-full flex items-center justify-center font-bold">3</div>
              <span className="absolute top-12 font-medium text-xs text-[#44474d] whitespace-nowrap">Billing</span>
            </div>
            <div className="flex-grow h-1 bg-[#e0e8ff] mx-2"></div>

            {/* Step 4: Documentation */}
            <div className="flex flex-col items-center relative z-10 opacity-60">
              <div style={{ backgroundColor: '#e0e8ff', color: '#44474d' }} className="w-10 h-10 rounded-full flex items-center justify-center font-bold">4</div>
              <span className="absolute top-12 font-medium text-xs text-[#44474d] whitespace-nowrap">Documentation</span>
            </div>
            <div className="flex-grow h-1 bg-[#e0e8ff] mx-2"></div>

            {/* Step 5: Review */}
            <div className="flex flex-col items-center relative z-10 opacity-60">
              <div style={{ backgroundColor: '#e0e8ff', color: '#44474d' }} className="w-10 h-10 rounded-full flex items-center justify-center font-bold">5</div>
              <span className="absolute top-12 font-medium text-xs text-[#44474d] whitespace-nowrap">Review</span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ProgressStepper2
