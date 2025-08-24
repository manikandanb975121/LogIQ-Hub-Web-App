import type { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "../store";

type Props = { children: ReactNode };

export function ReduxProvider({ children }: Props) {
  return <Provider store={store}>{children}</Provider>;
}
