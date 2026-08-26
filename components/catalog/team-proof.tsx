import Image from "next/image"

const steps = [
  {
    title: "Fabricação",
    src: "/images/hero-team.jpg",
    alt: "Equipe uniformizada da LB Pré-Moldados movimentando peças de concreto na fábrica",
  },
  {
    title: "Transporte",
    src: "/images/diferencial-2.jpg",
    alt: "Funcionário uniformizado da LB Pré-Moldados transportando peça de concreto na obra",
  },
  {
    title: "Preparação",
    src: "/images/diferencial-1.jpg",
    alt: "Funcionário uniformizado da LB Pré-Moldados organizando peças pré-moldadas na obra",
  },
  {
    title: "Instalação",
    src: "/images/instalacao-1.jpg",
    alt: "Funcionário uniformizado da LB Pré-Moldados instalando estrutura pré-moldada em obra",
  },
]

export function TeamProof() {
  return (
    <section className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 items-center">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-primary" />
              <span className="text-xs uppercase tracking-[0.24em] text-primary font-semibold">
                Quem faz acontecer
              </span>
            </div>
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold uppercase text-foreground text-balance">
              Da nossa fábrica para a sua obra.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Por trás de cada projeto existe uma equipe que fabrica, prepara e executa cada etapa para transformar o
              projeto em realidade.
            </p>
            <ul className="mt-8 flex flex-col gap-3">
              {["Fabricação própria", "Transporte até a obra", "Instalação pela nossa equipe", "Acabamento final"].map(
                (item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                    <span className="h-1.5 w-1.5 bg-primary" />
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {steps.map((step) => (
              <figure key={step.src} className="relative aspect-[3/4] overflow-hidden border border-border">
                <Image
                  src={step.src || "/placeholder.svg"}
                  alt={step.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                <figcaption className="absolute bottom-3 left-3 text-[11px] font-bold uppercase tracking-[0.2em] text-foreground">
                  {step.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
