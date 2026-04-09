import * as React from "react"
import { cn } from "../../lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "success" | "warning" | "accent"
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors",
        {
          "bg-primary text-surface": variant === "default",
          "bg-success text-surface": variant === "success",
          "bg-warning text-surface": variant === "warning",
          "bg-accent text-surface": variant === "accent",
        },
        className
      )}
      {...props}
    />
  )
}
