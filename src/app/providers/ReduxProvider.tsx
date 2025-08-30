import type { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import { Toast } from "@/components/ui/toaster";

type Props = { children: ReactNode };

export function ReduxProvider({ children }: Props) {
  return <>
    <Toast />
    <Provider store={store}>
      {children}
    </Provider>
  </>
}
