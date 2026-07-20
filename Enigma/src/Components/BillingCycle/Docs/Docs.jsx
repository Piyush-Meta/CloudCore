import React from 'react'
import Stepper from './Stepper'
import VerificationForm from './VerificationForm'
import OrderSummary from './OrderSummary'


const Docs = ({ formData, setFormData, handleFileChange, status }) => {
   console.log(formData);
  return (
    <div>
      <Stepper />
      <div className='flex justify-center gap-10'>
        <VerificationForm 
        formData={formData}
        setFormData={setFormData} 
        handleFileChange={handleFileChange} 
      />
      
      
      <OrderSummary status={status} />
      </div>
      
    </div>
  )
}

export default Docs
