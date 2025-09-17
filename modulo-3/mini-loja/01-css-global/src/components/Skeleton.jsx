import React from 'react'

export default function Skeleton() {
  return (
    <article className="card" aria-hidden="true">
      <div className="media skeleton-block" />
      <div className="content">
        <div className="skeleton-line w-90" />
        <div className="skeleton-line w-70" />
        <div className="meta">
          <div className="skeleton-pill w-30" />
          <div className="skeleton-pill w-20" />
        </div>
        <div className="actions">
          <div className="skeleton-btn" />
          <div className="skeleton-btn ghost" />
          <div className="skeleton-btn ghost" />
        </div>
      </div>
    </article>
  )
}
