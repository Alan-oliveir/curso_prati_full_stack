import React from 'react'
import s from '../styles/navbar.module.css'

export default function Navbar({ theme, onToggleTheme, cartCount = 0 }) {
  return (
    <header className={s.navbar} role="banner">
      <div className={s.inner}>
        <a href="#" className={s.logo} aria-label="Página inicial">ShopX</a>
        <div className={s.spacer} aria-hidden="true" />
        <button
          className={s.themeBtn}
          onClick={onToggleTheme}
          aria-pressed={theme === 'dark'}
          aria-label={theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'}
        >
          {theme === 'dark' ? '🌙' : '☀️'}
        </button>
        <a href="#carrinho" className={s.cart} aria-label={`Carrinho com ${cartCount} itens`}>
          🛒
          <span className={s.badge} aria-hidden="true">{cartCount}</span>
        </a>
      </div>
    </header>
  )
}
