import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import LogoCloud from "@/components/LogoCloud"
import Features from "@/components/Features"
import HowItWorks from "@/components/HowItWorks"
import Testimonial from "@/components/Testimonial"
import Pricing from "@/components/Pricing"
import Faq from "@/components/Faq"
import CtaBanner from "@/components/CtaBanner"
import Footer from "@/components/Footer"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoCloud />
        <Features />
        <HowItWorks />
        <Testimonial />
        <Pricing />
        <Faq />
        <CtaBanner />
      </main>
      <Footer />
    </>
  )
}
