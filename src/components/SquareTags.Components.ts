import tw from 'tailwind-styled-components'

export const SquareTag = tw.a`
  flex flex-col justify-center items-center
  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 
  shadow-square-tag hover:shadow-square-tag-hover z-30
  rounded-[20px] border border-[#E9E9E9] cursor-pointer bg-white
  text-center
  
  mobile:p-[8px]
  
  miniipad:p-[20px]
`;
export const PlatformTag = tw(SquareTag)`
  mobile:w-[100px]

  miniipad:w-[160px] 
`
export const SocialTag = tw(SquareTag)`
  mobile:w-[158px]

  miniipad:w-[220px] 
`