import { type ReactNode } from "react";

type Props = { children: ReactNode };

export function ThemeProvider({ children }: Props) {
  // Later: add dark/light mode toggle
  return <>{children}</>;
}
