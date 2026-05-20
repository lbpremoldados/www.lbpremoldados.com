import { ArrowRight } from "lucide-react"

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
            Não procuramos fazer apenas uma laje treliçada, uma escada ou uma churrasqueira.{" "}
            <span className="text-primary">E sim, procuramos realizar sonhos.</span>
          </h2>

          <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Realizando cada projeto com excelência, da forma que o seu lar merece!
            Há 25 anos sendo referência no mercado.
          </p>

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
