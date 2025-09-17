import React, { useState } from 'react'
import Button from './Button.jsx'
import s from '../styles/product-card.module.css'

function Stars({ rating }) {
  const full = Math.round(rating)
  return (
    <span className={s.stars} aria-label={`Avaliação ${rating} de 5`}>
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
    <article className={s.card} tabIndex={0} aria-labelledby={`title-${product.id}`}>
      <div className={s.media}>
        <img
          src={product.image}
          alt=""
          loading="lazy"
          width="600"
          height="600"
          className={s.mediaImg}
        />
        {product.tag && <span className={`${s.tag} ${product.tag === 'Promo' ? s.promo : s.novo}`}>{product.tag}</span>}
      </div>
      <div className={s.content}>
        <h2 id={`title-${product.id}`} className={s.title} title={product.title}>
          {product.title}
        </h2>
        <div className={s.meta}>
          <Stars rating={product.rating} />
          <span className={s.price} aria-label={`Preço R$ ${product.price.toFixed(2)}`}>
            R$ {product.price.toFixed(2)}
          </span>
        </div>
        <div className={s.actions}>
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
