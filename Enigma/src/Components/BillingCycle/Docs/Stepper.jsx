import React from "react";

export default function Stepper() {
  const steps = [
    { label: "Hardware", completed: true, active: false, content: "check" },
    { label: "Software", completed: true, active: false, content: "check" },
    { label: "Billing", completed: true, active: false, content: "check" },
    { label: "Docs", completed: false, active: true, content: "4" },
    { label: "Review", completed: false, active: false, content: "5" },
  ];

  return (
    <div className="mb-16">
      <div className="flex items-center justify-between max-w-4xl mx-auto relative">
        {/* Connector Line */}
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>

        {steps.map((step, idx) => (
          <div key={idx} className="relative z-10 flex flex-col items-center gap-1">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-all ${
                step.completed
                  ? "bg-blue-600 text-white"
                  : step.active
                  ? "bg-white border-2 border-blue-600 text-blue-600 font-bold ring-4 ring-blue-600/10"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              {step.completed ? (
                <span className="material-symbols-outlined text-[10px]">{step.content}</span>
              ) : (
                <span className="text-sm font-semibold">{step.content}</span>
              )}
            </div>
            <span
              className={`text-xs ${
                step.active ? "text-gray-900 font-bold" : "text-blue-600"
              }`}
            >
              {step.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}