import React, { useState } from 'react'


const ProgressStepper = () => {

        const steps = [
    {
      id: 1,
      label: 'Hardware',
      // SVG path for "memory / microchip"
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 5h10a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2z" />
        </svg>
      )
    },
    {
      id: 2,
      label: 'Software',
      // SVG path for "terminal"
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 3,
      label: 'Billing',
      // SVG path for "payments / credit card"
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      )
    },
    {
      id: 4,
      label: 'Documentation',
      // SVG path for "description / document"
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      id: 5,
      label: 'Review',
      // SVG path for "fact_check / check sheet"
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    }
  ];

    const [currentStep, setCurrentStep] = useState(1);
    const progressPercentage = ((currentStep - 1) / (steps.length - 1)) * 100;

  return (
    <div>
      {/* 1. Progress Stepper Section */}
      <section 
        style={{ backgroundColor: '#ffffff', borderColor: '#c5c6ce' }} // surface-container-lowest, outline-variant
        className="rounded-xl p-4 border shadow-sm"
      >
        <div className="flex justify-between relative">
          
          {/* Connector Line Track */}
          <div 
            style={{ backgroundColor: '#e0e8ff' }} // surface-container-high
            className="absolute top-5 left-0 w-full h-0.5 z-0"
          >
            {/* Dynamic Active Step Filling Line */}
            <div 
              style={{ 
                width: `${progressPercentage}%`,
                backgroundColor: '#0051d5' // secondary
              }} 
              className="h-full transition-all duration-500 ease-in-out"
            />
          </div>

          {/* Render Individual Steps Loop */}
          {steps.map((step) => {
            const isActive = currentStep >= step.id;
            
            return (
              <div 
                key={step.id}
                onClick={() => setExpandedIndex(step.id)} // make interactable
                className={`relative z-10 flex flex-col items-center gap-2 cursor-pointer transition-opacity duration-300 ${
                  isActive ? 'opacity-100' : 'opacity-50'
                }`}
              >
                {/* Circle Bubble */}
                <div 
                  style={{ 
                    backgroundColor: isActive ? '#0051d5' : '#e0e8ff', // secondary vs surface-container-high
                    color: isActive ? '#ffffff' : '#44474d' // on-secondary vs on-surface-variant
                  }} 
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    isActive ? 'shadow-md shadow-blue-100' : ''
                  }`}
                >
                  {step.icon}
                </div>
                
                {/* Step Label text */}
                <span 
                  style={{ color: isActive ? '#0051d5' : '#44474d' }} // secondary vs default text
                  className="text-xs font-bold tracking-wide"
                >
                  {step.label}
                </span>
              </div>
            );
          })}

        </div>
      </section>
    </div>
  )
}

export default ProgressStepper
