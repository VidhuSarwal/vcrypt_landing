import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="group/footer w-full border-t border-border bg-background overflow-hidden">
      <div className="mx-auto w-full max-w-[1200px] px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <a href="#" className="font-mono text-xl font-bold inline-block mb-3">
              <span className="text-primary">V</span>
              <span className="text-foreground">crypt</span>
            </a>
            <p className="text-sm text-muted leading-relaxed max-w-xs">
              Fragment, obfuscate, and distribute files across multiple Google Drive accounts. Reconstruct only with your&nbsp;
              <span className="font-mono text-primary">.2xpfm.key</span> file.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: "GitHub", href: "#" },
                { label: "Docs", href: "#" },
                { label: "Pricing", href: "#pricing" },
                { label: "Security", href: "#" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-muted hover:text-primary transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2.5">
              {[
                { label: "MIT License", href: "#" },
                { label: "Privacy", href: "#" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-muted hover:text-primary transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="border-t border-border pt-6">
          <p className="text-xs text-muted text-center">
            © 2025 Vcrypt — store without trust.
          </p>
        </div>
      </div>

      {/* Giant VCRYPT watermark (Change 4) */}
      <motion.div
        className="w-full flex justify-center pb-0 -mt-6 select-none pointer-events-none"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <span
          className="font-sans font-black tracking-[-0.06em] text-border transition-colors duration-600 group-hover/footer:text-primary/[0.15] leading-none"
          style={{
            fontSize: "clamp(80px, 18vw, 220px)",
            lineHeight: 0.85,
          }}
        >
          VCRYPT
        </span>
      </motion.div>
    </footer>
  )
}
