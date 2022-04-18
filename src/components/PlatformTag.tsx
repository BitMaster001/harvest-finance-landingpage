import React from 'react'

interface PlatformTagProps {
  logo: string,
  title: string
}

function PlatformTag({logo, title}: PlatformTagProps) {
  return(
    <div className='flex flex-col transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 justify-center items-center w-[160px] h-[160x] hover-shadow rounded-[20px] border-[1px] border-[#E9E9E9] p-[20px] cursor-pointer'>
      <img src={logo} className='w-[70px] h-[70px] mb-[15px]' alt=''/>
      <span className='font-normal text-[18px] text-[#888E8F] font-["Work Sans"]'>{title}</span>
    </div>
  )
}

export default PlatformTag