import { combineReducers } from "@reduxjs/toolkit";

import authSlice from "../slices/authSlice";

const CombineReducer = combineReducers({
  auth: authSlice,
  profile : profileSlice,
  cart : cartSlice,
});

export default CombineReducer;
