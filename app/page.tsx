import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Benefits } from "@/components/benefits"
import { EmotionalSection } from "@/components/emotional-section"
import { Diferenciais } from "@/components/diferenciais"
import { Gallery } from "@/components/gallery"
import { About } from "@/components/about"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { CatalogTeaser } from "@/components/catalog/catalog-teaser"

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <EmotionalSection />
        <CatalogTeaser />
        <Diferenciais />
        <Gallery />
        <About />
        <CtaSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
