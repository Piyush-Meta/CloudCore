import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers:{
        addItem: (state, action) => {
  const item = action.payload;

  const existingItem = state.items.find(
    (cartItem) => cartItem.id === item.id &&
     cartItem.billing === item.billing
  );

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    state.items.push({
      ...item,
      quantity: 1,
    });
  }
},
        removeItem: (state, action) => {
            state.items = state.items.filter(item => !(item.id === action.payload.id && item.billing === action.payload.billing)    );
        },
        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice;