import React from 'react'

interface IEEYChartLabel {
  imgUrl: string,
  text: string
}

export default function EEYChartLabel({ imgUrl, text }: IEEYChartLabel) {
  return (
    <div className='flex justify-center items-center'>
      <img src={imgUrl} className='mr-1' alt='' />
      <span className='mobile:text-[14px] miniipad:text-[18px] font-medium leading-[16px] align-center opacity-40'>{text}</span>
    </div>
  )
}