import React from 'react'

export default function Skeleton() {
  return (
    <article className="rounded-xl overflow-hidden border" style={{ background: 'var(--popover)', borderColor: 'var(--borderc)', boxShadow: '0 1px 2px rgba(15,23,42,0.06), 0 2px 8px rgba(15,23,42,0.08)' }} aria-hidden="true">
      <div className="skeleton-block" style={{ aspectRatio: '1 / 1' }} />
      <div className="grid gap-3 p-4" style={{ color: 'var(--textc)' }}>
        <div className="skeleton-line w-[90%]" />
        <div className="skeleton-line w-[70%]" />
        <div className="flex items-center justify-between">
          <div className="skeleton-pill w-[30%]" />
          <div className="skeleton-pill w-[20%]" />
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div className="skeleton-btn" />
          <div className="skeleton-btn" />
          <div className="skeleton-btn" />
        </div>
      </div>
    </article>
  )
}
