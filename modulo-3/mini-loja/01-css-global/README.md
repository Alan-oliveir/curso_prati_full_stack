# 01 — CSS Global

Implementação da tela usando CSS global (um único arquivo `styles.css`) com tokens, dark mode e responsividade.

## Como rodar

- Requisitos: Node 18+
- Instalar deps e iniciar:

```powershell
npm install
npm run dev
```

Abra o endereço mostrado (ex.: http://localhost:5173).

## O que foi implementado

- Navbar fixa com logo, toggle de tema (persistente via localStorage) e badge de carrinho.
- Grid responsivo: ≤480px: 1 col · 481–768px: 2 cols · 769–1024px: 3 cols · ≥1025px: 4 cols.
- Card com imagem 1:1 (lazy), título com 2 linhas e ellipsis (line-clamp), preço, rating (★), tag (Novo/Promo) e botões (solid/outline/ghost).
- Estados: hover, focus visível, disabled, skeleton (com reserva de espaço e sem layout shift) e loading simulado.
- Dark mode com ajuste de cores/sombras/bordas.
- Acessibilidade: navegação por teclado, aria-* em elementos relevantes, contraste adequado.
- Transições 150–200ms usando transform/opacity.

## Estrutura

- `src/App.jsx` — layout principal e simulação de carregamento.
- `src/components/*` — Navbar, ProductCard, Button, Skeleton.
- `src/data/products.js` — 6 produtos mock.
- `src/styles.css` — tokens (cores, espaçamentos, raio, sombras), temas e componentes.

## Notas

- Tokens: `--bg`, `--text`, `--primary`, `--border`, `--radius`, sombras e espaçamentos.
- Focus ring visível via `:focus-visible`.
- Breakpoints seguem exatamente o pedido.
