import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

// Layouts
import { AuthLayout } from "@/components/layout";
import { ProtectedRoute } from "./ProtectedRoute";
// import LoginPage from "@/modules/auth/pages/LoginPage";
// import DashboardPage from "@/modules/dashboard/pages/DashboardPage";

// Pages
const LoginPage = lazy(() => import('@/modules/Auth/pages/LoginPage'));

export default function AppRoutes() {
  return (
    // <BrowserRouter>
      <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
        <Routes>
          {/* Auth Routes */}
          <Route path="/account" element={<AuthLayout />}>
            <Route path="login" element={<LoginPage />} />
            {/* <Route path="forgot-password" element={<ForgotPasswordPage />} />
            <Route path="reset-password" element={<ResetPasswordPage />} /> */}
          </Route>

          {/* Main App Routes */}
          {/* <Route path="/" element={<ProtectedRoute><MainLayout /></ProtectedRoute>}> */}
          <Route path="/" element={<ProtectedRoute><h2>Testing</h2></ProtectedRoute>}>
            <Route index path="dashboard" element={<h1>Dashboard</h1>} />
            {/* <Route path="*" element={<h1>Not Found</h1>} /> */}
          </Route>
        </Routes>
      </Suspense>
    // </BrowserRouter>
  );
}
