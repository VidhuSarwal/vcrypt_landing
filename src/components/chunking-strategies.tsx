import { motion } from "framer-motion"
import { SectionWrapper } from "./ui/section-wrapper"

const strategies = [
  {
    name: "Greedy",
    how: "Fills one drive completely before moving on",
    best: "Maximizing usage of the largest account",
  },
  {
    name: "Balanced",
    how: "Distributes fragments evenly",
    best: "General use, consistent wear",
  },
  {
    name: "Proportional",
    how: "Distributes by available space ratio",
    best: "Accounts with unequal free storage",
  },
  {
    name: "Manual",
    how: "User defines fragment counts per drive",
    best: "Advanced users needing full control",
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { y: 24, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const } },
}

export function ChunkingStrategies() {
  return (
    <SectionWrapper>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="text-center mb-12"
      >
        <motion.p variants={item} className="text-sm font-semibold text-primary mb-2 tracking-wide uppercase">
          Chunking Strategies
        </motion.p>
        <motion.h2 variants={item} className="text-3xl md:text-4xl font-bold text-foreground">
          Choose how your files are split
        </motion.h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="rounded-xl border border-border bg-surface overflow-hidden"
      >
        {/* Table header */}
        <motion.div
          variants={item}
          className="hidden md:grid grid-cols-3 gap-4 px-6 py-4 border-b border-border bg-background/50 text-xs font-semibold text-muted uppercase tracking-wider"
        >
          <span>Strategy</span>
          <span>How It Works</span>
          <span>Best For</span>
        </motion.div>

        {/* Table rows */}
        {strategies.map((s, i) => (
          <motion.div
            key={s.name}
            variants={item}
            className={`grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 px-6 py-4 transition-colors hover:bg-primary/[0.04] ${
              i < strategies.length - 1 ? "border-b border-border" : ""
            }`}
          >
            <span className="font-mono font-bold text-primary text-sm">{s.name}</span>
            <span className="text-sm text-foreground">{s.how}</span>
            <span className="text-sm text-muted">{s.best}</span>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}
