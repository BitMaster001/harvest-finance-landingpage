import tw from 'tailwind-styled-components'

interface IExplorerContainer {
  $order: number
}

export const ExplorerContainer = tw.div<IExplorerContainer>`
  flex flex-col justify-center
  bg-cover bg-repeat-round
  ${(p: IExplorerContainer) => p.$order === 0 ? `bg-farm` : `bg-farm-harvest`}

  mobile:w-[94%] 
  mobile:h-[400px]
  mobile:px-4 
  mobile:py-[70px] 

  md1:px-6
  md1:w-[48%]
  md1:h-[450px]
  
  miniipad:px-8 
  miniipad:py-[100px]
  miniipad:w-[500px] 
  miniipad:h-[500px]
`
export const x = null;