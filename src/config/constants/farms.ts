import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
   {
    pid: 0,
    lpSymbol: 'HMOCHI', // Solo thang
    lpAddresses: {
      1666600000: '0x691f37653f2fBed9063fEBB1A7f54BC5C40bEd8C',
    },
    token: tokens.xmochi, // is this because it stakes xMOCHI?
    quoteToken: tokens.usdc,
  },
  {
    pid: 1,
    lpSymbol: 'HMOCHI-ONE',
    lpAddresses: {
      1666600000: '0x890eF2508d507628A6D9a40653A1a5e57851a0aE',
    },
    token: tokens.hmochi,
    quoteToken: tokens.one,
  },
  {
    pid: 2,
    lpSymbol: 'HMOCHI-BUSD',
    lpAddresses: {
      1666600000: '0xfFd19ed55e44F97435675Ff6Bf9aea7B6b515616',
    },
    token: tokens.hmochi,
    quoteToken: tokens.busd,
  },
   // do not touch used to calculate busd
   {
    pid: 3,
    lpSymbol: 'ONE-BUSD',
    lpAddresses: {
      1666600000: '0x46Ac8DdBDf4B16D6312693F8F25798db6f65Bcc1',
    },
    token: tokens.one,
    quoteToken: tokens.busd,
  },
  // 4 ded
  {
    pid: 5,
    lpSymbol: 'FLOKI-HMOCHI',
    lpAddresses: {
      1666600000: '0x3541eb38d21c5e9b68f806eb3eab7f20f20c3794',
    },
    token: tokens.floki,
    quoteToken: tokens.hmochi,
  },
  {
    pid: 6,
    lpSymbol: 'ONEMOON-HMOCHI',
    lpAddresses: {
      1666600000: '0x0dd4a4547b9be310c88265fd8bfc8a3aa38c7654',
    },
    token: tokens.onemoon,
    quoteToken: tokens.hmochi,
  },
  {
    pid: 7,
    lpSymbol: 'BTC-HMOCHI',
    lpAddresses: {
      1666600000: '0xb26334fbfe95d5b942bd61689a29f72b6d6b2375',
    },
    token: tokens.btc,
    quoteToken: tokens.hmochi,
  },
  {
    pid: 8,
    lpSymbol: 'APESOX-HMOCHI',
    lpAddresses: {
      1666600000: '0x3873fe2b149c3382e9fb5bfa7f087d29f463e309',
    },
    token: tokens.apesox,
    quoteToken: tokens.hmochi,
  },
  {
    pid: 9,
    lpSymbol: 'JEWEL-HMOCHI',
    lpAddresses: {
      1666600000: '0x050380a680b8512e591c7987a73ea904b316b632',
    },
    token: tokens.jewel,
    quoteToken: tokens.hmochi,
  },
  {
    pid: 10,
    lpSymbol: 'SMUG-HMOCHI',
    lpAddresses: {
      1666600000: '0xbebe80f4515ef39acbb2c5efbbfa6797af7e8241',
    },
    token: tokens.smug,
    quoteToken: tokens.hmochi,
  },
  {
    pid: 11,
    lpSymbol: 'KIBA-HMOCHI',
    lpAddresses: {
      1666600000: '0x424959169Cf77937139770151DcF691ACFEDfE5d',
    },
    token: tokens.kiba,
    quoteToken: tokens.hmochi,
  },
  {
    pid: 12,
    lpSymbol: 'APE-HMOCHI',
    lpAddresses: {
      1666600000: '0xdf9f0b97f5a7639653e26581fbb20dfb04522f65',
    },
    token: tokens.ape,
    quoteToken: tokens.hmochi,
  },
  {
    pid: 13,
    lpSymbol: 'APE-ONE',
    lpAddresses: {
      1666600000: '0x1cb5acc6f629f10c93e8eb541a8a1e501d800dd0',
    },
    token: tokens.ape,
    quoteToken: tokens.one,
  },
  {
    pid: 14,
    lpSymbol: 'bMOCHI-hMOCHI',
    lpAddresses: {
      1666600000: '0x45e38880a142a7f82c9f853c37bbd34b0b993775',
    },
    token: tokens.bmochi,
    quoteToken: tokens.hmochi,
  },
  {
    pid: 15,
    lpSymbol: 'bMOCHI-ONE',
    lpAddresses: {
      1666600000: '0xb511a32ebce27d9c917670141f7e2f24a916da07',
    },
    token: tokens.bmochi,
    quoteToken: tokens.one,
  },
  {
    pid: 16,
    lpSymbol: 'DAI-BUSD',
    lpAddresses: {
      1666600000: '0x33cae18fbe804c41c8b25fcf3196bba4d9e70597',
    },
    token: tokens.dai,
    quoteToken: tokens.busd,
  },
]

export default farms
