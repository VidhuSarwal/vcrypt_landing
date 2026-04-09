import * as React from "react"
import { cn } from "../../lib/utils"

export const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-[12px] border border-border bg-surface shadow-card transition-all duration-200 ease-in-out hover:border-primary/30 hover:shadow-elevated hover:-translate-y-[2px]",
        className
      )}
      {...props}
    />
  )
)
Card.displayName = "Card"
