import { createSlice } from "@reduxjs/toolkit";
import {toast} from "react-hot-toast";
import { json } from "react-router-dom";

const initialState = {
    totalItems  : localStorage.getItem("totalItems") ? JSON.parse(localStorage.getItem("totalItems")):0
  };
  export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
      
      setTotalItems: (state, value) => {
        state.token = value.payload;
      },
    },
  });
  
  export const { setTotalItems } = cartSlice.actions;
  export default cartSlice.reducer;