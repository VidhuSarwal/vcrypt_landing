import * as React from "react"
import { motion, useInView } from "framer-motion"
import { ShieldCheck, Split, RotateCcw } from "lucide-react"
import { SectionWrapper } from "./ui/section-wrapper"
import { Card } from "./ui/card"

const steps = [
  {
    num: "01",
    icon: ShieldCheck,
    title: "Obfuscate",
    desc: "ChaCha20-DRBG injects deterministic noise at calculated offsets. Your file becomes unreadable without the seed.",
  },
  {
    num: "02",
    icon: Split,
    title: "Split & Distribute",
    desc: "Fragments are distributed in parallel across your linked Google Drive accounts using your chosen strategy.",
  },
  {
    num: "03",
    icon: RotateCcw,
    title: "Reconstruct",
    desc: <>Provide your <span className="font-mono text-primary">.2xpfm.key</span> file. Vcrypt fetches all fragments, strips noise, and restores your original file exactly.</>,
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

export function HowItWorks() {
  const ref = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const [lineDrawn, setLineDrawn] = React.useState(false)

  React.useEffect(() => {
    if (isInView) {
      const t = setTimeout(() => setLineDrawn(true), 400)
      return () => clearTimeout(t)
    }
  }, [isInView])

  return (
    <SectionWrapper id="how-it-works">
      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="text-center mb-12"
      >
        <motion.p variants={item} className="text-sm font-semibold text-primary mb-2 tracking-wide uppercase">
          How It Works
        </motion.p>
        <motion.h2 variants={item} className="text-3xl md:text-4xl font-bold text-foreground">
          Three steps to invisible storage
        </motion.h2>
      </motion.div>

      <div className="relative">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {steps.map((step) => (
            <motion.div key={step.num} variants={item}>
              <Card className="relative overflow-hidden p-6 h-full">
                <span className="absolute top-3 right-4 text-[64px] font-bold leading-none text-primary opacity-[0.07] select-none pointer-events-none">
                  {step.num}
                </span>
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{step.desc}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* SVG connector lines between cards (Change 6.5) */}
        {[0, 1].map((i) => (
          <svg
            key={i}
            className="hidden md:block absolute top-1/2 -translate-y-1/2 pointer-events-none"
            style={{
              left: `${((i + 1) / 3) * 100}%`,
              transform: `translate(-50%, -50%)`,
              width: "48px",
              height: "4px",
            }}
            viewBox="0 0 48 4"
            fill="none"
          >
            <line
              x1="0" y1="2" x2="48" y2="2"
              stroke="var(--border)"
              strokeWidth="2"
              strokeDasharray="6 4"
              strokeDashoffset={lineDrawn ? "0" : "48"}
              style={{
                transition: `stroke-dashoffset 0.7s ease-out ${0.5 + i * 0.2}s`,
              }}
            />
          </svg>
        ))}
      </div>
    </SectionWrapper>
  )
}
