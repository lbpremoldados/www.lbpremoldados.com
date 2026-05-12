import Image from "next/image"
import { Phone, Mail, MapPin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Image
                src="/images/logo-new.jpeg"
                alt="LB Pré Moldados - Desde 1998 - 25 anos construindo sonhos no seu lar"
                width={240}
                height={80}
                className="h-20 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Há mais de 25 anos no mercado, somos referência na fabricação de 
              peças pré-moldadas de concreto com qualidade e resistência.
            </p>
            <p className="text-xs text-muted-foreground/60 mt-3">
              CNPJ: 64.736.646/0001-14
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Produtos
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <span className="text-sm text-muted-foreground">
                  Escadas pré-moldadas
                </span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">
                  Escadas com viga central
                </span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">
                  Escadas em alvenaria
                </span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">
                  Escadas revestidas em porcelanato
                </span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">
                  Churrasqueiras pré-moldadas
                </span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">
                  Churrasqueiras de tijolinho
                </span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">
                  Grades pré-moldadas (balaústres)
                </span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">
                  Base de caixa d'água
                </span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">
                  Pés de base (cruzeta)
                </span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">
                  Estruturas sob medida
                </span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Contato
            </h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <div>
                  <a href="https://wa.me/5511965452017" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    (11) 96545-2017
                  </a>
                  <span className="text-xs text-muted-foreground/60 ml-1">- Leonardo</span>
                </div>
              </li>

              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <a href="mailto:libonattivendas@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  libonattivendas@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Address & Social */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Localização
            </h4>
            <div className="flex items-start gap-2 mb-6">
              <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                Avenida Oliveira Freire, nº 1111 B<br />
                Ao lado da Cacau Show
              </p>
            </div>

            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Redes Sociais
            </h4>
            <div className="flex flex-col gap-2.5">
              <a
                href="https://www.instagram.com/lbpremoldados_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-4 w-4" />
                @lbpremoldados_
              </a>
              <a
                href="https://www.facebook.com/lbpremoldados"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
                lbpremoldados
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} LB Pré Moldados LTDA. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground/50">
            CNPJ: 64.736.646/0001-14
          </p>
        </div>
      </div>
    </footer>
  )
}
