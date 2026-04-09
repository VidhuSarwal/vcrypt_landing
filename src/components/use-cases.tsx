import { motion } from "framer-motion"
import { Lock, HardDrive, Shield, Code, Users, Archive } from "lucide-react"
import { SectionWrapper } from "./ui/section-wrapper"
import { Card } from "./ui/card"
import { Tag } from "./ui/tag"

const useCases = [
  {
    icon: Lock,
    title: "Personal Secrets Vault",
    desc: "Store sensitive personal documents, private keys, and credentials across fragmented drives only you can reassemble.",
    tag: "personal",
  },
  {
    icon: HardDrive,
    title: "Free Storage Aggregation",
    desc: "Combine 15GB free tiers from multiple Google accounts into a single, unified virtual drive with terabytes of space.",
    tag: "cost-saving",
  },
  {
    icon: Shield,
    title: "Journalist Protection",
    desc: "Protect source files and footage by splitting them. No provider can comply with a takedown for data they don't fully hold.",
    tag: "high-privacy",
  },
  {
    icon: Code,
    title: "Developer Secrets Backup",
    desc: "Back up .env files, API keys, and SSH credentials with military-grade obfuscation and no single point of failure.",
    tag: "devops",
  },
  {
    icon: Users,
    title: "Team File Distribution",
    desc: "Distribute shared files to team members with individually generated key files. Revoke access by rotating keys.",
    tag: "collaboration",
  },
  {
    icon: Archive,
    title: "Archival Storage",
    desc: "Long-term cold storage across multiple accounts for redundancy. Files survive individual account suspensions.",
    tag: "redundancy",
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

export function UseCases() {
  return (
    <SectionWrapper id="use-cases">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="text-center mb-12"
      >
        <motion.p variants={item} className="text-sm font-semibold text-primary mb-2 tracking-wide uppercase">
          Use Cases
        </motion.p>
        <motion.h2 variants={item} className="text-3xl md:text-4xl font-bold text-foreground">
          Who is Vcrypt for?
        </motion.h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {useCases.map((uc) => (
          <motion.div key={uc.tag} variants={item}>
            <Card className="group relative overflow-hidden p-6 h-full flex flex-col">
              {/* Watermark icon */}
              <uc.icon className="absolute top-4 right-4 w-24 h-24 text-primary opacity-[0.06] transition-opacity duration-300 group-hover:opacity-[0.12] pointer-events-none" />

              <h3 className="text-lg font-bold text-foreground mb-2 relative z-10">{uc.title}</h3>
              <p className="text-sm text-muted leading-relaxed flex-1 relative z-10">{uc.desc}</p>
              <div className="mt-4 flex justify-end relative z-10">
                <Tag>{uc.tag}</Tag>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}
