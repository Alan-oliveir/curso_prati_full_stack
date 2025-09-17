import React from 'react'

export default function Navbar({ theme, onToggleTheme, cartCount = 0 }) {
  return (
    <header className="sticky top-0 z-10 backdrop-saturate-150 backdrop-blur-md border-b" style={{ background: 'color-mix(in srgb, var(--bg) 85%, transparent)', borderColor: 'var(--borderc)' }} role="banner">
      <div className="flex items-center gap-3 px-4 py-3 max-w-[1200px] mx-auto">
        <a href="#" className="font-bold tracking-wide" aria-label="Página inicial" style={{ color: 'var(--textc)' }}>ShopX</a>
        <div className="flex-1" aria-hidden="true" />
        <button
          className="inline-flex items-center justify-center rounded-[10px] px-2.5 py-2 text-sm border border-transparent hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2"
          onClick={onToggleTheme}
          aria-pressed={theme === 'dark'}
          aria-label={theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'}
          style={{ color: 'var(--muted)' }}
        >
          {theme === 'dark' ? '🌙' : '☀️'}
        </button>
        <a href="#carrinho" className="relative inline-flex items-center gap-1 px-2.5 py-2 rounded-full" aria-label={`Carrinho com ${cartCount} itens`} style={{ color: 'var(--textc)' }}>
          🛒
          <span className="absolute -top-0.5 -right-0.5 text-xs leading-none px-1.5 py-0.5 rounded-full shadow" style={{ background: 'var(--danger)', color: '#fff' }}>{cartCount}</span>
        </a>
      </div>
    </header>
  )
}
