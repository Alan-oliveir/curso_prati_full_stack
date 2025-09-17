import React, { useState } from 'react'
import Button from './Button.jsx'

function Stars({ rating }) {
  const full = Math.round(rating)
  return (
    <span className="stars" aria-label={`Avaliação ${rating} de 5`}>
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
    <article className="card" tabIndex={0} aria-labelledby={`title-${product.id}`}>
      <div className="media">
        <img
          src={product.image}
          alt=""
          loading="lazy"
          width="600"
          height="600"
          className="media-img"
        />
        {product.tag && <span className={`tag ${product.tag === 'Promo' ? 'promo' : 'novo'}`}>{product.tag}</span>}
      </div>
      <div className="content">
        <h2 id={`title-${product.id}`} className="title" title={product.title}>
          {product.title}
        </h2>
        <div className="meta">
          <Stars rating={product.rating} />
          <span className="price" aria-label={`Preço R$ ${product.price.toFixed(2)}`}>
            R$ {product.price.toFixed(2)}
          </span>
        </div>
        <div className="actions">
          <Button
            variant="solid"
            onClick={handleClick}
            disabled={disabled}
            loading={adding}
            aria-label={`Adicionar ${product.title} ao carrinho`}
          >
            Adicionar
          </Button>
          <Button variant="outline">Favoritar</Button>
          <Button variant="ghost">Compartilhar</Button>
        </div>
      </div>
    </article>
  )
}
