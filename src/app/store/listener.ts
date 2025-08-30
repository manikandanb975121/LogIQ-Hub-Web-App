import type { TypedStartListening } from "@reduxjs/toolkit";
import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import type { RootState, AppDispatch } from "./index";

export type AppStartListening = TypedStartListening<RootState, AppDispatch>;

// actions
import { loginFailure } from "@/modules/Auth/auth.slice";

// Hooks
import { appToast } from "@/hooks/useToast";

export const globalListener = createListenerMiddleware();
export const startAppListening = globalListener.startListening as AppStartListening;

startAppListening({
  matcher: isAnyOf(loginFailure),
  effect: async (action) => {
    if (loginFailure.match(action)) {
      appToast.error('Login Failed', {
        description: action.payload.message
      });
    }
  },
});