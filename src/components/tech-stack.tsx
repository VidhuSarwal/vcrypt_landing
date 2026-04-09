import { motion } from "framer-motion"
import { SectionWrapper } from "./ui/section-wrapper"
import {
  Code, FileCode, Database, ShieldCheck, KeyRound, Lock, Globe, Fingerprint,
} from "lucide-react"

const stack = [
  { name: "Go 1.24", icon: Code },
  { name: "React 18", icon: FileCode },
  { name: "TypeScript", icon: FileCode },
  { name: "MongoDB", icon: Database },
  { name: "ChaCha20-DRBG", icon: ShieldCheck },
  { name: "AES-256-GCM", icon: Lock },
  { name: "Google Drive API v3", icon: Globe },
  { name: "JWT", icon: KeyRound },
  { name: "Bcrypt", icon: Fingerprint },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
}

const item = {
  hidden: { y: 16, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as const } },
}

export function TechStack() {
  return (
    <SectionWrapper>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="text-center mb-8"
      >
        <motion.p variants={item} className="text-sm font-semibold text-primary mb-2 tracking-wide uppercase">
          Tech Stack
        </motion.p>
        <motion.h2 variants={item} className="text-3xl md:text-4xl font-bold text-foreground">
          Built with modern tools
        </motion.h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="flex flex-wrap items-center justify-center gap-3"
      >
        {stack.map((s) => (
          <motion.div
            key={s.name}
            variants={item}
            className="inline-flex items-center gap-2 font-mono text-sm bg-[hsl(200_95%_45%_/_0.1)] text-primary px-3 py-1.5 rounded-lg border border-primary/10 transition-colors hover:bg-[hsl(200_95%_45%_/_0.15)]"
          >
            <s.icon className="w-3.5 h-3.5" />
            {s.name}
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}
