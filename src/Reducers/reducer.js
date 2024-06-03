import { combineReducers } from "@reduxjs/toolkit";

import authSlice from "../Slices/authSlice";
import profileSlice from "../Slices/profileSlice";
import cartSlice from "../Slices/cartSlice";

const CombineReducer = combineReducers({
  auth: authSlice,
  profile : profileSlice,
  cart : cartSlice,
});

export default CombineReducer;
