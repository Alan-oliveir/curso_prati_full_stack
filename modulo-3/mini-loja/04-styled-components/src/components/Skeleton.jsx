import React from 'react'
import styled, { keyframes } from 'styled-components'

const shimmer = keyframes`
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
`
const Card = styled.article`
  background: ${({theme}) => theme.popover}; border: 1px solid ${({theme}) => theme.border}; border-radius: ${({theme}) => theme.radius}; box-shadow: ${({theme}) => theme.shadow}; overflow: hidden; display: flex; flex-direction: column;
`
const Media = styled.div`
  aspect-ratio: 1/1; background: linear-gradient(90deg, rgba(0,0,0,.06), rgba(0,0,0,.12), rgba(0,0,0,.06)); background-size: 200% 100%; animation: ${shimmer} 1.6s infinite;
`
const Content = styled.div` padding: 16px; display: grid; gap: 12px; color: ${({theme}) => theme.text}; `
const Line = styled.div` height: 16px; border-radius: 8px; background: currentColor; opacity: .16; `
const Pill = styled.div` height: 20px; border-radius: 999px; background: currentColor; opacity: .16; `
const Btn = styled.div` height: 40px; border-radius: 10px; background: currentColor; opacity: .12; `

export default function Skeleton() {
  return (
    <Card aria-hidden="true">
      <Media />
      <Content>
        <Line style={{ width: '90%' }} />
        <Line style={{ width: '70%' }} />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Pill style={{ width: '30%' }} />
          <Pill style={{ width: '20%' }} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
          <Btn />
          <Btn />
          <Btn />
        </div>
      </Content>
    </Card>
  )
}
