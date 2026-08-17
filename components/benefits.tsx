"use client"

import { Award, Truck, ShieldCheck, Leaf } from "lucide-react"

const benefits = [
  {
    icon: Award,
    title: "Qualidade Garantida",
    description: "700 a 1000 kg de resistência por degrau.",
  },
  {
    icon: Truck,
    title: "Agilidade na Entrega",
    description:
      "Instalação da escada pré-moldada em 1 dia, de 5 a 7 horas dependendo do modelo.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança e Confiança",
    description:
      "Garantia e responsabilidade sobre o produto: 1 ano por lei, mas a LB fornece 3 anos desde que sejam seguidas as normas.",
  },
  {
    icon: Leaf,
    title: "Sustentabilidade",
    description: "Degrau com matéria-prima de qualidade!",
  },
]

export function Benefits() {
  return (
    <section className="relative py-16 md:py-20 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group flex flex-col items-center text-center p-6 bg-background border border-border hover:border-primary/50 rounded-sm transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-center w-14 h-14 bg-primary/10 rounded-sm mb-4 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
