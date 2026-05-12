import type { Metadata, Viewport } from 'next'
import { Montserrat, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })
const _playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'LB Pré Moldados | Escadas e Churrasqueiras de Alto Padrão desde 1998',
  description:
    'Especialistas em escadas pré-moldadas, churrasqueiras e estruturas sob medida de alto padrão. Mais de 25 anos transformando projetos em segurança, elegância e exclusividade.',
  keywords: [
    'escadas pré-moldadas',
    'churrasqueiras pré-moldadas',
    'escadas de concreto',
    'churrasqueiras de tijolinho',
    'estruturas sob medida',
    'LB Pré Moldados',
  ],
}

export const viewport: Viewport = {
  themeColor: '#1a1a1a',
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${_montserrat.variable} ${_playfair.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
