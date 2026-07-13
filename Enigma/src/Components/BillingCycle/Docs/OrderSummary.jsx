import React from "react";

export default function OrderSummary({ status }) {
  return (
    <div className="bg-gray-100 p-6 rounded-xl border border-gray-200 sticky top-6">
      <h3 className="text-xl font-semibold mb-6">Order Summary</h3>
      
      <div className="space-y-3 border-b border-gray-200 pb-6 mb-6">
        <div className="flex justify-between text-sm">
          <span>Enterprise Cloud Server</span>
          <span className="font-bold">$299.00/mo</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Managed Security Suite</span>
          <span className="font-bold">$49.00/mo</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>24/7 Priority Support</span>
          <span className="text-blue-600">Included</span>
        </div>
      </div>

      <div className="flex justify-between text-xl font-bold mb-8">
        <span>Total Due</span>
        <span>$348.00</span>
      </div>

      <button
        type="submit"
        disabled={status === "loading" || status === "success"}
        className={`w-full text-white py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
          status === "success"
            ? "bg-green-600"
            : "bg-blue-600 hover:opacity-90 disabled:opacity-80"
        }`}
      >
        {status === "idle" && (
          <>
            Verify & Continue 
            <span className="material-symbols-outlined">arrow_forward</span>
          </>
        )}
        {status === "loading" && (
          <>
            <span className="material-symbols-outlined animate-spin">sync</span> 
            Provisioning...
          </>
        )}
        {status === "success" && (
          <>
            <span className="material-symbols-outlined">check_circle</span> 
            Success!
          </>
        )}
      </button>
      <p className="text-xs text-gray-600 mt-4 text-center">
        Verification typically takes 2-4 business hours.
      </p>
    </div>
  );
}