"use client"

import { useState } from "react"
import { MessageCircle, Camera } from "lucide-react"
import { buildWhatsAppLink, type CatalogProduct } from "@/data/catalog"

type FieldName =
  | "largura"
  | "altura"
  | "vao"
  | "comprimento"
  | "area"
  | "utilizacao"
  | "metros"
  | "quantidade"
  | "cidade"
  | "abertura"
  | "observacoes"

const emptyState: Record<FieldName, string> = {
  largura: "",
  altura: "",
  vao: "",
  comprimento: "",
  area: "",
  utilizacao: "",
  metros: "",
  quantidade: "",
  cidade: "",
  abertura: "",
  observacoes: "",
}

export function QuoteForm({ product }: { product: CatalogProduct }) {
  const [values, setValues] = useState(emptyState)

  const set = (field: FieldName) => (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setValues((current) => ({ ...current, [field]: event.target.value }))

  const lines: string[] = []
  const push = (label: string, value: string) => {
    if (value.trim()) lines.push(`${label}: ${value.trim()}`)
  }

  if (product.quoteForm === "escada") {
    push("Modelo", product.name)
    push("Largura desejada", values.largura)
    push("Altura piso a piso", values.altura)
    push("Comprimento do vão", values.vao)
    push("Abertura pronta", values.abertura)
  } else if (product.quoteForm === "laje") {
    push("Produto", product.name)
    push("Comprimento", values.comprimento)
    push("Largura", values.largura)
    push("Área aproximada", values.area)
    push("Tipo de utilização", values.utilizacao)
  } else if (product.quoteForm === "metragem") {
    push("Produto", product.name)
    push("Metros aproximados", values.metros)
  } else if (product.quoteForm === "quantidade") {
    push("Produto", product.name)
    push("Quantidade", values.quantidade)
    push("Metragem aproximada", values.metros)
  } else {
    push("Produto", product.name)
  }

  push("Cidade da obra", values.cidade)
  push("Observações", values.observacoes)

  const message = `Olá! Vim pelo site da LB Pré-Moldados e gostaria de solicitar orçamento para ${product.name}.\n\n${lines.join(
    "\n",
  )}\n\nGostaria de receber uma avaliação e posso enviar fotos do local.`

  return (
    <div className="border border-border bg-secondary/40 p-6 md:p-8">
      <div className="flex items-center gap-3">
        <span className="h-px w-8 bg-primary" />
        <h2 className="text-xs uppercase tracking-[0.24em] text-primary font-semibold">Orçamento inteligente</h2>
      </div>

      <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
        Preencha o que já souber. Ao enviar, a mensagem chega pronta no WhatsApp da nossa equipe — e você pode anexar
        as fotos do local direto na conversa.
      </p>

      <form className="mt-6 flex flex-col gap-4" onSubmit={(event) => event.preventDefault()}>
        {product.quoteForm === "escada" && (
          <>
            <Field label="Modelo" value={product.name} readOnly />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Largura desejada" placeholder="Ex.: 1,20 m" value={values.largura} onChange={set("largura")} />
              <Field label="Altura piso a piso" placeholder="Ex.: 2,80 m" value={values.altura} onChange={set("altura")} />
              <Field label="Comprimento do vão" placeholder="Ex.: 3,50 m" value={values.vao} onChange={set("vao")} />
              <SelectField
                label="Possui abertura pronta?"
                value={values.abertura}
                onChange={set("abertura")}
                options={["Sim", "Não", "Não sei informar"]}
              />
            </div>
          </>
        )}

        {product.quoteForm === "laje" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Comprimento" placeholder="Ex.: 6 m" value={values.comprimento} onChange={set("comprimento")} />
            <Field label="Largura" placeholder="Ex.: 4 m" value={values.largura} onChange={set("largura")} />
            <Field label="Área aproximada" placeholder="Ex.: 24 m²" value={values.area} onChange={set("area")} />
            <SelectField
              label="Tipo de utilização"
              value={values.utilizacao}
              onChange={set("utilizacao")}
              options={["Laje de piso", "Laje de cobertura", "Área de circulação", "Outro"]}
            />
          </div>
        )}

        {product.quoteForm === "metragem" && (
          <Field
            label="Metros aproximados"
            placeholder="Ex.: 8 m de corrimão"
            value={values.metros}
            onChange={set("metros")}
          />
        )}

        {product.quoteForm === "quantidade" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Quantidade de peças" placeholder="Ex.: 40 peças" value={values.quantidade} onChange={set("quantidade")} />
            <Field label="Ou metragem aproximada" placeholder="Ex.: 18 m de muro" value={values.metros} onChange={set("metros")} />
          </div>
        )}

        <Field label="Cidade da obra" placeholder="Ex.: São Paulo - SP" value={values.cidade} onChange={set("cidade")} />
        <Field
          label="Observações"
          placeholder="Conte o que for importante sobre o local"
          value={values.observacoes}
          onChange={set("observacoes")}
        />

        <a
          href={buildWhatsAppLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 flex items-center justify-center gap-3 bg-primary text-primary-foreground px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] hover:brightness-110 transition-all"
        >
          <MessageCircle className="h-5 w-5" />
          Enviar para o WhatsApp
        </a>

        <p className="flex items-center gap-2 text-xs text-muted-foreground">
          <Camera className="h-4 w-4 text-primary shrink-0" />
          Envie fotos do local na conversa: com as imagens a avaliação fica muito mais precisa.
        </p>
      </form>
    </div>
  )
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  readOnly,
}: {
  label: string
  value: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  readOnly?: boolean
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{label}</span>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        readOnly={readOnly}
        className={`border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary ${
          readOnly ? "text-muted-foreground" : ""
        }`}
      />
    </label>
  )
}

function SelectField({
  label,
  value,
  onChange,
  options,
}: {
  label: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
  options: string[]
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{label}</span>
      <select
        value={value}
        onChange={onChange}
        className="border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
      >
        <option value="">Selecione</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  )
}
