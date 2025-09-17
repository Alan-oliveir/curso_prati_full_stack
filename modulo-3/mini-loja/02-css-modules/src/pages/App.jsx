import React, { useEffect, useMemo, useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import ProductCard from '../components/ProductCard.jsx'
import Skeleton from '../components/Skeleton.jsx'
import productsData from '../data/products.js'
import s from '../styles/app.module.css'

function useTheme() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'dark' || saved === 'light') return saved
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    return prefersDark ? 'dark' : 'light'
  })
  useEffect(() => {
    const root = document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme])
  return [theme, setTheme]
}

export default function App() {
  const [theme, setTheme] = useTheme()
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
    <div className={s.app} data-theme={theme}>
      <Navbar
        theme={theme}
        onToggleTheme={() => setTheme(t => (t === 'dark' ? 'light' : 'dark'))}
        cartCount={2}
      />

      <main className={s.container} aria-busy={loading ? 'true' : 'false'}>
        <h1 className="sr-only">Lista de Produtos</h1>
        <section className={s.grid} aria-label="produtos">
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
    </div>
  )
}
