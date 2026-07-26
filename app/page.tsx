import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Marquee from "@/components/Marquee"
import Features from "@/components/Features"
import HowItWorks from "@/components/HowItWorks"
import Metrics from "@/components/Metrics"
import Testimonials from "@/components/Testimonials"
import Pricing from "@/components/Pricing"
import Faq from "@/components/Faq"
import CtaSection from "@/components/CtaSection"
import Footer from "@/components/Footer"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Features />
        <HowItWorks />
        <Metrics />
        <Testimonials />
        <Pricing />
        <Faq />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
