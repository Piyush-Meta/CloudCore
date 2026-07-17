import React, { useState, useEffect } from "react";
import OrderConfiguration from "../BillingCycle/Hardware/Hardware";
import { Link } from 'react-router-dom'; 

export default function ResourceCustomizer({ defaultram, storage, network }) {

  const [ram, setRam] = useState(defaultram);
  const [cpu, setCpu] = useState(8);
  const [cost, setCost] = useState(124);
 // console.log("Received props:", { defaultram, storage, network }); // Debugging line to check the received props
  useEffect(() => {
  setRam(defaultram);
}, [defaultram]);

  const minRam = 2;
  const maxRam = 512;

  const minCpu = 1;
  const maxCpu = 32;

  // 2. Dynamic Cost Calculation Logic
  useEffect(() => {
    // Base cost $20 + $2 per GB of RAM + $5 per CPU Core
    const calculatedCost = 20 + ram * 2 + cpu * 5;
    setCost(calculatedCost);
  }, [ram, cpu]);

  // 3. Tooltip Position Percentages
  const ramPercent = ((ram - minRam) / (maxRam - minRam)) * 100;
  const cpuPercent = ((cpu - minCpu) / (maxCpu - minCpu)) * 100;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <section className="w-full max-w-4xl bg-white shadow-xl rounded-xl p-8 border border-gray-100">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          
          {/* Sliders Side */}
          <div className="flex-1 w-full space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
              Customize Resource Allocation
            </h2>

            {/* --- RAM Slider Component --- */}
            <div className="space-y-2 relative">
              <div className="flex justify-between items-center">
                <label htmlFor="ram-range" className="text-sm font-semibold text-gray-700">
                  RAM Allocation
                </label>
                <span className="text-lg font-bold text-indigo-600">{ram} GB</span>
              </div>
              
              <div className="relative pt-7 pb-2">
                {/* Floating Tooltip */}
                <div
                  className="absolute top-0 bg-indigo-600 text-white px-2 py-1 rounded text-xs font-bold transform -translate-x-1/2 transition-all duration-75 after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-transparent after:border-t-indigo-600"
                  style={{ left: `${ramPercent}%` }}
                >
                  {ram} GB
                </div>
                
                <input
                  id="ram-range"
                  type="range"
                  min={minRam}
                  max={maxRam}
                  value={ram}
                  onChange={(e) => setRam(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
              <div className="flex justify-between text-xs text-gray-400">
                <span>{minRam} GB</span>
                <span>{maxRam} GB</span>
              </div>
            </div>

            {/* --- CPU Slider Component --- */}
            <div className="space-y-2 relative">
              <div className="flex justify-between items-center">
                <label htmlFor="cpu-range" className="text-sm font-semibold text-gray-700">
                  CPU Cores
                </label>
                <span className="text-lg font-bold text-emerald-600">{cpu} Cores</span>
              </div>
              
              <div className="relative pt-7 pb-2">
                {/* Floating Tooltip */}
                <div
                  className="absolute top-0 bg-emerald-600 text-white px-2 py-1 rounded text-xs font-bold transform -translate-x-1/2 transition-all duration-75 after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-transparent after:border-t-emerald-600"
                  style={{ left: `${cpuPercent}%` }}
                >
                  {cpu} Cores
                </div>
                
                <input
                  id="cpu-range"
                  type="range"
                  min={minCpu}
                  max={maxCpu}
                  value={cpu}
                  onChange={(e) => setCpu(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />
              </div>
              <div className="flex justify-between text-xs text-gray-400">
                <span>{minCpu} Core</span>
                <span>{maxCpu} Cores</span>
              </div>
            </div>
          </div>

          {/* Checkout Card Side */}
          <div className="w-full lg:w-80 bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-inner flex flex-col justify-between">
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                Estimated Monthly Cost
              </p>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-extrabold text-indigo-600">${cost}</span>
                <span className="text-sm font-medium text-gray-500">/mo</span>
              </div>
            </div>

            <div className="space-y-3">
              {/* Fixed: Link needs block/flex definitions to behave like a wide layout button */}
              <Link 
                to="/hardware"
                className="block text-center w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-lg font-semibold text-sm shadow-md transition-all active:scale-[0.98]"
              >
                Deploy Custom Instance
              </Link>
              <p className="text-center text-xs text-gray-400">
                Setup time: ~2 minutes
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}