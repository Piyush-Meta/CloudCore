import React from 'react'
import RamSliderCard from '../Components/RamSlider/RamSliderCard'
import PricingGrid from '../Components/PricingPlan/PricingPlans'
import FAQSection from '../Components/Faq/FaqSection'

const Servers = () => {
  return (
    <div>
      <section class="mb-xl mt-10 text-center ">
      <h1 class="font-bold text-xl mb-5">Scale Your Vision with High-Performance VPS</h1>
      <p class="font-body-lg text-body-lg text-lg text-gray-700 max-w-2xl mx-auto">
                Next-generation virtual private servers powered by NVMe storage and isolated environments. Pick a plan or customize your resources below.
      </p>
      </section>

      {/*  Dynamic Configuration (Active Interaction: RAM Slider)  */}

      <div className='-mt-19'>
        <RamSliderCard/>
        <PricingGrid/>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 mb-8 p-15 -mt-19">
      <div className="md:col-span-2 md:row-span-2 bg-[#091c35] p-10 rounded-xl flex flex-col justify-end text-white min-h-75 md:min-h-auto shadow-md">
        <svg 
          className="w-12 h-12 text-indigo-200 mb-4 shrink-0" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
        <h3 className="text-xl font-bold mb-2">Tier 1 Network Infrastructure</h3>
        <p className="text-sm text-indigo-100 opacity-90 leading-relaxed">
          Experience lightning-fast response times with our global network of data centers and 10Gbps uplinks for every rack.
        </p>
      </div>
      <div className="md:col-span-2 bg-white p-6 rounded-xl border border-gray-200 flex items-center gap-4 shadow-sm">
        <div className="bg-indigo-600 p-3 rounded-lg text-white shrink-0">
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
        </div>
        <div>
          <h4 className="text-lg font-bold text-gray-900">Enterprise Security</h4>
          <p className="text-sm text-gray-500">
            DDoS protection and isolated environments standard on all plans.
          </p>
        </div>
      </div>
      <div className="md:col-span-1 bg-white p-6 rounded-xl border border-gray-200 flex flex-col justify-center text-center shadow-sm">
        <span className="text-3xl font-extrabold text-indigo-600">99.9%</span>
        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mt-1">SLA Uptime</p>
      </div>
      <div className="md:col-span-1 bg-white p-6 rounded-xl border border-gray-200 flex flex-col justify-center text-center shadow-sm">
        <span className="text-3xl font-extrabold text-indigo-600">24/7</span>
        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mt-1">Expert Support</p>
      </div>

    </section>

    <FAQSection/>


    </div>
  )
}

export default Servers
