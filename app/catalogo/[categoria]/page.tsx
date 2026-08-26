import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { CatalogBrowser } from "@/components/catalog/catalog-browser"
import { CatalogCta } from "@/components/catalog/catalog-cta"
import { MobileQuoteBar } from "@/components/catalog/mobile-quote-bar"
import { categories, getCategory, getProductsByCategory } from "@/data/catalog"

export function generateStaticParams() {
  return categories.map((category) => ({ categoria: category.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ categoria: string }>
}): Promise<Metadata> {
  const { categoria } = await params
  const category = getCategory(categoria)

  if (!category) return { title: "Categoria não encontrada | LB Pré-Moldados" }

  return {
    title: `${category.name} | LB Pré-Moldados`,
    description: category.description,
    keywords: category.keywords,
  }
}

export default async function CategoriaPage({ params }: { params: Promise<{ categoria: string }> }) {
  const { categoria } = await params
  const category = getCategory(categoria)

  if (!category) notFound()

  const items = getProductsByCategory(category.slug)
  const others = categories.filter((item) => item.slug !== category.slug)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="hidden sm:block">
        <WhatsAppButton />
      </div>
      <MobileQuoteBar
        message={`Olá! Vim pelo site da LB Pré-Moldados e gostaria de orçamento na categoria ${category.name}.`}
      />

      <main className="pt-24 pb-24 sm:pb-0">
        {/* Hero da categoria */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0">
            <Image
              src={category.image || "/placeholder.svg"}
              alt=""
              aria-hidden="true"
              fill
              priority
              className="object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
            <nav aria-label="Trilha de navegação" className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.2em]">
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                Início
              </Link>
              <span className="text-muted-foreground/50">/</span>
              <Link href="/catalogo" className="text-muted-foreground hover:text-primary transition-colors">
                Catálogo
              </Link>
              <span className="text-muted-foreground/50">/</span>
              <span className="text-primary">{category.name}</span>
            </nav>

            <div className="mt-8 max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-primary" />
                <span className="text-xs uppercase tracking-[0.24em] text-primary font-semibold">
                  {items.length} {items.length === 1 ? "produto" : "produtos"}
                </span>
              </div>
              <h1 className="mt-5 text-4xl md:text-5xl font-extrabold uppercase leading-[0.98] text-foreground text-balance">
                {category.name}
              </h1>
              <p className="mt-5 text-xl text-primary font-semibold text-balance">{category.headline}</p>
              <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">{category.description}</p>
            </div>
          </div>
        </section>

        {/* Produtos da categoria */}
        <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <CatalogBrowser initialCategory={category.slug} />
        </section>

        {/* Outras categorias */}
        <section className="border-t border-border bg-secondary/20">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <h2 className="text-xs uppercase tracking-[0.24em] text-primary font-semibold">Outras categorias</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {others.map((item) => (
                <Link
                  key={item.slug}
                  href={`/catalogo/${item.slug}`}
                  className="border border-border px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <CatalogCta />
        </section>
      </main>

      <Footer />
    </div>
  )
}
