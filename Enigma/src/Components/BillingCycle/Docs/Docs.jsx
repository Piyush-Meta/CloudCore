import React from 'react'
import Stepper from './Stepper'
import VerificationForm from './VerificationForm'
import OrderSummary from './OrderSummary'


const Docs = ({ formData, setFormData, handleFileChange, status }) => {
  return (
    <div>
      <Stepper />
      
      <VerificationForm 
        formData={formData}
        setFormData={setFormData} 
        handleFileChange={handleFileChange} 
      />
      
      
      <OrderSummary status={status} />
    </div>
  )
}

export default Docs
