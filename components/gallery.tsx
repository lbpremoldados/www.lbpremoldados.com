"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

const projects = [
  {
    src: "/images/escada-corrimao-tubular.jpeg",
    alt: "Escada pré-moldada com corrimão tubular galvanizado",
    category: "Escadas",
    title: "Escada com Corrimão Tubular Galvanizado",
  },
  {
    src: "/images/churrasqueira-forno-iglu-real.jpeg",
    alt: "Churrasqueira com forno iglu e bancada de tijolinho",
    category: "Churrasqueiras",
    title: "Churrasqueira, Forno Iglu e Bancada",
  },
  {
    src: "/images/escada-alvenaria-led.jpeg",
    alt: "Escada em alvenaria de alto padrão com LED embutido",
    category: "Escadas",
    title: "Escada em Alvenaria com LED",
  },
  {
    src: "/images/escada-porcelanato-real.jpeg",
    alt: "Escada revestida em porcelanato com iluminação",
    category: "Escadas",
    title: "Revestimento em Porcelanato",
  },
  {
    src: "/images/escada-viga-central-real.jpeg",
    alt: "Escada com viga central revestida em mármore",
    category: "Escadas",
    title: "Escada com Viga Central",
  },
  {
    src: "/images/churrasqueira-premoldada-marmorizada.jpeg",
    alt: "Churrasqueira pré-moldada marmorizada com soleira de granito e acabamento",
    category: "Churrasqueiras",
    title: "Churrasqueira Pré-moldada Marmorizada",
  },
  {
    src: "/images/churrasqueira-gourmet-real.jpeg",
    alt: "Churrasqueira de tijolinho com área gourmet completa",
    category: "Churrasqueiras",
    title: "Churrasqueira e Área Gourmet",
  },
  {
    src: "/images/escada-caracol-real.jpeg",
    alt: "Escada caracol pré-moldada com corrimão metálico",
    category: "Escadas",
    title: "Escada Caracol",
  },
  {
    src: "/images/grades-balaustres-real.jpeg",
    alt: "Grades pré-moldadas balaústres em sacada",
    category: "Grades",
    title: "Grades Pré-moldadas (Balaústres)",
  },
  {
    src: "/images/escada-marmore-jardim-real.jpeg",
    alt: "Escada em mármore preto com jardim decorativo",
    category: "Escadas",
    title: "Escada em Mármore com Jardim",
  },
  {
    src: "/images/escada-colorida-vidro-real.jpeg",
    alt: "Escada pré-moldada com degraus coloridos e guarda-corpo em vidro",
    category: "Escadas",
    title: "Escada com Guarda-corpo em Vidro",
  },
  {
    src: "/images/escada-granito-vidro-real.jpeg",
    alt: "Escada em granito preto com guarda-corpo em vidro",
    category: "Escadas",
    title: "Escada em Granito com Vidro",
  },
]

export function Gallery() {
  const [selected, setSelected] = useState<number | null>(null)

  return (
    <section id="galeria" className="relative py-24 md:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-primary" />
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">
              Portfólio
            </span>
            <div className="h-px w-12 bg-primary" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground text-balance">
            Projetos que elevam o padrão do seu lar
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className="group relative aspect-[4/3] overflow-hidden rounded-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label={`Ver projeto: ${project.title}`}
            >
              <Image
                src={project.src}
                alt={project.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">
                  {project.category}
                </span>
                <h3 className="text-lg font-semibold text-foreground mt-1">
                  {project.title}
                </h3>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-6"
          role="dialog"
          aria-label="Visualizar imagem ampliada"
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors"
            aria-label="Fechar visualização"
          >
            <X className="h-8 w-8" />
          </button>
          <div className="relative max-w-5xl w-full aspect-[16/10]">
            <Image
              src={projects[selected].src}
              alt={projects[selected].alt}
              fill
              className="object-contain"
            />
          </div>
          <div className="absolute bottom-8 text-center">
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">
              {projects[selected].category}
            </span>
            <h3 className="text-xl font-semibold text-foreground mt-1">
              {projects[selected].title}
            </h3>
          </div>
        </div>
      )}
    </section>
  )
}
