import { configureStore } from "@reduxjs/toolkit";
import cartClice from './cartSlice';
import productSclice from "./productSclice";


const store = configureStore({
  reducer:{
    cart:cartClice,
    product: productSclice
  }


})
export default store
