import { MessageCircle } from "lucide-react"
import { buildWhatsAppLink } from "@/data/catalog"

const defaultMessage =
  "Olá! Vim pelo site da LB Pré-Moldados e gostaria de solicitar um orçamento. Posso enviar as medidas e fotos da minha obra?"

export function MobileQuoteBar({ message = defaultMessage }: { message?: string }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 backdrop-blur-md p-3 sm:hidden">
      <a
        href={buildWhatsAppLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-primary py-4 text-sm font-bold uppercase tracking-[0.16em] text-primary-foreground"
      >
        <MessageCircle className="h-5 w-5" />
        Orçamento pelo WhatsApp
      </a>
    </div>
  )
}
