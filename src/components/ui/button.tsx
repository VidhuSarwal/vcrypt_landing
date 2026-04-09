import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "../../lib/utils"
import { useReducedMotion } from "../../lib/use-reduced-motion"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost"
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    const prefersReduced = useReducedMotion()

    return (
      <motion.button
        ref={ref as React.Ref<HTMLButtonElement>}
        whileTap={prefersReduced ? undefined : { scale: 0.97 }}
        className={cn(
          "inline-flex items-center justify-center rounded-md px-4 py-2 font-medium transition-all duration-150 cursor-pointer",
          {
            "bg-primary text-surface hover:brightness-[1.08]": variant === "primary",
            "border border-border bg-surface text-foreground hover:border-primary/40 hover:text-primary": variant === "outline",
            "text-foreground hover:bg-primary/[0.06]": variant === "ghost",
          },
          className
        )}
        {...(props as any)}
      />
    )
  }
)
Button.displayName = "Button"
