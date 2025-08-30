import { type ReactNode } from "react";
import { ReduxProvider } from "./ReduxProvider";
import { RouterProvider } from "./RouterProvider";
import { ThemeProvider } from "./ThemeProvider";

type Props = { children: ReactNode };

export function AppProviders({ children }: Props) {
  return (
    <ReduxProvider>
      <RouterProvider>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </RouterProvider>
    </ReduxProvider>
  );
}
