import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-team.jpg"
          alt="Equipe da LB Pré Moldados carregando lajes de concreto"
          fill
          className="object-cover object-[75%_center]"
          priority
        />
        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
        {/* Bottom gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative w-full mx-auto max-w-7xl px-6 py-32 lg:py-40">
        <div className="max-w-md">
          {/* Tag */}
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px w-12 bg-primary" />
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">
              Desde 1998
            </span>
          </div>

          {/* Title */}
          <h1 className="font-sans font-bold text-2xl md:text-3xl lg:text-4xl leading-tight text-foreground text-balance max-w-md">
            Há empresas que vendem concreto.{" "}
            <span className="text-primary">A LB PRÉ MOLDADOS</span> transforma concreto em estrutura, sonho e legado.
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-md">
            Desde 1998 construindo mais do que obras: construindo histórias que permanecem de pé.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/5511965452017?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20LB%20PR%C3%89%20MOLDADOS%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento."
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm font-bold tracking-wider uppercase hover:brightness-110 transition-all rounded-sm"
            >
              Solicite um Orçamento
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#produtos"
              className="flex items-center justify-center gap-3 border border-border text-foreground px-8 py-4 text-sm font-bold tracking-wider uppercase hover:border-primary hover:text-primary transition-all rounded-sm"
            >
              Conheça Nossos Produtos
            </a>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </section>
  )
}
