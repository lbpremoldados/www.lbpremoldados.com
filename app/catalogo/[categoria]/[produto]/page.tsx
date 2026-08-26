import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Check, Info, Ruler } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ProductGallery } from "@/components/catalog/product-gallery"
import { QuoteForm } from "@/components/catalog/quote-form"
import { ProductCard } from "@/components/catalog/product-card"
import { MobileQuoteBar } from "@/components/catalog/mobile-quote-bar"
import { getCategory, getProduct, getRelatedProducts, products } from "@/data/catalog"

export function generateStaticParams() {
  return products.map((product) => ({ categoria: product.category, produto: product.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ categoria: string; produto: string }>
}): Promise<Metadata> {
  const { categoria, produto } = await params
  const product = getProduct(categoria, produto)

  if (!product) return { title: "Produto não encontrado | LB Pré-Moldados" }

  return {
    title: product.seoTitle,
    description: product.seoDescription,
    keywords: product.keywords,
  }
}

export default async function ProdutoPage({
  params,
}: {
  params: Promise<{ categoria: string; produto: string }>
}) {
  const { categoria, produto } = await params
  const product = getProduct(categoria, produto)

  if (!product) notFound()

  const category = getCategory(product.category)
  const related = getRelatedProducts(product)
  const badge = product.manufacturedByLB ? "Fabricação LB" : product.serviceByLB ? "Execução LB" : undefined

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="hidden sm:block">
        <WhatsAppButton />
      </div>
      <MobileQuoteBar message={product.whatsappMessage} />

      <main className="pt-24 pb-24 sm:pb-0">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <nav aria-label="Trilha de navegação" className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.2em]">
            <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
              Início
            </Link>
            <span className="text-muted-foreground/50">/</span>
            <Link href="/catalogo" className="text-muted-foreground hover:text-primary transition-colors">
              Catálogo
            </Link>
            <span className="text-muted-foreground/50">/</span>
            <Link
              href={`/catalogo/${product.category}`}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {category?.menuName}
            </Link>
            <span className="text-muted-foreground/50">/</span>
            <span className="text-primary">{product.name}</span>
          </nav>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-12">
            {/* Coluna esquerda: galeria + informações */}
            <div className="flex flex-col gap-10">
              <ProductGallery images={product.gallery} badge={badge} />

              <div>
                <span className="text-[11px] uppercase tracking-[0.22em] text-primary font-medium">
                  {category?.name}
                </span>
                <h1 className="mt-3 text-3xl md:text-4xl font-extrabold uppercase leading-tight text-foreground text-balance">
                  {product.name}
                </h1>
                <p className="mt-5 text-muted-foreground leading-relaxed text-pretty">{product.description}</p>

                <p className="mt-6 inline-flex border border-border px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
                  Valor sob consulta
                </p>

                {product.note && (
                  <p className="mt-6 flex gap-3 border-l-2 border-primary bg-secondary/40 p-4 text-sm text-muted-foreground leading-relaxed">
                    <Info className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    {product.note}
                  </p>
                )}
              </div>

              {/* Especificações */}
              {product.specifications.length > 0 && (
                <section>
                  <h2 className="text-xs uppercase tracking-[0.24em] text-primary font-semibold">Especificações</h2>
                  <dl className="mt-5 divide-y divide-border border-y border-border">
                    {product.specifications.map((spec) => (
                      <div key={spec.label} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 py-3.5">
                        <dt className="w-full sm:w-56 shrink-0 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                          {spec.label}
                        </dt>
                        <dd className="text-sm text-foreground leading-relaxed">{spec.value}</dd>
                      </div>
                    ))}
                  </dl>
                </section>
              )}

              {/* Dimensões */}
              {product.dimensions.length > 0 && (
                <section>
                  <h2 className="text-xs uppercase tracking-[0.24em] text-primary font-semibold">
                    Dimensões e configurações
                  </h2>
                  <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {product.dimensions.map((item) => (
                      <li key={item} className="flex gap-3 border border-border bg-secondary/30 p-4 text-sm text-foreground">
                        <Ruler className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Aplicações e opções */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {product.applications.length > 0 && (
                  <section>
                    <h2 className="text-xs uppercase tracking-[0.24em] text-primary font-semibold">Aplicações</h2>
                    <ul className="mt-5 flex flex-col gap-2.5">
                      {product.applications.map((item) => (
                        <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                          <Check className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                {product.options.length > 0 && (
                  <section>
                    <h2 className="text-xs uppercase tracking-[0.24em] text-primary font-semibold">
                      Opções disponíveis
                    </h2>
                    <ul className="mt-5 flex flex-col gap-2.5">
                      {product.options.map((item) => (
                        <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                          <Check className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </section>
                )}
              </div>
            </div>

            {/* Coluna direita: orçamento */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              <QuoteForm product={product} />
            </div>
          </div>
        </div>

        {/* Relacionados */}
        {related.length > 0 && (
          <section className="border-t border-border bg-secondary/20">
            <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-primary" />
                <span className="text-xs uppercase tracking-[0.24em] text-primary font-semibold">
                  Complete a sua obra
                </span>
              </div>
              <h2 className="mt-4 text-2xl md:text-3xl font-extrabold uppercase text-foreground text-balance">
                Produtos relacionados
              </h2>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {related.slice(0, 3).map((item) => (
                  <ProductCard key={item.id} product={item} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  )
}
