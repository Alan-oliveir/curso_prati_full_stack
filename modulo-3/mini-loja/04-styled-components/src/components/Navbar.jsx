import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
  position: sticky; top: 0; z-index: 10;
  backdrop-filter: saturate(180%) blur(12px);
  background: ${({theme}) => `color-mix(in srgb, ${theme.bg} 85%, transparent)`};
  border-bottom: 1px solid ${({theme}) => theme.border};
`
const Inner = styled.div`
  display: flex; align-items: center; gap: 12px; padding: 12px 16px; max-width: 1200px; margin: 0 auto;
`
const Logo = styled.a`
  font-weight: 700; letter-spacing: .3px; color: ${({theme}) => theme.text}; text-decoration: none;
`
const Spacer = styled.div` flex: 1; `
const ThemeBtn = styled.button`
  appearance: none; border: 1px solid transparent; background: transparent; color: ${({theme}) => theme.muted}; border-radius: 10px; padding: 8px 10px; cursor: pointer;
  &:hover { color: ${({theme}) => theme.text}; background: color-mix(in srgb, ${({theme}) => theme.text} 8%, transparent); }
`
const Cart = styled.a`
  position: relative; display: inline-flex; align-items: center; gap: 6px; padding: 8px 10px; border-radius: 999px; text-decoration: none; color: ${({theme}) => theme.text};
`
const Badge = styled.span`
  position: absolute; top: 2px; right: 2px; background: ${({theme}) => theme.danger}; color: #fff; border-radius: 999px; padding: 2px 6px; font-size: 12px; line-height: 1; box-shadow: ${({theme}) => theme.shadow};
`

export default function Navbar({ themeMode, onToggle, cartCount = 0 }) {
  return (
    <Header role="banner">
      <Inner>
        <Logo href="#" aria-label="Página inicial">ShopX</Logo>
        <Spacer aria-hidden="true" />
        <ThemeBtn onClick={onToggle} aria-pressed={themeMode === 'dark'} aria-label={themeMode === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'}>
          {themeMode === 'dark' ? '🌙' : '☀️'}
        </ThemeBtn>
        <Cart href="#carrinho" aria-label={`Carrinho com ${cartCount} itens`}>
          🛒
          <Badge aria-hidden="true">{cartCount}</Badge>
        </Cart>
      </Inner>
    </Header>
  )
}
