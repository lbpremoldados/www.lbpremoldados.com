import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Factory, MessageCircle, Ruler, Truck } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { CatalogBrowser } from "@/components/catalog/catalog-browser"
import { StairFinder } from "@/components/catalog/stair-finder"
import { WorksGallery } from "@/components/catalog/works-gallery"
import { TeamProof } from "@/components/catalog/team-proof"
import { CatalogCta } from "@/components/catalog/catalog-cta"
import { MobileQuoteBar } from "@/components/catalog/mobile-quote-bar"
import { buildWhatsAppLink, categories, getProductsByCategory, products } from "@/data/catalog"

export const metadata: Metadata = {
  title: "Catálogo de Produtos | LB Pré-Moldados",
  description:
    "Catálogo completo da LB Pré-Moldados: escadas pré-moldadas, lajes treliçadas, pisos e artefatos de concreto, revestimentos, corrimãos, bases para caixa d'água, pingadeiras e balaústres. Orçamento pelo WhatsApp.",
  keywords: [
    "catálogo pré-moldados",
    "escada pré-moldada",
    "laje treliçada",
    "piso de concreto",
    "pingadeira de concreto",
    "base para caixa d'água",
    "balaústre de concreto",
    "corrimão para escada",
  ],
}

const heroMessage =
  "Olá! Vim pelo catálogo do site da LB Pré-Moldados e gostaria de falar com a equipe sobre a minha obra."

const pillars = [
  { icon: Factory, title: "Fabricação própria", text: "Peças produzidas na nossa fábrica com controle de qualidade." },
  { icon: Truck, title: "Entrega na obra", text: "Logística própria para levar as peças até o seu canteiro." },
  { icon: Ruler, title: "Sob medida", text: "Dimensões ajustadas conforme o vão e o projeto de cada obra." },
]

export default function CatalogoPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="hidden sm:block">
        <WhatsAppButton />
      </div>
      <MobileQuoteBar />

      <main className="pt-24 pb-24 sm:pb-0">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-stairs.jpg"
              alt=""
              aria-hidden="true"
              fill
              priority
              className="object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
            <nav aria-label="Trilha de navegação" className="flex items-center gap-2 text-xs uppercase tracking-[0.2em]">
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                Início
              </Link>
              <span className="text-muted-foreground/50">/</span>
              <span className="text-primary">Catálogo</span>
            </nav>

            <div className="mt-8 max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-primary" />
                <span className="text-xs uppercase tracking-[0.24em] text-primary font-semibold">
                  Catálogo completo
                </span>
              </div>

              <h1 className="mt-5 text-4xl md:text-6xl font-extrabold uppercase leading-[0.95] text-foreground text-balance">
                Tudo o que a sua obra precisa em <span className="text-primary">concreto pré-moldado</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
                {products.length} soluções organizadas por categoria — de escadas e lajes treliçadas a pisos, bases,
                pingadeiras, corrimãos e acabamentos. Encontre o produto, confira as especificações e solicite orçamento
                direto pelo WhatsApp.
              </p>

              <div className="mt-9 flex flex-col sm:flex-row gap-4">
                <a
                  href="#produtos"
                  className="flex items-center justify-center gap-2 border border-border px-7 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  Explorar produtos
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={buildWhatsAppLink(heroMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:flex items-center justify-center gap-2 bg-primary px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-primary-foreground hover:brightness-110 transition-all"
                >
                  <MessageCircle className="h-4 w-4" />
                  Falar com a equipe
                </a>
              </div>

              <dl className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-border pt-8">
                {pillars.map((pillar) => (
                  <div key={pillar.title} className="flex gap-4">
                    <pillar.icon className="h-6 w-6 shrink-0 text-primary" aria-hidden="true" />
                    <div>
                      <dt className="text-sm font-bold uppercase tracking-wide text-foreground">{pillar.title}</dt>
                      <dd className="mt-1 text-sm text-muted-foreground leading-relaxed">{pillar.text}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* Categorias */}
        <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-primary" />
            <span className="text-xs uppercase tracking-[0.24em] text-primary font-semibold">Categorias</span>
          </div>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold uppercase text-foreground text-balance">
            Navegue por categoria
          </h2>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/75 to-background/20" />
                  <div className="relative p-5">
                    <span className="text-[10px] uppercase tracking-[0.22em] text-primary">
                      {count} {count === 1 ? "produto" : "produtos"}
                    </span>
                    <h3 className="mt-2 text-xl font-extrabold uppercase leading-tight text-foreground">
                      {category.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {category.description}
                    </p>
                    <span className="mt-4 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground group-hover:text-primary transition-colors">
                      Ver categoria
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </section>

        {/* Escadas em destaque */}
        <section className="mx-auto max-w-7xl px-6 pb-16 md:pb-24">
          <StairFinder />
        </section>

        {/* Busca e listagem completa */}
        <section className="border-y border-border bg-secondary/20">
          <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-primary" />
              <span className="text-xs uppercase tracking-[0.24em] text-primary font-semibold">Todos os produtos</span>
            </div>
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold uppercase text-foreground text-balance">
              Busque pelo que a sua obra precisa
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
              Digite o nome da peça ou o problema que precisa resolver — nossa busca entende termos como
              &quot;caixa d&apos;água&quot;, &quot;capa de muro&quot;, &quot;H12&quot; ou &quot;porcelanato&quot;.
            </p>

            <div className="mt-10">
              <CatalogBrowser />
            </div>
          </div>
        </section>

        {/* Equipe */}
        <TeamProof />

        {/* Obras */}
        <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <WorksGallery />
        </section>

        {/* CTA final */}
        <section className="mx-auto max-w-7xl px-6 pb-16 md:pb-24">
          <CatalogCta />
        </section>
      </main>

      <Footer />
    </div>
  )
}
