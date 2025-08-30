// Types
import type { AppStartListening } from "@/app/store/listener";

// Hooks
import { appToast } from "@/hooks/useToast";

// Slices
import { loginSuccess } from "./auth.slice";

export const AuthListener = (startAppListening: AppStartListening) => {
  // ✅ Login success
  startAppListening({
    actionCreator: loginSuccess,
    effect: async (action) => {
        appToast.success("Welcome 🎉", {
          description: action.payload.user.email,
        });
        setTimeout(() => {
          window.location.replace("/dashboard");
        }, 2000)
    },
  });
};
