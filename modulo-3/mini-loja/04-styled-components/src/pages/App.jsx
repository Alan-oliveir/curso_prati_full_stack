import React, { useEffect, useMemo, useState } from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { light, dark } from '../theme.js'
import Navbar from '../components/Navbar.jsx'
import ProductCard from '../components/ProductCard.jsx'
import Skeleton from '../components/Skeleton.jsx'
import productsData from '../data/products.js'

const Global = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; }
  html, body, #root { height: 100%; }
  body { margin: 0; font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Arial; background: ${({theme}) => theme.bg}; color: ${({theme}) => theme.text}; }
  .sr-only { position: absolute; width:1px; height:1px; padding:0; margin:-1px; overflow:hidden; clip: rect(0,0,0,0); white-space:nowrap; border:0; }
`

function useTheme() {
  const [mode, setMode] = useState(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'dark' || saved === 'light') return saved
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })
  useEffect(() => { localStorage.setItem('theme', mode) }, [mode])
  return [mode, setMode]
}

export default function App() {
  const [mode, setMode] = useTheme()
  const theme = mode === 'dark' ? dark : light
  const [loading, setLoading] = useState(true)
  const [disabledIds, setDisabledIds] = useState(new Set())

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200)
    return () => clearTimeout(timer)
  }, [])

  const products = useMemo(() => productsData.slice(0, 6), [])

  function handleAdd(id) {
    setDisabledIds(prev => new Set(prev).add(id))
    setTimeout(() => {
      setDisabledIds(prev => {
        const next = new Set(prev)
        next.delete(id)
        return next
      })
    }, 800)
  }

  return (
    <ThemeProvider theme={theme}>
      <Global />
      <Navbar themeMode={mode} onToggle={() => setMode(m => (m === 'dark' ? 'light' : 'dark'))} cartCount={2} />
      <main style={{ maxWidth: 1200, margin: '80px auto 24px', padding: '0 16px' }} aria-busy={loading ? 'true' : 'false'}>
        <h1 className="sr-only">Lista de Produtos</h1>
        <section
          aria-label="produtos"
          style={{ display: 'grid', gap: 20,
            gridTemplateColumns: 'repeat(4, 1fr)'
          }}
        >
          {loading
            ? Array.from({ length: 6 }).map((_, i) => <Skeleton key={i} />)
            : products.map(p => (
                <ProductCard
                  key={p.id}
                  product={p}
                  onAdd={() => handleAdd(p.id)}
                  disabled={disabledIds.has(p.id)}
                />
              ))}
        </section>
      </main>
      <style>{`
        @media (max-width: 480px) { section[aria-label="produtos"] { grid-template-columns: 1fr; } }
        @media (min-width: 481px) and (max-width: 768px) { section[aria-label="produtos"] { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 769px) and (max-width: 1024px) { section[aria-label="produtos"] { grid-template-columns: repeat(3, 1fr); } }
        @media (min-width: 1025px) { section[aria-label="produtos"] { grid-template-columns: repeat(4, 1fr); } }
      `}</style>
    </ThemeProvider>
  )
}
