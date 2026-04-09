import * as React from "react"
import { motion } from "framer-motion"
import { HardDrive } from "lucide-react"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { useReducedMotion } from "../lib/use-reduced-motion"

/* ─── Simple GitHub SVG icon ─── */
function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

/* ─── Typewriter logic ─── */
const terminalLines = [
  { text: "$ vcrypt upload confidential.pdf --strategy balanced", color: "foreground" },
  { text: "✓ Obfuscating with ChaCha20-DRBG...", color: "success" },
  { text: "✓ Splitting into 4 fragments...", color: "success" },
  { text: "✓ Distributing across 3 drives...", color: "success" },
  { text: "→ Key file saved: confidential.2xpfm.key", color: "primary" },
]

function useTypewriter(lines: typeof terminalLines, charDelay = 25, lineDelay = 400) {
  const [displayed, setDisplayed] = React.useState<{ text: string; color: string }[]>([])
  const [cursorVisible, setCursorVisible] = React.useState(true)

  React.useEffect(() => {
    let cancelled = false
    async function run() {
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i]
        for (let c = 0; c <= line.text.length; c++) {
          if (cancelled) return
          setDisplayed((prev) => {
            const next = [...prev]
            next[i] = { text: line.text.slice(0, c), color: line.color }
            return next
          })
          await new Promise((r) => setTimeout(r, charDelay))
        }
        if (i < lines.length - 1) {
          await new Promise((r) => setTimeout(r, lineDelay))
        }
      }
    }
    run()
    const blink = setInterval(() => setCursorVisible((v) => !v), 530)
    return () => { cancelled = true; clearInterval(blink) }
  }, [])

  return { displayed, cursorVisible }
}

/* ─── Animation helpers ─── */
const EASE_OUT = [0.25, 0.46, 0.45, 0.94] as const

function fadeUp(delay: number) {
  return {
    initial: { y: 24, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5, delay, ease: EASE_OUT },
  } as const
}

/* ─── Color map for terminal text ─── */
const termColor: Record<string, string> = {
  foreground: "text-[hsl(210,20%,95%)]",
  success: "text-[hsl(142,76%,52%)]",
  primary: "text-[hsl(200,95%,58%)]",
}

/* ─── Hero component ─── */
export function Hero() {
  const { displayed, cursorVisible } = useTypewriter(terminalLines)
  const prefersReduced = useReducedMotion()
  const heroRef = React.useRef<HTMLDivElement>(null)



  // Mouse tracking for glow (Change 5)
  React.useEffect(() => {
    if (prefersReduced) return
    const el = heroRef.current
    if (!el) return

    const handler = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      el.style.setProperty("--mouse-x", `${x}%`)
      el.style.setProperty("--mouse-y", `${y}%`)
    }

    el.addEventListener("mousemove", handler)
    return () => el.removeEventListener("mousemove", handler)
  }, [prefersReduced])

  // Get Started URL from env
  const handleGetStarted = () => {
    const url = import.meta.env.VITE_GET_STARTED_URL
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer")
    } else {
      console.warn("VITE_GET_STARTED_URL is not set in .env")
    }
  }

  return (
    <section
      ref={heroRef}
      className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden"
      style={{
        backgroundImage: "radial-gradient(circle, var(--border) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    >
      {/* Ambient glow blobs (Change 5) */}
      <div
        className="hero-glow-primary"
        aria-hidden="true"
      />
      <div
        className="hero-glow-secondary"
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-[1200px] px-4 md:px-8 flex flex-col items-center text-center relative z-10">
        {/* Badge pill with scale pulse (Change 6.8) */}
        <motion.div {...fadeUp(0.1)}>
          <motion.div
            animate={prefersReduced ? {} : {
              scale: [1, 1.03, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Badge variant="accent" className="mb-6">
              Free · Open Source · Self-Hostable
            </Badge>
          </motion.div>
        </motion.div>

        {/* Headline — 3 lines */}
        <motion.h1
          {...fadeUp(0.2)}
          className="text-[clamp(36px,6vw,72px)] font-bold tracking-[-0.04em] leading-[1.05] text-foreground"
        >
          15 GB is a lie.
        </motion.h1>

        <motion.h1
          {...fadeUp(0.32)}
          className="text-[clamp(36px,6vw,72px)] font-bold tracking-[-0.04em] leading-[1.05] text-foreground"
        >
          You have much more.
        </motion.h1>

        <motion.h1
          {...fadeUp(0.44)}
          className="text-[clamp(28px,4.5vw,56px)] font-bold tracking-[-0.04em] leading-[1.05] text-foreground"
        >
          Use <span className="text-primary">it.</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          {...fadeUp(0.56)}
          className="mt-6 text-lg text-muted max-w-[580px] leading-[1.7]"
        >
          Every Google account gives you 15 GB free. You probably have three collecting dust. Vcrypt pools them into one private drive — and obfuscates every file so Google can't read a byte of it.
        </motion.p>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.68, ease: EASE_OUT }}
          className="mt-8 flex flex-col sm:flex-row items-center gap-3"
        >
          <Button variant="primary" className="h-11 px-6 text-base" onClick={handleGetStarted}>
            Get Started Free
          </Button>
          <a
            href={import.meta.env.VITE_GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md px-6 h-11 text-base font-medium transition-all duration-150 cursor-pointer border border-border bg-surface text-foreground hover:border-primary/40 hover:text-primary gap-2"
          >
            <GitHubIcon className="h-4 w-4" />
            View on GitHub
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-4 font-mono text-[13px] text-muted text-center"
        >
          2 accounts = 30 GB free &nbsp;·&nbsp; 3 accounts = 45 GB free &nbsp;·&nbsp; 5 accounts = 75 GB free
        </motion.p>

        {/* Terminal card */}
        <motion.div
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8, ease: EASE_OUT }}
          className="mt-12 w-full max-w-2xl"
        >
          <div className="rounded-xl border border-border bg-[hsl(215,28%,12%)] text-left shadow-elevated overflow-hidden">
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-[hsl(215,20%,22%)]">
              <span className="w-3 h-3 rounded-full bg-[hsl(0,84%,60%)]" />
              <span className="w-3 h-3 rounded-full bg-[hsl(32,95%,55%)]" />
              <span className="w-3 h-3 rounded-full bg-[hsl(142,76%,45%)]" />
              <span className="ml-3 text-xs text-[hsl(215,15%,55%)] font-mono">vcrypt — terminal</span>
            </div>
            <div className="p-4 font-mono text-sm leading-relaxed min-h-[150px]">
              {displayed.map((line, i) => (
                <div key={i}>
                  <span className={termColor[line.color] ?? termColor.foreground}>{line.text}</span>
                  {i === displayed.length - 1 && (
                    <span className={`inline-block w-[8px] h-[16px] bg-[hsl(200,95%,58%)] ml-[1px] align-middle transition-opacity duration-100 ${cursorVisible ? "opacity-100" : "opacity-0"}`} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Storage Calculator strip (Change 3) */}
        <motion.div
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.9, ease: EASE_OUT }}
          className="mt-8 flex flex-col items-center gap-2"
        >
          <div className="flex items-center gap-2 text-sm">
            {[0, 1, 2].map((_, i) => (
              <React.Fragment key={i}>
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <HardDrive className="w-4 h-4 text-primary" />
                </div>
                {i < 2 && <span className="text-muted font-bold">+</span>}
              </React.Fragment>
            ))}
            <span className="text-muted font-bold mx-1">=</span>
            <span className="text-primary font-bold text-xl">45 GB</span>
            <span className="text-muted text-xs">free</span>
          </div>
          <p className="text-xs text-muted">All free. No upgrades. Just connect.</p>
        </motion.div>

        {/* Social proof / trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 1.0, ease: EASE_OUT }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          {["Open Source", "Zero Knowledge", "Self-Hostable"].map((label, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 1.0 + i * 0.1, ease: EASE_OUT }}
            >
              <Badge variant="success">{label}</Badge>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
