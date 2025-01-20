
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Products: [], 
  totalQuenty: 0, 
  totalPrice: 0, 
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
  
    addToCart(state, action) {
      const newItems = action.payload;
      console.log(newItems);

    
      if (!newItems || !newItems.id || !newItems.price) {
        console.error("Invalid product data:", newItems);
        return;
      }

     
      const existingItem = state.Products.find(
        (item) => item.id === newItems.id
      );

      if (existingItem) {
       
        existingItem.quantity++;
        existingItem.totalPrice += newItems.price;
      } else {
       
        state.Products.push({
          id: newItems.id,
          name: newItems.name,
          price: newItems.price,
          quantity: 1,
          totalPrice: newItems.price * 1,
          image: newItems.image,
        });
        console.log(state.Products);
      }    
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const findItem = state.Products.find((item)=> item.id === id)
      if(findItem){
        state.totalPrice -= findItem.totalPrice
        state.totalQuenty -= findItem.quantity
        state.Products = state.Products.filter(item => item.id !== id)
      }
    },
    increaseQuantity(state, action){
      const id = action.payload;
      const findItem = state.Products.find((item)=> item.id === id)
    
      if(findItem){
        findItem.quantity++
        findItem.totalPrice += findItem.price
        state.totalQuenty++
        state.totalPrice += findItem.price

      

    }
  },

    decreaseQuantity(state, action){
      const id = action.payload;
      const findItem = state.Products.find((item)=> item.id === id)
      if(findItem.quantity >1){
        findItem.quantity--
        findItem.totalPrice -= findItem.price
        state.totalQuenty--
        state.totalPrice -= findItem.price

      }

    },
    totalItems(state, action){
      const id = action.payload;
      const findItem = state.Products.find((item)=> item.id === id)
      if(findItem.quantity >1){
        findItem.quantity++
        findItem.totalPrice -= findItem.price
        state.totalQuenty--
        state.totalPrice -= findItem.price

      }

    }




  },
});

export const { addToCart, removeFromCart, increaseQuantity,decreaseQuantity,totalItems } = cartSlice.actions;
export default cartSlice.reducer;
