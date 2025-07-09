import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { HowItWorks } from "@/components/how-it-works"
import { Features } from "@/components/features"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"
import { SupportedDiseases } from "@/components/supported-diseases"


export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-emerald-50">
      <Navbar />
      <Hero />
      <SupportedDiseases />
      <HowItWorks />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  )
}
