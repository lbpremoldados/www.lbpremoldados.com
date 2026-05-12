import Image from "next/image"

const services = [
  {
    title: "Escadas Pré-moldadas",
    description:
      "Escadas pré-moldadas de todos os modelos com corrimão tubular galvanizado. Estruturas robustas, seguras e elegantes.",
    image: "/images/escada-corrimao-tubular.jpeg",
  },
  {
    title: "Escadas em Alvenaria",
    description:
      "Escada em alvenaria de alto padrão com LED embutido. Sofisticação e iluminação integrada para um resultado impressionante.",
    image: "/images/escada-alvenaria-led.jpeg",
  },
  {
    title: "Escadas com Viga Central",
    description:
      "Design moderno e imponente, a viga central proporciona leveza visual sem comprometer a resistência estrutural.",
    image: "/images/escada-viga-central-real.jpeg",
  },
  {
    title: "Revestimento em Porcelanato",
    description:
      "Acabamento premium com porcelanato de alta qualidade, unindo durabilidade e sofisticação incomparável.",
    image: "/images/escada-porcelanato-real.jpeg",
  },
  {
    title: "Churrasqueiras Pré-moldadas",
    description:
      "Churrasqueira pré-moldada marmorizada com soleira de granito e acabamento de alto padrão. Diversos modelos disponíveis.",
    image: "/images/churrasqueira-premoldada-marmorizada.jpeg",
  },
  {
    title: "Churrasqueiras e Área Gourmet",
    description:
      "Churrasqueiras de tijolinho e pré-moldadas com área gourmet completa, transformando seu espaço em um ambiente de lazer sofisticado.",
    image: "/images/churrasqueira-gourmet-real.jpeg",
  },
  {
    title: "Grades Pré-moldadas (Balaústres)",
    description:
      "Grades e balaústres pré-moldados com acabamento impecável, ideais para sacadas, varandas e muros com segurança e elegância.",
    image: "/images/grades-balaustres-real.jpeg",
  },
  {
    title: "Base de Caixa D'Água",
    description:
      "Estruturas robustas e seguras para suporte de caixa d'água, fabricadas com concreto de alta resistência e durabilidade.",
    image: "/images/base-caixa-dagua-real.jpeg",
  },
  {
    title: "Pés de Base (Cruzeta)",
    description:
      "Cruzetas pré-moldadas para sustentação de estruturas, garantindo estabilidade e resistência em qualquer projeto.",
    image: "/images/cruzeta-base-real.jpeg",
  },
]

export function Services() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-primary" />
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">
              Especialidades
            </span>
            <div className="h-px w-12 bg-primary" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground text-balance">
            Cada projeto é um sonho que ganha forma
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Não fazemos apenas escadas e churrasqueiras. Criamos soluções que unem
            segurança, beleza e conforto para transformar o seu lar.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-sm cursor-pointer ${
                i < 3 ? "aspect-[16/12]" : "aspect-[16/12]"
              } ${i === 6 ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="inline-block bg-primary/90 text-primary-foreground text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-sm mb-3">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl md:text-2xl font-serif text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-md opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
