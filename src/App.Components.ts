import tw from 'tailwind-styled-components'

export const MainContainer = tw.div`
  flex flex-col mx-auto max-w-[1440px] 
  
  mobile:pt-4 
  
  md2:pt-[24px]
`
export const SectionWrapper = tw.div`
  mobile:px-4 
  tablet:px-8 
  md2:px-[80px] 
  desktop:px-[100px] 
`
export const HeaderImage = tw.div`
  absolute bg-cover bg-repeat-round
  
  z-[-1]

  mobile:bg-mob-header
  mobile:top-[460px]
  mobile:w-full 
  mobile:h-[264px] 

  md2:bg-header
  md2:top-[-74px] 
  md2:right-[-80px] 
  md2:w-[360px]
  md2:h-[630px]

  desktop:right-[-100px] 
  desktop:w-[400px] 
  desktop:h-[700px] 
`
export const FirstSection = tw.div`
  relative flex flex-col 
  
  mobile:items-center 
  mobile:text-center 
  mobile:gap-[22px] 
  mobile:pt-[45px] 
  mobile:mb-[450px] 

  md2:items-start 
  md2:text-left 
  md2:gap-3 
  md2:mb-0
`
export const CryptoTitle = tw.div`
  font-bold 
  
  mobile:text-[50px] 
  mobile:leading-[42px] 

  md2:pt-[10px]
  md2:text-[66px] 
  md2:leading-[54px] 
  
  miniipad:text-[100px] 
  miniipad:leading-[82px] 
  
  desktop:pt-[80px] 
`
export const StartEarningButton = tw.a`
  flex justify-between items-center cursor-pointer
  bg-yellow-gradient rounded-[10px] 
  text-[16px] 
  font-medium 
  leading-[19px] 
  w-[240px] 
  p-[22px]
`
export const DexBadgeContainer = tw.div`
  absolute 
  
  mobile:top-[320px] 
  mobile:right-[50%] 
  mobile:translate-x-[50%] 
  
  md2:top-[100px] 
  md2:right-[110px] 
  md2:translate-x-0
`
export const DexBadgeGroup = tw.div`
  relative bg-white shadow-harvest-badges 
  
  mobile:w-[273px] 
  mobile:h-[315px] 
  mobile:rounded-tl-[76px] 
  mobile:rounded-tr-[34px] 
  mobile:rounded-br-[76px] 
  mobile:rounded-bl-[34px] 
  
  md2:w-[321px] 
  md2:h-[371px] 
  md2:rounded-tl-[90px]
  md2:rounded-tr-[40px]
  md2:rounded-br-[90px]
  md2:rounded-bl-[40px]
`
export const HarvestIcon = tw.div`
  absolute flex flex-col justify-center items-center
  bg-yellow-gradient rounded-[48px]
  w-[104px] h-[104px]

  mobile:bottom-[120px] 
  mobile:right-[80px] 
  
  md2:bottom-[160px] 
  md2:right-[120px] 
`
export const HarvestMoneyIcon = tw.div`
  absolute bottom-[-35px] 
  bg-white rounded-full p-2 
  
  mobile:right-[80px] 
  
  md2:right-[120px]   
`
export const HarvestDexBadgeContainer = tw.div`
  relative bg-white shadow-harvest-badges 
  
  mobile:w-[273px] 
  mobile:h-[315px] 
  mobile:rounded-tl-[76px] 
  mobile:rounded-tr-[34px] 
  mobile:rounded-br-[76px] 
  mobile:rounded-bl-[34px]

  miniipad:w-[321px] 
  miniipad:h-[371px] 
  miniipad:rounded-tl-[90px] 
  miniipad:rounded-tr-[40px] 
  miniipad:rounded-br-[90px] 
  miniipad:rounded-bl-[40px]
`
export const SponsorshipsContainer = tw.div`
  flex justify-between items-center 
  border-b-[1px] border-[#E9E9E9]

  mobile:mt-0 
  mobile:pb-[25px] 
  
  md2:mt-[280px]
  md2:pb-[2vw]
  
  miniipad:mt-[12vw]
`
export const Sponsorship = tw.div`
  cursor-pointer
  flex justify-center items-center 
  
  mobile:w-[72px]
  mobile:h-[72px]
  mobile:rounded-[8px]
  mobile:bg-[#F6F6F6]

  md2:bg-transparent
  md2:w-auto
  md2:h-auto
`
export const EEYContainer = tw.div`
  flex justify-between

  mobile:flex-col-reverse
  mobile:gap-8
  mobile:mt-[30px]
  
  md1:flex-row
  md1:gap-0
  md1:mt-[10vh]
`
export const EEYChartContainer = tw.div`
  basis-[45%] w-full
  flex flex-col items-center 
  relative 
  bg-yellow-gradient rounded-[20px]
`
export const EEYChartContent = tw.div`
  absolute 
  flex flex-col justify-between 
  w-[90%] h-full pb-10 
  
  mobile:px-1
  
  miniipad:px-8
`
export const EEYTitle = tw.span`
  dark-gradient-color font-bold 
  
  mobile:text-[32px] 
  mobile:leading-[42px]
  
  miniipad:text-[50px]  
  miniipad:leading-[92px]
`
export const EEYDescription = tw.span`
  leading-[28px] text-[#888E8F] mt-3

  mobile:text-[20px] 
  
  miniipad:text-[24px] 
`
export const ThreeVerticalChartsContainer = tw.div`
  grid gird-rows-2 grid-cols-3 justify-items-center items-center place-content-center 
  text-center 
  mt-[30px] w-full
  
  mobile:leading-[18px]
`
export const VerticalChart = tw.div`
  flex flex-col-reverse items-center  
  bg-chart1 bg-cover bg-repeat-round 
  
  mobile:w-[70px] 
  
  miniipad:w-[80px] 
`
export const SmallVerticalChart = tw(VerticalChart)`
  mobile:h-[200px] 
  mobile:mt-[40px] 

  miniipad:h-[260px]  
  miniipad:mt-[60px]
`
export const TallVerticalChart = tw(VerticalChart)`
  mt-0

  mobile:h-[240px]
  
  miniipad:h-[320px]
`