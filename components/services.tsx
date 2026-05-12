"use client"

import Image from "next/image"

const services = [
  {
    title: "Lajes Treliçadas H8 H12 H16",
    description: "Lajes treliçadas de alta resistência para todos os tipos de construção.",
    image: "/images/hero-stairs.jpg",
  },
  {
    title: "Escadas Pré-moldadas",
    description: "Escadas pré-moldadas de todos os modelos com corrimão tubular galvanizado.",
    image: "/images/escada-corrimao-tubular.jpeg",
  },
  {
    title: "Escadas em Alvenaria",
    description: "Escada em alvenaria de alto padrão com LED embutido.",
    image: "/images/escada-alvenaria-led.jpeg",
  },
  {
    title: "Revestimentos de Escada",
    description: "Acabamento premium com porcelanato e granito de alta qualidade.",
    image: "/images/escada-porcelanato-real.jpeg",
  },
  {
    title: "Corrimãos",
    description: "Corrimãos tubulares galvanizados e em inox para sua escada.",
    image: "/images/escada-viga-central-real.jpeg",
  },
  {
    title: "Churrasqueiras de Tijolinho",
    description: "Churrasqueiras de tijolinho com área gourmet completa.",
    image: "/images/churrasqueira-gourmet-real.jpeg",
  },
  {
    title: "Churrasqueiras Pré-moldadas",
    description: "Churrasqueira pré-moldada marmorizada com soleira de granito.",
    image: "/images/churrasqueira-premoldada-marmorizada.jpeg",
  },
  {
    title: "Grades de Cimento",
    description: "Grades e balaústres pré-moldados com acabamento impecável.",
    image: "/images/grades-balaustres-real.jpeg",
  },
  {
    title: "Grades de Caixa d'Água",
    description: "Estruturas robustas e seguras para suporte de caixa d'água.",
    image: "/images/base-caixa-dagua-real.jpeg",
  },
  {
    title: "Cruzeta (Pés da Base)",
    description: "Cruzetas pré-moldadas para sustentação de estruturas.",
    image: "/images/cruzeta-base-real.jpeg",
  },
]

function generateWhatsAppLink(productName: string) {
  const message = encodeURIComponent(
    `Olá, vim pelo site da LB PRÉ MOLDADOS e gostaria de solicitar um orçamento de ${productName}.`
  )
  return `https://wa.me/5511965452017?text=${message}`
}

export function Services() {
  return (
    <section id="produtos" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-primary" />
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">
              Nossos Produtos
            </span>
            <div className="h-px w-12 bg-primary" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground text-balance">
            Soluções completas em pré-moldados
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Clique em qualquer produto para solicitar um orçamento pelo WhatsApp.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <a
              key={i}
              href={generateWhatsAppLink(service.title)}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-sm cursor-pointer aspect-[4/3] border border-border hover:border-primary transition-colors duration-300"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
              {/* Border accent on hover */}
              <div className="absolute inset-0 border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-sm" />
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-block bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-sm">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xs text-primary font-medium uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                    Solicitar Orçamento
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1 leading-tight">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  {service.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
