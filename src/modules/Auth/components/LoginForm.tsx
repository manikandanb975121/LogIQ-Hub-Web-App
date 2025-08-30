import { useState } from "react";

// Common Components
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icons } from "@/components/ui/icon";

// Hooks
import { useLogin } from "../auth.hook";
import { useAppForm } from "@/hooks/useForm";

// Login Formik 
import { forms } from "@/lib/form";

export default function LoginForm() {

  // Login Dispatch
  const login = useLogin();

  // state for password to show & hide
  const [showPassword, setShowPassword] = useState(false);

  // Formik for login form
  const loginForm = useAppForm(forms.login);

  const isValid = (): boolean => {
    try {
      return !loginForm.isValid;
    } catch(err) {
      return false;
    }
  }

  const loginHandler = (): void => {
    try {
      if (!loginForm.isValid) return;
      login(loginForm.values);
    } catch(err) {
      throw err;
    }
  }

  return (
    <Card className="shadow-brand border-0 bg-card/50 backdrop-blur-sm">
      <CardHeader className="text-center space-y-2 pb-8">
        <div className="flex justify-center mb-4 lg:hidden">
          <div className="p-3 bg-primary/10 rounded-xl">
            <Icons.activity className="h-8 w-8 text-primary" />
          </div>
        </div>
        <CardTitle className="text-2xl font-bold text-foreground">
          LogIQ Hub
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          Sign in to your hub portal
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground font-medium">
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              name='email'
              placeholder="admin@company.com"
              value={loginForm.values.email}
              onChange={loginForm.handleChange}
              required
              className="h-11"
              onBlur={loginForm.handleBlur}
              error={loginForm.touched.email ? loginForm.errors.email : undefined}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-foreground font-medium">
              Password
            </Label>
            <div className="relative">
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={loginForm.values.password}
                onChange={loginForm.handleChange}
                required
                className="h-11 pr-10 transition-smooth focus:ring-2 focus:ring-primary/20"
                onBlur={loginForm.handleBlur}
                error={loginForm.touched.password ? loginForm.errors.password : undefined}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-smooth"
              >
                {showPassword ? (
                  <Icons.eyeOff className="h-4 w-4" />
                ) : (
                  <Icons.eye className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded border-border" />
              <span className="text-muted-foreground">Remember me</span>
            </label>
            <button
              type="button"
              className="text-primary hover:text-primary-hover transition-smooth font-medium"
            >
              Forgot password?
            </button>
          </div>

          <Button
            type="button"
            onClick={loginHandler}
            disabled={isValid()}
            className="w-full h-11 hover:cursor-pointer font-medium bg-primary hover:bg-primary-hover transition-smooth shadow-sm"
          >
            Sign In
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
