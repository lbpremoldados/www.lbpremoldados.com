"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, X, Phone } from "lucide-react"

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { label: "Escadas", href: "#galeria" },
    { label: "Churrasqueiras", href: "#galeria" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Sobre", href: "#sobre" },
    { label: "Contato", href: "#contato" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <Image
            src="/images/logo-new.jpeg"
            alt="LB Pré Moldados - Desde 1998 - 25 anos construindo sonhos no seu lar"
            width={320}
            height={80}
            className="h-16 md:h-20 w-auto object-contain"
            priority
          />
        </a>

        {/* Company name and decorative line */}
        <div className="hidden xl:flex items-center flex-1 mx-6">
          <div className="flex items-center gap-4 w-full">
            <span className="text-sm font-semibold tracking-widest uppercase text-foreground whitespace-nowrap">
              LB PRÉ - <span className="text-primary">MOLDADOS</span>
            </span>
            <span className="h-px flex-1 bg-primary/20"></span>
            <span className="h-1.5 w-1.5 rounded-full bg-primary/60"></span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-8" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors tracking-wide uppercase"
            >
              {link.label}
            </a>
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

        {/* Mobile: Company name + Toggle */}
        <div className="xl:hidden flex items-center gap-4">
          <span className="text-sm font-semibold tracking-widest uppercase text-foreground whitespace-nowrap">
            LB PRÉ - <span className="text-primary">MOLDADOS</span>
          </span>
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
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors tracking-wide uppercase py-2"
              >
                {link.label}
              </a>
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
