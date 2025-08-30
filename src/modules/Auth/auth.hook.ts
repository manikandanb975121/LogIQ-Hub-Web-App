// Redux
import { useDispatch, useSelector } from "react-redux";

// Store
import type { RootState } from "@/app/store";

// Slices
import { loginRequest, logout } from "./auth.slice";


// Hooks
export function useAuth() {
  return useSelector((state: RootState) => state.auth);
}

export function useLogin() {
  const dispatch = useDispatch();
  return (payload: { email: string; password: string }) => {
    dispatch(loginRequest(payload));
  }
}
 
export function useLogout() {
  const dispatch = useDispatch();
  return () => dispatch(logout());
}

