import { combineReducers } from "@reduxjs/toolkit";

import authSlice from "../Slices/authSlice";

const CombineReducer = combineReducers({
  auth: authSlice,
});

export default CombineReducer;
