import { MessageCircle } from "lucide-react"
import { buildWhatsAppLink } from "@/data/catalog"

const message =
  "Olá! Vim pelo site da LB Pré-Moldados e ainda não sei qual é a melhor solução para a minha obra. Gostaria de enviar fotos e medidas para a equipe avaliar."

export function CatalogCta() {
  return (
    <section className="border border-primary/40 bg-secondary/40 p-8 md:p-12">
      <div className="flex flex-col lg:flex-row lg:items-center gap-8">
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-primary" />
            <span className="text-xs uppercase tracking-[0.24em] text-primary font-semibold">Atendimento técnico</span>
          </div>
          <h2 className="mt-4 text-2xl md:text-4xl font-extrabold uppercase text-foreground text-balance">
            Não sabe qual é a melhor solução para sua obra?
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Envie fotos e medidas para nossa equipe. Analisamos sua necessidade e orientamos você sobre as opções
            disponíveis.
          </p>
        </div>

        <a
          href={buildWhatsAppLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex shrink-0 items-center justify-center gap-3 bg-primary px-8 py-5 text-sm font-bold uppercase tracking-[0.16em] text-primary-foreground hover:brightness-110 transition-all"
        >
          <MessageCircle className="h-5 w-5" />
          Enviar minha obra para a LB
        </a>
      </div>
    </section>
  )
}
