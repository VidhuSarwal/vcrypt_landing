import * as React from "react"
import { cn } from "../../lib/utils"

export function SectionWrapper({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section className={cn("w-full py-16 md:py-24", className)} {...props}>
      <div className="mx-auto w-full max-w-[1200px] px-4 md:px-8">
        {children}
      </div>
    </section>
  )
}
