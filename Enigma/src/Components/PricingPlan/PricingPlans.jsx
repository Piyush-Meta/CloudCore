import React from 'react';
import pricingPlans from './PricingPlan_data';

export default function PricingGrid() {
  
  
  const handlePlanSelect = (planId, planName) => {
    console.log(`Plan selected: ${planName} (${planId})`);
    
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 p-15 -mt-35 gap-6 mb-8">
      {pricingPlans.map((plan) => {
        return (
          <div
            key={plan.id}
            onClick={() => handlePlanSelect(plan.id, plan.name)}
            className={`bg-white flex flex-col transition-all duration-300 rounded-xl p-6 relative cursor-pointer group ${
              plan.isFeatured
                ? 'shadow-xl border-2 border-indigo-600 -translate-y-2 hover:shadow-2xl'
                : 'shadow-md border border-gray-200 hover:border-indigo-300 hover:shadow-lg hover:-translate-y-1'
            }`}
          >
           
            {plan.isFeatured && plan.badge && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                {plan.badge}
              </div>
            )}

            <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-indigo-600 transition-colors">
              {plan.name}
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              {plan.description}
            </p>

            <div className="mb-6">
              <span className="text-3xl font-extrabold text-gray-900">${plan.price}</span>
              <span className="text-gray-500 text-sm">/{plan.billingCycle}</span>
            </div>

            
            <ul className="space-y-3 mb-8 grow">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm text-gray-700">
                  <svg 
                    className="w-5 h-5 text-indigo-600 shrink-0" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2.5" 
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

           
            <button
              className={`w-full py-2.5 rounded-lg text-sm font-semibold transition-all ${
                plan.isFeatured
                  ? 'bg-indigo-600 text-white group-hover:bg-indigo-700 active:scale-95 shadow-md shadow-indigo-200'
                  : 'border border-gray-300 text-indigo-600 group-hover:bg-indigo-50 group-hover:border-indigo-300'
              }`}
            >
              {plan.buttonText}
            </button>
          </div>
        );
      })}
    </div>
  );
}

