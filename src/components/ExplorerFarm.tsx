import React from 'react'
import BlackButton from './BlackButton'
import * as s from './ExplorerFarm.Components'

interface IExplorerFarm {
  order: number,
  iconUrl: string,
  title: string,
  description: string,
  btnLabel: string,
  target: string
}

export default function ExplorerFarm({ order, iconUrl, title, description, btnLabel, target }: IExplorerFarm) {
  return (
    <s.ExplorerContainer $order={order}>
      <div className='flex justify-center items-center bg-white w-[68px] h-[68px] rounded-full'>
        <img src={iconUrl} className='p-[15px]' alt='' />
      </div>

      <span className="mobile:text-[24px] mobile:leading-[60px] font-bold">{title}</span>
      
      <p className="mb-[30px]">{description}</p>
      
      <BlackButton link={target}>{btnLabel}</BlackButton>
    </s.ExplorerContainer>
  )
}