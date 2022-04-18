import React from 'react'
import * as s from './SquareTags.Components'

interface SquareTagsProps {
  logo: string,
  title: string
}

export function PlatformTag({logo, title}: SquareTagsProps) {
  return(
    <s.PlatformTag>
      <img src={logo} className='mobile:w-[56px] mobile:h-[56px] miniipad:w-[70px] miniipad:h-[70px] mb-[15px]' alt=''/>
      <span className='font-normal mobile:text-[14px] miniipad:text-[18px] text-[#888E8F] font-["Work Sans"]'>{title}</span>
    </s.PlatformTag>
  )
}

export function SocialTag({logo, title}: SquareTagsProps) {
  return(
    <s.SocialTag>
      <img src={logo} className='w-[70px] h-[70px] mb-[15px]' alt=''/>
      <span className='font-normal text-[18px] text-[#888E8F] font-["Work Sans"]'>{title}</span>
    </s.SocialTag>
  )
}
