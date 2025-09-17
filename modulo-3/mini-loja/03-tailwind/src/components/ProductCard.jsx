import React, { useState } from 'react'
import Button from './Button.jsx'

function Stars({ rating }) {
  const full = Math.round(rating)
  return (
    <span className="text-amber-500" aria-label={`Avaliação ${rating} de 5`}>
      {'★★★★★'.slice(0, full)}{'☆☆☆☆☆'.slice(0, 5 - full)}
    </span>
  )
}

export default function ProductCard({ product, onAdd, disabled }) {
  const [adding, setAdding] = useState(false)

  function handleClick() {
    setAdding(true)
    onAdd?.()
    setTimeout(() => setAdding(false), 800)
  }

  return (
    <article className="transition duration-200 outline-none rounded-xl overflow-hidden border" style={{ background: 'var(--popover)', borderColor: 'var(--borderc)', boxShadow: '0 1px 2px rgba(15,23,42,0.06), 0 2px 8px rgba(15,23,42,0.08)' }} tabIndex={0} aria-labelledby={`title-${product.id}`}>
      <div className="relative" style={{ aspectRatio: '1 / 1', background: 'linear-gradient(180deg, #e5e7eb, #d1d5db)' }}>
        <img src={product.image} alt="" loading="lazy" width="600" height="600" className="w-full h-full object-cover" />
        {product.tag && (
          <span className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: product.tag === 'Promo' ? '#fde047' : 'var(--accent)', color: product.tag === 'Promo' ? '#4d3a00' : '#051b0c', border: '1px solid color-mix(in srgb, #000 10%, transparent)' }}>
            {product.tag}
          </span>
        )}
      </div>
      <div className="grid gap-3 p-4">
        <h2 id={`title-${product.id}`} className="text-[16px] leading-[1.4] line-clamp-2" title={product.title}>
          {product.title}
        </h2>
        <div className="flex items-center justify-between gap-3 text-[color:var(--muted)]">
          <Stars rating={product.rating} />
          <span className="font-bold" style={{ color: 'var(--textc)' }}>R$ {product.price.toFixed(2)}</span>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <Button variant="solid" onClick={handleClick} disabled={disabled} loading={adding} aria-label={`Adicionar ${product.title} ao carrinho`}>
            Adicionar
          </Button>
          <Button variant="outline">Favoritar</Button>
          <Button variant="ghost">Compartilhar</Button>
        </div>
      </div>
    </article>
  )
}
