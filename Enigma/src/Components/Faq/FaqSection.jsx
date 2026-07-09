import React, { useState } from 'react';
import faqData from './FaqData'

export default function FAQSection() {
  const [expandedIndex, setExpandedIndex] = useState(0);
  return (
    <section className="max-w-3xl mx-auto mb-8 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center text-[#141b2c]">
        Frequently Asked Questions
      </h2>
      
      <div className="space-y-3">
        {faqData.map((item, index) => {
          const isExpanded = expandedIndex === index;
          
          return (
            <div 
              key={index}
              style={{ 
                backgroundColor: isExpanded ? '#f1f3ff' : '#ffffff', 
                borderColor: '#c5c6ce' 
              }}
              className="border rounded-xl overflow-hidden transition-all duration-300 shadow-sm"
            >
              <button 
                onClick={() => setExpandedIndex(isExpanded ? null : index)}
                className="w-full flex items-center justify-between p-4 text-left group focus:outline-none"
              >
                <span 
                  style={{ color: '#141b2c' }}
                  className="text-base font-semibold transition-colors group-hover:text-[#0051d5]" // secondary on hover
                >
                  {item.question}
                </span>

                <svg
                  style={{ color: '#44474d' }} 
                  className={`w-5 h-5 transition-transform duration-300 ${
                    isExpanded ? 'rotate-180 text-[#0051d5]' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

             
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isExpanded ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div 
                  style={{ 
                    borderColor: '#c5c6ce',
                    color: '#44474d' 
                  }} 
                  className="px-4 pb-4 border-t pt-4 text-sm leading-relaxed"
                >
                  {item.answer}
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
}