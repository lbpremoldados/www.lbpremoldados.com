import type { Metadata } from "next"
import Image from "next/image"
import { Header } from "@/components/header"
import { StairModels } from "@/components/stair-models"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "Escadas Pré-Moldadas | Modelos Reta, Caracol, U, Jota, Viga Central e L | LB Pré Moldados",
  description:
    "Conheça nossos modelos de escadas pré-moldadas: reta, caracol, em U, em jota, viga central e em L. Fabricação sob medida com acabamento de alto padrão.",
}

export default function EscadasPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page hero */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-stairs.jpg"
              alt="Escadas pré-moldadas LB Pré Moldados"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/70" />
          </div>
          <div className="relative mx-auto max-w-7xl px-6 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-primary" />
              <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">
                Nossos Modelos
              </span>
              <div className="h-px w-12 bg-primary" />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground text-balance">
              Escadas Pré-Moldadas
            </h1>
            <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
              Há mais de 25 anos fabricando escadas de concreto de alto padrão nos mais diversos
              formatos, feitas sob medida para o seu projeto.
            </p>
          </div>
        </section>

        <StairModels />
        <CtaSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
