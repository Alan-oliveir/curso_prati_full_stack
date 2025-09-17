import React, { useState } from 'react'
import styled from 'styled-components'
import Button from './Button.jsx'

const Card = styled.article`
  background: ${({theme}) => theme.popover}; border: 1px solid ${({theme}) => theme.border}; border-radius: ${({theme}) => theme.radius};
  box-shadow: ${({theme}) => theme.shadow}; overflow: hidden; display: flex; flex-direction: column;
  transition: transform 200ms, box-shadow 200ms, border-color 150ms; outline: none;
  &:hover { transform: translateY(-2px); box-shadow: ${({theme}) => theme.shadowHover}; }
  &:focus-visible { outline: none; box-shadow: ${({theme}) => theme.shadowHover}; border-color: ${({theme}) => theme.primary}; }
`
const Media = styled.div`
  position: relative; aspect-ratio: 1/1; background: linear-gradient(180deg, #e5e7eb, #d1d5db);
`
const Img = styled.img`
  width: 100%; height: 100%; object-fit: cover; display: block; filter: saturate(1.02);
`
const Tag = styled.span`
  position: absolute; top: 12px; left: 12px; font-size: 12px; padding: 6px 10px; border-radius: 999px; font-weight: 600; letter-spacing: .2px;
  background: ${({promo, theme}) => promo ? '#fde047' : theme.accent}; color: ${({promo}) => promo ? '#4d3a00' : '#051b0c'};
  border: 1px solid color-mix(in srgb, #000 10%, transparent);
`
const Content = styled.div` padding: 16px; display: grid; gap: 12px; `
const Title = styled.h2`
  font-size: 16px; line-height: 1.4; max-height: calc(1.4em * 2); overflow: hidden; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; line-clamp: 2;
`
const Meta = styled.div` display: flex; align-items: center; justify-content: space-between; gap: 12px; color: ${({theme}) => theme.muted}; `
const Price = styled.span` color: ${({theme}) => theme.text}; font-weight: 700; `
const Stars = styled.span` color: #f59e0b; `
const Actions = styled.div` display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; `

export default function ProductCard({ product, onAdd, disabled }) {
  const [adding, setAdding] = useState(false)

  function handleClick() {
    setAdding(true)
    onAdd?.()
    setTimeout(() => setAdding(false), 800)
  }

  return (
    <Card tabIndex={0} aria-labelledby={`title-${product.id}`}>
      <Media>
        <Img src={product.image} alt="" loading="lazy" width="600" height="600" />
        {product.tag && <Tag promo={product.tag === 'Promo'}>{product.tag}</Tag>}
      </Media>
      <Content>
        <Title id={`title-${product.id}`} title={product.title}>{product.title}</Title>
        <Meta>
          <Stars aria-label={`Avaliação ${product.rating} de 5`}>
            {'★★★★★'.slice(0, Math.round(product.rating))}{'☆☆☆☆☆'.slice(0, 5 - Math.round(product.rating))}
          </Stars>
          <Price aria-label={`Preço R$ ${product.price.toFixed(2)}`}>R$ {product.price.toFixed(2)}</Price>
        </Meta>
        <Actions>
          <Button variant="solid" onClick={handleClick} disabled={disabled} loading={adding} aria-label={`Adicionar ${product.title} ao carrinho`}>Adicionar</Button>
          <Button variant="outline">Favoritar</Button>
          <Button variant="ghost">Compartilhar</Button>
        </Actions>
      </Content>
    </Card>
  )
}
