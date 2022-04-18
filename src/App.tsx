import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import ReactPlayer from 'react-player/lazy'
import Header from './components/Header'
import PlatformTag from './components/PlatformTag'
import harvestIcon from './assets/images/harvest.png'
import harvestMoneyIcon from './assets/images/harvest-money.png'
import bancorLogo from './assets/images/bancor.png'
import binanceLogo from './assets/images/binance.png'
import coinbaseLogo from './assets/images/coinbase.png'
import cryptoLogo from './assets/images/crypto-com.png'
import apyVector from './assets/images/apy-vector.png'
import autoCompoundIcon from './assets/images/auto-compound.png'
import autoHarvestIcon from './assets/images/auto-harvest.png'
import farmRewardIcon from './assets/images/farm-rewards.png'
import daoRewardIcon from './assets/images/dao-reward.png'
import playBtn from './assets/images/play-btn.png'
import yeildHarvestIcon from './assets/images/black-white.png'
import uniswapIcon from './assets/images/uniswap.png'
import polygonIcon from './assets/images/polygon.png'
import compoundIcon from './assets/images/compound.png'
import bancorIcon from './assets/images/bancor_.png'
import sushiIcon from './assets/images/sushi.png'
import curveIcon from './assets/images/curve.png'
import jarvisIcon from './assets/images/jarvis.png'
import least from './assets/images/least.png'
import haechi from './assets/images/haechi.png'
import peckshield from './assets/images/peckshield.png'
import certik from './assets/images/certik.png'
import farmTractor from './assets/images/farm-tractor.png'
import './App.css';

function App() {
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
  const platformList1 = [
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
  ]

  const platformList2 = [
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
  ]

  const platformList3 = [
    {
      logo: curveIcon,
      title: 'Curve Finance',
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
    <div className='flex flex-col'>
      <Header/>
      <div className='flex ml-[6vw] mt-[10vh]'>
        <div className='flex flex-col'>
          <span className='crypto-title leading-[82px] text-[110px] font-bold'>
            EARN YIELD <br/>
            ON YOUR <br/>
            CRYPTO
          </span>
          <span className='text-[24px] text-[#888E8F] font-normal my-5'>
            Put your idle assets to work.
          </span>
          <button className='flex justify-between items-center yellow-gradient rounded-[10px] leading-[19px] text-[16px] font-medium w-[240px] p-[22px]' type='button'>
            <span>START EARNING</span>
            <FontAwesomeIcon icon={faArrowRight} color='black'/>
          </button>
        </div>
        <div className='relative combination w-[321px] h-[371px] ml-[12vw] mt-[3vh]'>
          <div className='absolute bottom-[160px] right-[120px] flex flex-col justify-center items-center yellow-gradient rounded-[48px] w-[104px] h-[104px]'>
            <img src={harvestIcon} className='w-[50px] cursor-pointer mx-2' alt=''/>
            <span className='font-semibold text-center text-[13px]'>Harvest</span>
          </div>
          <div className='absolute dark-shadow bg-white bottom-[-35px] right-[120px] rounded-full p-2'>
            <div className='bg-[#E5EEED] rounded-full flex justify-center items-center p-2'>
              <img src={harvestMoneyIcon} className='cursor-pointer p-2' alt=''/>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-between items-center mt-[30vh] border-b-[1px] border-[#E9E9E9] mx-[10vw] pb-[5vw]'>
        <img src={bancorLogo} className='cursor-pointer w-[170px] h-[55px]' alt=''/>
        <img src={binanceLogo} className='cursor-pointer w-[170px] h-[34px]' alt=''/>
        <img src={coinbaseLogo} className='cursor-pointer w-[170px] h-[34px]' alt=''/>
        <img src={cryptoLogo} className='cursor-pointer w-[183px] h-[41px]' alt=''/>
      </div>
      <div className='flex mt-[10vh] mx-[10vw]'>
        <div className='relative flex flex-col items-center yellow-gradient rounded-[20px]'>
          <img src={apyVector} className='w-[460px] h-[460px] mt-5 z-1' alt=''/>
          <div className='absolute flex flex-col justify-between h-[100%] pb-10 px-8'>
            <div className='flex gap-5 mt-5'>
              <div className='flex justify-center items-center'>
                <div className='flex w-[24px] h-[24px] dark-gradient rounded-[10px] mr-1'/>
                <span className='text-[14px] leading-[16px] align-center opacity-40'>Yield without Harvest</span>
              </div>
              <div className='flex justify-center items-center'>
                <img src={yeildHarvestIcon} className=' mr-1' alt=''/>
                <span className='text-[14px] leading-[16px] align-center opacity-40'>Yield without Harvest</span>
              </div>
            </div>
            <div className='flex gap-5 justify-between items-end'>
              <div className='flex flex-col w-[70px] mb-[-22px]'>
                <div className='z-0 mb-[-60px] w-[70px] h-[140px] bg-white rounded-[20px] bottom-[130px]'/>
                <div className='flex flex-col z-10  mb-4 dark-gradient h-[192px] rounded-[20px] justify-end items-center'>
                  <span className='text-[18px] text-[#888E8F] leading-[21px] mb-2'>APY</span>
                </div>
                <span className='text-[18px] leading-[21px]'>Liquidity Provision</span>
              </div>
              <div className='flex flex-col w-[70px]'>
                <div className='z-0 mb-[-60px] w-[70px] h-[140px] bg-white rounded-[20px] bottom-[130px]'/>
                <div className='flex flex-col z-10  mb-4 dark-gradient h-[240px] rounded-[20px] justify-end items-center'>
                  <span className='text-[18px] text-[#888E8F] leading-[21px] mb-2'>APY</span>
                </div>
                <span className='text-[18px] leading-[21px]'>Lending</span>
              </div>
              <div className='flex flex-col w-[70px]'>
                <div className='z-0 mb-[-60px] w-[70px] h-[140px] bg-white rounded-[20px] bottom-[130px]'/>
                <div className='flex flex-col z-10  mb-4 dark-gradient h-[192px] rounded-[20px] justify-end items-center'>
                  <span className='text-[18px] text-[#888E8F] leading-[21px] mb-2'>APY</span>
                </div>
                <span className='text-[18px] leading-[21px]'>Staking</span>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col ml-[10vw]'>
          <span className='dark-gradient-color font-bold text-[50px] leading-[92px]'>EARN EXTRA YIELD</span>
          <span className='text-[24px] leading-[28px] text-[#888E8F]'>Let Harvest do the hard work.</span>
          <div className='flex flex-col mt-[5vh] gap-5'>
            {
              advantageList.map((advantage) => (
                <div className='flex items-center' key={advantage.title}>
                  <div className='justify-center items-center bg-[#edae50] bg-opacity-10 rounded-[12px] mr-5'>
                    <img src={advantage.logo} className='p-[15px]' alt=''/>
                  </div>
                  <span className='text-[24px] leading-[28px]'>{advantage.title}</span>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <div className='flex video border-[1px] border-[#E9E9E9] rounded-[20px] justify-center items-center mx-[10vw] mt-[15vh] '>
        <img src={playBtn} className='cursor-pointer' alt=''/>
        <ReactPlayer url='https://www.youtube.com/embed/9kxPiPj9sFc?autoplay=1'></ReactPlayer>
      </div>
      <div className='flex mx-[10vw] mt-[15vh]'>
        <div className='flex flex-col'>
          <span className='dark-gradient-color text-[70px] tont-bold leading-[72px]'>
            HARVEST <br/>
            ECOSYSTEM
          </span>
          <span className='text-[24px] text-[#888E8F] leading-[28px] mt-5'>
            30+ Trusted Platforms
          </span>
          <button className='flex justify-between items-center mt-5 yellow-gradient rounded-[10px] leading-[19px] text-[16px] font-medium w-[240px] p-[22px]' type='button'>
            <span>START EARNING</span>
            <FontAwesomeIcon icon={faArrowRight} color='black'/>
          </button>
        </div>
        <div className='flex flex-1 flex-col items-center'>
          <div className='flex gap-10'>
            {
              platformList1.map((platform) => (
                /* eslint-disable react/jsx-props-no-spreading */
                <PlatformTag key={platform.title} {... platform}/>
              ))
            }
          </div>
          <div className='flex gap-10 mt-[4vh]'>
            {
              platformList2.map((platform) => (
                /* eslint-disable react/jsx-props-no-spreading */
                <PlatformTag key={platform.title} {... platform}/>
              ))
            }
          </div>
          <div className='flex gap-10 mt-[4vh]'>
            {
              platformList3.map((platform) => (
                /* eslint-disable react/jsx-props-no-spreading */
                <PlatformTag key={platform.title} {... platform}/>
              ))
            }
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-between items-center mt-[15vh] mx-[10vw]'>
        <span className='dark-gradient-color font-bold text-[18px] leading-[30px] mb-[2vh]'>AUDITED BY</span>
        <div className='flex w-[100%] justify-between items-center mb-[5vh]'>
          <img src={least} className='cursor-pointer w-[242px] h-[49px]' alt=''/>
          <img src={haechi} className='cursor-pointer w-[192px] h-[40px]' alt=''/>
          <img src={peckshield} className='cursor-pointer w-[199px] h-[56px]' alt=''/>
          <img src={certik} className='cursor-pointer w-[206px] h-[52px]' alt=''/>
        </div>
      </div>
      <div className='flex mx-[10vh]'>
        <div className='flex flex-col justify-center'>
          <div className='flex justify-center items-center w-[68px] h-[68px] rounded-full'>
            <img src={farmTractor} className='p-[15px]' alt=''/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
