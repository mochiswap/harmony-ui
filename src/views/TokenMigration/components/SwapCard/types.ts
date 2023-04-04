import BigNumber from 'bignumber.js'

export enum EnableStatus {
  ENABLED = 'enabled',
  DISABLED = 'disabled',
  IS_ENABLING = 'is_enabling',
}

export interface SwapActionsProps {
  oldMochiTokenAddress: string
  oldMochiTokenBalance: BigNumber
  bMochiTokenAddress: string
  bMochiTokenBalance: BigNumber
  isLoading: boolean
}

export interface SwapCardActionsProps {
  oldMochiTokenAddress: string
  oldMochiTokenBalance: BigNumber
  bMochiTokenAddress: string
  bMochiTokenBalance: BigNumber
  isLoading: boolean
}

export interface SwapCardProps {
  oldMochiTokenAddress: string
  oldMochiTokenBalance: BigNumber
  bMochiTokenAddress: string
  bMochiTokenBalance: BigNumber
  isLoading: boolean
}

export default EnableStatus
