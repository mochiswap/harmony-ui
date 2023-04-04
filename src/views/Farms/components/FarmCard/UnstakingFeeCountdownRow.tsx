import React from 'react'
import { Flex, Text, TooltipText, useTooltip } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { useWeb3React } from '@web3-react/core'
import { useFarms } from 'state/farms/hooks'
import BigNumber from 'bignumber.js'
import { Farm } from 'state/types'
import { useBlock } from 'state/block/hooks'
import useWithdrawalFeeTimer from '../../hooks/useWithdrawalFeeTimer'
import WithdrawalFeeTimer from './WithdrawalFeeTimer'

interface UnstakingFeeCountdownRowProps {
  isTableVariant?: boolean
  userData: any
}

export interface FarmWithStakedValue extends Farm {
  apr?: number
  lpRewardsApr?: number
  liquidity?: BigNumber
  userData?: any
}

const UnstakingFeeCountdownRow: React.FC<UnstakingFeeCountdownRowProps> = ({ isTableVariant, userData }) => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const { currentBlock } = useBlock()

  const lastDepositedBlock =  userData.lastWithdraw

  // BSC Blocks = 1 day = 28800 // 3 sec // 20 per min
  // fee structure for "early" LP Withdrawal
  // 25% same block flash loan protection
  // 5% less than 1 day
  // 4% more than 1 day less than 2 days
  // 3% more than 2 days less than 3 days
  // 1% more than 3 days less than 7 days
  // 0.5% more than 7 days less than 14 days
  // 0.1% more than 14 days
  // blockDeltaStartStage = [0,     1,     28801, 57601, 86401,  115201, 201601, 403201];
  const blockDeltaEndStage = [28800, 57600, 86400, 115200, 201600, 403200];

  let currentFee = 5;
  let withdrawalFeePeriod = 1;
  let withdrawText = 'withdrawal fee in first day'
  const blockDelta = currentBlock - lastDepositedBlock
  let blocksRemaining = 0
  if (blockDelta > 0 && blockDelta <= blockDeltaEndStage[0]) {
    blocksRemaining = blockDeltaEndStage[0] - blockDelta
    withdrawalFeePeriod = 2
    withdrawText = `unstaking fee for ${blocksRemaining} blocks`
    currentFee = 4
  } else if (blockDelta > 28801 && blockDelta <= blockDeltaEndStage[1]){
    blocksRemaining = blockDeltaEndStage[1] - blockDelta
    withdrawText = `unstaking fee for ${blocksRemaining} blocks`
    withdrawalFeePeriod = 3
    currentFee = 3
  } else if (blockDelta > 57601 && blockDelta <= blockDeltaEndStage[2]){
    blocksRemaining = blockDeltaEndStage[2] - blockDelta
    withdrawText = `unstaking fee for ${blocksRemaining} blocks`
    withdrawalFeePeriod = 4
    currentFee = 2
  } else if (blockDelta > 86401 && blockDelta <= blockDeltaEndStage[3]){
    blocksRemaining = blockDeltaEndStage[3] - blockDelta
    withdrawText = `unstaking fee for ${blocksRemaining} blocks`
    withdrawalFeePeriod = 5
    currentFee = 1
  } else if (blockDelta > 115201 && blockDelta <= blockDeltaEndStage[4]){
    blocksRemaining = blockDeltaEndStage[4] - blockDelta
    withdrawText = `unstaking fee for ${blocksRemaining} blocks`
    withdrawalFeePeriod = 6
    currentFee = 1
  } else if (blockDelta > 201601 && blockDelta <= blockDeltaEndStage[5]){
    blocksRemaining = blockDeltaEndStage[5] - blockDelta
    withdrawText = `unstaking fee for ${blocksRemaining} blocks`
    withdrawalFeePeriod = 7
    currentFee = 0.5
  } else {
    withdrawText = `unstaking fee for ${blocksRemaining} blocks`
    withdrawalFeePeriod = 8
    currentFee = 0.1
  }

  const { targetRef, tooltip, tooltipVisible } = useTooltip(
    <>
      <Text bold mb="4px">
        {t('Unstaking fee: %fee%%', { fee: currentFee })}
      </Text>
      <Text>
        <div>25% same block - flash loan protection</div>
        <div> 5% {'<'} 1 day </div>
        <div>4% {'>'} 1 day {'<='} 2 days </div>
        <div>3%{'>'} 2 days {'<='} 3 days </div>
        <div>1% {'>'} 3 days {'<='} 7 days </div>
        <div>0.5% {'>'} 7 days {'<='} 14 days </div>
        <div>0.1% {'>'} 14 days</div>
      </Text>
    </>,
    { placement: 'bottom-start' },
  )

  // const { secondsRemaining, hasUnstakingFee } = useWithdrawalFeeTimer(
  //   parseInt(lastDepositedTime, 10),
  //   userShares,
  //   withdrawalFeePeriod,
  // )

  // The user has made a deposit, but has no fee
  const noFeeToPay = false // lastDepositedTime && !hasUnstakingFee && userShares.gt(0)

  // Show the timer if a user is connected, has deposited, and has an unstaking fee
  const shouldShowTimer = false // account && lastDepositedTime && hasUnstakingFee

  const getRowText = () => {
    if (noFeeToPay) {
      return t('Unstaking Fee').toLowerCase()
    }
    if (shouldShowTimer) {
      return t('unstaking fee until')
    }
    return t(withdrawText)
  }

  return (
    <Flex
      alignItems={isTableVariant ? 'flex-start' : 'center'}
      justifyContent="space-between"
      flexDirection={isTableVariant ? 'column' : 'row'}
    >
      {tooltipVisible && tooltip}
      <TooltipText ref={targetRef} small>
        {noFeeToPay ? '0' : currentFee}% {getRowText()}
      </TooltipText>
      {/* {shouldShowTimer && <WithdrawalFeeTimer secondsRemaining={secondsRemaining} />} */}
    </Flex>
  )
}

export default UnstakingFeeCountdownRow
