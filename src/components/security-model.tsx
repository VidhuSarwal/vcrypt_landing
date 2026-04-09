import { motion } from "framer-motion"

const lines = [
  { label: "[STORED]", text: "hashed passwords (bcrypt)", stored: true },
  { label: "[STORED]", text: "encrypted OAuth tokens (AES-256-GCM)", stored: true },
  { label: "[NEVER STORED]", text: "key file", stored: false },
  { label: "[NEVER STORED]", text: "obfuscation seed", stored: false },
  { label: "[NEVER STORED]", text: "chunk-to-drive mapping", stored: false },
  { label: "[NEVER STORED]", text: "original file (scrubbed post-distribution)", stored: false },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const lineItem = {
  hidden: { opacity: 0, x: -12 },
  show: { opacity: 1, x: 0, transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] as const } },
}

const fadeUp = {
  hidden: { y: 24, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const } },
}

export function SecurityModel() {
  return (
    <section className="w-full py-16 md:py-24 bg-[hsl(215,28%,13%)] border-t border-border">
      <div className="mx-auto w-full max-w-[1200px] px-4 md:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-12"
        >
          <motion.p variants={fadeUp} className="text-sm font-semibold text-[hsl(200,95%,58%)] mb-2 tracking-wide uppercase">
            Security Model
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-[hsl(210,20%,95%)]">
            What we store — and what we never do
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left: terminal window */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="rounded-xl border border-[hsl(215,20%,22%)] bg-[hsl(215,25%,16%)] overflow-hidden">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-[hsl(215,20%,22%)]">
                <span className="w-3 h-3 rounded-full bg-[hsl(0,84%,60%)]" />
                <span className="w-3 h-3 rounded-full bg-[hsl(32,95%,55%)]" />
                <span className="w-3 h-3 rounded-full bg-[hsl(142,76%,45%)]" />
                <span className="ml-3 text-xs text-[hsl(215,15%,55%)] font-mono">security-model</span>
              </div>
              <div className="p-4 font-mono text-sm space-y-1.5">
                {lines.map((line, i) => (
                  <motion.div key={i} variants={lineItem} className="flex gap-2">
                    <span className={`shrink-0 ${line.stored ? "text-[hsl(215,15%,55%)]" : "text-[hsl(142,76%,52%)]"}`}>
                      {line.label.padEnd(14)}
                    </span>
                    <span className="text-[hsl(210,20%,95%)]">
                      {line.text}
                      {/* Blinking cursor after last line (Change 6.3) */}
                      {i === lines.length - 1 && (
                        <span className="animate-cursor-blink text-[hsl(142,76%,52%)] ml-1">█</span>
                      )}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: callout boxes */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col gap-5"
          >
            <motion.div
              variants={fadeUp}
              className="rounded-xl border border-[hsl(215,20%,22%)] bg-[hsl(215,25%,16%)] p-5 border-l-4 border-l-[hsl(32,95%,55%)]"
            >
              <p className="text-sm text-[hsl(210,20%,95%)] leading-relaxed">
                Even a full database breach exposes nothing actionable — OAuth tokens are AES-256-GCM encrypted with a server ENV key the attacker does not have.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="rounded-xl border border-[hsl(215,20%,22%)] bg-[hsl(215,25%,16%)] p-5 border-l-4 border-l-[hsl(0,84%,60%)]"
            >
              <p className="text-sm text-[hsl(210,20%,95%)] leading-relaxed">
                The Key File is your single point of trust. There is no server-side recovery. Losing it means permanent loss of access.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
