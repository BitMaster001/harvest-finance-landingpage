import tw from 'tailwind-styled-components'

interface IExplorerContainer {
  $order: number
}

export const ExplorerContainer = tw.div<IExplorerContainer>`
  flex flex-col justify-center
  bg-cover bg-repeat-round
  ${(p: IExplorerContainer) => p.$order === 0 ? `bg-farm` : `bg-farm-harvest`}

  mobile:w-full 
  mobile:max-w-[380px] 
  mobile:px-4 
  mobile:py-[70px] 
  
  miniipad:px-8 
  miniipad:py-[100px]
  miniipad:max-w-[500px] 
`
export const x = null;