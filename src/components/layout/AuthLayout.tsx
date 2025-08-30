import { Navigate, Outlet } from "react-router-dom";
import { Activity, Server, BarChart3, Shield } from "lucide-react";

export default function AuthLayout() {

  if (localStorage.getItem('access_token') && localStorage.getItem('session_id')) {
    return <Navigate to='/dashboard' />
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Branding & Features */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary via-accent to-success relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 flex flex-col justify-center px-12 text-white">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                <Activity className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">LogIQ Hub</h1>
                <p className="text-white/80">Admin Portal</p>
              </div>
            </div>

            <h2 className="text-4xl font-bold mb-4 leading-tight">
              Comprehensive Log Analytics & Management
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Monitor, analyze, and manage your infrastructure logs with enterprise-grade security and real-time insights.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                <Server className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Multi-Cloud Support</h3>
                <p className="text-white/80 text-sm">AWS, Azure, GCP integrations</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                <BarChart3 className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Real-time Analytics</h3>
                <p className="text-white/80 text-sm">Live dashboards and alerts</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                <Shield className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Enterprise Security</h3>
                <p className="text-white/80 text-sm">RBAC, SSO, and compliance ready</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Auth Pages */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gradient-to-br from-background to-muted/30">
        <div className="w-full max-w-md">
          {/* 👇 Outlet will render LoginPage, ForgotPasswordPage, ResetPasswordPage etc. */}
          <Outlet />

          {/* Footer */}
          {/* <div className="mt-8 text-center text-xs text-muted-foreground">
            <p>© 2025 LogIQ Hub. All rights reserved.</p>
            <p className="mt-1">Enterprise logging and analytics platform</p>
          </div> */}
        </div>
      </div>
    </div>
  );
}
