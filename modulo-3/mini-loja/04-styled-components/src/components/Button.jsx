import React from 'react'
import styled, { css } from 'styled-components'

const base = css`
  appearance: none; border: 1px solid transparent; border-radius: 10px; padding: 10px 12px; font-weight: 600; cursor: pointer;
  transition: transform 150ms, box-shadow 150ms, background 150ms, border-color 150ms, color 150ms, opacity 150ms; box-shadow: 0 1px 0 rgba(0,0,0,.02);
  &:focus-visible { outline: none; box-shadow: 0 0 0 2px color-mix(in srgb, ${({theme}) => theme.primary} 40%, transparent), 0 0 0 4px color-mix(in srgb, ${({theme}) => theme.primary} 25%, transparent); }
  &:disabled, &[aria-disabled="true"] { opacity: .6; cursor: not-allowed; }
`

const Solid = styled.button`
  ${base};
  background: ${({theme}) => theme.primary}; color: ${({theme}) => theme.primaryContrast};
  &:hover { filter: brightness(1.05); }
`
const Outline = styled.button`
  ${base};
  background: transparent; color: ${({theme}) => theme.text}; border-color: ${({theme}) => theme.border};
  &:hover { border-color: color-mix(in srgb, ${({theme}) => theme.primary} 30%, ${({theme}) => theme.border}); }
`
const Ghost = styled.button`
  ${base};
  background: transparent; color: ${({theme}) => theme.muted};
  &:hover { color: ${({theme}) => theme.text}; background: color-mix(in srgb, ${({theme}) => theme.text} 8%, transparent); }
`

export default function Button({ variant = 'solid', children, loading, disabled, ...props }) {
  const isDisabled = disabled || loading
  const Comp = variant === 'outline' ? Outline : variant === 'ghost' ? Ghost : Solid
  return (
    <Comp disabled={isDisabled} aria-disabled={isDisabled ? 'true' : 'false'} {...props}>
      {loading ? 'Carregando…' : children}
    </Comp>
  )
}
