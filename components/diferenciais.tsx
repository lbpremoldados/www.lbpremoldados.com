import { Shield, Award, Ruler, Building2, Users } from "lucide-react"

const diferenciais = [
  {
    icon: Award,
    title: "Desde 1998 no mercado",
    description:
      "Mais de 25 anos de experiência consolidada, entregando projetos que superam expectativas com excelência comprovada.",
  },
  {
    icon: Shield,
    title: "Alto padrão de acabamento",
    description:
      "Cada detalhe é tratado com precisão e cuidado, garantindo um resultado final impecável e sofisticado.",
  },
  {
    icon: Ruler,
    title: "Projetos personalizados",
    description:
      "Desenvolvemos soluções sob medida para cada cliente, respeitando o estilo e as necessidades do seu espaço.",
  },
  {
    icon: Building2,
    title: "Estrutura segura e durável",
    description:
      "Utilizamos materiais de primeira linha e técnicas avançadas para garantir máxima resistência e longevidade.",
  },
  {
    icon: Users,
    title: "Atendimento direto",
    description:
      "Fale diretamente com os responsáveis. Sem intermediários, com transparência e agilidade em cada etapa.",
  },
]

export function Diferenciais() {
  return (
    <section id="diferenciais" className="relative py-24 md:py-32">
      {/* Background texture */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/images/bg-texture.png')` }}
      />
      <div className="absolute inset-0 bg-background/70" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-primary" />
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">
              Por que nos escolher
            </span>
            <div className="h-px w-12 bg-primary" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground text-balance">
            Muito mais do que estrutura. É a junção de tudo que importa.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Qualidade, segurança, estética e conforto reunidos em cada projeto há mais de
            25 anos.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {diferenciais.map((item) => (
            <div
              key={item.title}
              className="bg-background p-8 md:p-10 group hover:bg-secondary transition-colors"
            >
              <div className="flex items-center justify-center w-14 h-14 bg-primary/10 mb-6 rounded-sm group-hover:bg-primary/20 transition-colors">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ))}

          {/* Stats card filling the grid */}
          <div className="bg-primary p-8 md:p-10 flex flex-col justify-center">
            <div className="text-5xl font-bold text-primary-foreground mb-2">
              +25
            </div>
            <p className="text-primary-foreground/80 text-sm uppercase tracking-widest">
              Anos de experiência
            </p>
            <div className="h-px bg-primary-foreground/20 my-4" />
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Milhares de projetos entregues com excelência em toda a região.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
