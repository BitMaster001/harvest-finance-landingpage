module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      backgroundImage: {
        'dark-gradient': 'radial-gradient(81.9% 81.9% at 50% 18.1%, #2D2D2D 0%, #000000 100%)',
        'yellow-gradient': 'radial-gradient(81.9% 81.9% at 50% 18.1%, #FCDC67 0%, #EDAE50 100%)',
        'header': 'url("./assets/images/header/header.png")',
        'mob-header': 'url("./assets/images/header/mobHeader.png")',

        'mobBancorLogo': 'url("./assets/images/sponsorshiplogos/mob_bancor.png")',
        'mobBinanceLogo': 'url("./assets/images/sponsorshiplogos/mob_binance.png")',
        'mobCoinbaseLogo': 'url("./assets/images/sponsorshiplogos/mob_coinbase.png")',
        'mobCryptoLogo': 'url("./assets/images/sponsorshiplogos/mob_crypto-com.png")',
        'bancorLogo': 'url("./assets/images/sponsorshiplogos/bancor.png")',
        'binanceLogo': 'url("./assets/images/sponsorshiplogos/binance.png")',
        'coinbaseLogo': 'url("./assets/images/sponsorshiplogos/coinbase.png")',
        'cryptoLogo': 'url("./assets/images/sponsorshiplogos/crypto-com.png")',

        'chart1': 'url("./assets/images/chart/chart1.png")',
        'chart2': 'url("./assets/images/chart/chart2.png")',
        'farm': 'url("./assets/images/farm.png")',
        'farm-harvest': 'url("./assets/images/farm-harvest.png")',
        'footer': 'url("./assets/images/footer/footer.png")',
        'mob-footer': 'url("./assets/images/footer/mob_footer.png")',
      },
      boxShadow: {
        'toggle-button': '0px 4px 4px rgba(0, 0, 0, 0.05)',
        'dex-badge': '2px 4px 10px rgba(24, 24, 24, 0.1)',
        'harvest-badges': '0px 104px 224px rgba(0, 0, 0, 0.05)',
        'square-tag': '0px 4px 4px rgba(0, 0, 0, 0.05)',
        'square-tag-hover': '0px 64px 74px rgba(0, 0, 0, 0.15)',
      }
    },
    screens: {
      mobile: '160px',
      tablet: '500px',
      md1: '768px',
      md2: '925px',
      md3: '1000px',
      miniipad: '1170px',
      ipad: '1200px',
      desktop: '1300px',
    },
  },
  plugins: [],
}
