"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { workFilters, works } from "@/data/catalog"

export function WorksGallery() {
  const [filter, setFilter] = useState("Todas")
  const [selected, setSelected] = useState<number | null>(null)

  const visible = filter === "Todas" ? works : works.filter((work) => work.filter === filter)

  return (
    <section id="obras" className="scroll-mt-24">
      <div className="flex items-center gap-3">
        <span className="h-px w-10 bg-primary" />
        <span className="text-xs uppercase tracking-[0.24em] text-primary font-semibold">Projetos realizados</span>
      </div>
      <h2 className="mt-4 text-3xl md:text-4xl font-extrabold uppercase text-foreground text-balance">
        Veja algumas soluções já executadas pela LB.
      </h2>

      <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filtrar obras">
        {workFilters.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setFilter(item)}
            aria-pressed={filter === item}
            className={`border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors ${
              filter === item
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border text-muted-foreground hover:border-primary hover:text-primary"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {visible.map((work, index) => (
          <button
            key={work.src + index}
            type="button"
            onClick={() => setSelected(index)}
            className="group relative aspect-square overflow-hidden border border-border hover:border-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label={`Ampliar obra: ${work.title}`}
          >
            <Image
              src={work.src || "/placeholder.svg"}
              alt={work.alt}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
            <span className="absolute bottom-3 left-3 right-3 text-left text-xs font-semibold text-foreground leading-snug">
              {work.title}
            </span>
          </button>
        ))}
      </div>

      {selected !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 p-6"
          role="dialog"
          aria-label="Visualizar obra ampliada"
        >
          <button
            type="button"
            onClick={() => setSelected(null)}
            className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors"
            aria-label="Fechar visualização"
          >
            <X className="h-8 w-8" />
          </button>
          <div className="relative aspect-[4/3] w-full max-w-4xl">
            <Image
              src={visible[selected].src || "/placeholder.svg"}
              alt={visible[selected].alt}
              fill
              className="object-contain"
            />
          </div>
          <p className="absolute bottom-8 text-sm font-semibold uppercase tracking-[0.16em] text-foreground">
            {visible[selected].title}
          </p>
        </div>
      )}
    </section>
  )
}
