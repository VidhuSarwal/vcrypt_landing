import { motion } from "framer-motion"

const stats = [
  { value: "15 GB", title: "What Google gives you", subtitle: "Per free account", color: "text-foreground" },
  { value: "×N", title: "Multiply by accounts you own", subtitle: "Connect as many as you want", color: "text-primary" },
  { value: "∞", title: "Your new limit", subtitle: "Combined. Free. Private.", color: "text-success" },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { y: 24, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const } },
}

export function WhyVcrypt() {
  return (
    <section className="w-full py-16 md:py-20 bg-surface border-t border-b border-border">
      <div className="mx-auto w-full max-w-[1200px] px-4 md:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-10"
        >
          <motion.p variants={item} className="text-sm font-semibold text-primary mb-2 tracking-wide uppercase">
            Why Vcrypt?
          </motion.p>
          <motion.h2 variants={item} className="text-3xl md:text-4xl font-bold text-foreground">
            Turn free storage into unlimited storage
          </motion.h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0"
        >
          {stats.map((s, i) => (
            <div key={s.value} className="flex items-center gap-6 md:gap-0">
              <motion.div variants={item} className="flex flex-col items-center text-center px-8 md:px-12">
                <span className={`text-5xl md:text-6xl font-bold ${s.color} mb-2`}>
                  {s.value}
                </span>
                <span className="text-sm font-semibold text-foreground mb-1">{s.title}</span>
                <span className="text-xs text-muted">{s.subtitle}</span>
              </motion.div>

              {/* Arrow between stats */}
              {i < stats.length - 1 && (
                <motion.span
                  variants={item}
                  className="hidden md:block text-2xl text-border font-light"
                >
                  →
                </motion.span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
