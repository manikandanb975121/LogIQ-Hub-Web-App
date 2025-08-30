// modules/auth/slice.ts
import type { ILoginResponse } from "@/services/types/response";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
  user: ILoginResponse | Object | null;
  token: string | null;
  sessionId: string | null;
  loading: boolean;
  error: string | null;
};

const initialState: AuthState = {
  user: {},
  token: '',
  sessionId: '',
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginRequest: (state, _action: PayloadAction<{ email: string; password: string }>) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action: PayloadAction<{ user: ILoginResponse }>) => {
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.user.token;
      state.sessionId = action.payload.user.sessionId
    },
    loginFailure: (state, action: PayloadAction<{ message: string}>) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { loginRequest, loginSuccess, loginFailure, logout } = authSlice.actions;
export default authSlice.reducer;
