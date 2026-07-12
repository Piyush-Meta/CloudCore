import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./CartSlice";
const AppStore = configureStore({
    reducer:{
    cart: cartSlice.reducer,
    },
});

export default AppStore;