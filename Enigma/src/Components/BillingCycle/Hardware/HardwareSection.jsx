import React, { useState } from "react";
import ProgressStepper2 from "./ProgressStepper2";
import EnterpriseNode from "./EnterpriseNode";
import Os from "./Os";
import Summary from "./Summary";


export default function HardwareSection() {
  const basePrice = 25.00;
  const cpuPrice = 145.00;
  const ramPrice = 84.00;
  const storagePrice = 35.00;
  const totalPrice = basePrice + cpuPrice + ramPrice + storagePrice;

  return (
    <div className="min-h-screen bg-[#F6F9FC] text-[#141b2c] font-sans antialiased flex flex-col justify-between">
      <main className="grow max-w-[1280px] w-full mx-auto px-6 py-10">
        
          <ProgressStepper2/>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mt-10">
          <div className="lg:col-span-8 space-y-10">

          <EnterpriseNode/>
          <Os/>

          </div>

          <Summary/>

        </div>
      </main>
    </div>
  );
}