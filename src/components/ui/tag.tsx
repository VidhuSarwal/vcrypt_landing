import * as React from "react"
import { cn } from "../../lib/utils"

export function Tag({ className, children, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "font-mono text-sm bg-[hsl(200_95%_45%_/_0.1)] text-primary px-1.5 py-0.5 rounded-md",
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
