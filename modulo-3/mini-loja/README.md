# Mini-Loja - 4 Implementações de CSS

Este projeto demonstra a implementação da mesma interface de e-commerce usando 4 abordagens diferentes de estilização CSS, desenvolvido como parte do Módulo 3 do curso Full Stack.

## Objetivo

Implementar uma tela de loja online responsiva em 4 versões distintas, explorando diferentes metodologias de CSS:

1. **CSS Global** - Estilização tradicional com um arquivo CSS único
2. **CSS Modules** - Escopamento local de estilos por componente
3. **Tailwind CSS** - Framework CSS utilitário
4. **styled-components** - CSS-in-JS com ThemeProvider

## Características

### Interface
- **Navbar fixa**: Logo, toggle de tema (claro/escuro) e badge do carrinho
- **Grid responsivo**: Layout adaptável com breakpoints exatos
- **Cards de produto**: Imagem 1:1, título com ellipsis, preço, rating e tags
- **Estados interativos**: Hover, focus, disabled e loading com skeleton

### Responsividade
- **≤480px**: 1 coluna
- **481–768px**: 2 colunas  
- **769–1024px**: 3 colunas
- **≥1025px**: 4 colunas

### Funcionalidades
- **Dark Mode**: Persistência no localStorage com toggle funcional
- **Acessibilidade**: Navegação por teclado, aria-*, contraste adequado
- **Animações**: Transições suaves de 150-250ms
- **Loading States**: Skeleton sem layout shift

## Estrutura do Projeto

```
mini-loja/
├── README.md
├── 01-css-global/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   ├── Button.jsx
│   │   │   └── Skeleton.jsx
│   │   ├── data/
│   │   │   └── products.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── styles.css
│   ├── package.json
│   └── README.md
├── 02-css-modules/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── styles/
│   │       ├── global.css
│   │       ├── app.module.css
│   │       ├── navbar.module.css
│   │       ├── product-card.module.css
│   │       ├── button.module.css
│   │       └── skeleton.module.css
│   ├── package.json
│   └── README.md
├── 03-tailwind/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── styles.css
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── package.json
│   └── README.md
└── 04-styled-components/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   └── theme.js
    ├── package.json
    └── README.md
```

## Como Executar

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Executando cada versão

#### 1. CSS Global
```bash
cd 01-css-global
npm install
npm run dev
```

#### 2. CSS Modules
```bash
cd 02-css-modules
npm install
npm run dev
```

#### 3. Tailwind CSS
```bash
cd 03-tailwind
npm install
npm run dev
```

#### 4. Styled Components
```bash
cd 04-styled-components
npm install
npm run dev
```

Acesse `http://localhost:5173` (ou porta indicada) para visualizar cada versão.

## Tecnologias Utilizadas

### Base
- **React 18.3.1** - Biblioteca para interfaces
- **Vite 5.4.5** - Build tool e dev server
- **JavaScript ES6+** - Linguagem de programação

### Por Versão
- **01-css-global**: CSS puro com custom properties
- **02-css-modules**: Vite CSS Modules
- **03-tailwind**: Tailwind CSS 3.4.12 + PostCSS + Autoprefixer
- **04-styled-components**: styled-components 6.1.13

## Design System

### Tokens de Design
- **Cores**: Sistema light/dark com variáveis CSS
- **Espaçamentos**: Escala consistente (4px, 8px, 12px, 16px, 20px, 24px)
- **Bordas**: Radius 12px padrão
- **Sombras**: Elevação em 3 níveis
- **Transições**: 150ms (fast) e 200ms (base)

### Componentes
- **Button**: 3 variantes (solid, outline, ghost)
- **ProductCard**: Layout flexível com estados interativos
- **Navbar**: Sticky com backdrop-filter
- **Skeleton**: Animação shimmer sem layout shift

## Acessibilidade

- **Navegação por teclado**: Tab, Enter, Space
- **Screen readers**: Aria-labels, roles semânticos
- **Contraste**: Mínimo 4.5:1 em todos os elementos
- **Focus visível**: Ring customizado por tema
- **Reduced motion**: Respeita preferências do usuário

## Responsividade

### Breakpoints
```css
/* Mobile */
@media (max-width: 480px) { ... }

/* Tablet Portrait */
@media (min-width: 481px) and (max-width: 768px) { ... }

/* Tablet Landscape */
@media (min-width: 769px) and (max-width: 1024px) { ... }

/* Desktop */
@media (min-width: 1025px) { ... }
```

## Diferenças entre Versões

| Aspecto | CSS Global | CSS Modules | Tailwind | Styled Components |
|---------|------------|-------------|----------|-------------------|
| **Escopo** | Global | Local | Utilitário | JS-in-CSS |
| **Manutenção** | Manual | Automática | Utilitário | Por props |
| **Bundle Size** | Pequeno | Médio | Tree-shaking | Runtime |
| **DevEx** | Tradicional | Organizado | Rápido | Type-safe |

## Performance

### Build Results
- **CSS Global**: ~5.7KB CSS, ~147KB JS
- **CSS Modules**: ~6.2KB CSS, ~149KB JS  
- **Tailwind**: ~11.8KB CSS, ~150KB JS
- **Styled Components**: ~181KB JS (CSS-in-JS)

---

Desenvolvido como projeto do **Módulo 3 - Curso Full Stack Jr** (+Prati & Codifica) para demonstrar domínio em diferentes metodologias de CSS e React.
