import type { Metadata, Viewport } from 'next'
import { Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Script from 'next/script'

const _montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })

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
  <head>
    <Script
      async
      src="https://www.googletagmanager.com/gtag/js?id=AW-18115288939"
    />
    <Script id="google-ads">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-18115288939');
      `}
    </Script>
  </head>
      <body className={`${_montserrat.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
