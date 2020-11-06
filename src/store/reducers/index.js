import React from 'react';
import { combineReducers } from "redux";
import authReducer from "../reducers/authReducer";

const rootReducer = combineReducers({
  authStorage: authReducer,
 

});
export default rootReducer;
