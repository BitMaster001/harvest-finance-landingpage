import React, { useState, useEffect } from 'react'
import logo from '../assets/images/logo.png'
import ToggleButton from './ToggleButton'
import BlackButton from './BlackButton'
import links from '../data/links'
import * as s from './Header.Components'

function Header() {
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    if (isOpened) {
      const x = window.scrollX;
      const y = window.scrollY;
      window.onscroll=function(){window.scrollTo(x, y);};
    }
    else {
      window.onscroll=function(){};
    }
    
  }, [isOpened])

  return (
    <div className='flex justify-between items-center relative z-30'>
      <div className="flex items-center gap-6">

        <div className='flex justify-center items-center cursor-pointer'>
          <img src={logo} className='h-[48px] w-[48px] cursor-pointer mx-2' alt='' />
          <span className='hidden font-semibold text-[24px] font-["Work Sans"] md3:block'>Harvest</span>
        </div>

        <div className="hidden w-[0.4px] h-[30px] bg-[#C4C9CA] md3:block" />

        {
          links.map((link) => (
            <a key={link.title} href={link.url} target='_blank' rel='noreferrer' className="hidden md3:block">{link.title}</a>
          ))
        }

      </div>

      <div className="flex gap-3">
        <BlackButton link="">Dashboard</BlackButton>

        <ToggleButton isOpened={isOpened} setIsOpened={setIsOpened} />

        <s.NavbarContainer $isOpened={isOpened}>
          {
            links.map((link) => (
              <a key={link.title} href={link.url} target='_blank' rel='noreferrer'>{link.title}</a>
            ))
          }
        </s.NavbarContainer>

      </div>
    </div>
  )
}

export default Header