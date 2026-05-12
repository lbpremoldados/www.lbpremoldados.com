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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">
                Nossa História
              </span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight text-balance">
              Não fazemos apenas estruturas. Construímos{" "}
              <span className="text-primary">sonhos</span> com solidez desde 1998.
            </h2>

            <p className="mt-8 text-muted-foreground leading-relaxed text-lg">
              Há mais de 25 anos no mercado, a LB Pré Moldados é referência na fabricação 
              de peças pré-moldadas de concreto, com qualidade, resistência e confiança 
              para todas as etapas da sua construção.
            </p>

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
          <div className="relative">
            <div className="relative aspect-square bg-secondary rounded-sm overflow-hidden">
              {/* Decorative grid pattern */}
              <div className="absolute inset-0 grid grid-cols-2 gap-px bg-border p-px">
                <div className="bg-secondary flex items-center justify-center">
                  <span className="font-serif text-6xl md:text-8xl text-primary/10">L</span>
                </div>
                <div className="bg-secondary flex items-center justify-center">
                  <span className="font-serif text-6xl md:text-8xl text-primary/10">B</span>
                </div>
                <div className="bg-secondary flex items-center justify-center p-6">
                  <p className="text-sm text-muted-foreground text-center leading-relaxed">
                    Escadas pré-moldadas<br />
                    Churrasqueiras<br />
                    Estruturas sob medida
                  </p>
                </div>
                <div className="bg-primary flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-4xl md:text-5xl font-bold text-primary-foreground">98</span>
                    <p className="text-xs uppercase tracking-widest text-primary-foreground/70 mt-1">
                      Desde
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Accent border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-primary/20 rounded-sm -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
