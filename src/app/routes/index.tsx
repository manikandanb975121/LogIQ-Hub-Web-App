import { BrowserRouter, Routes, Route } from "react-router-dom";
// import LoginPage from "@/modules/auth/pages/LoginPage";
// import DashboardPage from "@/modules/dashboard/pages/DashboardPage";

export default function AppRoutes() {
  return (
    // <BrowserRouter>
      <Routes>
        <Route path="/login" element={<h1>Login page</h1>} />
        {/* {/* <Route path="/dashboard" element={<DashboardPage />} /> */}
      </Routes>
    // </BrowserRouter>
  );
}
