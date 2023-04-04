import React from 'react'
import { AutoRenewIcon, Flex, Heading } from '@pancakeswap/uikit'
import orderBy from 'lodash/orderBy'
import { useTeams } from 'state/teams/hooks'
import Page from 'components/Layout/Page'
import { useTranslation } from 'contexts/Localization'
import useTokenBalance from 'hooks/useTokenBalance'
import tokens from 'config/constants/tokens'
import { getAddress } from 'utils/addressHelpers'
import { getFullDisplayBalance } from 'utils/formatBalance'
import { useOldMochi, useUpgradeSwapContract } from 'hooks/useContract'
import TeamHeader from './components/TeamHeader'
import SwapCard from './components/SwapCard'


const TokenMigration: React.FC = () => {
  const bMochiBalance = useTokenBalance(tokens.hmochi.address[1666600000])
  const oldMochiBalance = useTokenBalance(tokens.oldhmochi.address[1666600000])
  
  // console.log('TokenMigration.bMochiBalance',bMochiBalance)
  // console.log('TokenMigration.oldMochiBalance',oldMochiBalance)
  const isSuccess = bMochiBalance.fetchStatus === 'success' && oldMochiBalance.fetchStatus === 'success' 
  const isLoading = !isSuccess

  // console.log('TokenMigration.isLoading', isLoading)
  // debugger; // eslint-disable-line no-debugger
  //
  // Define isLoading here at top;e level
  // YEEESSS
  return (
    <Page>
       <TeamHeader />
       <SwapCard 
        oldMochiTokenAddress={tokens.oldhmochi.address[1666600000]}
        oldMochiTokenBalance={oldMochiBalance.balance} // getFullDisplayBalance(oldMochiBalance.balance, 18, 6)} 
        bMochiTokenAddress={tokens.hmochi.address[1666600000]}
        bMochiTokenBalance={bMochiBalance.balance} // getFullDisplayBalance(bMochiBalance.balance, 18, 6)}
        isLoading={isLoading}
        />
    </Page>
  )
}

export default TokenMigration
