import { combineReducers } from "@reduxjs/toolkit";

import authSlice from "../slices/authSlice";

const CombineReducer = combineReducers({
  auth: authSlice,
});

export default CombineReducer;
