import tw from "tailwind-styled-components";

interface IHamburgerLine { 
  $id: number, 
  $isOpen: boolean 
}

export const ToggleButton = tw.div`
  grid grid-flows-col place-content-center cursor-pointer
  border border-[#E9E9E9]
  shadow-toggle-button
  
  md2:hidden
  
  w-[50px] h-[50px]

  rounded-lg 
`

export const HamburgerLine = tw.div<IHamburgerLine>`
  w-[30px] h-[3px] rounded-[3.38px] bg-black block mx-auto my-[4px] transition-300

  ${(p: IHamburgerLine) => {
    if (p.$isOpen && p.$id === 1) return `translate-y-[11px]`;
    if (p.$isOpen && p.$id === 3) return `-translate-y-[11px]`;
    return ``
  }}
`