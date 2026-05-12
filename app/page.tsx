import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { EmotionalSection } from "@/components/emotional-section"
import { Services } from "@/components/services"
import { Diferenciais } from "@/components/diferenciais"
import { Gallery } from "@/components/gallery"
import { About } from "@/components/about"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <EmotionalSection />
        <Services />
        <Diferenciais />
        <Gallery />
        <About />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
