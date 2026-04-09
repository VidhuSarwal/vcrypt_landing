import * as React from "react"
import { motion, useInView } from "framer-motion"
import { Layers, ShieldCheck, KeyRound, HardDrive, Shuffle, Zap } from "lucide-react"
import { SectionWrapper } from "./ui/section-wrapper"
import { Tag } from "./ui/tag"

const features = [
  {
    icon: Layers,
    title: "Fragmented Storage",
    desc: "No single cloud provider ever holds a complete file. Fragments are meaningless in isolation.",
    tag: "no-single-point",
  },
  {
    icon: ShieldCheck,
    title: "ChaCha20 Obfuscation",
    desc: "Deterministic noise injection makes every fragment look like corrupted data to outside observers.",
    tag: "chacha20-drbg",
  },
  {
    icon: KeyRound,
    title: "Key File Sovereignty",
    desc: <>Your <span className="font-mono text-primary">.2xpfm.key</span> file is generated locally and never transmitted. Only you can reconstruct your data.</>,
    tag: "zero-knowledge",
  },
  {
    icon: HardDrive,
    title: "Storage Aggregation",
    desc: "Pool free-tier storage across multiple Google accounts into a single unified virtual drive.",
    tag: "free-tier-pooling",
  },
  {
    icon: Shuffle,
    title: "Multiple Chunking Strategies",
    desc: "Choose greedy, balanced, proportional, or manual distribution to fit your storage topology.",
    tag: "greedy·balanced·proportional",
  },
  {
    icon: Zap,
    title: "Parallel Distribution",
    desc: "Fragments upload concurrently across drives, maximizing throughput and minimizing wait times.",
    tag: "concurrent-uploads",
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

export function Features() {
  const ref = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const [borderFlashed, setBorderFlashed] = React.useState(false)

  React.useEffect(() => {
    if (isInView) {
      setBorderFlashed(true)
    }
  }, [isInView])

  return (
    <SectionWrapper id="features">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="text-center mb-12"
      >
        <motion.p variants={item} className="text-sm font-semibold text-primary mb-2 tracking-wide uppercase">
          Features
        </motion.p>
        <motion.h2 variants={item} className="text-3xl md:text-4xl font-bold text-foreground">
          Everything you need for invisible file storage
        </motion.h2>
      </motion.div>

      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {features.map((f, i) => (
          <motion.div key={f.tag} variants={item}>
            <div
              className={`rounded-[12px] border bg-surface shadow-card transition-all duration-200 ease-in-out hover:border-primary/30 hover:shadow-elevated hover:-translate-y-[2px] relative p-6 h-full flex flex-col ${
                borderFlashed ? "border-primary/30" : "border-border"
              }`}
              style={{
                transitionDelay: borderFlashed ? `${i * 80}ms` : "0ms",
              }}
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <f.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted leading-relaxed flex-1">{f.desc}</p>
              <div className="mt-4 flex justify-end">
                <Tag>{f.tag}</Tag>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}
