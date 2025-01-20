import {createSlice} from "@reduxjs/toolkit";
import { act } from "react";


const initialState = {
    Products:[],
    searchTerm: '',
    filteredData : []
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers:{
      setProducts(state, action){
        state.Products = action.payload
      },
      setSearchTerm(state,action){
        state.searchTerm = action.payload
        state.filteredData =state.Products.filter(product=> product.name.toLowerCase().includes(state.searchTerm()))
      }
    }
})
export const {setProducts, setSearchTerm} = productSlice.actions;
export default productSlice.reducer

