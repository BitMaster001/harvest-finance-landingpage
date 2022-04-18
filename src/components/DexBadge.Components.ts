import tw from 'tailwind-styled-components'

interface IDexBadge {
  className: string
}

export const DexBadge = tw.div<IDexBadge>`
  absolute flex items-center
  bg-white rounded-full shadow-dex-badge
  gap-[8px]
  w-fit
  pl-[8px] pr-[12px] py-[6px]
`
export const x = ""