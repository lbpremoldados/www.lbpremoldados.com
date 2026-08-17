"use client"

import { Award, Truck, ShieldCheck, Leaf } from "lucide-react"

const benefits = [
  {
    icon: Award,
    title: "Resistência Comprovada",
    description:
      "De 700 a 1000 quilos de resistência por degrau, alcançando de 35 MPa a 40 MPa.",
  },
  {
    icon: Truck,
    title: "Instalação Rápida",
    description:
      "Instalação em um dia útil, de 5 a 7 horas, dependendo do modelo da escada.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança e Confiança",
    description:
      "A lei garante 12 meses, mas a LB oferece 3 anos de garantia, desde que seguidas as normas dos degraus pré-moldados.",
  },
  {
    icon: Leaf,
    title: "Sustentabilidade",
    description:
      "Mais de 25 anos no mercado, com milhares de clientes satisfeitos.",
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
