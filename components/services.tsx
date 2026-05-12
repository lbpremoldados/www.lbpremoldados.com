"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

const services = [
  {
    title: "Lajes Treliçadas H8 H12 H16",
    description: "Lajes treliçadas de alta resistência para todos os tipos de construção.",
    images: ["/images/lajes-trelicadas-real.jpeg"],
  },
  {
    title: "Escadas Pré-moldadas",
    description: "Escadas pré-moldadas de todos os modelos com corrimão tubular galvanizado.",
    images: ["/images/escada-corrimao-tubular.jpeg"],
  },
  {
    title: "Escadas Alto Padrão",
    description: "Escadas de alto padrão com LED embutido e acabamento premium.",
    images: ["/images/escada-alvenaria-led.jpeg"],
  },
  {
    title: "Revestimentos de Escada",
    description: "Acabamento premium com porcelanato e granito de alta qualidade.",
    images: ["/images/escada-porcelanato-real.jpeg"],
  },
  {
    title: "Corrimãos de Vidro, Aço Inox e Tubulares Galvanizados",
    description: "Corrimãos de vidro, aço inox e tubulares galvanizados para sua escada.",
    images: ["/images/corrimao-vidro-real.jpeg", "/images/corrimao-inox-real.jpeg"],
  },
  {
    title: "Churrasqueiras de Tijolinho",
    description: "Churrasqueiras de tijolinho com área gourmet completa.",
    images: ["/images/churrasqueira-gourmet-real.jpeg"],
  },
  {
    title: "Churrasqueiras Pré-moldadas",
    description: "Churrasqueira pré-moldada marmorizada com soleira de granito.",
    images: ["/images/churrasqueira-premoldada-marmorizada.jpeg"],
  },
  {
    title: "Grades de Cimento",
    description: "Grades e balaústres pré-moldados com acabamento impecável.",
    images: ["/images/grades-balaustres-real.jpeg"],
  },
  {
    title: "Grades de Caixa d'Água",
    description: "Estruturas robustas e seguras para suporte de caixa d'água.",
    images: ["/images/base-caixa-dagua-real.jpeg"],
  },
  {
    title: "Cruzeta (Pés da Base)",
    description: "Cruzetas pré-moldadas para sustentação de estruturas.",
    images: ["/images/cruzeta-base-real.jpeg"],
  },
  {
    title: "Gesso Drywall com LED",
    description: "Instalação de gesso drywall com LED embutido para ambientes modernos e sofisticados.",
    images: ["/images/gesso-drywall-led.jpg"],
  },
]

function generateWhatsAppLink(productName: string) {
  const message = encodeURIComponent(
    `Olá, vim pelo site da LB PRÉ MOLDADOS e gostaria de solicitar um orçamento de ${productName}.`
  )
  return `https://wa.me/5511965452017?text=${message}`
}

function ImageCarousel({ images, alt }: { images: string[]; alt: string }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <>
      {images.map((img, idx) => (
        <Image
          key={idx}
          src={img}
          alt={`${alt} ${idx + 1}`}
          fill
          className={`object-cover transition-opacity duration-700 group-hover:scale-105 ${
            idx === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      {images.length > 1 && (
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {images.map((_, idx) => (
            <span
              key={idx}
              className={`h-1.5 w-1.5 rounded-full transition-colors ${
                idx === currentIndex ? "bg-primary" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </>
  )
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
              <ImageCarousel images={service.images} alt={service.title} />
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
