"use client"

import Image from "next/image"

const models = [
  {
    name: "Escada Reta",
    description:
      "Modelo clássico com um único lance reto. Ideal para vãos lineares, oferece praticidade e ótimo aproveitamento de espaço.",
    image: "/images/modelo-escada-reta.png",
  },
  {
    name: "Escada Caracol",
    description:
      "Formato circular que economiza espaço. Perfeita para ambientes compactos sem abrir mão da elegância e do design.",
    image: "/images/escada-caracol-real.jpeg",
  },
  {
    name: "Escada em U",
    description:
      "Dois lances com giro de 180° e patamar central. Excelente para grandes desníveis, garantindo conforto na subida.",
    image: "/images/modelo-escada-u.png",
  },
  {
    name: "Escada em Jota",
    description:
      "Lance reto com uma curva suave na parte inferior em formato de J. Une funcionalidade e um visual sofisticado.",
    image: "/images/modelo-escada-jota.png",
  },
  {
    name: "Escada Viga Central",
    description:
      "Estrutura apoiada em uma única viga central, com degraus em balanço. Visual moderno, leve e imponente.",
    image: "/images/escada-viga-central-real.jpeg",
  },
  {
    name: "Escada em L",
    description:
      "Dois lances com giro de 90° e patamar. Solução versátil que se adapta perfeitamente aos cantos do ambiente.",
    image: "/images/modelo-escada-l.png",
  },
]

function generateWhatsAppLink(modelName: string) {
  const message = encodeURIComponent(
    `Olá, vim pelo site da LB PRÉ MOLDADOS e gostaria de solicitar um orçamento de ${modelName}.`
  )
  return `https://wa.me/5511965452017?text=${message}`
}

export function StairModels() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-primary" />
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">
              Modelos de Escadas
            </span>
            <div className="h-px w-12 bg-primary" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground text-balance">
            Escadas pré-moldadas para cada projeto
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Fabricamos escadas em diversos formatos, sob medida para o seu espaço. Clique em um
            modelo para solicitar um orçamento pelo WhatsApp.
          </p>
        </div>

        {/* Models Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {models.map((model, i) => (
            <a
              key={model.name}
              href={generateWhatsAppLink(model.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col overflow-hidden rounded-sm border border-border hover:border-primary transition-colors duration-300 bg-secondary"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={model.image}
                  alt={`${model.name} - escada pré-moldada`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-3 left-3 inline-block bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-sm">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 leading-tight">
                  {model.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  {model.description}
                </p>
                <span className="mt-4 text-xs text-primary font-medium uppercase tracking-wider">
                  Solicitar Orçamento
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
