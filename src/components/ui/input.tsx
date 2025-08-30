import * as React from "react"
import { cn } from "@/lib/utils"

interface InputProps extends React.ComponentProps<"input"> {
  subText?: string
  error?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, subText, error, ...props }, ref) => {
    return (
      <div className="w-full space-y-1">
        <input
          type={type}
          ref={ref}
          className={cn(
            "flex h-10 w-full rounded-md border bg-background px-3 py-2 text-base placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-colors",
            error
              ? "border-red-500 focus:border-red-500"
              : "border-input focus:border-ring",
            className
          )}
          {...props}
        />
        {error ? (
          <p className="text-xs text-red-500">{error}</p>
        ) : subText ? (
          <p className="text-xs text-muted-foreground">{subText}</p>
        ) : null}
      </div>
    )
  }
)

Input.displayName = "Input"

export { Input }
