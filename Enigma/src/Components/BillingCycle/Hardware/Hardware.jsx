import React, { useState } from 'react';
import ProgressStepper from './ProgressStepper';
import OrderSummary from './OrderSummary';
import EnterpriseHardware from './EnterpriseHardware';
import HardwareSection from './HardwareSection';

export default function Hardware() {
 
  return (
    <div className="lg:col-span-8 flex justify-between space-y-6">
      
      <div  className='p-10'>
        <ProgressStepper/>

       <EnterpriseHardware/>
      </div>

      <OrderSummary/>

      

    </div>
  );
}