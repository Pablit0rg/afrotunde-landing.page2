# Afrotunde - Next.js 15 Refactor

Refatoração do monólito HTML/Tailwind para uma arquitetura modular em **Next.js 15** com **App Router** e **TypeScript**.

## 📁 Estrutura de Pastas (Feature-based)

```
src/
├── app/
│   ├── layout.tsx          # Layout raiz com metadados e fontes
│   ├── page.tsx            # Página principal (Server Component)
│   └── globals.css         # Estilos globais
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Barra de navegação
│   │   └── Footer.tsx      # Rodapé
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── GallerySection.tsx
│   │   ├── StatsSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   └── ContactSection.tsx
│   ├── SvgIcons.tsx        # Ícones SVG centralizados
│   ├── Lightbox.tsx        # Modal de imagens/vídeos
│   ├── WhatsappModal.tsx   # Modal de confirmação WhatsApp
│   ├── NotificationBar.tsx # Barra de notificação
│   ├── ScrollReveal.tsx    # Animação de fade-in ao scroll
│   └── ScrollToTop.tsx     # Botão voltar ao topo
├── hooks/                  # Custom React hooks
├── lib/                    # Utilitários e helpers
└── utils/                  # Funções utilitárias

public/
├── favicon.png
├── opengraph.jpg
└── index.html
```

## 🎨 Design & Animações

- **Paleta Terrosa**: Cores naturais que refletem a identidade da marca
- **Tipografia**: Cormorant Garamond (títulos) + Inter (corpo)
- **Animações**: Fade-in ao scroll, efeito brilho nos botões, transições suaves
- **Responsividade**: Mobile-first com breakpoints em 768px

## 🚀 Tecnologias

- **Next.js 15** com App Router
- **React 19** com Server Components
- **TypeScript** para tipagem forte
- **CSS Puro** com variáveis CSS para temas

## 📝 Componentes Principais

### Navbar
- Menu responsivo com hamburger no mobile
- Alternador de tema (claro/escuro)
- Navegação suave com âncoras

### Seções
- **Hero**: Chamada principal com CTA
- **Gallery**: Grid de serviços com lightbox
- **Stats**: Contadores animados ao scroll
- **Testimonials**: Depoimentos de clientes
- **Contact**: Formulário de contato com PIX e WhatsApp

### Modais & Overlays
- **Lightbox**: Ampliação de imagens/vídeos
- **WhatsApp Modal**: Confirmação antes de redirecionar
- **Notification Bar**: Barra de aviso com opção de fechar

## 🔧 Desenvolvimento

```bash
# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm dev

# Build para produção
pnpm build

# Iniciar servidor de produção
pnpm start
```

## 📦 Estrutura de Componentes

Todos os componentes seguem padrões de **Client Components** (`'use client'`) quando necessário interatividade, e **Server Components** para conteúdo estático.

## 🎯 Mantendo o Design Original

- ✅ Todas as classes CSS originais preservadas
- ✅ Animações e efeitos mantidos
- ✅ Paleta de cores intacta
- ✅ Responsividade garantida
- ✅ Estrutura semântica melhorada

## 📄 Licença

© 2025 afrotunde | Todos os direitos reservados.
