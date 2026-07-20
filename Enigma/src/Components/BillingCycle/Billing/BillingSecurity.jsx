import React, { useState } from 'react';
import StepTracking from './StepTracking';
import Review from './Review';
import BillingForm from './BillingForm';

export default function BillingReview() {
  // --- Form & Interactive States ---
  const [accountType, setAccountType] = useState('individual'); 
  const [paymentMethod, setPaymentMethod] = useState('credit_card'); 
  const [agreeTerms, setAgreeTerms] = useState(false);
  
  // Provisioning Button States
  const [isProvisioning, setIsProvisioning] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form Field Inputs State Matrix
  const [formData, setFormData] = useState({
    companyName: '',
    cardholderName: '',
    taxId: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: ''
  });

  // FIXED: Added missing closing brace here
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // --- Form Submit Trigger ---
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreeTerms) {
      alert("Please accept the Service Level Agreement to proceed.");
      return;
    }
    
    setIsProvisioning(true);
    
    // Mimic the native script timeout
    setTimeout(() => {
      setIsProvisioning(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (

    <div className="bg-[#f9f9ff] text-[#141b2c] min-h-screen flex flex-col font-sans antialiased">
      <main className="flex-grow w-full max-w-[1280px] mx-auto px-6 lg:px-10 py-10">

        <StepTracking />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          
          <Review />

          <BillingForm
          accountType={accountType}
          setAccountType={setAccountType}
           paymentMethod={paymentMethod}
          setPaymentMethod={setPaymentMethod}
           formData={formData}            
           handleInputChange={handleInputChange}
           agreeTerms={agreeTerms}
           setAgreeTerms={setAgreeTerms}
          isProvisioning={isProvisioning}
          isSuccess={isSuccess}
          handleSubmit={handleSubmit}
          />



        </div>
      </main>
    </div>
  );
} 


  



