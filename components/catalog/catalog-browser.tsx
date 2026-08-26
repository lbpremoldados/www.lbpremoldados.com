"use client"

import { useMemo, useState } from "react"
import { Search, X } from "lucide-react"
import { categories, searchProducts } from "@/data/catalog"
import { ProductCard } from "@/components/catalog/product-card"

export function CatalogBrowser({ initialCategory = "todas" }: { initialCategory?: string }) {
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState(initialCategory)

  const results = useMemo(() => searchProducts(query, category), [query, category])

  return (
    <section id="produtos" className="scroll-mt-24">
      {/* Busca */}
      <div className="flex flex-col gap-6">
        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="BUSCAR PRODUTO OU SOLUÇÃO..."
            aria-label="Buscar produto ou solução"
            className="w-full border border-border bg-secondary/50 py-4 pl-12 pr-12 text-sm uppercase tracking-[0.12em] text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Limpar busca"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* Filtros por categoria */}
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por categoria">
          <FilterChip active={category === "todas"} onClick={() => setCategory("todas")}>
            Todas
          </FilterChip>
          {categories.map((item) => (
            <FilterChip key={item.slug} active={category === item.slug} onClick={() => setCategory(item.slug)}>
              {item.menuName}
            </FilterChip>
          ))}
        </div>

        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {results.length} {results.length === 1 ? "solução encontrada" : "soluções encontradas"}
        </p>
      </div>

      {/* Resultados */}
      {results.length > 0 ? (
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {results.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="mt-8 border border-border bg-secondary/40 p-10 text-center">
          <p className="text-foreground font-semibold">Nenhum resultado para esta busca.</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Fale com a nossa equipe pelo WhatsApp e descreva o que a sua obra precisa.
          </p>
        </div>
      )}
    </section>
  )
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors ${
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border text-muted-foreground hover:border-primary hover:text-primary"
      }`}
    >
      {children}
    </button>
  )
}
