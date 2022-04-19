import tw from "tailwind-styled-components";

type INavbarContainer = { 
  $isOpened: boolean 
}

export const NavbarContainer = tw.div<INavbarContainer>`
  ${(p: INavbarContainer) => (p.$isOpened ? "max-h-[2000px] mobile:py-4 tablet:py-8" : "max-h-0 py-0")}
  fixed 
  bg-white 
  flex flex-col justify-center 
  overflow-hidden 
  z-0 
  transition-[max-height] duration-500
  text-black
  
  mobile:px-4
  mobile:w-[100%]
  mobile:inset-0
  mobile:top-[66px]
  mobile:shadow-none
  mobile:text-[30px]
  mobile:gap-[40px] 

  tablet:px-8
  tablet:h-[300px]
  tablet:w-[400px]
  tablet:shadow-lg
  tablet:top-[96px]   
  tablet:right-0
  tablet:left-auto
  tablet:gap-[50px] 
  
  md2:hidden
`
export const ToggleButton = tw.div`
  border border-[#E9E9E9]
  shadow-toggle-button
  
  md2:hidden
  
  rounded-lg 
`