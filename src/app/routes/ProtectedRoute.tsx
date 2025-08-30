// components/routes/ProtectedRoute.tsx
import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const accessToken = localStorage.getItem("access_token");
  const sessionId = localStorage.getItem("session_id");

  // If not authenticated, redirect to login
  if (!accessToken || !sessionId) {
    return <Navigate to="/auth/login" replace />;
  }

  // Otherwise render the protected component
  return <>{children}</>;
}
