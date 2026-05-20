"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  const whatsappLink =
    "https://wa.me/5511965452017?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20LB%20PR%C3%89%20MOLDADOS%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento."

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] hover:bg-[#20BA5C] text-white px-5 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
      aria-label="Solicitar orçamento pelo WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="hidden sm:inline font-semibold text-sm uppercase tracking-wide">
        Solicitar Orçamento
      </span>
    </a>
  )
}
