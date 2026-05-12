import { ArrowRight, Phone, MapPin, Mail } from "lucide-react"

export function CtaSection() {
  return (
    <section id="contato" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-primary" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.15' fill-rule='evenodd'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary-foreground leading-tight text-balance">
            Qualidade, segurança, estética e conforto. Tudo isso em um só lugar.
          </h2>

          <p className="mt-6 text-primary-foreground/80 text-lg leading-relaxed max-w-2xl mx-auto">
            Há mais de 25 anos no mercado, a LB Pré Moldados transforma projetos em
            realizações. Solicite seu orçamento e descubra o que podemos fazer pelo seu lar.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/5511965452017"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 bg-primary-foreground text-primary px-8 py-4 text-sm font-bold tracking-wider uppercase hover:brightness-95 transition-all rounded-sm"
            >
              Quero Meu Orçamento Personalizado
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Contact Info */}
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-primary-foreground/70">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span className="text-sm">(11) 96545-2017 - Leonardo</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-primary-foreground/20" />
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a href="mailto:libonattivendas@gmail.com" className="text-sm hover:text-primary-foreground transition-colors">
                libonattivendas@gmail.com
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="mt-6 flex items-center justify-center gap-2 text-primary-foreground/50">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">Rua Boicuaíba, nº 582 - São Paulo/SP</span>
          </div>
        </div>
      </div>
    </section>
  )
}
