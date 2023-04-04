import React, { useState } from 'react'
import { Flex, Button, useModal, Skeleton, Heading, PrizeIcon, Text, AutoRenewIcon } from '@pancakeswap/uikit'
import BigNumber from 'bignumber.js'
import { useTranslation } from 'contexts/Localization'
// import { Pool } from 'state/types'
import useToast from 'hooks/useToast'
import styled, { DefaultTheme } from 'styled-components'
import NotEnoughTokensModal from '../NotEnoughTokensModal'

import useUpgradeSwap from '../../hooks/useUpgradeSwap'
// import VaultStakeModal from '../VaultStakeModal'
// import HasSharesActions from './HasSharesActions'
import { SwapActionsProps } from '../types'

const BrokeMessage = styled(Heading).attrs({ as: 'h3' })`
  font-size: 24px;
  padding: 30px;
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 20px;
    color: #fe019a;
  }
`

const RenewWrapper = styled.div`
  margin: auto;
  padding-top: 30px;
  height: 100px;
`

const StyledButton = styled(Button)`
  margin-top: 30px;
`



const SwapActions: React.FC<SwapActionsProps> = ({
  oldMochiTokenAddress,
  oldMochiTokenBalance,
  bMochiTokenAddress,
  bMochiTokenBalance,
  isLoading
}) => {
  // const { stakingToken } = oldMochiTokenAddress
  const { t } = useTranslation()
  const { toastSuccess, toastError } = useToast()
  const [onPresentTokenRequired] = useModal(<NotEnoughTokensModal tokenSymbol="MOCHI(old)" />)
  const { onSwap } = useUpgradeSwap()
  const [pendingTx, setPendingTx] = useState(false)

  const onPresentSwap = async () => {
    setPendingTx(true)
    try {
      // make this all of it.
      await onSwap(oldMochiTokenBalance.toString())
      toastSuccess(
        `${t('Swapped')}!`,
        t('Your old hMOCHI has been upgraded to new hMOCHI!'),
      )
    } catch (e) {
      toastError(
        t('Error'),
        t('Please try again. Confirm the transaction and make sure you are paying enough gas!'),
      )
      console.error(e)
    } finally {
      setPendingTx(false)
    }
  }

  const hasFunds = new BigNumber(oldMochiTokenBalance).gt(0)

  const renderSwapAction = () => {
    return (
      <>
      {hasFunds ? ( 
      
        <StyledButton 
        onClick={new BigNumber(oldMochiTokenBalance).gt(0) ? onPresentSwap : onPresentTokenRequired}   
        variant="primary"
        si="100px" 
        >
          {t('Swap')}
        </StyledButton>
      
      ) : (
          <BrokeMessage>
            All tokens have been swapped!
          </BrokeMessage>
      )}
      </>
    )
  }

  return ( 
    // <Flex flexDirection="column">{isLoading || pendingTx ? <Skeleton width="100%" height="52px" /> : renderSwapAction()}</Flex>
    <Flex flexDirection="column">{isLoading || pendingTx ? <RenewWrapper><AutoRenewIcon width="40px" spin color="currentColor" /></RenewWrapper> : renderSwapAction()}</Flex>
  )
}


export default SwapActions
