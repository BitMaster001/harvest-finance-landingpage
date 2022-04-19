import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import ReactPlayer from 'react-player/lazy'
import {
  useWindowWidth,
} from '@react-hook/window-size'
// import ReactPlayer from 'react-player/lazy'

import Header from './components/Header'
import { PlatformTag, SocialTag } from './components/SquareTags'
import DexBadge from './components/DexBadge'
import links from './data/links'
import * as s from './App.Components'

// Harvest DexBadge Icons and Vectors
import harvestIcon from './assets/images/harvest.png'
import harvestMoneyIcon from './assets/images/harvest-money.png'
import dexCurveIcon from './assets/images/dexbadges/curve.png'
import dexSushiIcon from './assets/images/dexbadges/sushiswap.png'
import dexStablecoinsIcon from './assets/images/dexbadges/stablecoins.png'
import dexBalancerIcon from './assets/images/dexbadges/balancer.png'
import dexCompoundIcon from './assets/images/dexbadges/compound.png'
import dexEthereumIcon from './assets/images/dexbadges/ethereum.png'
import dexKyberIcon from './assets/images/dexbadges/kyber.png'
import dexUniswapIcon from './assets/images/dexbadges/uniswap.png'
import uniswapIcon from './assets/images/uniswap.png'
import uniswapVector from './assets/images/uniswap-vector.png'
import curveVector from './assets/images/curve-vector.png'
import stablecoinsVector from './assets/images/stablecoins-vector.png'
import sushiswapVector from './assets/images/sushiswap-vector.png'
import ethereumVector from './assets/images/ethereum-vector.png'
import balancerVector from './assets/images/balancer-vector.png'
import kyberVector from './assets/images/kyber-vector.png'
import compoundVector from './assets/images/compound-vector.png'
import downtripleVector from './assets/images/down-triple-vector.png'

// Earn Extra Yield
import apyVector from './assets/images/apy-vector.png'
import autoCompoundIcon from './assets/images/auto-compound.png'
import autoHarvestIcon from './assets/images/auto-harvest.png'
import farmRewardIcon from './assets/images/farm-rewards.png'
import daoRewardIcon from './assets/images/dao-reward.png'
// import playBtn from './assets/images/play-btn.png'
import yieldHarvestIcon1 from './assets/images/chart/black.png'
import yieldHarvestIcon2 from './assets/images/chart/black-white.png'
import videoLight from './assets/images/video.png'

// Harvest Ecosystem
import curveIcon from './assets/images/curve.png'
import sushiIcon from './assets/images/sushi.png'
import polygonIcon from './assets/images/polygon.png'
import compoundIcon from './assets/images/compound.png'
import bancorIcon from './assets/images/bancor_.png'
import jarvisIcon from './assets/images/jarvis.png'

// Audited by
import least from './assets/images/least.png'
import haechi from './assets/images/haechi.png'
import peckshield from './assets/images/peckshield.png'
import certik from './assets/images/certik.png'
import farmTractor from './assets/images/farm-tractor.png'
import farmBank from './assets/images/farm-bank.png'

// Social Icons
import twitter from './assets/images/socialicons/twitter.png'
import discord from './assets/images/socialicons/discord.png'
import medium from './assets/images/socialicons/medium.png'
import kakaotalk from './assets/images/socialicons/kakaotalk.png'
import EEYChartLabel from './components/EEYChartLabel';
import EEYFeature from './components/EEYFeature';
import ExplorerFarm from './components/ExplorerFarm';


function App() {
  const screenWidth = useWindowWidth()
  const advantageList = [
    {
      logo: autoCompoundIcon,
      title: 'Auto-compounding'
    },
    {
      logo: autoHarvestIcon,
      title: 'Auto-harvested rewards'
    },
    {
      logo: farmRewardIcon,
      title: 'FARM Rewards'
    },
    {
      logo: daoRewardIcon,
      title: 'Unique DAO token rewards'
    },
  ]
  const platformList = [
    {
      logo: uniswapIcon,
      title: 'Uniswap',
    },
    {
      logo: polygonIcon,
      title: 'Polygon',
    },
    {
      logo: compoundIcon,
      title: 'Compound',
    },
    {
      logo: "",
      title: ""
    },
    {
      logo: bancorIcon,
      title: 'Bancor',
    },
    {
      logo: bancorIcon,
      title: 'Bancor',
    },
    {
      logo: bancorIcon,
      title: 'Bancor',
    },
    {
      logo: sushiIcon,
      title: 'Sushiswap',
    },
    {
      logo: "",
      title: ""
    },
    {
      logo: curveIcon,
      title: 'Curve',
    },
    {
      logo: jarvisIcon,
      title: 'Jarvis Network',
    },
    {
      logo: bancorIcon,
      title: 'Bancor',
    },
  ]

  return (
    <s.MainContainer>
      <s.SectionWrapper>
        <Header />
      </s.SectionWrapper>

      {/* First section of landing page */}
      <div className="mobile:px-0 md2:px-[80px] desktop:px-[100px]">
        <s.FirstSection>
          <s.CryptoTitle>
            EARN YIELD <br />
          ON YOUR <br />
          CRYPTO
        </s.CryptoTitle>
          <span className='mobile:text-[18px] md3:text-[24px] text-[#888E8F] font-normal'>
            Put your idle assets to work.
        </span>
          <s.StartEarningButton href="https://app.harvest.finance" rel="norefferer" target="_blank">
            <span>START EARNING</span>
            <FontAwesomeIcon icon={faArrowRight} color='black' />
          </s.StartEarningButton>

          {/* Header images for mobile & desktop */}
          <s.HeaderImage />

          {/* Harvest DexBadge Container */}
          <s.DexBadgeContainer>
            <s.DexBadgeGroup>
              <DexBadge icon={dexUniswapIcon} text="Uniswap" className="mobile:left-[-41px] mobile:top-[143px] md2:left-[-48px] md2:top-[168px]" />
              <DexBadge icon={dexCurveIcon} text="Curve" className="mobile:left-[-19px] mobile:top-[76px] md2:left-[-22px] md2:top-[90px]" />
              <DexBadge icon={dexStablecoinsIcon} text="Stablecoins" className="mobile:left-[56px] mobile:top-[16px] md2:left-[66px] md2:top-[19px]" />
              <DexBadge icon={dexSushiIcon} text="Sushiswap" className="mobile:left-[184px] mobile:top-[47px] md2:left-[217px] md2:top-[55px]" />
              <DexBadge icon={dexEthereumIcon} text="Ethereum" className="mobile:left-[214px] mobile:top-[98px] md2:left-[252px] md2:top-[115px]" />
              <DexBadge icon={dexBalancerIcon} text="Balancer" className="mobile:left-[217px] mobile:top-[159px] md2:left-[256px] md2:top-[187px]" />
              <DexBadge icon={dexKyberIcon} text="Kyber" className="mobile:left-[190px] mobile:top-[210px] md2:left-[224px] md2:top-[247px]" />
              <DexBadge icon={dexCompoundIcon} text="Compound" className="mobile:left-[-19px] mobile:top-[209px] md2:left-[-22px] md2:top-[246px]" />
              <img src={uniswapVector} alt="" className="absolute mobile:left-[40px] mobile:top-[127px] md2:left-[47px] md2:top-[150px]" />
              <img src={curveVector} alt="" className="absolute mobile:left-[68px] mobile:top-[87px] md2:left-[80px] md2:top-[103px]" />
              <img src={stablecoinsVector} alt="" className="absolute mobile:left-[96px] mobile:top-[56px] md2:left-[113px] md2:top-[66px]" />
              <img src={sushiswapVector} alt="" className="absolute mobile:left-[157px] mobile:top-[64px] md2:left-[184px] md2:top-[75px]" />
              <img src={ethereumVector} alt="" className="absolute mobile:left-[195px] mobile:top-[112px] md2:left-[229px] md2:top-[132px]" />
              <img src={balancerVector} alt="" className="absolute mobile:left-[193px] mobile:top-[166px] md2:left-[227px] md2:top-[196px]" />
              <img src={kyberVector} alt="" className="absolute mobile:left-[165px] mobile:top-[207px] md2:left-[194px] md2:top-[244px]" />
              <img src={compoundVector} alt="" className="absolute mobile:left-[36px] mobile:top-[184px] md2:left-[42px] md2:top-[217px]" />
              <img src={downtripleVector} alt="" className="absolute mobile:left-[132px] mobile:top-[222px] md2:left-[140px] md2:top-[261px]" />
              <s.HarvestIcon>
                <img src={harvestIcon} className='w-[50px] cursor-pointer mx-2' alt='' />
                <span className='font-semibold text-center text-[13px]'>Harvest</span>
              </s.HarvestIcon>
              <s.HarvestMoneyIcon>
                <div className='bg-[#E5EEED] rounded-full flex justify-center items-center p-2'>
                  <img src={harvestMoneyIcon} className='cursor-pointer p-2' alt='' />
                </div>
              </s.HarvestMoneyIcon>
            </s.DexBadgeGroup>
          </s.DexBadgeContainer>
        </s.FirstSection>
      </div>

      {/* Sponsorships */}
      <s.SectionWrapper>
        <s.SponsorshipsContainer>
          <s.Sponsorship>
            <div className='bg-cover bg-repeat-round mobile:bg-mobBancorLogo md2:bg-bancorLogo mobile:w-[25px] mobile:h-[39px] md2:w-[170px] md2:h-[55px]' />
          </s.Sponsorship>
          <s.Sponsorship>
            <div className='bg-cover bg-repeat-round mobile:bg-mobBinanceLogo md2:bg-binanceLogo mobile:w-[42px] mobile:h-[43px] md2:w-[170px] md2:h-[34px]' />
          </s.Sponsorship>
          <s.Sponsorship>
            <div className='bg-cover bg-repeat-round mobile:bg-mobCoinbaseLogo md2:bg-coinbaseLogo mobile:w-[42px] mobile:h-[42px] md2:w-[170px] md2:h-[34px]' />
          </s.Sponsorship>
          <s.Sponsorship>
            <div className='bg-cover bg-repeat-round mobile:bg-mobCryptoLogo md2:bg-cryptoLogo mobile:w-[35px] mobile:h-[40px] md2:w-[183px] md2:h-[41px]' />
          </s.Sponsorship>
        </s.SponsorshipsContainer>
      </s.SectionWrapper>

      <s.SectionWrapper>
        {/* Earn Extra Yield Chart */}
        <s.EEYContainer>

          {/* Chart */}
          <s.EEYChartContainer>
            <img src={apyVector} className='mobile:w-[355px] mobile:h-[355px] miniipad:w-[460px] miniipad:h-[460px] mt-5 z-1' alt='' />

            <s.EEYChartContent>
              {/* Top two labels */}
              <div className='flex justify-between mt-5'>
                <EEYChartLabel imgUrl={yieldHarvestIcon1} text="Yield without Harvest" />
                <EEYChartLabel imgUrl={yieldHarvestIcon2} text="Yield with Harvest" />
              </div>

              {/* Three vertical charts */}
              <s.ThreeVerticalChartsContainer>
                <s.SmallVerticalChart>
                  <span className='text-[18px] text-[#888E8F] leading-[21px] mb-3'>APY</span>
                </s.SmallVerticalChart>

                <s.TallVerticalChart>
                  <span className='text-[18px] text-[#888E8F] leading-[21px] mb-3'>APY</span>
                </s.TallVerticalChart>

                <s.SmallVerticalChart>
                  <span className='text-[18px] text-[#888E8F] leading-[21px] mb-3'>APY</span>
                </s.SmallVerticalChart>

                <span className="self-start pt-3 mobile:text-base miniipad:text-[20px]">Liquidity Provision</span>
                <span className="self-start pt-3 mobile:text-base miniipad:text-[20px]">Lending</span>
                <span className="self-start pt-3 mobile:text-base miniipad:text-[20px]">Staking</span>
              </s.ThreeVerticalChartsContainer>
            </s.EEYChartContent>
          </s.EEYChartContainer>

          {/* Earn Extra Yield Features */}
          <div className='flex flex-col mt-4'>
            <s.EEYTitle>EARN EXTRA YIELD</s.EEYTitle>
            <s.EEYDescription>Let Harvest do the hard work.</s.EEYDescription>
            <div className='flex flex-col mt-4 mobile:gap-2 miniipad:gap-5'>
              {
                advantageList.map((advantage) => (
                  <EEYFeature key={advantage.title} imgUrl={advantage.logo} text={advantage.title} />
                ))
              }
            </div>
          </div>

        </s.EEYContainer>

      </s.SectionWrapper>

      <s.SectionWrapper>
        <div className='flex justify-center items-center mx-auto my-[7vh] border border-transparent overflow-hidden rounded-[60px] w-full h-fit'>
          {/* <img src={playBtn} className='cursor-pointer' alt=''/> */}
          <ReactPlayer 
            url='https://www.youtube.com/embed/9kxPiPj9sFc?autoplay=1'
            controls 
            playing
            light={videoLight}
            width="100%"
            height="46vw" />
        </div>
      </s.SectionWrapper>

      <s.SectionWrapper>
        {/* Harvest Ecosystem */}
        <div className="flex mobile:flex-col miniipad:flex-row mobile:gap-6 miniipad:0 justify-between">

          <div className="mobile:text-center miniipad:text-left">
            <p className='mobile:text-[32px] mobile:leading-[90px] miniipad:text-[66px] font-bold miniipad:leading-[72px] mobile:w-full miniipad:w-[200px]'>
              HARVEST ECOSYSTEM
            </p>
            <p className='miniipad:text-[28px] text-[#888E8F] miniipad:leading-[28px] mobile:mb-0 miniipad:mb-[20px]'>
              30+ Trusted Platforms
            </p>
            <button className='mobile:hidden miniipad:flex justify-between items-center mt-5 bg-yellow-gradient rounded-[10px] leading-[19px] text-[16px] font-medium w-[240px] p-[22px]' type='button'>
              <span>START EARNING</span>
              <FontAwesomeIcon icon={faArrowRight} color='black' />
            </button>
          </div>

          <div className="flex flex-wrap mobile:gap-4 miniipad:gap-6 justify-center mobile:w-full miniipad:w-[720px]">
            {platformList.map((platform, index) => {
              if (index === 10 && screenWidth < 1170) return null;

              const keyStr = platform.title + index
              if (index === 3 || index === 8) {
                return screenWidth > 1170 ? <div key={keyStr} className="w-[5px] mx-[-10px]" /> : null;
              }
              return (
                /* eslint-disable react/jsx-props-no-spreading */
                <PlatformTag key={keyStr} {...platform} href="" />
              )
            })}
          </div>

          <button className='mobile:flex miniipad:hidden justify-between items-center mt-5 bg-yellow-gradient rounded-[10px] leading-[19px] text-[16px] font-medium w-[240px] p-[22px] mx-auto' type='button'>
            <span>START EARNING</span>
            <FontAwesomeIcon icon={faArrowRight} color='black' />
          </button>
        </div>

      </s.SectionWrapper>

      <s.SectionWrapper>
        {/* Audited by */}
        <div className='flex flex-col justify-between items-center mobile:mt-[30px] miniipad:mt-[50px]'>
          <span className='font-bold mobile:text-[14px] miniipad:text-[18px] leading-[30px]'>AUDITED BY</span>
          <div className='flex flex-wrap w-full justify-between items-center my-[30px]'>
            <a href="https://github.com/harvest-finance/harvest/blob/master/audits/LeastAuthority-Harvest.pdf" target="_blank" rel="noreferrer">
              <img src={least} className='cursor-pointer mobile:w-[156px] mobile:h-[45px] miniipad:w-[242px] miniipad:h-[49px]' alt='' />
            </a>
            <a href="https://github.com/harvest-finance/harvest/blob/master/audits/Haechi-Harvest.pdf" target="_blank" rel="noreferrer">
              <img src={haechi} className='cursor-pointer mobile:w-[156px] mobile:h-[45px] miniipad:w-[192px] miniipad:h-[40px]' alt='' />
            </a>
            <a href="https://github.com/harvest-finance/harvest/blob/master/audits/PeckShield-Harvest.pdf" target="_blank" rel="noreferrer">
              <img src={peckshield} className='cursor-pointer mobile:w-[156px] mobile:h-[45px] miniipad:w-[199px] miniipad:h-[56px]' alt='' />
            </a>
            <a href="https://github.com/harvest-finance/harvest/blob/master/audits/CertiK-Harvest.pdf" target="_blank" rel="noreferrer">
              <img src={certik} className='cursor-pointer mobile:w-[156px] mobile:h-[45px] miniipad:w-[206px] miniipad:h-[52px]' alt='' />
            </a>
          </div>
        </div>
      </s.SectionWrapper>

      <s.SectionWrapper>
        {/* Explorer */}
        <div className='flex flex-wrap justify-center items-center mobile:gap-4 miniipad:gap-10 text-white'>
          <ExplorerFarm order={0} iconUrl={farmTractor} title="FARM TOKEN" description="$FARM is the heart of Harvest. It allows you to capitalize on the growth and success of our platform." btnLabel="Explorer FARM" target="https://harvest-finance.gitbook.io/harvest-finance/general-info/what-do-we-do/profit-share-pool-and-farm-tokenomics" />
          <ExplorerFarm order={1} iconUrl={farmBank} title="CONTRIBUTE AND EARN" description="Harvest is platform made for and run by the community. Join us on this adventure and find your place!" btnLabel="Explorer Opportunites" target="https://harvest-finance.gitbook.io/harvest-finance/general-info/what-do-we-do/profit-share-pool-and-farm-tokenomics" />
        </div>
      </s.SectionWrapper>

      <s.SectionWrapper>
        {/* Social icons */}
        <div className="flex flex-wrap justify-center items-center mobile:gap-4 mobile:max-w-[350px] md2:max-w-[1000px] mx-auto miniipad:gap-10 mobile:mt-[30px] miniipad:mt-[100px] z-10">
          <SocialTag logo={twitter} title="Twitter" href="https://twitter.com/harvest_finance" />
          <SocialTag logo={discord} title="Discord" href="https://discord.com/invite/R5SeTVR" />
          <SocialTag logo={medium} title="Medium" href="https://medium.com/harvest-finance" />
          <SocialTag logo={kakaotalk} title="Kakaotalk" href="https://open.kakao.com/o/g9z8qgDd" />
        </div>
      </s.SectionWrapper>

      {/* Footer */}
      <div className="relative">
        <div className="absolute flex flex-col-reverse w-full mobile:h-[186px] miniipad:h-[332px] rounded-tl-[56px] rounded-tr-[56px] text-white mobile:bg-mob-footer miniipad:bg-footer bg-cover bg-repeat-round mobile:mt-[-60px] pb-3">
          <div className="flex justify-between mobile:mx-4 miniipad:mx-[10vw]">
            <span>All rights reserved. Harvest Finance 2022.</span>
            <div className="flex gap-[30px]">
              {links.map((link) => (
                <a key={link.title} href={link.url} target='_blank' rel='noreferrer' className="hidden miniipad:block">{link.title}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </s.MainContainer>    
  );
}

export default App;
