import React from 'react'

export default function Button({ variant = 'solid', children, className = '', loading, disabled, ...props }) {
  const isDisabled = disabled || loading
  const base = 'inline-flex items-center justify-center font-semibold rounded-[10px] px-3 py-2 border transition shadow-sm focus-visible:outline-none focus-visible:ring-2'
  const variants = {
    solid: `${base} text-[color:var(--primary-contrast)]` ,
    outline: `${base} bg-transparent text-[color:var(--textc)] border-[color:var(--borderc)]`,
    ghost: `${base} bg-transparent text-[color:var(--muted)] border-transparent`,
  }
  const hover = {
    solid: 'hover:brightness-105',
    outline: 'hover:border-[color:color-mix(in_srgb,_var(--primary)_30%,_var(--borderc))]',
    ghost: 'hover:text-[color:var(--textc)]',
  }

  const style = variant === 'solid' ? { background: 'var(--primary)' } : undefined

  return (
    <button
      className={`${variants[variant]} ${hover[variant]} ${className}`}
      disabled={isDisabled}
      aria-disabled={isDisabled ? 'true' : 'false'}
      style={style}
      {...props}
    >
      {loading ? 'Carregando…' : children}
    </button>
  )
}
