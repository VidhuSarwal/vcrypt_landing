import { motion } from "framer-motion"
import { Button } from "./ui/button"

const EASE_OUT = [0.25, 0.46, 0.45, 0.94] as const

export function CTABanner() {
  return (
    <section className="w-full py-16 md:py-24 bg-primary/[0.06] border-t border-b border-border">
      <div className="mx-auto w-full max-w-[1200px] px-4 md:px-8 flex flex-col items-center text-center">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: EASE_OUT }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-3xl md:text-5xl font-bold text-foreground mb-3"
        >
          Store without trust.
        </motion.h2>

        <motion.p
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.15, ease: EASE_OUT }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-lg text-muted mb-8"
        >
          Your files. Fragmented. Obfuscated. Yours.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.3, ease: EASE_OUT }}
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col sm:flex-row items-center gap-3"
        >
          <Button variant="primary" className="h-11 px-6 text-base">
            Get Started Free
          </Button>
          <Button variant="outline" className="h-11 px-6 text-base">
            Read the Docs
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
