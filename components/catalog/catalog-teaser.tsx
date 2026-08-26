import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { categories, getProductsByCategory, products } from "@/data/catalog"

export function CatalogTeaser() {
  return (
    <section id="catalogo" className="border-y border-border bg-secondary/20 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-primary" />
              <span className="text-xs uppercase tracking-[0.24em] text-primary font-semibold">Catálogo</span>
            </div>
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold uppercase text-foreground text-balance">
              {products.length} soluções em concreto pré-moldado
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Escadas, lajes treliçadas, pisos, bases para caixa d&apos;água, pingadeiras, balaústres, corrimãos e
              acabamentos — com especificações, dimensões e orçamento direto no WhatsApp.
            </p>
          </div>

          <Link
            href="/catalogo"
            className="flex shrink-0 items-center justify-center gap-2 bg-primary px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-primary-foreground hover:brightness-110 transition-all"
          >
            Ver catálogo completo
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category) => {
            const count = getProductsByCategory(category.slug).length
            return (
              <Link
                key={category.slug}
                href={`/catalogo/${category.slug}`}
                className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden border border-border hover:border-primary transition-colors"
              >
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
                <div className="relative p-4">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-primary">
                    {count} {count === 1 ? "produto" : "produtos"}
                  </span>
                  <h3 className="mt-2 text-base md:text-lg font-extrabold uppercase leading-tight text-foreground">
                    {category.menuName}
                  </h3>
                  <span className="mt-3 block h-0.5 w-8 bg-primary transition-all duration-300 group-hover:w-16" />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
