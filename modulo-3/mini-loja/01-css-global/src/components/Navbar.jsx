import React from 'react'

export default function Navbar({ theme, onToggleTheme, cartCount = 0 }) {
  return (
    <header className="navbar" role="banner">
      <div className="navbar-inner">
        <a href="#" className="logo" aria-label="Página inicial">ShopX</a>
        <div className="spacer" aria-hidden="true" />
        <button
          className="btn ghost"
          onClick={onToggleTheme}
          aria-pressed={theme === 'dark'}
          aria-label={theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'}
        >
          {theme === 'dark' ? '🌙' : '☀️'}
        </button>
        <a href="#carrinho" className="cart" aria-label={`Carrinho com ${cartCount} itens`}>
          🛒
          <span className="badge" aria-hidden="true">{cartCount}</span>
        </a>
      </div>
    </header>
  )
}
