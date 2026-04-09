import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { SectionWrapper } from "./ui/section-wrapper"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"

const tiers = [
  {
    name: "Self-Hosted",
    price: "$0",
    period: "forever",
    features: [
      "Unlimited accounts",
      "All chunking strategies",
      "Full source code",
      "Community support",
      "Self-managed infrastructure",
    ],
    cta: "Get Started",
    variant: "outline" as const,
    highlight: false,
    borderClass: "border-border",
  },
  {
    name: "Vcrypt Cloud",
    price: "$7",
    period: "/mo",
    features: [
      "Hosted infrastructure",
      "5 linked drives",
      "10 GB max file size",
      "Email support",
      "Automatic updates",
    ],
    cta: "Start Free Trial",
    variant: "primary" as const,
    highlight: true,
    borderClass: "border-primary",
  },
  {
    name: "Vcrypt Pro",
    price: "$19",
    period: "/mo",
    features: [
      "Unlimited linked drives",
      "100 GB max file size",
      "Priority support",
      "Early feature access",
      "Team management",
    ],
    cta: "Contact Sales",
    variant: "outline" as const,
    highlight: false,
    borderClass: "border-accent",
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

export function Pricing() {
  return (
    <SectionWrapper id="pricing">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="text-center mb-12"
      >
        <motion.p variants={item} className="text-sm font-semibold text-primary mb-2 tracking-wide uppercase">
          Pricing
        </motion.p>
        <motion.h2 variants={item} className="text-3xl md:text-4xl font-bold text-foreground">
          Simple, transparent pricing
        </motion.h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start"
      >
        {tiers.map((tier) => (
          <motion.div
            key={tier.name}
            variants={item}
            className={`group relative rounded-xl border bg-surface p-6 md:p-8 flex flex-col transition-all duration-200 ${
              tier.highlight
                ? `border-2 ${tier.borderClass} shadow-elevated md:-translate-y-3`
                : tier.name === "Vcrypt Pro"
                ? `border-2 ${tier.borderClass} shadow-[0_0_24px_hsl(270,70%,60%,0.08)]`
                : `border ${tier.borderClass} shadow-card`
            }`}
          >
            {tier.highlight && (
              <div className="absolute -top-3 right-4">
                <Badge variant="success">Most Popular</Badge>
              </div>
            )}

            <h3 className="text-lg font-bold text-foreground mb-1">{tier.name}</h3>

            <div className="flex items-baseline gap-1 mb-6">
              {/* Price number with hover scale (Change 6.4) */}
              <motion.span
                className="text-4xl font-bold text-foreground inline-block origin-left"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.2 }}
              >
                {tier.price}
              </motion.span>
              <span className="text-sm text-muted">{tier.period}</span>
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              {tier.features.map((f, fi) => (
                <li key={fi} className="flex items-center gap-2.5 text-sm text-foreground">
                  <Check className="w-4 h-4 text-success shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <Button variant={tier.variant} className="w-full h-10">
              {tier.cta}
            </Button>
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        viewport={{ once: true }}
        className="text-center mt-8 text-[13px] text-muted"
      >
        All plans use the same security model. Your Key File is always yours.
      </motion.p>
    </SectionWrapper>
  )
}
