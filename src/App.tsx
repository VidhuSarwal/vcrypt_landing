import React, { Suspense } from "react"
import { Navbar } from "./components/navbar"
import { Hero } from "./components/hero"

// Lazy load all sections below the fold
const WhyVcrypt = React.lazy(() => import("./components/why-vcrypt").then(m => ({ default: m.WhyVcrypt })))
const HowItWorks = React.lazy(() => import("./components/how-it-works").then(m => ({ default: m.HowItWorks })))
const Features = React.lazy(() => import("./components/features").then(m => ({ default: m.Features })))
const SecurityModel = React.lazy(() => import("./components/security-model").then(m => ({ default: m.SecurityModel })))
const ChunkingStrategies = React.lazy(() => import("./components/chunking-strategies").then(m => ({ default: m.ChunkingStrategies })))
const Benefits = React.lazy(() => import("./components/benefits").then(m => ({ default: m.Benefits })))
const UseCases = React.lazy(() => import("./components/use-cases").then(m => ({ default: m.UseCases })))
const Pricing = React.lazy(() => import("./components/pricing").then(m => ({ default: m.Pricing })))
const FAQ = React.lazy(() => import("./components/faq").then(m => ({ default: m.FAQ })))
const TechStack = React.lazy(() => import("./components/tech-stack").then(m => ({ default: m.TechStack })))
const CTABanner = React.lazy(() => import("./components/cta-banner").then(m => ({ default: m.CTABanner })))
const Footer = React.lazy(() => import("./components/footer").then(m => ({ default: m.Footer })))

function SectionFallback() {
  return <div className="w-full py-24" />
}

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <WhyVcrypt />
          <HowItWorks />
          <Features />
          <SecurityModel />
          <ChunkingStrategies />
          <Benefits />
          <UseCases />
          <Pricing />
          <FAQ />
          <TechStack />
          <CTABanner />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
