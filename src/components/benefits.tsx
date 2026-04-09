import { motion } from "framer-motion"
import { SectionWrapper } from "./ui/section-wrapper"
import { Badge } from "./ui/badge"

const individuals = [
  {
    text: <>Own 5 Google accounts? That's <strong>75 GB free</strong> — Vcrypt connects them all as one.</>,
    highlight: true,
  },
  { text: "Fragments look like corrupted noise to any scanner", highlight: false },
  { text: "No cloud provider ever holds a complete file", highlight: false },
  { text: <>Key File (<span className="font-mono text-primary">.2xpfm.key</span>) means only you can reconstruct</>, highlight: false },
]

const developers = [
  { text: "Open architecture for adding OneDrive / S3 / Dropbox", highlight: false },
  { text: "AES-256-GCM token encryption survives database breaches", highlight: false },
  { text: "Deterministic obfuscation enables streaming reconstruction", highlight: false },
  { text: "REST API integrates into existing pipelines", highlight: false },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const fadeUp = {
  hidden: { y: 24, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const } },
}

export function Benefits() {
  return (
    <SectionWrapper>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="text-center mb-12"
      >
        <motion.p variants={fadeUp} className="text-sm font-semibold text-primary mb-2 tracking-wide uppercase">
          Benefits
        </motion.p>
        <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground">
          Built for everyone
        </motion.h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Individuals column */}
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: "-80px" }}
          className="rounded-xl border border-border bg-surface p-6 md:p-8"
        >
          <Badge variant="default" className="mb-5">For Individuals</Badge>
          <ul className="space-y-4">
            {individuals.map((item, i) => (
              <li
                key={i}
                className={`flex items-start gap-3 text-sm leading-relaxed ${
                  item.highlight
                    ? "text-foreground font-semibold bg-primary/[0.04] -mx-3 px-3 py-2.5 rounded-lg border border-primary/10"
                    : "text-foreground"
                }`}
              >
                <span className="text-primary font-bold mt-0.5 shrink-0">→</span>
                <span className="flex-1">
                  {item.text}
                  {item.highlight && (
                    <Badge variant="success" className="ml-2 align-middle text-[10px]">No cost</Badge>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Developers column */}
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: "-80px" }}
          className="rounded-xl border border-border bg-surface p-6 md:p-8"
        >
          <Badge variant="accent" className="mb-5">For Developers & Teams</Badge>
          <ul className="space-y-4">
            {developers.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-foreground leading-relaxed">
                <span className="text-primary font-bold mt-0.5 shrink-0">→</span>
                {item.text}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
