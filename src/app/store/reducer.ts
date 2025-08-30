import { combineReducers } from "@reduxjs/toolkit";
import AuthReducer from '@/modules/Auth/auth.slice';
// Example: import authReducer from "@/modules/auth/slice";

export const rootReducer = combineReducers({
  auth: AuthReducer,
  // users: usersReducer,
});
