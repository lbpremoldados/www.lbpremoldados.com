/**
 * Base centralizada do catálogo da LB Pré-Moldados.
 * Nenhum produto deve ser cadastrado diretamente nos componentes.
 */

export const WHATSAPP_NUMBER = "5511965452017"

export type QuoteFormKind = "escada" | "laje" | "metragem" | "quantidade" | "generico"

export interface CatalogImage {
  src: string
  alt: string
  caption?: string
}

export interface CatalogSpecification {
  label: string
  value: string
}

export interface CatalogCategory {
  slug: string
  name: string
  menuName: string
  headline: string
  description: string
  image: string
  keywords: string[]
}

export interface CatalogProduct {
  id: string
  slug: string
  name: string
  category: string
  subcategory?: string
  shortDescription: string
  description: string
  mainImage: string
  gallery: CatalogImage[]
  specifications: CatalogSpecification[]
  dimensions: string[]
  applications: string[]
  options: string[]
  /** Selo FABRICAÇÃO LB — apenas peças fabricadas pela própria LB */
  manufacturedByLB: boolean
  /** Serviço executado pela equipe LB (não é peça pré-moldada) */
  serviceByLB?: boolean
  featured: boolean
  relatedProducts: string[]
  whatsappMessage: string
  quoteForm: QuoteFormKind
  note?: string
  seoTitle: string
  seoDescription: string
  keywords: string[]
}

export const categories: CatalogCategory[] = [
  {
    slug: "escadas",
    name: "Escadas",
    menuName: "Escadas",
    headline: "Escadas para diferentes projetos.",
    description:
      "Soluções em escadas pré-moldadas, estruturais e personalizadas para diferentes espaços e necessidades.",
    image: "/images/escada-viga-central-real.jpeg",
    keywords: ["escada pré-moldada", "escada de concreto", "escada sob medida"],
  },
  {
    slug: "lajes",
    name: "Lajes Treliçadas",
    menuName: "Lajes",
    headline: "Lajes treliçadas para cada projeto.",
    description:
      "Soluções para diferentes projetos estruturais, fabricadas conforme as necessidades da obra.",
    image: "/images/lajes-trelicadas-real.jpeg",
    keywords: ["laje treliçada", "laje h8", "laje h12", "laje h16"],
  },
  {
    slug: "pisos-e-artefatos",
    name: "Pisos e Artefatos de Concreto",
    menuName: "Pisos e Artefatos",
    headline: "Peças de concreto para áreas externas e acabamento da obra.",
    description:
      "Pisos, placas e artefatos de concreto fabricados na nossa fábrica para calçadas, acessos e áreas externas.",
    image: "/images/catalogo/capa-pisos-intertravado.jpg",
    keywords: ["piso de concreto", "artefatos de concreto", "piso para calçada"],
  },
  {
    slug: "revestimentos",
    name: "Revestimentos e Acabamentos",
    menuName: "Revestimentos",
    headline: "O acabamento que define o resultado final.",
    description:
      "Revestimentos e acabamentos executados pela equipe LB, do porcelanato em escadas às peças de concreto decorativas.",
    image: "/images/escada-porcelanato-real.jpeg",
    keywords: ["revestimento de escada", "porcelanato em escada", "revestimento de concreto"],
  },
  {
    slug: "corrimaos",
    name: "Corrimãos e Guarda-Corpos",
    menuName: "Corrimãos e Guarda-Corpos",
    headline: "Segurança que faz parte do acabamento.",
    description:
      "Corrimãos e guarda-corpos em aço galvanizado, inox e vidro, instalados nas escadas executadas pela LB.",
    image: "/images/corrimao-vidro-real.jpeg",
    keywords: ["corrimão para escada", "guarda-corpo de vidro", "corrimão galvanizado"],
  },
  {
    slug: "bases-e-cruzetas",
    name: "Bases e Cruzetas",
    menuName: "Bases e Cruzetas",
    headline: "Estrutura pré-moldada para apoio de reservatórios.",
    description:
      "Bases e cruzetas pré-moldadas que compõem a estrutura de apoio de caixas d'água, conforme a configuração do projeto.",
    image: "/images/base-caixa-dagua-real.jpeg",
    keywords: ["base para caixa d'água", "cruzeta pré-moldada", "base pré-moldada"],
  },
  {
    slug: "pingadeiras",
    name: "Pingadeiras de Concreto",
    menuName: "Pingadeiras",
    headline: "Proteção e acabamento para o topo do muro.",
    description:
      "Pingadeiras de concreto pré-moldadas para proteger o muro da água da chuva e finalizar o acabamento.",
    image: "/images/catalogo/pingadeira-concreto.png",
    keywords: ["pingadeira de concreto", "pingadeira para muro"],
  },
  {
    slug: "balaustres",
    name: "Grades de Cimento",
    menuName: "Grades",
    headline: "Fechamentos decorativos com resistência de concreto.",
    description:
      "Grades pré-moldadas de cimento para sacadas, muros, jardins e fechamentos.",
    image: "/images/grades-balaustres-real.jpeg",
    keywords: ["grade de cimento", "grades pré-moldadas", "grade de concreto"],
  },
  {
    slug: "outros-artefatos",
    name: "Outros Artefatos e Soluções",
    menuName: "Outros Artefatos",
    headline: "Soluções complementares para a sua obra.",
    description:
      "Churrasqueiras, áreas gourmet e acabamentos executados pela LB para completar o seu projeto.",
    image: "/images/churrasqueira-premoldada-marmorizada.jpeg",
    keywords: ["churrasqueira pré-moldada", "churrasqueira de tijolinho", "gesso drywall"],
  },
]

const ESCADA_APLICACOES = [
  "Obras residenciais",
  "Sobrados e casas em construção",
  "Comércios e salões",
  "Reformas e ampliações",
]

export const products: CatalogProduct[] = [
  /* ---------------------------------- ESCADAS --------------------------------- */
  {
    id: "escada-reta",
    slug: "escada-pre-moldada-reta",
    name: "Escada Pré-Moldada Reta",
    category: "escadas",
    subcategory: "Escadas pré-moldadas",
    shortDescription: "Solução pré-moldada de lance único, fabricada conforme as medidas do vão.",
    description:
      "A escada reta é a solução pré-moldada mais direta e utilizada em obras residenciais. Fabricada em concreto na nossa fábrica, é produzida conforme as medidas do vão e entregue pronta para instalação, reduzindo tempo de obra e desperdício de material. Permite acabamento posterior em porcelanato, granito ou mármore.",
    mainImage: "/images/catalogo/escada-reta-jardim.jpeg",
    gallery: [
      {
        src: "/images/catalogo/escada-reta-jardim.jpeg",
        alt: "Escada pré-moldada reta com pilar central instalada em área externa com jardim, executada pela LB",
        caption: "Obra executada pela LB",
      },
      {
        src: "/images/escada-corrimao-tubular.jpeg",
        alt: "Escada pré-moldada com corrimão tubular galvanizado instalado",
        caption: "Instalação com corrimão",
      },
      {
        src: "/images/hero-team.jpg",
        alt: "Equipe da LB Pré-Moldados movimentando peças de concreto na fábrica",
        caption: "Fabricação própria",
      },
      {
        src: "/images/escada-porcelanato-real.jpeg",
        alt: "Escada revestida em porcelanato após acabamento",
        caption: "Resultado final com revestimento",
      },
    ],
    specifications: [
      { label: "Tipo", value: "Solução pré-moldada de concreto" },
      { label: "Medidas", value: "Conforme projeto" },
      { label: "Largura", value: "Diferentes larguras disponíveis" },
      { label: "Acabamento", value: "Possibilidade de acabamento posterior" },
      { label: "Valor", value: "Orçamento personalizado" },
    ],
    dimensions: ["Largura e altura definidas conforme o vão da obra"],
    applications: ESCADA_APLICACOES,
    options: [
      "Corrimão tubular galvanizado",
      "Guarda-corpo em vidro",
      "Revestimento em porcelanato ou granito",
    ],
    manufacturedByLB: true,
    featured: true,
    relatedProducts: ["corrimao-galvanizado", "revestimento-de-escada-em-porcelanato", "escada-pre-moldada-em-l"],
    whatsappMessage:
      "Olá! Vim pelo site da LB Pré-Moldados e gostaria de solicitar orçamento para uma Escada Pré-Moldada Reta. Gostaria de enviar as medidas e fotos do local.",
    quoteForm: "escada",
    seoTitle: "Escada Pré-Moldada Reta | LB Pré-Moldados",
    seoDescription:
      "Escada pré-moldada reta de concreto fabricada sob medida. Diferentes larguras, acabamento posterior e orçamento personalizado com a LB Pré-Moldados.",
    keywords: ["escada pré-moldada reta", "escada de concreto reta", "escada pré-moldada"],
  },
  {
    id: "escada-l",
    slug: "escada-pre-moldada-em-l",
    name: "Escada Pré-Moldada em L",
    category: "escadas",
    subcategory: "Escadas pré-moldadas",
    shortDescription: "Dois lances com giro de 90°, com patamar quando aplicável.",
    description:
      "A escada em L resolve vãos que exigem mudança de direção, aproveitando melhor o espaço disponível. Quando o projeto pede, é executada com patamar intermediário, garantindo conforto na subida. Fabricada em concreto conforme as medidas informadas e entregue pronta para instalação pela nossa equipe.",
    mainImage: "/images/catalogo/escada-reta-flutuante.jpeg",
    gallery: [
      {
        src: "/images/catalogo/escada-reta-flutuante.jpeg",
        alt: "Escada pré-moldada em L com degraus flutuantes e pilar central executada pela LB",
        caption: "Obra executada pela LB",
      },
      {
        src: "/images/escada-marmore-jardim-real.jpeg",
        alt: "Escada executada pela LB com acabamento em mármore e jardim",
        caption: "Obra concluída",
      },
      {
        src: "/images/escada-porcelanato-real.jpeg",
        alt: "Detalhe de degraus de escada revestidos em porcelanato",
        caption: "Detalhe do acabamento",
      },
    ],
    specifications: [
      { label: "Tipo", value: "Solução pré-moldada de concreto" },
      { label: "Configuração", value: "Dois lances com giro de 90°" },
      { label: "Patamar", value: "Com patamar quando aplicável ao projeto" },
      { label: "Medidas", value: "Conforme projeto" },
      { label: "Valor", value: "Orçamento personalizado" },
    ],
    dimensions: ["Altura piso a piso e vão definidos conforme a obra"],
    applications: ESCADA_APLICACOES,
    options: ["Com ou sem patamar", "Corrimão galvanizado, inox ou vidro", "Revestimento sob consulta"],
    manufacturedByLB: true,
    featured: true,
    relatedProducts: ["escada-pre-moldada-em-u", "guarda-corpo-com-vidro", "revestimento-de-escada-em-porcelanato"],
    whatsappMessage:
      "Olá! Vim pelo site da LB Pré-Moldados e gostaria de solicitar orçamento para uma Escada Pré-Moldada em L. Gostaria de enviar as medidas e fotos do local.",
    quoteForm: "escada",
    seoTitle: "Escada Pré-Moldada em L | LB Pré-Moldados",
    seoDescription:
      "Escada pré-moldada em L com patamar quando aplicável, fabricada em concreto sob medida pela LB Pré-Moldados. Solicite orçamento pelo WhatsApp.",
    keywords: ["escada em L", "escada pré-moldada em L", "escada de concreto em L"],
  },
  {
    id: "escada-u",
    slug: "escada-pre-moldada-em-u",
    name: "Escada Pré-Moldada em U",
    category: "escadas",
    subcategory: "Escadas pré-moldadas",
    shortDescription: "Dois lances paralelos com giro de 180°, ideal para caixas de escada.",
    description:
      "A escada em U é indicada para caixas de escada e vãos que exigem retorno completo. É fabricada em concreto pré-moldado em diferentes configurações de largura e patamar, sempre conforme as medidas do local. Nossa equipe avalia o vão e indica a configuração mais adequada.",
    mainImage: "/images/catalogo/escada-u-real.jpeg",
    gallery: [
      {
        src: "/images/catalogo/escada-u-real.jpeg",
        alt: "Vista superior de escada pré-moldada em U com giro de 180° executada pela LB",
        caption: "Obra executada pela LB",
      },
      {
        src: "/images/escada-granito-vidro-real.jpeg",
        alt: "Escada em granito preto com guarda-corpo em vidro executada pela LB",
        caption: "Resultado final",
      },
      {
        src: "/images/escada-corrimao-tubular.jpeg",
        alt: "Escada pré-moldada com corrimão tubular galvanizado",
        caption: "Instalação",
      },
    ],
    specifications: [
      { label: "Tipo", value: "Solução pré-moldada de concreto" },
      { label: "Configuração", value: "Dois lances paralelos, giro de 180°" },
      { label: "Patamar", value: "Patamar intermediário conforme projeto" },
      { label: "Medidas", value: "Conforme projeto" },
      { label: "Valor", value: "Orçamento personalizado" },
    ],
    dimensions: ["Configurações diferentes de largura e patamar conforme o vão"],
    applications: ESCADA_APLICACOES,
    options: ["Diferentes larguras", "Corrimão e guarda-corpo", "Revestimento sob consulta"],
    manufacturedByLB: true,
    featured: true,
    relatedProducts: ["escada-pre-moldada-em-l", "corrimao-galvanizado", "revestimento-de-escada-em-porcelanato"],
    whatsappMessage:
      "Olá! Vim pelo site da LB Pré-Moldados e gostaria de solicitar um orçamento para uma Escada Pré-Moldada em U. Gostaria de enviar as medidas e fotos do local.",
    quoteForm: "escada",
    seoTitle: "Escada Pré-Moldada em U | LB Pré-Moldados",
    seoDescription:
      "Escada pré-moldada em U em concreto, com diferentes configurações de largura e patamar. Fabricação própria LB Pré-Moldados. Solicite orçamento.",
    keywords: ["escada em U", "escada pré-moldada em U", "escada de concreto em U"],
  },
  {
    id: "escada-j",
    slug: "escada-tipo-j",
    name: "Escada Pré-Moldada Tipo J",
    category: "escadas",
    subcategory: "Escadas pré-moldadas",
    shortDescription: "Lance reto com giro curto na base, para acessos com pouco espaço.",
    description:
      "A escada tipo J combina um lance reto com um giro curto na parte inferior, solução muito utilizada quando o espaço de chegada é reduzido. Fabricada em concreto pré-moldado conforme as medidas da obra.",
    mainImage: "/images/catalogo/escada-j-real.png",
    gallery: [
      {
        src: "/images/catalogo/escada-j-real.png",
        alt: "Escada pré-moldada tipo J com lance reto flutuante e giro em curva na base, executada pela LB",
        caption: "Obra executada pela LB",
      },
      {
        src: "/images/escada-corrimao-tubular.jpeg",
        alt: "Escada pré-moldada instalada com corrimão tubular galvanizado",
        caption: "Instalação",
      },
    ],
    specifications: [
      { label: "Tipo", value: "Solução pré-moldada de concreto" },
      { label: "Configuração", value: "Lance reto com giro na base" },
      { label: "Medidas", value: "Conforme projeto" },
      { label: "Valor", value: "Orçamento personalizado" },
    ],
    dimensions: ["Medidas definidas conforme o vão e o espaço de chegada"],
    applications: ESCADA_APLICACOES,
    options: ["Corrimão galvanizado", "Revestimento sob consulta"],
    manufacturedByLB: true,
    featured: false,
    relatedProducts: ["escada-pre-moldada-reta", "escada-pre-moldada-em-l", "corrimao-galvanizado"],
    whatsappMessage:
      "Olá! Vim pelo site da LB Pré-Moldados e gostaria de solicitar orçamento para uma Escada Pré-Moldada Tipo J. Gostaria de enviar as medidas e fotos do local.",
    quoteForm: "escada",
    seoTitle: "Escada Tipo J Pré-Moldada | LB Pré-Moldados",
    seoDescription:
      "Escada pré-moldada tipo J em concreto, com lance reto e giro na base. Fabricada sob medida pela LB Pré-Moldados.",
    keywords: ["escada tipo J", "escada pré-moldada tipo J"],
  },
  {
    id: "escada-caracol",
    slug: "escada-caracol",
    name: "Escada Caracol",
    category: "escadas",
    subcategory: "Escadas pré-moldadas",
    shortDescription: "Solução helicoidal para vãos reduzidos, com diâmetro conforme o projeto.",
    description:
      "A escada caracol é a solução ideal quando o espaço disponível é pequeno e o acesso precisa ser vertical. Executada com diâmetro definido conforme o local, recebe corrimão metálico e pode ser finalizada com revestimento. Informe o diâmetro disponível e a altura piso a piso para receber um orçamento preciso.",
    mainImage: "/images/catalogo/escada-caracol-real.jpeg",
    gallery: [
      {
        src: "/images/catalogo/escada-caracol-real.jpeg",
        alt: "Escada caracol pré-moldada com guarda-corpo em inox instalada em residência",
        caption: "Obra executada pela LB",
      },
      {
        src: "/images/escada-corrimao-tubular.jpeg",
        alt: "Detalhe de corrimão tubular galvanizado instalado em escada",
        caption: "Detalhe do corrimão",
      },
    ],
    specifications: [
      { label: "Tipo", value: "Escada helicoidal" },
      { label: "Diâmetro", value: "Conforme espaço disponível" },
      { label: "Altura", value: "Conforme altura piso a piso" },
      { label: "Corrimão", value: "Metálico, sob consulta" },
      { label: "Valor", value: "Orçamento personalizado" },
    ],
    dimensions: ["Diâmetro e altura informados no orçamento"],
    applications: ["Espaços reduzidos", "Acesso a mezaninos", "Áreas externas e internas", "Reformas"],
    options: ["Corrimão metálico", "Revestimento sob consulta"],
    manufacturedByLB: true,
    featured: true,
    relatedProducts: ["corrimao-galvanizado", "corrimao-em-aco-inox", "escada-sob-medida"],
    whatsappMessage:
      "Olá! Vim pelo site da LB Pré-Moldados e gostaria de solicitar orçamento para uma Escada Caracol. Posso informar o diâmetro disponível e a altura do local?",
    quoteForm: "escada",
    seoTitle: "Escada Caracol de Concreto | LB Pré-Moldados",
    seoDescription:
      "Escada caracol para espaços reduzidos, executada com diâmetro conforme o projeto. Orçamento personalizado com a LB Pré-Moldados.",
    keywords: ["escada caracol", "escada caracol de concreto", "escada helicoidal"],
  },
  {
    id: "escada-viga-central",
    slug: "escada-com-viga-central",
    name: "Escada com Viga Central",
    category: "escadas",
    subcategory: "Escadas de alto padrão",
    shortDescription: "Estrutura e design em uma única solução, com degraus em balanço.",
    description:
      "A escada com viga central apoia os degraus em uma única viga estrutural, criando o efeito de degraus flutuantes. É a escolha para projetos que buscam presença visual sem perder resistência. Executada pela LB e finalizada em mármore, granito ou porcelanato, com opção de guarda-corpo em vidro.",
    mainImage: "/images/escada-viga-central-real.jpeg",
    gallery: [
      {
        src: "/images/escada-viga-central-real.jpeg",
        alt: "Escada com viga central revestida em mármore executada pela LB",
        caption: "Obra executada pela LB",
      },
      {
        src: "/images/escada-granito-vidro-real.jpeg",
        alt: "Escada em granito preto com guarda-corpo em vidro",
        caption: "Acabamento com vidro",
      },
      {
        src: "/images/escada-alvenaria-led.jpeg",
        alt: "Escada de alto padrão com iluminação LED embutida",
        caption: "Detalhe com LED embutido",
      },
    ],
    specifications: [
      { label: "Tipo", value: "Escada estrutural com viga central" },
      { label: "Degraus", value: "Apoiados em viga central" },
      { label: "Acabamento", value: "Mármore, granito ou porcelanato" },
      { label: "Medidas", value: "Conforme projeto" },
      { label: "Valor", value: "Orçamento personalizado" },
    ],
    dimensions: ["Projeto dimensionado conforme o vão e a altura piso a piso"],
    applications: ["Residências de alto padrão", "Salões e recepções", "Projetos arquitetônicos", "Reformas premium"],
    options: ["Guarda-corpo em vidro", "Iluminação LED embutida", "Revestimento em mármore ou granito"],
    manufacturedByLB: true,
    featured: true,
    relatedProducts: ["guarda-corpo-com-vidro", "revestimento-de-escada-em-porcelanato", "escada-de-alvenaria"],
    whatsappMessage:
      "Olá! Vim pelo site da LB Pré-Moldados e gostaria de solicitar orçamento para uma Escada com Viga Central. Gostaria de enviar as medidas e fotos do local.",
    quoteForm: "escada",
    seoTitle: "Escada com Viga Central | LB Pré-Moldados",
    seoDescription:
      "Escada com viga central e degraus em balanço, executada pela LB Pré-Moldados com acabamento em mármore, granito ou porcelanato.",
    keywords: ["escada com viga central", "escada de degraus flutuantes", "escada alto padrão"],
  },
  {
    id: "escada-alvenaria",
    slug: "escada-de-alvenaria",
    name: "Escada de Alvenaria",
    category: "escadas",
    subcategory: "Solução construtiva",
    shortDescription: "Escada construída no local em alvenaria, com liberdade total de formato.",
    description:
      "Diferente das peças pré-moldadas, a escada de alvenaria é construída no próprio local pela equipe da LB. É a alternativa quando o projeto exige formatos e curvas específicas ou quando o acesso da obra não permite a entrada de peças prontas. Permite embutir iluminação e receber qualquer revestimento.",
    mainImage: "/images/escada-alvenaria-led.jpeg",
    gallery: [
      {
        src: "/images/escada-alvenaria-led.jpeg",
        alt: "Escada em alvenaria de alto padrão com LED embutido executada pela LB",
        caption: "Obra executada pela LB",
      },
      {
        src: "/images/escada-marmore-jardim-real.jpeg",
        alt: "Escada em mármore preto com jardim decorativo",
        caption: "Resultado final",
      },
    ],
    specifications: [
      { label: "Tipo", value: "Escada de alvenaria (não pré-moldada)" },
      { label: "Execução", value: "Construída no local pela equipe LB" },
      { label: "Formato", value: "Livre, conforme projeto" },
      { label: "Valor", value: "Orçamento personalizado" },
    ],
    dimensions: ["Medidas definidas em avaliação técnica no local"],
    applications: ["Projetos com formato especial", "Obras com acesso restrito", "Reformas", "Alto padrão"],
    options: ["Iluminação LED embutida", "Revestimento em porcelanato, granito ou mármore"],
    manufacturedByLB: false,
    serviceByLB: true,
    featured: false,
    relatedProducts: ["escada-com-viga-central", "revestimento-de-escada-em-porcelanato", "guarda-corpo-com-vidro"],
    whatsappMessage:
      "Olá! Vim pelo site da LB Pré-Moldados e gostaria de solicitar orçamento para uma Escada de Alvenaria. Gostaria de enviar as medidas e fotos do local.",
    quoteForm: "escada",
    seoTitle: "Escada de Alvenaria | LB Pré-Moldados",
    seoDescription:
      "Escada de alvenaria construída no local pela equipe da LB Pré-Moldados, com liberdade de formato e acabamento sob medida.",
    keywords: ["escada de alvenaria", "escada construída no local"],
  },
  {
    id: "escada-sob-medida",
    slug: "escada-sob-medida",
    name: "Escada Sob Medida",
    category: "escadas",
    subcategory: "Projeto sob medida",
    shortDescription: "Não encontrou o modelo da sua obra? Nossa equipe avalia e indica a solução.",
    description:
      "Não encontrou exatamente o modelo da sua obra? Envie as medidas e fotos do local para nossa equipe avaliar a melhor solução. Analisamos o vão, o acesso da obra e a altura piso a piso para indicar entre escada pré-moldada, escada de alvenaria ou uma solução mista.",
    mainImage: "/images/hero-stairs.jpg",
    gallery: [
      {
        src: "/images/hero-stairs.jpg",
        alt: "Escada de concreto com iluminação embutida em ambiente moderno",
        caption: "Projeto sob medida",
      },
      {
        src: "/images/instalacao-1.jpg",
        alt: "Funcionário uniformizado da LB Pré-Moldados instalando peças de concreto em obra",
        caption: "Instalação pela nossa equipe",
      },
      {
        src: "/images/hero-team.jpg",
        alt: "Equipe uniformizada da LB Pré-Moldados movimentando peças na fábrica",
        caption: "Fabricação própria",
      },
    ],
    specifications: [
      { label: "Atendimento", value: "Avaliação técnica com fotos e medidas" },
      { label: "Solução", value: "Pré-moldada, alvenaria ou mista" },
      { label: "Valor", value: "Orçamento personalizado" },
    ],
    dimensions: ["Definidas após avaliação do local"],
    applications: ["Vãos fora do padrão", "Obras com acesso difícil", "Projetos arquitetônicos", "Reformas"],
    options: ["Avaliação por fotos", "Visita técnica sob consulta"],
    manufacturedByLB: true,
    featured: true,
    relatedProducts: ["escada-pre-moldada-reta", "escada-caracol", "escada-de-alvenaria"],
    whatsappMessage:
      "Olá! Vim pelo site da LB Pré-Moldados e gostaria de enviar as medidas e fotos da minha obra para avaliação de uma escada sob medida.",
    quoteForm: "escada",
    seoTitle: "Escada Sob Medida | Projeto Personalizado LB Pré-Moldados",
    seoDescription:
      "Envie fotos e medidas da sua obra e receba a indicação da melhor solução em escada com a equipe da LB Pré-Moldados.",
    keywords: ["escada sob medida", "escada personalizada", "projeto de escada"],
  },

  /* ----------------------------------- LAJES ---------------------------------- */
  {
    id: "laje-h8",
    slug: "laje-trelicada-h8",
    name: "Laje Treliçada H8",
    category: "lajes",
    shortDescription: "Laje treliçada de altura 8 cm, fabricada conforme o projeto.",
    description:
      "Laje treliçada com altura de 8 cm, fabricada na nossa fábrica com armadura treli��ada e enchimento conforme o projeto. Utilizada em obras residenciais e comerciais, é entregue com comprimento definido de acordo com o vão informado.",
    mainImage: "/images/lajes-trelicadas-real.jpeg",
    gallery: [
      {
        src: "/images/lajes-trelicadas-real.jpeg",
        alt: "Detalhe de lajes treliçadas com armadura aparente fabricadas pela LB",
        caption: "Produto e detalhe da treliça",
      },
      {
        src: "/images/hero-team.jpg",
        alt: "Equipe uniformizada da LB Pré-Moldados movimentando peças de concreto na fábrica",
        caption: "Fabricação própria",
      },
    ],
    specifications: [
      { label: "Altura", value: "H8 (8 cm)" },
      { label: "Comprimento", value: "Sob consulta, conforme o vão" },
      { label: "Aplicação", value: "Lajes residenciais e comerciais" },
      { label: "Valor", value: "Orçamento por metragem" },
    ],
    dimensions: ["Comprimento sob consulta"],
    applications: ["Lajes de piso", "Lajes de cobertura", "Obras residenciais", "Obras comerciais"],
    options: ["Entrega conforme metragem da obra"],
    manufacturedByLB: true,
    featured: true,
    relatedProducts: ["laje-trelicada-h12", "laje-trelicada-h16"],
    whatsappMessage:
      "Olá! Vim pelo site da LB Pré-Moldados e gostaria de solicitar um orçamento de Laje Treliçada H8. Posso enviar as medidas da obra?",
    quoteForm: "laje",
    note: "A especificação da laje deve considerar as características e necessidades estruturais de cada projeto.",
    seoTitle: "Laje Treliçada H8 | LB Pré-Moldados",
    seoDescription:
      "Laje treliçada H8 fabricada pela LB Pré-Moldados conforme o vão da sua obra. Envie as medidas e receba orçamento pelo WhatsApp.",
    keywords: ["laje treliçada H8", "laje H8", "laje treliçada"],
  },
  {
    id: "laje-h12",
    slug: "laje-trelicada-h12",
    name: "Laje Treliçada H12",
    category: "lajes",
    shortDescription: "Laje treliçada de altura 12 cm, fabricada conforme o projeto.",
    description:
      "Laje treliçada com altura de 12 cm, fabricada conforme as necessidades do projeto. Muito utilizada em vãos intermediários de obras residenciais e comerciais. O comprimento é definido de acordo com as medidas informadas pelo cliente.",
    mainImage: "/images/lajes-trelicadas-real.jpeg",
    gallery: [
      {
        src: "/images/lajes-trelicadas-real.jpeg",
        alt: "Lajes treliçadas H12 com armadura treliçada fabricadas pela LB",
        caption: "Produto e detalhe da treliça",
      },
      {
        src: "/images/hero-team.jpg",
        alt: "Equipe uniformizada da LB Pré-Moldados na fábrica com peças de concreto",
        caption: "Fabricação própria",
      },
    ],
    specifications: [
      { label: "Altura", value: "H12 (12 cm)" },
      { label: "Comprimento", value: "Sob consulta, conforme o vão" },
      { label: "Aplicação", value: "Lajes residenciais e comerciais" },
      { label: "Valor", value: "Orçamento por metragem" },
    ],
    dimensions: ["Comprimento sob consulta"],
    applications: ["Lajes de piso", "Vãos intermediários", "Obras residenciais", "Obras comerciais"],
    options: ["Entrega conforme metragem da obra"],
    manufacturedByLB: true,
    featured: true,
    relatedProducts: ["laje-trelicada-h8", "laje-trelicada-h16"],
    whatsappMessage:
      "Olá! Vim pelo site da LB Pré-Moldados e gostaria de solicitar um orçamento de Laje Treliçada H12. Posso enviar as medidas da obra?",
    quoteForm: "laje",
    note: "A especificação da laje deve considerar as características e necessidades estruturais de cada projeto.",
    seoTitle: "Laje Treliçada H12 | LB Pré-Moldados",
    seoDescription:
      "Laje treliçada H12 fabricada pela LB Pré-Moldados conforme o projeto da sua obra. Solicite orçamento enviando as medidas.",
    keywords: ["laje treliçada H12", "laje H12", "laje treliçada"],
  },
  {
    id: "laje-h16",
    slug: "laje-trelicada-h16",
    name: "Laje Treliçada H16",
    category: "lajes",
    shortDescription: "Laje treliçada de altura 16 cm, fabricada conforme o projeto.",
    description:
      "Laje treliçada com altura de 16 cm, indicada quando o projeto exige maior altura de seção. Fabricada conforme as necessidades estruturais informadas e entregue com o comprimento definido para o vão da obra.",
    mainImage: "/images/lajes-trelicadas-real.jpeg",
    gallery: [
      {
        src: "/images/lajes-trelicadas-real.jpeg",
        alt: "Lajes treliçadas H16 fabricadas pela LB Pré-Moldados",
        caption: "Produto e detalhe da treliça",
      },
      {
        src: "/images/diferencial-2.jpg",
        alt: "Funcionário uniformizado da LB Pré-Moldados transportando peça de concreto em obra",
        caption: "Transporte e entrega",
      },
    ],
    specifications: [
      { label: "Altura", value: "H16 (16 cm)" },
      { label: "Comprimento", value: "Sob consulta, conforme o vão" },
      { label: "Aplicação", value: "Projetos com maior altura de seção" },
      { label: "Valor", value: "Orçamento por metragem" },
    ],
    dimensions: ["Comprimento sob consulta"],
    applications: ["Lajes de piso", "Vãos maiores", "Obras comerciais", "Obras residenciais"],
    options: ["Entrega conforme metragem da obra"],
    manufacturedByLB: true,
    featured: false,
    relatedProducts: ["laje-trelicada-h8", "laje-trelicada-h12"],
    whatsappMessage:
      "Olá! Vim pelo site da LB Pré-Moldados e gostaria de solicitar um orçamento de Laje Treliçada H16. Posso enviar as medidas da obra?",
    quoteForm: "laje",
    note: "A especificação da laje deve considerar as características e necessidades estruturais de cada projeto.",
    seoTitle: "Laje Treliçada H16 | LB Pré-Moldados",
    seoDescription:
      "Laje treliçada H16 fabricada pela LB Pré-Moldados conforme as necessidades do seu projeto. Envie as medidas e receba orçamento.",
    keywords: ["laje treliçada H16", "laje H16", "laje treliçada"],
  },

  /* ----------------------------- PISOS E ARTEFATOS ---------------------------- */
  {
    id: "piso-calcada",
    slug: "piso-para-calcada",
    name: "Piso para Calçada",
    category: "pisos-e-artefatos",
    shortDescription: "Placas de concreto para calçadas e acessos externos.",
    description:
      "Placas de concreto pré-moldadas para calçadas, acessos e passagens externas. Fabricadas na nossa fábrica com acabamento uniforme e resistência para tráfego de pedestres. Quantidade e medidas conforme a metragem da obra.",
    mainImage: "/images/catalogo/pisos-calcadas-tipos.jpeg",
    gallery: [
      {
        src: "/images/catalogo/pisos-calcadas-tipos.jpeg",
        alt: "Tabela de tipos e padrões de pisos para calçadas: tátil, intertravado, português, espinha de peixe e outros",
        caption: "Tipos e padrões disponíveis",
      },
      {
        src: "/images/hero-team.jpg",
        alt: "Equipe uniformizada da LB Pré-Moldados movimentando placas de concreto na fábrica",
        caption: "Fabricação própria",
      },
    ],
    specifications: [
      { label: "Material", value: "Concreto pré-moldado" },
      { label: "Medidas", value: "Sob consulta" },
      { label: "Espessura", value: "Sob consulta" },
      { label: "Acabamento", value: "Concreto aparente" },
      { label: "Valor", value: "Orçamento por quantidade" },
    ],
    dimensions: ["Medidas e espessura sob consulta"],
    applications: ["Calçadas", "Acessos externos", "Passagens em jardins", "Áreas de serviço"],
    options: ["Quantidade sob consulta"],
    manufacturedByLB: true,
    featured: false,
    relatedProducts: ["piso-de-concreto", "guia-meio-fio", "pingadeira-de-concreto"],
    whatsappMessage:
      "Olá! Vim pelo site da LB Pré-Moldados e gostaria de solicitar orçamento de Piso para Calçada. Posso informar a metragem aproximada?",
    quoteForm: "quantidade",
    seoTitle: "Piso de Concreto para Calçada | LB Pré-Moldados",
    seoDescription:
      "Placas de concreto pré-moldadas para calçadas e acessos externos, fabricadas pela LB Pré-Moldados. Consulte medidas e quantidade.",
    keywords: ["piso para calçada", "placa de concreto", "piso de concreto externo"],
  },
  {
    id: "piso-concreto",
    slug: "piso-de-concreto",
    name: "Piso de Concreto",
    category: "pisos-e-artefatos",
    shortDescription: "Peças de concreto para áreas externas, garagens e quintais.",
    description:
      "Peças de concreto pré-moldadas para pisos externos, garagens, quintais e áreas de circulação. Fabricadas com acabamento uniforme e boa resistência ao uso contínuo. Medidas e quantidade definidas conforme a área a ser coberta.",
    mainImage: "/images/catalogo/capa-pisos-intertravado.jpg",
    gallery: [
      {
        src: "/images/catalogo/capa-pisos-intertravado.jpg",
        alt: "Piso intertravado de concreto em padrão espinha de peixe instalado em área externa",
        caption: "Piso intertravado instalado",
      },
      {
        src: "/images/diferencial-1.jpg",
        alt: "Funcionário uniformizado da LB Pré-Moldados ao lado de peças de concreto em obra",
        caption: "Entrega e conferência em obra",
      },
    ],
    specifications: [
      { label: "Material", value: "Concreto pré-moldado" },
      { label: "Medidas", value: "Sob consulta" },
      { label: "Espessura", value: "Sob consulta" },
      { label: "Aplicação", value: "Áreas externas" },
      { label: "Valor", value: "Orçamento por quantidade" },
    ],
    dimensions: ["Medidas e espessura sob consulta"],
    applications: ["Garagens", "Quintais", "Áreas externas", "Circulação"],
    options: ["Quantidade sob consulta"],
    manufacturedByLB: true,
    featured: false,
    relatedProducts: ["piso-para-calcada", "guia-meio-fio", "pingadeira-de-concreto"],
    whatsappMessage:
      "Olá! Vim pelo site da LB Pré-Moldados e gostaria de solicitar orçamento de Piso de Concreto. Posso informar a área aproximada?",
    quoteForm: "quantidade",
    seoTitle: "Piso de Concreto Pré-Moldado | LB Pré-Moldados",
    seoDescription:
      "Peças de piso de concreto pré-moldado para áreas externas, garagens e quintais. Fabricação própria LB Pré-Moldados.",
    keywords: ["piso de concreto", "piso pré-moldado", "artefatos de concreto"],
  },
  {
    id: "guia-meio-fio",
    slug: "guia-meio-fio",
    name: "Guia e Meio-Fio",
    category: "pisos-e-artefatos",
    shortDescription: "Guias e meios-fios de concreto para delimitar ruas, calçadas e canteiros.",
    description:
      "Guias e meios-fios pré-moldados de concreto para delimitar ruas, calçadas, acessos e canteiros. Fabricados na nossa fábrica com acabamento uniforme e resistência para uso urbano e residencial. Medidas e quantidade conforme a metragem da obra.",
    mainImage: "/images/catalogo/guia-meio-fio.png",
    gallery: [
      {
        src: "/images/catalogo/guia-meio-fio.png",
        alt: "Guias e meios-fios de concreto pré-moldado instalados ao longo de calçada",
        caption: "Guia / meio-fio instalado",
      },
      {
        src: "/images/diferencial-1.jpg",
        alt: "Funcionário uniformizado da LB Pré-Moldados ao lado de peças pré-moldadas em obra",
        caption: "Entrega em obra",
      },
    ],
    specifications: [
      { label: "Material", value: "Concreto pré-moldado" },
      { label: "Medidas", value: "Sob consulta" },
      { label: "Aplicação", value: "Delimitação de ruas, calçadas e canteiros" },
      { label: "Acabamento", value: "Concreto aparente" },
      { label: "Valor", value: "Orçamento por metragem" },
    ],
    dimensions: ["Medidas e comprimento sob consulta"],
    applications: ["Ruas", "Calçadas", "Acessos", "Canteiros e jardins"],
    options: ["Quantidade sob consulta"],
    manufacturedByLB: true,
    featured: false,
    relatedProducts: ["piso-de-concreto", "piso-para-calcada", "pingadeira-de-concreto"],
    whatsappMessage:
      "Olá! Vim pelo site da LB Pré-Moldados e gostaria de solicitar orçamento de Guia e Meio-Fio. Posso informar a metragem aproximada?",
    quoteForm: "metragem",
    seoTitle: "Guia e Meio-Fio de Concreto | LB Pré-Moldados",
    seoDescription:
      "Guias e meios-fios pré-moldados de concreto para ruas, calçadas e canteiros. Fabricação própria LB Pré-Moldados. Consulte medidas.",
    keywords: ["guia de concreto", "meio-fio", "meio fio de concreto", "guia meio-fio pré-moldado"],
  },

  /* ------------------------------- REVESTIMENTOS ------------------------------ */
  {
    id: "revestimento-porcelanato",
    slug: "revestimento-de-escada-em-porcelanato",
    name: "Revestimento de Escada em Porcelanato",
    category: "revestimentos",
    shortDescription: "Serviço de acabamento que transforma a escada bruta em peça pronta.",
    description:
      "Serviço de revestimento executado pela equipe da LB em escadas pré-moldadas, de alvenaria ou existentes. Trabalhamos o corte das peças, os encontros, as quinas e o acabamento dos degraus para que o resultado final fique alinhado e uniforme. Também executamos revestimento em granito e mármore.",
    mainImage: "/images/escada-porcelanato-real.jpeg",
    gallery: [
      {
        src: "/images/escada-porcelanato-real.jpeg",
        alt: "Escada revestida em porcelanato com iluminação, executada pela LB",
        caption: "Resultado final",
      },
      {
        src: "/images/escada-granito-vidro-real.jpeg",
        alt: "Escada em granito preto com guarda-corpo em vidro",
        caption: "Detalhe dos degraus",
      },
      {
        src: "/images/escada-marmore-jardim-real.jpeg",
        alt: "Escada em mármore preto com jardim decorativo",
        caption: "Encontros e quinas",
      },
      {
        src: "/images/escada-colorida-vidro-real.jpeg",
        alt: "Escada com degraus revestidos e guarda-corpo em vidro",
        caption: "Obra concluída",
      },
    ],
    specifications: [
      { label: "Tipo", value: "Serviço de acabamento" },
      { label: "Materiais", value: "Porcelanato, granito ou mármore" },
      { label: "Escopo", value: "Corte, assentamento, quinas e encontros" },
      { label: "Valor", value: "Orçamento por degrau ou por escada" },
    ],
    dimensions: ["Quantidade de degraus e largura informados no orçamento"],
    applications: ["Escadas novas", "Escadas existentes", "Reformas", "Alto padrão"],
    options: ["Porcelanato", "Granito", "Mármore", "Rodapé e acabamento lateral"],
    manufacturedByLB: false,
    serviceByLB: true,
    featured: true,
    relatedProducts: ["escada-pre-moldada-reta", "escada-com-viga-central", "guarda-corpo-com-vidro"],
    whatsappMessage:
      "Olá! Vim pelo site da LB Pré-Moldados e gostaria de solicitar orçamento de Revestimento de Escada em Porcelanato. Posso enviar fotos e medidas da escada?",
    quoteForm: "generico",
    seoTitle: "Revestimento de Escada em Porcelanato | LB Pré-Moldados",
    seoDescription:
      "Revestimento de escada em porcelanato, granito e mármore executado pela equipe da LB Pré-Moldados. Veja fotos reais e solicite orçamento.",
    keywords: [
      "revestimento de escada em porcelanato",
      "revestimento de escada",
      "escada de porcelanato",
      "acabamento de escada",
    ],
  },
  {
    id: "revestimento-concreto",
    slug: "revestimento-de-concreto",
    name: "Revestimento de Concreto",
    category: "revestimentos",
    shortDescription: "Placas decorativas de concreto para fachadas e paredes internas.",
    description:
      "Placas de revestimento em concreto para fachadas, muros e paredes internas, com textura e relevo que valorizam o ambiente. Os modelos disponíveis, dimensões e texturas são informados pela nossa equipe conforme a linha em estoque.",
    mainImage: "/images/catalogo/revestimento-concreto.png",
    gallery: [
      {
        src: "/images/catalogo/revestimento-concreto.png",
        alt: "Placas decorativas de revestimento de concreto aplicadas em fachada",
        caption: "Produto aplicado",
      },
    ],
    specifications: [
      { label: "Material", value: "Concreto pré-moldado" },
      { label: "Modelos", value: "Sob consulta" },
      { label: "Dimensão", value: "Sob consulta" },
      { label: "Textura", value: "Conforme modelo" },
      { label: "Valor", value: "Orçamento por metro quadrado" },
    ],
    dimensions: ["Dimensões conforme o modelo escolhido"],
    applications: ["Fachadas", "Muros", "Paredes internas", "Painéis decorativos"],
    options: ["Modelos e texturas sob consulta"],
    manufacturedByLB: false,
    featured: false,
    relatedProducts: ["revestimento-de-escada-em-porcelanato", "pingadeira-de-concreto", "grade-chanfrada"],
    whatsappMessage:
      "Olá! Vim pelo site da LB Pré-Moldados e gostaria de consultar os modelos de Revestimento de Concreto disponíveis. Poderia me passar mais informações?",
    quoteForm: "metragem",
    seoTitle: "Revestimento de Concreto para Fachada | LB Pré-Moldados",
    seoDescription:
      "Placas de revestimento de concreto para fachadas, muros e paredes internas. Consulte modelos e medidas com a LB Pré-Moldados.",
    keywords: ["revestimento de concreto", "placa decorativa de concreto", "revestimento de fachada"],
  },

  /* --------------------------------- CORRIMÃOS -------------------------------- */
  {
    id: "corrimao-galvanizado",
    slug: "corrimao-galvanizado",
    name: "Corrimão Galvanizado",
    category: "corrimaos",
    shortDescription: "Corrimão tubular em aço galvanizado, resistente e de baixa manutenção.",
    description:
      "Corrimão tubular em aço galvanizado, fabricado e instalado conforme o desenho da escada. O galvanizado oferece boa resistência à corrosão e exige pouca manutenção, sendo a solução mais utilizada em escadas pré-moldadas e áreas externas.",
    mainImage: "/images/escada-corrimao-tubular.jpeg",
    gallery: [
      {
        src: "/images/escada-corrimao-tubular.jpeg",
        alt: "Escada pré-moldada com corrimão tubular galvanizado instalado pela LB",
        caption: "Instalado em escada da LB",
      },
      {
        src: "/images/escada-caracol-real.jpeg",
        alt: "Escada caracol com corrimão metálico instalado",
        caption: "Aplicação em escada caracol",
      },
    ],
    specifications: [
      { label: "Material", value: "Aço galvanizado" },
      { label: "Formato", value: "Tubular" },
      { label: "Instalação", value: "Executada pela equipe LB" },
      { label: "Valor", value: "Orçamento por metro" },
    ],
    dimensions: ["Metragem conforme o desenvolvimento da escada"],
    applications: ["Escadas pré-moldadas", "Áreas externas", "Acessos e rampas", "Obras comerciais"],
    options: ["Pintura sob consulta", "Fixação em parede ou piso"],
    manufacturedByLB: false,
    serviceByLB: true,
    featured: true,
    relatedProducts: ["guarda-corpo-galvanizado", "corrimao-em-aco-inox", "escada-pre-moldada-reta"],
    whatsappMessage:
      "Olá! Vim pelo site da LB Pré-Moldados e gostaria de solicitar orçamento de Corrimão Galvanizado. Posso informar os metros aproximados ou enviar fotos da escada?",
    quoteForm: "metragem",
    seoTitle: "Corrimão Galvanizado para Escada | LB Pré-Moldados",
    seoDescription:
      "Corrimão tubular galvanizado para escadas, fabricado e instalado pela LB Pré-Moldados. Informe a metragem e receba orçamento.",
    keywords: ["corrimão galvanizado", "corrimão para escada", "corrimão tubular"],
  },
  {
    id: "guarda-corpo-galvanizado",
    slug: "guarda-corpo-galvanizado",
    name: "Guarda-Corpo Galvanizado",
    category: "corrimaos",
    shortDescription: "Fechamento de segurança em aço galvanizado para escadas e sacadas.",
    description:
      "Guarda-corpo em aço galvanizado para escadas, sacadas, mezaninos e lajes. Fabricado conforme o vão e instalado pela nossa equipe, garantindo segurança e acabamento alinhado ao restante da obra.",
    mainImage: "/images/escada-corrimao-tubular.jpeg",
    gallery: [
      {
        src: "/images/escada-corrimao-tubular.jpeg",
        alt: "Escada com estrutura tubular galvanizada instalada pela LB",
        caption: "Instalação em obra",
      },
      {
        src: "/images/grades-balaustres-real.jpeg",
        alt: "Fechamento de sacada com peças pré-moldadas",
        caption: "Outras opções de fechamento",
      },
    ],
    specifications: [
      { label: "Material", value: "Aço galvanizado" },
      { label: "Aplicação", value: "Escadas, sacadas e mezaninos" },
      { label: "Instalação", value: "Executada pela equipe LB" },
      { label: "Valor", value: "Orçamento por metro" },
    ],
    dimensions: ["Metragem e altura conforme o local"],
    applications: ["Escadas", "Sacadas", "Mezaninos", "Lajes"],
    options: ["Pintura sob consulta", "Diferentes alturas"],
    manufacturedByLB: false,
    serviceByLB: true,
    featured: false,
    relatedProducts: ["corrimao-galvanizado", "guarda-corpo-com-vidro", "escada-pre-moldada-em-l"],
    whatsappMessage:
      "Olá! Vim pelo site da LB Pré-Moldados e gostaria de solicitar orçamento de Guarda-Corpo Galvanizado. Posso informar os metros aproximados ou enviar fotos do local?",
    quoteForm: "metragem",
    seoTitle: "Guarda-Corpo Galvanizado | LB Pré-Moldados",
    seoDescription:
      "Guarda-corpo em aço galvanizado para escadas, sacadas e mezaninos, instalado pela LB Pré-Moldados. Solicite orçamento por metro.",
    keywords: ["guarda-corpo galvanizado", "guarda-corpo para escada", "guarda corpo metálico"],
  },
  {
    id: "corrimao-vidro",
    slug: "corrimao-com-vidro",
    name: "Corrimão com Vidro",
    category: "corrimaos",
    shortDescription: "Vidro temperado com corrimão metálico, leveza visual na escada.",
    description:
      "Solução que combina vidro temperado e corrimão metálico, deixando a escada mais leve visualmente sem perder segurança. Executado conforme o desenho da escada e instalado pela nossa equipe.",
    mainImage: "/images/corrimao-vidro-real.jpeg",
    gallery: [
      {
        src: "/images/corrimao-vidro-real.jpeg",
        alt: "Corrimão com vidro temperado instalado em escada pela LB",
        caption: "Instalado pela LB",
      },
      {
        src: "/images/escada-colorida-vidro-real.jpeg",
        alt: "Escada com degraus coloridos e guarda-corpo em vidro",
        caption: "Resultado final",
      },
    ],
    specifications: [
      { label: "Material", value: "Vidro temperado e metal" },
      { label: "Aplicação", value: "Escadas internas e externas" },
      { label: "Instalação", value: "Executada pela equipe LB" },
      { label: "Valor", value: "Orçamento por metro" },
    ],
    dimensions: ["Metragem conforme o desenvolvimento da escada"],
    applications: ["Escadas internas", "Alto padrão", "Reformas", "Projetos arquitetônicos"],
    options: ["Ferragens em inox", "Diferentes espessuras de vidro sob consulta"],
    manufacturedByLB: false,
    serviceByLB: true,
    featured: true,
    relatedProducts: ["guarda-corpo-com-vidro", "corrimao-em-aco-inox", "escada-com-viga-central"],
    whatsappMessage:
      "Olá! Vim pelo site da LB Pré-Moldados e gostaria de solicitar orçamento de Corrimão com Vidro. Posso informar os metros aproximados ou enviar fotos da escada?",
    quoteForm: "metragem",
    seoTitle: "Corrimão com Vidro para Escada | LB Pré-Moldados",
    seoDescription:
      "Corrimão com vidro temperado instalado pela LB Pré-Moldados em escadas residenciais e comerciais. Solicite orçamento.",
    keywords: ["corrimão com vidro", "corrimão de vidro", "corrimão temperado"],
  },
  {
    id: "guarda-corpo-vidro",
    slug: "guarda-corpo-com-vidro",
    name: "Guarda-Corpo com Vidro",
    category: "corrimaos",
    shortDescription: "Fechamento em vidro temperado para escadas, sacadas e mezaninos.",
    description:
      "Guarda-corpo em vidro temperado com ferragens, indicado para quem quer segurança sem bloquear a visão do ambiente. Executado conforme o vão e instalado pela equipe da LB, com opção de corrimão superior.",
    mainImage: "/images/escada-granito-vidro-real.jpeg",
    gallery: [
      {
        src: "/images/escada-granito-vidro-real.jpeg",
        alt: "Escada em granito com guarda-corpo em vidro instalado pela LB",
        caption: "Instalado pela LB",
      },
      {
        src: "/images/corrimao-vidro-real.jpeg",
        alt: "Detalhe de fixação de guarda-corpo em vidro",
        caption: "Detalhe da fixação",
      },
    ],
    specifications: [
      { label: "Material", value: "Vidro temperado com ferragens" },
      { label: "Aplicação", value: "Escadas, sacadas e mezaninos" },
      { label: "Instalação", value: "Executada pela equipe LB" },
      { label: "Valor", value: "Orçamento por metro" },
    ],
    dimensions: ["Metragem e altura conforme o local"],
    applications: ["Escadas", "Sacadas", "Mezaninos", "Alto padrão"],
    options: ["Com ou sem corrimão superior", "Ferragens em inox"],
    manufacturedByLB: false,
    serviceByLB: true,
    featured: true,
    relatedProducts: ["corrimao-com-vidro", "escada-com-viga-central", "revestimento-de-escada-em-porcelanato"],
    whatsappMessage:
      "Olá! Vim pelo site da LB Pré-Moldados e gostaria de solicitar orçamento de Guarda-Corpo com Vidro. Posso informar os metros aproximados ou enviar fotos do local?",
    quoteForm: "metragem",
    seoTitle: "Guarda-Corpo de Vidro | LB Pré-Moldados",
    seoDescription:
      "Guarda-corpo em vidro temperado para escadas, sacadas e mezaninos, instalado pela LB Pré-Moldados. Solicite orçamento por metro.",
    keywords: ["guarda-corpo de vidro", "guarda corpo com vidro", "vidro temperado escada"],
  },
  {
    id: "corrimao-inox",
    slug: "corrimao-em-aco-inox",
    name: "Corrimão em Aço Inox",
    category: "corrimaos",
    shortDescription: "Acabamento em inox escovado ou polido, durabilidade e sofisticação.",
    description:
      "Corrimão em aço inox, indicado para projetos que buscam acabamento mais sofisticado e alta durabilidade. Fabricado conforme o desenho da escada e instalado pela nossa equipe.",
    mainImage: "/images/corrimao-inox-real.jpeg",
    gallery: [
      {
        src: "/images/corrimao-inox-real.jpeg",
        alt: "Corrimão em aço inox instalado em escada pela LB",
        caption: "Instalado pela LB",
      },
      {
        src: "/images/escada-granito-vidro-real.jpeg",
        alt: "Escada em granito com guarda-corpo em vidro e ferragens metálicas",
        caption: "Combinação com vidro",
      },
    ],
    specifications: [
      { label: "Material", value: "Aço inox" },
      { label: "Acabamento", value: "Escovado ou polido, sob consulta" },
      { label: "Instalação", value: "Executada pela equipe LB" },
      { label: "Valor", value: "Orçamento por metro" },
    ],
    dimensions: ["Metragem conforme o desenvolvimento da escada"],
    applications: ["Escadas internas", "Áreas comerciais", "Alto padrão", "Reformas"],
    options: ["Inox escovado", "Inox polido", "Combinação com vidro"],
    manufacturedByLB: false,
    serviceByLB: true,
    featured: false,
    relatedProducts: ["corrimao-com-vidro", "corrimao-galvanizado", "escada-caracol"],
    whatsappMessage:
      "Olá! Vim pelo site da LB Pré-Moldados e gostaria de solicitar orçamento de Corrimão em Aço Inox. Posso informar os metros aproximados ou enviar fotos da escada?",
    quoteForm: "metragem",
    seoTitle: "Corrimão em Aço Inox | LB Pré-Moldados",
    seoDescription:
      "Corrimão em aço inox para escadas, com acabamento escovado ou polido, instalado pela LB Pré-Moldados.",
    keywords: ["corrimão inox", "corrimão de aço inox", "corrimão para escada"],
  },

  /* ----------------------------- BASES E CRUZETAS ----------------------------- */
  {
    id: "base-caixa-dagua",
    slug: "base-caixa-dagua",
    name: "Base Pré-Moldada para Caixa d'Água",
    category: "bases-e-cruzetas",
    shortDescription: "Peça pré-moldada para composição da estrutura de apoio do reservatório.",
    description:
      "Solução pré-moldada para composição de estruturas destinadas ao apoio de reservatórios, conforme configuração adequada ao projeto. A base é fabricada na nossa fábrica e normalmente trabalha em conjunto com as cruzetas, formando a estrutura completa de apoio.",
    mainImage: "/images/base-caixa-dagua-real.jpeg",
    gallery: [
      {
        src: "/images/base-caixa-dagua-real.jpeg",
        alt: "Base pré-moldada de concreto para caixa d'água fabricada pela LB",
        caption: "Produto",
      },
      {
        src: "/images/instalacao-1.jpg",
        alt: "Funcionário uniformizado da LB Pré-Moldados instalando base pré-moldada em obra",
        caption: "Instalação pela nossa equipe",
      },
      {
        src: "/images/diferencial-1.jpg",
        alt: "Funcionário uniformizado da LB Pré-Moldados ao lado de bases e cruzetas em obra",
        caption: "Peças em obra",
      },
      {
        src: "/images/base-caixa-dagua.jpg",
        alt: "Detalhe da base pré-moldada para caixa d'água",
        caption: "Detalhe da peça",
      },
    ],
    specifications: [
      { label: "Material", value: "Concreto pré-moldado" },
      { label: "Composição", value: "Base + cruzetas, conforme projeto" },
      { label: "Medidas", value: "Sob consulta" },
      { label: "Valor", value: "Sob consulta" },
    ],
    dimensions: ["Medidas informadas pela nossa equipe conforme o reservatório"],
    applications: ["Apoio de reservatórios", "Obras residenciais", "Obras comerciais"],
    options: ["Base isolada", "Kit base + cruzeta"],
    manufacturedByLB: true,
    featured: true,
    relatedProducts: ["cruzeta-pre-moldada", "kit-base-e-cruzeta"],
    whatsappMessage:
      "Olá! Vim pelo site da LB Pré-Moldados e gostaria de consultar a Base Pré-Moldada para Caixa d'Água. Poderia me passar mais informações?",
    quoteForm: "generico",
    seoTitle: "Base Pré-Moldada para Caixa d'Água | LB Pré-Moldados",
    seoDescription:
      "Base pré-moldada de concreto para apoio de caixa d'água, fabricada pela LB Pré-Moldados. Consulte medidas e configuração.",
    keywords: ["base para caixa d'água", "base pré-moldada", "grade de caixa d'água"],
  },
  {
    id: "cruzeta",
    slug: "cruzeta-pre-moldada",
    name: "Cruzeta Pré-Moldada",
    category: "bases-e-cruzetas",
    shortDescription: "Peça de apoio que compõe a estrutura junto com a base.",
    description:
      "A cruzeta é a peça pré-moldada que funciona como pé de apoio da estrutura, trabalhando em conjunto com a base para sustentar o reservatório. Fabricada em concreto na nossa fábrica e entregue conforme a quantidade necessária para a composição.",
    mainImage: "/images/cruzeta-base-real.jpeg",
    gallery: [
      {
        src: "/images/cruzeta-base-real.jpeg",
        alt: "Cruzeta pré-moldada de concreto fabricada pela LB",
        caption: "Produto",
      },
      {
        src: "/images/instalacao-1.jpg",
        alt: "Funcionário uniformizado da LB Pré-Moldados montando estrutura com cruzetas em obra",
        caption: "Montagem em obra",
      },
      {
        src: "/images/cruzeta-base.jpg",
        alt: "Detalhe da cruzeta pré-moldada de concreto",
        caption: "Detalhe da peça",
      },
    ],
    specifications: [
      { label: "Material", value: "Concreto pré-moldado" },
      { label: "Função", value: "Pé de apoio da estrutura" },
      { label: "Quantidade", value: "Conforme composição do projeto" },
      { label: "Valor", value: "Sob consulta" },
    ],
    dimensions: ["Medidas sob consulta"],
    applications: ["Composição de bases", "Apoio de reservatórios", "Obras residenciais"],
    options: ["Venda isolada", "Kit base + cruzeta"],
    manufacturedByLB: true,
    featured: false,
    relatedProducts: ["base-caixa-dagua", "kit-base-e-cruzeta"],
    whatsappMessage:
      "Olá! Vim pelo site da LB Pré-Moldados e gostaria de consultar a Cruzeta Pré-Moldada. Poderia me passar mais informações?",
    quoteForm: "quantidade",
    seoTitle: "Cruzeta Pré-Moldada de Concreto | LB Pré-Moldados",
    seoDescription:
      "Cruzeta pré-moldada de concreto para composição da estrutura de apoio de caixa d'água. Fabricação própria LB Pré-Moldados.",
    keywords: ["cruzeta pré-moldada", "cruzeta de concreto", "pé da base"],
  },
  {
    id: "kit-base-cruzeta",
    slug: "kit-base-e-cruzeta",
    name: "Kit Base + Cruzeta",
    category: "bases-e-cruzetas",
    shortDescription: "Base e cruzetas na configuração adequada ao seu reservatório.",
    description:
      "Conjunto formado pela base pré-moldada e pelas cruzetas necessárias para compor a estrutura de apoio do reservatório. Nossa equipe indica a configuração adequada conforme a capacidade da caixa d'água e o local de instalação.",
    mainImage: "/images/diferencial-1.jpg",
    gallery: [
      {
        src: "/images/diferencial-1.jpg",
        alt: "Funcionário uniformizado da LB Pré-Moldados ao lado do conjunto de base e cruzetas em obra",
        caption: "Conjunto em obra",
      },
      {
        src: "/images/base-caixa-dagua-real.jpeg",
        alt: "Base pré-moldada de concreto para caixa d'água",
        caption: "Base",
      },
      {
        src: "/images/cruzeta-base-real.jpeg",
        alt: "Cruzeta pré-moldada de concreto",
        caption: "Cruzeta",
      },
      {
        src: "/images/instalacao-1.jpg",
        alt: "Funcionário uniformizado da LB Pré-Moldados instalando a estrutura pré-moldada",
        caption: "Instalação",
      },
    ],
    specifications: [
      { label: "Composição", value: "Base + cruzetas" },
      { label: "Configuração", value: "Conforme capacidade do reservatório" },
      { label: "Medidas", value: "Sob consulta" },
      { label: "Valor", value: "Sob consulta" },
    ],
    dimensions: ["Configuração definida pela nossa equipe"],
    applications: ["Apoio de reservatórios", "Obras residenciais", "Obras comerciais"],
    options: ["Diferentes configurações de quantidade"],
    manufacturedByLB: true,
    featured: false,
    relatedProducts: ["base-caixa-dagua", "cruzeta-pre-moldada"],
    whatsappMessage:
      "Olá! Vim pelo site da LB Pré-Moldados e gostaria de consultar o Kit Base + Cruzeta para caixa d'água. Poderia me passar mais informações?",
    quoteForm: "generico",
    seoTitle: "Kit Base e Cruzeta para Caixa d'Água | LB Pré-Moldados",
    seoDescription:
      "Kit com base e cruzetas pré-moldadas para apoio de caixa d'água, na configuração adequada ao seu projeto.",
    keywords: ["kit base e cruzeta", "base e cruzeta caixa d'água", "estrutura para caixa d'água"],
  },

  /* -------------------------------- PINGADEIRAS ------------------------------- */
  {
    id: "pingadeira",
    slug: "pingadeira-de-concreto",
    name: "Pingadeira de Concreto para Muro",
    category: "pingadeiras",
    shortDescription: "Peça de topo de muro que direciona a água e protege o acabamento.",
    description:
      "Pingadeira de concreto pré-moldada instalada no topo do muro para direcionar a água da chuva, evitando infiltração e manchas na parede. Fabricada na nossa fábrica com perfil inclinado e pingadeira lateral, disponível conforme as medidas em produção.",
    mainImage: "/images/catalogo/pingadeira-concreto.png",
    gallery: [
      {
        src: "/images/catalogo/pingadeira-concreto.png",
        alt: "Pingadeiras de concreto instaladas no topo de muro",
        caption: "Produto instalado",
      },
      {
        src: "/images/hero-team.jpg",
        alt: "Equipe uniformizada da LB Pré-Moldados movimentando peças de concreto na fábrica",
        caption: "Fabricação própria",
      },
    ],
    specifications: [
      { label: "Material", value: "Concreto pré-moldado" },
      { label: "Medidas", value: "Disponíveis sob consulta" },
      { label: "Aplicação", value: "Topo de muros e paredes externas" },
      { label: "Acabamento", value: "Concreto aparente" },
      { label: "Valor", value: "Orçamento por quantidade ou metragem" },
    ],
    dimensions: ["Larguras disponíveis conforme a produção"],
    applications: ["Muros divisórios", "Muros de frente", "Paredes externas", "Platibandas"],
    options: ["Quantidade por peça", "Cálculo por metragem do muro"],
    manufacturedByLB: true,
    featured: true,
    relatedProducts: ["piso-para-calcada", "grade-chanfrada", "guia-meio-fio"],
    whatsappMessage:
      "Olá! Vim pelo site da LB Pré-Moldados e gostaria de consultar as Pingadeiras de Concreto para muro. Posso informar a quantidade ou a metragem do muro?",
    quoteForm: "quantidade",
    seoTitle: "Pingadeira de Concreto para Muro | LB Pré-Moldados",
    seoDescription:
      "Pingadeira de concreto pré-moldada para topo de muro, fabricada pela LB Pré-Moldados. Informe a metragem e consulte valores.",
    keywords: ["pingadeira de concreto", "pingadeira para muro", "capa de muro"],
  },

  /* --------------------------------- BALAÚSTRES ------------------------------- */
  {
    id: "grade-chanfrada",
    slug: "grade-chanfrada",
    name: "Grade Chanfrada",
    category: "balaustres",
    shortDescription: "Grade decorativa de concreto com acabamento chanfrado.",
    description:
      "A Grade Chanfrada é uma grade pré-moldada de concreto com acabamento chanfrado, indicada para o fechamento decorativo de muros de frente, sacadas e jardins, unindo ventilação, resistência e um visual elegante. Cada módulo tem 2,00 m de comprimento por 0,80 m de altura, com pilaretes de concreto entre as peças.",
    mainImage: "/images/grades-balaustres-real.jpeg",
    gallery: [
      {
        src: "/images/grades-balaustres-real.jpeg",
        alt: "Grade chanfrada de concreto instalada em fechamento decorativo",
        caption: "Obra executada pela LB",
      },
      {
        src: "/images/grades-balaustres.jpg",
        alt: "Detalhe da grade chanfrada de concreto pré-moldado",
        caption: "Detalhe da peça",
      },
    ],
    specifications: [
      { label: "Material", value: "Concreto pré-moldado" },
      { label: "Comprimento", value: "2,00 m por módulo" },
      { label: "Altura", value: "0,80 m" },
      { label: "Padrão", value: "Acabamento chanfrado" },
      { label: "Acabamento", value: "Concreto aparente, pintura opcional" },
      { label: "Valor", value: "Orçamento por metragem ou quantidade" },
    ],
    dimensions: ["Módulo de 2,00 m x 0,80 m", "Pilaretes entre os módulos"],
    applications: ["Muros de frente", "Sacadas", "Jardins", "Fechamentos decorativos"],
    options: ["Pintura sob consulta", "Pilaretes de concreto"],
    manufacturedByLB: true,
    featured: true,
    relatedProducts: ["grade-trancinha", "grade-estrela", "pingadeira-de-concreto"],
    whatsappMessage:
      "Olá! Vim pelo site da LB Pré-Moldados e gostaria de solicitar orçamento da Grade Chanfrada (módulo de 2,00 m x 0,80 m). Posso informar a metragem do local?",
    quoteForm: "metragem",
    seoTitle: "Grade Chanfrada de Concreto | LB Pré-Moldados",
    seoDescription:
      "Grade chanfrada pré-moldada de concreto, módulo de 2,00 m x 0,80 m, para muros, sacadas e jardins. Fabricação própria LB Pré-Moldados.",
    keywords: ["grade chanfrada", "grade de concreto chanfrada", "grade decorativa de cimento"],
  },
  {
    id: "grade-trancinha",
    slug: "grade-trancinha",
    name: "Grade Trancinha",
    category: "balaustres",
    shortDescription: "Grade decorativa de concreto com padrão trançado vazado.",
    description:
      "A Grade Trancinha é uma grade pré-moldada de concreto com o clássico padrão trançado vazado, formando losangos entrelaçados. É indicada para fechamento decorativo de muros de frente, jardins e escadarias, unindo ventilação, resistência e um visual elegante. Cada módulo tem 2,00 m de comprimento por 0,80 m de altura, com pilaretes de concreto entre as peças.",
    mainImage: "/images/catalogo/grade-trancinha-real.webp",
    gallery: [
      {
        src: "/images/catalogo/grade-trancinha-real.webp",
        alt: "Grade trancinha de concreto branca instalada em jardim e escadaria residencial",
        caption: "Obra executada pela LB",
      },
    ],
    specifications: [
      { label: "Material", value: "Concreto pré-moldado" },
      { label: "Comprimento", value: "2,00 m por módulo" },
      { label: "Altura", value: "0,80 m" },
      { label: "Padrão", value: "Trançado vazado (trancinha)" },
      { label: "Acabamento", value: "Concreto aparente, pintura opcional" },
      { label: "Valor", value: "Orçamento por metragem ou quantidade" },
    ],
    dimensions: ["Módulo de 2,00 m x 0,80 m", "Pilaretes entre os módulos"],
    applications: ["Muros de frente", "Jardins", "Escadarias", "Fechamentos decorativos"],
    options: ["Pintura sob consulta", "Pilaretes de concreto"],
    manufacturedByLB: true,
    featured: true,
    relatedProducts: ["grade-estrela", "grade-chanfrada", "pingadeira-de-concreto"],
    whatsappMessage:
      "Olá! Vim pelo site da LB Pré-Moldados e gostaria de solicitar orçamento da Grade Trancinha (módulo de 2,00 m x 0,80 m). Posso informar a metragem do local?",
    quoteForm: "metragem",
    seoTitle: "Grade Trancinha de Concreto | LB Pré-Moldados",
    seoDescription:
      "Grade trancinha pré-moldada de concreto, módulo de 2,00 m x 0,80 m, para muros, jardins e escadarias. Fabricação própria LB Pré-Moldados.",
    keywords: ["grade trancinha", "grade de concreto trancinha", "grade vazada de cimento"],
  },
  {
    id: "grade-estrela",
    slug: "grade-estrela",
    name: "Grade Estrela",
    category: "balaustres",
    shortDescription: "Grade decorativa de concreto com padrão geométrico e ornamentos de estrela.",
    description:
      "A Grade Estrela é uma grade pré-moldada de concreto com padrão geométrico retangular vazado e ornamentos em formato de estrela/flor no topo. É indicada para fechamento decorativo de muros de frente, jardins e varandas, unindo ventilação, resistência e um acabamento elegante. Cada módulo tem 2,00 m de comprimento por 0,80 m de altura, com pilaretes de concreto entre as peças.",
    mainImage: "/images/catalogo/grade-estrela-real.jpg",
    gallery: [
      {
        src: "/images/catalogo/grade-estrela-real.jpg",
        alt: "Grade estrela de concreto branca com ornamentos florais instalada em jardim residencial",
        caption: "Obra executada pela LB",
      },
    ],
    specifications: [
      { label: "Material", value: "Concreto pré-moldado" },
      { label: "Comprimento", value: "2,00 m por módulo" },
      { label: "Altura", value: "0,80 m" },
      { label: "Padrão", value: "Geométrico vazado com ornamento de estrela" },
      { label: "Acabamento", value: "Concreto aparente, pintura opcional" },
      { label: "Valor", value: "Orçamento por metragem ou quantidade" },
    ],
    dimensions: ["Módulo de 2,00 m x 0,80 m", "Pilaretes entre os módulos"],
    applications: ["Muros de frente", "Jardins", "Varandas", "Fechamentos decorativos"],
    options: ["Pintura sob consulta", "Pilaretes de concreto", "Ornamentos em cores sob consulta"],
    manufacturedByLB: true,
    featured: true,
    relatedProducts: ["grade-trancinha", "grade-chanfrada", "pingadeira-de-concreto"],
    whatsappMessage:
      "Olá! Vim pelo site da LB Pré-Moldados e gostaria de solicitar orçamento da Grade Estrela (módulo de 2,00 m x 0,80 m). Posso informar a metragem do local?",
    quoteForm: "metragem",
    seoTitle: "Grade Estrela de Concreto | LB Pré-Moldados",
    seoDescription:
      "Grade estrela pré-moldada de concreto, módulo de 2,00 m x 0,80 m, para muros, jardins e varandas. Fabricação própria LB Pré-Moldados.",
    keywords: ["grade estrela", "grade de concreto estrela", "grade decorativa de cimento"],
  },
  {
    id: "grade-galinho",
    slug: "grade-galinho",
    name: "Grade Galinho",
    category: "balaustres",
    shortDescription: "Grade decorativa de concreto com padrão rústico de galhos entrelaçados.",
    description:
      "A Grade Galinho é uma grade pré-moldada de concreto com o clássico padrão rústico de galhos e gravetos entrelaçados, dando um visual natural e diferenciado ao muro. É indicada para fechamento decorativo de muros de frente, jardins e áreas externas, unindo ventilação, resistência e charme rústico. Cada módulo tem 2,00 m de comprimento por 0,80 m de altura, com pilaretes de concreto entre as peças.",
    mainImage: "/images/catalogo/grade-galinho-real.jpeg",
    gallery: [
      {
        src: "/images/catalogo/grade-galinho-real.jpeg",
        alt: "Grade galinho de concreto branca com padrão de galhos entrelaçados sobre muro de tijolo",
        caption: "Obra executada pela LB",
      },
    ],
    specifications: [
      { label: "Material", value: "Concreto pré-moldado" },
      { label: "Comprimento", value: "2,00 m por módulo" },
      { label: "Altura", value: "0,80 m" },
      { label: "Padrão", value: "Rústico de galhos entrelaçados" },
      { label: "Acabamento", value: "Concreto aparente, pintura opcional" },
      { label: "Valor", value: "Orçamento por metragem ou quantidade" },
    ],
    dimensions: ["Módulo de 2,00 m x 0,80 m", "Pilaretes entre os módulos"],
    applications: ["Muros de frente", "Jardins", "Áreas externas", "Fechamentos decorativos"],
    options: ["Pintura sob consulta", "Pilaretes de concreto"],
    manufacturedByLB: true,
    featured: true,
    relatedProducts: ["grade-trancinha", "grade-estrela", "grade-chanfrada"],
    whatsappMessage:
      "Olá! Vim pelo site da LB Pré-Moldados e gostaria de solicitar orçamento da Grade Galinho (módulo de 2,00 m x 0,80 m). Posso informar a metragem do local?",
    quoteForm: "metragem",
    seoTitle: "Grade Galinho de Concreto | LB Pré-Moldados",
    seoDescription:
      "Grade galinho pré-moldada de concreto, módulo de 2,00 m x 0,80 m, com padrão rústico de galhos para muros e jardins. Fabricação própria LB Pré-Moldados.",
    keywords: ["grade galinho", "grade de concreto galinho", "grade rústica de cimento"],
  },
  {
    id: "grade-cerquinha",
    slug: "grade-cerquinha",
    name: "Grade Cerquinha",
    category: "balaustres",
    shortDescription: "Cerca baixa de concreto no estilo palito para jardins e frentes.",
    description:
      "A Grade Cerquinha é uma cerca baixa pré-moldada de concreto no estilo palito, com ripas verticais espaçadas e travessas horizontais. Tem um visual leve e decorativo, ideal para delimitar jardins, gramados, canteiros e frentes de terreno sem fechar a vista. Cada módulo tem 2,00 m de comprimento por 0,90 m de altura, com pilaretes de concreto entre as peças.",
    mainImage: "/images/catalogo/grade-cerquinha-real.jpeg",
    gallery: [
      {
        src: "/images/catalogo/grade-cerquinha-real.jpeg",
        alt: "Grade cerquinha branca de concreto estilo palito delimitando jardim com palmeiras",
        caption: "Obra executada pela LB",
      },
    ],
    specifications: [
      { label: "Material", value: "Concreto pré-moldado" },
      { label: "Comprimento", value: "2,00 m por módulo" },
      { label: "Altura", value: "0,90 m" },
      { label: "Padrão", value: "Estilo palito (cerquinha)" },
      { label: "Acabamento", value: "Concreto aparente, pintura opcional" },
      { label: "Valor", value: "Orçamento por metragem ou quantidade" },
    ],
    dimensions: ["Módulo de 2,00 m x 0,90 m", "Pilaretes entre os módulos"],
    applications: ["Jardins", "Gramados", "Canteiros", "Frentes de terreno"],
    options: ["Pintura sob consulta", "Pilaretes de concreto"],
    manufacturedByLB: true,
    featured: true,
    relatedProducts: ["grade-trancinha", "grade-galinho", "grade-estrela"],
    whatsappMessage:
      "Olá! Vim pelo site da LB Pré-Moldados e gostaria de solicitar orçamento da Grade Cerquinha (módulo de 2,00 m x 0,90 m). Posso informar a metragem do local?",
    quoteForm: "metragem",
    seoTitle: "Grade Cerquinha de Concreto | LB Pré-Moldados",
    seoDescription:
      "Grade cerquinha pré-moldada de concreto, módulo de 2,00 m x 0,90 m, estilo palito para jardins e frentes. Fabricação própria LB Pré-Moldados.",
    keywords: ["grade cerquinha", "cerquinha de concreto", "cerca de jardim de cimento"],
  },
  {
    id: "grade-tabua",
    slug: "grade-tabua",
    name: "Grade Tábua",
    category: "balaustres",
    shortDescription: "Grade robusta de concreto com tábuas cruzadas na diagonal.",
    description:
      "A Grade Tábua é uma grade pré-moldada de concreto formada por tábuas largas cruzadas na diagonal, criando um padrão em X vazado de visual robusto e rústico. É indicada para o fechamento de muros de frente, chácaras e áreas externas, unindo ventilação, resistência e presença. Cada módulo tem 2,00 m de comprimento por 1,00 m de altura, com pilaretes de concreto entre as peças.",
    mainImage: "/images/catalogo/grade-tabua-real.jpeg",
    gallery: [
      {
        src: "/images/catalogo/grade-tabua-real.jpeg",
        alt: "Grade tábua de concreto branca com tábuas cruzadas sobre muro terracota",
        caption: "Obra executada pela LB",
      },
    ],
    specifications: [
      { label: "Material", value: "Concreto pré-moldado" },
      { label: "Comprimento", value: "2,00 m por módulo" },
      { label: "Altura", value: "1,00 m" },
      { label: "Padrão", value: "Tábuas cruzadas na diagonal" },
      { label: "Acabamento", value: "Concreto aparente, pintura opcional" },
      { label: "Valor", value: "Orçamento por metragem ou quantidade" },
    ],
    dimensions: ["Módulo de 2,00 m x 1,00 m", "Pilaretes entre os módulos"],
    applications: ["Muros de frente", "Chácaras", "Áreas externas", "Fechamentos decorativos"],
    options: ["Pintura sob consulta", "Pilaretes de concreto"],
    manufacturedByLB: true,
    featured: true,
    relatedProducts: ["grade-trancinha", "grade-galinho", "grade-cerquinha"],
    whatsappMessage:
      "Olá! Vim pelo site da LB Pré-Moldados e gostaria de solicitar orçamento da Grade Tábua (módulo de 2,00 m x 1,00 m). Posso informar a metragem do local?",
    quoteForm: "metragem",
    seoTitle: "Grade Tábua de Concreto | LB Pré-Moldados",
    seoDescription:
      "Grade tábua pré-moldada de concreto, módulo de 2,00 m x 1,00 m, com tábuas cruzadas para muros e chácaras. Fabricação própria LB Pré-Moldados.",
    keywords: ["grade tábua", "grade de concreto tábua", "grade cruzada de cimento"],
  },
  {
    id: "grade-castelinho",
    slug: "grade-castelinho",
    name: "Grade Castelinho",
    category: "balaustres",
    shortDescription: "Grade de concreto com argolas e topo em ameias estilo castelo.",
    description:
      "A Grade Castelinho é uma grade pré-moldada de concreto com barras verticais, detalhes de argolas ovais no centro e topo ondulado em formato de ameias, lembrando o acabamento de um castelo. É indicada para o fechamento decorativo de muros de frente e jardins, unindo ventilação, resistência e um visual clássico. Cada módulo tem 2,00 m de comprimento por 0,70 m de altura, com pilaretes de concreto entre as peças.",
    mainImage: "/images/catalogo/grade-castelinho-real.jpeg",
    gallery: [
      {
        src: "/images/catalogo/grade-castelinho-real.jpeg",
        alt: "Grade castelinho de concreto com argolas ovais e topo em ameias",
        caption: "Obra executada pela LB",
      },
    ],
    specifications: [
      { label: "Material", value: "Concreto pré-moldado" },
      { label: "Comprimento", value: "2,00 m por módulo" },
      { label: "Altura", value: "0,70 m" },
      { label: "Padrão", value: "Barras com argolas e topo em ameias" },
      { label: "Acabamento", value: "Concreto aparente, pintura opcional" },
      { label: "Valor", value: "Orçamento por metragem ou quantidade" },
    ],
    dimensions: ["Módulo de 2,00 m x 0,70 m", "Pilaretes entre os módulos"],
    applications: ["Muros de frente", "Jardins", "Áreas externas", "Fechamentos decorativos"],
    options: ["Pintura sob consulta", "Pilaretes de concreto"],
    manufacturedByLB: true,
    featured: true,
    relatedProducts: ["grade-trancinha", "grade-estrela", "grade-tabua"],
    whatsappMessage:
      "Olá! Vim pelo site da LB Pré-Moldados e gostaria de solicitar orçamento da Grade Castelinho (módulo de 2,00 m x 0,70 m). Posso informar a metragem do local?",
    quoteForm: "metragem",
    seoTitle: "Grade Castelinho de Concreto | LB Pré-Moldados",
    seoDescription:
      "Grade castelinho pré-moldada de concreto, módulo de 2,00 m x 0,70 m, com argolas e topo em ameias para muros e jardins. Fabricação própria LB Pré-Moldados.",
    keywords: ["grade castelinho", "grade de concreto castelinho", "grade decorativa de cimento"],
  },

  /* ----------------------------- OUTROS ARTEFATOS ----------------------------- */
  {
    id: "churrasqueira-premoldada",
    slug: "churrasqueira-pre-moldada",
    name: "Churrasqueira Pré-Moldada",
    category: "outros-artefatos",
    shortDescription: "Churrasqueira pronta para instalar, com acabamento marmorizado.",
    description:
      "Churrasqueira pré-moldada com acabamento marmorizado e soleira de granito, entregue pronta para instalação. Solução rápida para áreas gourmet, quintais e varandas, sem a necessidade de obra de alvenaria.",
    mainImage: "/images/churrasqueira-premoldada-marmorizada.jpeg",
    gallery: [
      {
        src: "/images/churrasqueira-premoldada-marmorizada.jpeg",
        alt: "Churrasqueira pré-moldada marmorizada com soleira de granito",
        caption: "Produto",
      },
      {
        src: "/images/churrasqueira-forno-iglu-real.jpeg",
        alt: "Churrasqueira com forno iglu e bancada executada pela LB",
        caption: "Composição com forno",
      },
    ],
    specifications: [
      { label: "Material", value: "Concreto pré-moldado marmorizado" },
      { label: "Soleira", value: "Granito" },
      { label: "Instalação", value: "Pronta para instalar" },
      { label: "Medidas", value: "Sob consulta" },
      { label: "Valor", value: "Sob consulta" },
    ],
    dimensions: ["Medidas disponíveis sob consulta"],
    applications: ["Áreas gourmet", "Quintais", "Varandas", "Espaços de lazer"],
    options: ["Com bancada", "Com forno sob consulta"],
    manufacturedByLB: true,
    featured: true,
    relatedProducts: ["churrasqueira-de-tijolinho", "piso-de-concreto", "gesso-drywall-com-led"],
    whatsappMessage:
      "Olá! Vim pelo site da LB Pré-Moldados e gostaria de solicitar orçamento de uma Churrasqueira Pré-Moldada. Poderia me passar mais informações?",
    quoteForm: "generico",
    seoTitle: "Churrasqueira Pré-Moldada | LB Pré-Moldados",
    seoDescription:
      "Churrasqueira pré-moldada marmorizada com soleira de granito, pronta para instalar. Fabricação LB Pré-Moldados.",
    keywords: ["churrasqueira pré-moldada", "churrasqueira de concreto"],
  },
  {
    id: "churrasqueira-tijolinho",
    slug: "churrasqueira-de-tijolinho",
    name: "Churrasqueira de Tijolinho",
    category: "outros-artefatos",
    shortDescription: "Churrasqueira construída no local, com área gourmet completa.",
    description:
      "Churrasqueira de tijolinho executada no local pela equipe da LB, com possibilidade de bancada, forno iglu e área gourmet completa. Solução personalizada para o espaço disponível e para o uso da família.",
    mainImage: "/images/churrasqueira-gourmet-real.jpeg",
    gallery: [
      {
        src: "/images/churrasqueira-gourmet-real.jpeg",
        alt: "Churrasqueira de tijolinho com área gourmet completa executada pela LB",
        caption: "Obra executada pela LB",
      },
      {
        src: "/images/churrasqueira-forno-iglu-real.jpeg",
        alt: "Churrasqueira com forno iglu e bancada de tijolinho",
        caption: "Com forno iglu",
      },
      {
        src: "/images/gallery-bbq-outdoor.jpg",
        alt: "Área gourmet externa com churrasqueira",
        caption: "Resultado final",
      },
    ],
    specifications: [
      { label: "Tipo", value: "Construída no local" },
      { label: "Material", value: "Tijolinho aparente" },
      { label: "Composição", value: "Bancada e forno sob consulta" },
      { label: "Valor", value: "Orçamento personalizado" },
    ],
    dimensions: ["Definidas conforme o espaço disponível"],
    applications: ["Áreas gourmet", "Quintais", "Coberturas", "Espaços de lazer"],
    options: ["Forno iglu", "Bancada", "Acabamento em granito"],
    manufacturedByLB: false,
    serviceByLB: true,
    featured: true,
    relatedProducts: ["churrasqueira-pre-moldada", "gesso-drywall-com-led", "piso-de-concreto"],
    whatsappMessage:
      "Olá! Vim pelo site da LB Pré-Moldados e gostaria de solicitar orçamento de uma Churrasqueira de Tijolinho. Posso enviar fotos e medidas do local?",
    quoteForm: "generico",
    seoTitle: "Churrasqueira de Tijolinho e Área Gourmet | LB Pré-Moldados",
    seoDescription:
      "Churrasqueira de tijolinho com área gourmet executada pela equipe da LB Pré-Moldados. Veja fotos reais e solicite orçamento.",
    keywords: ["churrasqueira de tijolinho", "área gourmet", "churrasqueira com forno iglu"],
  },
  {
    id: "gesso-drywall",
    slug: "gesso-drywall-com-led",
    name: "Gesso Drywall com LED",
    category: "outros-artefatos",
    shortDescription: "Forros e sancas em drywall com iluminação embutida.",
    description:
      "Execução de forros, sancas e paredes em gesso drywall com iluminação LED embutida, serviço realizado pela equipe da LB para valorizar ambientes internos, escadas e áreas gourmet.",
    mainImage: "/images/gesso-drywall-led.jpg",
    gallery: [
      {
        src: "/images/gesso-drywall-led.jpg",
        alt: "Forro em gesso drywall com iluminação LED embutida",
        caption: "Resultado final",
      },
      {
        src: "/images/escada-alvenaria-led.jpeg",
        alt: "Escada com iluminação LED embutida executada pela LB",
        caption: "Aplicação em escada",
      },
    ],
    specifications: [
      { label: "Tipo", value: "Serviço de acabamento" },
      { label: "Escopo", value: "Forros, sancas e paredes" },
      { label: "Iluminação", value: "LED embutido" },
      { label: "Valor", value: "Orçamento por metragem" },
    ],
    dimensions: ["Metragem conforme o ambiente"],
    applications: ["Ambientes internos", "Escadas", "Áreas gourmet", "Salas e quartos"],
    options: ["Sanca aberta ou fechada", "LED em fita"],
    manufacturedByLB: false,
    serviceByLB: true,
    featured: false,
    relatedProducts: ["revestimento-de-escada-em-porcelanato", "churrasqueira-de-tijolinho"],
    whatsappMessage:
      "Olá! Vim pelo site da LB Pré-Moldados e gostaria de solicitar orçamento de Gesso Drywall com LED. Posso informar a metragem do ambiente?",
    quoteForm: "metragem",
    seoTitle: "Gesso Drywall com LED | LB Pré-Moldados",
    seoDescription:
      "Forros e sancas em gesso drywall com iluminação LED embutida, executados pela equipe da LB Pré-Moldados.",
    keywords: ["gesso drywall", "sanca com led", "forro de drywall"],
  },
]

/* -------------------------------- Destaques -------------------------------- */

export interface StairHighlight {
  label: string
  slug: string
  image: string
  alt: string
}

export const stairHighlights: StairHighlight[] = [
  {
    label: "Reta",
    slug: "escada-pre-moldada-reta",
    image: "/images/catalogo/escada-reta-jardim.jpeg",
    alt: "Escada pré-moldada reta de concreto instalada em área externa, executada pela LB",
  },
  {
    label: "Em L",
    slug: "escada-pre-moldada-em-l",
    image: "/images/catalogo/escada-reta-flutuante.jpeg",
    alt: "Escada pré-moldada em L com degraus flutuantes executada pela LB",
  },
  {
    label: "Em U",
    slug: "escada-pre-moldada-em-u",
    image: "/images/catalogo/escada-u-real.jpeg",
    alt: "Escada pré-moldada em U com giro de 180° executada pela LB",
  },
  {
    label: "Tipo J",
    slug: "escada-tipo-j",
    image: "/images/catalogo/escada-j-real.png",
    alt: "Escada pré-moldada tipo J",
  },
  {
    label: "Caracol",
    slug: "escada-caracol",
    image: "/images/catalogo/escada-caracol-real.jpeg",
    alt: "Escada caracol com guarda-corpo em inox executada pela LB Pré-Moldados",
  },
  {
    label: "Viga Central",
    slug: "escada-com-viga-central",
    image: "/images/escada-viga-central-real.jpeg",
    alt: "Escada com viga central executada pela LB Pré-Moldados",
  },
  {
    label: "Alvenaria",
    slug: "escada-de-alvenaria",
    image: "/images/escada-alvenaria-led.jpeg",
    alt: "Escada de alvenaria com LED executada pela LB Pré-Moldados",
  },
  {
    label: "Sob Medida",
    slug: "escada-sob-medida",
    image: "/images/hero-stairs.jpg",
    alt: "Escada de concreto em projeto sob medida",
  },
]

export interface WorkPhoto {
  src: string
  alt: string
  title: string
  filter: string
}

export const works: WorkPhoto[] = [
  {
    src: "/images/escada-viga-central-real.jpeg",
    alt: "Escada com viga central revestida em mármore executada pela LB",
    title: "Escada com viga central",
    filter: "Escadas",
  },
  {
    src: "/images/escada-caracol-real.jpeg",
    alt: "Escada caracol com corrimão metálico executada pela LB",
    title: "Escada caracol",
    filter: "Escadas",
  },
  {
    src: "/images/escada-alvenaria-led.jpeg",
    alt: "Escada de alvenaria com LED embutido executada pela LB",
    title: "Escada de alvenaria com LED",
    filter: "Escadas",
  },
  {
    src: "/images/escada-porcelanato-real.jpeg",
    alt: "Escada revestida em porcelanato executada pela LB",
    title: "Revestimento em porcelanato",
    filter: "Revestimentos",
  },
  {
    src: "/images/escada-marmore-jardim-real.jpeg",
    alt: "Escada em mármore com jardim decorativo executada pela LB",
    title: "Escada em mármore com jardim",
    filter: "Revestimentos",
  },
  {
    src: "/images/escada-granito-vidro-real.jpeg",
    alt: "Escada em granito com guarda-corpo em vidro executada pela LB",
    title: "Granito com guarda-corpo de vidro",
    filter: "Corrimãos",
  },
  {
    src: "/images/corrimao-vidro-real.jpeg",
    alt: "Corrimão com vidro instalado pela LB",
    title: "Corrimão com vidro",
    filter: "Corrimãos",
  },
  {
    src: "/images/corrimao-inox-real.jpeg",
    alt: "Corrimão em aço inox instalado pela LB",
    title: "Corrimão em inox",
    filter: "Corrimãos",
  },
  {
    src: "/images/escada-corrimao-tubular.jpeg",
    alt: "Escada pré-moldada com corrimão tubular galvanizado instalada pela LB",
    title: "Corrimão tubular galvanizado",
    filter: "Corrimãos",
  },
  {
    src: "/images/lajes-trelicadas-real.jpeg",
    alt: "Lajes treliçadas fabricadas pela LB Pré-Moldados",
    title: "Lajes treliçadas",
    filter: "Lajes",
  },
  {
    src: "/images/instalacao-1.jpg",
    alt: "Funcionário uniformizado da LB Pré-Moldados instalando base pré-moldada em obra",
    title: "Instalação de base pré-moldada",
    filter: "Artefatos",
  },
  {
    src: "/images/diferencial-1.jpg",
    alt: "Funcionário uniformizado da LB Pré-Moldados ao lado de bases e cruzetas em obra",
    title: "Base e cruzetas em obra",
    filter: "Artefatos",
  },
  {
    src: "/images/grades-balaustres-real.jpeg",
    alt: "Balaústres pré-moldados instalados em sacada",
    title: "Balaústres em sacada",
    filter: "Artefatos",
  },
  {
    src: "/images/escada-colorida-vidro-real.jpeg",
    alt: "Escada com degraus coloridos e guarda-corpo em vidro executada pela LB",
    title: "Escada com guarda-corpo de vidro",
    filter: "Escadas",
  },
]

export const workFilters = ["Todas", "Escadas", "Lajes", "Corrimãos", "Revestimentos", "Artefatos"]

/* --------------------------------- Helpers -------------------------------- */

export function buildWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug)
}

export function getProductsByCategory(slug: string) {
  return products.filter((product) => product.category === slug)
}

export function getProduct(categorySlug: string, productSlug: string) {
  return products.find((product) => product.category === categorySlug && product.slug === productSlug)
}

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug)
}

export function getProductUrl(product: CatalogProduct) {
  return `/catalogo/${product.category}/${product.slug}`
}

export function getRelatedProducts(product: CatalogProduct) {
  return product.relatedProducts
    .map((slug) => getProductBySlug(slug))
    .filter((related): related is CatalogProduct => Boolean(related))
}

export function getFeaturedProducts() {
  return products.filter((product) => product.featured)
}

export function normalizeText(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}

/** Sinônimos e termos usados pelos clientes na busca */
const searchAliases: Record<string, string[]> = {
  "caixa dagua": ["base-caixa-dagua", "cruzeta-pre-moldada", "kit-base-e-cruzeta"],
  reservatorio: ["base-caixa-dagua", "cruzeta-pre-moldada", "kit-base-e-cruzeta"],
  cruzeta: ["cruzeta-pre-moldada", "base-caixa-dagua", "kit-base-e-cruzeta"],
  pe: ["cruzeta-pre-moldada"],
  muro: ["pingadeira-de-concreto", "grade-chanfrada", "grade-trancinha"],
  capa: ["pingadeira-de-concreto"],
  porcelanato: ["revestimento-de-escada-em-porcelanato"],
  granito: ["revestimento-de-escada-em-porcelanato"],
  marmore: ["revestimento-de-escada-em-porcelanato"],
  vidro: ["corrimao-com-vidro", "guarda-corpo-com-vidro"],
  inox: ["corrimao-em-aco-inox"],
  galvanizado: ["corrimao-galvanizado", "guarda-corpo-galvanizado"],
  churrasqueira: ["churrasqueira-pre-moldada", "churrasqueira-de-tijolinho"],
  gourmet: ["churrasqueira-de-tijolinho"],
  drywall: ["gesso-drywall-com-led"],
  gesso: ["gesso-drywall-com-led"],
  led: ["gesso-drywall-com-led", "escada-de-alvenaria"],
  calcada: ["piso-para-calcada", "piso-de-concreto"],
  piso: ["piso-para-calcada", "piso-de-concreto"],
  intertravado: ["piso-de-concreto", "piso-para-calcada"],
  paver: ["piso-de-concreto", "piso-para-calcada"],
  guia: ["guia-meio-fio"],
  "meio-fio": ["guia-meio-fio"],
  "meio fio": ["guia-meio-fio"],
  balaustre: ["grade-chanfrada", "grade-trancinha", "grade-estrela", "grade-galinho", "grade-cerquinha", "grade-tabua", "grade-castelinho"],
  grade: ["grade-chanfrada", "grade-trancinha", "grade-estrela", "grade-galinho", "grade-cerquinha", "grade-tabua", "grade-castelinho"],
  chanfrada: ["grade-chanfrada"],
  trancinha: ["grade-trancinha"],
  estrela: ["grade-estrela"],
  galinho: ["grade-galinho"],
  cerquinha: ["grade-cerquinha"],
  cerca: ["grade-cerquinha"],
  tabua: ["grade-tabua"],
  castelinho: ["grade-castelinho"],
  h8: ["laje-trelicada-h8"],
  h12: ["laje-trelicada-h12"],
  h16: ["laje-trelicada-h16"],
  caracol: ["escada-caracol"],
  helicoidal: ["escada-caracol"],
  patamar: ["escada-pre-moldada-em-l", "escada-pre-moldada-em-u"],
}

export function searchProducts(query: string, categorySlug?: string) {
  const base = categorySlug && categorySlug !== "todas" ? getProductsByCategory(categorySlug) : products
  const term = normalizeText(query)

  if (!term) return base

  const aliasSlugs = new Set<string>()
  for (const [alias, slugs] of Object.entries(searchAliases)) {
    if (term.includes(alias) || alias.includes(term)) {
      slugs.forEach((slug) => aliasSlugs.add(slug))
    }
  }

  return base.filter((product) => {
    if (aliasSlugs.has(product.slug)) return true

    const category = getCategory(product.category)
    const haystack = normalizeText(
      [
        product.name,
        product.shortDescription,
        product.description,
        product.subcategory ?? "",
        category?.name ?? "",
        ...product.keywords,
        ...product.applications,
      ].join(" "),
    )

    return term.split(" ").every((word) => haystack.includes(word))
  })
}
