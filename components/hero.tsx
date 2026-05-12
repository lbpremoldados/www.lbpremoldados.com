import Image from "next/image"
import { ArrowRight, Phone } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-stairs.jpg"
          alt="Escada pré-moldada de alto padrão"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        {/* Bottom gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 py-32 lg:py-40">
        <div className="max-w-2xl">
          {/* Tag */}
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px w-12 bg-primary" />
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">
              Desde 1998
            </span>
          </div>

          {/* Title */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight text-foreground text-balance">
            Realizamos{" "}
            <span className="text-primary">sonhos</span>{" "}
            com qualidade, segurança e elegância dentro do seu lar.
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
            Muito mais do que estética e conforto. Somos a junção de qualidade, segurança e
            excelência há mais de 25 anos no mercado.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#contato"
              className="group flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm font-bold tracking-wider uppercase hover:brightness-110 transition-all rounded-sm"
            >
              Solicitar Projeto Exclusivo
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://wa.me/5511965452017"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 border border-border text-foreground px-8 py-4 text-sm font-bold tracking-wider uppercase hover:border-primary hover:text-primary transition-all rounded-sm"
            >
              <Phone className="h-4 w-4" />
              Falar com Especialista
            </a>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </section>
  )
}
