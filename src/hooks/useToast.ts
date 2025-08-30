// hooks/useAppToast.ts
import { toast } from "sonner"

type ToastPosition =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "top-center"
  | "bottom-center"

type ToastAction = {
  label: string
  onClick: () => void
}

type ToastOptions = {
  position?: ToastPosition
  description?: string
  action?: ToastAction
  style?: React.CSSProperties
  className?: string
}

const DEFAULT_POSITION: ToastPosition = "top-right"

// 🔹 Shared builder function (to avoid duplication)
function buildToast(
  fn: (msg: string, opts?: any) => void,
  message: string,
  options?: ToastOptions
) {
  return fn(message, {
    position: options?.position ?? DEFAULT_POSITION,
    description: options?.description,
    action: options?.action,
    style: options?.style,
    className: options?.className,
  })
}

// 🔹 Hook version (for React components)
export function useToast() {
  return {
    success: (msg: string, options?: ToastOptions) =>
      buildToast(toast.success, msg, options),
    error: (msg: string, options?: ToastOptions) =>
      buildToast(toast.error, msg, options),
    info: (msg: string, options?: ToastOptions) =>
      buildToast(toast.info, msg, options),
    warning: (msg: string, options?: ToastOptions) =>
      buildToast(toast.warning, msg, options),
  }
}

// 🔹 Singleton version (for sagas/listeners/middleware)
export const appToast = {
  success: (msg: string, options?: ToastOptions) =>
    buildToast(toast.success, msg, options),
  error: (msg: string, options?: ToastOptions) =>
    buildToast(toast.error, msg, options),
  info: (msg: string, options?: ToastOptions) =>
    buildToast(toast.info, msg, options),
  warning: (msg: string, options?: ToastOptions) =>
    buildToast(toast.warning, msg, options),
}
