import React from 'react'
import logo from '../assets/images/logo.png'
import header from '../assets/images/header.png'

function Header() {

  const links = [
    {
      title: 'Tokenomics',
      url: 'https://harvest-finance.gitbook.io/harvest-finance/general-info/what-do-we-do/profit-share-pool-and-farm-tokenomics'
    },
    {
      title: 'Statistics',
      url: 'https://farmdashboard.xyz/'
    },
    {
      title: 'Blog', 
      url: 'https://medium.com/harvest-finance'
    },
  ]
  return (
    <div className='flex relative'>
      <div className='flex justify-between mx-[6vw] mt-5 w-screen'>
        <div className='flex jusity-between'>
          <div className='flex justify-center items-center cursor-pointer'>
            <img src={logo} className='h-[48px] w-[48px] cursor-pointer mx-2' alt=''/>
            <span className='font-semibold text-[24px] font-["Work Sans"]'>Harvest</span>
          </div>
          <div className='flex justify-center items-center font-medium font-[16px] gap-3 font-semibold ml-[5vw]'>
            {
              links.map((link, index) => ( 
                <a key={link.title} className={`px-2 ${index === 0 ? 'border-l-[1px] border-[#C4C9CA] pl-[3vw]' : ''}`} href={link.url} target='_blank' rel='noreferrer'>{link.title}</a>
              ))
            }
          </div>
        </div>
        <button className='dark-gradient rounded-[10px] text-white text-[16px] leading-3 font-medium w-[160px] h-[50px] px-[24px] py-[15px]' type='button'>
          Dashboard
        </button>
      </div>
      <img src={header} className='absolute w-[400px] h-[700px] right-0 cursor-pointer z-[-1]' alt=''/>
    </div>
  )
}

export default Header