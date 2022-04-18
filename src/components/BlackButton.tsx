import React, { ReactNode } from 'react'
import * as s from './BlackButton.Components'

interface IBlackButton {
  link: string,
  children: ReactNode
}

export default function BlackButton({ link, children }: IBlackButton) {
  return (
    <s.BlackButton href={link} target="_blank" rel="noreferrer">{children}</s.BlackButton>
  )
}