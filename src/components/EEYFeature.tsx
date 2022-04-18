import React from 'react'

interface IEEYFeature {
  imgUrl: string,
  text: string
}
export default function EEYFeature({ imgUrl, text }: IEEYFeature) {
  return (
    <div className='flex items-center'>
      <div className='justify-center items-center bg-[#edae50] bg-opacity-10 rounded-[12px] mr-5'>
        <img src={imgUrl} className='p-[15px]' alt='' />
      </div>
      <span className='mobile:text-[20px] miniipad:text-[24px] leading-[28px]'>{text}</span>
    </div>
  )
}