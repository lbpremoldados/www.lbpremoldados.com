import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MessageCircle } from "lucide-react"
import { buildWhatsAppLink, getCategory, getProductUrl, type CatalogProduct } from "@/data/catalog"

export function ProductCard({ product }: { product: CatalogProduct }) {
  const category = getCategory(product.category)
  const mainSpec = product.specifications[0]

  return (
    <article className="group flex flex-col border border-border bg-secondary/40 hover:border-primary transition-colors duration-300">
      <Link href={getProductUrl(product)} className="relative block aspect-[4/3] overflow-hidden">
        <Image
          src={product.mainImage || "/placeholder.svg"}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />

        {product.manufacturedByLB && (
          <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-[0.18em] px-2 py-1">
            Fabricação LB
          </span>
        )}
        {!product.manufacturedByLB && product.serviceByLB && (
          <span className="absolute top-3 left-3 border border-primary text-primary bg-background/80 text-[10px] font-bold uppercase tracking-[0.18em] px-2 py-1">
            Execução LB
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <span className="text-[11px] uppercase tracking-[0.22em] text-primary font-medium">{category?.name}</span>

        <h3 className="text-lg font-semibold text-foreground leading-tight">
          <Link href={getProductUrl(product)} className="hover:text-primary transition-colors">
            {product.name}
          </Link>
        </h3>

        <p className="text-sm text-muted-foreground leading-relaxed">{product.shortDescription}</p>

        {mainSpec && (
          <p className="text-xs text-muted-foreground/80 border-l-2 border-primary/50 pl-3">
            <span className="uppercase tracking-wider">{mainSpec.label}:</span> {mainSpec.value}
          </p>
        )}

        <p className="mt-auto pt-2 text-xs font-semibold uppercase tracking-[0.18em] text-foreground/70">
          Valor sob consulta
        </p>

        <div className="flex flex-col gap-2 pt-1">
          <Link
            href={getProductUrl(product)}
            className="flex items-center justify-center gap-2 border border-border hover:border-primary hover:text-primary text-foreground px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] transition-colors"
          >
            Ver detalhes
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <a
            href={buildWhatsAppLink(product.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 text-xs font-bold uppercase tracking-[0.16em] hover:brightness-110 transition-all"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            Solicitar orçamento
          </a>
        </div>
      </div>
    </article>
  )
}
