import React from 'react'
import s from '../styles/skeleton.module.css'

export default function Skeleton() {
  return (
    <article className={s.card} aria-hidden="true">
      <div className={s.media} />
      <div className={s.content}>
        <div className={`${s.line} ${s.w90}`} />
        <div className={`${s.line} ${s.w70}`} />
        <div className={s.meta}>
          <div className={`${s.pill} ${s.w30}`} />
          <div className={`${s.pill} ${s.w20}`} />
        </div>
        <div className={s.actions}>
          <div className={s.btn} />
          <div className={`${s.btn} ${s.ghost}`} />
          <div className={`${s.btn} ${s.ghost}`} />
        </div>
      </div>
    </article>
  )
}
