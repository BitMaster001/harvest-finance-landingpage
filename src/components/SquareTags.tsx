import React from 'react'
import * as s from './SquareTags.Components'

interface SquareTagsProps {
  logo: string,
  title: string,
  href: string
}

export function PlatformTag({logo, title, href = ""}: SquareTagsProps) {
  return(
    <s.PlatformTag href={href} target="_black" rel="noreffer">
      <img src={logo} className='mobile:w-[56px] mobile:h-[56px] miniipad:w-[70px] miniipad:h-[70px] mb-[15px]' alt=''/>
      <span className='font-normal mobile:text-[14px] miniipad:text-[18px] text-[#888E8F] font-["Work Sans"]'>{title}</span>
    </s.PlatformTag>
  )
}

export function SocialTag({logo, title, href = ""}: SquareTagsProps) {
  return(
    <s.SocialTag href={href} target="_black" rel="noreffer">
      <img src={logo} className='w-[70px] h-[70px] mb-[15px]' alt=''/>
      <span className='font-normal text-[18px] text-[#888E8F] font-["Work Sans"]'>{title}</span>
    </s.SocialTag>
  )
}
