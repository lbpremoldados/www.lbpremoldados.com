"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { label: "Catálogo", href: "/catalogo", highlight: true },
    { label: "Escadas", href: "/catalogo/escadas" },
    { label: "Lajes", href: "/catalogo/lajes" },
    { label: "Diferenciais", href: "/#diferenciais" },
    { label: "Sobre", href: "/#sobre" },
    { label: "Contato", href: "/#contato" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        {/* Wordmark */}
        <Link href="/" className="group inline-flex flex-col justify-center leading-none">
          <span
            className="relative inline-block font-sans font-extrabold uppercase text-foreground text-xl md:text-2xl tracking-tight"
            style={{ textShadow: "0 0 18px rgba(255, 106, 0, 0.18)" }}
          >
            <span className="text-primary">LB</span> PRÉ-MOLDADOS
            {/* Sliding orange underline */}
            <span className="pointer-events-none absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 ease-out group-hover:w-full" />
          </span>
          <span className="mt-1.5 text-[0.6rem] md:text-[0.68rem] font-light uppercase tracking-[0.35em] text-muted-foreground">
            Artefatos de Concreto
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-8" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-sm transition-colors tracking-wide uppercase hover:text-primary ${
                link.highlight ? "font-bold text-foreground" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Slogan and decorative line right */}
        <div className="hidden xl:flex items-center flex-1 mx-6">
          <div className="flex items-center gap-4 w-full justify-end">
            <span className="h-1.5 w-1.5 rounded-full bg-primary/60"></span>
            <span className="h-px flex-1 bg-primary/20"></span>
            <span className="text-xs text-muted-foreground tracking-wider whitespace-nowrap">
              Desde 1998
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className="hidden xl:flex items-center gap-4">
          <a
            href="https://wa.me/5511965452017"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold tracking-wide uppercase hover:brightness-110 transition-all rounded-sm"
          >
            <Phone className="h-4 w-4" />
            Falar com Especialista
          </a>
        </div>

        {/* Mobile: Toggle */}
        <div className="xl:hidden flex items-center">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-foreground"
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="xl:hidden bg-background border-t border-border">
          <nav className="flex flex-col px-6 py-6 gap-4" aria-label="Navegação mobile">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-sm transition-colors tracking-wide uppercase py-2 hover:text-primary ${
                  link.highlight ? "font-bold text-foreground" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/5511965452017"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3 text-sm font-semibold tracking-wide uppercase mt-2 rounded-sm"
            >
              <Phone className="h-4 w-4" />
              Falar com Especialista
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
