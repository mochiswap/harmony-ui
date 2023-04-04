import { ChainId, Token } from '@pancakeswap/sdk'

export const CAKE: { [chainId: number]: Token } = {
  [ChainId.MAINNET]: new Token(
    ChainId.MAINNET,
    '0x691f37653f2fBed9063fEBB1A7f54BC5C40bEd8C',
    18,
    'hMOCHI',
    'MochiSwap Token',
  )
}

// export const HMOCHI: { [chainId: number]: Token } = {
//   [ChainId.MAINNET]: new Token(
//     ChainId.MAINNET,
//     '0x691f37653f2fBed9063fEBB1A7f54BC5C40bEd8C',
//     18,
//     'hMOCHI',
//     'MochiSwap Token',
//   )
// }

export const BUSD: { [chainId: number]: Token } = {
  [ChainId.MAINNET]: new Token(
    ChainId.MAINNET,
    '0xE176EBE47d621b984a73036B9DA5d834411ef734',
    18,
    'BUSD',
    'Binance USD',
  )
}

export const USDT = new Token(ChainId.MAINNET, '0x3C2B8Be99c50593081EAA2A724F0B8285F5aba8f', 18, 'USDT', 'Tether USD')
// export const BTCB = new Token(ChainId.MAINNET, '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c', 18, 'BTCB', 'Binance BTC')

// export const UST = new Token(
//   ChainId.MAINNET,
//   '0x23396cF899Ca06c4472205fC903bDB4de249D6fC',
//   18,
//   'UST',
//   'Wrapped UST Token',
// )

// export const ETH = new Token(
//   ChainId.MAINNET,
//   '0x6983D1E6DEf3690C4d616b13597A09e6193EA013',
//   18,
//   '1ETH',
//   'Ethereum Token bridged from Ethereum',
// )

export const WONE = new Token(
  ChainId.MAINNET,
  '0xcF664087a5bB0237a0BAd6742852ec6c8d69A27a',
  18,
  'WONE',
  'Wrapped ONE',
)

export const HMOCHI = new Token(
  ChainId.MAINNET,
  '0x691f37653f2fBed9063fEBB1A7f54BC5C40bEd8C',
  18,
  'hMOCHI',
  'MochiSwap Token',
)

export const DAI = new Token(
  ChainId.MAINNET, 
  '0xEf977d2f931C1978Db5F6747666fa1eACB0d0339', 
  18, 
  'DAI', 
  'Dai Stablecoin'
)

export const USDC = new Token(
  ChainId.MAINNET,
  '0x985458e523db3d53125813ed68c274899e9dfab4',
  6,
  'USDC',
  'USDC Coin',
)

const tokens = {
  hmochi: {
    symbol: 'hMOCHI',
    address: {
      1666600000: '0x691f37653f2fBed9063fEBB1A7f54BC5C40bEd8C',
    },
    decimals: 18,
    projectLink: 'https://mochiswap.io/',
  },
  oldhmochi: {
    symbol: 'hMOCHI',
    address: {
      1666600000: '0x0dD740Db89B9fDA3Baadf7396DdAD702b6E8D6f5',
    },
    decimals: 18,
    projectLink: 'https://mochiswap.io/',
  },
  xmochi: {
    symbol: 'XMOCHI',
    address: {
      1666600000: '0x0dD740Db89B9fDA3Baadf7396DdAD702b6E8D6f5',
    },
    decimals: 18,
    projectLink: 'https://mochiswap.io/',
  },
  jewel: {
    symbol: 'JEWEL',
    address: {
      1666600000: '0x72cb10c6bfa5624dd07ef608027e366bd690048f',
    },
    decimals: 18,
    projectLink: 'https://defikingdoms.com/',
  },
  smug: {
    symbol: 'SMUG',
    address: {
      1666600000: '0x44afdbe2cb42cc18759159f7e383afb0ca8e57ad',
    },
    decimals: 9,
    projectLink: 'https://smugdoge.com/',
  },
  bnb: {
    symbol: 'bscBNB',
    address: {
      1666600000: '0xb1f6E61E1e113625593a22fa6aa94F8052bc39E0',
    },
    decimals: 18,
    projectLink: 'https://mochiswap.io/',
  },
  bscbnb: {
    symbol: 'bscBNB',
    address: {
      1666600000: '0xb1f6E61E1e113625593a22fa6aa94F8052bc39E0',
    },
    decimals: 18,
    projectLink: 'https://mochiswap.io/',
  },
  kiba: {
    symbol: 'KIBA',
    address: {
      1666600000: '0x60b4568120471bbff3dec520ba6609def89001c3',
    },
    decimals: 9,
    projectLink: 'https://mochiswap.io/',
  },
  sushi: {
    symbol: 'SUSHI',
    address: {
      1666600000: '0xBEC775Cb42AbFa4288dE81F387a9b1A3c4Bc552A',
    },
    decimals: 18,
    projectLink: 'https://mochiswap.io/',
  },
  wone: {
    symbol: 'WONE',
    address: {
      1666600000: '0xcF664087a5bB0237a0BAd6742852ec6c8d69A27a',
    },
    decimals: 18,
    projectLink: 'https://mochiswap.io/',
  },
  one: {
    symbol: 'ONE',
    address: {
      1666600000: '0xcF664087a5bB0237a0BAd6742852ec6c8d69A27a',
    },
    decimals: 18,
    projectLink: 'https://mochiswap.io/',
  },
  busd: {
    symbol: 'BUSD',
    address: {
      1666600000: '0xE176EBE47d621b984a73036B9DA5d834411ef734',
    },
    decimals: 18,
    projectLink: 'https://mochiswap.io/',
  },
  bmochi: {
    symbol: 'bMOCHI',
    address: {
      1666600000: '0x865b568f24f0a17dba3e358b24b0c35659b1f25a',
    },
    decimals: 18,
    projectLink: 'https://mochiswap.io/',
  },
  apesox: {
    symbol: 'APESOX',
    address: {
      1666600000: '0x53051d5545745F600232a885a65479cA832198fb',
    },
    decimals: 18,
    projectLink: 'https://mochiswap.io/',
  },
  eth: {
    symbol: 'ETH',
    address: {
      1666600000: '0x6983D1E6DEf3690C4d616b13597A09e6193EA013',
    },
    decimals: 18,
    projectLink: 'https://mochiswap.io/',
  },
  usdt: {
    symbol: 'USDT',
    address: {
      1666600000: '0x3C2B8Be99c50593081EAA2A724F0B8285F5aba8f',
    },
    decimals: 18,
    projectLink: 'https://mochiswap.io/',
  },
  usdc: {
    symbol: 'USDC',
    address: {
      1666600000: '0x985458e523db3d53125813ed68c274899e9dfab4',
    },
    decimals: 18,
    projectLink: 'https://mochiswap.io/',
  },
  doge: {
    symbol: 'DOGE',
    address: {
      1666600000: '0xF155E1a57DB0Ca820aE37Ab4050e0e4C7cFcEcd0',
    },
    decimals: 18,
    projectLink: 'https://mochiswap.io/',
  },
  bscbusd: {
    symbol: 'BSCBUSD',
    address: {
      1666600000: '0x0aB43550A6915F9f67d0c454C2E90385E6497EaA',
    },
    decimals: 18,
    projectLink: 'https://mochiswap.io/',
  },
  onemoon: {
    symbol: 'ONEMOON',
    address: {
      1666600000: '0xCB35e4945c7F463c5CCBE3BF9f0389ab9321248F',
    },
    decimals: 9,
    projectLink: 'https://onemoon.mochiswap.io/',
  },
  safemoon: {
    symbol: 'SAFEMOON',
    address: {
      1666600000: '0x58c5E26fcc4d1d442396D33b58af31549C64d22F',
    },
    decimals: 9,
    projectLink: 'https://onemoon.mochiswap.io/',
  },
  freyala: {
    symbol: 'XYA',
    address: {
      1666600000: '0x9b68bf4bf89c115c721105eaf6bd5164afcc51e4',
    },
    decimals: 18,
    projectLink: 'https://onemoon.mochiswap.io/',
  },
  rot: {
    symbol: '1ROT',
    address: {
      1666600000: '0xFd2a8F8cF7CFFeA4a613F1DFf39b22881D4a1f92',
    },
    decimals: 18,
    projectLink: 'https://onemoon.mochiswap.io/',
  },
  viper: {
    symbol: '1ROT',
    address: {
      1666600000: '0xEa589E93Ff18b1a1F1e9BaC7EF3E86Ab62addc79',
    },
    decimals: 18,
    projectLink: 'https://onemoon.mochiswap.io/',
  },
  dsla: {
    symbol: '1DSLA',
    address: {
      1666600000: '0x34704c70e9eC9fB9A921da6DAAD7D3e19f43c734',
    },
    decimals: 18,
    projectLink: 'https://onemoon.mochiswap.io/',
  },
  btc: {
    symbol: 'WBTC',
    address: {
      1666600000: '0x3095c7557bCb296ccc6e363DE01b760bA031F2d9',
    },
    decimals: 8,
    projectLink: 'https://onemoon.mochiswap.io/',
  },
  floki: {
    symbol: 'FLOKI',
    address: {
      1666600000: '0x24b6179e4062ed9baeace0e6081dbd55b6072380',
    },
    decimals: 9,
    projectLink: 'https://flokione.com/',
  },
  ape: {
    symbol: 'APE',
    address: {
      1666600000: '0xd3a50c0dce15c12fe64941ffd2b864e887c9b9e1',
    },
    decimals: 9,
    projectLink: 'https://harmonape.com/',
  },
  dai: {
    symbol: 'DAI',
    address: {
      1666600000: '0xEf977d2f931C1978Db5F6747666fa1eACB0d0339',
    },
    decimals: 18,
    projectLink: 'https://harmonape.com/',
  }
}

export default tokens
