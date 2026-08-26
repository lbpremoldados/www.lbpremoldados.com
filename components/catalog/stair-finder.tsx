import Image from "next/image"
import Link from "next/link"
import { stairHighlights } from "@/data/catalog"

export function StairFinder() {
  return (
    <section id="escadas" className="scroll-mt-24">
      <div className="flex items-center gap-3">
        <span className="h-px w-10 bg-primary" />
        <span className="text-xs uppercase tracking-[0.24em] text-primary font-semibold">Escadas</span>
      </div>
      <h2 className="mt-4 text-3xl md:text-4xl font-extrabold uppercase text-foreground text-balance">
        Encontre a escada ideal para seu projeto
      </h2>
      <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
        Soluções em escadas pré-moldadas, estruturais e personalizadas para diferentes espaços e necessidades. Escolha o
        modelo mais parecido com a sua obra — nossa equipe confirma a melhor configuração.
      </p>

      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
        {stairHighlights.map((stair) => (
          <Link
            key={stair.slug}
            href={`/catalogo/escadas/${stair.slug}`}
            className="group relative aspect-[3/4] overflow-hidden border border-border hover:border-primary transition-colors"
          >
            <Image
              src={stair.image || "/placeholder.svg"}
              alt={stair.alt}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <span className="block h-0.5 w-8 bg-primary transition-all duration-300 group-hover:w-16" />
              <span className="mt-3 block text-lg font-extrabold uppercase tracking-wide text-foreground leading-none">
                {stair.label}
              </span>
              <span className="mt-2 block text-[10px] uppercase tracking-[0.2em] text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Ver detalhes
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
