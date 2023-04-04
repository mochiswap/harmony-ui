import BigNumber from 'bignumber.js'
import React from 'react'
import styled from 'styled-components'
import { Flex, Text, Box } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { Pool } from 'state/types'
import { BIG_ZERO } from 'utils/bigNumber'
import SwapApprovalAction from './SwapApprovalAction'
import SwapActions from './SwapActions'
import { useCheckSwapApprovalStatus } from '../../hooks/useCheckSwapApprovalStatus'
import { SwapCardActionsProps } from '../types'

const InlineText = styled(Text)`
  display: inline;
`

const SwapCardActions: React.FC<SwapCardActionsProps> = ({ 
  oldMochiTokenAddress,
  oldMochiTokenBalance,
  bMochiTokenAddress,
  bMochiTokenBalance,
  isLoading,
}) => {
  // const { stakingToken, userData } = pool
  const { t } = useTranslation()

  // lets get the users balance of the burn token - old mochi

  const { isSwapApproved, setLastUpdated } = useCheckSwapApprovalStatus()
  
  console.log('isSwapApproved',isSwapApproved)
  return (
    <Flex flexDirection="column">
      <Flex flexDirection="column">
        {/* <Box display="inline">
          <InlineText
            color={accountHasSwappableTokens ? 'secondary' : 'textSubtle'}
            textTransform="uppercase"
            bold
            fontSize="12px"
          >
            {accountHasSharesStaked ? stakingToken.symbol : t('Stake')}{' '}
          </InlineText>
          <InlineText
            color={accountHasSharesStaked ? 'textSubtle' : 'secondary'}
            textTransform="uppercase"
            bold
            fontSize="12px"
          >
            {accountHasSharesStaked ? t('Staked (compounding)') : `${stakingToken.symbol}`}
          </InlineText>
        </Box> */}
        {isSwapApproved ? (
          <SwapActions
            oldMochiTokenAddress={oldMochiTokenAddress}
            oldMochiTokenBalance={oldMochiTokenBalance}
            bMochiTokenAddress={bMochiTokenAddress}
            bMochiTokenBalance={bMochiTokenBalance}
            isLoading={!isSwapApproved}
          />
        ) : (
          <SwapApprovalAction 
            isLoading={isLoading} 
          />
        )}
      </Flex>
    </Flex>
  )
}

export default SwapCardActions
