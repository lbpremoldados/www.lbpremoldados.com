import Image from "next/image"

export function About() {
  return (
    <section id="sobre" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background texture */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/images/bg-texture.png')` }}
      />
      <div className="absolute inset-0 bg-background/65" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left - Content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">
                Nossa História
              </span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight text-balance">
              Uma história construída para{" "}
              <span className="text-primary">permanecer de pé</span>.
            </h2>

            <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed text-lg">
              <p>
                A história da LB Pré-Moldados começou de forma simples, mas com um sonho
                enorme. Foi na garagem de casa, em frente à calçada, que nosso fundador deu
                os primeiros passos com apenas um carrinho de mão, muita coragem e vontade
                de construir um futuro melhor para sua família.
              </p>
              <p>
                Entre fabricação, entregas e muito trabalho, aquele sonho começou a ganhar
                forma. Com esforço e persistência, conquistou seu primeiro ponto comercial,
                onde manteve a loja por 18 anos. Durante essa caminhada, enfrentou desafios,
                superou dificuldades e nunca deixou de acreditar naquilo que estava
                construindo.
              </p>
              <p>
                Com o passar dos anos, a empresa cresceu e uma nova fábrica foi inaugurada:
                maior, mais estruturada e preparada para continuar esse legado familiar.
              </p>
              <p>
                Hoje, cada escada, laje e artefato de concreto carrega a mesma dedicação
                presente desde o primeiro dia. Unimos experiência, qualidade e compromisso
                para entregar produtos feitos com excelência e construídos para durar.
              </p>
              <p className="text-foreground font-medium">
                Há mais de 25 anos, transformando concreto em histórias que permanecem de pé.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6">
              <div className="border-l-2 border-primary pl-4">
                <div className="text-3xl font-bold text-foreground">+25</div>
                <p className="text-sm text-muted-foreground mt-1">Anos de história</p>
              </div>
              <div className="border-l-2 border-primary/50 pl-4">
                <div className="text-3xl font-bold text-foreground">Milhares</div>
                <p className="text-sm text-muted-foreground mt-1">de obras entregues</p>
              </div>
              <div className="border-l-2 border-primary/30 pl-4">
                <div className="text-3xl font-bold text-foreground">100%</div>
                <p className="text-sm text-muted-foreground mt-1">Qualidade em cada detalhe</p>
              </div>
            </div>
          </div>

          {/* Right - Visual element */}
          <div className="relative lg:sticky lg:top-28">
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden ring-1 ring-primary/20">
              <Image
                src="/images/quadro-historia.jpg"
                alt="Quadro emoldurado da LB Pré-Moldados com frase inspiradora de Flávio Augusto"
                fill
                className="object-cover"
              />
            </div>
            {/* Accent border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-primary/20 rounded-sm -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
