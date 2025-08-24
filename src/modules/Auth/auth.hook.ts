// modules/auth/hooks.ts
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/app/store";
import { loginRequest, logout } from "./slice";

export function useAuth() {
  return useSelector((state: RootState) => state.auth);
}

export function useLogin() {
  const dispatch = useDispatch();
  return (payload: { email: string; password: string }) =>
    dispatch(loginRequest(payload));
}

export function useLogout() {
  const dispatch = useDispatch();
  return () => dispatch(logout());
}
