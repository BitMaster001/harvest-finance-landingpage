import tw from "tailwind-styled-components";

type INavbarContainer = { 
  $isOpened: boolean 
}

export const NavbarContainer = tw.div<INavbarContainer>`
  ${(p: INavbarContainer) => (p.$isOpened ? "max-h-[2000px] mobile:p-4 tablet:p-8" : "max-h-0")}
  fixed 
  bg-white 
  flex flex-col justify-center 
  overflow-hidden 
  z-0 
  transition-300 
  text-black
  
  mobile:w-[100%]
  mobile:inset-0
  mobile:top-[66px]
  mobile:shadow-none
  mobile:text-[30px]
  mobile:gap-[100px] 

  tablet:h-[300px]
  tablet:w-[400px]
  tablet:shadow-lg
  tablet:top-[96px]   
  tablet:right-0
  tablet:left-auto
  tablet:gap-[50px] 
  
  md2:hidden
`

export const x = null;