import React from 'react'

export default function Button({ variant = 'solid', children, className = '', loading, disabled, ...props }) {
  const isDisabled = disabled || loading
  return (
    <button
      className={`btn ${variant} ${className}`}
      disabled={isDisabled}
      aria-disabled={isDisabled ? 'true' : 'false'}
      {...props}
    >
      {loading ? 'Carregando…' : children}
    </button>
  )
}
