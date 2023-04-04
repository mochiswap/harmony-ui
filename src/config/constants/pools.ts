import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.hmochi,
    earningToken: tokens.hmochi,
    contractAddress: {
      1666600000: '0xD0Cb3E55449646c9735D53E83EEA5Eb7e97A52Dc', // main chef
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '1',
    sortOrder: 1,
    isFinished: false,
  },
]

export default pools
