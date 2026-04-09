import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus } from "lucide-react"
import { SectionWrapper } from "./ui/section-wrapper"

const faqs = [
  {
    q: "What happens if I lose my Key File?",
    a: "There is no recovery mechanism. The Key File is generated locally and never stored on our servers. Losing it means permanent loss of access to your fragmented files. We recommend storing backups in a secure, offline location.",
  },
  {
    q: "Can Google read my files?",
    a: "No. Every fragment stored on Google Drive has been obfuscated with ChaCha20-DRBG deterministic noise. Individual fragments are indistinguishable from random data. No single provider ever holds a complete, readable file.",
  },
  {
    q: "What if one of my Google accounts gets banned?",
    a: "If an account holding fragments becomes inaccessible, reconstruction will fail for files that had fragments on that account. We recommend using the balanced or proportional strategy across 3+ accounts to build redundancy.",
  },
  {
    q: "Is Vcrypt open source?",
    a: (
      <>
        Yes. Vcrypt is fully open source under the MIT License. You can audit the code, self-host the entire stack, and contribute to the project on{" "}
        <a
          href={import.meta.env.VITE_GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline font-medium"
        >
          GitHub
        </a>.
      </>
    ),
  },
  {
    q: "How is this different from encryption?",
    a: "Encryption transforms a file into ciphertext that lives in one place. Vcrypt goes further — it obfuscates, splits, and distributes fragments across multiple locations. Even if an attacker decrypts one fragment, they get meaningless noise without the others and the Key File.",
  },
  {
    q: "Can I add other storage providers?",
    a: "The architecture is designed for extensibility. Google Drive is the first supported provider, but the storage layer is abstracted. Community contributions for OneDrive, S3, and Dropbox are welcome and planned on the roadmap.",
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

export function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null)

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i)
  }

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
          FAQ
        </motion.p>
        <motion.h2 variants={item} className="text-3xl md:text-4xl font-bold text-foreground">
          Frequently asked questions
        </motion.h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-3xl mx-auto space-y-3"
      >
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i
          const panelId = `faq-panel-${i}`
          const buttonId = `faq-button-${i}`

          return (
            <motion.div
              key={i}
              variants={item}
              className={`rounded-xl border bg-surface overflow-hidden transition-all duration-200 ${
                isOpen
                  ? "border-l-[3px] border-l-accent border-r border-t border-b border-border bg-accent/[0.03]"
                  : "border-border"
              }`}
            >
              <button
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left cursor-pointer group"
              >
                <span className="text-sm font-semibold text-foreground pr-4">{faq.q}</span>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="shrink-0 text-muted group-hover:text-primary transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-4 text-sm text-muted leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </motion.div>
    </SectionWrapper>
  )
}
