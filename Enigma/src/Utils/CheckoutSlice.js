import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentStep: 0,

  billingInfo: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    address: "",
    city: "",
    state: "",
    country: "India",
    zipCode: "",
  },

  documentationInfo: {},

  paymentInfo: {},
};

const checkoutSlice = createSlice({
  name: "checkout",

  initialState,

  reducers: {
    setCurrentStep: (state, action) => {
      state.currentStep = action.payload;
    },

    updateBillingInfo: (state, action) => {
      state.billingInfo = {
        ...state.billingInfo,
        ...action.payload,
      };
    },

    updateDocumentation: (state, action) => {
      state.documentationInfo = {
        ...state.documentationInfo,
        ...action.payload,
      };
    },

    clearCheckout: () => initialState,
  },
});

export const {
  setCurrentStep,
  updateBillingInfo,
  updateDocumentation,
  clearCheckout,
} = checkoutSlice.actions;

export default checkoutSlice.reducer;