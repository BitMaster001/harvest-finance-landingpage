import React from 'react'

interface CoinTagProps {
  url: string,
  title: string,
}

function CoinTag({url, title} : CoinTagProps) {
  return(
    <div className='dark-gradient-color flex flex-col p-[8px]'>
      <img src={url} className='w-[26px] h-[26px]' alt=''/>
      <span className='dark-shadow bg-white rounded-[27px] font-semibold text-[13px] text-[#17263B]'>{title}</span>
    </div>
  )
}

export default CoinTag