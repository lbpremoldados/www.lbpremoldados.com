import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function EmotionalSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background texture */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/images/bg-texture.png')` }}
      />
      <div className="absolute inset-0 bg-background/60" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-primary/50" />
            <div className="h-2 w-2 rotate-45 bg-primary" />
            <div className="h-px w-16 bg-primary/50" />
          </div>

          <h2 className="font-sans font-bold text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight text-balance">
            Do projeto à instalação,{" "}
            <span className="text-primary">excelência em cada detalhe.</span>
          </h2>

          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Há mais de 25 anos construindo com qualidade, precisão e segurança.
          </p>

          {/* Installation photos */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm ring-1 ring-primary/20">
              <Image
                src="/images/instalacao-1.jpg"
                alt="Funcionário da LB Pré-Moldados realizando a instalação em obra"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm ring-1 ring-primary/20">
              <Image
                src="/images/instalacao-2.jpg"
                alt="Funcionário da LB Pré-Moldados finalizando a instalação da escada"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <a
            href="#contato"
            className="group inline-flex items-center gap-3 mt-10 bg-primary text-primary-foreground px-8 py-4 text-sm font-bold tracking-wider uppercase hover:brightness-110 transition-all rounded-sm"
          >
            Quero um Projeto Diferenciado
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}
